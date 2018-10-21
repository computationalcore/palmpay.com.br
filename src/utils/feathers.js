import feathers from '@feathersjs/client';

const app = feathers();
// Change to your production ambassador web service
const restClient = feathers.rest('https://ambpay.palmpay.io');

// Configure an Fetch AJAX library with that client. For fetch details see https://facebook.github.io/react-native/docs/network.html
// For rest details see https://docs.feathersjs.com/api/client/rest.html
app.configure(restClient.fetch(window.fetch));

// Configure authentication data to be saved at the browser localstorage (see https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
// For authentication client details see https://docs.feathersjs.com/api/authentication/client.html .
app.configure(feathers.authentication({
  storage: window.localStorage
}));

/**
 * Feathers app with client configuration
 */
export default app;
