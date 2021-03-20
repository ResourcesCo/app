/** @jsx jsx */
import { jsx, Flex, Box, IconButton, Heading } from 'theme-ui'
import { useEffect } from 'react'
import { useLayout } from 'src/layouts/AppLayout'
import useOnboarding from '../useOnboarding'
import AppMenu from '../AppMenu'
import CreateMenu from '../CreateMenu'
// import NotificationMenu from '../NotificationMenu'
import AvatarMenu from '../AvatarMenu'
import PageMenu from '../PageMenu'

const NavBar = ({ pageInfo = {} }) => {
  const { title } = useLayout()
  useEffect(() => {
    if (typeof window !== undefined && typeof title === 'string') {
      window.document.title = title
    }
  })
  useOnboarding({ requireOnboarding: pageInfo.requireOnboarding || false })
  return (
    <Flex
      sx={{
        p: 1,
        alignItems: 'center',
        borderBottom: 'divider',
        borderColor: 'lightGray',
      }}
    >
      <AppMenu />
      <Box sx={{ flexGrow: 1 }}>
        <Heading sx={{ fontSize: 3, fontWeight: 500, mx: 1 }}>{title}</Heading>
      </Box>
      <CreateMenu />
      {/* <NotificationMenu /> */}
      <AvatarMenu />
      <PageMenu pageInfo={pageInfo} />
    </Flex>
  )
}

export default NavBar
