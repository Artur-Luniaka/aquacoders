import Calendar from "../../components/Calendar/Calendar.jsx";
import GreenBlock from "../../components/GreenBlock/GreenBlock";
import GreyBlock from "../../components/GreyBlock/GreyBlock";
import { WaterMainInfo } from "../../components/WaterMainInfo/WaterMainInfo.jsx";

const UserPage = () => {
  return (
    <>
      <GreenBlock>
        <WaterMainInfo />
      </GreenBlock>
      <GreyBlock>
        <Calendar />
      </GreyBlock>
    </>
  );
};

export default UserPage;
