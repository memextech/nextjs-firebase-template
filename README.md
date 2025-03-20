# Firebase Next.js Setup Project

A Next.js application configured for Firebase Hosting, based on the [memex-admin](https://github.com/atlasfutures/memex-admin) repository and following the [Firebase Hosting deployment guide](https://firebase.google.com/docs/hosting/test-preview-deploy).

## Local Development Setup

1. Install Firebase CLI if you haven't already:
   ```
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```
   firebase login
   ```

3. Enable web frameworks preview in the Firebase CLI:
   ```
   firebase experiments:enable webframeworks
   ```

4. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/)

5. Initialize your project:
   ```
   firebase init
   ```
   - Select Hosting and any other Firebase services you need
   - Select your Firebase project
   - Use "hosting" as your public directory
   - Configure as a single-page app: No (since we're using Next.js)
   - Set up automatic builds and deploys with GitHub: No (optional)

6. Set up environment variables:
   ```
   cd hosting
   cp .env.local.sample .env.local
   ```

7. Update the `.env.local` file with your Firebase project configuration from the Firebase Console:
   - Go to Project Settings > General > Your apps > Web app
   - Copy the Firebase configuration values

8. Install dependencies and start the development server:
   ```
   cd hosting
   npm install
   npm run dev
   ```

## Testing Locally with Firebase Emulators

```
firebase emulators:start
```

This will start the Firebase emulators, including the Hosting emulator, which will serve your Next.js app locally.

## Preview Channels

To deploy to a preview channel for testing:

```
firebase hosting:channel:deploy CHANNEL_ID
```

Replace `CHANNEL_ID` with a descriptive name for your preview (e.g., `dev` or `feature-auth`).

## Deploying to Production

When you're ready to deploy to production:

```
firebase deploy --only hosting
```

## Authentication

This project uses Firebase Authentication. To access admin features, users need to have an admin claim added to their account.

## Project Structure

- `/hosting` - Next.js application
  - `/app` - Next.js app directory
    - `/components` - React components
    - `/context` - React context providers
    - `/utils` - Utility functions
  - `firebase.ts` - Firebase configuration


