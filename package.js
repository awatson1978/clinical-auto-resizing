Package.describe({
  summary: 'Hooks for resizing UI elements.',
  version: '0.3.2',
  name: 'clinical:auto-resizing',
  git: 'http://github.com/awatson1978/auto-resizing.git'
});

Package.on_use(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use('meteor-platform@1.2.6');
  api.use('session@1.1.7');

  api.addFiles('lib/resizing.js', 'client');
});
