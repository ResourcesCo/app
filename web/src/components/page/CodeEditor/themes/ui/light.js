import { EditorView } from '@codemirror/view'
import theme from '../../../../../theme'

// Based on https://github.com/codemirror/theme-one-dark
// Copyright (C) 2018-2021 by Marijn Haverbeke <marijnh@gmail.com> and others
// MIT License: https://github.com/codemirror/theme-one-dark/blob/main/LICENSE

// Using https://github.com/one-dark/vscode-one-dark-theme/ as reference for the colors

const foreground = theme.colors.foreground,
  lightBackground = theme.colors.background,
  highlightBackground = '#2c313a',
  background = theme.colors.background,
  selection = '#339cec33',
  cursor = '#528bff'

/// The editor theme styles for One Dark, customized to light.
export default EditorView.theme(
  {
    '&': {
      color: foreground,
      backgroundColor: background,
      caretColor: cursor,
    },

    '&.cm-wrap': {
      outline: 'none',
    },

    '&.cm-wrap .cm-scroller': {
      outline: 'none',
    },

    '&.cm-wrap .cm-content': {
      outline: 'none',
    },

    '&.cm-focused .cm-cursor': { borderLeftColor: cursor },
    '&.cm-focused .cm-selectionBackground': { backgroundColor: selection },

    '.cm-panels': { backgroundColor: lightBackground, color: foreground },
    '.cm-panels.cm-panels-top': { borderBottom: '2px solid #d9d9d9' },
    '.cm-panels.cm-panels-bottom': { borderTop: '2px solid #d9d9d9' },

    '.cm-searchMatch': {
      backgroundColor: '#339cec33',
      outline: '1px solid #d9d9d9',
    },
    '.cm-searchMatch.cm-searchMatch-selected': {
      backgroundColor: '#339cec33',
    },

    '.cm-activeLine': { backgroundColor: background },
    '.cm-selectionMatch': { backgroundColor: '#aafe661a' },

    '.cm-matchingBracket, .cm-nonmatchingBracket': {
      backgroundColor: '#bad0f847',
      outline: '1px solid #515a6b',
    },

    '.cm-gutters': {
      backgroundColor: background,
      color: '#545868',
      border: 'none',
    },
    '.cm-lineNumbers .cm-gutterElement': { color: 'inherit' },

    '.cm-foldPlaceholder': {
      backgroundColor: 'transparent',
      border: 'none',
      color: '#ddd',
    },

    '.cm-tooltip': {
      border: '1px solid #181a1f',
      backgroundColor: lightBackground,
    },
    '.cm-tooltip-autocomplete': {
      '& > ul > li[aria-selected]': {
        backgroundColor: highlightBackground,
        color: foreground,
      },
    },
  },
  { dark: false }
)
