export type Tag =
  | "אמריקאי"
  | "בריטי"
  | "ישראלי"
  | "קנדי"
  | "אירי"
  | "צרפתי"
  | "גרמני"
  | "ספרדי"
  | "איטלקי"
  | "מקסיקני"
  | "טורקי"
  | "שוודי"
  | "בוסני"
  | "פולני"
  | "צ'כי"
  | "רומני"
  | "פיני"
  | "ברזילאי"
  | "ארגנטינאי"
  | "נורווגי"
  | "דני"
  | "אוסטרלי"
  | "ניו זילנדי"
  | "שוויצרי"
  | "פיליפיני"
  | "רוסי"
  | "אוקראיני"
  | "הולנדי"
  | "בלגי"
  | "צ'ילאני"
  | "קולומביאני"
  | "יווני"
  | "דרום אפריקאי"
  | "הודי"
  | "סעודי"
  | "יפני"
  | "קוריאני"
  | "סיני"
  | "וייטנאמי"
  | "ניגרי"
  | "מצרי"
  | "גאני"
  | "אוסטרי"
  | "הונגרי"
  | "קרואטי"
  | "סרבי"
  | "בולגרי"
  | "קפריסאי"
  | "פרואני"
  | "ונצואלאי"
  | "אורוגוואי"
  | "סלובני"
  | "ארמני"
  | "גאורגי"
  | "איסלנדי"
  | "תאילנדי"
  | "נפאלי"
  | "מלזי"
  | "אינדונזי"
  | "הונג קונגי"
  | "סרי לנקי"
  | "ג'מייקני"
  | "פוארטו ריקאני";

export interface Show {
  name: string;
  nameEn?: string;  // English display name (only when name is not in English)
  city: string;     // Hebrew city
  cityEn: string;   // English city
  lat: number;
  lng: number;
  years: string;
  network: string;
  desc: string;     // Hebrew description
  descEn: string;   // English description
  tags: Tag[];
}

export const shows: Show[] = [
  // ── אמריקאי ──────────────────────────────────────────────────────────────
  { name: "The Office", city: "Scranton, Pennsylvania", cityEn: "Scranton, Pennsylvania", lat: 41.409, lng: -75.662, years: "2005–2013", network: "NBC", desc: "מייקל סקוט ועובדי Dunder Mifflin בסניף סקרנטון — אחת הקומדיות האהובות בכל הזמנים.", descEn: "Michael Scott and the employees of Dunder Mifflin's Scranton branch — one of the most beloved comedies of all time.", tags: ["אמריקאי"] },
  { name: "Friends", city: "מנהטן, ניו יורק", cityEn: "Manhattan, New York", lat: 40.734, lng: -74.002, years: "1994–2004", network: "NBC", desc: "שישה חברים חיים ואוהבים בגריניץ' וילג'. הדירה האיקונית ברחוב Bleecker.", descEn: "Six friends navigate life and love in Greenwich Village. The iconic apartment on Bleecker Street.", tags: ["אמריקאי"] },
  { name: "Seinfeld", city: "אפר ווסט סייד, ניו יורק", cityEn: "Upper West Side, New York", lat: 40.787, lng: -73.975, years: "1989–1998", network: "NBC", desc: "סיינפלד, ג'ורג', אלאין וקוסמו קוסטנזה — סיטקום על כלום שהפך לאגדה.", descEn: "Seinfeld, George, Elaine and Cosmo Kramer — a show about nothing that became a legend.", tags: ["אמריקאי"] },
  { name: "Cheers", city: "בוסטון, מסצ'וסטס", cityEn: "Boston, Massachusetts", lat: 42.358, lng: -71.065, years: "1982–1993", network: "NBC", desc: "פאב שכונתי בבוסטון שבו כולם מכירים את שמך.", descEn: "A neighborhood bar in Boston where everybody knows your name.", tags: ["אמריקאי"] },
  { name: "Frasier", city: "סיאטל, וושינגטון", cityEn: "Seattle, Washington", lat: 47.606, lng: -122.332, years: "1993–2004", network: "NBC", desc: "ד\"ר פרייזר קריין — פסיכיאטר ומגיש רדיו סנוב בסיאטל. ספין-אוף של Cheers.", descEn: "Dr. Frasier Crane — a snobbish psychiatrist and radio host in Seattle. A Cheers spin-off.", tags: ["אמריקאי"] },
  { name: "It's Always Sunny in Philadelphia", city: "פילדלפיה, פנסילבניה", cityEn: "Philadelphia, Pennsylvania", lat: 39.952, lng: -75.165, years: "2005–כיום", network: "FX", desc: "חמישה חברים מנהלים פאב בפילדלפיה בצורה הנוראית ביותר האפשרית.", descEn: "Five friends run a bar in Philadelphia in the most horrible way imaginable.", tags: ["אמריקאי"] },
  { name: "The Big Bang Theory", city: "פסדינה, קליפורניה", cityEn: "Pasadena, California", lat: 34.147, lng: -118.144, years: "2007–2019", network: "CBS", desc: "ארבעה מדענים גאונים וחסרי כישורים חברתיים — שלדון, לאונרד, האוורד ורג'.", descEn: "Four brilliant but socially awkward scientists — Sheldon, Leonard, Howard and Raj.", tags: ["אמריקאי"] },
  { name: "New Girl", city: "לוס אנג'לס, קליפורניה", cityEn: "Los Angeles, California", lat: 34.094, lng: -118.329, years: "2011–2018", network: "Fox", desc: "ג'ס דיי עוברת לגור עם שלושה גברים בלופט של LA אחרי פרידה כואבת.", descEn: "Jess Day moves in with three guys in an LA loft after a painful breakup.", tags: ["אמריקאי"] },
  { name: "Curb Your Enthusiasm", city: "לוס אנג'לס, קליפורניה", cityEn: "Los Angeles, California", lat: 34.045, lng: -118.445, years: "2000–2024", network: "HBO", desc: "לארי דייויד בגרסה הפיקטיבית של עצמו — סיטקום ספונטני ב-LA.", descEn: "Larry David as a fictionalized version of himself — a largely improvised comedy set in LA.", tags: ["אמריקאי"] },
  { name: "Modern Family", city: "לוס אנג'לס, קליפורניה", cityEn: "Los Angeles, California", lat: 34.135, lng: -118.372, years: "2009–2020", network: "ABC", desc: "שלוש משפחות שונות — מורחבת, זוג גייז עם ילדה מאומצת, ובין-גילאית.", descEn: "Three diverse family types — an extended family, a gay couple with an adopted daughter, and an age-gap couple.", tags: ["אמריקאי"] },
  { name: "Arrested Development", city: "ניופורט ביץ', קליפורניה", cityEn: "Newport Beach, California", lat: 33.618, lng: -117.928, years: "2003–2019", network: "Fox / Netflix", desc: "משפחת בלוט — ממלכת נדל\"ן שמתמוטטת, ומייקל מנסה להציל אותה.", descEn: "The Bluth family — a real-estate dynasty that crumbles, and Michael tries to save it.", tags: ["אמריקאי"] },
  { name: "Full House", city: "סן פרנסיסקו, קליפורניה", cityEn: "San Francisco, California", lat: 37.792, lng: -122.434, years: "1987–1995", network: "ABC", desc: "אב אלמן מגדל שלוש בנות עם עזרת חבר ואח גיס בבית ויקטוריאני.", descEn: "A widowed father raises three daughters with help from his best friend and brother-in-law in a Victorian house.", tags: ["אמריקאי"] },
  { name: "Parks and Recreation", city: "אינדיאנפוליס, אינדיאנה", cityEn: "Pawnee, Indiana (fictional)", lat: 39.768, lng: -86.158, years: "2009–2015", network: "NBC", desc: "לסלי קנופ — עובדת עירייה נלהבת בעיירה הפיקטיבית פואני, המבוססת על ערי אינדיאנה.", descEn: "Leslie Knope — an enthusiastic government employee in the fictional town of Pawnee, Indiana.", tags: ["אמריקאי"] },
  { name: "Married with Children", city: "שיקגו, אילינוי", cityEn: "Chicago, Illinois", lat: 41.878, lng: -87.629, years: "1987–1997", network: "Fox", desc: "אל באנדי — מוכר נעליים כושל ומשפחתו המתעמתת בפרברי שיקגו.", descEn: "Al Bundy — a failed shoe salesman and his dysfunctional family in the Chicago suburbs.", tags: ["אמריקאי"] },
  { name: "Home Improvement", city: "דטרויט, מישיגן", cityEn: "Detroit, Michigan", lat: 42.331, lng: -83.045, years: "1991–1999", network: "ABC", desc: "טים 'The Toolman' טיילור — מגיש תוכנית כלים ואב לשלושה בנים בדטרויט.", descEn: "Tim 'The Toolman' Taylor — a tool-show host and father of three in Detroit.", tags: ["אמריקאי"] },
  { name: "King of Queens", city: "קווינס, ניו יורק", cityEn: "Queens, New York", lat: 40.728, lng: -73.794, years: "1998–2007", network: "CBS", desc: "דאג הפר — שליח UPS בקווינס שחי עם אשתו קארי ואביה הנוירוטי.", descEn: "Doug Heffernan — a UPS deliveryman in Queens living with his wife Carrie and her neurotic father.", tags: ["אמריקאי"] },
  { name: "30 Rock", city: "ניו יורק (רוקפלר סנטר)", cityEn: "New York (Rockefeller Center)", lat: 40.758, lng: -73.978, years: "2006–2013", network: "NBC", desc: "ליז למון מנהלת תוכנית סקצ'ים לאומית ב-30 Rockefeller Plaza.", descEn: "Liz Lemon runs a live sketch comedy show at 30 Rockefeller Plaza.", tags: ["אמריקאי"] },
  { name: "Brooklyn Nine-Nine", city: "ברוקלין, ניו יורק", cityEn: "Brooklyn, New York", lat: 40.650, lng: -73.949, years: "2013–2021", network: "Fox / NBC", desc: "בלש ג'ייק פרלטה וחבורת בלשים בתחנת משטרה 99 בברוקלין.", descEn: "Detective Jake Peralta and a squad of detectives at the 99th Precinct in Brooklyn.", tags: ["אמריקאי"] },

  // ── בריטי ──────────────────────────────────────────────────────────────
  { name: "Ted Lasso", city: "לונדון, אנגליה", cityEn: "London, England", lat: 51.481, lng: -0.191, years: "2020–2023", network: "Apple TV+", desc: "מאמן כדורגל אמריקאי אופטימי שמגיע לאנגליה לאמן קבוצת AFC Richmond.", descEn: "An optimistic American football coach arrives in England to manage AFC Richmond.", tags: ["בריטי"] },
  { name: "Fleabag", city: "לונדון, אנגליה", cityEn: "London, England", lat: 51.512, lng: -0.098, years: "2016–2019", network: "BBC Three", desc: "אישה צעירה בלונדון מתמודדת עם חיים, אהבה ואובדן — ומדברת ישירות למצלמה.", descEn: "A young woman in London navigates life, love and loss — and talks directly to the camera.", tags: ["בריטי"] },
  { name: "The IT Crowd", city: "לונדון, אנגליה", cityEn: "London, England", lat: 51.507, lng: -0.127, years: "2006–2013", network: "Channel 4", desc: "מוס, ריי ו-Jen — אנשי IT נידחים במרתף חברת ענק בלונדון.", descEn: "Moss, Roy and Jen — misfit IT workers in the basement of a giant corporation in London.", tags: ["בריטי"] },
  { name: "Only Fools and Horses", city: "פקהאם, לונדון", cityEn: "Peckham, London", lat: 51.469, lng: -0.069, years: "1981–2003", network: "BBC One", desc: "דל ובוי ורודני טרוטר — שני אחים מוכרי שוק שמנסים להתעשר בפקהאם.", descEn: "Del Boy and Rodney Trotter — two market-trading brothers trying to get rich in Peckham.", tags: ["בריטי"] },
  { name: "Skins", city: "בריסטול, אנגליה", cityEn: "Bristol, England", lat: 51.454, lng: -2.587, years: "2007–2013", network: "E4", desc: "קבוצת נוער בבריסטול — קומדיה-דרמה שתיארה חיי בני נוער בבריטניה.", descEn: "A group of teenagers in Bristol — a comedy-drama depicting British youth life.", tags: ["בריטי"] },

  // ── ישראלי ──────────────────────────────────────────────────────────────
  { name: "שמש", nameEn: "Shemesh", city: "תל אביב, ישראל", cityEn: "Tel Aviv, Israel", lat: 32.068, lng: 34.781, years: "1997–2004", network: "קשת / yes", desc: "קפה 'אימפריית השמש' בתל אביב — נחום שמש הבעלים האקסצנטרי, המלצרית אתי, הטבח שאשי, והשכן עורך הדין טנצר. 6 עונות, 142 פרקים של קומדיה, עימותים ורומנטיקה.", descEn: "Café 'Sun Empire' in Tel Aviv — eccentric owner Nachum Shemesh, waitress Eti, cook Shashi and lawyer-neighbor Tanzer. 6 seasons, 142 episodes of comedy, conflicts and romance.", tags: ["ישראלי"] },
  { name: "הפיג'מות", nameEn: "HaPijamot (The Pajamas)", city: "תל אביב (רח' מאזה פינת מפו)", cityEn: "Tel Aviv (Maze St., corner of Mapu)", lat: 32.073, lng: 34.788, years: "2003–2015", network: "ערוץ הילדים / קשת", desc: "סדרה מוזיקלית-קומית לילדים ונוער — להקת רוק שעברה מנתניה לתל אביב וגרה מעל מסעדת המבורגר כושלת. 9 עונות, 223 פרקים.", descEn: "A musical-comedy series for children and teens — a rock band that moved from Netanya to Tel Aviv and lives above a failing burger restaurant. 9 seasons, 223 episodes.", tags: ["ישראלי"] },
  { name: "המשרד — ישראל", nameEn: "HaMisrad — Israel (The Office: Israel)", city: "גוש התעשייה, יהוד", cityEn: "Industrial Zone, Yehud", lat: 31.891, lng: 34.888, years: "2010–2013", network: "yes Comedy", desc: "מוקומנטרי ישראלי — סניף כושל של חברת 'Paper Office' ביהוד. המנהל אבי משולם מדמיין שהוא קומיקאי אך מביך את כולם.", descEn: "Israeli mockumentary — a failing branch of 'Paper Office' in Yehud. Manager Avi Meshulem fancies himself a comedian but embarrasses everyone.", tags: ["ישראלי"] },
  { name: "קופה ראשית", nameEn: "Kupa Rashit (The Checkout)", city: "יבנה, ישראל", cityEn: "Yavne, Israel", lat: 31.867, lng: 34.744, years: "2018–כיום", network: "כאן 11 / Netflix", desc: "מוקומנטרי סאטירי על עובדי סניף הסופרמרקט הפיקטיבי 'שפע יששכר' ביבנה. זכה בפרסי האקדמיה הישראלית לטלוויזיה ומתוכנן עיבוד לסרט.", descEn: "Satirical mockumentary about the staff of fictional 'Shefa Yissachar' supermarket in Yavne. Winner of Israeli Television Academy Awards, with a feature film in development.", tags: ["ישראלי"] },

  // ── קנדי ──────────────────────────────────────────────────────────────
  { name: "Schitt's Creek", city: "גודווד, אונטריו, קנדה", cityEn: "Goodwood, Ontario, Canada", lat: 44.029, lng: -79.282, years: "2015–2020", network: "CBC / Pop", desc: "משפחת רוז עשירה ומפונקת מוצאת עצמה בעיירה קטנה אחרי פשיטת רגל.", descEn: "The wealthy, spoiled Rose family find themselves stuck in a small town after going bankrupt.", tags: ["קנדי"] },

  // ── אירי ──────────────────────────────────────────────────────────────
  { name: "Father Ted", city: "מחוז קלר, אירלנד (אי פיקטיבי)", cityEn: "County Clare, Ireland (fictional island)", lat: 52.9, lng: -9.4, years: "1995–1998", network: "Channel 4", desc: "שלושה כמרים קתולים שגולו לאי מרוחק בחוף המערבי של אירלנד — קומדיה אבסורדית וקלאסית.", descEn: "Three Catholic priests exiled to a remote island off Ireland's west coast — an absurdist classic comedy.", tags: ["אירי"] },
  { name: "Mrs. Brown's Boys", city: "דבלין, אירלנד", cityEn: "Dublin, Ireland", lat: 53.349, lng: -6.260, years: "2011–כיום", network: "BBC One / RTÉ One", desc: "אגנס בראון — אם אירית סוערת ודומיננטית בדבלין. למרות ביקורות שליליות, הפכה לאחת הסדרות הפופולריות ביותר בבריטניה ואירלנד.", descEn: "Agnes Brown — a boisterous, dominant Irish mother in Dublin. Despite poor reviews, one of the most popular shows in Britain and Ireland.", tags: ["אירי"] },

  // ── צרפתי ──────────────────────────────────────────────────────────────
  { name: "Call My Agent! (Dix pour cent)", city: "פריז, צרפת", cityEn: "Paris, France", lat: 48.8566, lng: 2.3522, years: "2015–2020", network: "France 2 / Netflix", desc: "סוכני כוכבים בסוכנות הפיקטיבית ASK בפריז — מנהלים משבר אחר משבר בעולם הבידור. זכה בפרס Emmy הבינלאומי לקומדיה הטובה ביותר.", descEn: "Talent agents at the fictional ASK agency in Paris — navigating crisis after crisis in the entertainment world. Won the International Emmy for Best Comedy.", tags: ["צרפתי"] },
  { name: "Kaamelott", city: "פריז / ליון, צרפת (עלילה: ארתור בבריטניה)", cityEn: "Paris / Lyon, France (set in Arthurian Britain)", lat: 48.852, lng: 2.360, years: "2005–2009", network: "M6", desc: "פרודיה צרפתית על אגדות המלך ארתור ופרשי השולחן העגול — קומדיה מדוברת, אחת הסדרות האהובות ביותר בצרפת.", descEn: "A French parody of Arthurian legend and the Knights of the Round Table — a wordy comedy, one of France's most beloved shows.", tags: ["צרפתי"] },

  // ── גרמני ──────────────────────────────────────────────────────────────
  { name: "Stromberg", city: "קלן, גרמניה", cityEn: "Cologne, Germany", lat: 50.933, lng: 6.950, years: "2004–2012", network: "ProSieben", desc: "מוקומנטרי גרמני על חיי משרד בחברת ביטוח פיקטיבית. ברנד שטרומברג — הממונה הנלהב שמביך את כולם. קדם בשנה אחת לגרסה האמריקאית של The Office.", descEn: "German mockumentary set in a fictional insurance company. Bernd Stromberg — the eager boss who embarrasses everyone. Preceded the US version of The Office by a year.", tags: ["גרמני"] },

  // ── ספרדי ──────────────────────────────────────────────────────────────
  { name: "La que se avecina", city: "מדריד, ספרד (פרוורים)", cityEn: "Madrid, Spain (suburbs)", lat: 40.416, lng: -3.703, years: "2007–כיום", network: "Telecinco", desc: "תושבי בניין דירות פיקטיבי בפרוורי מדריד — סאטירה על חברה ספרדית עם אוסף אקצנטרי של שכנים ומריבות נצחיות.", descEn: "Residents of a fictional apartment block in Madrid's suburbs — a satire on Spanish society with an eccentric cast of neighbors and endless feuds.", tags: ["ספרדי"] },

  // ── איטלקי ──────────────────────────────────────────────────────────────
  { name: "Boris", city: "רומא, איטליה", cityEn: "Rome, Italy", lat: 41.902, lng: 12.496, years: "2007–2010, 2022", network: "Fox Italy / Disney+", desc: "מאחורי הקלעים של סדרת דרמה איטלקית גרועה — מוקומנטרי סאטירי על טלוויזיה, אמנות ופשרות. הפך לתופעת תרבות איטלקית ועיצב שפה יומיומית.", descEn: "Behind the scenes of a bad Italian drama series — a satirical mockumentary about television, art and compromise. A cultural phenomenon that shaped everyday Italian slang.", tags: ["איטלקי"] },

  // ── מקסיקני ──────────────────────────────────────────────────────────────
  { name: "El Chavo del Ocho", city: "מקסיקו סיטי, מקסיקו", cityEn: "Mexico City, Mexico", lat: 19.432, lng: -99.133, years: "1973–1980", network: "Canal 2 (Televisa)", desc: "אל צ'אבו — ילד יתום עני שחי בחבית בחצר דירות עניה. אחת הסדרות הפופולריות ביותר בתולדות הטלוויזיה הלטינית — 350 מיליון צופים בשיאה.", descEn: "El Chavo — a poor orphan boy who lives in a barrel in the courtyard of a low-income tenement. One of the most popular shows in Latin television history — 350 million viewers at its peak.", tags: ["מקסיקני"] },

  // ── טורקי ──────────────────────────────────────────────────────────────
  { name: "Leyla ile Mecnun", city: "איסטנבול, טורקיה", cityEn: "Istanbul, Turkey", lat: 41.008, lng: 28.978, years: "2011–2023", network: "TRT 1 / Exxen", desc: "פרודיה סוריאליסטית על אגדת האהבה הקלאסית ליילא ומג'נון — 7 עונות, 144 פרקים של אהבה, אבסורד וקסם בסגנון ייחודי לחלוטין.", descEn: "A surrealist parody of the classic love legend of Layla and Majnun — 7 seasons, 144 episodes of love, absurdity and magic in a wholly unique style.", tags: ["טורקי"] },

  // ── שוודי ──────────────────────────────────────────────────────────────
  { name: "Solsidan", city: "סלטשביידן (מחוז סטוקהולם), שוודיה", cityEn: "Saltsjöbaden (Stockholm County), Sweden", lat: 59.254, lng: 18.288, years: "2010–כיום", network: "TV4", desc: "רופא שיניים בן 39 עובר לשכונת יוקרה בסביבות סטוקהולם — קומדיה על חיי פרוורים שוודיים, חברות ישנה ואתגרי ההורות. 2.5 מיליון צופים בעונה 2.", descEn: "A 39-year-old dentist moves to an upscale suburb of Stockholm — a comedy about Swedish suburban life, old friendships and parenting challenges. 2.5 million viewers in season 2.", tags: ["שוודי"] },

  // ── בוסני ──────────────────────────────────────────────────────────────
  { name: "Lud, zbunjen, normalan", city: "סרייבו, בוסניה והרצגובינה", cityEn: "Sarajevo, Bosnia and Herzegovina", lat: 43.847, lng: 18.356, years: "2007–2021", network: "FTV / Nova TV", desc: "שלושה דורות של משפחת פאזלינוביץ' בדירה בסרייבו — הסבא האקסצנטרי, הבן המבולבל, הנכד המאוזן. 13 עונות, 309 פרקים. הסדרה הפופולרית ביותר ביוגוסלביה לשעבר.", descEn: "Three generations of the Fazlinović family in a Sarajevo apartment — the eccentric grandfather, the confused son, the level-headed grandson. 13 seasons, 309 episodes. The most popular show in the former Yugoslavia.", tags: ["בוסני"] },

  // ── פולני ──────────────────────────────────────────────────────────────
  { name: "Świat według Kiepskich", city: "ורוצלב, פולין", cityEn: "Wrocław, Poland", lat: 51.107, lng: 17.038, years: "1999–2022", network: "Polsat", desc: "משפחת קיפסקי הדיספונקציונלית בורוצלב — הסבא פרדיננד מתכנן תוכניות העשרה שכושלות תמיד. 35 עונות, 589 פרקים של סאטירה על החיים בפולין לאחר הקומוניזם.", descEn: "The dysfunctional Kiepski family in Wrocław — grandfather Ferdynand hatches get-rich schemes that always fail. 35 seasons, 589 episodes satirizing post-communist Polish life.", tags: ["פולני"] },

  // ── צ'כי ──────────────────────────────────────────────────────────────
  { name: "Comeback", city: "פראג, צ'כיה", cityEn: "Prague, Czech Republic", lat: 50.075, lng: 14.437, years: "2008–2012", network: "TV Nova", desc: "תומאש פאקובסקי — בעל חנות מוזיקה בפראג שמנסה לאזן בין משפחה, עסקים וחלומות ישנים. סיטקום צ'כי שזכה לעונה שלישית מתוכננת ב-2024.", descEn: "Tomáš Pakovský — a Prague music-shop owner trying to balance family, business and old dreams. A Czech sitcom with a planned third season in 2024.", tags: ["צ'כי"] },

  // ── רומני ──────────────────────────────────────────────────────────────
  { name: "La Bloc", city: "בוקרשט, רומניה", cityEn: "Bucharest, Romania", lat: 44.426, lng: 26.102, years: "2002–2012", network: "Antena 1", desc: "תושבי בניין דירות סטנדרטי בבוקרשט — אוסף שכנים צבעוניים עם מריבות, אהבות וקומדיה מהחיים הרומניים. אחת הסדרות הפופולריות ביותר ברומניה.", descEn: "Residents of a standard Bucharest apartment block — a colorful cast of neighbors with quarrels, romances and comedy from Romanian daily life. One of Romania's most popular shows.", tags: ["רומני"] },

  // ── פיני ──────────────────────────────────────────────────────────────
  { name: "Kumman kaa", city: "הלסינקי, פינלנד", cityEn: "Helsinki, Finland", lat: 60.169, lng: 24.938, years: "2003–2005", network: "Nelonen", desc: "אנה, מורה לשוודית, ואלו, האחות הבית של בית הספר — שתי עובדות בית ספר בהלסינקי שמנווטות את חיי היומיום בהומור פיני יבש. זכה בפרס Telvis לדרמה טובה.", descEn: "Anna, a Swedish teacher, and Aloo, the school nurse — two school employees in Helsinki navigating daily life with dry Finnish humour. Won the Telvis Award for best drama.", tags: ["פיני"] },

  // ── ברזילאי ──────────────────────────────────────────────────────────────
  { name: "A Grande Família", city: "ריו דה ז'נרו, ברזיל", cityEn: "Rio de Janeiro, Brazil", lat: -22.906, lng: -43.172, years: "2001–2015", network: "Rede Globo", desc: "משפחת ביטנקור בשכונת פרוור בריו — ליניאו, נניה, שני ילדים בוגרים וחתן נהג מונית. הסיטקום הברזילאי הארוך ביותר: 14 עונות, 485 פרקים.", descEn: "The Bitenkou family in a Rio suburb — Lineu, Nenê, two grown children and a taxi-driver son-in-law. Brazil's longest-running sitcom: 14 seasons, 485 episodes.", tags: ["ברזילאי"] },

  // ── ארגנטינאי ──────────────────────────────────────────────────────────────
  { name: "Casados con Hijos", city: "בואנוס איירס, ארגנטינה", cityEn: "Buenos Aires, Argentina", lat: -34.603, lng: -58.381, years: "2005–2006", network: "Telefe", desc: "גרסה ארגנטינאית של Married with Children — משפחת ארגנטו בשכונת באחו פלורס בבואנוס איירס. 212 פרקים שהפכו לאגדת קאלט, עם עיבוד תיאטרלי ב-2023.", descEn: "The Argentine adaptation of Married with Children — the Argento family in the Bajo Flores neighborhood of Buenos Aires. 212 episodes that became a cult legend, with a stage adaptation in 2023.", tags: ["ארגנטינאי"] },

  // ── נורווגי ──────────────────────────────────────────────────────────────
  { name: "Dag", city: "אוסלו, נורווגיה", cityEn: "Oslo, Norway", lat: 59.913, lng: 10.752, years: "2010–2015", network: "TV 2", desc: "דאג רפסנס — יועץ נישואין ציני שאין לו אמונה בבני אדם ובנישואים, אבל מסייע לזוגות מדי יום. קומדיה-דרמה נורווגית, 4 עונות.", descEn: "Dag Rafsnes — a cynical marriage counsellor who has no faith in people or marriage, yet helps couples every day. Norwegian comedy-drama, 4 seasons.", tags: ["נורווגי"] },
  { name: "Lilyhammer", city: "לילהאמר, נורווגיה", cityEn: "Lillehammer, Norway", lat: 61.115, lng: 10.466, years: "2012–2014", network: "NRK1 / Netflix", desc: "פרנק טאליאנו — כנופייתן ניו יורקי שנכנס לתוכנית הגנת עדים ומנסה לבנות חיים חדשים בלילהאמר. הראשון בעולם שנחשב 'תוכן מקורי של Netflix'. שבר שיאי צפייה בנורווגיה.", descEn: "Frank Tagliano — a New York gangster who enters witness protection and tries to build a new life in Lillehammer. The world's first show considered 'Netflix original content'. Broke Norwegian viewing records.", tags: ["נורווגי"] },

  // ── דני ──────────────────────────────────────────────────────────────
  { name: "Klovn", city: "קופנהגן, דנמרק", cityEn: "Copenhagen, Denmark", lat: 55.676, lng: 12.568, years: "2005–2018", network: "TV 2 Zulu", desc: "פרנק וקספר — שני קומיקאים שמנווטים מבוכות יומיומיות בקופנהגן. 10 עונות ו-3 סרטים. מושווה ל-Curb Your Enthusiasm הדני.", descEn: "Frank and Casper — two comedians navigating everyday embarrassments in Copenhagen. 10 seasons and 3 films. Called 'the Danish Curb Your Enthusiasm'.", tags: ["דני"] },

  // ── אוסטרלי ──────────────────────────────────────────────────────────────
  { name: "Kath & Kim", city: "מלבורן, אוסטרליה", cityEn: "Melbourne, Australia", lat: -37.813, lng: 144.962, years: "2002–2007", network: "ABC / Seven", desc: "קת' ובתה קים — קומדיה על חיי פרוורים אוסטרליים בפונטיין לייקס הפיקטיבית ליד מלבורן. סאטירה חריפה על ערכים שטחיים וקיטש אוסטרלי. אחת הסדרות האהובות ביותר באוסטרליה.", descEn: "Kath and her daughter Kim — a comedy about Australian suburban life in fictional Fountain Lakes near Melbourne. Sharp satire on shallow values and Australian kitsch. One of Australia's most beloved shows.", tags: ["אוסטרלי"] },
  { name: "Summer Heights High", city: "סידני, אוסטרליה", cityEn: "Sydney, Australia", lat: -33.868, lng: 151.209, years: "2007", network: "ABC", desc: "מוקומנטרי אוסטרלי על שלוש דמויות בתיכון ציבורי בפרוורי סידני — מורה לדרמה שחוש ההומור שלו על חשבון התלמידים, תלמידת פרטי מתנשאת, ותלמיד מפריע. זכה ב-Logie לקומדיה מצטיינת.", descEn: "Australian mockumentary following three characters at a suburban Sydney public high school — a drama teacher, a snobbish private-school transplant, and a class clown. Won the Logie for Outstanding Comedy.", tags: ["אוסטרלי"] },

  // ── שוויצרי ──────────────────────────────────────────────────────────────
  { name: "Fascht e Familie", city: "קנטון טורגאו, שוויץ", cityEn: "Canton of Thurgau, Switzerland", lat: 47.553, lng: 8.899, years: "1994–1999", network: "SRF", desc: "סוכן נדל\"ן מנסה למכור את בית דודתו מרתה — אך היא מפרסמת חדרים להשכרה ומקימה קהילה ביתית בלתי צפויה. 5 עונות, 100 פרקים. הסיטקום השוויצרי הפופולרי ביותר בגרמנית.", descEn: "A real-estate agent tries to sell his aunt Martha's house — but she advertises rooms to let and builds an unexpected household community. 5 seasons, 100 episodes. The most popular Swiss German-language sitcom.", tags: ["שוויצרי"] },

  // ── פיליפיני ──────────────────────────────────────────────────────────────
  { name: "Iskul Bukol", city: "מנילה, פיליפינים (אוניברסיטת Wanbol הפיקטיבית)", cityEn: "Manila, Philippines (fictional Wanbol University)", lat: 14.599, lng: 120.984, years: "1978–1988", network: "IBC", desc: "שלישיית הקומדיה טיטו, ויק ו-ג'ואי — סטודנטים עם תוכניות מגוחכות בקמפוס פיקטיבי. ניר קלאסי פיליפיני שהפך לתופעת תרבות עם מספר גרסאות המשך.", descEn: "Comedy trio Tito, Vic and Joey — students with ridiculous schemes on a fictional campus. A Filipino classic that became a cultural phenomenon with several sequel series.", tags: ["פיליפיני"] },
  { name: "Home Sweetie Home", city: "מנילה, פיליפינים", cityEn: "Manila, Philippines", lat: 14.609, lng: 120.994, years: "2014–2020", network: "ABS-CBN / TV5", desc: "רומיאו ויוליה — זוג נשוי חדש שמתמודד עם חיי יומיום בפיליפינים. סיטקום רומנטי-קומי שהפך לאחד הפופולריים ביותר בפיליפינים לפני שהופסק בגלל הקורונה.", descEn: "Romeo and Juliet — a newly married couple navigating everyday life in the Philippines. A romantic-comedy sitcom that became one of the country's most popular before being cancelled due to COVID-19.", tags: ["פיליפיני"] },

  // ── ניו זילנדי ──────────────────────────────────────────────────────────────
  { name: "Flight of the Conchords", city: "וולינגטון, ניו זילנד (עלילה: ניו יורק)", cityEn: "Wellington, New Zealand (set in New York)", lat: -41.286, lng: 174.776, years: "2007–2009", network: "HBO", desc: "ברט ו-ג'מיין — דואו מוזיקלי מניו זילנד שמנסה להצליח בניו יורק עם מנהל-מעריץ בודד. סיטקום-מוזיקלי שהכניס שירים קומיים מקוריים לכל פרק. 22 פרקים.", descEn: "Bret and Jemaine — a New Zealand musical duo trying to make it in New York with a single manager-fan. A musical sitcom featuring original comic songs in each episode. 22 episodes.", tags: ["ניו זילנדי"] },

  // ── יווני ──────────────────────────────────────────────────────────────
  { name: "Sto Para Pente", city: "אתונה, יוון", cityEn: "Athens, Greece", lat: 37.983, lng: 23.727, years: "2005–2007", network: "Mega Channel", desc: "חמישה זרים שעדים למות שר בתוך מעלית מלון באתונה נסחפים לפענוח רצח עתיק. קומדיה-מסתורין שהגיעה ל-66% נתח שוק בגמר — הצלחה חסרת תקדים בטלוויזיה היוונית.", descEn: "Five strangers who witness a minister's death in an Athens hotel elevator are drawn into solving an old murder. A comedy-mystery that reached 66% market share in its finale — unprecedented in Greek TV.", tags: ["יווני"] },

  // ── דרום אפריקאי ──────────────────────────────────────────────────
  { name: "Madam & Eve", city: "יוהנסבורג, דרום אפריקה", cityEn: "Johannesburg, South Africa", lat: -26.204, lng: 28.047, years: "2000–2001", network: "e.tv", desc: "אישה לבנה ממעמד הביניים ועוזרת הבית השחורה שלה — קומדיה סאטירית על דרום אפריקה לאחר האפרטהייד, מבוסס על רצועת קומיקס מפורסמת. הוצג ל-Rose d'Or.", descEn: "A white middle-class woman and her Black domestic worker — a satirical comedy about post-apartheid South Africa, based on a famous comic strip. Nominated for the Rose d'Or.", tags: ["דרום אפריקאי"] },

  // ── הודי ──────────────────────────────────────────────────────────────
  { name: "Taarak Mehta Ka Ooltah Chashmah", city: "מומבאי, הודו", cityEn: "Mumbai, India", lat: 19.076, lng: 72.877, years: "2008–כיום", network: "Sony SAB", desc: "תושבי מתחם דירות רב-תרבותי בגוקולדהאם, מומבאי — אחת הסדרות הארוכות ביותר בהיסטוריית הטלוויזיה ההודית עם למעלה מ-4,700 פרקים. מרכזה ג'טהלל המתפשל בצרות.", descEn: "Residents of a multicultural housing society in Gokuldhaam, Mumbai — one of the longest-running shows in Indian TV history with over 4,700 episodes. Centers on the bumbling Jethalal.", tags: ["הודי"] },
  { name: "Panchayat", city: "אוטר פרדש, הודו (כפר פהולרה)", cityEn: "Uttar Pradesh, India (Phulera village)", lat: 26.846, lng: 80.946, years: "2020–כיום", network: "Amazon Prime Video", desc: "מהנדס מהעיר שמגלה שמונה לפקיד בכפר מרוחק — קומדיה-דרמה הודית עטורת שבחים על בירוקרטיה כפרית ועל קסם החיים הפשוטים.", descEn: "An urban engineer discovers he's been posted as a clerk in a remote village — a critically acclaimed Indian comedy-drama about rural bureaucracy and the charm of simple life.", tags: ["הודי"] },

  // ── סעודי ──────────────────────────────────────────────────────────────
  { name: "Tash Ma Tash", city: "ריאד, סעודיה", cityEn: "Riyadh, Saudi Arabia", lat: 24.688, lng: 46.722, years: "1993–כיום", network: "Saudi 1 / MBC 1", desc: "סדרת סקצ'ים סאטירית שמבקרת את החברה הסעודית — נורמות תרבות, הגבלות מגדר וקיצוניות דתית. אחת ההפקות הערביות המצליחות ביותר, אך יוצריה קיבלו איומי מוות מאנשי שמרנים.", descEn: "A satirical sketch show critiquing Saudi society — cultural norms, gender restrictions and religious extremism. One of the most successful Arabic productions, though its creators received death threats from conservatives.", tags: ["סעודי"] },

  // ── יפני ──────────────────────────────────────────────────────────────
  { name: "Aggretsuko", city: "טוקיו, יפן", cityEn: "Tokyo, Japan", lat: 35.676, lng: 139.650, years: "2016–2023", network: "Netflix / TBS", desc: "רטסוקו — פנדה אדומה בת 25 שמתמודדת עם חיי משרד מתסכלים בטוקיו ומפרגת את זעמה בשירת מטאל. 5 עונות של סאטירה חריפה על תרבות תאגידית יפנית.", descEn: "Retsuko — a 25-year-old red panda who copes with the frustrations of office life in Tokyo by belting death metal. 5 seasons of sharp satire on Japanese corporate culture.", tags: ["יפני"] },

  // ── קוריאני ──────────────────────────────────────────────────────────────
  { name: "High Kick!", city: "סיאול, דרום קוריאה", cityEn: "Seoul, South Korea", lat: 37.566, lng: 126.978, years: "2006–2007", network: "MBC", desc: "סיטקום קוריאני על חיי משפחת לי היומיומיים — פרצה מ-7.4% ל-24.2% נתח שוק ונחשבת לסדרה שהחיתה מחדש את ז'אנר הסיטקום בקוריאה הדרומית. 167 פרקים.", descEn: "A Korean sitcom about the everyday life of the Lee family — ratings soared from 7.4% to 24.2% and it's credited with reviving the sitcom genre in South Korea. 167 episodes.", tags: ["קוריאני"] },

  // ── סיני ──────────────────────────────────────────────────────────────
  { name: "iPartment (爱情公寓)", city: "שנגחאי, סין", cityEn: "Shanghai, China", lat: 31.230, lng: 121.473, years: "2009–2020", network: "Dragon TV / iQiyi", desc: "שבעה צעירים שחיים יחד במתחם דירות בשנגחאי — אחד הסיטקומים הפופולריים ביותר בסין. 5 עונות על אהבה, חברות וחיי רווקים עירוניים, עם השפעות ברורות של Friends ו-HIMYM.", descEn: "Seven young people living together in a Shanghai apartment complex — one of China's most popular sitcoms. 5 seasons on love, friendship and urban single life, with obvious influences from Friends and HIMYM.", tags: ["סיני"] },

  // ── רוסי ──────────────────────────────────────────────────────────────
  { name: "Воронины (וורוניני)", nameEn: "Voroniny", city: "מוסקבה, רוסיה", cityEn: "Moscow, Russia", lat: 55.755, lng: 37.617, years: "2009–2019", network: "STS", desc: "קומדיה משפחתית רוסית המבוססת על 'Everybody Loves Raymond' — שתי דורות של משפחת וורונין חיים יחד במוסקבה. 552 פרקים ב-29 עונות — שיא גינס לסדרה הקומית הארוכה ביותר ברוסיה.", descEn: "Russian family comedy based on Everybody Loves Raymond — two generations of the Voronin family living together in Moscow. 552 episodes across 29 seasons — a Guinness record for Russia's longest-running comedy.", tags: ["רוסי"] },

  // ── אוקראיני ──────────────────────────────────────────────────────────────
  { name: "Сваты (שבט)", nameEn: "Svaty (The In-Laws)", city: "קייב, אוקראינה", cityEn: "Kyiv, Ukraine", lat: 50.450, lng: 30.523, years: "2008–2021", network: "Inter / 1+1", desc: "שני זוגות חמים מרקעים שונים — אחד מהעיר ואחד מהכפר — נאלצים להסתדר כשילדיהם מתחתנים. 8 עונות של קומדיה משפחתית שנוצרה על ידי סטודיו Kvartal 95 של וולודימיר זלנסקי.", descEn: "Two sets of in-laws from different backgrounds — one urban, one rural — forced to get along when their children marry. 8 seasons of family comedy created by Volodymyr Zelenskyy's Kvartal 95 studio.", tags: ["אוקראיני"] },

  // ── הולנדי ──────────────────────────────────────────────────────────────
  { name: "De Luizenmoeder", city: "הולנד", cityEn: "Netherlands", lat: 52.370, lng: 4.895, years: "2018–כיום", network: "NPO 3 / AVROTROS", desc: "מוקומנטרי הולנדי על אמהות, מורים ותלמידים בבית ספר יסודי. שוברת שיאי סטרימינג בהולנד ומתוכנן לה עיבוד אמריקאי.", descEn: "Dutch mockumentary about parents, teachers and pupils at a primary school. Broke Dutch streaming records and has an American adaptation in development.", tags: ["הולנדי"] },

  // ── בלגי ──────────────────────────────────────────────────────────────
  { name: "In de gloria", city: "גנט, פלנדריה, בלגיה", cityEn: "Ghent, Flanders, Belgium", lat: 51.053, lng: 3.720, years: "2000–2001", network: "Canvas", desc: "מוקומנטרי סאטירי פלמי שלועג לתוכניות ריאליטי — נחשב לאחד מהשיאים של הקומדיה הפלמית. שלושה עונות שהשפיעו על ז'אנר המוקומנטרי בבלגיה.", descEn: "Flemish satirical mockumentary mocking reality TV — considered one of the pinnacles of Flemish comedy. Three seasons that shaped the Belgian mockumentary genre.", tags: ["בלגי"] },

  // ── יווני ──────────────────────────────────────────────────────────────
  { name: "Η Πολυκατοικία", nameEn: "I Polykatoikia (The Apartment Building)", city: "אתונה, יוון", cityEn: "Athens, Greece", lat: 37.979, lng: 23.726, years: "2008–2011", network: "Mega Channel", desc: "קומדיית מצבים יוונית שמתרחשת בבניין דירות באתונה. 132 פרקים על שכנים מוזרים, אהבות ומריבות בבית משותף.", descEn: "Greek sitcom set in an Athens apartment building. 132 episodes of quirky neighbors, romances and feuds in a shared residential building.", tags: ["יווני"] },
  { name: "Οι Απαράδεκτοι", nameEn: "Oi Aparadektoi (The Unacceptables)", city: "אתונה, יוון", cityEn: "Athens, Greece", lat: 37.984, lng: 23.728, years: "1990–1992", network: "Mega Channel", desc: "אחד הסיטקומים המוצלחים ביותר בהיסטוריה של הטלוויזיה היוונית — משפחה בלתי נסבלת ומצחיקה באתונה.", descEn: "One of the most successful sitcoms in Greek TV history — an insufferable yet hilarious family in Athens.", tags: ["יווני"] },

  // ── וייטנאמי ──────────────────────────────────────────────────────────────
  { name: "Gia đình là số 1", nameEn: "Gia dinh la so 1 (Family is Number One)", city: "הו צ'י מין סיטי, וייטנאם", cityEn: "Ho Chi Minh City, Vietnam", lat: 10.823, lng: 106.629, years: "2006–2014", network: "VTV3", desc: "הסיטקום הפופולרי ביותר בוייטנאם — מספר על משפחה מורחבת עם דורות שונים תחת קורת גג אחת. זכה לאהבת קהל עצומה ולמספר עונות מוצלחות.", descEn: "Vietnam's most popular sitcom — follows a multi-generational extended family living under one roof. Achieved massive audience love across multiple successful seasons.", tags: ["וייטנאמי"] },
  { name: "My Best Gay Friends", city: "הו צ'י מין סיטי, וייטנאם", cityEn: "Ho Chi Minh City, Vietnam", lat: 10.776, lng: 106.700, years: "2012–2015", network: "YouTube", desc: "סדרת רשת וייטנאמית פורצת דרך על שלושה חברים גאים שחולקים דירה בהו צ'י מין סיטי. הפכה לתופעה תרבותית בקרב הקהילה ה-LGBTQ+ בוייטנאם.", descEn: "Groundbreaking Vietnamese web series about three gay friends sharing an apartment in Ho Chi Minh City. Became a cultural phenomenon within Vietnam's LGBTQ+ community.", tags: ["וייטנאמי"] },

  // ── ניגרי ──────────────────────────────────────────────────────────────
  { name: "Basi and Company", city: "לגוס, ניגריה", cityEn: "Lagos, Nigeria", lat: 6.524, lng: 3.379, years: "1986–1990", network: "NTA", desc: "הסיטקום האפריקאי הגדול ביותר — בסי הוא חולם גדול בלגוס שמנסה להתעשר בכל דרך אפשרית. בשיאו צפו בו 30 מיליון איש, ושודר ברחבי אפריקה.", descEn: "Africa's greatest sitcom — Basi is a big dreamer in Lagos who tries to get rich by any means. At peak it had 30 million viewers and was broadcast across Africa.", tags: ["ניגרי"] },
  { name: "Papa Ajasco and Company", city: "לגוס, ניגריה", cityEn: "Lagos, Nigeria", lat: 6.455, lng: 3.406, years: "1997–כיום", network: "NTA / Wale Adenuga Productions", desc: "סיטקום משפחתי ניגרי אהוב שנוצר ב-1997 על ידי ואלה אדנוגה. משפחת אג'סקו ובני שכונתם מתמודדים עם סוגיות חברתיות בדרך קומית.", descEn: "Beloved Nigerian family sitcom created by Wale Adenuga in 1997. The Ajasco family and their neighbors tackle social issues with humor.", tags: ["ניגרי"] },

  // ── דרום אפריקאי ──────────────────────────────────────────────────────────────
  { name: "Suburban Bliss", city: "יוהנסבורג, דרום אפריקה", cityEn: "Johannesburg, South Africa", lat: -26.204, lng: 28.047, years: "1996–1997", network: "SABC", desc: "סיטקום דרום אפריקאי שעסק בשילוב גזעי אחרי האפרטהייד — משפחת ון טונדר הלבנה ומשפחת מוקוונה השחורה חיות זו לצד זו בפרברים.", descEn: "South African sitcom tackling racial integration post-apartheid — the white Van Tonder family and the Black Mokwena family live side by side in the suburbs.", tags: ["דרום אפריקאי"] },

  // ── מצרי ──────────────────────────────────────────────────────────────
  { name: "عايزة اتجوز", nameEn: "Ayza Atgawez (I Want to Get Married)", city: "קהיר, מצרים", cityEn: "Cairo, Egypt", lat: 30.044, lng: 31.235, years: "2010", network: "Egyptian TV", desc: "קומדיה מצרית עם הינד סברי על אישה מודרנית שמחפשת חתן ראוי — לועגת בחן לציפיות החברה ממסורת החתונה במצרים.", descEn: "Egyptian comedy with Hend Sabry about a modern woman searching for a suitable husband — gently mocking society's expectations around marriage in Egypt.", tags: ["מצרי"] },

  // ── גאני ──────────────────────────────────────────────────────────────
  { name: "An African City", city: "אקרה, גאנה", cityEn: "Accra, Ghana", lat: 5.603, lng: -0.187, years: "2014–2016", network: "YouTube", desc: "הגרסה האפריקאית של Sex and the City — חמש נשים מקצועיות שחזרו לאקרה אחרי שנים בחו\"ל ומנסות לבנות חיים בעיר המתפתחת.", descEn: "The African answer to Sex and the City — five professional women who returned to Accra after years abroad and try to build a life in the booming city.", tags: ["גאני"] },

  // ── אוסטרי ──────────────────────────────────────────────────────────────
  { name: "Ein echter Wiener geht nicht unter", nameEn: "Ein echter Wiener geht nicht unter (A Real Viennese Never Gives Up)", city: "וינה, אוסטריה", cityEn: "Vienna, Austria", lat: 48.175, lng: 16.372, years: "1975–1979", network: "ORF", desc: "קומדיה מעמד-פועלים אוסטרית על משפחת זקבאואר בפאבוריטן, הרובע העשירי של וינה. דיאלקט וינאי אותנטי הפך אותה לתופעה תרבותית — אחת הסדרות האוסטריות האהובות בכל הזמנים.", descEn: "Austrian working-class family comedy set in Vienna's Favoriten district. Authentic Viennese dialect made it a cultural phenomenon — one of Austria's most beloved series of all time.", tags: ["אוסטרי"] },
  { name: "Kaisermühlen Blues", city: "וינה, אוסטריה", cityEn: "Vienna (Kaisermühlen district), Austria", lat: 48.215, lng: 16.430, years: "1992–2000", network: "ORF", desc: "דרמה קומית על חיי היומיום של עובדים ותושבים בשכונת קייזרמילן בוינה. טיפלה בגזענות, זרים ואי-סובלנות — ונחשבת לאחד ההישגים הגדולים בטלוויזיה האוסטרית.", descEn: "Comedy-drama about everyday life in Vienna's Kaisermühlen district, tackling racism, xenophobia and tolerance. Considered one of the greatest achievements in Austrian television.", tags: ["אוסטרי"] },

  // ── הונגרי ──────────────────────────────────────────────────────────────
  { name: "A mi kis falunk", nameEn: "A mi kis falunk (Our Little Village)", city: "פייקאסג (פיקטיבי), הונגריה", cityEn: "Pajkaszeg (fictional village), Hungary", lat: 47.162, lng: 19.503, years: "2017–כיום", network: "RTL", desc: "הסיטקום ההונגרי הפופולרי ביותר של העשור — חיי יומיום בכפר הונגרי פיקטיבי עם ראש עיר מושחת, כומר מגדל שרירים, שוטר טיפש ומאמן כדורגל פלירטטן.", descEn: "Hungary's most popular sitcom of the decade — everyday life in a fictional Hungarian village with a corrupt mayor, bodybuilding priest, dim policeman, and flirtatious football coach.", tags: ["הונגרי"] },

  // ── קרואטי ──────────────────────────────────────────────────────────────
  { name: "Bitange i princeze", nameEn: "Bitange i princeze (Punks and Princesses)", city: "זאגרב, קרואטיה", cityEn: "Zagreb, Croatia", lat: 45.815, lng: 15.982, years: "2005–2010", network: "HRT", desc: "חמישה חברים צעירים גרים בדירות סמוכות בזאגרב — הגרסה הקרואטית ל-Friends עם פרודיה ומריבות אינסופיות. אחד הסיטקומים הצבאוניים ביותר בהיסטוריה הקרואטית.", descEn: "Five young friends living in neighboring apartments in Zagreb — Croatia's answer to Friends, full of parody and endless bickering. One of the most-watched Croatian sitcoms ever.", tags: ["קרואטי"] },

  // ── סרבי ──────────────────────────────────────────────────────────────
  { name: "Ljubav, navika, panika", nameEn: "Ljubav, navika, panika (Love, Habit, Panic)", city: "בלגרד, סרביה", cityEn: "Belgrade, Serbia", lat: 44.787, lng: 20.457, years: "2005–2007", network: "RTV Pink", desc: "זוג גרוש שמאלץ לחלוק דירה בזמן גידול ילדיהן — זכה בפרס Golden Rose of Montreux כאחד הסיטקומים הטובים של 2005. נחשב לסיטקום הסרבי הטוב ביותר.", descEn: "A divorced couple forced to share an apartment while raising their daughters — won the Golden Rose of Montreux as one of the best sitcoms of 2005. Considered Serbia's finest sitcom.", tags: ["סרבי"] },

  // ── בולגרי ──────────────────────────────────────────────────────────────
  { name: "Домашен арест", nameEn: "Domashen Arest (House Arrest)", city: "סופיה, בולגריה", cityEn: "Sofia, Bulgaria", lat: 42.698, lng: 23.322, years: "2011–2013", network: "bTV", desc: "בכיר במשטרה מגיע למעצר בית — ומאלץ להתגורר עם גרושתו ואהובה. מופק בסגנון אמריקאי (כמו Everybody Loves Raymond) עם 4 עונות ו-86 פרקים.", descEn: "A senior police inspector sentenced to house arrest — forced to live with his ex-wife and her lover. Produced in American sitcom style (like Everybody Loves Raymond) with 4 seasons and 86 episodes.", tags: ["בולגרי"] },

  // ── קפריסאי ──────────────────────────────────────────────────────────────
  { name: "Βουρατε Γειτονοι", nameEn: "Vourate Geitonoi (Run Neighbors)", city: "ניקוסיה, קפריסין", cityEn: "Nicosia, Cyprus", lat: 35.166, lng: 33.367, years: "2001–2005", network: "Sigma TV", desc: "קומדיה על דיירי בניין בניקוסיה בהנהגת בעל הבית הקמצן ריקוס. הגיעה לדירוגי צפייה של 65–70% — הסיטקום הקפריסאי הפופולרי ביותר בכל הזמנים. זכה לעונת החייאה וסרט.", descEn: "Comedy about residents of a Nicosia apartment building led by the stingy landlord Rikkos. Achieved 65–70% viewer ratings — Cyprus's most popular sitcom ever. Got a revival season and a feature film.", tags: ["קפריסאי"] },

  // ── פרואני ──────────────────────────────────────────────────────────────
  { name: "Al fondo hay sitio", nameEn: "Al fondo hay sitio (There's Room at the Back)", city: "לימה, פרו", cityEn: "Lima, Peru", lat: -12.046, lng: -77.043, years: "2009–2016", network: "América Televisión", desc: "הדרמה-קומדיה הפרואנית הפופולרית ביותר — שתי משפחות משכונות שונות מוצאות עצמן שכנות ומתנגשות. שודרה ב-7 עונות עם אלפי פרקים ונצפתה בכל מדינות האנדים.", descEn: "Peru's most popular dramedy — two families from different social classes find themselves neighbors and clash constantly. Aired for 7 seasons with thousands of episodes, watched across the Andean countries.", tags: ["פרואני"] },

  // ── ונצואלאי ──────────────────────────────────────────────────────────────
  { name: "Radio Rochela", city: "קראקס, ונצואלה", cityEn: "Caracas, Venezuela", lat: 10.480, lng: -66.879, years: "1959–2010", network: "RCTV", desc: "תוכנית הקומדיה הוותיקה ביותר בהיסטוריה — 51 שנות שידור רצופות של סקצ'ים סאטיריים על חברה ופוליטיקה ונצואלית. מוכרת בספר גינס כתוכנית הקומדיה הוותיקה ביותר בעולם.", descEn: "The longest-running comedy show in history — 51 consecutive years of satirical sketches on Venezuelan society and politics. Listed in the Guinness Book of Records as the world's longest-running comedy show.", tags: ["ונצואלאי"] },

  // ── אורוגוואי ──────────────────────────────────────────────────────────────
  { name: "Decalegrón", city: "מונטווידאו, אורוגוואי", cityEn: "Montevideo, Uruguay", lat: -34.901, lng: -56.165, years: "1977–2002", network: "Saeta TV / Canal 10", desc: "תוכנית הקומדיה הוותיקה ביותר של אורוגוואי — 25 שנות הומור מעודן שזכו בפרסים רבים. הפכה לחלק בלתי נפרד מהתרבות האורוגוואית עם קומיקאים כמו חוליו פראדה.", descEn: "Uruguay's longest-running comedy show — 25 years of refined humor that won numerous awards. Became an inseparable part of Uruguayan culture featuring comedians like Julio Frade.", tags: ["אורוגוואי"] },

  // ── צ'ילאני ──────────────────────────────────────────────────────────────
  { name: "31 Minutos", city: "סנטיאגו, צ'ילה", cityEn: "Santiago, Chile", lat: -33.459, lng: -70.648, years: "2003–2005", network: "TVN", desc: "תוכנית חדשות בובות סאטירית צ'ילאנית — מגיש החדשות טוביאס ופנצ'ו לוקורנוז מדווחים על חדשות מומצאות. הפכה לתרבות פופ בצ'ילה ובמדינות דוברות ספרדית.", descEn: "Chilean satirical puppet news show — anchor Tobías Bodega and Pancho Loco report fabricated news. Became a pop-culture staple in Chile and across Spanish-speaking countries.", tags: ["צ'ילאני"] },

  // ── קולומביאני ──────────────────────────────────────────────────────────────
  { name: "Betty la fea", city: "בוגוטה, קולומביה", cityEn: "Bogotá, Colombia", lat: 4.711, lng: -74.072, years: "1999–2001", network: "RCN", desc: "בטי — מזכירה חכמה אך לא יפה בחברת אופנה בבוגוטה. נחשבת לטלנובלה הנצפית ביותר בהיסטוריה ועובדה ב-25+ מדינות. הגרסה האמריקאית 'Ugly Betty' זכתה ב-Golden Globe.", descEn: "Betty — a smart but unfashionable secretary at a Bogotá fashion company. Considered the most-watched telenovela in history and adapted in 25+ countries. The US version 'Ugly Betty' won a Golden Globe.", tags: ["קולומביאני"] },

  // ── סלובני ──────────────────────────────────────────────────────────────
  { name: "Naša mala klinika", nameEn: "Naša mala klinika (Our Little Clinic)", city: "לובליאנה, סלובניה", cityEn: "Ljubljana, Slovenia", lat: 46.056, lng: 14.505, years: "2004–2007", network: "Pop TV", desc: "סיטקום סלובני על צוות אקסנטרי במרפאה קטנה — 7 עונות ו-112 פרקים. זכה בארבעה פרסי ויקטור כסדרה הטלוויזיונית הטובה ביותר בסלובניה.", descEn: "Slovenian sitcom about an eccentric staff at a small clinic — 7 seasons and 112 episodes. Won four Viktor awards for best television series in Slovenia.", tags: ["סלובני"] },

  // ── ארמני ──────────────────────────────────────────────────────────────
  { name: "Ազիզյանները", nameEn: "The Azizyans", city: "ירוון, ארמניה", cityEn: "Yerevan, Armenia", lat: 40.177, lng: 44.503, years: "2016–2020", network: "Armenia TV", desc: "גארניק אזיזיאן — מוכר בגדים ומפרנס יחיד של משפחה כאוטית בירוון. אחד הסיטקומים הארמנים הפופולריים ביותר של העשור.", descEn: "Garnik Azizyan — a clothing store seller and sole breadwinner of a chaotic family in Yerevan. One of Armenia's most popular sitcoms of the decade.", tags: ["ארמני"] },

  // ── גאורגי ──────────────────────────────────────────────────────────────
  { name: "შუა ქალაქში", nameEn: "In the Middle of the City", city: "טביליסי, גאורגיה", cityEn: "Tbilisi, Georgia", lat: 41.694, lng: 44.833, years: "2007–2014", network: "Imedi TV", desc: "חבורת חברים בשכונת וואקה של טביליסי — כל אחד עם אורח חיים מוזר ומצבים מפתיעים. הסיטקום הגאורגי הפופולרי ביותר, שחזר ב-2014 עם המשך.", descEn: "A group of friends in Tbilisi's Vake neighborhood — each with an eccentric lifestyle and surprising situations. Georgia's most popular sitcom, which returned in 2014 with a continuation.", tags: ["גאורגי"] },

  // ── איסלנדי ──────────────────────────────────────────────────────────────
  { name: "Næturvaktin", nameEn: "Næturvaktin (The Night Shift)", city: "רייקיאוויק, איסלנד", cityEn: "Reykjavik, Iceland", lat: 64.128, lng: -21.827, years: "2007", network: "Skjár einn", desc: "שלושה גברים בתחנת דלק ברייקיאוויק מתמודדים עם שעמום, לקוחות מוזרים ובוס נוירוטי. החלק הראשון בטרילוגיה האיסלנדית האגדית — נחשב לאחד הסיטקומים הטובים אי פעם באיסלנד.", descEn: "Three men working at a Reykjavik gas station battle boredom, strange customers and a neurotic boss. The first in a legendary Icelandic trilogy — considered one of the best sitcoms ever made in Iceland.", tags: ["איסלנדי"] },

  // ── תאילנדי ──────────────────────────────────────────────────────────────
  { name: "บางรักซอย 9", nameEn: "Bang Rak Soi 9", city: "בנגקוק, תאילנד", cityEn: "Bangkok, Thailand", lat: 13.723, lng: 100.514, years: "2003–2012", network: "Channel 9 MCOT", desc: "אדריכל עובר מעיר קטנה לבנגקוק ושוכר בית בשכונת בנג ראק — 11 עונות ו-438 פרקים. אחד הסיטקומים הארוכים ביותר בהיסטוריית הטלוויזיה התאילנדית.", descEn: "An architect relocates from a small town to Bangkok and rents a house in the Bang Rak district — 11 seasons and 438 episodes. One of the longest-running sitcoms in Thai TV history.", tags: ["תאילנדי"] },

  // ── נפאלי ──────────────────────────────────────────────────────────────
  { name: "Meri Bassai", nameEn: "Meri Bassai", city: "כפר נפאלי (פיקטיבי)", cityEn: "Rural Nepal (fictional village)", lat: 27.700, lng: 85.300, years: "2006–כיום", network: "Nepal Television", desc: "הסיטקום הנפאלי הארוך ביותר — חיי כפר בנפאל עם דמות דורמוש שחוזר ושוב נכנס לצרות. חוקר את חיי הכפר, השלטון המקומי והתרבות הנפאלית בדרך קומית.", descEn: "Nepal's longest-running sitcom — village life featuring the character Dhurmush who repeatedly gets into trouble. Explores rural life, local governance and Nepali culture through comedy.", tags: ["נפאלי"] },
  { name: "Jire Khursani", nameEn: "Jire Khursani (Tiny Hot Chillies)", city: "קטמנדו, נפאל", cityEn: "Kathmandu, Nepal", lat: 27.717, lng: 85.314, years: "2003–2015", network: "Nepal Television", desc: "דרמה-קומדיה על משפחה מתפקדת-לא-טוב בנפאל עם דמויות צבעוניות כמו מונדרה — בוגר גאה — ובהוקה שתמיד רעב. אחת התוכניות הנצפות ביותר בנפאל.", descEn: "Comedy-drama about a dysfunctional Nepali family featuring colorful characters like Mundre the proud graduate and Bhoke who is perpetually hungry. One of Nepal's most-watched shows.", tags: ["נפאלי"] },

  // ── מלזי ──────────────────────────────────────────────────────────────
  { name: "Kopitiam", city: "קואלה לומפור, מלזיה", cityEn: "Kuala Lumpur, Malaysia", lat: 3.149, lng: 101.697, years: "1998–2003", network: "NTV7", desc: "סיטקום מלזי בשפה האנגלית המתרחש בבית קפה שכונתי — שבע עונות על חברים שמגלים את החיים, האהבה והאוכל. זכה בפרסי Asian Television Awards.", descEn: "Malaysian English-language sitcom set in a neighborhood kopitiam (coffee shop) — seven seasons of friends figuring out life, love and food. Won Asian Television Awards recognition.", tags: ["מלזי"] },

  // ── אינדונזי ──────────────────────────────────────────────────────────────
  { name: "Tetangga Masa Gitu?", nameEn: "Tetangga Masa Gitu? (What an Annoying Neighbour!)", city: "ג'קרטה, אינדונזיה", cityEn: "Jakarta, Indonesia", lat: -6.200, lng: 106.816, years: "2014–2017", network: "NET.", desc: "שני זוגות שכנים בג'קרטה — זוג ותיק ונשואים טריים — מתמודדים עם חיי יומיום ואי-הבנות קומיות. הסיטקום האינדונזי הפופולרי ביותר של שנות ה-2010.", descEn: "Two neighboring couples in Jakarta — a long-married pair and newlyweds — navigate daily life and comic misunderstandings. Indonesia's most popular sitcom of the 2010s.", tags: ["אינדונזי"] },

  // ── הונג קונגי ──────────────────────────────────────────────────────────────
  { name: "皆大歡喜", nameEn: "Virtues of Harmony", city: "הונג קונג", cityEn: "Hong Kong", lat: 22.302, lng: 114.177, years: "2001–2002", network: "TVB Jade", desc: "סיטקום היסטורי של TVB המתרחש בתקופת שושלת מינג — על משפחת קאם העשירה ושכניה. 500+ פרקים הפכו אותו לאחד הסיטקומים הפופולריים בכל הזמנים בהונג קונג.", descEn: "TVB historical sitcom set in the Ming Dynasty — following the wealthy Kam family and their neighbors. 500+ episodes made it one of the most popular sitcoms of all time in Hong Kong.", tags: ["הונג קונגי"] },
  { name: "愛·回家", nameEn: "Come Home Love", city: "הונג קונג", cityEn: "Hong Kong", lat: 22.319, lng: 114.169, years: "2012–כיום", network: "TVB Jade", desc: "סיטקום יומי של TVB על חיי משפחה בהונג קונג — אחת הסדרות הארוכות ביותר בטלוויזיה ההונג קונגית עם אלפי פרקים.", descEn: "TVB daily sitcom about family life in Hong Kong — one of the longest-running series in Hong Kong TV history with thousands of episodes.", tags: ["הונג קונגי"] },

  // ── סרי לנקי ──────────────────────────────────────────────────────────────
  { name: "Kopi Kade", city: "קולומבו, סרי לנקה", cityEn: "Colombo, Sri Lanka", lat: 6.927, lng: 79.861, years: "1987–כיום", network: "ITN", desc: "הסיטקום הסרי לנקי הארוך ביותר — שידר מ-1987 ללא הפסקה, עם הפרק ה-2000 בשנת 2024. דרמה-קומדיה שבועית שהפכה לחלק בלתי נפרד מהתרבות הסרי לנקית.", descEn: "Sri Lanka's longest-running sitcom — on air continuously since 1987, reaching its 2,000th episode in 2024. A weekly comedy-drama that became an inseparable part of Sri Lankan culture.", tags: ["סרי לנקי"] },

  // ── ג'מייקני ──────────────────────────────────────────────────────────────
  { name: "Lime Tree Lane", city: "קינגסטון, ג'מייקה", cityEn: "Kingston, Jamaica", lat: 17.998, lng: -76.795, years: "1988–1997", network: "JBC", desc: "הסיטקום הג'מייקאי הראשון — 9 עונות על חיי שכונה עירונית בקינגסטון, שחקרה את החיים העממיים והמעמד הבינוני. קפיצת מדרגה לקריירות של שחקנים ג'מייקאיים רבים.", descEn: "Jamaica's first sitcom — 9 seasons of neighborhood life in Kingston, exploring working-class and middle-class Jamaican life. A career launchpad for many Jamaican actors.", tags: ["ג'מייקני"] },

  // ── פוארטו ריקאני ──────────────────────────────────────────────────────────────
  { name: "Los García", city: "סן חואן, פוארטו ריקו", cityEn: "San Juan, Puerto Rico", lat: 18.465, lng: -66.116, years: "1970–1976", network: "WAPA-TV", desc: "הסיטקום הפוארטו ריקאני הקלאסי — משפחת גארסיה ושכניה בסן חואן. נחשב לתוכנית הטלוויזיה עם הדירוגים הגבוהים ביותר בפוארטו ריקו ב-3 מתוך 6 שנות שידורו.", descEn: "The classic Puerto Rican sitcom — the García family and their neighbors in San Juan. Rated the highest-rated TV program in Puerto Rico in 3 of its 6 broadcast years.", tags: ["פוארטו ריקאני"] },
];

export const ALL_TAGS: Tag[] = [
  "אמריקאי", "בריטי", "ישראלי", "קנדי", "אירי",
  "צרפתי", "גרמני", "ספרדי", "איטלקי", "מקסיקני", "טורקי", "שוודי", "בוסני",
  "פולני", "צ'כי", "רומני", "פיני", "ברזילאי", "ארגנטינאי", "נורווגי", "דני", "אוסטרלי", "ניו זילנדי", "שוויצרי", "פיליפיני",
  "רוסי", "אוקראיני", "הולנדי", "בלגי", "צ'ילאני", "קולומביאני",
  "יווני", "דרום אפריקאי", "הודי", "סעודי", "יפני", "קוריאני", "סיני",
  "וייטנאמי", "ניגרי", "מצרי", "גאני",
  "אוסטרי", "הונגרי", "קרואטי", "סרבי", "בולגרי", "קפריסאי",
  "פרואני", "ונצואלאי", "אורוגוואי",
  "סלובני", "ארמני", "גאורגי", "איסלנדי",
  "תאילנדי", "נפאלי", "מלזי", "אינדונזי",
  "הונג קונגי", "סרי לנקי", "ג'מייקני", "פוארטו ריקאני",
];

export const TAG_COLORS: Record<Tag, string> = {
  "אמריקאי":      "#185FA5",
  "בריטי":        "#0F6E56",
  "ישראלי":       "#BA7517",
  "קנדי":         "#639922",
  "אירי":         "#7A2020",
  "צרפתי":        "#533FAB",
  "גרמני":        "#5F5E5A",
  "ספרדי":        "#C0392B",
  "איטלקי":       "#1A6B3C",
  "מקסיקני":      "#D35400",
  "טורקי":        "#8E1010",
  "שוודי":        "#1B5EA6",
  "בוסני":        "#4A235A",
  "פולני":        "#8E1A1A",
  "צ'כי":         "#1A4A7A",
  "רומני":        "#1A6B3C",
  "פיני":         "#154360",
  "ברזילאי":      "#1D6A2A",
  "ארגנטינאי":    "#1A3A6B",
  "נורווגי":      "#7B241C",
  "דני":          "#A93226",
  "אוסטרלי":      "#784212",
  "ניו זילנדי":   "#145A32",
  "שוויצרי":      "#5D4037",
  "פיליפיני":     "#1565C0",
  "רוסי":         "#7B1FA2",
  "אוקראיני":     "#1565C0",
  "הולנדי":       "#E65100",
  "בלגי":         "#F9A825",
  "צ'ילאני":      "#B71C1C",
  "קולומביאני":   "#F57F17",
  "יווני":        "#1A5276",
  "דרום אפריקאי": "#1E8449",
  "הודי":         "#E67E22",
  "סעודי":        "#196F3D",
  "יפני":         "#922B21",
  "קוריאני":      "#5B2C6F",
  "סיני":         "#C0392B",
  "וייטנאמי":     "#C62828",
  "ניגרי":        "#2E7D32",
  "מצרי":         "#AD6F07",
  "גאני":         "#6A1B9A",
  "אוסטרי":       "#C62828",
  "הונגרי":       "#6D4C41",
  "קרואטי":       "#1565C0",
  "סרבי":         "#AD1457",
  "בולגרי":       "#2E7D32",
  "קפריסאי":      "#00838F",
  "פרואני":       "#E65100",
  "ונצואלאי":     "#558B2F",
  "אורוגוואי":    "#283593",
  "סלובני":       "#1B5E20",
  "ארמני":        "#B71C1C",
  "גאורגי":       "#880E4F",
  "איסלנדי":      "#01579B",
  "תאילנדי":      "#4A148C",
  "נפאלי":        "#B71C1C",
  "מלזי":         "#1A237E",
  "אינדונזי":     "#C62828",
  "הונג קונגי":   "#7B1FA2",
  "סרי לנקי":     "#E65100",
  "ג'מייקני":     "#F9A825",
  "פוארטו ריקאני":"#1565C0",
};

export const TAG_VIEWS: Record<Tag, [number, number, number]> = {
  "אמריקאי":      [39,    -96,    4],
  "בריטי":        [52,    -2,     6],
  "ישראלי":       [31.95,  34.85, 9],
  "קנדי":         [44,    -79,    7],
  "אירי":         [53.2,  -7.5,   7],
  "צרפתי":        [46.8,   2.3,   6],
  "גרמני":        [51.1,  10.4,   6],
  "ספרדי":        [40.4,  -3.7,   7],
  "איטלקי":       [42.5,  12.5,   6],
  "מקסיקני":      [19.4, -99.1,   7],
  "טורקי":        [39.9,  32.8,   6],
  "שוודי":        [62.0,  15.0,   5],
  "בוסני":        [44.0,  17.5,   7],
  "פולני":        [52.0,  19.0,   6],
  "צ'כי":         [49.8,  15.5,   7],
  "רומני":        [45.9,  24.9,   6],
  "פיני":         [64.0,  26.0,   5],
  "ברזילאי":      [-15.0, -53.0,  4],
  "ארגנטינאי":    [-34.6, -58.4,  7],
  "נורווגי":      [62.0,  10.0,   5],
  "דני":          [56.0,  10.5,   7],
  "אוסטרלי":      [-27.0, 134.0,  4],
  "ניו זילנדי":   [-41.3, 174.8,  7],
  "שוויצרי":      [46.8,   8.2,   7],
  "פיליפיני":     [12.8,  122.0,  5],
  "רוסי":         [60.0,  60.0,   4],
  "אוקראיני":     [49.0,  31.0,   6],
  "הולנדי":       [52.3,   5.3,   7],
  "בלגי":         [50.5,   4.5,   7],
  "צ'ילאני":      [-35.0, -71.0,  5],
  "קולומביאני":   [  4.0, -72.0,  5],
  "יווני":        [38.0,  23.7,   7],
  "דרום אפריקאי": [-28.0, 25.0,   5],
  "הודי":         [22.0,  80.0,   4],
  "סעודי":        [24.7,  46.7,   6],
  "יפני":         [36.5, 138.0,   5],
  "קוריאני":      [37.5, 127.0,   7],
  "סיני":         [32.0, 116.0,   4],
  "וייטנאמי":     [14.0, 108.0,   5],
  "ניגרי":        [ 9.0,   8.0,   5],
  "מצרי":         [26.0,  30.0,   5],
  "גאני":         [ 7.9,  -1.0,   6],
  "אוסטרי":       [47.5,  13.5,   7],
  "הונגרי":       [47.0,  19.5,   7],
  "קרואטי":       [45.1,  16.5,   7],
  "סרבי":         [44.0,  21.0,   7],
  "בולגרי":       [42.7,  25.5,   7],
  "קפריסאי":      [35.0,  33.0,   8],
  "פרואני":       [-10.0, -75.0,  5],
  "ונצואלאי":     [ 8.0,  -66.0,  5],
  "אורוגוואי":    [-33.0, -56.0,  6],
  "סלובני":       [46.1,  14.8,   7],
  "ארמני":        [40.0,  45.0,   7],
  "גאורגי":       [42.0,  43.5,   7],
  "איסלנדי":      [65.0, -18.0,   6],
  "תאילנדי":      [15.0, 101.0,   5],
  "נפאלי":        [28.0,  84.0,   6],
  "מלזי":         [ 4.0, 109.0,   5],
  "אינדונזי":     [-2.5, 118.0,   4],
  "הונג קונגי":   [22.3, 114.2,   9],
  "סרי לנקי":     [ 7.9,  80.7,   7],
  "ג'מייקני":     [18.1, -77.3,   8],
  "פוארטו ריקאני":[18.2, -66.5,   9],
};
