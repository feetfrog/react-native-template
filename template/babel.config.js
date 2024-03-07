module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'macros',
    [
      'module-resolver',
      {
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.d.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@/Api': './src/api',
          '@/Assets': './src/assets',
          '@/DesignSystem': './src/ui/design-system',
          '@/Hooks': './src/ui/hooks',
          '@/Hocs': './src/ui/hocs',
          '@/Providers': './src/ui/providers',
          '@/Screens': './src/ui/screens',
          '@/Store': './src/store',
          '@/Types': './src/types',
          '@/Utils': './src/utils',
        },
      },
    ],
  ],
}
