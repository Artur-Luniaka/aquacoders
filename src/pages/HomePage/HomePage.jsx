import GreyBlock from "../../components/GreyBlock/GreyBlock";
import Logo from "../../components/Logo/Logo";
import ImgBlock from "../../components/ImgBlock/ImgBlock";
import MainImg from "../../components/MainImg/MainImg";
import InfoLabels from "../../components/AdvantegesSection/AdvantagesSection.jsx";


const HomePage = () => {
  return (
    <>
      <GreyBlock>
        <Logo />
        <h2>Тут будет текстовый контент страницы Home</h2>
      </GreyBlock>
      <ImgBlock>
        <MainImg />
        <h2>Тут будет контент на картинке</h2>
        <InfoLabels />
      </ImgBlock>
    </>
  );
};

export default HomePage;
