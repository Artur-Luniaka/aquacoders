import GreyBlock from "../../components/GreyBlock/GreyBlock";
import Logo from "../../components/Logo/Logo";
import ImgBlock from "../../components/ImgBlock/ImgBlock";
import MainImg from "../../components/MainImg/MainImg";
import AdvantagesSection from "../../components/AdvantegesSection/AdvantagesSection.jsx";

const HomePage = () => {
  return (
    <>
      <GreyBlock>
        <Logo />
      </GreyBlock>
      <ImgBlock>
        <MainImg />
        <AdvantagesSection />
      </ImgBlock>
    </>
  );
};

export default HomePage;
