import Image from 'next/image';
import Link from 'next/link';
import { Outfit } from "next/font/google";
import { Grid } from "@mui/material";
import { Lock, Email } from '@mui/icons-material';
import CustomButton from "../component/button/CustomButton";
import socialLinks from "@/utils/social-link-data";

const outfit = Outfit({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${outfit.className}`}>
      <div className="mobile-view eta-calender-wrapper">
        <div className="text-center pt-[10rem] px-5">
          <Image
            src="/images/telescope.svg"
            width={135}
            height={115}
            alt="telescope"
            className="mx-auto"
          />
          <h3 className="font-24 text-black mt-8">Welcome  to the app</h3>
          <p className="text-gray font-17 mt-5">We’re excited to font you.<br />
            Choose an e-mail to link with your account.</p>

          <div className="mt-20">
            <Link href="/login">
              <CustomButton
                btnDesign="blue-button"
                btnName="Login Account"
                icon={<Lock />}
              />
            </Link>
            <div className="mb-5" />
            <Link href="/profile">
              <CustomButton
                btnName="Create new account"
                icon={<Email />}
              />
            </Link>
            <div className="mb-8" />
            <p className="text-gray text-xs">Or Continue with Social Accounts</p>

            <Grid container className="mt-8 pb-10">
              {socialLinks.map((item) => (
                <Grid xs={4}>
                  <div className="social-link-container">
                    <img src={item.image} />
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </main>
  );
}
