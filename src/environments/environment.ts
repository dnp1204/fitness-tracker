// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCWHzhgP7_DUVFBBsYshgqveQM85BRX_T0',
    authDomain: 'ng-fitness-tracker-42c81.firebaseapp.com',
    databaseURL: 'https://ng-fitness-tracker-42c81.firebaseio.com',
    projectId: 'ng-fitness-tracker-42c81',
    storageBucket: 'ng-fitness-tracker-42c81.appspot.com',
    messagingSenderId: '430815518902'
  }
};
