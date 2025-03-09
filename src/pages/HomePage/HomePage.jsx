import GreyBlock from "../../components/GreyBlock/GreyBlock";
import ImgBlock from "../../components/ImgBlock/ImgBlock";
import SignInForm from "../../components/SigninForm/SignInForm";

const HomePage = () => {
  return (
    <>
      <GreyBlock>
        <h2>Тут будет текстовый контент страницы Home</h2>
        <SignInForm />
      </GreyBlock>
      <ImgBlock>
        <h2>Тут будет контент на картинке</h2>
      </ImgBlock>
    </>
  );
};

export default HomePage;
