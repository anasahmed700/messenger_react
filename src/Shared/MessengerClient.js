import { MessengerClient } from 'messaging-api-messenger';


// get accessToken from facebook developers website
export const client = new MessengerClient({
  accessToken: 'EAARLfNIV5TMBAG7zF4KQvnjAa1AOk3fm2NGTTJXqYtkDBjWFtkexohi81ZBxCZA25pcFJDyd7LqAauZBbJ3N9x8mhrWVmu1MlOPwFSZAv7zDDwscYDNoowSLHhUMnBeQPjFqVLm6qKBbp7Ra6wqGTyqZAVQR0KrPZA5RjZB2vg4SSvop8WH1wAYJNVT3ZBCz2s9IkdpZB6kQycnBm9KqG4vVj3iTkLMyZByeIZD',
  appId: process.env.APP_ID,
  appSecret: process.env.APP_SECRET,
  skipAppSecretProof: true,
  version: '6.0',
});

// client.sendText("5014327021913292", 'Hello World').then(() => {
//   console.log('sent');
// });