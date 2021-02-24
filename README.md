# three-rt-helper
WebGLRenderTarget helper for three.js : see the output in realtime in a window

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
```
