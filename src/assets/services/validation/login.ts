import * as Yup from "yup"

const loginSchema = Yup.object().shape({
  email: Yup
    .string()
    .email("Email Isn't Valid")
    .required("Email Is Required")
  ,
  password: Yup
    .string()
    .required("Password Is Required")
    .min(8, "Password Should Be Atleast 8 characters")
})

export {
  loginSchema
}