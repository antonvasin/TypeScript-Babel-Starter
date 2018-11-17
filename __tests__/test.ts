import foo from '..';
import test from 'ava';

test('true', t => {
  t.true(foo());
});
