/** @jsx jsx */
import { jsx, IconButton } from 'theme-ui'
import { BsBell } from 'react-icons/bs'
import { Menu } from '@szhsin/react-menu'

const NotificationMenu = () => {
  return (
    <Menu
      menuButton={
        <IconButton>
          <BsBell />
        </IconButton>
      }
    ></Menu>
  )
}

export default NotificationMenu
