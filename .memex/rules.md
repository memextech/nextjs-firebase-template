# Firebase Next.js Template

## Overview
This template provides a starting point for building Next.js applications with Firebase Authentication and Hosting.

## Key Files
- `hosting/app/firebase.ts` - Firebase initialization
- `hosting/app/components/AdminProtected.tsx` - Auth protection component
- `hosting/app/context/AuthContext.tsx` - Authentication context provider
- `.firebaserc` - Firebase project configuration (update with your project ID)
- `firebase.json` - Firebase services configuration
- `setup_checklist.md` - Step-by-step setup instructions

## Getting Started
1. Follow the steps in `setup_checklist.md`
2. Update Firebase configuration with your project details
3. Run locally with `npm run dev` or `firebase serve`

## Authentication
The template includes Google Authentication. The AdminProtected component is configured to bypass admin checks in development mode.

## Deployment
Deploy to Firebase Hosting using preview channels for testing and the main channel for production.
