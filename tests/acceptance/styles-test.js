import { find, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | styles', function(hooks) {
  setupApplicationTest(hooks);

  test('it renders CSS correctly', async function(assert) {
    await visit('/');

    const { backgroundColor } = getComputedStyle(find('p'));

    assert.equal(backgroundColor, 'rgb(255, 0, 0)');
  });
});
