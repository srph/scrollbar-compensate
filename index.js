var scrollbar = require('scrollbar-size');

module.exports = function compensate(elements) {
  if (elements == null) {
    throw new Error(
      'You are calling `compensate()` without any argument. ' +
      'You must provide an element!'
    );
  }

  var selectors = elements.join(', ');
  var size = scrollbar() || 0;
  style(selectors + ' { padding-right: ' + size + 'px; }');
}

function style(styling) {
  const style = document.createElement('style');
  style.appendChild(document.createTextNode(styling));
  document.head.appendChild(style);
  return style;
}
