declare namespace Links {

  type Link = {
    path: string
  }

  type Links = {
    root?: Link
    [name: string]: Link | Links
  }

  type AbsoluteLinks<T> = {
    [K in keyof T]: T[K] extends Link ? string : (T[K] extends object ? AbsoluteLinks<T[K]> : never)
  } & {
    fromBackend: { [name: string]: string }
  }

  type RouteAnalytics = Record<string, Analytics>
}
