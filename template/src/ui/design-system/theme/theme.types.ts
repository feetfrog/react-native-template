export type Theme = {
  colors: Colors
  spacings: Sizes
  radius: Sizes
  typography: Typographies
}

export type SizeType =
  | 'xxxsmall'
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'regular'
  | 'large'
  | 'xlarge'
  | 'xxlarge'
  | 'xxxlarge'

export type Sizes = Record<SizeType, number>

export type TypographyItem = {
  family: string
  size: number
  weight: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
  lineHeight: number
  letterSpacing: number
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | undefined
}

export type TypographyType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'p1'
  | 'p2'
  | 'p3'
  | 'button-large'
  | 'button-regular'
  | 'button-small'

export type Typographies = Record<TypographyType, TypographyItem>

export type ColorShade =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
export type Color = Record<ColorShade, string>

export type ColorType = 'primary' | 'accent' | 'success' | 'error' | 'warning' | 'surface' | 'text'
export type Colors = Record<ColorType, Color>

export type Insets = {
  top: number
  bottom: number
  left: number
  right: number
}

export type ScreenDimensions = {
  screenHeight: number
  screenWidth: number
}
