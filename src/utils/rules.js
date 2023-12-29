import * as yup from 'yup'




export const schema = yup.object({
    email: yup
      .string()
      .required('Please enter a valid email address')
      .email('Email không đúng định dạng')
      .min(5, 'Độ dài từ 5 - 160 kí tự')
      .max(160, 'Độ dài từ 5 - 160 kí tự'),

  })
  