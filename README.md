# Memex Admin

NextJs Admin for Memex Desktop.
Firebase Hosting project setup based on [this guide](https://firebase.google.com/docs/hosting/deploying).

## Setup

1. Enable web frameworks preview in the Firebase CLI: `firebase experiments:enable webframeworks`
1. `cp .env.local.sample .env.local`
2. Set the environment variables in `.env.local` from the Firebase console
2. `npm install`
3. `npm run dev`

## Admin Claims

To access Memex Admin user needs to have an admin claim. See memex-desktop firebase admin codebase for details how to add admin claim to user.



