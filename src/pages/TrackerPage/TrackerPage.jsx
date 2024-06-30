import { useDispatch } from "react-redux";
import WaterDetailedInfo from "../../components/WaterDetailedInfo/WaterDetailedInfo";
import WaterMainInfo from "../../components/WaterMainInfo/WaterMainInfo";
import { useEffect } from "react";
import { getUserInfo } from "../../redux/auth/operations";
import { getWaterPerDay } from "../../redux/water/operations";

const TrackerPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // eslint-disable-next-line no-debugger

    dispatch(getUserInfo());
    dispatch(getWaterPerDay());
  }, [dispatch]);

  return (
    <>
      <WaterMainInfo />
      <WaterDetailedInfo />
    </>
  );
};

export default TrackerPage;
