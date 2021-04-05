const generateAbsoluteLinks = <Original extends Links.Links, Result extends Links.AbsoluteLinks<Original>>(links: Original, rootPath: string = ''): Result => {
  const map = (link: Links.Link | Links.Links, key: string) => {
    if ('path' in link) {
      if (key === 'root') {
        return rootPath
      }

      return `${rootPath}/${link.path}`
    }

    if (!link.root) {
      throw new Error('Missed `root` property in links object')
    }

    return generateAbsoluteLinks(link, `${rootPath}/${link.root.path}`)
  }

  return Object.keys(links).reduce((result, key) => {
    result[key] = map(links[key], key)

    return result
  }, {}) as Result
}


export default generateAbsoluteLinks
