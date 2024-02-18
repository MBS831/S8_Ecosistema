import { useTranslation } from "react-i18next";
import { useProvider } from "../../context/Context";

function DailyVariation() {
  const { percentageVariation, sign } = useProvider();
  const { t } = useTranslation();

  return (
    <div>
      <div className="lg:text-end sm:items-center sm:text-center lg:place-self-end">
        <p className="font-bold text-xl">
          {sign}
          {percentageVariation}%
        </p>
        <h3 className="font-sans font-bold">{t("FromYesterday")}</h3>
      </div>
    </div>
  );
}

export default DailyVariation;