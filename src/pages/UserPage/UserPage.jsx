import GreenBlock from "../../components/GreenBlock/GreenBlock";
import GreyBlock from "../../components/GreyBlock/GreyBlock";
import WaterProgressBar from "../../components/WaterProgressBar/WaterProgressBar.jsx";

const UserPage = () => {
  return (
    <>
      <GreenBlock>
        <h2>Здесь будет контент по Юзеру</h2>
        <WaterProgressBar />
      </GreenBlock>
      <GreyBlock>
        <h2>Здесь тоже будет контент по юзеру</h2>
      </GreyBlock>
    </>
  );
};
export default UserPage;
