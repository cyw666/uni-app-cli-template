import JSEncrypt from 'jsencrypt'

const pubKey =
  'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQJqcSDBNd1sku3MzD0xVQqz6e4EkpriUJ8KapmR9YEqYfQEw9a2Y4xbkG+5kTJM1vn16xMtZAlAqKOHQMefdlBih3AzOedfNid5sCnZhUYrkWvkMKLE7U7ZBXZDyaLDxzIXN4tLxz2vYn84QKrIKyEFgEkGOBWrILvAebPKn/OcMQIDAQAB'

export default function encrypt(str: string) {
  const encrypt = new JSEncrypt()
  encrypt.setPublicKey(pubKey)
  const encrypted = encrypt.encrypt(str)
  return encrypted
}
