Package.describe({
  name: 'goltfisch:braintree-client',
  summary: 'Braintree client-Library for Meteor',
  version: '0.1.0',
  git: 'https://github.com/goltfisch/meteor-braintree-client.git'
});

Package.onUse(function (api) {
  api.addFiles('braintree.js', 'client');
});
