import chroma from 'chroma-js'
import { system as preset } from '@theme-ui/presets'

export default {
  ...preset,
  borders: {
    ...preset.borders,
    divider: '1px solid #ccc',
  },
  colors: {
    ...preset.colors,
    primaryDisabled: chroma(preset.colors.primary)
      .brighten(1)
      .desaturate(1)
      .hex(),
    secondaryDisabled: chroma(preset.colors.secondary)
      .brighten(1)
      .desaturate(1)
      .hex(),
  },
  messages: {
    ...preset.messages,
    error: {
      bg: '#f8d7da',
      borderLeftColor: '#fa5252',
      color: '#721c24',
    },
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
      cursor: 'pointer',
    },
    primaryDisabled: {
      color: 'white',
      bg: 'primaryDisabled',
    },
    secondary: {
      color: 'white',
      bg: 'secondary',
      cursor: 'pointer',
    },
    secondaryDisabled: {
      color: 'white',
      bg: 'secondaryDisabled',
    },
  },
}
