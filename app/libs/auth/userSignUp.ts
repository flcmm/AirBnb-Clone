import { supabase } from "../supabase";
import { RegisterTypes } from "../types/register-types";

export async function Register(
  {
    name,
    email,
    password
  }: RegisterTypes
  ) {
  const { error } = await supabase
  .from('users')
  .insert(
    {
      name: name,
      email: email,
      password: password
    }
  )
  console.log(error)
}