import { useState, useEffect } from "react";
import GreyBlock from "../../components/GreyBlock/GreyBlock";
import ImgBlock from "../../components/ImgBlock/ImgBlock";
import AdvantagesSection from "../../components/AdvantegesSection/AdvantagesSection.jsx";
import Logo from "../../components/Logo/Logo.jsx";
import MainImg from "../../components/MainImg/MainImg.jsx";
import OurHappyCustomers from "../../components/OurHappyCustomers/OurHappyCustomers.jsx";
import SigninForm from "../../components/SigninForm/SignInForm.jsx";

import LanguageSwitcher from "../../components/Language/LanguageSwitcher.jsx"; //моє

const SignInPage = () => {
  const [hideImgBlock, setHideImgBlock] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth >= 1440) {
        setHideImgBlock(true);
      } else {
        setHideImgBlock(false);
      }
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <>
      <GreyBlock>
        <Logo />
        <LanguageSwitcher />
        <SigninForm />
      </GreyBlock>
      {hideImgBlock && (
        <ImgBlock>
          <MainImg />
          <OurHappyCustomers />
          <AdvantagesSection />
        </ImgBlock>
      )}
    </>
  );
};

export default SignInPage;
