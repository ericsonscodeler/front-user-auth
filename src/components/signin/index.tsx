import Facebook from "@/assets/facebook-logo.svg";
import Google from "@/assets/google-logo.svg";
import Image from "next/image";
import {ISign} from "@/types/sign"
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const SignIn: React.FC<ISign> = ({ setLogin }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full px-4 lg:px-0">
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
          <Input placeholder="Email" className="mt-1 w-full" />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input placeholder="Password" className="mt-1 w-full" />
          <div className="flex justify-end mt-1">
            <span className="text-sm">Forgot Password ?</span>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3">
        <Button className="w-full" variant="primary">
          Login
        </Button>
      </div>
      <span className="py-8 text-sm text-center">or continue with</span>
      <div className="flex flex-row justify-center w-full space-x-4">
        <Image src={Facebook} alt="facebook logo" width={40} height={40} />
        <Image src={Google} alt="google logo" width={40} height={40} />
      </div>
    </div>
  );
};

export default SignIn;
