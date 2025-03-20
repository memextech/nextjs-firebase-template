# Firebase Next.js Setup Project

## Overview
Next.js application configured for Firebase Hosting, based on the [memex-admin](https://github.com/atlasfutures/memex-admin) repository.

## Project Structure
- `/hosting` - Next.js application
  - `/app` - Next.js app directory with components, context, and utilities
  - `firebase.ts` - Firebase configuration
- `.firebaserc` - Firebase project configuration
- `firebase.json` - Firebase services configuration
- `setup_checklist.md` - Setup status and remaining tasks

## Key Files
- `hosting/.env.local` - Environment variables (create from .env.local.sample)
- `hosting/app/firebase.ts` - Firebase initialization
- `hosting/app/context/AuthContext.tsx` - Authentication context
- `firebase.json` - Hosting and emulator configuration

## Setup Guide
Follow the [Firebase Hosting deployment guide](https://firebase.google.com/docs/hosting/test-preview-deploy)

## Current Status
Refer to `setup_checklist.md` for the current setup status and remaining tasks to complete the project configuration.