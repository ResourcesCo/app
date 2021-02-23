/** @jsx jsx */
import { jsx, IconButton } from 'theme-ui'
import { BsThreeDots } from 'react-icons/bs'
import { Menu } from '@szhsin/react-menu'

const PageMenu = ({ pageMenuItems }) => {
  return (
    <>
      {pageMenuItems && (
        <Menu
          menuButton={
            <IconButton>
              <BsThreeDots />
            </IconButton>
          }
        >
          {pageMenuItems}
        </Menu>
      )}
    </>
  )
}

export default PageMenu
