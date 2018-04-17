// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyA7AJudz1a8vaf99XIT-stzi1o8BoYpp8A',
    authDomain: 'super-chart.firebaseapp.com',
    databaseURL: 'https://super-chart.firebaseio.com',
    projectId: 'super-chart',
    storageBucket: 'super-chart.appspot.com',
    messagingSenderId: '1042904481164'
  }
};
