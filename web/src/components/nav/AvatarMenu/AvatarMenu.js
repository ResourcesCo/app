/** @jsx jsx */
import { jsx, IconButton, Flex, useThemeUI } from 'theme-ui'
import { useAuth } from '@redwoodjs/auth'
import { BsPerson } from 'react-icons/bs'
import { BiLogIn, BiLogOut } from 'react-icons/bi'
import { Menu, MenuItem } from '@szhsin/react-menu'

const AvatarMenu = () => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()
  const { theme } = useThemeUI()
  const menuItemStyles = {
    paddingLeft: 0,
    paddingRight: 0,
    active: { backgroundColor: theme.colors.primary },
  }
  return (
    <Menu
      menuButton={
        <IconButton>
          <BsPerson />
        </IconButton>
      }
      styles={{ marginLeft: -10 }}
    >
      {isAuthenticated && currentUser ? (
        <MenuItem onClick={logOut} styles={menuItemStyles}>
          <Flex sx={{ alignItems: 'center', px: 3 }}>
            <BiLogOut sx={{ mr: 2 }} />
            Sign Out
          </Flex>
        </MenuItem>
      ) : (
        <MenuItem onClick={logIn} styles={menuItemStyles}>
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
