import { api } from '@/lib/axios'

interface UserData {
  id: string
  name: string
  email: string
  password: string
  created_at: Date
}

export async function getUser(): Promise<UserData> {
  const response = await api.get('/user')
  console.log(response)
  return response.data
}
