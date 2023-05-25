import prisma from ".";

/**
 * getUsers
 *
 * @returns {Promise<{users: any[]}>}
 */
export async function getUsers() {
  try {
    const users = await prisma.user.findMany();
    return { users };
  } catch (error) {
    return { error };
  }
}

/**
 * createUser
 *
 * @param {Object} user
 * @returns {Promise<{user: userFromDB}>}
 */
export async function createUser(user) {
  try {
    const userFromDB = await prisma.user.create({ data: user });
    return { user: userFromDB };
  } catch (error) {
    return { error };
  }
}

/**
 * updateUserPenName
 *
 * @param {*} email
 * @param {*} penName
 * @returns {Promise<{user: any}>}
 */
export async function updateUserPenName(email, penName) {
  try {
    const user = await prisma.user.findMany({
      where: {
        penName: {
          equals: penName,
          mode: "insensitive",
        },
      },
    });
    if (user.length > 0) {
      return { error: "penName already exists." };
    } else {
      const user = await prisma.user.update({
        where: { email: email },
        data: {
          penName: penName,
        },
      });
    }
    return { user: user };
  } catch (error) {
    return { error };
  }
}

/**
 * getUserByEmail
 *
 * @param {string} email
 * @returns {Promise<{user: any}>}
 *
 */
export async function getUserByEmail(email) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return { user };
  } catch (error) {
    return { error };
  }
}

/**
 * getUserById
 *
 * @param {*} id
 * @returns {Promise<{user: any}>
 */
export async function getUserById(id) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    return { user };
  } catch (error) {
    return { error };
  }
}
