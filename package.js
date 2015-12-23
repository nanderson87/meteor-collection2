/* global Package */

Package.describe({
  name: "aldeed:collection2",
  summary: "Automatic validation of insert and update operations on the client and server.",
  version: "2.7.1",
  git: "https://github.com/aldeed/meteor-collection2.git"
});

Package.onUse(function(api) {

  api.use('aldeed:simple-schema@1.5.3');
  api.imply('aldeed:simple-schema');

  api.use('underscore@1.0.0');
  api.use('check@1.0.0');
  api.use('mongo@1.0.4');
  api.imply('mongo');
  api.use('minimongo@1.0.0');
  api.use('ejson@1.0.0');
  api.use('raix:eventemitter@0.1.3');

  // Allow us to detect 'insecure'.
  api.use('insecure@1.0.0', {weak: true});
  
  api.addFiles([
    'lib/collection2.js',
    'lib/deny.js',
    'lib/indexing.js'
  ]);
  
  api.export('Collection2');
});

Package.onTest(function(api) {

  api.use('aldeed:collection2');
  api.use('tinytest@1.0.0');
  api.use('test-helpers@1.0.0');
  api.use('underscore@1.0.0');
  api.use('ejson@1.0.0');
  api.use('ordered-dict@1.0.0');
  api.use('random@1.0.0');
  api.use('deps@1.0.0');
  api.use('minimongo@1.0.0');

  api.addFiles([
    'tests/schemas.js',
    'tests/collections.js',
    'tests/pubsub.js',
    'tests/security.js',
    'tests/tests.js',
    'tests/tests-deny.js',
    'tests/tests-indexing.js'
  ]);
});
