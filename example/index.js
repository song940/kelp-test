const test = require('..');
const assert = require('assert');

(async () => {

  await test('Hello world', async () => {
    assert.ok(1);
  });

})();