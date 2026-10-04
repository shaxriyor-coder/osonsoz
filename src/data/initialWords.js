// Boshlang'ich lug'at — 139 ta fe'l (rus -> o'zbek).
// Har bir so'zda { rus, uzbek, misollar } bor. misollar — ikkita oson misol gap
// (rus tilida + o'zbekcha tarjimasi), boshlang'ich darajadagilar uchun.
// Qolgan SRS maydonlari seed paytida (lib/storage.js -> seedWord) qo'shiladi.
export const initialWords = [
  { rus: "бежать", uzbek: "yugurmoq", misollar: [
    { ru: "Я бегу в школу.", uz: "Men maktabga yuguryapman." },
    { ru: "Он бежит очень быстро.", uz: "U juda tez yuguradi." },
  ] },
  { rus: "бояться", uzbek: "qo'rqmoq", misollar: [
    { ru: "Я боюсь собак.", uz: "Men itlardan qo'rqaman." },
    { ru: "Не бойся, всё хорошо.", uz: "Qo'rqma, hammasi yaxshi." },
  ] },
  { rus: "брать", uzbek: "olmoq", misollar: [
    { ru: "Я беру книгу.", uz: "Men kitob olaman." },
    { ru: "Он берёт деньги.", uz: "U pul oladi." },
  ] },
  { rus: "быть", uzbek: "bo'lmoq", misollar: [
    { ru: "Я хочу быть врачом.", uz: "Men shifokor bo'lishni xohlayman." },
    { ru: "Вчера я был дома.", uz: "Kecha men uyda edim." },
  ] },
  { rus: "видеть", uzbek: "ko'rmoq", misollar: [
    { ru: "Я вижу птицу.", uz: "Men qushni ko'raman." },
    { ru: "Ты видишь этот дом?", uz: "Sen bu uyni ko'ryapsanmi?" },
  ] },
  { rus: "владеть", uzbek: "ega bo'lmoq", misollar: [
    { ru: "Он владеет машиной.", uz: "U mashinaga ega." },
    { ru: "Я владею русским языком.", uz: "Men rus tilini bilaman." },
  ] },
  { rus: "возражать", uzbek: "e'tiroz bildirmoq", misollar: [
    { ru: "Я не возражаю.", uz: "Men e'tiroz bildirmayman." },
    { ru: "Он всегда возражает учителю.", uz: "U doim o'qituvchiga e'tiroz bildiradi." },
  ] },
  { rus: "входить (в комнату и т.п.)", uzbek: "kirmoq", misollar: [
    { ru: "Я вхожу в комнату.", uz: "Men xonaga kiraman." },
    { ru: "Учитель входит в класс.", uz: "O'qituvchi sinfga kiradi." },
  ] },
  { rus: "выбирать", uzbek: "tanlamoq", misollar: [
    { ru: "Я выбираю красный цвет.", uz: "Men qizil rangni tanlayman." },
    { ru: "Она выбирает платье.", uz: "U ko'ylak tanlaydi." },
  ] },
  { rus: "выходить (из дома)", uzbek: "chiqmoq", misollar: [
    { ru: "Я выхожу из дома в семь.", uz: "Men uydan soat yettida chiqaman." },
    { ru: "Он выходит на улицу.", uz: "U ko'chaga chiqadi." },
  ] },
  { rus: "говорить (разговаривать)", uzbek: "gapirmoq", misollar: [
    { ru: "Я говорю по-русски.", uz: "Men ruscha gapiraman." },
    { ru: "Мы говорим о работе.", uz: "Biz ish haqida gaplashamiz." },
  ] },
  { rus: "готовить (обед)", uzbek: "tayyorlamoq", misollar: [
    { ru: "Мама готовит обед.", uz: "Oyim tushlik tayyorlaydi." },
    { ru: "Я готовлю суп.", uz: "Men sho'rva tayyorlayman." },
  ] },
  { rus: "давать", uzbek: "bermoq", misollar: [
    { ru: "Я даю тебе книгу.", uz: "Men senga kitob beraman." },
    { ru: "Учитель даёт задание.", uz: "O'qituvchi topshiriq beradi." },
  ] },
  { rus: "делать", uzbek: "qilmoq", misollar: [
    { ru: "Что ты делаешь?", uz: "Nima qilyapsan?" },
    { ru: "Я делаю уроки.", uz: "Men darslarni qilyapman." },
  ] },
  { rus: "доверять", uzbek: "ishonmoq", misollar: [
    { ru: "Я доверяю другу.", uz: "Men do'stimga ishonaman." },
    { ru: "Она доверяет маме.", uz: "U oyisiga ishonadi." },
  ] },
  { rus: "думать", uzbek: "o'ylamoq", misollar: [
    { ru: "Я думаю о тебе.", uz: "Men sen haqingda o'ylayman." },
    { ru: "О чём ты думаешь?", uz: "Nima haqida o'ylayapsan?" },
  ] },
  { rus: "жаловаться", uzbek: "shikoyat qilmoq", misollar: [
    { ru: "Он жалуется на боль.", uz: "U og'riqdan shikoyat qiladi." },
    { ru: "Не жалуйся, работай.", uz: "Shikoyat qilma, ishla." },
  ] },
  { rus: "ждать", uzbek: "kutmoq", misollar: [
    { ru: "Я жду автобус.", uz: "Men avtobus kutyapman." },
    { ru: "Она ждёт друга.", uz: "U do'stini kutadi." },
  ] },
  { rus: "забывать", uzbek: "unutmoq", misollar: [
    { ru: "Я забываю имена.", uz: "Men ismlarni unutaman." },
    { ru: "Не забывай меня.", uz: "Meni unutma." },
  ] },
  { rus: "завтракать", uzbek: "nonushta qilmoq", misollar: [
    { ru: "Я завтракаю в восемь.", uz: "Men soat sakkizda nonushta qilaman." },
    { ru: "Мы завтракаем вместе.", uz: "Biz birga nonushta qilamiz." },
  ] },
  { rus: "заказывать", uzbek: "buyurtma bermoq", misollar: [
    { ru: "Я заказываю кофе.", uz: "Men qahva buyurtma qilaman." },
    { ru: "Он заказывает пиццу.", uz: "U pitsa buyurtma qiladi." },
  ] },
  { rus: "заканчивать", uzbek: "tugatmoq", misollar: [
    { ru: "Я заканчиваю работу.", uz: "Men ishni tugatyapman." },
    { ru: "Она заканчивает школу.", uz: "U maktabni tugatadi." },
  ] },
  { rus: "замечать (увидеть)", uzbek: "ko'rib qolmoq", misollar: [
    { ru: "Я замечаю ошибку.", uz: "Men xatoni ko'rib qolaman." },
    { ru: "Он не замечает меня.", uz: "U meni sezmaydi." },
  ] },
  { rus: "записывать", uzbek: "yozib olmoq", misollar: [
    { ru: "Я записываю номер телефона.", uz: "Men telefon raqamini yozib olaman." },
    { ru: "Студент записывает лекцию.", uz: "Talaba ma'ruzani yozib oladi." },
  ] },
  { rus: "защищать (страну)", uzbek: "himoya qilmoq", misollar: [
    { ru: "Солдаты защищают страну.", uz: "Askarlar mamlakatni himoya qiladi." },
    { ru: "Отец защищает семью.", uz: "Ota oilani himoya qiladi." },
  ] },
  { rus: "звать (на помощь и т.п.)", uzbek: "chaqirmoq", misollar: [
    { ru: "Мама зовёт детей домой.", uz: "Oyi bolalarni uyga chaqiradi." },
    { ru: "Я зову друга на помощь.", uz: "Men do'stimni yordamga chaqiraman." },
  ] },
  { rus: "знать (кого-л.)", uzbek: "tanimoq", misollar: [
    { ru: "Я знаю этого человека.", uz: "Men bu odamni taniyman." },
    { ru: "Ты знаешь её?", uz: "Sen uni tanaysanmi?" },
  ] },
  { rus: "знать (что-л.)", uzbek: "bilmoq", misollar: [
    { ru: "Я знаю ответ.", uz: "Men javobni bilaman." },
    { ru: "Он знает русский язык.", uz: "U rus tilini biladi." },
  ] },
  { rus: "играть", uzbek: "o'ynamoq", misollar: [
    { ru: "Дети играют во дворе.", uz: "Bolalar hovlida o'ynaydi." },
    { ru: "Я играю в футбол.", uz: "Men futbol o'ynayman." },
  ] },
  { rus: "идти", uzbek: "yurmoq", misollar: [
    { ru: "Я иду домой.", uz: "Men uyga ketyapman." },
    { ru: "Мы идём в парк.", uz: "Biz bog'ga boryapmiz." },
  ] },
  { rus: "извиняться", uzbek: "kechirim so'ramoq", misollar: [
    { ru: "Я извиняюсь за опоздание.", uz: "Men kechikkanim uchun kechirim so'rayman." },
    { ru: "Он извиняется перед другом.", uz: "U do'stidan kechirim so'raydi." },
  ] },
  { rus: "изменить (поменять)", uzbek: "o'zgartirmoq", misollar: [
    { ru: "Я хочу изменить план.", uz: "Men rejani o'zgartirmoqchiman." },
    { ru: "Она изменила причёску.", uz: "U soch turmagini o'zgartirdi." },
  ] },
  { rus: "изучать", uzbek: "o'rganmoq", misollar: [
    { ru: "Я изучаю английский язык.", uz: "Men ingliz tilini o'rganaman." },
    { ru: "Студенты изучают историю.", uz: "Talabalar tarixni o'rganadi." },
  ] },
  { rus: "иметь", uzbek: "ega bo'lmoq", misollar: [
    { ru: "Я имею право знать.", uz: "Men bilishga haqliman." },
    { ru: "Он имеет машину.", uz: "U mashinaga ega." },
  ] },
  { rus: "интересоваться", uzbek: "qiziqmoq", misollar: [
    { ru: "Я интересуюсь музыкой.", uz: "Men musiqaga qiziqaman." },
    { ru: "Он интересуется спортом.", uz: "U sportga qiziqadi." },
  ] },
  { rus: "информировать", uzbek: "xabardor qilmoq", misollar: [
    { ru: "Я информирую вас о новостях.", uz: "Men sizni yangiliklardan xabardor qilaman." },
    { ru: "Начальник информирует сотрудников.", uz: "Boshliq xodimlarni xabardor qiladi." },
  ] },
  { rus: "искать …", uzbek: "izlamoq", misollar: [
    { ru: "Я ищу ключи.", uz: "Men kalitlarni izlayapman." },
    { ru: "Он ищет работу.", uz: "U ish izlaydi." },
  ] },
  { rus: "контролировать", uzbek: "nazorat qilmoq", misollar: [
    { ru: "Учитель контролирует класс.", uz: "O'qituvchi sinfni nazorat qiladi." },
    { ru: "Я контролирую свои расходы.", uz: "Men xarajatlarimni nazorat qilaman." },
  ] },
  { rus: "красть", uzbek: "o'g'irlamoq", misollar: [
    { ru: "Вор крадёт деньги.", uz: "O'g'ri pulni o'g'irlaydi." },
    { ru: "Красть нельзя.", uz: "O'g'irlash mumkin emas." },
  ] },
  { rus: "кричать", uzbek: "baqirmoq", misollar: [
    { ru: "Ребёнок кричит.", uz: "Bola baqiradi." },
    { ru: "Не кричи на меня.", uz: "Menga baqirma." },
  ] },
  { rus: "купаться (в море и т.п.)", uzbek: "cho'milmoq", misollar: [
    { ru: "Летом я купаюсь в реке.", uz: "Yozda men daryoda cho'milaman." },
    { ru: "Дети купаются в море.", uz: "Bolalar dengizda cho'miladi." },
  ] },
  { rus: "лететь", uzbek: "uchmoq", misollar: [
    { ru: "Самолёт летит высоко.", uz: "Samolyot baland uchadi." },
    { ru: "Птица летит на юг.", uz: "Qush janubga uchadi." },
  ] },
  { rus: "ловить", uzbek: "tutmoq", misollar: [
    { ru: "Кот ловит мышь.", uz: "Mushuk sichqonni tutadi." },
    { ru: "Мальчик ловит мяч.", uz: "Bola to'pni tutadi." },
  ] },
  { rus: "ломать", uzbek: "sindirmoq", misollar: [
    { ru: "Не ломай игрушку.", uz: "O'yinchoqni sindirma." },
    { ru: "Он сломал стул.", uz: "U stulni sindirdi." },
  ] },
  { rus: "любить (кого-л.)", uzbek: "sevmoq", misollar: [
    { ru: "Я люблю маму.", uz: "Men onamni sevaman." },
    { ru: "Она любит музыку.", uz: "U musiqani yaxshi ko'radi." },
  ] },
  { rus: "молиться", uzbek: "ibodat qilmoq", misollar: [
    { ru: "Бабушка молится утром.", uz: "Buvim ertalab ibodat qiladi." },
    { ru: "Люди молятся в мечети.", uz: "Odamlar masjidda ibodat qiladi." },
  ] },
  { rus: "молчать", uzbek: "indamay turmoq", misollar: [
    { ru: "Он молчит и слушает.", uz: "U indamay tinglaydi." },
    { ru: "Почему ты молчишь?", uz: "Nega indamayapsan?" },
  ] },
  { rus: "мочь", uzbek: "uddalamoq", misollar: [
    { ru: "Я могу помочь тебе.", uz: "Men senga yordam bera olaman." },
    { ru: "Он не может прийти.", uz: "U kela olmaydi." },
  ] },
  { rus: "наблюдать", uzbek: "kuzatmoq", misollar: [
    { ru: "Я наблюдаю за птицами.", uz: "Men qushlarni kuzataman." },
    { ru: "Учёные наблюдают за звёздами.", uz: "Olimlar yulduzlarni kuzatadi." },
  ] },
  { rus: "надеяться", uzbek: "umid qilmoq", misollar: [
    { ru: "Я надеюсь на лучшее.", uz: "Men yaxshilikka umid qilaman." },
    { ru: "Мы надеемся на победу.", uz: "Biz g'alabaga umid qilamiz." },
  ] },
  { rus: "наказывать", uzbek: "jazolamoq", misollar: [
    { ru: "Родители наказывают детей.", uz: "Ota-onalar bolalarni jazolaydi." },
    { ru: "Нельзя наказывать без причины.", uz: "Sababsiz jazolash mumkin emas." },
  ] },
  { rus: "настаивать (упорствовать)", uzbek: "qattiq talab qilmoq", misollar: [
    { ru: "Я настаиваю на своём.", uz: "Men o'z fikrimda qattiq turaman." },
    { ru: "Он настаивает на встрече.", uz: "U uchrashuvni qattiq talab qiladi." },
  ] },
  { rus: "находить", uzbek: "topmoq", misollar: [
    { ru: "Я нахожу ответ.", uz: "Men javobni topaman." },
    { ru: "Она находит деньги на улице.", uz: "U ko'chadan pul topadi." },
  ] },
  { rus: "начинать", uzbek: "boshlamoq", misollar: [
    { ru: "Я начинаю работу.", uz: "Men ishni boshlayman." },
    { ru: "Мы начинаем урок.", uz: "Biz darsni boshlaymiz." },
  ] },
  { rus: "недооценивать", uzbek: "kam baho bermoq", misollar: [
    { ru: "Не недооценивай себя.", uz: "O'zingga kam baho berma." },
    { ru: "Он недооценивает врага.", uz: "U dushmanga kam baho beradi." },
  ] },
  { rus: "нравиться", uzbek: "yoqmoq", misollar: [
    { ru: "Мне нравится эта песня.", uz: "Menga bu qo'shiq yoqadi." },
    { ru: "Ему нравится этот город.", uz: "Unga bu shahar yoqadi." },
  ] },
  { rus: "обедать", uzbek: "tushlik qilmoq", misollar: [
    { ru: "Я обедаю в час.", uz: "Men soat birda tushlik qilaman." },
    { ru: "Мы обедаем в кафе.", uz: "Biz kafeda tushlik qilamiz." },
  ] },
  { rus: "обещать", uzbek: "va'da bermoq", misollar: [
    { ru: "Я обещаю прийти.", uz: "Men kelishga va'da beraman." },
    { ru: "Он обещает помочь.", uz: "U yordam berishga va'da beradi." },
  ] },
  { rus: "обманывать", uzbek: "aldamoq", misollar: [
    { ru: "Не обманывай меня.", uz: "Meni aldama." },
    { ru: "Он обманывает людей.", uz: "U odamlarni aldaydi." },
  ] },
  { rus: "обсуждать", uzbek: "muhokama qilmoq", misollar: [
    { ru: "Мы обсуждаем план.", uz: "Biz rejani muhokama qilamiz." },
    { ru: "Они обсуждают новости.", uz: "Ular yangiliklarni muhokama qiladi." },
  ] },
  { rus: "объединять", uzbek: "birlashtirmoq", misollar: [
    { ru: "Спорт объединяет людей.", uz: "Sport odamlarni birlashtiradi." },
    { ru: "Мы объединяем усилия.", uz: "Biz kuchlarni birlashtiramiz." },
  ] },
  { rus: "объяснять", uzbek: "tushuntirmoq", misollar: [
    { ru: "Учитель объясняет урок.", uz: "O'qituvchi darsni tushuntiradi." },
    { ru: "Я объясняю правило.", uz: "Men qoidani tushuntiraman." },
  ] },
  { rus: "означать", uzbek: "bildirmoq", misollar: [
    { ru: "Что означает это слово?", uz: "Bu so'z nimani bildiradi?" },
    { ru: "Красный свет означает «стоп».", uz: "Qizil chiroq «to'xta»ni bildiradi." },
  ] },
  { rus: "освобождать (город)", uzbek: "xalos qilmoq", misollar: [
    { ru: "Солдаты освобождают город.", uz: "Askarlar shaharni ozod qiladi." },
    { ru: "Он освобождает место.", uz: "U joyni bo'shatadi." },
  ] },
  { rus: "оскорблять", uzbek: "haqoratlamoq", misollar: [
    { ru: "Нельзя оскорблять людей.", uz: "Odamlarni haqoratlash mumkin emas." },
    { ru: "Он оскорбляет соседа.", uz: "U qo'shnisini haqoratlaydi." },
  ] },
  { rus: "останавливаться", uzbek: "to'xtamoq", misollar: [
    { ru: "Автобус останавливается здесь.", uz: "Avtobus shu yerda to'xtaydi." },
    { ru: "Я останавливаюсь у двери.", uz: "Men eshik oldida to'xtayman." },
  ] },
  { rus: "отвечать", uzbek: "javob bermoq", misollar: [
    { ru: "Я отвечаю на вопрос.", uz: "Men savolga javob beraman." },
    { ru: "Студент отвечает учителю.", uz: "Talaba o'qituvchiga javob beradi." },
  ] },
  { rus: "отгадать", uzbek: "topmoq", misollar: [
    { ru: "Отгадай загадку.", uz: "Topishmoqni top." },
    { ru: "Я отгадал ответ.", uz: "Men javobni topdim." },
  ] },
  { rus: "отказываться", uzbek: "rad qilmoq", misollar: [
    { ru: "Я отказываюсь от помощи.", uz: "Men yordamdan voz kechaman." },
    { ru: "Он отказывается работать.", uz: "U ishlashni rad qiladi." },
  ] },
  { rus: "открывать (дверь и т.п.)", uzbek: "ochmoq", misollar: [
    { ru: "Я открываю дверь.", uz: "Men eshikni ochaman." },
    { ru: "Она открывает окно.", uz: "U derazani ochadi." },
  ] },
  { rus: "отправлять", uzbek: "jo'natmoq", misollar: [
    { ru: "Я отправляю письмо.", uz: "Men xat jo'nataman." },
    { ru: "Он отправляет посылку.", uz: "U posilka jo'natadi." },
  ] },
  { rus: "охотиться", uzbek: "ov qilmoq", misollar: [
    { ru: "Волк охотится ночью.", uz: "Bo'ri kechasi ov qiladi." },
    { ru: "Они охотятся на уток.", uz: "Ular o'rdak ovlaydi." },
  ] },
  { rus: "ошибаться", uzbek: "adashmoq", misollar: [
    { ru: "Все люди ошибаются.", uz: "Hamma odamlar xato qiladi." },
    { ru: "Я часто ошибаюсь.", uz: "Men tez-tez adashaman." },
  ] },
  { rus: "падать", uzbek: "yiqilmoq", misollar: [
    { ru: "Ребёнок падает и плачет.", uz: "Bola yiqilib yig'laydi." },
    { ru: "Осенью листья падают.", uz: "Kuzda barglar to'kiladi." },
  ] },
  { rus: "переводить (текст)", uzbek: "tarjima qilmoq", misollar: [
    { ru: "Я перевожу текст.", uz: "Men matnni tarjima qilaman." },
    { ru: "Она переводит книгу.", uz: "U kitobni tarjima qiladi." },
  ] },
  { rus: "писать", uzbek: "yozmoq", misollar: [
    { ru: "Я пишу письмо.", uz: "Men xat yozaman." },
    { ru: "Дети пишут в тетради.", uz: "Bolalar daftarga yozadi." },
  ] },
  { rus: "плавать", uzbek: "suzmoq", misollar: [
    { ru: "Рыба плавает в воде.", uz: "Baliq suvda suzadi." },
    { ru: "Я умею плавать.", uz: "Men suza olaman." },
  ] },
  { rus: "плакать", uzbek: "yig'lamoq", misollar: [
    { ru: "Малыш плачет.", uz: "Chaqaloq yig'laydi." },
    { ru: "Не плачь, всё хорошо.", uz: "Yig'lama, hammasi yaxshi." },
  ] },
  { rus: "планировать", uzbek: "rejalamoq", misollar: [
    { ru: "Я планирую поездку.", uz: "Men sayohatni rejalashtiraman." },
    { ru: "Мы планируем встречу.", uz: "Biz uchrashuvni rejalashtiramiz." },
  ] },
  { rus: "платить", uzbek: "to'lamoq", misollar: [
    { ru: "Я плачу за обед.", uz: "Men tushlik uchun to'layman." },
    { ru: "Он платит деньги.", uz: "U pul to'laydi." },
  ] },
  { rus: "поворачивать", uzbek: "burmoq", misollar: [
    { ru: "Поворачивай направо.", uz: "O'ngga bur." },
    { ru: "Машина поворачивает налево.", uz: "Mashina chapga buriladi." },
  ] },
  { rus: "повторять", uzbek: "qaytarmoq", misollar: [
    { ru: "Я повторяю новые слова.", uz: "Men yangi so'zlarni takrorlayman." },
    { ru: "Повтори, пожалуйста.", uz: "Iltimos, qaytar." },
  ] },
  { rus: "подписывать", uzbek: "imzolamoq", misollar: [
    { ru: "Директор подписывает документ.", uz: "Direktor hujjatni imzolaydi." },
    { ru: "Я подписываю письмо.", uz: "Men xatni imzolayman." },
  ] },
  { rus: "подсказать (отгадку)", uzbek: "ishora qilmoq", misollar: [
    { ru: "Подскажи мне ответ.", uz: "Menga javobni ayt." },
    { ru: "Он подсказал мне дорогу.", uz: "U menga yo'lni ko'rsatdi." },
  ] },
  { rus: "показывать", uzbek: "ko'rsatmoq", misollar: [
    { ru: "Я показываю фото.", uz: "Men surat ko'rsataman." },
    { ru: "Учитель показывает карту.", uz: "O'qituvchi xaritani ko'rsatadi." },
  ] },
  { rus: "помогать", uzbek: "yordamlashmoq", misollar: [
    { ru: "Я помогаю маме.", uz: "Men oyimga yordam beraman." },
    { ru: "Друзья помогают друг другу.", uz: "Do'stlar bir-biriga yordam beradi." },
  ] },
  { rus: "понимать", uzbek: "tushunmoq", misollar: [
    { ru: "Я понимаю тебя.", uz: "Men seni tushunaman." },
    { ru: "Он не понимает вопрос.", uz: "U savolni tushunmaydi." },
  ] },
  { rus: "предвидеть (ожидать)", uzbek: "oldindan ko'rmoq", misollar: [
    { ru: "Трудно предвидеть будущее.", uz: "Kelajakni oldindan ko'rish qiyin." },
    { ru: "Он предвидит проблемы.", uz: "U muammolarni oldindan ko'radi." },
  ] },
  { rus: "предлагать", uzbek: "taklif qilmoq", misollar: [
    { ru: "Я предлагаю помощь.", uz: "Men yordam taklif qilaman." },
    { ru: "Он предлагает новый план.", uz: "U yangi reja taklif qiladi." },
  ] },
  { rus: "предпочитать", uzbek: "afzal ko'rmoq", misollar: [
    { ru: "Я предпочитаю чай.", uz: "Men choyni afzal ko'raman." },
    { ru: "Она предпочитает отдых дома.", uz: "U uyda dam olishni afzal ko'radi." },
  ] },
  { rus: "предупреждать", uzbek: "ogohlantirmoq", misollar: [
    { ru: "Я предупреждаю тебя об опасности.", uz: "Men seni xavfdan ogohlantiraman." },
    { ru: "Он предупреждает друзей.", uz: "U do'stlarini ogohlantiradi." },
  ] },
  { rus: "прекращать", uzbek: "to'xtatmoq", misollar: [
    { ru: "Прекрати шуметь.", uz: "Shovqin qilishni to'xtat." },
    { ru: "Они прекращают работу.", uz: "Ular ishni to'xtatadi." },
  ] },
  { rus: "приглашать", uzbek: "taklif qilmoq", misollar: [
    { ru: "Я приглашаю гостей.", uz: "Men mehmonlarni taklif qilaman." },
    { ru: "Он приглашает друга в гости.", uz: "U do'stini mehmonga taklif qiladi." },
  ] },
  { rus: "приезжать", uzbek: "etib kelmoq", misollar: [
    { ru: "Я приезжаю в город.", uz: "Men shaharga kelaman." },
    { ru: "Гости приезжают вечером.", uz: "Mehmonlar kechqurun keladi." },
  ] },
  { rus: "приказывать", uzbek: "buyurmoq", misollar: [
    { ru: "Командир приказывает солдатам.", uz: "Qo'mondon askarlarga buyuradi." },
    { ru: "Начальник приказывает работать.", uz: "Boshliq ishlashni buyuradi." },
  ] },
  { rus: "принадлежать", uzbek: "tegishli bo'lmoq", misollar: [
    { ru: "Эта книга принадлежит мне.", uz: "Bu kitob menga tegishli." },
    { ru: "Дом принадлежит семье.", uz: "Uy oilaga tegishli." },
  ] },
  { rus: "пробовать (пытаться)", uzbek: "urinib ko'rmoq", misollar: [
    { ru: "Я пробую решить задачу.", uz: "Men masalani yechishga urinaman." },
    { ru: "Попробуй ещё раз.", uz: "Yana bir marta urinib ko'r." },
  ] },
  { rus: "продавать", uzbek: "sotmoq", misollar: [
    { ru: "Магазин продаёт хлеб.", uz: "Do'kon non sotadi." },
    { ru: "Я продаю машину.", uz: "Men mashina sotaman." },
  ] },
  { rus: "продолжать", uzbek: "davom ettirmoq", misollar: [
    { ru: "Я продолжаю работу.", uz: "Men ishni davom ettiraman." },
    { ru: "Он продолжает учиться.", uz: "U o'qishni davom ettiradi." },
  ] },
  { rus: "произносить (слово)", uzbek: "aytmoq", misollar: [
    { ru: "Я произношу слово правильно.", uz: "Men so'zni to'g'ri aytaman." },
    { ru: "Как произносить это слово?", uz: "Bu so'z qanday aytiladi?" },
  ] },
  { rus: "пропускать (занятия и т.п.)", uzbek: "qoldirmoq", misollar: [
    { ru: "Не пропускай занятия.", uz: "Darslarni qoldirma." },
    { ru: "Он пропускает уроки.", uz: "U darslarni qoldiradi." },
  ] },
  { rus: "просить", uzbek: "so'ramoq", misollar: [
    { ru: "Я прошу помощи.", uz: "Men yordam so'rayman." },
    { ru: "Он просит воды.", uz: "U suv so'raydi." },
  ] },
  { rus: "прощать", uzbek: "kechirmoq", misollar: [
    { ru: "Я прощаю тебя.", uz: "Men seni kechiraman." },
    { ru: "Мама прощает сына.", uz: "Oyi o'g'lini kechiradi." },
  ] },
  { rus: "прятать", uzbek: "berkitmoq", misollar: [
    { ru: "Я прячу подарок.", uz: "Men sovg'ani berkitaman." },
    { ru: "Ребёнок прячет игрушку.", uz: "Bola o'yinchoqni yashiradi." },
  ] },
  { rus: "путать (ошибаться)", uzbek: "adashtirmoq", misollar: [
    { ru: "Я путаю имена.", uz: "Men ismlarni adashtiraman." },
    { ru: "Он путает слова.", uz: "U so'zlarni adashtiradi." },
  ] },
  { rus: "работать", uzbek: "ishlamoq", misollar: [
    { ru: "Я работаю в офисе.", uz: "Men ofisda ishlayman." },
    { ru: "Отец работает врачом.", uz: "Ota shifokor bo'lib ishlaydi." },
  ] },
  { rus: "разрешать", uzbek: "ruxsat bermoq", misollar: [
    { ru: "Мама разрешает гулять.", uz: "Oyi sayr qilishga ruxsat beradi." },
    { ru: "Учитель разрешает выйти.", uz: "O'qituvchi chiqishga ruxsat beradi." },
  ] },
  { rus: "рассчитывать на …", uzbek: "… ga umid bog'lamoq", misollar: [
    { ru: "Я рассчитываю на тебя.", uz: "Men senga umid bog'layman." },
    { ru: "Он рассчитывает на помощь.", uz: "U yordamga umid bog'laydi." },
  ] },
  { rus: "резервировать", uzbek: "zaxira qilib qo'ymoq", misollar: [
    { ru: "Я резервирую столик в кафе.", uz: "Men kafeda stol band qilaman." },
    { ru: "Он резервирует билет.", uz: "U chipta band qiladi." },
  ] },
  { rus: "рекомендовать", uzbek: "tavsiya qilmoq", misollar: [
    { ru: "Я рекомендую эту книгу.", uz: "Men bu kitobni tavsiya qilaman." },
    { ru: "Врач рекомендует отдых.", uz: "Shifokor dam olishni tavsiya qiladi." },
  ] },
  { rus: "ронять", uzbek: "tushirmoq", misollar: [
    { ru: "Не роняй телефон.", uz: "Telefonni tushirib yuborma." },
    { ru: "Он роняет ложку.", uz: "U qoshiqni tushirib yuboradi." },
  ] },
  { rus: "ругать", uzbek: "koyimoq", misollar: [
    { ru: "Мама ругает сына.", uz: "Oyi o'g'lini koyiydi." },
    { ru: "Не ругай его.", uz: "Uni koyima." },
  ] },
  { rus: "руководить (чем-л.)", uzbek: "boshqarmoq", misollar: [
    { ru: "Он руководит компанией.", uz: "U kompaniyani boshqaradi." },
    { ru: "Директор руководит школой.", uz: "Direktor maktabni boshqaradi." },
  ] },
  { rus: "рыть", uzbek: "qazimoq", misollar: [
    { ru: "Собака роет яму.", uz: "It chuqur qaziydi." },
    { ru: "Рабочие роют канал.", uz: "Ishchilar kanal qaziydi." },
  ] },
  { rus: "садиться", uzbek: "o'tirmoq", misollar: [
    { ru: "Я сажусь на стул.", uz: "Men stulga o'tiraman." },
    { ru: "Садитесь, пожалуйста.", uz: "O'tiring, iltimos." },
  ] },
  { rus: "сказать", uzbek: "aytmoq", misollar: [
    { ru: "Скажи правду.", uz: "Rostini ayt." },
    { ru: "Он сказал «спасибо».", uz: "U «rahmat» dedi." },
  ] },
  { rus: "следовать за …", uzbek: "orqasidan bormoq", misollar: [
    { ru: "Следуй за мной.", uz: "Orqamdan yur." },
    { ru: "Собака следует за хозяином.", uz: "It egasining orqasidan boradi." },
  ] },
  { rus: "слышать", uzbek: "eshitmoq", misollar: [
    { ru: "Я слышу музыку.", uz: "Men musiqani eshitaman." },
    { ru: "Ты слышишь меня?", uz: "Meni eshityapsanmi?" },
  ] },
  { rus: "смеяться", uzbek: "kulmoq", misollar: [
    { ru: "Дети смеются.", uz: "Bolalar kuladi." },
    { ru: "Мы смеёмся над шуткой.", uz: "Biz hazildan kulamiz." },
  ] },
  { rus: "снимать (напр. квартиру)", uzbek: "ijaraga olmoq", misollar: [
    { ru: "Я снимаю квартиру.", uz: "Men kvartira ijaraga olaman." },
    { ru: "Они снимают дом у моря.", uz: "Ular dengiz bo'yida uy ijaraga oladi." },
  ] },
  { rus: "советовать", uzbek: "maslahat bermoq", misollar: [
    { ru: "Я советую тебе отдохнуть.", uz: "Men senga dam olishni maslahat beraman." },
    { ru: "Врач советует пить воду.", uz: "Shifokor suv ichishni maslahat beradi." },
  ] },
  { rus: "соглашаться", uzbek: "rozi bo'lmoq", misollar: [
    { ru: "Я соглашаюсь с тобой.", uz: "Men sen bilan roziman." },
    { ru: "Он соглашается помочь.", uz: "U yordam berishga rozi bo'ladi." },
  ] },
  { rus: "сожалеть", uzbek: "afsuslanmoq", misollar: [
    { ru: "Я сожалею об ошибке.", uz: "Men xato uchun afsuslanaman." },
    { ru: "Он сожалеет о своих словах.", uz: "U aytgan so'zlaridan afsuslanadi." },
  ] },
  { rus: "создать", uzbek: "yaratmoq", misollar: [
    { ru: "Я хочу создать игру.", uz: "Men o'yin yaratmoqchiman." },
    { ru: "Он создал новую компанию.", uz: "U yangi kompaniya yaratdi." },
  ] },
  { rus: "сомневаться", uzbek: "ikkilanmoq", misollar: [
    { ru: "Я сомневаюсь в ответе.", uz: "Men javobga ikkilanaman." },
    { ru: "Он сомневается в себе.", uz: "U o'ziga ishonmay ikkilanadi." },
  ] },
  { rus: "сохранять", uzbek: "saqlamoq", misollar: [
    { ru: "Я сохраняю файл.", uz: "Men faylni saqlayman." },
    { ru: "Холодильник сохраняет продукты.", uz: "Muzlatgich mahsulotlarni saqlaydi." },
  ] },
  { rus: "спасать", uzbek: "qutqarmoq", misollar: [
    { ru: "Врач спасает жизнь.", uz: "Shifokor hayotni saqlab qoladi." },
    { ru: "Он спасает котёнка.", uz: "U mushukchani qutqaradi." },
  ] },
  { rus: "спрашивать", uzbek: "so'ramoq", misollar: [
    { ru: "Я спрашиваю дорогу.", uz: "Men yo'lni so'rayman." },
    { ru: "Учитель спрашивает ученика.", uz: "O'qituvchi o'quvchidan so'raydi." },
  ] },
  { rus: "спускаться", uzbek: "tushmoq", misollar: [
    { ru: "Я спускаюсь по лестнице.", uz: "Men zinadan tushaman." },
    { ru: "Мы спускаемся с горы.", uz: "Biz tog'dan tushamiz." },
  ] },
  { rus: "сравнивать", uzbek: "solishtirmoq", misollar: [
    { ru: "Я сравниваю цены.", uz: "Men narxlarni solishtiraman." },
    { ru: "Он сравнивает два текста.", uz: "U ikki matnni solishtiradi." },
  ] },
  { rus: "стоить", uzbek: "arzimoq", misollar: [
    { ru: "Сколько это стоит?", uz: "Bu qancha turadi?" },
    { ru: "Книга стоит дорого.", uz: "Kitob qimmat turadi." },
  ] },
  { rus: "стрелять", uzbek: "otmoq", misollar: [
    { ru: "Солдат стреляет из ружья.", uz: "Askar miltiqdan otadi." },
    { ru: "Не стреляй!", uz: "Otma!" },
  ] },
  { rus: "существовать", uzbek: "mavjud bo'lmoq", misollar: [
    { ru: "Эта проблема существует.", uz: "Bu muammo mavjud." },
    { ru: "Такие животные существуют.", uz: "Bunday hayvonlar mavjud." },
  ] },
  { rus: "считать (подсчитывать)", uzbek: "hisoblamoq", misollar: [
    { ru: "Я считаю до десяти.", uz: "Men o'ngacha sanayman." },
    { ru: "Ребёнок считает деньги.", uz: "Bola pulni sanaydi." },
  ] },
  { rus: "торопиться", uzbek: "shoshilmoq", misollar: [
    { ru: "Я тороплюсь на работу.", uz: "Men ishga shoshilaman." },
    { ru: "Не торопись, у нас есть время.", uz: "Shoshilma, vaqtimiz bor." },
  ] },
  { rus: "требовать", uzbek: "talab qilmoq", misollar: [
    { ru: "Работа требует времени.", uz: "Ish vaqt talab qiladi." },
    { ru: "Он требует ответа.", uz: "U javob talab qiladi." },
  ] },
  { rus: "требоваться", uzbek: "kerak bo'lmoq", misollar: [
    { ru: "Мне требуется помощь.", uz: "Menga yordam kerak." },
    { ru: "Для работы требуется опыт.", uz: "Ish uchun tajriba kerak." },
  ] },
  { rus: "трогать", uzbek: "tegmoq", misollar: [
    { ru: "Не трогай это.", uz: "Bunga tegma." },
    { ru: "Ребёнок трогает игрушку.", uz: "Bola o'yinchoqqa tegadi." },
  ] },
  { rus: "убивать", uzbek: "o'ldirmoq", misollar: [
    { ru: "Нельзя убивать животных.", uz: "Hayvonlarni o'ldirish mumkin emas." },
    { ru: "Охотник убивает волка.", uz: "Ovchi bo'rini o'ldiradi." },
  ] },
]
