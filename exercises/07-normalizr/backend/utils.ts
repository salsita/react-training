import { User, UserData } from '../src/modules/users/user-types'

const caseInsensitiveEqual = (a: string, b: string): boolean =>
  a.toLowerCase() === b.toLowerCase()

export const hasSameName = (user1: UserData, user2: UserData): boolean =>
  caseInsensitiveEqual(user1.firstName, user2.firstName) &&
  caseInsensitiveEqual(user1.lastName, user2.lastName)

const getRegnalNumbersForUserName = (users: User[], userName: UserData) =>
  users
    .filter((user) => hasSameName(user, userName))
    .map(({ regnalNumber }) => regnalNumber)

export const computeRegnalNumber = (users: User[], userName: UserData) => {
  const regnalNumbers = getRegnalNumbersForUserName(users, userName)

  if (regnalNumbers.length === 0) {
    return 1
  }

  return Math.max(...regnalNumbers) + 1
}
