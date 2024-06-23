import style from "./WaterMainInfo.module.css";
import AddWaterBtn from "../AddWaterBtn/AddWaterBtn";
import WaterDailyNorma from "../WaterDailyNorma/WaterDailyNorma";
import WaterProgressBar from "../WaterProgressBar/WaterProgressBar";
import Logo from "../Logo/Logo";
import css from "../AddWaterBtn/AddWaterBtn.module.css";
import { useState } from "react";

export default function WaterMainInfo() {
  const [dailyNorma, setDailyNorma] = useState("2.0"); //денна норма води
  const [drunkWater, setDrunkWater] = useState("470"); //кількість випитої води в день

  const dailyNormaNum = parseFloat(dailyNorma.replace(",", ".")) * 1000;
  const drunkWaterNum = parseFloat(drunkWater);

  let progress = (drunkWaterNum / dailyNormaNum) * 100;
  if (progress < 0) progress = 0;
  if (progress > 100) progress = 100;

  return (
    <div className={style.box}>
      <Logo />
      <WaterDailyNorma dailyNorma={dailyNorma} />
      <WaterProgressBar progress={progress} />
      <AddWaterBtn
        buttonStyle={css.btn}
        svgStyle={css.svg_plus}
        textStyle={css.text}
        iconName="plus"
      />
    </div>
  );
}
