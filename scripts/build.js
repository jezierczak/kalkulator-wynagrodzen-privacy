// Generuje strony polityki prywatności (pl/en/uk/ru) z jednego miejsca. Uruchom: node scripts/build.js
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');

// === UZUPEŁNIJ PRZED PUBLIKACJĄ ===
const DEVELOPER = 'Firma Usługowa Jarosław Jezierczak';
const EMAIL = 'jezierczak@gmail.com';
const UPDATED = '2026-10-16';
// ==================================

const langs = {
  pl: {
    name: 'Mobilny kalkulator wynagrodzeń', title: 'Polityka prywatności', lang: 'pl',
    updated: 'Ostatnia aktualizacja', switch: 'Język',
    sections: [
      ['Najważniejsze', [
        'Aplikacja nie wymaga konta ani logowania i nie zbiera Twoich danych osobowych na żadnym naszym serwerze. Nie mamy serwera, na którym przechowywalibyśmy dane użytkowników.',
        'Wpisane kwoty, zapisane kalkulacje i plany zostają w pamięci Twojego telefonu.',
        'Dane do zewnętrznych usług trafiają tylko w związku z reklamami (Google AdMob), zakupem wersji Premium (Google Play) oraz – jeśli sam włączysz przeliczanie walut w Premium – pobieraniem publicznych kursów z Narodowego Banku Polskiego, opisanymi niżej.',
      ]],
      ['Administrator', [
        'Administratorem w rozumieniu RODO jest ' + DEVELOPER + ' (dalej „Autor”). Kontakt: ' + EMAIL + '.',
      ]],
      ['Dane przechowywane w telefonie', [
        'Aplikacja zapisuje lokalnie: zapisane kalkulacje i ich nazwy, scenariusze (plany roczne), ustawienia (motyw, język, rok stawek), informację o zakupie Premium, ostatnio pobraną tabelę kursów NBP oraz liczniki potrzebne do ograniczenia częstotliwości reklam.',
        'Dane te nie są wysyłane do Autora. Usuniesz je, kasując dane aplikacji lub ją odinstalowując.',
        'Jeśli masz włączoną kopię zapasową Androida, system może zapisać na Twoim koncie Google zapisane kalkulacje i scenariusze oraz układ ekranów Porównania i Projekcji (ustawienia, informacja o Premium, kursy i liczniki reklam nie trafiają do kopii). Tym procesem zarządza Google, nie Autor, a ustawisz go w ustawieniach telefonu.',
      ]],
      ['Reklamy', [
        'W wersji bezpłatnej aplikacja wyświetla reklamy za pośrednictwem Google AdMob. Google może przetwarzać dane urządzenia, takie jak identyfikator reklamowy, adres IP, informacje o urządzeniu i aplikacji oraz dane o interakcji z reklamą, aby wyświetlać i rozliczać reklamy, zapobiegać nadużyciom i, za Twoją zgodą, personalizować reklamy. Autor nie otrzymuje tych danych w postaci pozwalającej Cię zidentyfikować.',
        'W Europejskim Obszarze Gospodarczym i w Wielkiej Brytanii przy pierwszym uruchomieniu pytamy o zgodę za pomocą formularza zgody Google (UMP). Zgodę możesz zmienić w każdej chwili w Opcje → Prywatność reklam. Bez zgody na personalizację wyświetlane są reklamy niespersonalizowane.',
        'Więcej informacji: jak Google wykorzystuje dane z witryn i aplikacji partnerów: policies.google.com/technologies/partner-sites. Identyfikator reklamowy możesz zresetować lub wyłączyć w ustawieniach Androida.',
        'Wersja Premium nie wyświetla reklam.',
      ]],
      ['Zakup Premium', [
        'Zakupu dokonujesz w Google Play. Płatność obsługuje Google; Autor nie widzi ani nie przechowuje danych Twojej karty ani innych danych płatniczych. Aplikacja otrzymuje od Google Play jedynie informację, że zakup został dokonany.',
      ]],
      ['Kursy walut NBP', [
        'Przeliczanie walut to opcjonalna funkcja wersji Premium, którą włączasz w Opcje → Waluty (w języku polskim jest domyślnie wyłączona). Gdy jest włączona, aplikacja pobiera publiczną tabelę średnich kursów walut z Narodowego Banku Polskiego (api.nbp.pl). Zapytanie nie zawiera Twoich kwot, kalkulacji ani żadnych danych osobowych.',
        'Jak przy każdym połączeniu z internetem, serwer NBP widzi techniczne dane zapytania, np. adres IP. Autor ich nie otrzymuje. Zasady przetwarzania danych przez NBP opisuje on sam na stronie nbp.pl.',
        'Ostatnio pobrana tabela jest zapisana w telefonie, więc przeliczanie działa też bez internetu. Kurs i jego data są zapisywane razem z kalkulacją, którą zapiszesz, żeby wynik można było odtworzyć.',
      ]],
      ['Eksport do PDF i udostępnianie', [
        'Raport PDF powstaje na Twoim telefonie. Trafia tylko do aplikacji, którą sam wybierzesz w oknie udostępniania (np. poczta, komunikator, dysk). Autor nie ma do niego dostępu.',
      ]],
      ['Uprawnienie do internetu', [
        'Aplikacja używa internetu wyłącznie do wyświetlania reklam, obsługi zakupu oraz (opcjonalnie, w Premium) pobierania kursów walut NBP. Same obliczenia działają bez internetu.',
      ]],
      ['Dzieci', [
        'Aplikacja jest przeznaczona dla osób dorosłych i nie jest skierowana do dzieci. Świadomie nie zbieramy danych dzieci.',
      ]],
      ['Twoje prawa', [
        'Ponieważ Autor nie przechowuje Twoich danych osobowych, prawa wynikające z RODO (dostęp, sprostowanie, usunięcie, ograniczenie, sprzeciw, przenoszenie) w praktyce realizujesz sam, kasując dane w aplikacji. W sprawach danych przetwarzanych przez Google możesz skorzystać z narzędzi Google lub skontaktować się z Google. Masz też prawo wniesienia skargi do organu nadzorczego (w Polsce: Prezes Urzędu Ochrony Danych Osobowych).',
      ]],
      ['Zmiany tej polityki', [
        'Polityka może się zmienić, np. po dodaniu nowych funkcji. Aktualna wersja jest zawsze na tej stronie, z datą ostatniej aktualizacji.',
      ]],
      ['Kontakt', ['Pytania dotyczące prywatności: ' + EMAIL + '.']],
    ],
  },
  en: {
    name: 'Salary Calculator', title: 'Privacy Policy', lang: 'en',
    updated: 'Last updated', switch: 'Language',
    sections: [
      ['Summary', [
        'The app needs no account or sign-in and does not collect your personal data on any server of ours. We do not run a server that stores user data.',
        'The amounts you enter, saved calculations and plans stay in your phone’s storage.',
        'Data reaches third-party services only through advertising (Google AdMob), the Premium purchase (Google Play) and, if you yourself turn on currency conversion in Premium, the download of public exchange rates from the National Bank of Poland, described below.',
      ]],
      ['Controller', [
        'The controller within the meaning of the GDPR is ' + DEVELOPER + ' (“the Developer”). Contact: ' + EMAIL + '.',
      ]],
      ['Data stored on your phone', [
        'The app stores locally: saved calculations and their names, scenarios (yearly plans), settings (theme, language, rates year), whether Premium has been purchased, the most recently downloaded NBP exchange-rate table, and counters used to limit how often ads appear.',
        'This data is not sent to the Developer. You can delete it by clearing the app’s data or uninstalling the app.',
        'If Android backup is enabled on your device, the system may store your saved calculations and scenarios and the layout of the Compare and Projection screens in your Google account (settings, Premium status, exchange rates and ad counters are not included in the backup). Google, not the Developer, manages that process, and you can control it in your phone’s settings.',
      ]],
      ['Advertising', [
        'The free version shows ads through Google AdMob. Google may process device data such as the advertising ID, IP address, device and app information and ad interaction data to serve and measure ads, prevent fraud and, with your consent, personalise ads. The Developer does not receive this data in a form that identifies you.',
        'In the European Economic Area and the United Kingdom we ask for your consent on first launch using Google’s consent form (UMP). You can change your choice at any time in Options → Ad privacy. Without consent to personalisation, non-personalised ads are shown.',
        'More information: how Google uses data from sites or apps that use its services: policies.google.com/technologies/partner-sites. You can reset or disable the advertising ID in Android settings.',
        'The Premium version shows no ads.',
      ]],
      ['Premium purchase', [
        'You buy Premium through Google Play. Google handles the payment; the Developer does not see or store your card or other payment details. The app only receives confirmation from Google Play that the purchase was made.',
      ]],
      ['NBP exchange rates', [
        'Currency conversion is an optional Premium feature that you turn on in Options → Currencies (it is off by default in Polish). When it is on, the app downloads the public table of average exchange rates from the National Bank of Poland (api.nbp.pl). The request contains none of your amounts, calculations or personal data.',
        'As with any internet connection, the NBP server sees technical details of the request, such as the IP address. The Developer does not receive them. NBP describes how it processes data on nbp.pl.',
        'The most recently downloaded table is stored on your phone, so conversion also works offline. The rate and its date are saved together with a calculation you save, so the result can be reproduced.',
      ]],
      ['PDF export and sharing', [
        'A PDF report is created on your phone. It goes only to the app you choose in the share dialog (for example email, messenger or cloud storage). The Developer has no access to it.',
      ]],
      ['Internet permission', [
        'The app uses the internet only to show ads, to handle the purchase and (optionally, in Premium) to download NBP exchange rates. The calculations themselves work offline.',
      ]],
      ['Children', [
        'The app is intended for adults and is not directed at children. We do not knowingly collect children’s data.',
      ]],
      ['Your rights', [
        'Because the Developer does not store your personal data, you can in practice exercise your GDPR rights (access, rectification, erasure, restriction, objection, portability) yourself by deleting the data in the app. For data processed by Google, use Google’s tools or contact Google. You also have the right to lodge a complaint with a supervisory authority.',
      ]],
      ['Changes to this policy', [
        'This policy may change, for example when new features are added. The current version is always on this page, with the date of the last update.',
      ]],
      ['Contact', ['Privacy questions: ' + EMAIL + '.']],
    ],
  },
  uk: {
    name: 'Калькулятор зарплати', title: 'Політика конфіденційності', lang: 'uk',
    updated: 'Остання редакція', switch: 'Мова',
    sections: [
      ['Головне', [
        'Застосунок не потребує облікового запису чи входу й не збирає ваших персональних даних на жодному нашому сервері. Ми не маємо сервера, на якому зберігалися б дані користувачів.',
        'Введені суми, збережені розрахунки та плани залишаються в пам’яті вашого телефона.',
        'Дані потрапляють до зовнішніх сервісів лише у зв’язку з рекламою (Google AdMob), купівлею Premium (Google Play) і, якщо ви самі ввімкнете переведення валют у Premium, завантаженням публічних курсів Національного банку Польщі, описаними нижче.',
      ]],
      ['Адміністратор', [
        'Адміністратором у розумінні GDPR є ' + DEVELOPER + ' (далі «Автор»). Контакт: ' + EMAIL + '.',
      ]],
      ['Дані, що зберігаються в телефоні', [
        'Застосунок локально зберігає: збережені розрахунки та їхні назви, сценарії (річні плани), налаштування (тема, мова, рік ставок), інформацію про купівлю Premium, останню завантажену таблицю курсів НБП та лічильники, потрібні для обмеження частоти реклами.',
        'Ці дані не надсилаються Авторові. Ви можете видалити їх, очистивши дані застосунку або видаливши його.',
        'Якщо на пристрої ввімкнено резервне копіювання Android, система може зберегти у вашому обліковому записі Google збережені розрахунки й сценарії та вигляд екранів «Порівняння» і «Проєкція» (налаштування, інформація про Premium, курси та лічильники реклами до копії не потрапляють). Цим процесом керує Google, а не Автор; його можна налаштувати в параметрах телефона.',
      ]],
      ['Реклама', [
        'У безплатній версії застосунок показує рекламу через Google AdMob. Google може обробляти дані пристрою, як-от рекламний ідентифікатор, IP-адресу, відомості про пристрій і застосунок та дані про взаємодію з рекламою, щоб показувати й обліковувати рекламу, запобігати зловживанням і, за вашою згодою, персоналізувати рекламу. Автор не отримує цих даних у вигляді, що дозволяє вас ідентифікувати.',
        'У Європейській економічній зоні та Великій Британії під час першого запуску ми запитуємо згоду за допомогою форми згоди Google (UMP). Свій вибір можна змінити в будь-який час: Опції → Конфіденційність реклами. Без згоди на персоналізацію показується неперсоналізована реклама.',
        'Докладніше: як Google використовує дані сайтів і застосунків-партнерів: policies.google.com/technologies/partner-sites. Рекламний ідентифікатор можна скинути або вимкнути в налаштуваннях Android.',
        'Версія Premium не показує реклами.',
      ]],
      ['Купівля Premium', [
        'Premium купується в Google Play. Платіж обробляє Google; Автор не бачить і не зберігає даних вашої картки чи інших платіжних даних. Застосунок отримує від Google Play лише підтвердження, що купівлю здійснено.',
      ]],
      ['Курси валют НБП', [
        'Переведення валют — необов’язкова функція Premium, яку ви вмикаєте в Опції → Валюти (для польської мови вона вимкнена за замовчуванням). Коли її ввімкнено, застосунок завантажує публічну таблицю середніх курсів валют з Національного банку Польщі (api.nbp.pl). Запит не містить ваших сум, розрахунків чи персональних даних.',
        'Як і при кожному з’єднанні з інтернетом, сервер НБП бачить технічні дані запиту, наприклад IP-адресу. Автор їх не отримує. Як НБП обробляє дані, він описує сам на сторінці nbp.pl.',
        'Останню завантажену таблицю збережено в телефоні, тож переведення працює й без інтернету. Курс і його дата зберігаються разом із розрахунком, який ви збережете, щоб результат можна було відтворити.',
      ]],
      ['Експорт у PDF і поширення', [
        'PDF-звіт створюється на вашому телефоні. Він потрапляє лише до застосунку, який ви самі оберете у вікні поширення (наприклад, пошта, месенджер, хмарне сховище). Автор не має до нього доступу.',
      ]],
      ['Доступ до інтернету', [
        'Застосунок використовує інтернет лише для показу реклами, обробки купівлі та (за бажанням, у Premium) завантаження курсів валют НБП. Самі розрахунки працюють без інтернету.',
      ]],
      ['Діти', [
        'Застосунок призначений для дорослих і не спрямований на дітей. Ми свідомо не збираємо даних дітей.',
      ]],
      ['Ваші права', [
        'Оскільки Автор не зберігає ваших персональних даних, права за GDPR (доступ, виправлення, видалення, обмеження, заперечення, перенесення) ви практично реалізуєте самі, видаляючи дані в застосунку. Щодо даних, які обробляє Google, скористайтеся інструментами Google або зверніться до Google. Ви також маєте право подати скаргу до наглядового органу.',
      ]],
      ['Зміни політики', [
        'Політика може змінюватися, наприклад, після додавання нових функцій. Актуальна версія завжди на цій сторінці з датою останнього оновлення.',
      ]],
      ['Контакт', ['Питання щодо конфіденційності: ' + EMAIL + '.']],
    ],
  },
  ru: {
    name: 'Калькулятор зарплаты', title: 'Политика конфиденциальности', lang: 'ru',
    updated: 'Последнее обновление', switch: 'Язык',
    sections: [
      ['Главное', [
        'Приложению не нужны учётная запись или вход, и оно не собирает ваши персональные данные ни на одном нашем сервере. У нас нет сервера, на котором хранились бы данные пользователей.',
        'Введённые суммы, сохранённые расчёты и планы остаются в памяти вашего телефона.',
        'Данные попадают во внешние сервисы только в связи с рекламой (Google AdMob), покупкой Premium (Google Play) и, если вы сами включите пересчёт валют в Premium, загрузкой публичных курсов Национального банка Польши, описанными ниже.',
      ]],
      ['Оператор', [
        'Оператором в смысле GDPR является ' + DEVELOPER + ' (далее «Автор»). Контакт: ' + EMAIL + '.',
      ]],
      ['Данные, хранящиеся в телефоне', [
        'Приложение локально хранит: сохранённые расчёты и их названия, сценарии (годовые планы), настройки (тема, язык, год ставок), сведения о покупке Premium, последнюю загруженную таблицу курсов НБП и счётчики, нужные для ограничения частоты показа рекламы.',
        'Эти данные не отправляются Автору. Вы можете удалить их, очистив данные приложения или удалив его.',
        'Если на устройстве включено резервное копирование Android, система может сохранить в вашем аккаунте Google сохранённые расчёты и сценарии, а также вид экранов «Сравнение» и «Проекция» (настройки, сведения о Premium, курсы и счётчики рекламы в копию не попадают). Этим процессом управляет Google, а не Автор; его можно настроить в параметрах телефона.',
      ]],
      ['Реклама', [
        'В бесплатной версии приложение показывает рекламу через Google AdMob. Google может обрабатывать данные устройства, такие как рекламный идентификатор, IP-адрес, сведения об устройстве и приложении и данные о взаимодействии с рекламой, чтобы показывать и учитывать рекламу, предотвращать злоупотребления и, с вашего согласия, персонализировать рекламу. Автор не получает этих данных в виде, позволяющем вас идентифицировать.',
        'В Европейской экономической зоне и Великобритании при первом запуске мы запрашиваем согласие с помощью формы согласия Google (UMP). Свой выбор можно изменить в любое время: Опции → Конфиденциальность рекламы. Без согласия на персонализацию показывается неперсонализированная реклама.',
        'Подробнее: как Google использует данные сайтов и приложений-партнёров: policies.google.com/technologies/partner-sites. Рекламный идентификатор можно сбросить или отключить в настройках Android.',
        'Версия Premium не показывает рекламу.',
      ]],
      ['Покупка Premium', [
        'Premium покупается в Google Play. Платёж обрабатывает Google; Автор не видит и не хранит данные вашей карты или иные платёжные данные. Приложение получает от Google Play лишь подтверждение, что покупка совершена.',
      ]],
      ['Курсы валют НБП', [
        'Пересчёт валют — необязательная функция Premium, которую вы включаете в Опции → Валюты (для польского языка она по умолчанию выключена). Когда она включена, приложение загружает публичную таблицу средних курсов валют из Национального банка Польши (api.nbp.pl). Запрос не содержит ваших сумм, расчётов или персональных данных.',
        'Как и при любом подключении к интернету, сервер НБП видит технические данные запроса, например IP-адрес. Автор их не получает. Как НБП обрабатывает данные, он описывает сам на странице nbp.pl.',
        'Последняя загруженная таблица хранится в телефоне, поэтому пересчёт работает и без интернета. Курс и его дата сохраняются вместе с расчётом, который вы сохраните, чтобы результат можно было воспроизвести.',
      ]],
      ['Экспорт в PDF и отправка', [
        'PDF-отчёт создаётся на вашем телефоне. Он попадает только в то приложение, которое вы сами выберете в окне отправки (например, почта, мессенджер, облачное хранилище). У Автора нет к нему доступа.',
      ]],
      ['Доступ к интернету', [
        'Приложение использует интернет только для показа рекламы, обработки покупки и (по желанию, в Premium) загрузки курсов валют НБП. Сами расчёты работают без интернета.',
      ]],
      ['Дети', [
        'Приложение предназначено для взрослых и не ориентировано на детей. Мы сознательно не собираем данные детей.',
      ]],
      ['Ваши права', [
        'Поскольку Автор не хранит ваши персональные данные, права по GDPR (доступ, исправление, удаление, ограничение, возражение, перенос) вы практически реализуете сами, удаляя данные в приложении. По данным, которые обрабатывает Google, воспользуйтесь инструментами Google или обратитесь в Google. Вы также вправе подать жалобу в надзорный орган.',
      ]],
      ['Изменения политики', [
        'Политика может меняться, например при добавлении новых функций. Актуальная версия всегда на этой странице, с датой последнего обновления.',
      ]],
      ['Контакт', ['Вопросы о конфиденциальности: ' + EMAIL + '.']],
    ],
  },
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
// Adres strony Google zamieniamy na link, reszta tekstu zostaje zwykła.
const linkify = (s) => esc(s).replace(/(policies\.google\.com\/technologies\/partner-sites)/, '<a href="https://$1" rel="noopener">$1</a>');

function page(code) {
  const l = langs[code];
  const nav = Object.keys(langs)
    .map((c) => (c === code ? `<strong>${c.toUpperCase()}</strong>` : `<a href="../${c}/" hreflang="${c}">${c.toUpperCase()}</a>`))
    .join(' · ');
  const body = l.sections
    .map(([h, ps]) => `    <h2>${esc(h)}</h2>\n` + ps.map((p) => `    <p>${linkify(p)}</p>`).join('\n'))
    .join('\n');
  return `<!doctype html>
<html lang="${l.lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(l.title)} – ${esc(l.name)}</title>
  <meta name="description" content="${esc(l.title)} – ${esc(l.name)}">
  <link rel="stylesheet" href="../style.css">
</head>
<body>
  <main>
    <p class="lang">${esc(l.switch)}: ${nav}</p>
    <h1>${esc(l.title)}</h1>
    <p class="app">${esc(l.name)}</p>
    <p class="updated">${esc(l.updated)}: ${UPDATED}</p>
${body}
  </main>
</body>
</html>
`;
}

for (const code of Object.keys(langs)) {
  fs.mkdirSync(path.join(root, code), { recursive: true });
  fs.writeFileSync(path.join(root, code, 'index.html'), page(code));
}
console.log('OK: ' + Object.keys(langs).join(', '));
