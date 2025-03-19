import Calendar from "../../components/Calendar/Calendar.jsx";
import GreenBlock from "../../components/GreenBlock/GreenBlock";
import WaterProgressBar from "../../components/WaterProgressBar/WaterProgressBar.jsx";
import UserGreyBlock from "../../components/UserGreyBlock/UserGreyBlock.jsx";
import AddWaterBtn from "../../components/AddWaterBtn/AddWaterBtn.jsx";
import DailyNorma from "../../components/DailyNorma/DailyNorma.jsx";
import Logo from "../../components/Logo/Logo.jsx";
import UserBar from "../../components/UserBar/UserBar.jsx";
import DailyWaterList from "../../components/DailyWaterList/DailyWaterList.jsx";

import { useDispatch } from "react-redux";
import { getCurrentUser } from "../../redux/auth/operations/getCurrentUser.js";
import { useEffect } from "react";

import LanguageSwitcher from "../../components/Language/LanguageSwitcher.jsx"; //моє

const UserPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <GreenBlock>
        <Logo />
        <LanguageSwitcher />
        <DailyNorma />
        <WaterProgressBar />
        <AddWaterBtn />
      </GreenBlock>
      <UserGreyBlock>
        <UserBar />
        <DailyWaterList />
        <Calendar />
      </UserGreyBlock>
    </>
  );
};
export default UserPage;
