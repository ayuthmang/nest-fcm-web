# NestJS + Next.js Firebase Cloud Messaging Push Notifications

Summary: this repository contains complete integration of Firebase Cloud Messaging and the web client using Next.js

## Prerequisite

- [Firebase](https://firebase.google.com/) Account
- Node.js v18+
- Some fundamentals knowledge of [NestJS](https://nestjs.com/) and [Next.js](https://nextjs.org/)
- [pnpm](https://pnpm.io/) or any desired package management

## Dev Environment Setup

### Setup Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Add a new project or select existing project
3. On the top left navigation menu, click the cog button then click the "Project settings" link.
4. On the project settings page, navigate the tab control to "Service accounts".
   ![the firebase project settings service accounts page](./docs/firebase-project-settings-service-accounts.png)
5. Click the "Generate new private key" button.
6. The dialog will show and save the file.
   We will use some of these keys later.
