import { User, UserName } from '../src/modules/users/user-types'

const caseInsensitiveEqual = (a: string, b: string): boolean =>
  a.toLowerCase() === b.toLowerCase()

export const hasSameName = (user1: UserName, user2: UserName): boolean =>
  caseInsensitiveEqual(user1.firstName, user2.firstName) &&
  caseInsensitiveEqual(user1.lastName, user2.lastName)

const getRegnalNumbersForUserName = (userName: UserName, users: User[]) =>
  users
    .filter((user) => hasSameName(user, userName))
    .map(({ regnalNumber }) => regnalNumber)

export const computeRegnalNumber = (userName: UserName, users: User[]) => {
  const regnalNumbers = getRegnalNumbersForUserName(userName, users)

  if (regnalNumbers.length === 0) {
    return 1
  }

  return Math.max(...regnalNumbers) + 1
}

export const isUserName = (name: unknown): name is UserName => {
  return (
    (name as UserName).firstName !== undefined &&
    (name as UserName).lastName !== undefined
  )
}

export const userNameToString = (userName: UserName) =>
  userName.lastName.toLowerCase() + '_' + userName.firstName.toLowerCase()
