import { Button } from "./button";

interface AppbarProps {
    user?: {
        name?: string | null;
    },
    
    onSignin: any,
    onSignout: any
}

export const Appbar = ({
    user,
    onSignin,
    onSignout
}: AppbarProps) => {
    return <div className="flex justify-between  px-4  items-center my-2">
        <div className="text-lg flex flex-col justify-center text-blue-500">
        <img
            src="/punjabGov.png"
            alt="Government of Punjab"
            className="w-10 h-10 mb-5"
          />
        </div>
        <div className="flex  justify-center pt-2">
            <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Freelancer"}</Button>
            <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Employer"}</Button>
        </div>
    </div>
}