/// <reference types="vite/client" />
interface ImportMetaEnv extends ViteEnv {
  __: unknown
}
declare interface ViteEnv {
  readonly VITE_APP_MODE: string
  readonly VITE_USE_HTTPS: boolean
  readonly VITE_LEGACY: boolean
  readonly VITE_PORT: number
  readonly VITE_PROXY: [string, string][]
}

declare interface Window {
  isMobile: () => boolean
}
