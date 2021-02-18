/** @jsx jsx */
import { jsx, Themed } from 'theme-ui'
import { createContext, useContext, useState, useEffect } from 'react'
import NavBar from '../../components/nav/NavBar'

const LayoutContext = createContext({
  title: 'Home',
  setTitle: () => undefined,
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
