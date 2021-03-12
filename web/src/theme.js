import chroma from 'chroma-js'
import { system as preset } from '@theme-ui/presets'

const { modes, ...lightColors } = preset.colors

const addChromaColors = (colors, dark) => {
  return {
    ...colors,
    primaryDisabled: chroma(colors.primary)
      [dark ? 'darken' : 'brighten'](1)
      .desaturate(1)
      .hex(),
    primaryText: dark ? '#111' : '#eee',
    secondaryDisabled: chroma(colors.secondary)
      [dark ? 'darken' : 'brighten'](1)
      .desaturate(1)
      .hex(),
    secondaryText: dark ? '#111' : '#eee',
    lightGray: chroma(colors.gray)[dark ? 'darken' : 'brighten'](2).hex(),
  }
}

const theme = {
  ...preset,
  useColorSchemeMediaQuery: true,
  borders: {
    ...preset.borders,
    divider: '1px solid',
  },
  colors: {
    modes: {
      light: addChromaColors(lightColors, false),
      dark: addChromaColors(modes.dark, true),
      deep: addChromaColors(modes.deep, true),
      swiss: addChromaColors(modes.swiss, false),
    },
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
      color: 'primaryText',
      bg: 'primary',
      cursor: 'pointer',
    },
    primaryDisabled: {
      color: 'primaryText',
      bg: 'primaryDisabled',
    },
    secondary: {
      color: 'secondaryText',
      bg: 'secondary',
      cursor: 'pointer',
    },
    secondaryDisabled: {
      color: 'secondaryText',
      bg: 'secondaryDisabled',
    },
  },
}

const baseMenuStyles = {
  menu: {},
  menuItem: {
    paddingLeft: 0,
    paddingRight: 0,
  },
}

const addModeMenuStyles = (mode) => {
  const colors = theme.colors.modes[mode]
  return {
    background: colors.background,
    color: colors.text,
  }
}

const addModeMenuItemStyles = (mode) => {
  const colors = theme.colors.modes[mode]
  return {
    background: colors.background,
    color: colors.text,
    hover: {
      background: colors.highlight,
      color: colors.text,
    },
    active: {
      background: colors.primary,
      color: colors.primaryText,
    },
  }
}

const modeMenuStyles = {
  light: {
    menu: { ...addModeMenuStyles('light') },
    menuItem: { ...addModeMenuItemStyles('light') },
  },
  dark: {
    menu: {
      ...addModeMenuStyles('dark'),
      boxShadow:
        '0 3px 7px rgb(255 255 255 / 26%), 0 0.6px 2px rgb(255 255 255 / 20%)',
    },
    menuItem: { ...addModeMenuItemStyles('dark') },
  },
  deep: {
    menu: {
      ...addModeMenuStyles('deep'),
    },
    menuItem: {
      ...addModeMenuItemStyles('deep'),
    },
  },
  swiss: {
    menu: { ...addModeMenuStyles('swiss') },
    menuItem: {
      ...addModeMenuItemStyles('swiss'),
    },
  },
}

export const getMenuStyles = (mode) => {
  return {
    menu: {
      left: {
        ...baseMenuStyles.menu,
        ...modeMenuStyles[mode].menu,
        marginRight: -10,
      },
      right: {
        ...baseMenuStyles.menu,
        ...modeMenuStyles[mode].menu,
        marginLeft: -10,
      },
    },
    menuItem: {
      ...baseMenuStyles.menuItem,
      ...modeMenuStyles[mode].menuItem,
    },
    focusableItem: {
      ...baseMenuStyles.menuItem,
      ...modeMenuStyles[mode].menuItem,
      hover: {
        background: modeMenuStyles[mode].menuItem.background,
        color: modeMenuStyles[mode].menuItem.color,
      },
      active: {
        background: modeMenuStyles[mode].menuItem.background,
        color: modeMenuStyles[mode].menuItem.color,
      },
    },
  }
}

export const menuStyles = {
  light: getMenuStyles('light'),
  dark: getMenuStyles('dark'),
  deep: getMenuStyles('deep'),
  swiss: getMenuStyles('swiss'),
}

export default theme
