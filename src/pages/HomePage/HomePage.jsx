import GreyBlock from "../../components/GreyBlock/GreyBlock";
import ImgBlock from "../../components/ImgBlock/ImgBlock";
import InfoLabels from "../../components/AdvantegesSection/AdvantagesSection.jsx";

const HomePage = () => {
  return (
    <>
      <GreyBlock>
        <h2>Тут будет текстовый контент страницы Home</h2>
      </GreyBlock>
      <ImgBlock>
        <h2>Тут будет контент на картинке</h2>
        <InfoLabels />
      </ImgBlock>
    </>
  );
};

export default HomePage;
