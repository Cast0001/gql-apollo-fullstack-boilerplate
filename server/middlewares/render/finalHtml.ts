import { minify } from 'html-minifier'


const getStatusCode = ({ helmet }): number => {
  if (helmet) {
    const bodyAttributes = helmet.bodyAttributes.toString()
    const match = bodyAttributes.match(/statusCode="(\d+)"/)

    if (match) {
      return Number(match[1])
    }
  }

  return 200
}

const getMeta = ({ helmet }) => {
  if (!helmet) {
    return '<title>Scentbird Monthly Perfume Subscription Box: Designer Scents $14.95</title>'
  }

  return `
    ${helmet.base.toString()}
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
    ${helmet.script.toString()}
  `
}

const getData = ({ device, initialApolloState }) => `
  <script>
    window.__DEVICE__ = ${JSON.stringify(device)};
    window.__APOLLO_STATE__ = ${initialApolloState ? JSON.stringify(initialApolloState) : 'null'};
  </script>
`

const finalHtml = (req, res) => {
  const { appHtml, assets: { scripts, styles } } = req.context

  const statusCode = getStatusCode(req.context)
  const meta = getMeta(req.context)
  const data = getData(req.context)

  const html = `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        ${meta}
        ${styles}
      </head>
      <body>
        <div id="root" style="height: 100%; overflow-x: hidden;">${appHtml}</div>
        <div id="modals"></div>
        <div id="tooltips"></div>
        <div id="dropdowns"></div>
        ${data}
        ${scripts}
      </body>
    </html>
  `

  const finalHtml = minify(html, { collapseWhitespace: true })

  res.writeHead(statusCode, { 'Content-Type': 'text/html' })
  res.end(finalHtml)
}


export default finalHtml
