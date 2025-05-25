import { jwtDecode } from 'jwt-decode';

export type DecodedToken = {
  username: string;
  isAdmin: boolean;
};

export const decodeToken = (token: string): DecodedToken | null => {
  try {
    return jwtDecode<DecodedToken>(token);
  } catch (err) {
    return null;
  }
};
