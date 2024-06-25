import AddWaterBtn from "../AddWaterBtn/AddWaterBtn";
import ChooseDate from "../ChooseDate/ChooseDate";
import WaterList from "../WaterList/WaterList";
import css from "../AddWaterBtn/AddWaterBtnDaily.module.css";
import style from "./DailyInfo.module.css";
import { useState } from "react";
import WaterModal from "../WaterModal/WaterModal";
import scrollController from "../../services/noScroll";
import { useDispatch } from "react-redux";
import { addWaterRecord } from "../../redux/water/operations";
import { currentDay } from "../../services/currentDay";

export default function DailyInfo() {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const addNewWater = (newWater) => {
    dispatch(addWaterRecord(newWater));
  };

  function openModal() {
    setIsOpen(true);
    scrollController.disabledScroll();
  }
  function closeModal() {
    setIsOpen(false);
    scrollController.enabledScroll();
  }

  const onSubmitData = (data, counter) => {
    addNewWater({
      ...data,
      time: `${currentDay()}-${data.time}`,
      amount: counter,
    });
    closeModal();
  };

  return (
    <div className={style.main}>
      {isOpen && (
        <WaterModal
          onCloseModal={closeModal}
          isOpen={isOpen}
          onSubmitData={onSubmitData}
        />
      )}
      <div className={style.box_flex}>
        <ChooseDate />
        <AddWaterBtn
          buttonStyle={css.btn}
          svgStyle={css.svg_plus}
          textStyle={css.text}
          svg_plus_hover={css.svg_plus_hover}
          iconName="plusGreen"
          hoverIconName="plusGrey"
          openModal={openModal}
        />
      </div>
      <WaterList />
    </div>
  );
}
