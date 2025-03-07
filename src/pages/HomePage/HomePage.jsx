import GreyBlock from "../../components/GreyBlock/GreyBlock";
import ImgBlock from "../../components/ImgBlock/ImgBlock";
import OurHappyCustomers from "../../components/OurHappyCustomers/OurHappyCustomers.jsx";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection.jsx";

const HomePage = () => {
  return (
    <>
      <GreyBlock>
        <WelcomeSection />
      </GreyBlock>
      <ImgBlock>
        <OurHappyCustomers />
      </ImgBlock>
    </>
  );
};

export default HomePage;
