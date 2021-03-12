/** @jsx jsx */
import { jsx, IconButton, Flex } from 'theme-ui'
import { useAuth } from '@redwoodjs/auth'
import { BsPerson } from 'react-icons/bs'
import { BiLogIn, BiLogOut } from 'react-icons/bi'
import { Menu, MenuItem } from '@szhsin/react-menu'
import { useLayout } from 'src/layouts/AppLayout/AppLayout'

const AvatarMenu = () => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()
  const { menuStyles } = useLayout()
  return (
    <Menu
      menuButton={
        <IconButton>
          <BsPerson />
        </IconButton>
      }
      styles={menuStyles.menu.right}
    >
      {isAuthenticated && currentUser ? (
        <MenuItem onClick={logOut} styles={menuStyles.menuItem}>
          <Flex sx={{ alignItems: 'center', px: 3 }}>
            <BiLogOut sx={{ mr: 2 }} />
            Sign Out
          </Flex>
        </MenuItem>
      ) : (
        <MenuItem onClick={logIn} styles={menuStyles.menuItem}>
          <Flex sx={{ alignItems: 'center', px: 3 }}>
            <BiLogIn sx={{ mr: 2 }} />
            Sign In
          </Flex>
        </MenuItem>
      )}
    </Menu>
  )
}

export default AvatarMenu
