import GreyBlock from "../../components/GreyBlock/GreyBlock";
import Logo from "../../components/Logo/Logo";
import ImgBlock from "../../components/ImgBlock/ImgBlock";
import MainImg from "../../components/MainImg/MainImg";
import AdvantagesSection from "../../components/AdvantegesSection/AdvantagesSection.jsx";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection.jsx";
import OurHappyCustomers from "../../components/OurHappyCustomers/OurHappyCustomers.jsx";
import SettingsModal from "../../components/SettingsModal/SettingsModal.jsx";

const HomePage = () => {
  return (
    <>
      <GreyBlock>
        <Logo />
        <WelcomeSection />
      </GreyBlock>
      <ImgBlock>
        <MainImg />
        <AdvantagesSection />
        <OurHappyCustomers />
      </ImgBlock>
      <GreyBlock>
        <SettingsModal />
      </GreyBlock>
    </>
  );
};

export default HomePage;
