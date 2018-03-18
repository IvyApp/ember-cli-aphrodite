import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | styles', function(hooks) {
  setupApplicationTest(hooks);

  test('it renders CSS correctly', async function(assert) {
    await visit('/');

    assert.equal(findWithAssert('p:eq(0)').css('backgroundColor'), 'rgb(255, 0, 0)');
  });
});