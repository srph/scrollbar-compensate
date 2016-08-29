var scrollbar = require('scrollbar-size');
var toArray = require ('lodash.toarray');

module.exports = function compensate() {
  var elements = toArray(arguments);

  if ( !elements.length ) {
    throw new Error(
      'You are calling `compensate()` without any argument. ' +
      'You must provide an element!'
    );
  }

  var selectors = elements.join(', ');
  var size = scrollbar() || 0;
  style(selectors + ' { padding-right: ' + px(size)  + '; }');
}

function style(styling) {
  const style = document.createElement('style');
  style.appendChild(document.createTextNode(styling));
  document.head.appendChild(style);
  return style;
}

function px(n) {
  return n + 'px';
}