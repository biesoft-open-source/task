interface Admin {
  email: string;
  first_name: string;
  last_name: string;
}

export interface AppDetailsData {
  id: number;
  name: string;
  logo: string;
  company: string;
  number_of_users: number;
  number_of_active_users: number;
  server_address: string;
  admin: Admin;
}
