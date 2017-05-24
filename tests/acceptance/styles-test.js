import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | styles');

test('it renders CSS correctly', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(findWithAssert('p:eq(0)').css('backgroundColor'), 'rgb(255, 0, 0)');
  });
});
