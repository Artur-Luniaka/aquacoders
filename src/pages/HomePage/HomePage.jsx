import GreyBlock from "../../components/GreyBlock/GreyBlock";
import Logo from "../../components/Logo/Logo";
import ImgBlock from "../../components/ImgBlock/ImgBlock";
import MainImg from "../../components/MainImg/MainImg";
import InfoLabels from "../../components/AdvantegesSection/AdvantagesSection.jsx";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection.jsx";
import OurHappyCustomers from "../../components/OurHappyCustomers/OurHappyCustomers.jsx";

const HomePage = () => {
  return (
    <>
      <GreyBlock>
        <Logo />
        <WelcomeSection />
      </GreyBlock>
      <ImgBlock>
        <MainImg />
        <OurHappyCustomers />
        <InfoLabels />
      </ImgBlock>
    </>
  );
};

export default HomePage;
