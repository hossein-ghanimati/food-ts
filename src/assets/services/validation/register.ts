import * as Yup from "yup"

const registerSchema = Yup.object().shape({
  username: Yup
    .string()
    .required("Username Is Required")
    .min(4, "Username Should Be Atleast 4 characters")
  ,
  email: Yup
    .string()
    .required("Email Is Required")
    .email("Email Isn't Valid")
  ,
  password: Yup
    .string()
    .required("Password Is Required")
    .min(8, "Password Should Be Atleast 8 characters")
})

export {
  registerSchema
}