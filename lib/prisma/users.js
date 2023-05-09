import prisma from '.'

export async function getUsers() {
  try {
    const users = await prisma.user.findMany()
    return { users }
  } catch (error) {
    return { error }
  }
}

export async function createUser(user) {
  try {
    const userFromDB = await prisma.user.create({ data: user })
    return { user: userFromDB }
  } catch (error) {
    return { error }
  }
}

export async function updateUserPenName(email , penName) {
  try {
    const user = await prisma.user.update({ 
      where : {email : email},
      data : {
        penName : penName
      }
    })
    return { user: user }
  } catch (error) {
    return { error }
  }
}

export async function getUserByEmail(email) {
  try {
    const user = await prisma.user.findUnique({
      where: { email }      
    })
    return { user }
  } catch (error) {
    return { error }
  }
}

export async function getUserById(id) {
  console.log(id)
  try {
    const user = await prisma.user.findUnique({
      where: { id }
    })

    
    return { user }
  } catch (error) {
    return { error }
  }
}