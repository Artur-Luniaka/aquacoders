import { useState } from "react";
import GreyBlock from "../../components/GreyBlock/GreyBlock";
import { useEffect } from "react";
import ImgBlock from "../../components/ImgBlock/ImgBlock";

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
        <h2>Здесь будет форма логинизации</h2>
      </GreyBlock>
      {hideImgBlock && (
        <ImgBlock>
          <h2>Здесь будет контент на картинке,но только для веб версии</h2>
        </ImgBlock>
      )}
    </>
  );
};

export default SignInPage;
