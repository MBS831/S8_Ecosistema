// locales.ts
import engFlag from "../assets/eng.png";
import castFlag from "../assets/cast.png";
import catFlag from "../assets/cat.png";

export const locales = {
  en: { flag: engFlag, title: "English" },
  es: { flag: castFlag, title: "Spanish" }, 
  ca: { flag: catFlag, title: "Catalan" }, 
  translations: {
    en: {
      TotalBalance: "Total Balance",
      ExpensesLastWeek: "Expenses Last Week",
      FromYesterday: "From Yesterday",
      TodayExpenses: "Today's Expenses",
      days: {
        Monday: "Monday",
        Tuesday: "Tuesday",
        Wednesday: "Wednesday",
        Thursday: "Thursday",
        Friday: "Friday",
        Saturday: "Saturday",
        Sunday: "Sunday"
      }
    },
    es: { 
      TotalBalance: "Balance Total",
      ExpensesLastWeek: "Gastos de la Semana Pasada",
      FromYesterday: "Desde Ayer",
      TodayExpenses: "Gastos de Hoy",
      days: {
        Monday: "Lunes",
        Tuesday: "Martes",
        Wednesday: "Miércoles",
        Thursday: "Jueves",
        Friday: "Viernes",
        Saturday: "Sábado",
        Sunday: "Domingo"
      }
    },
    ca: {
      TotalBalance: "Saldo Total",
      ExpensesLastWeek: "Despeses de la Setmana Passada",
      FromYesterday: "Des d'Ahir",
      TodayExpenses: "Despeses d'Avui",
      days: {
        Monday: "Dilluns",
        Tuesday: "Dimarts",
        Wednesday: "Dimecres",
        Thursday: "Dijous",
        Friday: "Divendres",
        Saturday: "Dissabte",
        Sunday: "Diumenge"
      }
    }
  }
};
