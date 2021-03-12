/** @jsx jsx */
import { jsx, Flex, IconButton, useThemeUI } from 'theme-ui'
import { navigate, routes } from '@redwoodjs/router'
import { BsFilePlus } from 'react-icons/bs'
import { Menu, MenuItem } from '@szhsin/react-menu'

const CreateMenu = () => {
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
          <BsFilePlus />
        </IconButton>
      }
      styles={{ marginLeft: -10 }}
    >
      <MenuItem onClick={() => navigate(routes.new())} styles={menuItemStyles}>
        <Flex sx={{ alignItems: 'center', px: 3 }}>
          <BsFilePlus sx={{ mr: 2 }} />
          New Page
        </Flex>
      </MenuItem>
    </Menu>
  )
}

export default CreateMenu
