import assert from 'assert';

import getBestPattern from '../src/getBestPattern';

describe('getBestPattern tests', () => {
  const patterns = ['*,b,*', 'a,*,*', ' *,*,c', 'foo,bar,baz', 'w,x,*,*', '*,x,y,z'];
  it('should return *,x,y,z pattern', () => {
    const expectedPattern = getBestPattern(patterns, '/w/x/y/z/');
    assert.equal(expectedPattern, '*,x,y,z');
  });
  it('should return a,*,* pattern', () => {
    const expectedPattern = getBestPattern(patterns, 'a/b/c');
    assert.equal(expectedPattern, 'a,*,*');
  });
  it('should return NO MATCH pattern', () => {
    const expectedPattern = getBestPattern(patterns, 'foo/');
    assert.equal(expectedPattern, 'NO MATCH');
  });
  it('should return NO MATCH pattern', () => {
    const expectedPattern = getBestPattern(patterns, 'foo/bar/');
    assert.equal(expectedPattern, 'NO MATCH');
  });
  it('should return foo,bar,baz pattern', () => {
    const expectedPattern = getBestPattern(patterns, 'foo/bar/baz/');
    assert.equal(expectedPattern, 'foo,bar,baz');
  });
});
