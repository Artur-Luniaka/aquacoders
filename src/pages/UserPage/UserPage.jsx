import Calendar from "../../components/Calendar/Calendar.jsx";
import GreenBlock from "../../components/GreenBlock/GreenBlock";
import UserGreyBlock from "../../components/UserGreyBlock/UserGreyBlock.jsx";
const UserPage = () => {
  return (
    <>
      <GreenBlock>
        <h2>Здесь будет контент по Юзеру</h2>
      </GreenBlock>
      <UserGreyBlock>
        <Calendar />
      </UserGreyBlock>
    </>
  );
};

export default UserPage;
