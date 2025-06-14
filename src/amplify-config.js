// src/amplify-config.js
import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    region: 'ap-south-1', // ✅ update with your region
    userPoolId: 'ap-south-1_XXXXXXX', // ✅ update with your user pool ID
    userPoolClientId: 'XXXXXXXXXXXXXXXXXXXX', // ✅ update with your app client ID
  },
});
