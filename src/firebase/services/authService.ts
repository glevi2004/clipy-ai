import { auth, googleProvider, db } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import type { User } from "firebase/auth";

async function ensureUserDocument(
  user: User,
  extra?: Partial<{ displayName: string }>
) {
  const userRef = doc(db, "users", user.uid);
  const snap = await getDoc(userRef);
  const base = {
    uid: user.uid,
    email: user.email ?? null,
    displayName: extra?.displayName ?? user.displayName ?? null,
    photoURL: user.photoURL ?? null,
    providerId: user.providerData[0]?.providerId ?? "password",
    updatedAt: serverTimestamp(),
  };
  if (!snap.exists()) {
    await setDoc(
      userRef,
      { ...base, createdAt: serverTimestamp() },
      { merge: true }
    );
  } else {
    await setDoc(userRef, base, { merge: true });
  }
}

export const registerWithEmail = async (
  email: string,
  password: string,
  displayName?: string
) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  if (displayName) {
    await updateProfile(user, { displayName });
  }
  await ensureUserDocument(user, { displayName });
  return user;
};

export const signInWithEmail = async (email: string, password: string) => {
  const userCredential = await firebaseSignInWithEmailAndPassword(
    auth,
    email,
    password
  );
  await ensureUserDocument(userCredential.user);
  return userCredential.user;
};

export const signInWithGoogle = async () => {
  const userCredential = await signInWithPopup(auth, googleProvider);
  await ensureUserDocument(userCredential.user);
  return userCredential.user;
};

// Backward-compatible exports
export const signUpWithEmailAndPassword = registerWithEmail;
