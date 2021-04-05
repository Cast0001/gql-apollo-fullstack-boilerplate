import js from './js'
import css from './css'
import scss from './scss'
import fonts from './fonts'
import images from './images'
import type { RuleSetRule } from 'webpack'


export default [ js, css, scss, images, fonts ].reduce((acc, rule) => ({
  client: acc.client.concat(rule({ isClient: true })),
  server: acc.server.concat(rule({ isClient: false })),
}), { client: [], server: [] }) as { [key: string]: RuleSetRule[] }
