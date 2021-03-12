/** @jsx jsx */
import { jsx, IconButton, Flex, Box, Label, Select, Switch } from 'theme-ui'
import { navigate, routes } from '@redwoodjs/router'
import { BsThreeDots, BsPencilSquare } from 'react-icons/bs'
import { Menu, MenuItem, FocusableItem } from '@szhsin/react-menu'
import { useLayout } from 'src/layouts/AppLayout/AppLayout'

const PageMenu = ({ pageInfo: { route, path } }) => {
  const {
    menuStyles,
    colorMode,
    setColorMode,
    wordWrap,
    setWordWrap,
  } = useLayout()
  const dark = ['dark', 'deep'].includes(colorMode)
  return (
    <Menu
      menuButton={
        <IconButton>
          <BsThreeDots />
        </IconButton>
      }
      styles={menuStyles.menu.right}
    >
      {route === 'view' && (
        <MenuItem
          onClick={() => navigate(routes.edit({ path }))}
          styles={menuStyles.menuItem}
        >
          <Flex sx={{ alignItems: 'center', px: 3 }}>
            <BsPencilSquare sx={{ mr: 2 }} />
            Edit
          </Flex>
        </MenuItem>
      )}
      <FocusableItem
        styles={menuStyles.menuItem}
        onClick={(e) => (e.keepOpen = true)}
      >
        {() => (
          <Flex sx={{ alignItems: 'center', px: 3 }}>
            <BsPencilSquare sx={{ mr: 2, visibility: 'hidden' }} />
            <Select
              value={colorMode}
              onChange={({ target: { value } }) => setColorMode(value)}
              sx={{ width: '8em' }}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="deep">Deep</option>
              <option value="swiss">Swiss</option>
            </Select>
          </Flex>
        )}
      </FocusableItem>
      <FocusableItem
        styles={menuStyles.menuItem}
        onClick={(e) => (e.keepOpen = true)}
      >
        {() => (
          <Flex sx={{ alignItems: 'center', px: 3 }}>
            <BsPencilSquare sx={{ mr: 2, visibility: 'hidden' }} />
            <Switch
              label="Word Wrap"
              checked={wordWrap}
              onChange={({ target: { checked } }) => setWordWrap(checked)}
            />
          </Flex>
        )}
      </FocusableItem>
    </Menu>
  )
}

export default PageMenu
