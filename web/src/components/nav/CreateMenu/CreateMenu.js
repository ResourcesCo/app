/** @jsx jsx */
import { jsx, Flex, IconButton } from 'theme-ui'
import { navigate, routes } from '@redwoodjs/router'
import { BsPlusSquare, BsFilePlus } from 'react-icons/bs'
import { Menu, MenuItem } from '@szhsin/react-menu'
import { useLayout } from 'src/layouts/AppLayout/AppLayout'

const CreateMenu = () => {
  const { menuStyles } = useLayout()
  return (
    <Menu
      menuButton={
        <IconButton>
          <BsPlusSquare />
        </IconButton>
      }
      styles={menuStyles.menu.right}
    >
      <MenuItem
        onClick={() => navigate(routes.new())}
        styles={menuStyles.menuItem}
      >
        <Flex sx={{ alignItems: 'center', px: 3 }}>
          <BsFilePlus sx={{ mr: 2 }} />
          New Page
        </Flex>
      </MenuItem>
    </Menu>
  )
}

export default CreateMenu
