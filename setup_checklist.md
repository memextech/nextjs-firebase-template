# Firebase Next.js Setup Checklist

This checklist outlines all the necessary steps to set up and deploy the Firebase Next.js project.

## Firebase Setup

- [ ] Create a new Firebase project in the [Firebase Console](https://console.firebase.google.com/)
- [ ] Enable Firebase Authentication in the Firebase Console
- [ ] Add a web app to your Firebase project
- [ ] Copy Firebase configuration values for environment variables

## Local Environment Setup

- [ ] Install Firebase CLI: `npm install -g firebase-tools`
- [ ] Login to Firebase: `firebase login`
- [ ] Enable web frameworks preview: `firebase experiments:enable webframeworks`
- [ ] Update Firebase project configuration in `.firebaserc` to use your project ID
- [ ] Create `.env.local` file in the `/hosting` directory from the sample
- [ ] Update `.env.local` with your Firebase project configuration values

## Development Environment

- [ ] Install project dependencies: `cd hosting && npm install`
- [ ] Start the development server: `npm run dev`
- [ ] Verify the application runs correctly on `http://localhost:3000`

## Firebase Emulators (Optional)

- [ ] Start Firebase emulators: `firebase emulators:start`
- [ ] Verify the application runs correctly with emulators on `http://localhost:8099`

## Authentication Setup

- [ ] Set up authentication method(s) in Firebase Console (Email/Password, Google, etc.)
- [ ] Create a test user in Firebase Authentication
- [ ] Add admin claims to the test user (if needed for testing admin features)

## Deployment

- [ ] Build the Next.js application: `cd hosting && npm run build`
- [ ] Deploy to a preview channel: `firebase hosting:channel:deploy preview-1`
- [ ] Test the application on the preview URL
- [ ] Deploy to production: `firebase deploy --only hosting`
- [ ] Verify the application on the production URL

## Post-Deployment

- [ ] Set up custom domain (if needed)
- [ ] Configure security rules for Firebase services
- [ ] Set up monitoring and alerts
- [ ] Create additional user accounts as needed