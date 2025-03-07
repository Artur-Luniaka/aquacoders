import Calendar from "../../components/Calendar/Calendar.jsx";
import GreenBlock from "../../components/GreenBlock/GreenBlock";
<<<<<<< HEAD
import GreyBlock from "../../components/GreyBlock/GreyBlock";
import { WaterMainInfo } from "../../components/WaterMainInfo/WaterMainInfo.jsx";
=======
import UserGreyBlock from "../../components/UserGreyBlock/UserGreyBlock.jsx";
>>>>>>> e50f177946fa97c3e2ec49b31e76bb5b445aaa24

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
