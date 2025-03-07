import Calendar from "../../components/Calendar/Calendar.jsx";
import GreenBlock from "../../components/GreenBlock/GreenBlock";
import UserGreyBlock from "../../components/UserGreyBlock/UserGreyBlock.jsx";
import { WaterMainInfo } from "../../components/WaterMainInfo/WaterMainInfo.jsx";

const UserPage = () => {
  return (
    <>
      <GreenBlock>
        <WaterMainInfo />
      </GreenBlock>
      <UserGreyBlock>
        <Calendar />
      </UserGreyBlock>
    </>
  );
};

export default UserPage;
