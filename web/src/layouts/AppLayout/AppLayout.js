/** @jsx jsx */
import { jsx, Themed, useColorMode } from 'theme-ui'
import { createContext, useContext, useState, useEffect } from 'react'
import NavBar from '../../components/nav/NavBar'

const LayoutContext = createContext({
  title: 'Home',
  setTitle: () => undefined,
  nextPage: undefined,
  setNextPage: () => undefined,
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

const AppLayout = ({ initialTitle = 'Home', pageMenuItems, children }) => {
  const [title, setTitle] = useState(initialTitle)
  const [nextPage, setNextPage] = useState()
  const [_colorMode, setColorMode] = useColorMode()
  useEffect(() => {
    setColorMode('light')
  })
  return (
    <LayoutContext.Provider value={{ title, setTitle, nextPage, setNextPage }}>
      <Themed.root>
        <NavBar pageMenuItems={pageMenuItems} />
        {children}
      </Themed.root>
    </LayoutContext.Provider>
  )
}

export default AppLayout
