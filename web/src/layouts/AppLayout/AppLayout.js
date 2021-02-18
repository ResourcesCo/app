/** @jsx jsx */
import { jsx, Themed } from 'theme-ui'
import { createContext, useContext, useState, useEffect } from 'react'
import { onlyText } from 'react-children-utilities'
import NavBar from '../../components/nav/NavBar'

const LayoutContext = createContext()

export const useLayout = () => useContext(LayoutContext)

export const Title = ({ children }) => {
  const { title, setTitle } = useLayout()
  const newTitle = onlyText(children)

  useEffect(() => {
    if (newTitle !== title && typeof newTitle === 'string') {
      setTitle(newTitle)
    }
  })
  return null
}

const AppLayout = ({ initialTitle = 'Home', children }) => {
  const [title, setTitle] = useState(initialTitle)
  return (
    <LayoutContext.Provider value={{ title, setTitle }}>
      <Themed.root>
        <NavBar />
        {children}
      </Themed.root>
    </LayoutContext.Provider>
  )
}

export default AppLayout
