import Users from "./Users"
import { getUsers } from "@/lib/prisma/users"


export const revalidate = 0

async function getData(){
  const {users} = await getUsers()
  if(!users){
    throw new Error("Failed to fetch data")
  }
}

const UsersLayout = async ({ children }) => {
  const users = await getData()

  return (
    <div>{children}</div>
  )
}

export default UsersLayout

{/* <aside className='w-1/4'>
        <Users users={users} />
      </aside>
      <main>{children}</main> */}