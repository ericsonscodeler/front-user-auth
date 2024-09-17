import { useState, FormEvent } from "react";
import Facebook from "@/assets/facebook-logo.svg";
import Google from "@/assets/google-logo.svg";
import Image from "next/image";
import {ISign} from "@/types/sign"
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { zodResolver } from "@hookform/resolvers/zod";

import {api} from '@/api/axios'

import { z } from 'zod'
import { SubmitHandler, useForm } from "react-hook-form";

export const formSchema  = z.object({
  email: z.string().email({
    message: "Invalid email address"
  }),
  password: z.string()
})

export type FormSchema = z.infer<typeof formSchema>;

const SignIn: React.FC<ISign> = ({ setLogin }) => {
  const [isLoading,setIsLoading] = useState<boolean>(false)

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = form;

  const onSubmitForm: SubmitHandler<FormSchema> = async (formData) => {
    setIsLoading(true)
    try {
      const {data} = await api.post("/auth",formData)
      console.log(data)
      setIsLoading(false)
      return data
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="flex flex-col justify-center items-center w-full px-4 lg:px-0">
      <div className="flex justify-end flex-col lg:mr-14 w-full lg:w-auto">
        <h1 className="text-2xl lg:text-3xl py-6 font-bold text-center lg:text-left">Sign in</h1>
        <span className="py-2 text-center lg:text-left">
          If you don’t have an account <br />
          <button
            type="button"
            onClick={() => setLogin(false)}
            className="text-red-600 hover:text-red-900"
          >
            Register here!
          </button>
        </span>
      </div>
        <div className="flex flex-col justify-between w-full lg:w-1/3 py-6 space-y-6">
        
          <div>
            <Label htmlFor="email">Email</Label>
            <Input 
            {...register("email")}
            placeholder="Email" className="mt-1 w-full" type="email"/>
            <p className="text-red-600 text-sm">{errors.email && errors.email.message}</p>
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input 
            {...register("password")}
            placeholder="Password" className="mt-1 w-full" type="password"/>
            <div className="flex justify-end mt-1">
              <span className="text-sm">Forgot Password ?</span>
            </div>
          </div>
          </div>
          <div className="w-full lg:w-1/3">
            <Button className="w-full" variant="primary" disabled={isSubmitting}>
              Login
            </Button>
          </div>
          <span className="py-8 text-sm text-center">or continue with</span>
          <div className="flex flex-row justify-center w-full space-x-4">
            <Image src={Facebook} alt="facebook logo" width={40} height={40} />
            <Image src={Google} alt="google logo" width={40} height={40} />
          </div>
    </form>
  );
};

export default SignIn;
