'use strict';

function lower(str) {
  return String.prototype.toLowerCase.call(str);
}
lower('HI HELLO');

let state = {
  history: [],
  addToHistory: function() {
    Array.prototype.push.apply(this.history, arguments);
  },
};

state.addToHistory('move player', 'pickup item', 'update hp');

let upper = str => String.prototype.toUpperCase.call(str);
upper('hey');

function Eater(action, food) {
  this.action = action;
  this.food = food;
}

function UltraEater(action, food) {
  Eater.call(this, action, food);
  this.isFull = true;
}

let ultraEater = new UltraEater('eating', 'pizza');
