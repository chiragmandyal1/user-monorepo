export interface ActiveUser {
  name: string;
  email: string;
  role: "User" | "Admin" | "Support";
}
export type UserState = {
  token: string | "";
  activeUser: ActiveUser | {};
};

export interface LoginPayload {
  email: string;
  password: string;
  roleType: "User" | "Admin" | "Support";
}
