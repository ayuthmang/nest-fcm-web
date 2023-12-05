import { Module } from '@nestjs/common';
import { FirebaseService } from './firebase.service';
import { FIREBASE_MODULE } from './firebase.constants';
import { ConfigService } from '@nestjs/config';
import { FirebaseCloudMessagingService } from './firebase-cloud-messaging.service';
import * as firebaseAdmin from 'firebase-admin';

@Module({
  providers: [
    {
      provide: FIREBASE_MODULE,
      useFactory(configService: ConfigService) {
        const params = {
          projectId: configService.getOrThrow('FIREBASE_PROJECT_ID'),
          clientEmail: configService.getOrThrow('FIREBASE_CLIENT_EMAIL')
            .firebaseClientEmail,
          credential: firebaseAdmin.credential.cert({
            privateKey: configService
              .getOrThrow('FIREBASE_PRIVATE_KEY')
              .replace(/\\n/g, '\n'),
          }),
        };
        const firebaseApp = firebaseAdmin.initializeApp({ ...params });
        return firebaseApp;
      },
      inject: [ConfigService],
    },
    FirebaseCloudMessagingService,
  ],
})
export class FirebaseModule {}
