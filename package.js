Package.describe({
  summary: 'Hooks for resizing UI elements.',
  version: '0.2.0',
  name: 'clinical:auto-resizing',
  git: 'http://github.com/awatson1978/auto-resizing.git'
});

Package.on_use(function (api) {
  // we want to keep this at 1.1.0.3 as long as possible for backwards compatibility
  // avoid upgrading .versionsFrom() unless it's a release-track wide refactor
  api.versionsFrom('1.1.0.3');

  api.use('meteor-platform');
  api.use('templating');
  api.use('session');

  api.addFiles('lib/resizing.js', 'client');
});
