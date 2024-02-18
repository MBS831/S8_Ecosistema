import { useTranslation } from "react-i18next";
import { locales } from "../components/Locales";


const Languages: React.FC = () => {
    const { i18n } = useTranslation();

    return (
        <div className="flex gap-3 justify-end my-3">
            {Object.keys(locales).map((locale) => {
                if (locale in locales) {
                    const { flag, title } = locales[locale as keyof typeof locales] as { flag: string; title: string; };
                    return (
                        <div key={locale} className="w-11" style={{ display: "inline-block" }}>
                            <img
                                src={flag}
                                alt={title}
                                onClick={() => i18n.changeLanguage(locale)}
                                style={{ cursor: "pointer", width: "50px", height: "50px" }} 
                            />
                        </div>
                    );
                }
                return null; 
            })}
        </div>
    );
};

export default Languages;
