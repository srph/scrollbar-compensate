# scrollbar-compensate [![npm version](http://img.shields.io/npm/v/scrollbar-compensate.svg?style=flat)](https://npmjs.org/package/scrollbar-compensate)
```
npm i scrollbar-compensate
```
A hack to compensate for scrollbar size for modals

## Problem
Usually, you would set `overflow: hidden` to body when the modal mounts. However, this causes a weird adjustment to the layout (because the scrollbar disappears). This mostly affects Windows/Linux users, and some OSX users that use a mouse (because it forces the scrollbar to appear).

As an example, compare [Semantic UI's Modal](http://semantic-ui.com/modules/modal.html) and [TWBS' Modal](http://getbootstrap.com/javascript/#modals). TWBS solved this by adding a `padding-right` to the `body` when the modal mounts.

## What It Does
It adds an inline-style that adds a `padding-right` to the provided selectors. It appends the following to `head`:

```html
<style>.my-selector, .my-selector-2 .my-nested-selector { padding-right: 15px; }</style>
```

Take note that the `15px` value here may vary depending on your scrollbar width. Typically, OS X has this set to `15px`.

## Usage
`compensate(selectors)` &mdash; This module only exposes a single function that accepts an array of elements as *an* argument.

```js
var compensate = require('scrollbar-compensate');

document.addEventListener('DOMContentLoaded', function() {
  compensate(['.modal-open', '.overlay-enabled .global-nav']);
});
```

**Note** — If you're wondering why it's necessary to run `compensate` when the document loads: We're using the [`scrollbar-size`](https://www.npmjs.com/package/scrollbar-size) library internally which needs to be called after the document is ready.

## Examples
[jquery-modal](https://github.com/srph/jquery-modal) is using this library.

## Alternatives
[no-scroll](https://github.com/davidtheclark/no-scroll) also solves this problem, however covers more than scrollbar compensation.

Use this library only if you want the scrollbar compensation library. Otherwise, check the alternatives.

## Note
This library isn't available in UMD because I don't really need it at the moment. Please send a PR or submit an issue if you'd like it to be implemented. Moreover, no tests yet.
