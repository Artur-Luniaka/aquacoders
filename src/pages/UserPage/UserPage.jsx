import Calendar from "../../components/Calendar/Calendar.jsx";
import GreenBlock from "../../components/GreenBlock/GreenBlock";
import GreyBlock from "../../components/GreyBlock/GreyBlock";

const UserPage = () => {
  return (
    <>
      <GreenBlock>
        <h2>Здесь будет контент по Юзеру</h2>
      </GreenBlock>
      <GreyBlock>
        <Calendar />
      </GreyBlock>
    </>
  );
};

export default UserPage;
