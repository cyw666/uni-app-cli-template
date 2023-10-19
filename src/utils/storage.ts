const expireNamespace = 'expire_mixin_'

function read(key: string): any {
  try {
    _checkExpiration(key)
    return uni.getStorageSync(key)
  } catch (error) {
    console.warn('storage read', error)
  }
}

function write(key: string, data: any, expiration?: number): any {
  try {
    if (expiration) {
      uni.setStorageSync(expireNamespace + key, expiration)
    }
    return uni.setStorageSync(key, data)
  } catch (error) {
    console.warn('storage write', error)
  }
}

function each(fn: Function) {
  try {
    const { keys } = uni.getStorageInfoSync()
    if (keys && keys.length > 0) {
      keys.forEach((key) => {
        fn(read(key), key)
      })
    }
  } catch (error) {
    console.warn('storage each', error)
  }
}

function remove(key: string) {
  try {
    return uni.removeStorageSync(key)
  } catch (error) {
    console.warn('storage remove', error)
  }
}

function clearAll() {
  try {
    return uni.clearStorageSync()
  } catch (error) {
    console.warn('storage clearAll', error)
  }
}

function _checkExpiration(key: string) {
  const expireKey = expireNamespace + key
  const expiration = uni.getStorageSync(expireKey)
  if (expiration && expiration > 0 && expiration <= new Date().getTime()) {
    remove(expireKey)
    remove(key)
  }
}

export default {
  get: read,
  set: write,
  each,
  remove,
  clearAll,
}
