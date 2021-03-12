/** @jsx jsx */
import { jsx, IconButton, Flex, useThemeUI } from 'theme-ui'
import { navigate, routes } from '@redwoodjs/router'
import { BsThreeDots, BsPencilSquare } from 'react-icons/bs'
import { Menu, MenuItem } from '@szhsin/react-menu'

const PageMenu = ({ pageInfo: { route, path } }) => {
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
          <BsThreeDots />
        </IconButton>
      }
      styles={{ marginLeft: -10 }}
    >
      {route === 'view' && (
        <MenuItem
          onClick={() => navigate(routes.edit({ path }))}
          styles={menuItemStyles}
        >
          <Flex sx={{ alignItems: 'center', px: 3 }}>
            <BsPencilSquare sx={{ mr: 2 }} />
            Edit
          </Flex>
        </MenuItem>
      )}
    </Menu>
  )
}

export default PageMenu
