const joinPath = (name, folder) => {
  return folder + (folder === '' ? '' : '/') + name
}

export default joinPath
