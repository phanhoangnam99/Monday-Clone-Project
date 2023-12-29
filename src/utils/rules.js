import * as yup from "yup";

function testOnlyOneLetter(value) {
  let firstChar = value[0];
  for (let i = 1; i < value.length; i++) {
    if (value[i] !== firstChar) {
      return true;
    }
    return false;
  }
}

export const schema = yup.object({
  email: yup
    .string()
    .required("Please enter a valid email address")
    .email("Email không đúng định dạng")
    .min(5, "Độ dài từ 5 - 160 kí tự")
    .max(160, "Độ dài từ 5 - 160 kí tự"),
  full_name: yup.string().required("Enter your full name"),
  password: yup
    .string()
    .required("Create a password")
    .min(8, "Password must be 8 characters or more")
    .test({
      name:'password-not-valid',
      message :'The password cannot have only one letter ',
      test:testOnlyOneLetter
    }),
    account_name:yup.string().required('Name your account')
});
