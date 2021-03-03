/** @jsx jsx */
import { jsx, Flex, Box, IconButton, Button, Heading } from 'theme-ui'
import { useEffect } from 'react'
import { Link, routes } from '@redwoodjs/router'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsFilePlus } from 'react-icons/bs'
import { useLayout } from 'src/layouts/AppLayout'
import useOnboarding from '../useOnboarding'
import AvatarMenu from '../AvatarMenu'
import PageMenu from '../PageMenu'

const NavBar = ({ pageMenuItems, requireOnboarding }) => {
  const { title } = useLayout()
  useEffect(() => {
    if (typeof window !== undefined && typeof title === 'string') {
      window.document.title = title
    }
  })
  useOnboarding({ requireOnboarding })
  return (
    <Flex sx={{ p: 1, alignItems: 'center', borderBottom: 'divider' }}>
      <Link to={routes.home()}>
        <IconButton variant="ghost" sx={{ color: 'text' }}>
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
      {/* <IconButton>
        <BsBell />
      </IconButton> */}
      <AvatarMenu />
      <PageMenu pageMenuItems={pageMenuItems} />
    </Flex>
  )
}

export default NavBar
