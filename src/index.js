if (typeof cc === 'undefined' && typeof ccui === 'undefined') {
  console.warn('coco2d-html5.js has to be loaded before loading FUELUI');
  return;
}

var core = module.exports = require('./core');

// add core plugins.
core.utils          = require('./utils');

// export FUELUI globally.
global.fuel_ui = core;
