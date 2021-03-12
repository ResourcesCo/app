/** @jsx jsx */
import { jsx, Flex, IconButton } from 'theme-ui'
import { navigate, routes } from '@redwoodjs/router'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsHouse } from 'react-icons/bs'
import { Menu, MenuItem } from '@szhsin/react-menu'
import { useLayout } from 'src/layouts/AppLayout/AppLayout'

const AppMenu = () => {
  const { menuStyles } = useLayout()
  return (
    <Menu
      menuButton={
        <IconButton>
          <GiHamburgerMenu />
        </IconButton>
      }
      styles={menuStyles.menu.left}
    >
      <MenuItem
        onClick={() => navigate(routes.home())}
        styles={menuStyles.menuItem}
      >
        <Flex sx={{ alignItems: 'center', px: 3 }}>
          <BsHouse sx={{ mr: 2 }} />
          Home
        </Flex>
      </MenuItem>
    </Menu>
  )
}

export default AppMenu
