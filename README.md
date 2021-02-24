# three-rt-helper
WebGLRenderTarget helper for three.js : see the output in realtime in a window

### [NPM](https://www.npmjs.com/package/three-rt-helper)

Try it in [this jsfiddle](https://jsfiddle.net/felixmariotto/b5x8f31h/)

## Setup :

`npm install three-rt-helper`
and
```js
import RenderTargetHelper from 'three-rt-helper';
```

or

```html
<script src='https://unpkg.com/three-rt-helper'></script>
```

## Usage

```js
const renderTargetHelper = RenderTargetHelper( renderer, myWebGLRenderTarget );
document.body.append( renderTargetHelper );

// in the render loop
renderTargetHelper.update();
```
