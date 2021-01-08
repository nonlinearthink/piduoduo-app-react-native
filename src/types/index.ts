export interface IUser {
  username?: string;
  token?: string;
  email?: string;
  isMale?: boolean;
  signature?: string;
  nickname?: string;
  frozen?: boolean;
  phone?: string;
  defrostingTime?: number;
  isLogin?: boolean;
}

export interface ILoginForm {
  username: string;
  password: string;
}
