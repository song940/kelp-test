## kelp-test

> super tiny testing framework

[![kelp-test](https://img.shields.io/npm/v/kelp-test.svg)](https://npmjs.org/kelp-test)
[![Build Status](https://travis-ci.org/song940/kelp-test.svg?branch=master)](https://travis-ci.org/song940/kelp-test)

### Installation

```bash
$ npm install kelp-test
```

### Example

```js
const assert = require('assert');
const test = require('kelp-test');

(async () => {

  await test('Hello world', async () => {
    assert.ok(1);
  });

})();

```

### Contributing
- Fork this Repo first
- Clone your Repo
- Install dependencies by `$ npm install`
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Publish your local branch, Open a pull request
- Enjoy hacking <3

### MIT

This work is licensed under the [MIT license](./LICENSE).

---