## scrollbar-compensate
```
npm i scrollbar-compensate
```
A hack to compensate for scrollbar size for modals

### Problem
Usually, you would set `overflow: hidden` to body when the modal mounts. However, this causes a weird adjustment to the layout (because the scrollbar disappears). This mostly affects Windows/Linux users, and some OSX users that use a mouse (because it forces the scrollbar to appear).

As an example, compare [Semantic UI's Modal](http://semantic-ui.com/modules/modal.html) and [TWBS' Modal](http://getbootstrap.com/javascript/#modals). TWBS solved this by adding a `padding-right` to the `body` when the modal mounts.

### Usage
```
// API: `compensate(...elements)`
compensate('.modal-open', '.overlay-enabled .global-nav');
```

### Alternatives
[https://github.com/davidtheclark/no-scroll](no-scroll) also solves this problem, however covers more than scrollbar compensation.

Use this library only if you want the scrollbar compensation library. Otherwise, check the alternatives.

