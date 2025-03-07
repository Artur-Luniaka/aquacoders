import GreyBlock from "../../components/GreyBlock/GreyBlock";
import Logo from "../../components/Logo/Logo";
import ImgBlock from "../../components/ImgBlock/ImgBlock";
import OurHappyCustomers from "../../components/OurHappyCustomers/OurHappyCustomers.jsx";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection.jsx";
import MainImg from "../../components/MainImg/MainImg";
import InfoLabels from "../../components/AdvantegesSection/AdvantagesSection.jsx";

const HomePage = () => {
  return (
    <>
      <GreyBlock>
        <WelcomeSection />
      </GreyBlock>
      <ImgBlock>
        <OurHappyCustomers />
        <Logo />
      </GreyBlock>
      <ImgBlock>
        <MainImg />
        <InfoLabels />
      </ImgBlock>
    </>
  );
};

export default HomePage;
