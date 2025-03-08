import { useEffect, useState } from "react";
import GreyBlock from "../../components/GreyBlock/GreyBlock";
import ImgBlock from "../../components/ImgBlock/ImgBlock";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import InfoLabels from "../../components/AdvantegesSection/AdvantagesSection";
import Logo from "../../components/Logo/Logo.jsx";
import MainImg from "../../components/MainImg/MainImg.jsx";

const SignUpPage = () => {
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
        <RegisterForm />
      </GreyBlock>
      {hideImgBlock && (
        <ImgBlock>
          <MainImg />
          <InfoLabels />
        </ImgBlock>
      )}
    </>
  );
};

export default SignUpPage;
