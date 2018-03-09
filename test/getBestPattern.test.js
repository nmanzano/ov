import assert from 'assert';

import getBestPattern from '../src/getBestPattern';

describe('getBestPattern tests', () => {
  const patterns = ['*,b,*', 'a,*,*', ' *,*,c', 'foo,bar,baz', 'w,x,*,*', '*,x,y,z'];
  it('should return *,x,y,z pattern', () => {
    const expectedPattern = getBestPattern(patterns, '/w/x/y/z/');
    assert.equal(expectedPattern, '*,x,y,z');
  });
});
