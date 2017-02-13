var path = require('path');
var fs = require('fs');
var adPath = require.resolve('async-define');
var adTemplatePath = path.join(adPath, '../../templates/main.hbs');
var adTemplateFragments = fs.readFileSync(adTemplatePath, 'utf8').split('__placeholder__');
var header = adTemplateFragments[0];
var footer = adTemplateFragments[1];

module.exports = function () {
  return {
    name: 'async-define',
    banner: header,
    footer: footer,
    options: function (opts) {
      opts.format = 'amd';
      return opts;
    }
  };
};
