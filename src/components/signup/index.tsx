import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import {ISign} from "@/types/sign"

const SignUp: React.FC<ISign> = ({setLogin}) => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
        <div className="flex justify-end flex-col ml-2">
            <h1 className="text-3xl py-6 font-bold">Sign up</h1>
            <span className="py-2">
                If you already have an account register <br />
                You can&nbsp;
                <button type="button" onClick={() => setLogin(true)} className="text-red-600 hover:text-red-900"> Login here!</button>
            </span>
            </div>
            <div className="flex flex-col justify-between w-1/3 py-6 space-y-6">
            <div>
                <Label  htmlFor="email">Username</Label>
                 <Input placeholder="Username" className="mt-1"/>
            </div>
            <div>
                <Label  htmlFor="email">Email</Label>
                <Input placeholder="Email" className="mt-1"/>
            </div>
            <div>
                <Label htmlFor="password">Password</Label>
                <Input placeholder="Password" className="mt-1"/>
            </div>
                <div>
                <Label htmlFor="password">Confirm Password</Label>
                <Input placeholder="Confirm Password" className="mt-1"/>
            </div>
            </div>
            <div className="w-1/3">
            <Button className="w-full" variant="primary">
                Register
            </Button>
            </div>
        </div>
  );
}

export default SignUp;