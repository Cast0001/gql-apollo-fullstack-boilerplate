---
title: device
---


## Thoughts

- Dynamic app resize doesn't support
- If app is rendered on server side for users media data must be same on server and client to prevent app from 
re-rendering when it loads. The value on server side comes from user-agent and contains only `isMobile`, 
`isTablet`, `isDesktop` info. There is no data about portrait / landscape and screen resolution.
- We can trust device type only, not screen size. So it's not necessary to use CSS media, its variables can be 
replaced with some device type keys: `mobile`, `tablet`, `desktop`, etc.
- For landscape and portrait tablet styles should be combined in one chunk and based on CSS media.
- There is no problem with tablet sizes on desktop devices - the smallest desktop screen size is 1280px owned only 
by less than 1% users (from GA).


## Usage

```jsx harmony
import { DeviceProvider, useDevice } from 'device'

const App = () => {
  const { isMobile, isTablet, isDesktop } = useDevice()
}

const Root = () => (
  <DeviceProvider value={window.__DEVICE__}>
    <App />
  </DeviceProvider>
)
```


## `useDevice`

```jsx harmony
const {
  os,
  platform,
  browser,
  version,
  isMobile,
  isTablet,
  isDesktop,
  isBot,
} = useDevice()
```


## SSR

There is `device` middleware on SSR. `express-useragent` used to parse user-agent.

```jsx harmony
app.use(device)

app.use((req, res, next) => {
  // ...

  renderToStringWithData(
    <DeviceProvider value={req.device}>
      <App />
    </DeviceProvider>
  )
 
  // ...

  return `
    <!doctype html>
    <html lang="en">
      <body>
        // ...
        <script>
          window.__DEVICE__ = ${JSON.stringify(req.device)};
        </script>
      </body>
    </html>
  `
})
```
