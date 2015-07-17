Package.describe({
  summary: 'Hooks for resizing UI elements.',
  version: '0.1.0',
  name: 'clinical:auto-resizing',
  git: 'http://github.com/awatson1978/clinical-auto-resizing.git'
});

Package.on_use(function (api) {
  api.versionsFrom('1.0');

  api.use('meteor-platform');

  api.addFiles('resizing.js', 'client');
  api.addFiles('resizing.css', 'client');
});
