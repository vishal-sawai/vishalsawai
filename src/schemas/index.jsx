import * as Yup from "yup";
export const contactSchema = Yup.object({
    name: Yup.string().min(3).max(40).required("Please Enter Your Name"),
    mail: Yup.string().email().required("Please Enter Email"),
    phone: Yup.string().required("Please Enter Your phone No").matches(/^[6-9]\d{9}$/, { message: 'Phone number is not valid' }),
    message: Yup.string().min(10).required("Please Write Your Message")
});