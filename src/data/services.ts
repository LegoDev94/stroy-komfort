import {
  Flame,
  Sparkles,
  Sofa,
  Wrench,
  Plug,
  Home,
  Layers,
  Building2,
  Brush,
  Boxes,
  Droplets,
  ShowerHead,
  HelpingHand,
  ThermometerSun,
  Paintbrush,
  Truck,
} from "lucide-react";

export type Service = {
  id: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  priceFrom: number;
  unit: string;
  icon: typeof Flame;
  image: string;
  accent: string;
};

export const services: Service[] = [
  {
    id: "heating",
    title: "Отопление",
    short: "Радиаторы, тёплый пол и котельные — для квартир и домов",
    description:
      "Проектируем тёплые квартиры и дома: радиаторное, тёплый пол, комбинированные схемы. Балансировка, гидрострелки, коллекторы.",
    bullets: ["Монтаж котельной под ключ", "Тёплый пол и радиаторы", "Балансировка и пусконаладка"],
    priceFrom: 1500,
    unit: "м²",
    icon: Flame,
    image:
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1200&q=80&auto=format&fit=crop",
    accent: "from-orange-500/20 to-amber-500/0",
  },
  {
    id: "cleaning",
    title: "Клининг",
    short: "Профессиональная уборка квартир, офисов и после ремонта",
    description:
      "Генеральная, поддерживающая и послестроительная уборка с экологичной профессиональной химией. Выезд за 60 минут.",
    bullets: ["Уборка после ремонта", "Мойка окон и фасадов", "Дезинфекция и озонирование"],
    priceFrom: 80,
    unit: "м²",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80&auto=format&fit=crop",
    accent: "from-cyan-500/20 to-sky-500/0",
  },
  {
    id: "furniture",
    title: "Мебель",
    short: "Сборка, установка и реставрация мебели любого бренда",
    description:
      "Опытные сборщики IKEA, Hoff, Mr.Doors. Кухни, шкафы-купе, гардеробные. Подключение бытовой техники.",
    bullets: ["Сборка кухонь и шкафов", "Подгонка и фурнитура", "Демонтаж старой мебели"],
    priceFrom: 200,
    unit: "ед.",
    icon: Sofa,
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=80&auto=format&fit=crop",
    accent: "from-purple-500/20 to-fuchsia-500/0",
  },
  {
    id: "plumbing",
    title: "Сантехника",
    short: "Монтаж, замена, ремонт и аварийный выезд 24/7",
    description:
      "Полный цикл: разводка, монтаж смесителей, ванн, унитазов, душевых кабин. Замена труб и стояков.",
    bullets: ["Замена труб и стояков", "Монтаж сантехники", "Аварийный выезд 24/7"],
    priceFrom: 250,
    unit: "точка",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1200&q=80&auto=format&fit=crop",
    accent: "from-blue-500/20 to-cyan-500/0",
  },
  {
    id: "electric",
    title: "Электрика",
    short: "Электромонтажные работы с гарантией 5 лет",
    description:
      "Проектирование и монтаж электрики: щиты, розетки, освещение, умный дом. Допуск СРО, замер сопротивления.",
    bullets: ["Сборка электрощитов", "Прокладка кабельных линий", "Умный дом и автоматика"],
    priceFrom: 100,
    unit: "точка",
    icon: Plug,
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&q=80&auto=format&fit=crop",
    accent: "from-yellow-500/20 to-amber-500/0",
  },
  {
    id: "roof",
    title: "Кровля",
    short: "Монтаж и ремонт кровли — металл, мягкая, фальц",
    description:
      "Скатная и плоская кровля. Гидро-, паро-, теплоизоляция. Водостоки, снегозадержание, безопасность работ.",
    bullets: ["Металлочерепица и фальц", "Гибкая черепица", "Полная гидроизоляция"],
    priceFrom: 1200,
    unit: "м²",
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1632759145355-8b8b8b8b8b8b?w=1200&q=80&auto=format&fit=crop",
    accent: "from-rose-500/20 to-orange-500/0",
  },
  {
    id: "floors",
    title: "Полы",
    short: "Стяжка, ламинат, паркет, кварцвинил, керамогранит",
    description:
      "Полусухая и наливная стяжка. Укладка любых напольных покрытий. Качественная шумоизоляция и подложки.",
    bullets: ["Полусухая стяжка", "Укладка ламината и паркета", "Шумоизоляция пола"],
    priceFrom: 600,
    unit: "м²",
    icon: Layers,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop",
    accent: "from-amber-500/20 to-orange-500/0",
  },
  {
    id: "facade",
    title: "Фасадные работы",
    short: "Утепление, штукатурка, навесные вентилируемые фасады",
    description:
      "Мокрый фасад, керамогранит, сайдинг, HPL-панели. Высотные работы методом промальпа. Гарантия 7 лет.",
    bullets: ["Мокрый фасад и штукатурка", "Вентфасады и керамогранит", "Промышленный альпинизм"],
    priceFrom: 1800,
    unit: "м²",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&q=80&auto=format&fit=crop",
    accent: "from-stone-400/30 to-zinc-500/0",
  },
  {
    id: "drycleaning",
    title: "Химчистка",
    short: "Мягкая мебель, ковры, матрасы и салоны авто",
    description:
      "Глубокая чистка с экстрактором Karcher Puzzi. Удаление пятен, запахов, аллергенов. Сушка за 2 часа.",
    bullets: ["Диваны, ковры, матрасы", "Удаление любых пятен", "Антибактериальная обработка"],
    priceFrom: 1500,
    unit: "ед.",
    icon: Brush,
    image:
      "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=1200&q=80&auto=format&fit=crop",
    accent: "from-emerald-500/20 to-teal-500/0",
  },
  {
    id: "boilers",
    title: "Котлы",
    short: "Монтаж, сервис и ремонт газовых и электрокотлов",
    description:
      "Газовые, электрические, пеллетные. Авторизованный сервис Bosch, Vaillant, Baxi, Buderus. Диагностика бесплатно.",
    bullets: ["Монтаж газовых котлов", "Сервис и чистка", "Замена автоматики"],
    priceFrom: 3500,
    unit: "ед.",
    icon: Boxes,
    image:
      "https://images.unsplash.com/photo-1635424239131-32dc44986b56?w=1200&q=80&auto=format&fit=crop",
    accent: "from-red-500/20 to-orange-500/0",
  },
  {
    id: "boiler",
    title: "Бойлер · водонагреватель",
    short: "Установка и ремонт накопительных и проточных систем",
    description:
      "Накопительные и проточные водонагреватели. Замена ТЭН, чистка от накипи, монтаж группы безопасности.",
    bullets: ["Установка под ключ", "Замена ТЭНов и анодов", "Декальцинация и сервис"],
    priceFrom: 2200,
    unit: "ед.",
    icon: Droplets,
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1200&q=80&auto=format&fit=crop",
    accent: "from-sky-500/20 to-blue-500/0",
  },
  {
    id: "bath",
    title: "Ванная под ключ",
    short: "Полный ремонт ванной комнаты с гарантией 5 лет",
    description:
      "Демонтаж, гидроизоляция, плитка, инженерия и финишная отделка. Работаем по вашему дизайн-проекту или подбираем материалы вместе.",
    bullets: ["Работа по вашему проекту", "Закупка материалов", "Сдача за 21 день"],
    priceFrom: 38000,
    unit: "м²",
    icon: ShowerHead,
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80&auto=format&fit=crop",
    accent: "from-indigo-500/20 to-violet-500/0",
  },
  {
    id: "household",
    title: "Помощь по хозяйству",
    short: "Уборка, мелкий ремонт и бытовые задачи",
    description:
      "Поможем с задачами, на которые не хватает времени: уборка, мелкие бытовые ремонты, перевешать полку, заменить смеситель, помощь пожилым родителям.",
    bullets: ["Регулярная и разовая уборка", "Мелкий бытовой ремонт", "Помощь пожилым и маломобильным"],
    priceFrom: 500,
    unit: "час",
    icon: HelpingHand,
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1200&q=80&auto=format&fit=crop",
    accent: "from-rose-500/20 to-pink-500/0",
  },
  {
    id: "insulation",
    title: "Утепление",
    short: "Стен, пола, кровли, фасадов и балконов",
    description:
      "Тёплый дом без теплопотерь. Минвата, ППУ, ЭППС, эковата. Расчёт точки росы и подбор материалов под ваш объект.",
    bullets: ["Утепление стен и фасадов", "Кровля, пол, потолок", "Балконы и лоджии"],
    priceFrom: 850,
    unit: "м²",
    icon: ThermometerSun,
    image:
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=1200&q=80&auto=format&fit=crop",
    accent: "from-orange-500/20 to-amber-500/0",
  },
  {
    id: "materials",
    title: "Доставка и закупка",
    short: "Стройматериалы с гарантией лучшей цены",
    description:
      "Подберём, закупим и привезём стройматериалы под ваш проект. Прямые контракты с поставщиками — экономия до 25% от розничных цен. Доставка с разгрузкой и подъёмом на этаж.",
    bullets: ["Подбор и закупка по смете", "Доставка с подъёмом на этаж", "Возврат лишнего без процентов"],
    priceFrom: 1500,
    unit: "доставка",
    icon: Truck,
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1200&q=80&auto=format&fit=crop",
    accent: "from-teal-500/20 to-emerald-500/0",
  },
  {
    id: "painting",
    title: "Малярные работы",
    short: "Покраска стен, потолков и декоративные покрытия",
    description:
      "Шпаклёвка, шлифовка, грунт, покраска. Декоративная штукатурка, венецианка, покраска фасадов и металлоконструкций — для квартир, домов и офисов.",
    bullets: ["Покраска стен и потолков", "Декоративная штукатурка", "Покраска фасадов"],
    priceFrom: 350,
    unit: "м²",
    icon: Paintbrush,
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&q=80&auto=format&fit=crop",
    accent: "from-violet-500/20 to-purple-500/0",
  },
];
