import {UserInterface, TokenUser} from 'Interfaces';

export const createTokenUser = (user: UserInterface): TokenUser => {
  const {name, email, _id} = user;
  const tokenUser = {name, email, _id};
  return tokenUser;
};
