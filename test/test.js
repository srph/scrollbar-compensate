var expect = require('chai').expect;
var scrollbar = require('scrollbar-size');
var compensate = require('../');

describe('compensate', () => {
  it('should add a padding to the provided selectors', () => {
    expect(document.head.querySelector('style').length).to.equal(0);

    compensate(['.overlay-enabled', '.overlay-enabled .global-nav']);
    var $style = document.head.querySelector('style');
    expect($style.length).to.equal(1);

    var result = '.overlay-enabled, .overlay-enabled .global-nav ' +
      '{ padding-right: ' + scrollbar + 'px }';
    expect($style.innerHTML).to.equal(result);
  });
});