import { useTranslation } from "react-i18next";
import { useProvider } from "../../context/Context";

function DailyExpenses() {
  const { todayExpenses } = useProvider();
  const { t } = useTranslation();

  return (
    <div>
      <div className="">
        <h2 className="font-sans text-gray-400">{t("TodayExpenses")}</h2>
        <p className="font-bold sm:text-lg lg:text-6xl">{todayExpenses}€</p>
      </div>
    </div>
  );
}

export default DailyExpenses;