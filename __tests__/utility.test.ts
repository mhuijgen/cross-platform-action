import {execWithOutput, getOrDefaultOrThrow} from '../src/utility'

test('execWithOutput', async () => {
  const result = await execWithOutput('ls')
  expect(result.length).toBeGreaterThan(0)
})

test('getOrDefaultOrThrow', () => {
  let record = {foo: 4}
  expect(getOrDefaultOrThrow(record, 'foo')).toBe(4)
})

test('getOrDefaultOrThrow - default', () => {
  let record = {foo: 4, default: 5}
  expect(getOrDefaultOrThrow(record, 'bar')).toBe(5)
})

test('getOrDefaultOrThrow - throw', () => {
  let record = {foo: 4}
  expect(() => getOrDefaultOrThrow(record, 'bar')).toThrowError(
    /^Missing key and no default key/
  )
})
