import Calendar from "../../components/Calendar/Calendar.jsx";
import GreenBlock from "../../components/GreenBlock/GreenBlock";
import GreyBlock from "../../components/GreyBlock/GreyBlock";
import { WaterMainInfo } from "../../components/WaterMainInfo/WaterMainInfo.jsx";
import UserGreyBlock from "../../components/UserGreyBlock/UserGreyBlock.jsx";
import UserGreyBlock from "../../components/UserGreyBlock/UserGreyBlock.jsx";

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
