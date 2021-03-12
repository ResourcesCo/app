/** @jsx jsx */
import { jsx, Themed, useColorMode } from 'theme-ui'
import { menuStyles } from '../../theme'
import { createContext, useContext, useState, useEffect } from 'react'
import useLocalStorageState from 'use-local-storage-state'
import NavBar from '../../components/nav/NavBar'

const LayoutContext = createContext({
  title: 'Home',
  setTitle: () => undefined,
  nextPage: undefined,
  setNextPage: () => undefined,
  wordWrap: true,
  setWordWrap: () => undefined,
})

export const useLayout = () => useContext(LayoutContext)

export const Title = ({ children }) => {
  const { title, setTitle } = useLayout()
  const newTitle = React.Children.toArray(children)
    .map((child) => child.toString())
    .join('')

  useEffect(() => {
    if (newTitle !== title && typeof newTitle === 'string') {
      setTitle(newTitle)
    }
  })
  return null
}

const AppLayout = ({ initialTitle = 'Home', pageInfo = {}, children }) => {
  const [title, setTitle] = useState(initialTitle)
  const [nextPage, setNextPage] = useState()
  const [_themeUIColorMode, setThemeUIColorMode] = useColorMode()
  const [wordWrap, setWordWrap] = useLocalStorageState('rco.wordWrap', true)
  const [colorMode, setColorModeState] = useLocalStorageState(
    'rco.colorMode',
    'system'
  )
  const setColorMode = (colorMode) => {
    setColorModeState(colorMode)
    setThemeUIColorMode(colorMode)
  }
  useEffect(() => {
    setThemeUIColorMode(colorMode || undefined)
  }, [colorMode, setThemeUIColorMode])
  return (
    <LayoutContext.Provider
      value={{
        title,
        setTitle,
        nextPage,
        setNextPage,
        wordWrap,
        setWordWrap,
        colorMode,
        setColorMode,
        menuStyles: menuStyles[colorMode] || menuStyles['light'],
        highlightClass: ['dark', 'deep'].includes(colorMode)
          ? 'atom-one-dark'
          : 'atom-one-light',
      }}
    >
      <Themed.root>
        <NavBar pageInfo={pageInfo} />
        {children}
      </Themed.root>
    </LayoutContext.Provider>
  )
}

export default AppLayout
