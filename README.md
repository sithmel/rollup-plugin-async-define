rollup-plugin-async-define
==========================
This plugin wraps your bundle using async-define.

Async-define is a simple AMD module runner that executes dependencies in the right order (https://github.com/tes/async-define).


How to use it
-------------
You build your bundle declaring your external dependencies:
```js
import ad from 'rollup-plugin-async-define';

export default {
  moduleId: 'modulename', // optional module name
  external: ['react', 'react-dom'], // dependencies
  paths: {
    react: 'react15.3',
    'react-dom': 'reactDom15.3',
  },
  plugins: [ad()],
};
```
You can easily bundle your dependencies like this:
```js
import react from 'react';
import reactDom from 'react-dom';
import asyncDefine from 'async-define';
asyncDefine('react15.3', function () {
  return react;
});
asyncDefine('reactDom15.3', function () {
  return reactDom;
});
```
Then you can load the bundle containing react and react-dom (common.js) and your main bundle asynchronously. Async-define will take care of executing them in the right order.
```html
<script async src="common.js" ></script>
<script async src="main.js" ></script>
```
