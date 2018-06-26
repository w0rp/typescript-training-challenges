import {
  Drink,
  countStrings,
  multiply,
  newFormField,
  pad,
  sugarContent,
  wrapInQuotes,
} from './challenges-01'

describe('wrapInQuotes', () => {
  it('should wrap a string in quotes', () => {
    const actual = wrapInQuotes('test')
    expect(actual).toEqual('"test"')
  })
})

describe('multiply', () => {
  it('should multiply two numbers together', () => {
    expect(multiply(7, 9)).toEqual(63)
  })
})

describe('pad', () => {
  it('should pad on the left correctly', () => {
    expect(pad('hello', 3, true)).toEqual('   hello')
  })

  it('should pad on the right correctly', () => {
    expect(pad('hello', 3)).toEqual('hello   ')
  })
})

describe('sugarContent', () => {
  it('should return the right information', () => {
    expect(sugarContent(Drink.Coke)).toEqual(10.6)
    expect(sugarContent(Drink.Vimto)).toEqual(4.7)
    expect(sugarContent(Drink.OrangeJuice)).toEqual(8)
    expect(sugarContent(Drink.Water)).toEqual(0)
  })

  it('should throw when given invalid values', () => {
    expect(() => sugarContent(9)).toThrow('Invalid drink')
  })
})

describe('countStrings', () => {
  it('should compute string lengths correctly', () => {
    expect(countStrings('hello', 'world'))
      .toEqual([['hello', 5], ['world', 5]])
    expect(countStrings('foo', 'bar', 'alongerone'))
      .toEqual([['foo', 3], ['bar', 3], ['alongerone', 10]])
  })
})

describe('newFormField', () => {
  it('should set defaults', () => {
    expect(newFormField({})).toEqual({
      text: 'default',
      onChange: expect.any(Function),
    })
    expect(newFormField({}).onChange('x')).toBeUndefined()
  })

  it('should let you override values', () => {
    const onChange = () => undefined

    const result = newFormField({text: 'new', onChange})

    expect(result).toEqual({text: 'new', onChange: expect.any(Function)})
    expect(result.onChange).toBe(onChange)
  })
})
