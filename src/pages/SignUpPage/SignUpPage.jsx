import { useEffect, useState } from "react";
import GreyBlock from "../../components/GreyBlock/GreyBlock";
import ImgBlock from "../../components/ImgBlock/ImgBlock";
import AdvantagesSection from "../../components/AdvantegesSection/AdvantagesSection.jsx";
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
        <h2>Здесь будет форма регистрации</h2>
      </GreyBlock>
      {hideImgBlock && (
        <ImgBlock>
          <h2>Здесь будет контент на картинке,но только для веб версии</h2>
          <AdvantagesSection />
        </ImgBlock>
      )}
    </>
  );
};

export default SignUpPage;
