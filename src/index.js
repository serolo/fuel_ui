if (typeof PIXI === 'undefined') {
  console.warn('pixi.js has to be loaded before loading FUELUI');
  return;
}

var core = module.exports = require('./core');

// add core plugins.
core.utils          = require('./utils');

// export FUELUI globally.
global.FUEL_UI = core;
