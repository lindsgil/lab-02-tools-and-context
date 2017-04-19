'use strict';

module.exports = exports = {};

function Eater(action, food) {
  this.action = action;
  this.food = food;
}

exports.UltraEater = function(action, food) {
  Eater.call(this, action, food);
  this.isFull = true;
};

exports.SlowEater = function(action, food) {
  Eater.apply(this, [action, food]);
  this.stillEating = true;
};
