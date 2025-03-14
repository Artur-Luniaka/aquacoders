import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        main_text: "Record daily water intake and track",
        main_title: "Water consumption tracker",
        main_try: "Try tracker",
        main_sing: "Sign In",
        main_our: "Our happy customers",
        main_habit: "Habit drive",
        main_view: "View statistics",
        main_personal: "Personal rate setting",

        in_title: "Sign In",
        in_email: "Email",
        in_email_enter: "Enter your email",
        in_pass: "Password",
        in_pass_enter: "Enter your password",
        in_sing: "Sign In",
        in_dont: "Don’t have an account? Sign Up",
        in_our: "Our happy customers",
        in_habit: "Habit drive",
        in_view: "View statistics",
        in_personal: "Personal rate setting",

        up_title: "Sign Up",
        up_email: "Email",
        up_email_enter: "Enter your email",
        up_pass: "Password",
        up_pass_enter: "Enter your password",
        up_repeat: "Repeat password",
        up_repeat_two: "Repeat password",
        up_sing: "Sign Up",
        up_already: "Already have account? Sign In",
        up_our: "Our happy customers",
        up_habit: "Habit drive",
        up_view: "View statistics",
        up_personal: "Personal rate setting",

        home_l: "L",
        home_my: "My daily norma",
        home_today: "Today",
        home_add: "Add water",
        home_hello: "Hello",
        home_today_two: "Today",
        home_add_two: "Add water",
        home_ml: "ml",
        home_month: "Month",
        home_janu: "January",
        home_feb: "February",
        home_mar: "March",
        home_ap: "April",
        home_may: "May",
        home_june: "June",
        home_july: "July",
        home_au: "August",
        home_sep: "September",
        home_oc: "October ",
        home_nov: "November",
        home_dec: "December",
        home_set: "Setting",
        home_log: "Log out",
        home_stat: "Statistics",

        sett_title: "Setting",
        sett_upload: "Upload a photo",
        sett_your: "Your gender identity",
        sett_woman: "Woman",
        sett_man: "Man",
        sett_your_n: "Your name",
        sett_nadia: "Nadia",
        sett_email: "Email",
        sett_com: "nadia10@gmail.com",
        sett_my: "My daily norma",
        sett_for_woman: "For woman:",
        sett_for_man: "For man:",
        sett_v:
          "* V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)",
        sett_act: "Active time in hours",
        sett_save: "Save",
        sett_kilo: "Your weight in kilograms:",
        sett_time: "The time of active participation in sports:",
        sett_req: "The required amount of water in liters per day:",
        sett_l: "L",
        sett_write: "Write down how much water you will drink:",

        edit_title: "Edit the entered amount of water",
        edit_cor: "Correct entered data:",
        edit_amount: "Amount of water:",
        edit_ml: "ml",
        edit_rec: "Recording time:",
        edit_enter: "Enter the value of the water used:",
        edit_save: "Save",

        add_title: "Add water",
        add_choose: "Choose a value:",
        add_amount: "Amount of water:",
        add_ml: "ml",
        add_rec: "Recording time:",
        add_enter: "Enter the value of the water used:",
        add_save: "Save",

        del_title: "Delete entry",
        del_are: "Are you sure you want to delete the entry?",
        del_del: "Delete",
        del_can: "Cancel",

        log_title: "Log out",
        log_do: "Do you really want to leave?",
        log_log: "Log out",
        log_can: "Cancel",
      },
    },
    ua: {
      translation: {
        main_text: "Відстежуйте та записуйте щоденне споживання води",
        main_title: "Трекер споживання води",
        main_try: "Спробуйте",
        main_sing: "Увійти",
        main_our: "Наші щасливі клієнти",
        main_habit: "Вироблення звички",
        main_view: "Перегляд статистики",
        main_personal: "Налаштування індивідуальної норми",

        in_title: "Увійти",
        in_email: "Електронна адреса",
        in_email_enter: "Введіть свою електронну адресу",
        in_pass: "Пароль",
        in_pass_enter: "Введіть свій пароль",
        in_sing: "Увійти",
        in_dont: "Не маєте облікового запису? Зареєструйтеся",
        in_our: "Наші щасливі клієнти",
        in_habit: "Вироблення звички",
        in_view: "Переглянути статистику",
        in_personal: "Налаштування персональної ставки",

        up_title: "Зареєструватися",
        up_email: "Електронна адреса",
        up_email_enter: "Введіть свою електронну адресу",
        up_pass: "Пароль",
        up_pass_enter: "Введіть свій пароль",
        up_repeat: "Повторити пароль",
        up_repeat_two: "Повторити пароль",
        up_sing: "Зареєструватися",
        up_already: "Вже є обліковий запис? Увійдіть",
        up_our: "Наші щасливі клієнти",
        up_habit: "Вироблення звички",
        up_view: "Переглянути статистику",
        up_personal: "Налаштування персональної ставки",

        home_l: "Л",
        home_my: "Моя денна норма",
        home_today: "Сьогодні",
        home_add: "Додати воду",
        home_hello: "Привіт",
        home_today_two: "Сьогодні",
        home_add_two: "Додати воду",
        home_ml: "мл",
        home_month: "Місяць",
        home_janu: "Січень",
        home_feb: "Лютий",
        home_mar: "Березень",
        home_ap: "Квітень",
        home_may: "Травень",
        home_june: "Червень",
        home_july: "Липень",
        home_au: "Серпень",
        home_sep: "Вересень",
        home_oc: "Жовтень",
        home_nov: "Листопад",
        home_dec: "Грудень",
        home_set: "Налаштування",
        home_log: "Вийти",
        home_stat: "Статистика",

        sett_title: "Налаштування",
        sett_upload: "Завантажити фото",
        sett_your: "Ваша гендерна ідентичність",
        sett_woman: "Жінка",
        sett_man: "Чоловік",
        sett_your_n: "Ваше ім'я",
        sett_nadia: "Надія",
        sett_email: "Електронна пошта",
        sett_com: "nadia10@gmail.com",
        sett_my: "Моя денна норма",
        sett_for_woman: "Для жінки:",
        sett_for_man: "Для чоловіка:",
        sett_v:
          "* V – об’єм водної норми в літрах на добу, M – маса вашого тіла, T – час занять активними видами спорту, або іншого співвідносного за навантаженнями виду діяльності (за їх відсутності потрібно поставити 0)",
        sett_act: "Час активності в годинах",
        sett_save: "Зберегти",
        sett_kilo: "Ваша вага в кілограмах:",
        sett_time: "Час активного заняття спортом:",
        sett_req: "Необхідна кількість води в літрах на день:",
        sett_l: "Л",
        sett_write: "Запишіть, скільки води ви будете пити:",

        edit_title: "Редагувати введену кількість води",
        edit_cor: "Правильно введені дані:",
        edit_amount: "Кількість води:",
        edit_ml: "мл",
        edit_rec: "Час запису:",
        edit_enter: "Введіть кількість спожитої води:",
        edit_save: "Зберегти",

        add_title: "Додати воду",
        add_choose: "Виберіть значення:",
        add_amount: "Кількість води:",
        add_ml: "мл",
        add_rec: "Час запису:",
        add_enter: "Введіть кількість спожитої води:",
        add_save: "Зберегти",

        del_title: "Видалити запис",
        del_are: "Ви впевнені, що хочете видалити запис?",
        del_del: "Видалити",
        del_can: "Скасувати",

        log_title: "Вийти",
        log_do: "Ви дійсно хочете піти?",
        log_log: "Вийти",
        log_can: "Скасувати",
      },
    },
  },
  lng: "en", // за замовчуванням
  fallbackLng: "ua",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
