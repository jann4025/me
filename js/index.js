var root = document.getElementsByTagName('html')[0];
var color = document.querySelectorAll('input[type=color]');

// update the global css var based on the input's hex color value
var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {for (var _iterator = Object.keys(color)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var prop = _step.value;
    var radio = color[prop];
    radio.addEventListener('change', function (ev) {
      root.style.setProperty('--hair-color', ev.target.value);
    });
  }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}