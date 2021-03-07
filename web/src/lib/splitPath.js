const splitPath = (path) => {
  const segments = path.split('/')
  return [
    segments[segments.length - 1],
    segments.slice(0, segments.length - 1).join('/'),
  ]
}

export default splitPath
