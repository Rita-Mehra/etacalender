import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowBackIos, ModeEdit } from '@mui/icons-material';
import { Grid } from '@mui/material';
import InputField from "../../component/input/Inputs";
import CustomButton from "../../component/button/CustomButton";

export default function Profile() {

    const router = useRouter()

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(true);
    };

    return (
        <div className="mobile-view login-wrapper pb-8">
            <div className="text-center pt-[4rem] px-5">
                <Grid container className="mb-5">
                    <Grid item xs={2}>
                        <ArrowBackIos className="text-base" onClick={router.back} />
                    </Grid>
                    <Grid item xs={8}>
                        <h4 className="font-20 text-black">My Profile</h4>
                    </Grid>
                    <Grid xs={2} />
                </Grid>

                <div className="height-[120px] width-[120px] customer-img">
                    <Image
                        src="/images/customer.jpg"
                        width={120}
                        height={120}
                        alt="client"
                        className="mx-auto"
                    />
                    <div className="editicon">
                        <Image
                            src="/images/edit-user.svg"
                            width={50}
                            height={50}
                            alt="icon"
                        />
                    </div>
                </div>

                <div className="mt-5 text-left">
                    <InputField
                        title="First Name"
                        type="text"
                        placeholder="Enter First Name"
                    />

                    <InputField
                        title="Last Name"
                        type="text"
                        placeholder="Enter Last Name"
                    />

                    <InputField
                        title="Email address"
                        type="email"
                        placeholder="Enter Email"
                    />
                    <div onClick={handleClick} className="text-primary text-xs mb-8">Change Password?</div>

                    {isOpen &&
                        <div>
                            <InputField
                                title="Old Password"
                                type="password"
                                placeholder="**************"
                            />
                            <InputField
                                title="New Password"
                                type="password"
                                placeholder="**************"
                            />
                        </div>
                    }

                    <div className="text-center mt-24">
                        <Link href="#">
                            <CustomButton
                                btnDesign="blue-button"
                                btnName="Edit"
                                icon={<ModeEdit />}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
