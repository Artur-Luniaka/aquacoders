import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLang = localStorage.getItem("lang") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        not_f:
          "Ooopppsss...It looks like you have navigated to a non-existent route",

        others_loading: "...Loading",
        others_set: "Set Password",
        others_add: "Adding water entry...",
        others_som: "Something went wrong. Please try again.",
        others_ent: "Entry successfully deleted!",
        others_fail: "Failed to delete entry. Try again!",
        others_proc: "Processing...",
        others_suc: "Successfully deleted entry!",
        others_suc_up: "Successfully updated water record!",
        others_fail_up: "Failed to update water data. Try again!",

        others_res: "Reset password...",
        others_pas: "Password was successfully reset!",
        others_logo: "Logout...",
        others_succ: "Successfully logged out!",

        others_sen: "Sending email...",
        others_suc_sen: "Successfully sent reset email!",

        log_out: "Logging out...",
        log_suc: "You have successfully logged out!",
        log_error: "Logout failed. Please try again.",

        main_text: "Record daily water intake and track",
        main_title: "Water consumption tracker",
        main_try: "Try tracker",
        main_sing: "Sign In",
        main_go: "Go Back to Account",
        main_our: "Our happy customers",
        main_our_o: "Our",
        main_our_h: "happy",
        main_our_c: "customers",
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
        in_sig_in: "Signing in...",
        in_suc_sig: "Successfully signed in!",

        in_val_inv: "Invalid email format",
        in_val_em: "Email is required",
        in_val_pas: "Password is required",

        up_title: "Sign Up",
        up_email: "Email",
        up_email_enter: "Enter your email",
        up_pass: "Password",
        up_pass_enter: "Enter your password",
        up_repeat: "Repeat password",
        up_repeat_two: "Repeat password",
        up_sing: "Sign Up",
        up_already: "Already have account?",
        up_our: "Our happy customers",
        up_habit: "Habit drive",
        up_view: "View statistics",
        up_personal: "Personal rate setting",

        up_val_l: "Password must be at least 5 characters",
        up_val_max: "Password must be maximum 50 characters",
        up_val_rep: "Repeat Password is required",
        up_s_up: "Signing up...",
        up_ac_cr: "Account created successfully!",

        home_l: "L",
        home_my: "My daily norma",
        home_today: "Today",
        home_add: "Add water",
        home_hello: "Hello",
        home_today_two: "Today",
        home_add_two: "Add water",
        home_ml: "ml",
        home_month: "Month",
        home_jan: "January",
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

        sett_gen: "Gender is required",
        sett_min: "Min 2 characters",
        sett_max: "Max 12 characters",
        sett_inc: "Incorrect email",
        sett_w_neg: "Weight cannot be negative",
        sett_w_kg: "Weight cannot exceed 250 kg",
        sett_w_less: "Workout time cannot be less than 0",
        sett_w_more: "Workout time cannot be more than 24",
        sett_d_less: "Daily norm cannot be less than 500ml",
        sett_d_more: "Daily norm cannot be more than 15000ml",
        sett_success: "Account updated successfully!",
        sett_pending: "Updating...",

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
        add_wat: "Water added successfully!",
        add_fail: "Failed to add water. Try again!",
        add_no: "No water records yet. Add your first entry!",

        del_title: "Delete entry",
        del_are: "Are you sure you want to delete the entry?",
        del_del: "Delete",
        del_can: "Cancel",

        log_title: "Log out",
        log_do: "Do you really want to leave?",
        log_log: "Log out",
        log_can: "Cancel",

        reset_title: "Reset Password",
        reset_enter: "Enter Your Account Email",
        reset_send: "Send reset Email",
        reset_our: "Our happy customers",
        reset_habit: "Habit drive",
        reset_view: "View statistics",
        reset_personal: "Personal rate setting",
        reset_reset: "Reset Password",
        reset_pas: "Password",
        reset_ent: "Enter your password",
        reset_rep: "Repeat password",
        reset_rep_two: "Repeat password",
        reset_chan: "Change Password",
        reset_don: "Don't have an account?",
        reset_up: "Sign Up",
        reset_in: "Invalid email",
        reset_em: "Email is required",

        google: "Sign In with Google",
      },
    },
    ua: {
      translation: {
        not_f: "Ууупппссс... Схоже, ви перейшли до неіснуючого маршруту",

        others_loading: "...Завантаження",
        others_set: "Змінити пароль",
        others_add: "Запис про воду додається...",
        others_som: "Щось пішло не так. Спробуйте ще раз.",
        others_ent: "Запис успішно видалено!",
        others_fail: "Не вдалося видалити запис. Повторіть спробу!",
        others_suc_up: "Запис про воду успішно оновлено!",
        others_fail_up: "Не вдалося оновити дані про воду. Спробуйте ще раз!",
        others_proc: "Обробка...",
        others_suc: "Запис успішно видалено!",

        others_res: "Скинути пароль...",
        others_pas: "Пароль успішно скинуто!",
        others_logo: "Вийти...",
        others_succ: "Успішно вийшов!",

        others_sen: "Надсилання листа...",
        others_suc_sen: "Надіслано електронний лист!",

        log_out: "Вихід...",
        log_suc: "Ви успішно вийшли!",
        log_error: "Помилка виходу. Спробуйте ще раз.",

        main_text: "Відстежуйте та записуйте щоденне споживання води",
        main_title: "Трекер споживання води",
        main_try: "Спробуйте",
        main_sing: "Увійти",
        main_go: "Повернутися до облікового запису",
        main_our: "Наші щасливі клієнти",
        main_our_o: "Це",
        main_our_h: "щасливі",
        main_our_c: "користувачі",
        main_habit: "Звичка",
        main_view: "Статистика",
        main_personal: "Індивідуальна норма",

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
        in_sig_in: "Вхід...",
        in_suc_sig: "Успішно ввійшли!",

        in_val_inv: "Недійсний формат електронної пошти",
        in_val_em: "Потрібна електронна адреса",
        in_val_pas: "Потрібен пароль",

        up_title: "Зареєструватися",
        up_email: "Електронна адреса",
        up_email_enter: "Введіть свою електронну адресу",
        up_pass: "Пароль",
        up_pass_enter: "Введіть свій пароль",
        up_repeat: "Повторити пароль",
        up_repeat_two: "Повторити пароль",
        up_sing: "Зареєструватися",
        up_already: "Вже є обліковий запис?",
        up_our: "Наші щасливі клієнти",
        up_habit: "Вироблення звички",
        up_view: "Переглянути статистику",
        up_personal: "Налаштування персональної ставки",

        up_val_l: "Пароль має бути щонайменше 5 символів",
        up_val_max: "Пароль має бути максимум 50 символів",
        up_val_rep: "Потрібно повторити пароль",
        up_s_up: "Реєстрація...",
        up_ac_cr: "Акаунт створено успішно!",

        home_l: "Л",
        home_my: "Моя денна норма",
        home_today: "Сьогодні",
        home_add: "Додати воду",
        home_hello: "Привіт",
        home_today_two: "Сьогодні",
        home_add_two: "Додати воду",
        home_ml: "мл",
        home_month: "Місяць",
        home_jan: "Січень",
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

        sett_title: "Профіль",
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

        sett_gen: "Стать обов'язкова",
        sett_min: "Мінімум 2 символи",
        sett_max: "Максимум 12 символів",
        sett_inc: "Неправильна електронна адреса",
        sett_w_neg: "Вага не може бути від'ємною",
        sett_w_kg: "Вага не може перевищувати 250 кг",
        sett_w_less: "Час тренування не може бути меншим за 0",
        sett_w_more: "Час тренування не може перевищувати 24",
        sett_d_less: "Денна норма не може бути менше 500 мл",
        sett_d_more: "Денна норма не може перевищувати 15000 мл",
        sett_success: "Профіль успішно оновлено!",
        sett_pending: "Оновлення...",

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
        add_wat: "Воду додано успішно!",
        add_fail: "Не вдалося додати воду. Спробуйте знову!",
        add_no: "Записів ще немає. Додайте свій перший запис!",

        del_title: "Видалити запис",
        del_are: "Ви впевнені, що хочете видалити запис?",
        del_del: "Видалити",
        del_can: "Скасувати",

        log_title: "Вийти",
        log_do: "Ви дійсно хочете піти?",
        log_log: "Вийти",
        log_can: "Скасувати",

        reset_title: "Скинути пароль",
        reset_enter: "Введіть свою електронну пошту",
        reset_send: "Відправити лист на пошту",
        reset_our: "Наші щасливі клієнти",
        reset_habit: "Вироблення звички",
        reset_view: "Переглянути статистику",
        reset_personal: "Налаштування персональної ставки",
        reset_reset: "Скинути пароль",
        reset_pas: "Пароль",
        reset_ent: "Введіть новий пароль",
        reset_rep: "Повторити пароль",
        reset_rep_two: "Повторити пароль",
        reset_chan: "Змінити пароль",
        reset_don: "Не маєте облікового запису?",
        reset_up: "Зареєструйтеся",
        reset_in: "Неправильний email",
        reset_em: "Email є обов'язковим",

        google: "Увійти за допомогою Google",
      },
    },
  },
  lng: savedLang,
  fallbackLng: "ua",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
