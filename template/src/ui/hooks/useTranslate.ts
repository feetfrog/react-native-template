/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { TranslationKey } from '@/Types'

export const useTranslate = (): ((
  key: TranslationKey,
  options?: any,
  defaultValue?: string,
) => string) => {
  const { t } = useTranslation()

  const translate = React.useCallback(
    (key: TranslationKey, options?: any, defaultValue?: string) => {
      return t(key as string, defaultValue ?? key, options) as string
    },
    [t],
  )

  return translate
}
