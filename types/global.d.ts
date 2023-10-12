interface StoreJsAPI {
  set(key: string, value: any, expire?: number): any
}

declare const requireMiniProgram: () => { whoami: string }
