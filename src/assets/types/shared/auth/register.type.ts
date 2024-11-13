export type RegisterInputType = {
  username: string
  email: string
  password: string
}

export type RegisterOutputType = {
  token: string;
  user: {
    username: string,
    email: string
    role: string
  }
}