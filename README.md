# Clipy AI - AI-Powered Video Generation Platform

Clipy AI is a cutting-edge platform that enables users to create viral, faceless videos using artificial intelligence. Built with modern web technologies, it combines AI script generation with advanced video creation capabilities to automate the content creation process.

## 🚀 Features

### Core Capabilities

- **AI Video Generation**: Create videos using AI with customizable parameters
- **AI Script Writing**: Generate engaging scripts with GPT-4.5 integration
- **Multiple Video Types**: Support for ASMR and POV video styles
- **User Authentication**: Secure login/registration with Firebase Auth
- **Video Management**: Save and organize generated videos
- **Responsive Design**: Modern UI with dark/light theme support

### Video Creation Options

- **Aspect Ratios**: 16:9, 1:1, 9:16
- **Resolutions**: 480p, 720p, 1080p
- **Durations**: 3-12 seconds
- **Camera Settings**: Fixed or dynamic camera movement
- **Safety Features**: Built-in content safety checker

## 🏗️ Architecture

### Frontend Stack

- **Next.js 15.5.2** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **Next Themes** - Dark/light mode support

### Backend & Services

- **Firebase Auth** - User authentication and management
- **Firebase Firestore** - Database for user data and video metadata
- **Firebase Storage** - Video file storage
- **OpenAI API** - GPT-4.5 for script generation
- **FAL AI** - Seedance API for video generation

### Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   ├── (protected)/       # Protected dashboard pages
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── landing/           # Landing page components
│   ├── protected/         # Dashboard components
│   └── ui/                # Base UI components
├── contexts/              # React contexts
├── firebase/              # Firebase configuration and services
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions and constants
└── services/              # Business logic services
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun
- Firebase project
- OpenAI API key
- FAL AI API key

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd clipy-ai
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Variables**
   Create a `.env.local` file in the root directory:

   ```env
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id

   # AI Services
   OPENAI_API_KEY=your_openai_api_key
   FAL_API=your_fal_api_key
   ```

4. **Firebase Setup**

   - Create a Firebase project
   - Enable Authentication (Email/Password and Google)
   - Enable Firestore Database
   - Enable Storage
   - Add your domain to authorized domains

5. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage Guide

### Getting Started

1. **Register/Login**: Create an account or sign in with Google
2. **Navigate to Dashboard**: Access the protected area after authentication
3. **Create Video**: Go to Videos → Create → AI Video

### Creating AI Videos

1. **Select Video Type**

   - **ASMR**: Close-up, macro shots with soft lighting
   - **POV**: First-person perspective with handheld camera feel

2. **Write or Generate Script**

   - Write your own script in the textarea
   - Use the AI Writer button to generate scripts with GPT-4.5

3. **Configure Video Settings**

   - Choose aspect ratio (16:9, 1:1, 9:16)
   - Select resolution (480p, 720p, 1080p)
   - Set duration (3-12 seconds)
   - Toggle camera fixed mode
   - Adjust seed for variation
   - Enable/disable safety checker

4. **Generate Video**
   - Click "Generate Video" to start the process
   - Wait for AI processing (typically 1-3 minutes)
   - Video will be automatically saved to your library

### Dashboard Features

- **Video Library**: View all your generated videos
- **Calendar**: Schedule and plan content
- **Settings**: Manage account and billing
- **Affiliates**: Access affiliate marketing tools

## 🔧 API Endpoints

### Script Generation

```
POST /api/openai/generate-script
```

Generates video scripts using OpenAI GPT-4.5

**Request Body:**

```json
{
  "videoTypeContext": "ASMR style video",
  "videoDuration": "5",
  "userIdeaInput": "Your video idea"
}
```

### Video Generation

```
POST /api/video
```

Creates videos using FAL AI Seedance API

**Request Body:**

```json
{
  "prompt": "Your video prompt",
  "aspect_ratio": "16:9",
  "resolution": "1080p",
  "duration": "5",
  "camera_fixed": true,
  "seed": 42,
  "enable_safety_checker": true
}
```

## 🎨 Customization

### Video Presets

Edit `src/lib/constants/videoPresets.ts` to add new video types:

```typescript
export const VIDEO_TYPE_PRESETS: Record<string, VideoPreset> = {
  your_type: {
    prompt: "Your custom prompt...",
    icon: YourIcon,
  },
};
```

### Styling

- Global styles: `src/app/globals.css`
- Component styles: Tailwind CSS classes
- Theme configuration: `src/components/theme-provider.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

- **Netlify**: Use `npm run build` and deploy `out` folder
- **Firebase Hosting**: Use Firebase CLI
- **Docker**: Create Dockerfile for containerized deployment

## 🔒 Security

- Environment variables for sensitive data
- Firebase security rules for database access
- API key validation and error handling
- User authentication required for protected routes

## 📊 Performance

- Next.js App Router for optimal performance
- Image and video optimization
- Lazy loading for components
- Responsive design for all devices

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is private and proprietary.

## 🆘 Support

For support and questions:

- Check the documentation
- Review the code comments
- Open an issue for bugs
- Contact the development team

---

**Clipy AI** - Create viral videos on autopilot with the power of AI.
