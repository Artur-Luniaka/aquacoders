import { useState } from "react";
import GreyBlock from "../../components/GreyBlock/GreyBlock";
import { useEffect } from "react";
import ImgBlock from "../../components/ImgBlock/ImgBlock";
import AdvantagesSection from "../../components/AdvantegesSection/AdvantagesSection.jsx";
import Logo from "../../components/Logo/Logo.jsx";

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
      </GreyBlock>
      {hideImgBlock && (
        <ImgBlock>
          <InfoLabels />
          <h2>Здесь будет контент на картинке,но только для веб версии</h2>
          <AdvantagesSection />
        </ImgBlock>
      )}
    </>
  );
};

export default SignInPage;
