/** @jsx jsx */
import { jsx, IconButton } from 'theme-ui'
import { BsBell } from 'react-icons/bs'
import { Menu, MenuItem } from '@szhsin/react-menu'

const NotificationMenu = () => {
  return (
    <Menu
      menuButton={
        <IconButton>
          <BsBell />
        </IconButton>
      }
    >
      <MenuItem>test</MenuItem>
    </Menu>
  )
}

export default NotificationMenu
