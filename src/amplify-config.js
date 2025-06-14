// src/amplify-config.js
import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    Cognito: {
      region: process.env.REACT_APP_COGNITO_REGION,
      userPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
      userPoolClientId: process.env.REACT_APP_COGNITO_APP_CLIENT_ID,
      // Only if you're NOT using OAuth, you can omit loginWith here
    }
  }
});
