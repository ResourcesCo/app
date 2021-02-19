/** @jsx jsx */
import { jsx, Flex, Box, IconButton, Button, Heading } from 'theme-ui'
import { useEffect } from 'react'
import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsBell, BsFilePlus, BsPerson, BsThreeDots } from 'react-icons/bs'
import { useLayout } from 'src/layouts/AppLayout'
import AvatarMenu from '../AvatarMenu'

const NavBar = () => {
  const { logIn, isAuthenticated } = useAuth()
  const { title } = useLayout()
  useEffect(() => {
    if (typeof window !== undefined && typeof title === 'string') {
      window.document.title = title
    }
  })
  return (
    <Flex sx={{ p: 1, alignItems: 'center', borderBottom: 'divider' }}>
      <Link to={routes.home()}>
        <IconButton variant="ghost" sx={{ color: 'text'}}>
          <GiHamburgerMenu />
        </IconButton>
      </Link>
      <Box sx={{ flexGrow: 1 }}>
        <Heading sx={{ fontSize: 3, fontWeight: 500, mx: 1 }}>{title}</Heading>
      </Box>
      <Link to={routes.new()}>
        <IconButton sx={{ color: 'text' }}>
          <BsFilePlus />
        </IconButton>
      </Link>
      <IconButton>
        <BsBell />
      </IconButton>
      {isAuthenticated ? (
        <AvatarMenu />
      ) : (
          <>
            <Button
              onClick={logIn}
              sx={{ display: ['none', 'block', 'block'] }}
              sx={{ fontSize: 1, mx: 1, py: 1 }}
            >
              Sign In
          </Button>
            <IconButton
              onClick={logIn}
              sx={{ display: ['block', 'none', 'none'] }}
            >
              <BsPerson />
            </IconButton>
          </>
        )}
      <IconButton>
        <BsThreeDots />
      </IconButton>
    </Flex>
  )
}

export default NavBar
