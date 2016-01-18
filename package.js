Package.describe({
  name: 'hitchcott:ethereumjs-util-browserify',
  version: '0.0.1',
  summary: 'Browserified ethereumjs-util & randombytes',
  git: 'https://github.com/hitchcott/meteor-ethereumjs-util-browserify'
});

Npm.depends({
  "randombytes": "2.0.2",
  "ethereumjs-util": "2.6.0"
});

Package.onUse(function(api) {

  api.use(['cosmos:browserify@0.9.3'], 'client');

  api.addFiles(['client.browserify.js'], 'client');

  api.export('randomBytes', 'client');
  api.export('ethUtils', 'client');

});


