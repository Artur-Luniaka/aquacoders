import GreyBlock from "../../components/GreyBlock/GreyBlock";
import ImgBlock from "../../components/ImgBlock/ImgBlock";
import AdvantagesSection from "../../components/AdvantegesSection/AdvantagesSection.jsx";

const HomePage = () => {
  return (
    <>
      <GreyBlock>
        <h2>Тут будет текстовый контент страницы Home</h2>
      </GreyBlock>
      <ImgBlock>
        <h2>Тут будет контент на картинке</h2>
        <AdvantagesSection />
      </ImgBlock>
    </>
  );
};

export default HomePage;
