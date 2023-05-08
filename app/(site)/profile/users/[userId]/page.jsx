import { getUserById, getUsers } from '@/lib/prisma/users'
import User from './user'

// This function make NextJS generate this component as a static HTML + JSON
// export async function generateStaticParams() {
//   const { users } = await getUsers()

//   return users.map(user => ({
//     userId: user.id
//   }))
// }

async function getUser(userId) {
  const { user } = await getUserById(userId)
  if (!user) {
    throw new Error('Failed to fetch data')
  }

  return user
}

const Page = async ({ params }) => {
  
  const { user } = await getUserById(params.userId)
  
  return <User user={user} />
}

export default Page