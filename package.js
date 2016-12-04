Package.describe({
  summary: 'Hooks for resizing UI elements.',
  version: '0.3.0',
  name: 'clinical:auto-resizing',
  git: 'http://github.com/awatson1978/auto-resizing.git'
});

Package.on_use(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use('session');

  api.addFiles('lib/resizing.js', 'client');
});
