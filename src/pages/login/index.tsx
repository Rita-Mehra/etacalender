import Image from 'next/image';
import Link from 'next/link';
import { Lock } from '@mui/icons-material';
import InputField from "../../component/input/Inputs";
import CustomButton from "../../component/button/CustomButton";

export default function Login() {
    return (
        <div className="mobile-view login-wrapper">
            <div className="text-center pt-[5rem] px-5">
                <Image
                    src="/images/satellite.svg"
                    width={135}
                    height={153}
                    alt="satellite"
                    className="mx-auto"
                />
                <h3 className="font-24 text-black mt-8">Login here</h3>
                <p className="text-gray font-17 mt-5">
                    Welcome back,<br />
                    You’ve been missed!
                </p>
                <div className="mt-8 text-left">
                    <InputField
                        title="User Name"
                        type="text"
                        placeholder="Enter username"
                    />

                    <InputField
                        title="Password"
                        type="password"
                        placeholder="**************"
                    />
                    <Link href="#" className="text-primary text-xs">Forget Password?</Link>
                    <div className="mt-24 text-center">
                        <Link href="/dashboard">
                            <CustomButton
                                btnDesign="blue-button"
                                btnName="Login Account"
                                icon={<Lock />}
                            />
                        </Link>
                        <Link href="/profile" className="text-gray text-xs my-9 inline-block">Don’t have an account? <span className="text-primary">Sign up</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
