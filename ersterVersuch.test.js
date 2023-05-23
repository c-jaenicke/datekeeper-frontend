import ersterVersuch from './ersterVersuch';

test('should know 1+1, ', () => {
  const expected = 2;
  const actual = ersterVersuch.add(1, 1);
  expect(expected).toBe(actual);
});
