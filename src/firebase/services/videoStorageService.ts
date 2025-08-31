import { storage, db } from "../firebaseConfig";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import {
  collection,
  addDoc,
  query,
  where,
  orderBy,
  getDocs,
  doc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import type { User } from "firebase/auth";

export interface VideoMetadata {
  id?: string;
  userId: string;
  title?: string;
  script: string;
  videoType: string;
  aspectRatio: string;
  resolution: string;
  duration: string;
  seed: number;
  cameraFixed: boolean;
  enableSafetyChecker: boolean;
  originalVideoUrl: string; // Original URL from AI generation
  firebaseStorageUrl: string; // URL from Firebase Storage
  firebaseStoragePath: string; // Path in Firebase Storage
  fileSize: number;
  createdAt: any; // Firestore Timestamp
  updatedAt: any; // Firestore Timestamp
}

export class VideoStorageService {
  private static COLLECTION_NAME = "videos";
  private static STORAGE_PATH = "videos";

  /**
   * Download video from URL and upload to Firebase Storage
   */
  private static async uploadVideoToStorage(
    videoUrl: string,
    fileName: string
  ): Promise<{
    firebaseStorageUrl: string;
    firebaseStoragePath: string;
    fileSize: number;
  }> {
    try {
      // Download video from original URL
      const response = await fetch(videoUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch video: ${response.statusText}`);
      }

      const blob = await response.blob();
      const fileSize = blob.size;

      // Create storage reference
      const storageRef = ref(storage, `${this.STORAGE_PATH}/${fileName}`);

      // Upload to Firebase Storage
      const snapshot = await uploadBytes(storageRef, blob);
      const firebaseStorageUrl = await getDownloadURL(snapshot.ref);

      return {
        firebaseStorageUrl,
        firebaseStoragePath: snapshot.ref.fullPath,
        fileSize,
      };
    } catch (error) {
      console.error("Error uploading video to storage:", error);
      throw new Error("Failed to upload video to Firebase Storage");
    }
  }

  /**
   * Generate a unique filename for the video
   */
  private static generateFileName(
    userId: string,
    videoType: string,
    aspectRatio: string,
    resolution: string,
    duration: string
  ): string {
    const timestamp = Date.now();
    const sanitizedType = videoType.replace(/[^a-zA-Z0-9]/g, "");
    const sanitizedRatio = aspectRatio.replace(":", "x");
    const userPrefix = userId.substring(0, 8); // First 8 chars of user ID

    return `${userPrefix}_${sanitizedType}_${sanitizedRatio}_${resolution}_${duration}s_${timestamp}.mp4`;
  }

  /**
   * Save video to Firebase Storage and metadata to Firestore
   */
  static async saveVideo(
    user: User,
    videoData: {
      originalVideoUrl: string;
      script: string;
      videoType: string;
      aspectRatio: string;
      resolution: string;
      duration: string;
      seed: number;
      cameraFixed: boolean;
      enableSafetyChecker: boolean;
      title?: string;
    }
  ): Promise<string> {
    try {
      // Generate filename
      const fileName = this.generateFileName(
        user.uid,
        videoData.videoType,
        videoData.aspectRatio,
        videoData.resolution,
        videoData.duration
      );

      // Upload video to Firebase Storage
      const { firebaseStorageUrl, firebaseStoragePath, fileSize } =
        await this.uploadVideoToStorage(videoData.originalVideoUrl, fileName);

      // Prepare metadata for Firestore
      const videoMetadata: Omit<VideoMetadata, "id"> = {
        userId: user.uid,
        title: videoData.title || `${videoData.videoType} Video`,
        script: videoData.script,
        videoType: videoData.videoType,
        aspectRatio: videoData.aspectRatio,
        resolution: videoData.resolution,
        duration: videoData.duration,
        seed: videoData.seed,
        cameraFixed: videoData.cameraFixed,
        enableSafetyChecker: videoData.enableSafetyChecker,
        originalVideoUrl: videoData.originalVideoUrl,
        firebaseStorageUrl,
        firebaseStoragePath,
        fileSize,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };

      // Save metadata to Firestore
      const docRef = await addDoc(
        collection(db, this.COLLECTION_NAME),
        videoMetadata
      );

      console.log("Video saved successfully with ID:", docRef.id);
      return docRef.id;
    } catch (error) {
      console.error("Error saving video:", error);
      throw new Error("Failed to save video");
    }
  }

  /**
   * Get all videos for a user
   */
  static async getUserVideos(user: User): Promise<VideoMetadata[]> {
    try {
      const q = query(
        collection(db, this.COLLECTION_NAME),
        where("userId", "==", user.uid),
        orderBy("createdAt", "desc")
      );

      const querySnapshot = await getDocs(q);
      const videos: VideoMetadata[] = [];

      querySnapshot.forEach((doc) => {
        videos.push({
          id: doc.id,
          ...doc.data(),
        } as VideoMetadata);
      });

      return videos;
    } catch (error) {
      console.error("Error fetching user videos:", error);
      throw new Error("Failed to fetch videos");
    }
  }

  /**
   * Delete video from both Storage and Firestore
   */
  static async deleteVideo(
    videoId: string,
    storagePath: string
  ): Promise<void> {
    try {
      // Delete from Firebase Storage
      const storageRef = ref(storage, storagePath);
      await deleteObject(storageRef);

      // Delete from Firestore
      await deleteDoc(doc(db, this.COLLECTION_NAME, videoId));

      console.log("Video deleted successfully");
    } catch (error) {
      console.error("Error deleting video:", error);
      throw new Error("Failed to delete video");
    }
  }

  /**
   * Get video count for a user
   */
  static async getUserVideoCount(user: User): Promise<number> {
    try {
      const videos = await this.getUserVideos(user);
      return videos.length;
    } catch (error) {
      console.error("Error getting video count:", error);
      return 0;
    }
  }
}
