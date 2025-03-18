import { useState, useEffect } from "react";
import GreyBlock from "../../components/GreyBlock/GreyBlock";
import ImgBlock from "../../components/ImgBlock/ImgBlock";
import AdvantagesSection from "../../components/AdvantegesSection/AdvantagesSection.jsx";
import Logo from "../../components/Logo/Logo.jsx";
import MainImg from "../../components/MainImg/MainImg.jsx";
import OurHappyCustomers from "../../components/OurHappyCustomers/OurHappyCustomers.jsx";
import ResetPassForm from "../../components/ResetPassForm/ResetPassForm.jsx";
import SendEmailReset from "../../components/SendEmailReset/SendEmailReset.jsx";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../../redux/auth/operations/getCurrentUser.js";
import { useSearchParams } from "react-router-dom";

import LanguageSwitcher from "../../components/Language/LanguageSwitcher.jsx"; //моє

const ResetPassPage = () => {
  const [hideImgBlock, setHideImgBlock] = useState(false);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
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
        {token && <ResetPassForm token={token} />}
        {!token && <SendEmailReset />}
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

export default ResetPassPage;
