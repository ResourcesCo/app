/** @jsx jsx */
import { jsx, Flex, IconButton, useThemeUI } from 'theme-ui'
import { navigate, routes } from '@redwoodjs/router'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsHouse } from 'react-icons/bs'
import { Menu, MenuItem } from '@szhsin/react-menu'

const AppMenu = () => {
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
          <GiHamburgerMenu />
        </IconButton>
      }
      styles={{ marginRight: -10 }}
    >
      <MenuItem onClick={() => navigate(routes.home())} styles={menuItemStyles}>
        <Flex sx={{ alignItems: 'center', px: 3 }}>
          <BsHouse sx={{ mr: 2 }} />
          Home
        </Flex>
      </MenuItem>
    </Menu>
  )
}

export default AppMenu
