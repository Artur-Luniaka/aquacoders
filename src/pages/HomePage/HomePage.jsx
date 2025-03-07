import GreyBlock from "../../components/GreyBlock/GreyBlock";
import Logo from "../../components/Logo/Logo";
import ImgBlock from "../../components/ImgBlock/ImgBlock";
import MainImg from "../../components/MainImg/MainImg";

const HomePage = () => {
  return (
    <>
      <GreyBlock>
        <Logo />
        <h2>Тут будет текстовый контент страницы Home</h2>
      </GreyBlock>
      <ImgBlock>
        <MainImg />
      </ImgBlock>
    </>
  );
};

export default HomePage;
