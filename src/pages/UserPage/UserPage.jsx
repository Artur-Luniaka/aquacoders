import Calendar from "../../components/Calendar/Calendar.jsx";
import GreenBlock from "../../components/GreenBlock/GreenBlock";
import WaterProgressBar from "../../components/WaterProgressBar/WaterProgressBar.jsx";
import UserGreyBlock from "../../components/UserGreyBlock/UserGreyBlock.jsx";
import AddWaterBtn from "../../components/AddWaterBtn/AddWaterBtn.jsx";
import DailyNorma from "../../components/DailyNorma/DailyNorma.jsx";
import Logo from "../../components/Logo/Logo.jsx";
import DailyWaterList from "../../components/DailyWaterList/DailyWaterList.jsx";

const UserPage = () => {
  return (
    <>
      <GreenBlock>
        <Logo />
        <DailyNorma />
        <WaterProgressBar />
        <AddWaterBtn />
      </GreenBlock>
      <UserGreyBlock>
        <Calendar />
        <DailyWaterList />
      </UserGreyBlock>
    </>
  );
};
export default UserPage;
