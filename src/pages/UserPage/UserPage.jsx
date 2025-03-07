import GreenBlock from "../../components/GreenBlock/GreenBlock";
import GreyBlock from "../../components/GreyBlock/GreyBlock";
import ProgressBar from "../../components/WaterProgressBar/WaterProgressBar.jsx";

const UserPage = () => {
  return (
    <>
      <GreenBlock>
        <h2>Здесь будет контент по Юзеру</h2>
        <ProgressBar />
      </GreenBlock>
      <GreyBlock>
        <h2>Здесь тоже будет контент по юзеру</h2>
      </GreyBlock>
    </>
  );
};
export default UserPage;
