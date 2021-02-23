/** @jsx jsx */
import { jsx, IconButton } from 'theme-ui'
import { useAuth } from '@redwoodjs/auth'
import { BsPerson } from 'react-icons/bs'
import { Menu, MenuItem } from '@szhsin/react-menu'

const AvatarMenu = () => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()
  return (
    <Menu
      menuButton={
        <IconButton>
          <BsPerson />
        </IconButton>
      }
    >
      {isAuthenticated && currentUser ? (
        <MenuItem onClick={logOut}>Sign Out</MenuItem>
      ) : (
        <MenuItem onClick={logIn}>Sign In</MenuItem>
      )}
    </Menu>
  )
}

export default AvatarMenu
