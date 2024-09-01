export interface AdminData {
  id:       string
  email:    string
}

export interface UserResponse {
  data:  {accessToken: string, adminData: AdminData}
}

export interface LoginRequest {
  email:    string
  password: string
}

export interface SignupRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string
}

// ** Interface Types
export interface Profile {
  firstname:  string
  lastname:   string
  username:   string
  location:   string
  short_bio:  string
  roles:      string
}


export interface ProfileResponse {
  docs: Profile
  user: any
  profile: Profile
}

export interface ProfileRequest {
  firstname:  string
  username:   string
  id:         string
}