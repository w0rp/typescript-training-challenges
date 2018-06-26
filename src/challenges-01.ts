export function wrapInQuotes (str: string): string {
  return `"${str}"`
}

export const multiply = (x: number, y: number): number => x * y

export const pad = (str: string, amount: number, prefix?: boolean) => {
  const padding = Array(amount).fill(' ').join('')

  return prefix ? padding + str : str + padding
}

export enum Drink {Coke, Vimto, OrangeJuice, Water}

export const sugarContent = (drink: Drink): number => {
  switch (drink) {
    case Drink.Coke:
      return 10.6
    case Drink.Vimto:
      return 4.7
    case Drink.OrangeJuice:
      return 8
    case Drink.Water:
      return 0
  }

  throw new Error('Invalid drink')
}

export const countStrings = (...strings: string[]): [string, number][] =>
  strings.map(x => [x, x.length] as [string, number])

interface FormField {
  text: string
  onChange: (val: string) => void
}

export const newFormField = (overrides: Partial<FormField>): FormField => ({
  text: 'default',
  onChange: () => undefined,
  ...overrides,
})
