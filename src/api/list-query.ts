import request from '@/utils/request'
export async function getQuery(params: any) {
  const res: any = await request.post('/query/tool/page', params)

  return res.data
}
