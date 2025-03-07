import Calendar from "../../components/Calendar/Calendar.jsx";
import GreenBlock from "../../components/GreenBlock/GreenBlock";
import ProgressBar from "../../components/WaterProgressBar/WaterProgressBar.jsx";
import UserGreyBlock from "../../components/UserGreyBlock/UserGreyBlock.jsx";
import AddWaterBtn from "../../components/AddWaterBtn/AddWaterBtn.jsx";
import DailyNorma from "../../DailyNorma/DailyNorma.jsx";

const UserPage = () => {
  return (
    <>
      <GreenBlock>
        <DailyNorma />
        <ProgressBar />
        <AddWaterBtn />
      </GreenBlock>
      <UserGreyBlock>
        <Calendar />
      </UserGreyBlock>
    </>
  );
};
export default UserPage;
