import { supabase } from "../supabase";
import { RegisterTypes } from "../types/register-types";

export async function Register(
  {
    firstName,
    lastName,
    contactNo,
    email,
    username,
    password
  }: RegisterTypes
  ) {
  const { error } = await supabase
  .from('users')
  .insert(
    {
      first_name: firstName,
      last_name: lastName,
      contact_number: contactNo,
      email: email,
      username: username,
      password: password
    }
  )
  console.log(error)
}