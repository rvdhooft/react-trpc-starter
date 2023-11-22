/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TRPC_SERVER_URL: string
  readonly VITE_APP_AUTH_CLIENT_ID: string
  readonly VITE_APP_AUTHORITY: string
  readonly VITE_APP_REDIRECT_URI: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
