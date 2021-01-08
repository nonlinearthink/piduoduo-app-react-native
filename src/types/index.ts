export interface UserInfo {
  username?: string;
  nickname?: string;
  isMale?: boolean;
  signature?: string;
  email?: string;
  phone?: string;
  frozen?: boolean;
  defrostingTime?: number;
}

export interface StoreState {
  token?: string;
  isLogin?: boolean;
  user: UserInfo;
}
