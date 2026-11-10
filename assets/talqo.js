/* ============================================================
   TALQO — DANE POCZĄTKOWE STRONY
   Kolory marki: główny #4A1F45 (śliwka), akcent #C9A25A (złoto), tło #F7F2EC (krem)
   ============================================================ */
(function (root) {
  'use strict';

  /* >>> JEDYNE MIEJSCE DO PODMIANY ADRESU DOMENY (bez końcowego ukośnika) <<< */
  var DOMENA = 'https://[DOMENA]';

  var L = function (pl, en, it) { return { pl: pl, en: en, it: it }; };
  var TODO = L('[DO UZUPEŁNIENIA]', '[TO BE COMPLETED]', '[DA COMPLETARE]');
  var todo = function (pl, en, it) {
    return L('[DO UZUPEŁNIENIA: ' + pl + ']', '[TO BE COMPLETED: ' + en + ']', '[DA COMPLETARE: ' + it + ']');
  };

  var DEFAULTS = {
    v: 1,
    ustawienia: {
      domena: DOMENA,
      ga4: '',
      jezyki: [
        { kod: 'pl', nazwa: 'Polski', wl: true },
        { kod: 'en', nazwa: 'English', wl: true },
        { kod: 'it', nazwa: 'Italiano', wl: true }
      ]
    },
    seo: {
      title: L('Kursy językowe online | TALQO Szkoła językowa online',
        'Online language courses | TALQO Online Language School',
        'Corsi di lingue online | TALQO Scuola di lingue online'),
      opis: L('Angielski, niemiecki i włoski online z lektorem – dla dzieci, młodzieży, dorosłych i firm. Zapisy przez cały rok. Proszę wysłać zapytanie o termin.',
        'English, German and Italian online with a teacher – for children, teenagers, adults and companies. Enrolment all year round. Request a lesson date today.',
        'Inglese, tedesco e italiano online con insegnante – per bambini, ragazzi, adulti e aziende. Iscrizioni tutto l’anno. Richieda subito una data per la lezione.')
    },
    firma: {
      nazwa: 'TALQO',
      podpis: L('Szkoła językowa online', 'Online Language School', 'Scuola di lingue online')
    },
    hero: {
      nadtytul: L('Szkoła językowa online', 'Online language school', 'Scuola di lingue online'),
      tytul: L('Kursy językowe online. Angielski, niemiecki i włoski w jednym miejscu.',
        'Online language courses. English, German and Italian in one place.',
        'Corsi di lingue online. Inglese, tedesco e italiano in un unico posto.'),
      wstep: L('Nowoczesna nauka języków, która otwiera nowe możliwości – w pracy, podróżach i codziennym życiu.',
        'Modern language learning that opens up new opportunities – at work, when travelling and in everyday life.',
        'Un modo moderno di imparare le lingue che apre nuove possibilità: nel lavoro, in viaggio e nella vita di tutti i giorni.'),
      odreczne: L('Język. Kultura. Ludzie. Perspektywy.', 'Language. Culture. People. Perspectives.', 'Lingua. Cultura. Persone. Prospettive.'),
      stopkaHaslo: L('', '', '')
    },
    slajdy: [
      { id: 'sl1', src: '', alt: L('rzeźba antyczna i rzymskie arkady w ciepłych, kamiennych tonach — motyw kultury i podróży',
          'classical sculpture and Roman arcades in warm stone tones — a culture and travel motif',
          'scultura classica e arcate romane in toni caldi di pietra — un motivo di cultura e viaggio') }
    ],
    atuty: [
      { id: 'at1', ikona: 'laptop', tytul: L('Online, na żywo', 'Online, live', 'Online, dal vivo'), opis: L('Lekcje z lektorem', 'Lessons with a teacher', 'Lezioni con insegnante') },
      { id: 'at2', ikona: 'osoby', tytul: L('Małe grupy', 'Small groups', 'Piccoli gruppi'), opis: L('Więcej rozmowy', 'More conversation', 'Più conversazione') },
      { id: 'at3', ikona: 'warstwy', tytul: L('Realne sytuacje', 'Real situations', 'Situazioni reali'), opis: L('Język, który się przydaje', 'Language you will actually use', 'La lingua che serve davvero') },
      { id: 'at4', ikona: 'rytm', tytul: L('Elastycznie', 'Flexible', 'Flessibile'), opis: L('Nauka w dogodnym rytmie', 'Learning at a pace that suits you', 'Studio al ritmo più comodo') }
    ],

    /* Kolejność = kolejność na stronie i w menu */
    sekcje: [
      { id: 'promocje', wid: true, menu: false, etykieta: L('Promocje', 'Offers', 'Promozioni'),
        tytul: L('Aktualne promocje', 'Current offers', 'Promozioni in corso'), wstep: L('', '', '') },
      { id: 'kursy', wid: true, menu: true, etykieta: L('Kursy', 'Courses', 'Corsi'),
        tytul: L('Kursy angielskiego, niemieckiego i włoskiego online', 'English, German and Italian courses online', 'Corsi online di inglese, tedesco e italiano'),
        wstep: L('Uczymy trzech języków – od pierwszych słów po swobodną rozmowę. Poziom wyjściowy pomaga ustalić test poziomujący.',
          'We teach three languages – from first words to confident conversation. A placement test helps establish your starting level.',
          'Insegniamo tre lingue: dalle prime parole alla conversazione fluente. Un test di livello aiuta a stabilire il punto di partenza.') },
      { id: 'oferta', wid: true, menu: true, etykieta: L('Oferta', 'What we offer', 'Offerta'),
        tytul: L('Nasze kursy', 'Our courses', 'I nostri corsi'),
        wstep: L('Cztery formy zajęć online. Proszę wybrać tę, która najlepiej pasuje do Państwa celu.',
          'Four formats of online lessons. Please choose the one that best fits your goal.',
          'Quattro formule di lezioni online. Scelga quella più adatta al Suo obiettivo.') },
      { id: 'metoda', wid: true, menu: true, etykieta: L('Metoda', 'Method', 'Metodo'),
        tytul: L('Metoda nauczania', 'Teaching method', 'Metodo didattico'),
        wstep: L('Jak uczymy i dlaczego właśnie tak.', 'How we teach and why.', 'Come insegniamo e perché.') },
      { id: 'cennik', wid: true, menu: true, etykieta: L('Cennik', 'Prices', 'Prezzi'),
        tytul: L('Cennik i pakiety lekcji', 'Prices and lesson packages', 'Prezzi e pacchetti di lezioni'),
        wstep: L('Przejrzyste pakiety – bez ukrytych kosztów.', 'Clear packages – no hidden costs.', 'Pacchetti chiari, senza costi nascosti.') },
      { id: 'jak-zaczac', wid: true, menu: false, etykieta: L('Jak zacząć?', 'How to start', 'Come iniziare'),
        tytul: L('Jak zacząć?', 'How to start?', 'Come iniziare?'),
        wstep: L('Od zapytania do pierwszej lekcji – cztery kroki.', 'From enquiry to first lesson – four steps.', 'Dalla richiesta alla prima lezione: quattro passaggi.') },
      { id: 'zapisy', wid: true, menu: false, etykieta: L('Zapisy', 'Enrolment', 'Iscrizioni'),
        tytul: L('Zapisy przez cały rok', 'Enrolment all year round', 'Iscrizioni tutto l’anno'), wstep: L('', '', '') },
      { id: 'o-nas', wid: true, menu: true, etykieta: L('O nas', 'About us', 'Chi siamo'),
        tytul: L('O szkole TALQO', 'About TALQO', 'La scuola TALQO'), wstep: L('', '', '') },
      { id: 'bezpieczenstwo', wid: true, menu: false, etykieta: L('Bezpieczeństwo', 'Safety', 'Sicurezza'),
        tytul: L('Bezpieczeństwo uczestników', 'Participant safety', 'Sicurezza dei partecipanti'),
        wstep: L('Zajęcia online wymagają jasnych zasad – szczególnie gdy uczą się dzieci i młodzież.',
          'Online lessons need clear rules – especially when children and teenagers are learning.',
          'Le lezioni online richiedono regole chiare, soprattutto quando studiano bambini e ragazzi.') },
      { id: 'platnosci', wid: true, menu: false, etykieta: L('Płatności', 'Payments', 'Pagamenti'),
        tytul: L('Metody płatności', 'Payment methods', 'Metodi di pagamento'), wstep: L('', '', '') },
      { id: 'opinie', wid: true, menu: false, etykieta: L('Opinie', 'Reviews', 'Recensioni'),
        tytul: L('Opinie klientów', 'Client reviews', 'Recensioni dei clienti'), wstep: L('', '', '') },
      { id: 'faq', wid: true, menu: false, etykieta: L('FAQ', 'FAQ', 'FAQ'),
        tytul: L('Najczęstsze pytania', 'Frequently asked questions', 'Domande frequenti'), wstep: L('', '', '') },
      { id: 'magazyn', wid: true, menu: true, etykieta: L('Magazyn', 'Journal', 'Magazine'),
        tytul: L('Magazyn TALQO', 'TALQO Journal', 'TALQO Magazine'),
        wstep: L('Artykuły, rozmowy i inspiracje ze świata języków, kultury i nowoczesnej edukacji.',
          'Articles, conversations and inspiration from the world of languages, culture and modern education.',
          'Articoli, conversazioni e ispirazioni dal mondo delle lingue, della cultura e dell’educazione moderna.') },
      { id: 'kontakt', wid: true, menu: true, etykieta: L('Kontakt', 'Contact', 'Contatti'),
        tytul: L('Kontakt i zapytanie o termin', 'Contact and lesson requests', 'Contatti e richiesta di una data'),
        wstep: L('Proszę napisać – oddzwonimy lub odpiszemy.', 'Please write to us – we will call or write back.', 'Ci scriva: La richiameremo o risponderemo per iscritto.') }
    ],

    promocje: [],

    magazyn: [
      { id: 'mg1', tytul: todo('tytuł pierwszego artykułu', 'title of the first article', 'titolo del primo articolo'),
        kategoria: L('Kultura', 'Culture', 'Cultura'),
        tresc: todo('treść artykułu dostarczy szkoła', 'article text to be provided by the school', 'testo dell’articolo fornito dalla scuola'),
        data: '', src: '', pasek: false, od: '', do: '', wstrzymana: false },
      { id: 'mg2', tytul: todo('tytuł drugiego artykułu', 'title of the second article', 'titolo del secondo articolo'),
        kategoria: L('Język w praktyce', 'Language in practice', 'Lingua in pratica'),
        tresc: todo('treść artykułu dostarczy szkoła', 'article text to be provided by the school', 'testo dell’articolo fornito dalla scuola'),
        data: '', src: '', pasek: false, od: '', do: '', wstrzymana: false },
      { id: 'mg3', tytul: todo('tytuł trzeciego artykułu', 'title of the third article', 'titolo del terzo articolo'),
        kategoria: L('Kariera', 'Career', 'Carriera'),
        tresc: todo('treść artykułu dostarczy szkoła', 'article text to be provided by the school', 'testo dell’articolo fornito dalla scuola'),
        data: '', src: '', pasek: false, od: '', do: '', wstrzymana: false }
    ],

    kursy: [
      { id: 'k-en', skrot: 'EN', kolor: '#1F4E6B', nazwa: L('Angielski', 'English', 'Inglese'),
        opis: L('Kurs angielskiego online z lektorem – dla dzieci, młodzieży, dorosłych i firm, także z przygotowaniem do egzaminu ósmoklasisty, matury oraz egzaminów IELTS i Cambridge.\n\n[DO UZUPEŁNIENIA: program kursu i dostępne poziomy]',
          'Online English with a teacher – for children, teenagers, adults and companies, including preparation for school-leaving exams, IELTS and Cambridge exams.\n\n[TO BE COMPLETED: course programme and available levels]',
          'Inglese online con insegnante – per bambini, ragazzi, adulti e aziende, anche con preparazione agli esami scolastici, IELTS e Cambridge.\n\n[DA COMPLETARE: programma del corso e livelli disponibili]'),
        alt: L('londyńska ulica z czerwonym autobusem i wieżą zegarową', 'a London street with a red bus and the clock tower', 'una strada di Londra con autobus rosso e la torre dell’orologio'), src: '' },
      { id: 'k-de', skrot: 'DE', kolor: '#8A5A0F', nazwa: L('Niemiecki', 'German', 'Tedesco'),
        opis: L('Kurs niemieckiego online z lektorem – od podstaw po język potrzebny w szkole, na studiach i w pracy.\n\n[DO UZUPEŁNIENIA: program kursu i dostępne poziomy]',
          'Online German with a teacher – from the basics to the language needed at school, university and work.\n\n[TO BE COMPLETED: course programme and available levels]',
          'Tedesco online con insegnante – dalle basi alla lingua necessaria a scuola, all’università e al lavoro.\n\n[DA COMPLETARE: programma del corso e livelli disponibili]'),
        alt: L('Brama Brandenburska w Berlinie o zmierzchu', 'the Brandenburg Gate in Berlin at dusk', 'la Porta di Brandeburgo a Berlino al tramonto'), src: '' },
      { id: 'k-it', skrot: 'IT', kolor: '#3F6B4A', nazwa: L('Włoski', 'Italian', 'Italiano'),
        opis: L('Kurs włoskiego online z lektorem – język na co dzień, w podróży i w pracy.\n\n[DO UZUPEŁNIENIA: program kursu i dostępne poziomy]',
          'Online Italian with a teacher – the language for everyday life, travel and work.\n\n[TO BE COMPLETED: course programme and available levels]',
          'Italiano online con insegnante – la lingua per la vita quotidiana, i viaggi e il lavoro.\n\n[DA COMPLETARE: programma del corso e livelli disponibili]'),
        alt: L('filiżanka espresso na stoliku włoskiej kawiarni', 'an espresso cup on an Italian café table', 'una tazzina di espresso sul tavolino di un caffè italiano'), src: '' }
    ],
    grupy: [
      { id: 'g1', tytul: L('Przedszkolaki', 'Preschool children', 'Bambini in età prescolare'), opis: L('Pierwszy kontakt z językiem obcym w formie dopasowanej do najmłodszych.', 'A first contact with a foreign language in a form suited to the youngest learners.', 'Il primo contatto con una lingua straniera, in una forma adatta ai più piccoli.') },
      { id: 'g2', tytul: L('Szkoła podstawowa', 'Primary school', 'Scuola primaria'), opis: L('Zajęcia, które uzupełniają naukę szkolną i oswajają z mówieniem.', 'Lessons that complement school learning and build speaking confidence.', 'Lezioni che integrano lo studio scolastico e abituano a parlare.') },
      { id: 'g3', tytul: L('Egzamin ósmoklasisty', 'Eighth-grade exam (Poland)', 'Esame di terza media (Polonia)'), opis: L('Przygotowanie do egzaminu ósmoklasisty z języka obcego.', 'Preparation for the Polish eighth-grade foreign language exam.', 'Preparazione all’esame polacco di lingua straniera di fine scuola primaria.') },
      { id: 'g4', tytul: L('Szkoła średnia i matura', 'Secondary school and matura', 'Scuola superiore e maturità'), opis: L('Przygotowanie do matury i wsparcie w nauce w szkole średniej.', 'Preparation for the matura exam and support with secondary school learning.', 'Preparazione alla maturità e supporto nello studio alle superiori.') },
      { id: 'g5', tytul: L('Studenci', 'University students', 'Studenti universitari'), opis: L('Język na studia, wymiany i pierwsze kroki zawodowe.', 'Language for university, exchanges and first career steps.', 'La lingua per l’università, gli scambi e i primi passi professionali.') },
      { id: 'g6', tytul: L('Dorośli', 'Adults', 'Adulti'), opis: L('Nauka dopasowana do celu: praca, podróże lub codzienna komunikacja.', 'Learning tailored to your goal: work, travel or everyday communication.', 'Studio su misura per l’obiettivo: lavoro, viaggi o comunicazione quotidiana.') },
      { id: 'g7', tytul: L('Seniorzy', 'Seniors', 'Senior'), opis: L('Spokojne tempo i tematy bliskie codziennemu życiu.', 'A calm pace and topics close to everyday life.', 'Ritmo tranquillo e temi vicini alla vita quotidiana.') },
      { id: 'g8', tytul: L('Firmy', 'Companies', 'Aziende'), opis: L('Kursy dla pracowników i zespołów – język potrzebny w pracy.', 'Courses for employees and teams – the language needed at work.', 'Corsi per dipendenti e team: la lingua che serve al lavoro.') }
    ],

    uslugi: [
      { id: 'u-one', nazwa: L('ONE', 'ONE', 'ONE'), podtytul: L('Indywidualnie · 1:1 z lektorem', 'Individual · 1:1 with a teacher', 'Individuale · 1:1 con insegnante'),
        opis: L('Zajęcia jeden na jeden. Program, tempo i tematy dopasowane do Państwa celu i poziomu.', 'One-to-one lessons. Programme, pace and topics tailored to your goal and level.', 'Lezioni individuali. Programma, ritmo e temi su misura per il Suo obiettivo e livello.'),
        czas: L('', '', ''), cena: L('', '', ''), src: '', plakietka: L('', '', ''), nowosc: false, przycisk: 'rez',
        alt: L('filiżanka kawy obok otwartego laptopa w porannym świetle', 'a coffee cup next to an open laptop in morning light', 'una tazza di caffè accanto a un portatile aperto nella luce del mattino') },
      { id: 'u-duo', nazwa: L('DUO', 'DUO', 'DUO'), podtytul: L('W parze · nauka z bliską osobą', 'In a pair · learn with someone close', 'In coppia · con una persona cara'),
        opis: L('Wspólne lekcje dla dwóch osób – z partnerem, przyjacielem lub członkiem rodziny.', 'Shared lessons for two – with a partner, friend or family member.', 'Lezioni condivise per due persone: con il partner, un amico o un familiare.'),
        czas: L('', '', ''), cena: L('', '', ''), src: '', plakietka: L('', '', ''), nowosc: false, przycisk: 'rez',
        alt: L('dwa śliwkowe fotele przy okrągłym stoliku', 'two plum armchairs at a round table', 'due poltrone color prugna a un tavolino rotondo') },
      { id: 'u-business', nazwa: L('BUSINESS', 'BUSINESS', 'BUSINESS'), podtytul: L('Dla firm · język w pracy', 'For companies · language at work', 'Per aziende · la lingua al lavoro'),
        opis: L('Kursy dla firm i zespołów. Zakres i terminy ustalamy indywidualnie – proszę wysłać zapytanie ofertowe.', 'Courses for companies and teams. Scope and schedule are agreed individually – please send an enquiry.', 'Corsi per aziende e team. Contenuti e orari si concordano individualmente: ci invii una richiesta.'),
        czas: L('', '', ''), cena: L('', '', ''), src: '', plakietka: L('', '', ''), nowosc: false, przycisk: 'zap',
        alt: L('przeszklona fasada nowoczesnego biurowca', 'the glass façade of a modern office building', 'la facciata in vetro di un moderno edificio per uffici') },
      { id: 'u-egzaminy', nazwa: L('EGZAMINY', 'EXAMS', 'ESAMI'), podtytul: L('Przygotowanie · IELTS, Cambridge, matura, egzamin ósmoklasisty', 'Preparation · IELTS, Cambridge, matura, eighth-grade exam', 'Preparazione · IELTS, Cambridge, maturità, esame di terza media'),
        opis: L('Zajęcia ukierunkowane na konkretny egzamin i jego wymagania.', 'Lessons focused on a specific exam and its requirements.', 'Lezioni mirate a un esame specifico e ai suoi requisiti.'),
        czas: L('', '', ''), cena: L('', '', ''), src: '', plakietka: L('', '', ''), nowosc: false, przycisk: 'rez',
        alt: L('stos podręczników do egzaminów językowych', 'a stack of language exam textbooks', 'una pila di manuali per esami di lingua') }
    ],

    metoda: {
      tekst: todo('opis metody nauczania TALQO — dostarczy szkoła', 'description of the TALQO teaching method — to be provided by the school', 'descrizione del metodo didattico TALQO — fornita dalla scuola'),
      src: '',
      alt: L('otwarta książka z fotografią miasta, obok notatnik', 'an open book with a city photograph, next to a notebook', 'un libro aperto con la fotografia di una città, accanto a un taccuino')
    },
    filary: [
      { id: 'f1', tytul: L('Lekcje na żywo z lektorem', 'Live lessons with a teacher', 'Lezioni dal vivo con insegnante'), opis: L('Każde zajęcia odbywają się online, w czasie rzeczywistym.', 'Every lesson takes place online, in real time.', 'Ogni lezione si svolge online, in tempo reale.') },
      { id: 'f2', tytul: L('Rozmowa na pierwszym miejscu', 'Conversation first', 'La conversazione al primo posto'), opis: L('Małe grupy zostawiają więcej czasu na mówienie.', 'Small groups leave more time for speaking.', 'I piccoli gruppi lasciano più tempo per parlare.') },
      { id: 'f3', tytul: L('Realne sytuacje', 'Real situations', 'Situazioni reali'), opis: L('Uczymy języka, który przydaje się w pracy, podróży i na co dzień.', 'We teach language that is useful at work, when travelling and day to day.', 'Insegniamo la lingua che serve al lavoro, in viaggio e ogni giorno.') },
      { id: 'f4', tytul: L('Test poziomujący na start', 'Placement test to begin', 'Test di livello all’inizio'), opis: L('Pozwala dobrać kurs do aktualnego poziomu.', 'It allows us to match the course to your current level.', 'Permette di scegliere il corso adatto al livello attuale.') }
    ],

    onas: {
      tekst: L('TALQO to szkoła językowa online. Uczymy angielskiego, niemieckiego i włoskiego – dzieci, młodzież, studentów, dorosłych, seniorów i zespoły firmowe.\n\nNajważniejsze są dla nas: jakość i staranność, doświadczenie, uczciwość oraz indywidualne podejście – w przystępnej cenie.\n\n[DO UZUPEŁNIENIA: historia szkoły, doświadczenie i kilka zdań o zespole]',
        'TALQO is an online language school. We teach English, German and Italian – to children, teenagers, students, adults, seniors and company teams.\n\nWhat matters most to us: quality and care, experience, honesty and an individual approach – at an accessible price.\n\n[TO BE COMPLETED: the school’s story, experience and a few sentences about the team]',
        'TALQO è una scuola di lingue online. Insegniamo inglese, tedesco e italiano a bambini, ragazzi, studenti, adulti, senior e team aziendali.\n\nPer noi contano soprattutto: qualità e cura, esperienza, onestà e un approccio individuale, a un prezzo accessibile.\n\n[DA COMPLETARE: storia della scuola, esperienza e alcune frasi sul team]'),
      src1: '', alt1: L('lektorka prowadząca lekcję online przy biurku', 'a teacher giving an online lesson at her desk', 'un’insegnante che tiene una lezione online alla scrivania'),
      src2: '', alt2: L('notatki i słownik na jasnym blacie', 'notes and a dictionary on a light desk', 'appunti e un dizionario su un piano chiaro')
    },
    wyrozniki: [
      { id: 'w1', tytul: L('Kwalifikacje kadry', 'Qualified teachers', 'Insegnanti qualificati'), opis: todo('wykształcenie i doświadczenie lektorów', 'teachers’ education and experience', 'formazione ed esperienza degli insegnanti') },
      { id: 'w2', tytul: L('Certyfikaty i akredytacje', 'Certificates and accreditations', 'Certificati e accreditamenti'), opis: todo('posiadane certyfikaty i akredytacje', 'certificates and accreditations held', 'certificati e accreditamenti posseduti') },
      { id: 'w3', tytul: L('Test poziomujący', 'Placement test', 'Test di livello'), opis: L('Przed rozpoczęciem nauki sprawdzamy poziom, aby dobrać odpowiedni kurs.', 'Before lessons begin we check your level to choose the right course.', 'Prima di iniziare verifichiamo il livello per scegliere il corso giusto.') },
      { id: 'w4', tytul: L('Indywidualne podejście', 'Individual approach', 'Approccio individuale'), opis: L('Cel nauki ustalamy z każdą osobą osobno.', 'We agree the learning goal with each person individually.', 'Definiamo l’obiettivo di studio con ogni persona singolarmente.') }
    ],
    certyfikaty: [],

    pakiety: [
      { id: 'p1', nazwa: todo('nazwa pakietu 1', 'package 1 name', 'nome del pacchetto 1'), opis: todo('liczba lekcji, czas trwania, forma zajęć', 'number of lessons, duration, format', 'numero di lezioni, durata, formula'), cena: todo('cena', 'price', 'prezzo'), wyrozniony: false },
      { id: 'p2', nazwa: todo('nazwa pakietu 2', 'package 2 name', 'nome del pacchetto 2'), opis: todo('liczba lekcji, czas trwania, forma zajęć', 'number of lessons, duration, format', 'numero di lezioni, durata, formula'), cena: todo('cena', 'price', 'prezzo'), wyrozniony: true },
      { id: 'p3', nazwa: todo('nazwa pakietu 3', 'package 3 name', 'nome del pacchetto 3'), opis: todo('liczba lekcji, czas trwania, forma zajęć', 'number of lessons, duration, format', 'numero di lezioni, durata, formula'), cena: todo('cena', 'price', 'prezzo'), wyrozniony: false }
    ],
    cennik: [
      { id: 'c1', kategoria: L('Lekcje pojedyncze', 'Single lessons', 'Lezioni singole'), nazwa: L('ONE – lekcja indywidualna', 'ONE – individual lesson', 'ONE – lezione individuale'), dopisek: L('1:1 z lektorem', '1:1 with a teacher', '1:1 con insegnante'), czas: TODO, cena: TODO },
      { id: 'c2', kategoria: L('Lekcje pojedyncze', 'Single lessons', 'Lezioni singole'), nazwa: L('DUO – lekcja w parze', 'DUO – lesson for two', 'DUO – lezione in coppia'), dopisek: L('cena za osobę', 'price per person', 'prezzo a persona'), czas: TODO, cena: TODO },
      { id: 'c3', kategoria: L('Lekcje pojedyncze', 'Single lessons', 'Lezioni singole'), nazwa: L('EGZAMINY – lekcja przygotowująca', 'EXAMS – preparation lesson', 'ESAMI – lezione di preparazione'), dopisek: L('', '', ''), czas: TODO, cena: TODO },
      { id: 'c4', kategoria: L('Dla firm', 'For companies', 'Per aziende'), nazwa: L('BUSINESS – kurs dla firmy', 'BUSINESS – company course', 'BUSINESS – corso aziendale'), dopisek: L('wycena indywidualna', 'individual quote', 'preventivo individuale'), czas: L('', '', ''), cena: L('wycena', 'on request', 'su richiesta') }
    ],
    cennikUwaga: todo('aktualny cennik zostanie wpisany po przesłaniu pliku przez szkołę', 'current prices will be entered once the school sends its price list', 'i prezzi aggiornati saranno inseriti dopo l’invio del listino da parte della scuola'),

    kroki: [
      { id: 'kr1', tytul: L('Zapytanie o termin', 'Request a date', 'Richiesta di una data'), opis: L('Wypełniają Państwo krótki formularz „Poproś o termin” – wystarczy język i preferowana pora zajęć.', 'You fill in the short “Request a date” form – just the language and your preferred lesson time.', 'Compila il breve modulo «Richieda una data»: bastano la lingua e l’orario preferito.') },
      { id: 'kr2', tytul: L('Kontakt z naszej strony', 'We get back to you', 'La ricontattiamo'), opis: L('Oddzwaniamy lub odpisujemy, aby poznać cel nauki i odpowiedzieć na pytania.', 'We call or write back to learn about your goal and answer your questions.', 'La richiamiamo o Le scriviamo per conoscere l’obiettivo e rispondere alle domande.') },
      { id: 'kr3', tytul: L('Test poziomujący', 'Placement test', 'Test di livello'), opis: L('Sprawdzamy aktualny poziom i proponujemy kurs oraz formę zajęć.', 'We check your current level and suggest a course and lesson format.', 'Verifichiamo il livello attuale e proponiamo corso e formula.') },
      { id: 'kr4', tytul: L('Pierwsza lekcja online', 'First online lesson', 'Prima lezione online'), opis: L('Spotykają się Państwo z lektorem w ustalonym terminie.', 'You meet your teacher at the agreed time.', 'Incontra l’insegnante alla data concordata.') }
    ],
    zapisy: {
      tekst: L('Nie prowadzimy naboru semestralnego – naukę można rozpocząć w dowolnym miesiącu. Proszę wysłać zapytanie, a zaproponujemy najbliższy możliwy termin.',
        'We do not run term-based intakes – you can start in any month. Please send a request and we will suggest the nearest available date.',
        'Non ci sono iscrizioni a semestre: si può iniziare in qualsiasi mese. Ci invii una richiesta e Le proporremo la prima data disponibile.')
    },

    bezpieczenstwo: [
      { id: 'b1', tytul: L('Ochrona danych osobowych', 'Personal data protection', 'Protezione dei dati personali'), opis: L('Dane przetwarzamy zgodnie z RODO i wyłącznie w celu obsługi zapytań oraz zajęć. Szczegóły opisuje polityka prywatności.', 'We process data in line with the GDPR and only to handle enquiries and lessons. Details are set out in the privacy policy.', 'Trattiamo i dati nel rispetto del GDPR e solo per gestire richieste e lezioni. I dettagli sono nell’informativa sulla privacy.') },
      { id: 'b2', tytul: L('Zajęcia dzieci i młodzieży', 'Lessons for children and teenagers', 'Lezioni per bambini e ragazzi'), opis: todo('zasady kontaktu z rodzicami, zgody opiekunów, standardy ochrony małoletnich', 'rules for contact with parents, guardian consent, child protection standards', 'regole di contatto con i genitori, consensi dei tutori, standard di tutela dei minori') },
      { id: 'b3', tytul: L('Platforma do zajęć', 'Lesson platform', 'Piattaforma per le lezioni'), opis: todo('z jakiego narzędzia korzysta szkoła i czy lekcje są nagrywane', 'which tool the school uses and whether lessons are recorded', 'quale strumento utilizza la scuola e se le lezioni vengono registrate') }
    ],
    platnosci: [
      { id: 'pl1', tytul: todo('metoda płatności 1, np. przelew', 'payment method 1, e.g. bank transfer', 'metodo di pagamento 1, ad es. bonifico'), opis: L('', '', '') },
      { id: 'pl2', tytul: todo('metoda płatności 2', 'payment method 2', 'metodo di pagamento 2'), opis: L('', '', '') },
      { id: 'pl3', tytul: L('Faktury dla firm', 'Invoices for companies', 'Fatture per aziende'), opis: todo('zasady wystawiania faktur', 'invoicing rules', 'modalità di fatturazione') }
    ],

    opinie: [],
    opiniePodsum: { srednia: '', liczba: '', link: '' },

    faq: [
      { id: 'q1', pytanie: L('Czy zajęcia odbywają się wyłącznie online?', 'Are lessons held online only?', 'Le lezioni si svolgono solo online?'),
        odpowiedz: L('Tak. Wszystkie lekcje prowadzimy online, na żywo z lektorem.', 'Yes. All lessons are held online, live with a teacher.', 'Sì. Tutte le lezioni si svolgono online, dal vivo con un insegnante.') },
      { id: 'q2', pytanie: L('Jakich języków uczy TALQO?', 'Which languages does TALQO teach?', 'Quali lingue insegna TALQO?'),
        odpowiedz: L('Angielskiego, niemieckiego i włoskiego.', 'English, German and Italian.', 'Inglese, tedesco e italiano.') },
      { id: 'q3', pytanie: L('Dla kogo są kursy?', 'Who are the courses for?', 'A chi sono rivolti i corsi?'),
        odpowiedz: L('Dla przedszkolaków, uczniów szkół podstawowych i średnich (w tym przygotowanie do egzaminu ósmoklasisty i matury), studentów, dorosłych, seniorów oraz firm.', 'For preschool children, primary and secondary school pupils (including exam preparation), university students, adults, seniors and companies.', 'Per bambini in età prescolare, alunni di scuola primaria e superiore (inclusa la preparazione agli esami), studenti universitari, adulti, senior e aziende.') },
      { id: 'q4', pytanie: L('Kiedy można się zapisać?', 'When can I enrol?', 'Quando ci si può iscrivere?'),
        odpowiedz: L('Zapisy trwają przez cały rok. Wystarczy wysłać formularz „Poproś o termin” – oddzwonimy lub odpiszemy.', 'Enrolment is open all year round. Simply send the “Request a date” form – we will call or write back.', 'Le iscrizioni sono aperte tutto l’anno. Basta inviare il modulo «Richieda una data»: La richiameremo o Le scriveremo.') },
      { id: 'q5', pytanie: L('Jak sprawdzić swój poziom?', 'How do I find out my level?', 'Come posso verificare il mio livello?'),
        odpowiedz: L('Przed rozpoczęciem nauki przeprowadzamy test poziomujący, który pozwala dobrać kurs.', 'Before lessons begin we carry out a placement test, which lets us choose the right course.', 'Prima di iniziare svolgiamo un test di livello, che permette di scegliere il corso giusto.') },
      { id: 'q6', pytanie: L('Ile kosztują lekcje i jak można zapłacić?', 'How much do lessons cost and how can I pay?', 'Quanto costano le lezioni e come si paga?'),
        odpowiedz: L('Aktualne ceny i pakiety lekcji znajdują się w cenniku, a dostępne formy płatności w sekcji „Metody płatności”.', 'Current prices and lesson packages are listed in the price list, and the available payment options in the “Payment methods” section.', 'I prezzi aggiornati e i pacchetti sono nel listino; le modalità disponibili nella sezione «Metodi di pagamento».') }
    ],

    kontakt: {
      telefon: '', email: '', whatsapp: '', messenger: '', instagram: '', facebook: '',
      googleProfil: '', rezerwacja: ''
    },
    godziny: {
      potwierdzone: false,
      uwaga: todo('godziny kontaktu do potwierdzenia przez szkołę', 'contact hours to be confirmed by the school', 'orari di contatto da confermare da parte della scuola'),
      dni: [
        { otw: true, od: '09:00', 'do': '17:00' }, { otw: true, od: '09:00', 'do': '17:00' },
        { otw: true, od: '09:00', 'do': '17:00' }, { otw: true, od: '09:00', 'do': '17:00' },
        { otw: true, od: '09:00', 'do': '17:00' }, { otw: false, od: '09:00', 'do': '13:00' },
        { otw: false, od: '09:00', 'do': '13:00' }
      ]
    },
    dniSpecjalne: [],
    newsletter: {
      tytul: L('Newsletter TALQO', 'TALQO newsletter', 'Newsletter TALQO'),
      opis: L('Nowe artykuły Magazynu i informacje o kursach – bez spamu, z możliwością rezygnacji w każdej chwili.',
        'New Journal articles and course news – no spam, unsubscribe at any time.',
        'Nuovi articoli del Magazine e novità sui corsi: niente spam, con possibilità di disiscriversi in qualsiasi momento.')
    },
    polityka: {
      tekst: L(
        '**1. Administrator danych**\nAdministratorem danych osobowych jest TALQO Szkoła językowa online, [DO UZUPEŁNIENIA: pełna nazwa przedsiębiorcy, NIP, adres do korespondencji]. Kontakt: {EMAIL}.\n\n**2. Jakie dane przetwarzamy i po co**\nDane podane w formularzu kontaktowym (imię i nazwisko, e-mail, opcjonalnie telefon, treść wiadomości) przetwarzamy, aby odpowiedzieć na zapytanie i ustalić termin zajęć – art. 6 ust. 1 lit. b i f RODO. Adres e-mail podany przy zapisie do newslettera przetwarzamy na podstawie zgody – art. 6 ust. 1 lit. a RODO.\n\n**3. Jak długo przechowujemy dane**\nZapytania – do zakończenia korespondencji i przez czas niezbędny do obrony przed roszczeniami. Newsletter – do wycofania zgody.\n\n**4. Odbiorcy danych**\nDane mogą być powierzane dostawcy hostingu strony (Cloudflare) oraz [DO UZUPEŁNIENIA: inni dostawcy, np. poczta e-mail, platforma do zajęć].\n\n**5. Prawa osób**\nPrzysługuje Państwu prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia, sprzeciwu, wycofania zgody oraz skargi do Prezesa UODO.\n\n**6. Pliki cookie i statystyki**\nStrona nie używa plików cookie do śledzenia bez Państwa zgody. Statystyki odwiedzin uruchamiamy dopiero po wyrażeniu zgody w oknie ustawień prywatności.',
        '**1. Data controller**\nThe controller of personal data is TALQO Online Language School, [TO BE COMPLETED: full business name, tax ID, postal address]. Contact: {EMAIL}.\n\n**2. What data we process and why**\nData provided in the contact form (name, e-mail, optionally phone, message) is processed to answer your enquiry and arrange lesson dates – Art. 6(1)(b) and (f) GDPR. The e-mail address given when subscribing to the newsletter is processed on the basis of consent – Art. 6(1)(a) GDPR.\n\n**3. How long we keep data**\nEnquiries – until correspondence ends and for the time needed to defend against claims. Newsletter – until consent is withdrawn.\n\n**4. Recipients**\nData may be entrusted to the website hosting provider (Cloudflare) and [TO BE COMPLETED: other providers, e.g. e-mail, lesson platform].\n\n**5. Your rights**\nYou have the right to access, rectify, erase, restrict, port and object to the processing of your data, to withdraw consent, and to lodge a complaint with the Polish supervisory authority (UODO).\n\n**6. Cookies and statistics**\nThe site does not use tracking cookies without your consent. Visit statistics are enabled only after you agree in the privacy settings window.',
        '**1. Titolare del trattamento**\nIl titolare del trattamento è TALQO Scuola di lingue online, [DA COMPLETARE: denominazione completa, partita IVA, indirizzo postale]. Contatto: {EMAIL}.\n\n**2. Quali dati trattiamo e perché**\nI dati forniti nel modulo di contatto (nome, e-mail, eventualmente telefono, messaggio) sono trattati per rispondere alla richiesta e fissare le lezioni – art. 6, par. 1, lett. b) e f) GDPR. L’indirizzo e-mail fornito per la newsletter è trattato sulla base del consenso – art. 6, par. 1, lett. a) GDPR.\n\n**3. Per quanto tempo conserviamo i dati**\nRichieste – fino al termine della corrispondenza e per il tempo necessario alla tutela legale. Newsletter – fino alla revoca del consenso.\n\n**4. Destinatari**\nI dati possono essere affidati al fornitore di hosting del sito (Cloudflare) e a [DA COMPLETARE: altri fornitori, ad es. posta elettronica, piattaforma per le lezioni].\n\n**5. Diritti**\nHa diritto di accesso, rettifica, cancellazione, limitazione, portabilità, opposizione, revoca del consenso e reclamo all’autorità di controllo polacca (UODO).\n\n**6. Cookie e statistiche**\nIl sito non utilizza cookie di tracciamento senza il Suo consenso. Le statistiche delle visite vengono attivate solo dopo il consenso nella finestra delle impostazioni sulla privacy.')
    }
  };

  /* Teksty interfejsu strony (przyciski, etykiety, komunikaty) */
  var UI = {
    pl: {
      skip: 'Przejdź do treści', menu: 'Menu', navMain: 'Menu główne', langs: 'Wersja językowa', enrol: 'Zapisz się',
      cta1: 'Poznaj kursy', cta2: 'Zobacz, jak uczymy', pick: 'Wybierz język', photo: 'ZDJĘCIE',
      reserve: 'Zarezerwuj termin', enquire: 'Zapytaj o ofertę', askCourse: 'Zapytaj o kurs:', forWhom: 'Dla kogo są kursy?',
      nowosc: 'Nowość', promo: 'Promocja', validTo: 'Ważne do', left: 'Zostało', days: 'dni', day: 'dzień', hrs: 'h', noEnd: 'Do odwołania',
      packages: 'Pakiety lekcji', priceList: 'Cennik lekcji', colName: 'Zajęcia', colTime: 'Czas', colPrice: 'Cena', askTerm: 'Poproś o termin',
      certs: 'Certyfikaty i akredytacje', read: 'Czytaj artykuł', close: 'Zamknij', prev: 'Poprzednie', next: 'Następne',
      noReviews: 'Pierwsze opinie pojawią się tutaj wkrótce.', googleReviews: 'Opinie w Google', rating: 'Ocena', of5: 'na 5', reviewsN: 'opinii',
      channels: 'Napisz do nas', hours: 'Godziny kontaktu', closed: 'nieczynne', changes: 'Zmiany w godzinach',
      stOpen: 'Biuro czynne · do {g}', stClosed: 'Biuro nieczynne · czynne {k} od {g}', stClosedLong: 'Biuro nieczynne', today: 'dziś', tomorrow: 'jutro',
      dni: ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'],
      wDni: ['w poniedziałek', 'we wtorek', 'w środę', 'w czwartek', 'w piątek', 'w sobotę', 'w niedzielę'],
      fTitle: 'Formularz kontaktowy', fMode1: 'Proszę o termin zajęć', fMode2: 'Mam pytanie', fName: 'Imię i nazwisko', fEmail: 'E-mail', fPhone: 'Telefon (opcjonalnie)',
      fLang: 'Język', fForm: 'Forma zajęć', fAny: '— proszę wybrać —', fWhen: 'Preferowany termin (dni i godziny)', fMsg: 'Wiadomość', fCap: 'Zabezpieczenie: ile to jest {a} + {b}?',
      fConsent: 'Zapoznałam/-em się z {p} i proszę o kontakt w sprawie zapytania.', fPolicy: 'polityką prywatności', fSend: 'Wyślij zapytanie', fSending: 'Wysyłanie…',
      fOk: 'Dziękujemy. Zapytanie zostało wysłane – oddzwonimy lub odpiszemy.', fFail: 'Nie udało się wysłać formularza. Proszę spróbować ponownie lub skorzystać z innej formy kontaktu.',
      fDemo: ' (Tryb demonstracyjny: zgłoszenie zapisano tylko w tej przeglądarce.)',
      eName: 'Proszę podać imię i nazwisko (min. 3 znaki).', eEmail: 'Proszę podać poprawny adres e-mail.', ePhone: 'Numer telefonu: 9–15 cyfr, opcjonalnie z „+”.',
      eMsg: 'Proszę wpisać wiadomość (min. 10 znaków).', eCap: 'Wynik działania jest nieprawidłowy.', eConsent: 'Zgoda jest wymagana, abyśmy mogli odpowiedzieć.', eFast: 'Formularz wysłano zbyt szybko. Proszę spróbować za chwilę.',
      nEmail: 'Adres e-mail', nConsent: 'Zgadzam się na otrzymywanie newslettera TALQO na podany adres e-mail.', nSend: 'Zapisz mnie', nOk: 'Dziękujemy. Adres został zapisany do newslettera.',
      policy: 'Polityka prywatności', admin: 'Panel administratora', top: 'Do góry', sections: 'Na stronie', contact: 'Kontakt', follow: 'Znajdź nas', made: 'Realizacja',
      googleProfile: 'Profil Firmy w Google', rights: 'Wszelkie prawa zastrzeżone.', phone: 'Telefon', call: 'Zadzwoń', write: 'Napisz', ticker: 'Komunikaty', slide: 'Zdjęcie',
      cookieTxt: 'Za Państwa zgodą włączymy anonimowe statystyki odwiedzin (Google Analytics). Bez zgody nie zbieramy żadnych danych statystycznych.', cookieYes: 'Zgadzam się', cookieNo: 'Nie zgadzam się',
      emailTodo: '[DO UZUPEŁNIENIA: adres e-mail szkoły]', linkTodo: '[LINK DO UZUPEŁNIENIA]', noscript: 'Formularz wymaga włączonej obsługi JavaScript.'
    },
    en: {
      skip: 'Skip to content', menu: 'Menu', navMain: 'Main menu', langs: 'Language version', enrol: 'Enrol',
      cta1: 'Explore courses', cta2: 'See how we teach', pick: 'Choose a language', photo: 'PHOTO',
      reserve: 'Request a date', enquire: 'Ask for a quote', askCourse: 'Ask about the course:', forWhom: 'Who are the courses for?',
      nowosc: 'New', promo: 'Offer', validTo: 'Valid until', left: 'Time left:', days: 'days', day: 'day', hrs: 'h', noEnd: 'Until further notice',
      packages: 'Lesson packages', priceList: 'Lesson prices', colName: 'Lesson', colTime: 'Duration', colPrice: 'Price', askTerm: 'Request a date',
      certs: 'Certificates and accreditations', read: 'Read the article', close: 'Close', prev: 'Previous', next: 'Next',
      noReviews: 'The first reviews will appear here soon.', googleReviews: 'Reviews on Google', rating: 'Rating', of5: 'out of 5', reviewsN: 'reviews',
      channels: 'Write to us', hours: 'Contact hours', closed: 'closed', changes: 'Changes to hours',
      stOpen: 'Office open · until {g}', stClosed: 'Office closed · open {k} from {g}', stClosedLong: 'Office closed', today: 'today', tomorrow: 'tomorrow',
      dni: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      wDni: ['on Monday', 'on Tuesday', 'on Wednesday', 'on Thursday', 'on Friday', 'on Saturday', 'on Sunday'],
      fTitle: 'Contact form', fMode1: 'I would like a lesson date', fMode2: 'I have a question', fName: 'Full name', fEmail: 'E-mail', fPhone: 'Phone (optional)',
      fLang: 'Language', fForm: 'Lesson format', fAny: '— please choose —', fWhen: 'Preferred time (days and hours)', fMsg: 'Message', fCap: 'Security check: what is {a} + {b}?',
      fConsent: 'I have read the {p} and ask to be contacted about my enquiry.', fPolicy: 'privacy policy', fSend: 'Send enquiry', fSending: 'Sending…',
      fOk: 'Thank you. Your enquiry has been sent – we will call or write back.', fFail: 'The form could not be sent. Please try again or use another contact method.',
      fDemo: ' (Demo mode: the enquiry was saved in this browser only.)',
      eName: 'Please enter your full name (min. 3 characters).', eEmail: 'Please enter a valid e-mail address.', ePhone: 'Phone number: 9–15 digits, optionally with “+”.',
      eMsg: 'Please enter a message (min. 10 characters).', eCap: 'The answer is incorrect.', eConsent: 'Consent is required so that we can reply.', eFast: 'The form was sent too quickly. Please try again in a moment.',
      nEmail: 'E-mail address', nConsent: 'I agree to receive the TALQO newsletter at the address provided.', nSend: 'Subscribe', nOk: 'Thank you. Your address has been added to the newsletter.',
      policy: 'Privacy policy', admin: 'Admin panel', top: 'Back to top', sections: 'On this page', contact: 'Contact', follow: 'Find us', made: 'Website by',
      googleProfile: 'Google Business Profile', rights: 'All rights reserved.', phone: 'Phone', call: 'Call', write: 'Write', ticker: 'Announcements', slide: 'Photo',
      cookieTxt: 'With your consent we will enable anonymous visit statistics (Google Analytics). Without consent we collect no statistical data.', cookieYes: 'I agree', cookieNo: 'I do not agree',
      emailTodo: '[TO BE COMPLETED: school e-mail address]', linkTodo: '[TO BE COMPLETED: link]', noscript: 'The form requires JavaScript to be enabled.'
    },
    it: {
      skip: 'Vai al contenuto', menu: 'Menu', navMain: 'Menu principale', langs: 'Versione linguistica', enrol: 'Iscriviti',
      cta1: 'Scopri i corsi', cta2: 'Scopri come insegniamo', pick: 'Scegli la lingua', photo: 'FOTO',
      reserve: 'Richieda una data', enquire: 'Richieda un preventivo', askCourse: 'Chieda informazioni sul corso:', forWhom: 'A chi sono rivolti i corsi?',
      nowosc: 'Novità', promo: 'Promozione', validTo: 'Valida fino al', left: 'Mancano', days: 'giorni', day: 'giorno', hrs: 'h', noEnd: 'Fino a nuovo avviso',
      packages: 'Pacchetti di lezioni', priceList: 'Listino delle lezioni', colName: 'Lezione', colTime: 'Durata', colPrice: 'Prezzo', askTerm: 'Richieda una data',
      certs: 'Certificati e accreditamenti', read: 'Leggi l’articolo', close: 'Chiudi', prev: 'Precedente', next: 'Successivo',
      noReviews: 'Le prime recensioni appariranno qui a breve.', googleReviews: 'Recensioni su Google', rating: 'Valutazione', of5: 'su 5', reviewsN: 'recensioni',
      channels: 'Ci scriva', hours: 'Orari di contatto', closed: 'chiuso', changes: 'Variazioni di orario',
      stOpen: 'Ufficio aperto · fino alle {g}', stClosed: 'Ufficio chiuso · aperto {k} dalle {g}', stClosedLong: 'Ufficio chiuso', today: 'oggi', tomorrow: 'domani',
      dni: ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'],
      wDni: ['lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato', 'domenica'],
      fTitle: 'Modulo di contatto', fMode1: 'Desidero una data per la lezione', fMode2: 'Ho una domanda', fName: 'Nome e cognome', fEmail: 'E-mail', fPhone: 'Telefono (facoltativo)',
      fLang: 'Lingua', fForm: 'Formula', fAny: '— selezioni —', fWhen: 'Orario preferito (giorni e ore)', fMsg: 'Messaggio', fCap: 'Controllo di sicurezza: quanto fa {a} + {b}?',
      fConsent: 'Ho letto l’{p} e chiedo di essere contattato/a in merito alla richiesta.', fPolicy: 'informativa sulla privacy', fSend: 'Invia la richiesta', fSending: 'Invio in corso…',
      fOk: 'Grazie. La richiesta è stata inviata: La richiameremo o Le scriveremo.', fFail: 'Non è stato possibile inviare il modulo. Riprovi o utilizzi un altro canale di contatto.',
      fDemo: ' (Modalità demo: la richiesta è stata salvata solo in questo browser.)',
      eName: 'Inserisca nome e cognome (min. 3 caratteri).', eEmail: 'Inserisca un indirizzo e-mail valido.', ePhone: 'Numero di telefono: 9–15 cifre, facoltativamente con «+».',
      eMsg: 'Inserisca un messaggio (min. 10 caratteri).', eCap: 'Il risultato non è corretto.', eConsent: 'Il consenso è necessario per poterLe rispondere.', eFast: 'Il modulo è stato inviato troppo rapidamente. Riprovi tra un momento.',
      nEmail: 'Indirizzo e-mail', nConsent: 'Acconsento a ricevere la newsletter TALQO all’indirizzo indicato.', nSend: 'Iscrivimi', nOk: 'Grazie. L’indirizzo è stato aggiunto alla newsletter.',
      policy: 'Informativa sulla privacy', admin: 'Pannello di amministrazione', top: 'Torna su', sections: 'In questa pagina', contact: 'Contatti', follow: 'Ci trova su', made: 'Realizzazione',
      googleProfile: 'Profilo dell’attività su Google', rights: 'Tutti i diritti riservati.', phone: 'Telefono', call: 'Chiama', write: 'Scrivi', ticker: 'Avvisi', slide: 'Foto',
      cookieTxt: 'Con il Suo consenso attiveremo statistiche anonime delle visite (Google Analytics). Senza consenso non raccogliamo alcun dato statistico.', cookieYes: 'Acconsento', cookieNo: 'Non acconsento',
      emailTodo: '[DA COMPLETARE: indirizzo e-mail della scuola]', linkTodo: '[DA COMPLETARE: link]', noscript: 'Il modulo richiede JavaScript attivo.'
    }
  };

  var DATA = { DOMENA: DOMENA, DEFAULTS: DEFAULTS, UI: UI, STATIC_LANGS: ['pl', 'en', 'it'], LOCALE: { pl: 'pl-PL', en: 'en-GB', it: 'it-IT' } };
  if (typeof module !== 'undefined' && module.exports) module.exports = DATA;
  root.TALQO_DATA = DATA;
})(typeof window !== 'undefined' ? window : globalThis);

/* ============================================================
   TALQO — RENDEROWANIE STRONY Z DANYCH
   Ten sam kod działa przy budowaniu (Node, treść w HTML dla Google)
   i w przeglądarce (odświeżanie po zmianach z panelu, podgląd w panelu).
   ============================================================ */
(function (root) {
  'use strict';
  var D = (typeof module !== 'undefined' && module.exports) ? require('./data.js') : root.TALQO_DATA;
  var R = {};

  /* ---------- narzędzia ---------- */
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function t(o, lang) { if (o == null) return ''; if (typeof o !== 'object') return String(o); return o[lang] || o.pl || ''; }
  function ui(lang) { return D.UI[lang] || D.UI.en; }
  function inl(s) {
    s = esc(s);
    s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/\*([^*]+)\*/g, '<em>$1</em>');
    s = s.replace(/\[(?:DO UZUPEŁNIENIA|TO BE COMPLETED|DA COMPLETARE|LINK DO UZUPEŁNIENIA)[^\]]*\]/g, function (m) { return '<span class="todo">' + m + '</span>'; });
    return s.replace(/\n/g, '<br>');
  }
  function fmt(s) { return String(s || '').split(/\n\s*\n/).filter(function (x) { return x.trim(); }).map(function (p) { return '<p>' + inl(p.trim()) + '</p>'; }).join(''); }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function ymd(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function parseYmd(s) { var p = String(s).split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function fmtDate(s, lang, withYear) {
    if (!s) return '';
    var o = { day: 'numeric', month: 'long' }; if (withYear) o.year = 'numeric';
    try { return parseYmd(s).toLocaleDateString(D.LOCALE[lang] || lang, o); } catch (e) { return s; }
  }
  function f(k) { return ' data-f="' + esc(k) + '"'; }
  function fg(h) { return String(h || '').replace(/^0/, ''); }
  function mins(h) { var p = String(h || '0:0').split(':'); return (+p[0]) * 60 + (+p[1] || 0); }
  function vis(list) { return (list || []).filter(function (x) { return !x.ukryty; }); }
  var ARR = '<svg class="arr" viewBox="0 0 24 12" width="24" height="12" aria-hidden="true" focusable="false"><path d="M0 6h22M17 1l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.3"/></svg>';
  var ICONS = {
    laptop: '<path d="M5 6h22v14H5zM2 24h28" />',
    osoby: '<circle cx="11" cy="11" r="4"/><circle cx="22" cy="11" r="4"/><path d="M3 26c0-5 3.5-8 8-8s8 3 8 8M19 18.5c1-.3 2-.5 3-.5 4.500 0 8 3 8 8"/>',
    warstwy: '<path d="M16 4l13 6-13 6L3 10zM3 16l13 6 13-6M3 22l13 6 13-6"/>',
    rytm: '<path d="M10 22a6 6 0 110-12c5 0 7 12 12 12a6 6 0 100-12c-5 0-7 12-12 12z"/>',
    ksiazka: '<path d="M16 8c-3-2-7-3-12-3v19c5 0 9 1 12 3 3-2 7-3 12-3V5c-5 0-9 1-12 3zM16 8v19"/>',
    dyplom: '<circle cx="16" cy="12" r="7"/><path d="M11 17l-2 11 7-4 7 4-2-11"/>'
  };
  R.ICONS = ICONS;
  function icon(n) { return '<svg class="ico" viewBox="0 0 32 32" width="32" height="32" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round">' + (ICONS[n] || ICONS.ksiazka) + '</svg>'; }

  /* Zdjęcie albo neutralne tło zastępcze z opisem [ZDJĘCIE: …] */
  function img(src, alt, w, h, lang, eager) {
    var a = esc(alt || '');
    if (!src) return '<div class="ph" role="img" aria-label="' + a + '" style="aspect-ratio:' + w + '/' + h + '"><span class="ph-t">[' + ui(lang).photo + ': ' + a + ']</span></div>';
    return '<div class="ph" style="aspect-ratio:' + w + '/' + h + '"><img src="' + esc(src) + '" alt="' + a + '" width="' + w + '" height="' + h + '" ' + (eager ? 'fetchpriority="high"' : 'loading="lazy"') + ' decoding="async" onerror="this.remove()"></div>';
  }

  /* ---------- treści czasowe ---------- */
  R.status = function (it, now) {
    if (it.wstrzymana) return 'wstrzymana';
    var d = ymd(now || new Date());
    if (it.od && d < it.od) return 'zaplanowana';
    if (it['do'] && d > it['do']) return 'zakonczona';
    return 'aktywna';
  };
  R.aktywne = function (list, ctx) {
    var now = ctx && ctx.now;
    return (list || []).filter(function (x) { return (ctx && ctx.forceId === x.id) || (!x.ukryty && R.status(x, now) === 'aktywna'); });
  };
  R.countdown = function (it, lang, now) {
    var u = ui(lang); if (!it['do']) return { txt: u.noEnd, pct: 0 };
    now = now || new Date();
    var end = parseYmd(it['do']); end.setHours(23, 59, 59);
    var ms = Math.max(0, end - now), dni = Math.floor(ms / 864e5), h = Math.floor((ms % 864e5) / 36e5);
    var start = it.od ? parseYmd(it.od) : new Date(end - 14 * 864e5);
    var pct = Math.min(100, Math.max(0, Math.round((now - start) / Math.max(1, end - start) * 100)));
    return { txt: u.left + ' ' + dni + ' ' + (dni === 1 ? u.day : u.days) + ' ' + h + ' ' + u.hrs, pct: pct };
  };

  /* ---------- godziny ---------- */
  function dzienInfo(st, d) {
    var key = ymd(d), sp = null;
    (st.dniSpecjalne || []).forEach(function (x) { if (x.data === key && !x.ukryty) sp = x; });
    if (sp) return { otw: !sp.nieczynne, od: sp.od, 'do': sp['do'], sp: sp };
    var g = st.godziny.dni[(d.getDay() + 6) % 7];
    return { otw: g.otw, od: g.od, 'do': g['do'] };
  }
  R.statusGodzin = function (st, lang, now) {
    now = now || new Date(); var u = ui(lang), hm = pad(now.getHours()) + ':' + pad(now.getMinutes()), di = dzienInfo(st, now);
    if (di.otw && di.od <= hm && hm < di['do']) return { k: mins(di['do']) - mins(hm) <= 60 ? 'warn' : 'ok', otw: true, tekst: u.stOpen.replace('{g}', fg(di['do'])) };
    for (var i = 0; i < 14; i++) {
      var d = new Date(now); d.setDate(d.getDate() + i); var x = dzienInfo(st, d);
      if (x.otw && (i > 0 || hm < x.od)) {
        var k = i === 0 ? u.today : i === 1 ? u.tomorrow : u.wDni[(d.getDay() + 6) % 7];
        return { k: 'off', otw: false, tekst: u.stClosed.replace('{k}', k).replace('{g}', fg(x.od)), kiedy: k, od: fg(x.od) };
      }
    }
    return { k: 'off', otw: false, tekst: u.stClosedLong };
  };
  function statusHtml(st, lang, ctx) {
    if (ctx.stat) return '<span class="stat" data-status></span>';
    var s = R.statusGodzin(st, lang, ctx.now);
    return '<span class="stat stat-' + s.k + '" data-status><span class="dot" aria-hidden="true"></span>' + esc(s.tekst) + '</span>';
  }

  /* ---------- adresy ---------- */
  R.langUrl = function (kod, base, isFile) {
    var u = base || './';
    if (kod !== 'pl') { if (D.STATIC_LANGS.indexOf(kod) >= 0) u += kod + '/'; else return u + (isFile ? 'index.html' : '') + '?lang=' + kod; }
    return u + (isFile ? 'index.html' : '');
  };
  function langPath(kod) { return kod === 'pl' ? '/' : (D.STATIC_LANGS.indexOf(kod) >= 0 ? '/' + kod + '/' : '/?lang=' + kod); }
  function wlaczone(st) { return st.ustawienia.jezyki.filter(function (j) { return j.wl || j.kod === 'pl'; }); }
  R.wlaczone = wlaczone;
  function soc(v, pre) { v = String(v || '').trim(); if (!v) return ''; return /^https?:\/\//.test(v) ? v : pre + v.replace(/^@/, ''); }
  R.links = function (st) {
    var k = st.kontakt;
    return {
      tel: k.telefon ? 'tel:' + k.telefon.replace(/[^\d+]/g, '') : '',
      mail: k.email ? 'mailto:' + k.email : '',
      wa: k.whatsapp ? 'https://wa.me/' + k.whatsapp.replace(/\D/g, '') : '',
      ms: soc(k.messenger, 'https://m.me/'), ig: soc(k.instagram, 'https://www.instagram.com/'), fb: soc(k.facebook, 'https://www.facebook.com/')
    };
  };

  function findSek(st, id) { for (var i = 0; i < st.sekcje.length; i++) if (st.sekcje[i].id === id) return st.sekcje[i]; return { id: id, wid: true, tytul: {}, wstep: {}, etykieta: {} }; }
  R.sekWidoczna = function (st, id, ctx) {
    var s = findSek(st, id); if (!s.wid) return false;
    if (id === 'promocje') return R.aktywne(st.promocje, ctx).length > 0;
    if (id === 'magazyn') return R.aktywne(st.magazyn, ctx).length > 0;
    return true;
  };

  function wrapSek(id, st, lang, ctx, inner, cls) {
    var s = findSek(st, id), pv = ctx.preview, tw = t(s.wstep, lang);
    return '<section ' + (pv ? '' : 'id="' + id + '" aria-labelledby="h-' + id + '" ') + 'class="sek sek-' + id + (cls ? ' ' + cls : '') + '" data-sek="' + id + '"><div class="wrap">' +
      '<header class="sek-head"><h2' + (pv ? '' : ' id="h-' + id + '"') + f('sek.' + id + '.tytul') + '>' + inl(t(s.tytul, lang)) + '</h2>' +
      (tw ? '<p class="sek-lead"' + f('sek.' + id + '.wstep') + '>' + inl(tw) + '</p>' : '') + '</header>' + inner + '</div></section>';
  }

  /* ---------- PIERWSZY EKRAN ---------- */
  var HERO_ART = '<svg class="hero-svg" viewBox="0 0 520 420" aria-hidden="true" focusable="false"><defs><clipPath id="ruina"><path d="M40 420V150l90-70 110-40 130 10 110 60v310z"/></clipPath><linearGradient id="kam" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#E9DFD2"/><stop offset="1" stop-color="#BFB1A0"/></linearGradient></defs><g clip-path="url(#ruina)"><rect x="40" y="30" width="460" height="390" fill="url(#kam)"/><g fill="#4A1F45" opacity=".88">' +
    [0, 1, 2].map(function (r) { var o = ''; for (var c = 0; c < 6; c++) { var x = 62 + c * 74, y = 96 + r * 110; o += '<path d="M' + x + ' ' + (y + 84) + 'V' + (y + 28) + 'a26 26 0 0152 0v56z"/>'; } return o; }).join('') +
    '</g><g stroke="#A89886" stroke-width="3" fill="none"><path d="M40 190h460M40 300h460M40 410h460"/></g></g></svg>';

  R.hero = function (st, lang, ctx) {
    var u = ui(lang), h = st.hero, pv = ctx.preview, sl = vis(st.slajdy);
    if (ctx.forceId) sl = st.slajdy.filter(function (x) { return !x.ukryty || x.id === ctx.forceId; });
    var slides = sl.map(function (s, i) {
      var a = t(s.alt, lang);
      return '<div class="slide' + (i === 0 ? ' on' : '') + '" data-item="' + s.id + '"' + f(s.id + '.src') + '>' +
        (s.src ? '<img src="' + esc(s.src) + '" alt="' + esc(a) + '" width="1040" height="840" ' + (i === 0 ? 'fetchpriority="high"' : 'loading="lazy"') + ' decoding="async" onerror="this.remove()">'
          : HERO_ART + '<span class="ph-t" role="img" aria-label="' + esc(a) + '"' + f(s.id + '.alt') + '>[' + u.photo + ': ' + esc(a) + ']</span>') + '</div>';
    }).join('');
    var dots = sl.length > 1 ? '<div class="dots">' + sl.map(function (s, i) { return '<button type="button" data-slide="' + i + '" aria-label="' + u.slide + ' ' + (i + 1) + '"' + (i === 0 ? ' aria-current="true"' : '') + '></button>'; }).join('') + '</div>' : '';
    var kursy = vis(st.kursy).map(function (k) {
      return '<li><a href="#kursy" data-kurs="' + k.id + '" style="--c:' + esc(k.kolor) + '"><span class="lg" aria-hidden="true">' + esc(k.skrot) + '</span><span>' + esc(t(k.nazwa, lang)) + '</span>' + ARR + '</a></li>';
    }).join('');
    var atuty = vis(st.atuty).map(function (a) {
      return '<li data-item="' + a.id + '">' + icon(a.ikona) + '<p><strong' + f(a.id + '.tytul') + '>' + inl(t(a.tytul, lang)) + '</strong><span' + f(a.id + '.opis') + '>' + inl(t(a.opis, lang)) + '</span></p></li>';
    }).join('');
    return '<section ' + (pv ? '' : 'id="start" aria-labelledby="h-start" ') + 'class="hero" data-sek="start"><div class="wrap hero-grid"><div class="hero-txt">' +
      '<p class="eyebrow"' + f('hero.nadtytul') + '>' + inl(t(h.nadtytul, lang)) + '</p>' +
      '<h1' + (pv ? '' : ' id="h-start"') + f('hero.tytul') + '>' + inl(t(h.tytul, lang)) + '</h1>' +
      '<p class="hero-lead"' + f('hero.wstep') + '>' + inl(t(h.wstep, lang)) + '</p>' +
      '<div class="hero-cta"><a class="btn" href="#oferta">' + u.cta1 + ARR + '</a><a class="btn btn-o" href="#metoda">' + u.cta2 + '</a></div></div>' +
      '<div class="hero-art"><div class="hero-disc" aria-hidden="true"></div><div class="slider" data-slider>' + slides + '</div>' +
      (t(h.odreczne, lang) ? '<p class="hero-hand"' + f('hero.odreczne') + '>' + inl(t(h.odreczne, lang)) + '</p>' : '') + dots + '</div></div>' +
      '<div class="wrap"><div class="langpick"><p>' + u.pick + '</p><ul>' + kursy + '</ul></div><ul class="atuty">' + atuty + '</ul></div></section>';
  };

  /* ---------- SEKCJE ---------- */
  var S = {};

  S.promocje = function (st, lang, ctx) {
    var u = ui(lang), list = R.aktywne(st.promocje, ctx);
    var cards = list.map(function (p) {
      var cd = ctx.stat ? { txt: '', pct: 0 } : R.countdown(p, lang, ctx.now), us = null;
      st.uslugi.forEach(function (x) { if (x.id === p.usluga) us = x; });
      return '<li><article class="promo" data-item="' + p.id + '">' +
        (p.src ? '<div class="promo-img"' + f(p.id + '.src') + '>' + img(p.src, t(p.tytul, lang), 640, 400, lang) + '</div>' : '') +
        '<div class="promo-b">' + (t(p.plakietka, lang) ? '<span class="badge badge-gold"' + f(p.id + '.plakietka') + '>' + esc(t(p.plakietka, lang)) + '</span>' : '') +
        '<h3' + f(p.id + '.tytul') + '>' + inl(t(p.tytul, lang)) + '</h3><div class="txt"' + f(p.id + '.opis') + '>' + fmt(t(p.opis, lang)) + '</div>' +
        (p['do'] ? '<p class="promo-do"' + f(p.id + '.do') + '>' + u.validTo + ' ' + fmtDate(p['do'], lang) + '</p><p class="promo-cd" data-cd="' + p.id + '">' + esc(cd.txt) + '</p><div class="bar" aria-hidden="true"><i data-bar="' + p.id + '" style="width:' + cd.pct + '%"></i></div>' : '') +
        '<a class="btn btn-s" href="#kontakt" data-usluga="' + esc(p.usluga || '') + '">' + u.reserve + (us ? ': ' + esc(t(us.nazwa, lang)) : '') + ARR + '</a></div></article></li>';
    }).join('');
    return wrapSek('promocje', st, lang, ctx, '<ul class="promos">' + cards + '</ul>');
  };

  S.kursy = function (st, lang, ctx) {
    var u = ui(lang), list = vis(st.kursy), idp = ctx.preview ? 'pv-' : '', act = ctx.forceId && list.some(function (k) { return k.id === ctx.forceId; }) ? ctx.forceId : (list[0] || {}).id;
    var tabs = list.map(function (k) {
      return '<button type="button" role="tab" id="' + idp + 'tab-' + k.id + '" aria-controls="' + idp + 'pan-' + k.id + '" aria-selected="' + (k.id === act) + '"' + (k.id === act ? '' : ' tabindex="-1"') + ' data-tab="' + k.id + '" style="--c:' + esc(k.kolor) + '"><span class="lg" aria-hidden="true">' + esc(k.skrot) + '</span>' + esc(t(k.nazwa, lang)) + '</button>';
    }).join('');
    var pans = list.map(function (k) {
      return '<div role="tabpanel" id="' + idp + 'pan-' + k.id + '" aria-labelledby="' + idp + 'tab-' + k.id + '" class="kurs-pan" data-item="' + k.id + '" style="--c:' + esc(k.kolor) + '"' + (k.id === act ? '' : ' hidden') + '>' +
        '<div class="kurs-txt"><h3' + f(k.id + '.nazwa') + '>' + esc(t(k.nazwa, lang)) + ' online</h3><div class="txt"' + f(k.id + '.opis') + '>' + fmt(t(k.opis, lang)) + '</div>' +
        '<a class="btn btn-s" href="#kontakt" data-jezyk="' + k.id + '">' + u.askCourse + ' ' + esc(t(k.nazwa, lang).toLowerCase()) + ARR + '</a></div>' +
        '<div class="kurs-img"' + f(k.id + '.src') + '>' + img(k.src, t(k.alt, lang), 720, 480, lang) + '</div></div>';
    }).join('');
    var gr = vis(st.grupy).map(function (g) {
      return '<details class="acc-i" data-item="' + g.id + '"' + (ctx.forceId === g.id ? ' open' : '') + '><summary' + f(g.id + '.tytul') + '>' + inl(t(g.tytul, lang)) + '</summary><div class="txt"' + f(g.id + '.opis') + '>' + fmt(t(g.opis, lang)) + '</div></details>';
    }).join('');
    return wrapSek('kursy', st, lang, ctx, '<div class="tabs" data-tabs><div class="tablist" role="tablist" aria-label="' + u.pick + '">' + tabs + '</div>' + pans + '</div>' +
      (gr ? '<h3 class="sub-h">' + u.forWhom + '</h3><div class="acc acc-2">' + gr + '</div>' : ''));
  };

  S.oferta = function (st, lang, ctx) {
    var u = ui(lang), promos = R.aktywne(st.promocje, ctx);
    var cards = vis(st.uslugi).map(function (s) {
      var b = '';
      promos.forEach(function (p) { if (p.usluga === s.id) b += '<span class="badge badge-gold">' + esc(t(p.plakietka, lang) || u.promo) + '</span>'; });
      if (s.nowosc) b += '<span class="badge"' + f(s.id + '.nowosc') + '>' + u.nowosc + '</span>';
      if (t(s.plakietka, lang)) b += '<span class="badge badge-o"' + f(s.id + '.plakietka') + '>' + esc(t(s.plakietka, lang)) + '</span>';
      var meta = [t(s.czas, lang), t(s.cena, lang)].filter(Boolean).map(esc).join(' · ');
      return '<li><article class="ucard" data-item="' + s.id + '"><div class="ucard-img"' + f(s.id + '.src') + '>' + img(s.src, t(s.alt, lang), 600, 380, lang) + (b ? '<div class="badges">' + b + '</div>' : '') + '</div>' +
        '<div class="ucard-b"><h3' + f(s.id + '.nazwa') + '>' + esc(t(s.nazwa, lang)) + '</h3><p class="ucard-sub"' + f(s.id + '.podtytul') + '>' + inl(t(s.podtytul, lang)) + '</p>' +
        '<div class="txt"' + f(s.id + '.opis') + '>' + fmt(t(s.opis, lang)) + '</div>' + (meta ? '<p class="ucard-meta"' + f(s.id + '.cena') + '>' + meta + '</p>' : '') +
        '<a class="lnk" href="#kontakt" data-usluga="' + s.id + '"' + f(s.id + '.przycisk') + '>' + (s.przycisk === 'zap' ? u.enquire : u.reserve) + '<span class="vh"> – ' + esc(t(s.nazwa, lang)) + '</span>' + ARR + '</a></div></article></li>';
    }).join('');
    return wrapSek('oferta', st, lang, ctx, '<ul class="ucards">' + cards + '</ul>');
  };

  S.metoda = function (st, lang, ctx) {
    var m = st.metoda;
    var fil = vis(st.filary).map(function (x) { return '<li data-item="' + x.id + '"><h3' + f(x.id + '.tytul') + '>' + inl(t(x.tytul, lang)) + '</h3><p' + f(x.id + '.opis') + '>' + inl(t(x.opis, lang)) + '</p></li>'; }).join('');
    return wrapSek('metoda', st, lang, ctx, '<div class="two"><div><div class="txt txt-l"' + f('metoda.tekst') + '>' + fmt(t(m.tekst, lang)) + '</div><ul class="filary">' + fil + '</ul></div>' +
      '<div class="arch"' + f('metoda.src') + '>' + img(m.src, t(m.alt, lang), 640, 800, lang) + '</div></div>', 'sek-sand');
  };

  S['o-nas'] = function (st, lang, ctx) {
    var u = ui(lang), o = st.onas;
    var wy = vis(st.wyrozniki).map(function (x) { return '<li data-item="' + x.id + '"><h3' + f(x.id + '.tytul') + '>' + inl(t(x.tytul, lang)) + '</h3><p' + f(x.id + '.opis') + '>' + inl(t(x.opis, lang)) + '</p></li>'; }).join('');
    var ce = vis(st.certyfikaty).map(function (x) { return '<li data-item="' + x.id + '">' + icon('dyplom') + '<p><strong' + f(x.id + '.tytul') + '>' + inl(t(x.tytul, lang)) + '</strong><span' + f(x.id + '.opis') + '>' + inl(t(x.opis, lang)) + '</span></p></li>'; }).join('');
    return wrapSek('o-nas', st, lang, ctx, '<div class="two two-rev"><div class="duo-img"><div' + f('onas.src1') + '>' + img(o.src1, t(o.alt1, lang), 560, 700, lang) + '</div><div' + f('onas.src2') + '>' + img(o.src2, t(o.alt2, lang), 400, 400, lang) + '</div></div>' +
      '<div><div class="txt txt-l"' + f('onas.tekst') + '>' + fmt(t(o.tekst, lang)) + '</div></div></div><ul class="wyr">' + wy + '</ul>' +
      (ce ? '<h3 class="sub-h">' + u.certs + '</h3><ul class="certy">' + ce + '</ul>' : ''));
  };

  function cena(o, lang) { var v = o && o[lang]; if (!v) { v = (o && o.pl) || ''; if (lang !== 'pl') v = v.replace(/^od\s+/i, lang === 'it' ? 'da ' : 'from '); } return v; }
  S.cennik = function (st, lang, ctx) {
    var u = ui(lang);
    var pk = vis(st.pakiety).map(function (p) {
      return '<li><article class="pak' + (p.wyrozniony ? ' pak-w' : '') + '" data-item="' + p.id + '"><h4' + f(p.id + '.nazwa') + '>' + inl(t(p.nazwa, lang)) + '</h4><div class="txt"' + f(p.id + '.opis') + '>' + fmt(t(p.opis, lang)) + '</div>' +
        '<p class="pak-c"' + f(p.id + '.cena') + '>' + inl(cena(p.cena, lang)) + '</p><a class="btn btn-s" href="#kontakt" data-usluga="">' + u.askTerm + ARR + '</a></article></li>';
    }).join('');
    var cats = [], by = {};
    vis(st.cennik).forEach(function (c) { var k = t(c.kategoria, lang) || ''; if (!by[k]) { by[k] = []; cats.push(k); } by[k].push(c); });
    var tabs = cats.map(function (k) {
      return '<table class="cen"><caption>' + esc(k) + '</caption><thead><tr><th scope="col">' + u.colName + '</th><th scope="col">' + u.colTime + '</th><th scope="col">' + u.colPrice + '</th></tr></thead><tbody>' +
        by[k].map(function (c) { return '<tr data-item="' + c.id + '"><th scope="row"><span' + f(c.id + '.nazwa') + '>' + inl(t(c.nazwa, lang)) + '</span>' + (t(c.dopisek, lang) ? '<small' + f(c.id + '.dopisek') + '>' + inl(t(c.dopisek, lang)) + '</small>' : '') + '</th><td' + f(c.id + '.czas') + '>' + inl(t(c.czas, lang)) + '</td><td class="cen-c"' + f(c.id + '.cena') + '>' + inl(cena(c.cena, lang)) + '</td></tr>'; }).join('') + '</tbody></table>';
    }).join('');
    return wrapSek('cennik', st, lang, ctx, (pk ? '<h3 class="sub-h">' + u.packages + '</h3><ul class="pakiety">' + pk + '</ul>' : '') +
      (tabs ? '<h3 class="sub-h">' + u.priceList + '</h3><div class="cen-w">' + tabs + '</div>' : '') +
      (t(st.cennikUwaga, lang) ? '<p class="note"' + f('cennikUwaga') + '>' + inl(t(st.cennikUwaga, lang)) + '</p>' : ''));
  };

  S['jak-zaczac'] = function (st, lang, ctx) {
    var kr = vis(st.kroki).map(function (x, i) { return '<li data-item="' + x.id + '"><span class="krok-n" aria-hidden="true">' + (i + 1) + '</span><h3' + f(x.id + '.tytul') + '>' + inl(t(x.tytul, lang)) + '</h3><p' + f(x.id + '.opis') + '>' + inl(t(x.opis, lang)) + '</p></li>'; }).join('');
    return wrapSek('jak-zaczac', st, lang, ctx, '<ol class="kroki">' + kr + '</ol>');
  };

  S.zapisy = function (st, lang, ctx) {
    var u = ui(lang);
    return wrapSek('zapisy', st, lang, ctx, '<div class="txt txt-l"' + f('zapisy.tekst') + '>' + fmt(t(st.zapisy.tekst, lang)) + '</div><a class="btn btn-inv" href="#kontakt" data-usluga="">' + u.askTerm + ARR + '</a>', 'sek-plum');
  };

  function lista(id, key) {
    return function (st, lang, ctx) {
      var li = vis(st[key]).map(function (x) { return '<li data-item="' + x.id + '"><h3' + f(x.id + '.tytul') + '>' + inl(t(x.tytul, lang)) + '</h3>' + (t(x.opis, lang) ? '<p' + f(x.id + '.opis') + '>' + inl(t(x.opis, lang)) + '</p>' : '') + '</li>'; }).join('');
      return wrapSek(id, st, lang, ctx, '<ul class="punkty">' + li + '</ul>', id === 'bezpieczenstwo' ? 'sek-sand' : '');
    };
  }
  S.bezpieczenstwo = lista('bezpieczenstwo', 'bezpieczenstwo');
  S.platnosci = lista('platnosci', 'platnosci');

  S.opinie = function (st, lang, ctx) {
    var u = ui(lang), list = vis(st.opinie), p = st.opiniePodsum || {};
    var cards = list.map(function (o) {
      var n = Math.max(3, Math.min(5, +o.ocena || 5));
      return '<li><figure class="opinia" data-item="' + o.id + '"><p class="gw" role="img" aria-label="' + u.rating + ' ' + n + ' ' + u.of5 + '"' + f(o.id + '.ocena') + '>' + '★★★★★'.slice(0, n) + '<span>' + '★★★★★'.slice(n) + '</span></p><blockquote' + f(o.id + '.tresc') + '>' + fmt(t(o.tresc, lang)) + '</blockquote><figcaption><strong' + f(o.id + '.autor') + '>' + esc(o.autor) + '</strong>' + (t(o.usluga, lang) ? '<span' + f(o.id + '.usluga') + '>' + esc(t(o.usluga, lang)) + '</span>' : '') + '</figcaption></figure></li>';
    }).join('');
    var sum = (p.srednia && p.liczba) ? '<p class="op-sum"' + f('opiniePodsum.srednia') + '><strong>' + esc(p.srednia) + '</strong> / 5 · ' + esc(p.liczba) + ' ' + u.reviewsN + '</p>' : '';
    var link = '<p class="op-link"' + f('opiniePodsum.link') + '>' + (p.link ? '<a class="btn btn-o" href="' + esc(p.link) + '" target="_blank" rel="noopener">' + u.googleReviews + ARR + '</a>' : u.googleReviews + ': <span class="todo">' + u.linkTodo + '</span>') + '</p>';
    return wrapSek('opinie', st, lang, ctx, sum + (cards ? '<ul class="opinie car" tabindex="0">' + cards + '</ul>' : '<p class="pusto">' + u.noReviews + '</p>') + link);
  };

  S.faq = function (st, lang, ctx) {
    var q = vis(st.faq).map(function (x) { return '<details class="acc-i" data-item="' + x.id + '"' + (ctx.forceId === x.id ? ' open' : '') + '><summary' + f(x.id + '.pytanie') + '>' + inl(t(x.pytanie, lang)) + '</summary><div class="txt"' + f(x.id + '.odpowiedz') + '>' + fmt(t(x.odpowiedz, lang)) + '</div></details>'; }).join('');
    return wrapSek('faq', st, lang, ctx, '<div class="acc">' + q + '</div>', 'sek-sand');
  };

  S.magazyn = function (st, lang, ctx) {
    var u = ui(lang), list = R.aktywne(st.magazyn, ctx);
    var cards = list.map(function (a) {
      var tr = t(a.tresc, lang), first = tr.split(/\n\s*\n/)[0] || '';
      return '<li><article class="art" data-item="' + a.id + '"><div' + f(a.id + '.src') + '>' + img(a.src, t(a.tytul, lang), 520, 340, lang) + '</div><div class="art-b">' +
        (t(a.kategoria, lang) ? '<p class="art-k"' + f(a.id + '.kategoria') + '>' + esc(t(a.kategoria, lang)) + '</p>' : '') +
        '<h3' + f(a.id + '.tytul') + '>' + inl(t(a.tytul, lang)) + '</h3>' + (a.data ? '<p class="art-d"><time datetime="' + esc(a.data) + '"' + f(a.id + '.data') + '>' + fmtDate(a.data, lang, true) + '</time></p>' : '') +
        '<p class="art-x"' + f(a.id + '.tresc') + '>' + inl(first) + '</p><button type="button" class="lnk" data-art="' + a.id + '">' + u.read + '<span class="vh"> – ' + esc(t(a.tytul, lang)) + '</span>' + ARR + '</button></div></article></li>';
    }).join('');
    return wrapSek('magazyn', st, lang, ctx, '<div class="car-nav"><button type="button" data-car="-1" aria-label="' + u.prev + '">' + ARR + '</button><button type="button" data-car="1" aria-label="' + u.next + '">' + ARR + '</button></div><ul class="arts car" tabindex="0">' + cards + '</ul>', 'sek-plum');
  };

  S.kontakt = function (st, lang, ctx) {
    var u = ui(lang), k = st.kontakt, ln = R.links(st), idp = ctx.preview ? 'pv-' : '', now = ctx.now || new Date();
    function ch(lab, href, txt, key, ext) { return '<li' + f('kontakt.' + key) + '><span class="ch-l">' + lab + '</span>' + (href ? '<a href="' + esc(href) + '"' + (ext ? ' target="_blank" rel="noopener"' : '') + '>' + esc(txt) + '</a>' : '<span class="todo">' + esc(txt) + '</span>') + '</li>'; }
    var chans = ch('E-mail', ln.mail, k.email || u.emailTodo, 'email') +
      (k.telefon ? ch(u.phone, ln.tel, k.telefon, 'telefon') : '') + (k.whatsapp ? ch('WhatsApp', ln.wa, k.whatsapp, 'whatsapp', 1) : '') +
      ch('Messenger', ln.ms, ln.ms ? ln.ms.replace(/^https?:\/\//, '') : u.linkTodo, 'messenger', 1) +
      ch('Instagram', ln.ig, ln.ig ? ln.ig.replace(/^https?:\/\/(www\.)?/, '') : u.linkTodo, 'instagram', 1) +
      ch('Facebook', ln.fb, ln.fb ? ln.fb.replace(/^https?:\/\/(www\.)?/, '') : u.linkTodo, 'facebook', 1);
    var dzis = (now.getDay() + 6) % 7;
    var rows = st.godziny.dni.map(function (g, i) { return '<tr' + (i === dzis && !ctx.stat ? ' class="dzis"' : '') + ' data-dzien="' + i + '"><th scope="row">' + u.dni[i] + '</th><td' + f('godziny.dni.' + i) + '>' + (g.otw ? fg(g.od) + '–' + fg(g['do']) : u.closed) + '</td></tr>'; }).join('');
    var lim = ymd(new Date(now.getTime() + 60 * 864e5)), td = ymd(now);
    var sp = vis(st.dniSpecjalne).filter(function (x) { return x.data >= td && x.data <= lim; }).sort(function (a, b) { return a.data < b.data ? -1 : 1; })
      .map(function (x) { return '<li data-item="' + x.id + '"><strong>' + fmtDate(x.data, lang) + '</strong> – ' + (x.nieczynne ? u.closed : fg(x.od) + '–' + fg(x['do'])) + (t(x.opis, lang) ? ' (' + esc(t(x.opis, lang)) + ')' : '') + '</li>'; }).join('');
    var optL = vis(st.kursy).map(function (c) { return '<option value="' + c.id + '">' + esc(t(c.nazwa, lang)) + '</option>'; }).join('');
    var optF = vis(st.uslugi).map(function (c) { return '<option value="' + c.id + '">' + esc(t(c.nazwa, lang)) + ' – ' + esc(t(c.podtytul, lang).split(' · ')[0]) + '</option>'; }).join('');
    function fld(n, lab, type, extra) { var id = idp + 'f-' + n; return '<div class="fld"><label for="' + id + '">' + lab + '</label>' + (type === 'area' ? '<textarea id="' + id + '" name="' + n + '" rows="4" ' + (extra || '') + '></textarea>' : '<input id="' + id + '" name="' + n + '" type="' + type + '" ' + (extra || '') + '>') + '<p class="err" id="' + id + '-e" hidden></p></div>'; }
    var form = '<form class="form" ' + (ctx.preview ? '' : 'id="f-kontakt" ') + 'novalidate data-form="kontakt"><h3>' + u.fTitle + '</h3>' +
      '<fieldset class="tryb"><legend class="vh">' + u.fTitle + '</legend><label><input type="radio" name="tryb" value="termin" checked> ' + u.fMode1 + '</label><label><input type="radio" name="tryb" value="pytanie"> ' + u.fMode2 + '</label></fieldset>' +
      '<div class="f2">' + fld('imie', u.fName, 'text', 'autocomplete="name" required') + fld('email', u.fEmail, 'email', 'autocomplete="email" required inputmode="email"') + '</div>' +
      '<div class="f2">' + fld('telefon', u.fPhone, 'tel', 'autocomplete="tel" inputmode="tel"') +
      '<div class="fld"><label for="' + idp + 'f-jezyk">' + u.fLang + '</label><select id="' + idp + 'f-jezyk" name="jezyk"><option value="">' + u.fAny + '</option>' + optL + '</select></div></div>' +
      '<div class="f2" data-only="termin"><div class="fld"><label for="' + idp + 'f-forma">' + u.fForm + '</label><select id="' + idp + 'f-forma" name="forma"><option value="">' + u.fAny + '</option>' + optF + '</select></div>' + fld('termin', u.fWhen, 'text', '') + '</div>' +
      fld('wiadomosc', u.fMsg, 'area', '') +
      '<div class="hp" aria-hidden="true"><label>Website<input type="text" name="website" tabindex="-1" autocomplete="off"></label></div>' +
      '<div class="fld fld-cap"><label for="' + idp + 'f-cap" data-cap>' + u.fCap.replace('{a}', '…').replace('{b}', '…') + '</label><input id="' + idp + 'f-cap" name="cap" type="text" inputmode="numeric" autocomplete="off" required><p class="err" id="' + idp + 'f-cap-e" hidden></p></div>' +
      '<div class="fld fld-chk"><label><input type="checkbox" name="zgoda" id="' + idp + 'f-zgoda" required> <span>' + u.fConsent.replace('{p}', '<button type="button" class="aslink" data-polityka>' + u.fPolicy + '</button>') + '</span></label><p class="err" id="' + idp + 'f-zgoda-e" hidden></p></div>' +
      '<button type="submit" class="btn">' + u.fSend + ARR + '</button><p class="form-msg" role="status" aria-live="polite"></p><noscript><p class="note">' + u.noscript + '</p></noscript></form>';
    var nl = st.newsletter;
    var news = '<form class="news" ' + (ctx.preview ? '' : 'id="f-news" ') + 'novalidate data-form="news"><div><h3' + f('newsletter.tytul') + '>' + inl(t(nl.tytul, lang)) + '</h3><p' + f('newsletter.opis') + '>' + inl(t(nl.opis, lang)) + '</p></div><div class="news-f"><div class="fld"><label for="' + idp + 'n-email">' + u.nEmail + '</label><input id="' + idp + 'n-email" name="email" type="email" autocomplete="email" required><p class="err" id="' + idp + 'n-email-e" hidden></p></div>' +
      '<div class="hp" aria-hidden="true"><label>Website<input type="text" name="website" tabindex="-1" autocomplete="off"></label></div>' +
      '<div class="fld fld-chk"><label><input type="checkbox" name="zgoda" id="' + idp + 'n-zgoda" required> <span>' + u.nConsent + '</span></label><p class="err" id="' + idp + 'n-zgoda-e" hidden></p></div><button type="submit" class="btn btn-inv">' + u.nSend + ARR + '</button><p class="form-msg" role="status" aria-live="polite"></p></div></form>';
    return wrapSek('kontakt', st, lang, ctx, '<div class="kon"><div class="kon-l"><h3>' + u.channels + '</h3><ul class="chans">' + chans + '</ul>' +
      '<h3>' + u.hours + '</h3><p class="stat-w">' + statusHtml(st, lang, ctx) + '</p><table class="godz"><tbody>' + rows + '</tbody></table>' +
      (t(st.godziny.uwaga, lang) ? '<p class="note"' + f('godziny.uwaga') + '>' + inl(t(st.godziny.uwaga, lang)) + '</p>' : '') +
      (sp ? '<h4>' + u.changes + '</h4><ul class="zmiany">' + sp + '</ul>' : '') + '</div><div class="kon-r">' + form + '</div></div>' + news);
  };
  R.S = S;

  /* ---------- NAGŁÓWEK / PASEK / STOPKA ---------- */
  R.tickerItems = function (st, ctx) {
    var o = [];
    R.aktywne(st.promocje, ctx).forEach(function (p) { if (p.pasek && findSek(st, 'promocje').wid) o.push({ t: p.tytul, b: p.plakietka, h: '#promocje' }); });
    R.aktywne(st.magazyn, ctx).forEach(function (p) { if (p.pasek && findSek(st, 'magazyn').wid) o.push({ t: p.tytul, h: '#magazyn' }); });
    return o;
  };
  R.topbar = function (st, lang, ctx) {
    var it = R.tickerItems(st, ctx), u0 = ui(lang), wl = wlaczone(st);
    var langs = wl.length > 1 ? '<ul class="langs" aria-label="' + u0.langs + '">' + wl.map(function (j) {
      return '<li><a href="' + R.langUrl(j.kod, ctx.base, ctx.isFile) + '" hreflang="' + j.kod + '" lang="' + j.kod + '"' + (j.kod === lang ? ' aria-current="true"' : '') + ' title="' + esc(j.nazwa) + '" data-lang="' + j.kod + '">' + j.kod.toUpperCase() + '</a></li>';
    }).join('') + '</ul>' : '';
    var util = '<div class="util"><div class="wrap">' + statusHtml(st, lang, ctx) + langs + '</div></div>';
    if (!it.length) return util;
    return util + '<div class="ticker" role="region" aria-label="' + ui(lang).ticker + '"><div class="wrap"><ul>' + it.map(function (x, i) {
      return '<li' + (i === 0 ? ' class="on"' : '') + '><a href="' + x.h + '">' + (t(x.b, lang) ? '<strong>' + esc(t(x.b, lang)) + '</strong> ' : '') + inl(t(x.t, lang)) + '</a></li>';
    }).join('') + '</ul>' + (it.length > 1 ? '<span class="tick-n" data-tick aria-hidden="true">1/' + it.length + '</span>' : '') + '</div></div>';
  };
  R.header = function (st, lang, ctx) {
    var u = ui(lang);
    var nav = st.sekcje.filter(function (s) { return s.menu && R.sekWidoczna(st, s.id, ctx); }).map(function (s) { return '<li><a href="#' + s.id + '"' + f('sek.' + s.id + '.etykieta') + '>' + esc(t(s.etykieta, lang)) + '</a></li>'; }).join('');
    return '<div class="wrap hdr"><a class="brand" href="#start" aria-label="' + esc(st.firma.nazwa + ' – ' + t(st.firma.podpis, lang)) + '"><span class="brand-n">' + esc(st.firma.nazwa) + '</span><span class="brand-s"' + f('firma.podpis') + '>' + esc(t(st.firma.podpis, lang)) + '</span></a>' +
      '<button type="button" class="burger" data-menu-toggle aria-expanded="false" aria-controls="' + (ctx.preview ? 'pv-' : '') + 'nav"><span aria-hidden="true"></span><span class="vh">' + u.menu + '</span></button>' +
      '<nav id="' + (ctx.preview ? 'pv-' : '') + 'nav" class="nav" aria-label="' + u.navMain + '"><ul class="nav-l">' + nav + '</ul><div class="nav-x"><a class="btn btn-s" href="#kontakt" data-usluga="">' + u.enrol + ARR + '</a></div></nav></div>';
  };
  R.footer = function (st, lang, ctx) {
    var u = ui(lang), k = st.kontakt, ln = R.links(st), y = (ctx.now || new Date()).getFullYear();
    var nav = st.sekcje.filter(function (s) { return R.sekWidoczna(st, s.id, ctx); }).map(function (s) { return '<li><a href="#' + s.id + '">' + esc(t(s.etykieta, lang)) + '</a></li>'; }).join('');
    var socL = (ln.fb ? '<li><a href="' + esc(ln.fb) + '" target="_blank" rel="noopener">Facebook</a></li>' : '<li>Facebook: <span class="todo">' + u.linkTodo + '</span></li>') +
      (ln.ig ? '<li><a href="' + esc(ln.ig) + '" target="_blank" rel="noopener">Instagram</a></li>' : '<li>Instagram: <span class="todo">' + u.linkTodo + '</span></li>') +
      (ln.ms ? '<li><a href="' + esc(ln.ms) + '" target="_blank" rel="noopener">Messenger</a></li>' : '') +
      '<li' + f('kontakt.googleProfil') + '>' + (k.googleProfil ? '<a href="' + esc(k.googleProfil) + '" target="_blank" rel="noopener">' + u.googleProfile + '</a>' : u.googleProfile + ': <span class="todo">' + u.linkTodo + '</span>') + '</li>';
    return '<div class="wrap"><div class="ft"><div class="ft-b"><p class="brand-n">' + esc(st.firma.nazwa) + '</p><p>' + esc(t(st.firma.podpis, lang)) + '</p>' +
      (t(st.hero.stopkaHaslo, lang) ? '<p class="ft-h"' + f('hero.stopkaHaslo') + '>' + inl(t(st.hero.stopkaHaslo, lang)) + '</p>' : '') + '</div>' +
      '<nav aria-label="' + u.sections + '"><p class="ft-t">' + u.sections + '</p><ul class="ft-n">' + nav + '</ul></nav>' +
      '<div><p class="ft-t">' + u.contact + '</p><ul><li' + f('kontakt.email') + '>' + (k.email ? '<a href="' + esc(ln.mail) + '">' + esc(k.email) + '</a>' : '<span class="todo">' + u.emailTodo + '</span>') + '</li>' + (k.telefon ? '<li><a href="' + esc(ln.tel) + '">' + esc(k.telefon) + '</a></li>' : '') + '<li>' + statusHtml(st, lang, ctx) + '</li></ul></div>' +
      '<div><p class="ft-t">' + u.follow + '</p><ul>' + socL + '</ul></div></div>' +
      '<div class="ft-e"><p>© ' + y + ' ' + esc(st.firma.nazwa + ' ' + t(st.firma.podpis, lang)) + '. ' + u.rights + '</p><p><button type="button" class="aslink" data-polityka>' + u.policy + '</button> · <button type="button" class="aslink" data-panel>' + u.admin + '</button> · ' + u.made + ': <a href="https://stronyaiwroclaw.pl" target="_blank" rel="noopener">Strony AI Wrocław</a></p></div></div>';
  };

  R.fab = function (st, lang, ctx) {
    var u = ui(lang), ln = R.links(st);
    return '<button type="button" class="fab fab-lock" data-panel aria-label="' + u.admin + '" title="' + u.admin + '"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg></button>' +
      '<a class="fab fab-top" href="#start" data-top hidden aria-label="' + u.top + '">↑</a>' +
      '<div class="mbar"><a href="#kontakt" data-usluga="">' + u.askTerm + '</a>' + (ln.tel ? '<a href="' + esc(ln.tel) + '">' + u.call + '</a>' : '<a href="' + esc(ln.mail || '#kontakt') + '">' + u.write + '</a>') + '</div>';
  };

  R.main = function (st, lang, ctx) {
    var o = R.hero(st, lang, ctx);
    st.sekcje.forEach(function (s) { if (S[s.id] && R.sekWidoczna(st, s.id, ctx)) o += S[s.id](st, lang, ctx); });
    return o;
  };
  /* Pojedyncza sekcja — dla podglądu w panelu */
  R.sectionHtml = function (id, st, lang, ctx) {
    ctx = ctx || {}; ctx.preview = true;
    if (id === 'start') return R.hero(st, lang, ctx);
    if (id === 'naglowek') return '<div class="tq-top">' + R.topbar(st, lang, ctx) + '</div><div class="site-h">' + R.header(st, lang, ctx) + '</div>';
    if (id === 'stopka') return '<div class="site-f">' + R.footer(st, lang, ctx) + '</div>';
    return S[id] ? S[id](st, lang, ctx) : '';
  };

  /* ---------- <head>: title, opis, hreflang, Open Graph, JSON-LD ---------- */
  R.head = function (st, lang) {
    var dom = String(st.ustawienia.domena || '').replace(/\/$/, ''), wl = wlaczone(st), ln = R.links(st), k = st.kontakt;
    var nazwa = st.firma.nazwa + ' ' + t(st.firma.podpis, 'pl');
    var same = [ln.fb, ln.ig].filter(Boolean); if (k.googleProfil) same.push(k.googleProfil);
    var org = { '@context': 'https://schema.org', '@type': 'EducationalOrganization', '@id': dom + '/#szkola', name: nazwa, url: dom + langPath(lang), description: t(st.seo.opis, lang),
      image: dom + '/og-image.png', logo: dom + '/icon-512.png', areaServed: 'Online', availableLanguage: wl.map(function (j) { return j.kod; }),
      knowsLanguage: ['en', 'de', 'it'] };
    if (k.email) org.email = k.email; if (k.telefon) org.telephone = k.telefon; if (same.length) org.sameAs = same;
    if (st.godziny.potwierdzone) {
      var en = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      org.openingHoursSpecification = st.godziny.dni.map(function (g, i) { return g.otw ? { '@type': 'OpeningHoursSpecification', dayOfWeek: en[i], opens: g.od, closes: g['do'] } : null; }).filter(Boolean);
    }
    if (findSek(st, 'oferta').wid) org.hasOfferCatalog = { '@type': 'OfferCatalog', name: t(findSek(st, 'oferta').tytul, lang), itemListElement: vis(st.uslugi).map(function (s) { return { '@type': 'Offer', itemOffered: { '@type': 'Service', name: t(s.nazwa, lang) + ' – ' + t(s.podtytul, lang), description: t(s.opis, lang) } }; }) };
    var ld = [org, { '@context': 'https://schema.org', '@type': 'WebSite', '@id': dom + '/#strona', name: nazwa, url: dom + '/', inLanguage: wl.map(function (j) { return j.kod; }), publisher: { '@id': dom + '/#szkola' } }];
    if (findSek(st, 'faq').wid && vis(st.faq).length) ld.push({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: vis(st.faq).map(function (q) { return { '@type': 'Question', name: t(q.pytanie, lang), acceptedAnswer: { '@type': 'Answer', text: t(q.odpowiedz, lang) } }; }) });
    return { title: t(st.seo.title, lang), desc: t(st.seo.opis, lang), canonical: dom + langPath(lang), dom: dom, name: nazwa,
      hreflang: wl.length > 1 ? wl.map(function (j) { return { l: j.kod, h: dom + langPath(j.kod) }; }).concat([{ l: 'x-default', h: dom + '/' }]) : [],
      locale: (D.LOCALE[lang] || 'pl-PL').replace('-', '_'), ld: ld };
  };
  R.headHtml = function (st, lang) {
    var h = R.head(st, lang), o = '<title>' + esc(h.title) + '</title>\n<meta name="description" content="' + esc(h.desc) + '">\n<link rel="canonical" href="' + esc(h.canonical) + '">\n';
    h.hreflang.forEach(function (x) { o += '<link rel="alternate" hreflang="' + x.l + '" href="' + esc(x.h) + '">\n'; });
    o += '<meta property="og:type" content="website">\n<meta property="og:site_name" content="' + esc(h.name) + '">\n<meta property="og:title" content="' + esc(h.title) + '">\n<meta property="og:description" content="' + esc(h.desc) + '">\n<meta property="og:url" content="' + esc(h.canonical) + '">\n<meta property="og:image" content="' + esc(h.dom) + '/og-image.png">\n<meta property="og:image:width" content="1200">\n<meta property="og:image:height" content="630">\n<meta property="og:locale" content="' + h.locale + '">\n<meta name="twitter:card" content="summary_large_image">\n<meta name="twitter:title" content="' + esc(h.title) + '">\n<meta name="twitter:description" content="' + esc(h.desc) + '">\n<meta name="twitter:image" content="' + esc(h.dom) + '/og-image.png">\n';
    o += '<script type="application/ld+json" id="ld">' + JSON.stringify(h.ld).replace(/</g, '\\u003c') + '</' + 'script>';
    return o;
  };

  R.esc = esc; R.t = t; R.ui = ui; R.inl = inl; R.fmt = fmt; R.ymd = ymd; R.parseYmd = parseYmd; R.fmtDate = fmtDate; R.findSek = findSek; R.vis = vis; R.fg = fg; R.dzienInfo = dzienInfo; R.ARR = ARR;
  if (typeof module !== 'undefined' && module.exports) module.exports = R;
  root.TALQO_RENDER = R;
})(typeof window !== 'undefined' ? window : globalThis);

/* ============================================================
   TALQO — DZIAŁANIE STRONY (wczytanie treści, menu, formularze, elementy dynamiczne)
   ============================================================ */
(function () {
  'use strict';
  var D = window.TALQO_DATA, R = window.TALQO_RENDER, doc = document, html = doc.documentElement;
  var $ = function (s, r) { return (r || doc).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || doc).querySelectorAll(s)); };
  function clone(o) { return JSON.parse(JSON.stringify(o)); }
  var A = window.TALQO = { clone: clone, $: $, $$: $$ };
  A.base = html.getAttribute('data-base') || './';
  A.isFile = location.protocol === 'file:';
  A.lang = new URLSearchParams(location.search).get('lang') || html.lang || 'pl';
  A.state = clone(D.DEFAULTS); A.mode = 'start'; A.logged = false;
  var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  function u() { return R.ui(A.lang); }

  /* ---------- scalanie zapisanych treści z danymi początkowymi ---------- */
  A.merge = function (def, sav) {
    if (Array.isArray(def)) return Array.isArray(sav) ? sav : def;
    if (def && typeof def === 'object') {
      var o = {}; if (!sav || typeof sav !== 'object' || Array.isArray(sav)) sav = {};
      Object.keys(def).forEach(function (k) { o[k] = A.merge(def[k], sav[k]); });
      Object.keys(sav).forEach(function (k) { if (!(k in def)) o[k] = sav[k]; });
      return o;
    }
    return sav === undefined || sav === null ? def : sav;
  };
  /* migracje: nowe sekcje i języki dodane w kodzie nie znikają po wczytaniu starszego zapisu */
  A.migrate = function (st) {
    D.DEFAULTS.sekcje.forEach(function (d) { if (!st.sekcje.some(function (s) { return s.id === d.id; })) st.sekcje.push(clone(d)); });
    st.sekcje = st.sekcje.filter(function (s) { return R.S[s.id]; }).map(function (s) { var d = R.findSek(D.DEFAULTS, s.id); return A.merge(d, s); });
    D.DEFAULTS.ustawienia.jezyki.forEach(function (d) { if (!st.ustawienia.jezyki.some(function (j) { return j.kod === d.kod; })) st.ustawienia.jezyki.push(clone(d)); });
    if (!st.godziny.dni || st.godziny.dni.length !== 7) st.godziny.dni = clone(D.DEFAULTS.godziny.dni);
    return st;
  };

  /* ---------- pamięć przeglądarki (tryb demonstracyjny) ---------- */
  var idb = A.idb = {
    db: null,
    open: function () {
      if (idb.db) return Promise.resolve(idb.db);
      return new Promise(function (res, rej) {
        try {
          var rq = indexedDB.open('talqo-cms', 1);
          rq.onupgradeneeded = function () { rq.result.createObjectStore('kv'); };
          rq.onsuccess = function () { idb.db = rq.result; res(idb.db); };
          rq.onerror = function () { rej(rq.error); };
        } catch (e) { rej(e); }
      });
    },
    get: function (k) {
      return idb.open().then(function (db) { return new Promise(function (res) { var rq = db.transaction('kv').objectStore('kv').get(k); rq.onsuccess = function () { res(rq.result); }; rq.onerror = function () { res(undefined); }; }); })
        .catch(function () { try { return JSON.parse(localStorage.getItem('talqo-' + k) || 'null') || undefined; } catch (e) { return undefined; } });
    },
    set: function (k, v) {
      return idb.open().then(function (db) { return new Promise(function (res, rej) { var tx = db.transaction('kv', 'readwrite'); tx.objectStore('kv').put(v, k); tx.oncomplete = function () { res(); }; tx.onerror = function () { rej(tx.error); }; }); })
        .catch(function () { try { localStorage.setItem('talqo-' + k, JSON.stringify(v)); } catch (e) { } });
    }
  };

  /* ---------- API serwera ---------- */
  A.api = function (path, opt) {
    opt = opt || {}; var h = opt.headers || {}; h['X-TALQO-Panel'] = '1';
    if (opt.json !== undefined) { h['Content-Type'] = 'application/json'; opt.body = JSON.stringify(opt.json); }
    return fetch('/api/' + path, { method: opt.method || 'GET', headers: h, body: opt.body, credentials: 'same-origin' })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, status: r.status, data: j }; }); });
  };
  function load() {
    function demo() { A.mode = 'demo'; return idb.get('tresci').then(function (s) { if (s) A.state = A.migrate(A.merge(D.DEFAULTS, s)); }); }
    if (A.isFile) return demo();
    var ctl = window.AbortController ? new AbortController() : null, to = setTimeout(function () { if (ctl) ctl.abort(); }, 6000);
    return fetch('/api/tresci', { signal: ctl ? ctl.signal : undefined, headers: { Accept: 'application/json' } }).then(function (r) {
      clearTimeout(to);
      if (!r.ok || (r.headers.get('content-type') || '').indexOf('json') < 0) { try { r.body.cancel(); } catch (e) { } throw new Error('brak API'); }
      return r.json();
    }).then(function (j) {
      A.mode = 'server'; if (j.tresci) A.state = A.migrate(A.merge(D.DEFAULTS, j.tresci));
      return A.api('sesja').then(function (r) { A.logged = !!(r.data && r.data.zalogowany); }).catch(function () { });
    }).catch(demo);
  }
  A.save = function () {
    if (A.onSave) A.onSave('saving');
    var p = A.mode === 'server'
      ? A.api('tresci', { method: 'PUT', json: { tresci: A.state } }).then(function (r) { if (r.status === 401) { A.logged = false; throw new Error('Sesja wygasła. Proszę zalogować się ponownie.'); } if (!r.ok) throw new Error(r.data.blad || 'Nie udało się zapisać zmian.'); })
      : idb.set('tresci', A.state);
    return p.then(function () { if (A.onSave) A.onSave('saved'); return true; }, function (e) { if (A.onSave) A.onSave('error', e); return false; });
  };
  A.uploadImage = function (blob) {
    if (A.mode === 'server') return fetch('/api/zdjecia', { method: 'POST', headers: { 'X-TALQO-Panel': '1', 'Content-Type': 'image/jpeg' }, body: blob, credentials: 'same-origin' })
      .then(function (r) { return r.json().then(function (j) { if (!r.ok) throw new Error(j.blad || 'Nie udało się wgrać zdjęcia.'); return j.url; }); });
    return new Promise(function (res, rej) { var fr = new FileReader(); fr.onload = function () { res(fr.result); }; fr.onerror = rej; fr.readAsDataURL(blob); });
  };

  /* ---------- renderowanie ---------- */
  function ctx() { return { base: A.base, isFile: A.isFile, now: new Date() }; }
  A.render = function () {
    var c = ctx(), keep = { tab: ($('#tresc [role=tab][aria-selected=true]') || {}).dataset };
    $('#tq-top').innerHTML = R.topbar(A.state, A.lang, c);
    $('#tq-header').innerHTML = R.header(A.state, A.lang, c);
    $('#tresc').innerHTML = R.main(A.state, A.lang, c);
    $('#tq-footer').innerHTML = R.footer(A.state, A.lang, c);
    $('#tq-fab').innerHTML = R.fab(A.state, A.lang, c);
    if (keep.tab && keep.tab.tab) selectTab(keep.tab.tab);
    updateHead(); afterRender();
  };
  function updateHead() {
    var h = R.head(A.state, A.lang), hd = doc.head;
    html.lang = A.lang; doc.title = h.title;
    function meta(sel, val) { var m = $(sel, hd); if (m) m.setAttribute(m.tagName === 'LINK' ? 'href' : 'content', val); }
    meta('meta[name=description]', h.desc); meta('link[rel=canonical]', h.canonical);
    meta('meta[property="og:title"]', h.title); meta('meta[property="og:description"]', h.desc); meta('meta[property="og:url"]', h.canonical);
    meta('meta[property="og:image"]', h.dom + '/og-image.png'); meta('meta[name="twitter:title"]', h.title); meta('meta[name="twitter:description"]', h.desc); meta('meta[name="twitter:image"]', h.dom + '/og-image.png');
    $$('link[rel=alternate][hreflang]', hd).forEach(function (l) { l.remove(); });
    var can = $('link[rel=canonical]', hd);
    h.hreflang.forEach(function (x) { var l = doc.createElement('link'); l.rel = 'alternate'; l.hreflang = x.l; l.href = x.h; hd.insertBefore(l, can ? can.nextSibling : null); });
    var ld = $('#ld'); if (ld) ld.textContent = JSON.stringify(h.ld).replace(/</g, '\\u003c');
  }
  function afterRender() {
    A.cap = { a: 2 + Math.floor(Math.random() * 7), b: 1 + Math.floor(Math.random() * 8) }; A.t0 = Date.now();
    $$('#tresc [data-cap]').forEach(function (l) { l.textContent = u().fCap.replace('{a}', A.cap.a).replace('{b}', A.cap.b); });
    var lock = $('#tq-fab [data-panel]'); if (lock && A.logged) { lock.innerHTML = 'Panel'; lock.setAttribute('aria-label', 'Panel administratora — otwórz'); }
    A.cur = null; tick(); spy(); cookie();
  }
  /* elementy zależne od czasu: status godzin, odliczanie promocji, dzisiejszy dzień */
  function tick() {
    var now = new Date(), s = R.statusGodzin(A.state, A.lang, now);
    $$('#tq [data-status]').forEach(function (el) { el.className = 'stat stat-' + s.k; el.innerHTML = '<span class="dot" aria-hidden="true"></span>' + R.esc(s.tekst); });
    var dz = (now.getDay() + 6) % 7;
    $$('#tresc .godz tr').forEach(function (tr) { tr.classList.toggle('dzis', +tr.dataset.dzien === dz); });
    A.state.promocje.forEach(function (p) {
      var cd = R.countdown(p, A.lang, now), a = $('#tresc [data-cd="' + p.id + '"]'), b = $('#tresc [data-bar="' + p.id + '"]');
      if (a) a.textContent = cd.txt; if (b) b.style.width = cd.pct + '%';
    });
    /* po północy lub po upływie terminu: przebuduj listy treści czasowych */
    var sig = R.ymd(now) + '|' + R.aktywne(A.state.promocje).length + '|' + R.aktywne(A.state.magazyn).length;
    if (A.sig && A.sig !== sig) { A.sig = sig; A.render(); } A.sig = sig;
  }

  /* ---------- menu: aktywna sekcja, adres, powrót po odświeżeniu ---------- */
  var spyReq = 0;
  function spy() {
    var secs = $$('#tresc > section[id]'); if (!secs.length) return;
    var y = 120 + window.innerHeight * 0.2, cur = secs[0];
    secs.forEach(function (s) { if (s.getBoundingClientRect().top <= y) cur = s; });
    if (window.innerHeight + window.scrollY >= doc.body.scrollHeight - 4) cur = secs[secs.length - 1];
    if (cur.id !== A.cur) {
      A.cur = cur.id;
      $$('#tq-header .nav-l a').forEach(function (a) { if (a.getAttribute('href') === '#' + cur.id) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
      if (A.ready) { try { history.replaceState(null, '', cur.id === 'start' ? location.pathname + location.search : '#' + cur.id); } catch (e) { } }
    }
    try { sessionStorage.setItem('talqo-pos', JSON.stringify({ id: cur.id, off: Math.round(-cur.getBoundingClientRect().top), p: location.pathname })); } catch (e) { }
    var top = $('#tq-fab [data-top]'); if (top) top.hidden = window.scrollY < 700;
  }
  window.addEventListener('scroll', function () { if (!spyReq) spyReq = requestAnimationFrame(function () { spyReq = 0; spy(); }); }, { passive: true });
  function restorePos() {
    var nav = (performance.getEntriesByType && performance.getEntriesByType('navigation')[0]) || {}, el;
    try {
      var p = JSON.parse(sessionStorage.getItem('talqo-pos') || 'null');
      if (p && p.p === location.pathname && (nav.type === 'reload' || nav.type === 'back_forward') && (el = doc.getElementById(p.id))) { window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + p.off, behavior: 'instant' }); return; }
    } catch (e) { }
    if (location.hash && (el = doc.getElementById(location.hash.slice(1)))) el.scrollIntoView({ behavior: 'instant' });
  }
  A.showSection = function (id) {
    var el = doc.getElementById(id) || $('#tq-footer'); if (!el) return;
    el.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth', block: 'start' });
    el.classList.remove('hl'); void el.offsetWidth; el.classList.add('hl'); setTimeout(function () { el.classList.remove('hl'); }, 2800);
  };

  /* ---------- okna ---------- */
  A.dlg = function (title, body) {
    var d = $('#tq-dlg');
    $('.dlg-in', d).innerHTML = '<button type="button" class="dlg-x" data-dlg-x aria-label="' + u().close + '">×</button><h2 id="tq-dlg-h">' + title + '</h2>' + body;
    if (d.showModal) d.showModal(); else d.setAttribute('open', ''); $('.dlg-in', d).scrollTop = 0;
  };
  function selectTab(id) {
    $$('#tresc [role=tab]').forEach(function (b) { var on = b.dataset.tab === id; b.setAttribute('aria-selected', on); b.tabIndex = on ? 0 : -1; });
    $$('#tresc [role=tabpanel]').forEach(function (p) { p.hidden = p.dataset.item !== id; });
  }
  function setForm(vals) {
    var fm = $('#f-kontakt'); if (!fm) return;
    Object.keys(vals).forEach(function (k) { var el = fm.elements[k]; if (!el) return; if (k === 'tryb') { $$('[name=tryb]', fm).forEach(function (r) { r.checked = r.value === vals[k]; }); } else el.value = vals[k]; });
    tryb(fm);
  }
  function tryb(fm) { var v = (fm.elements.tryb || {}).value; $$('[data-only]', fm).forEach(function (el) { el.hidden = el.dataset.only !== v; }); }

  /* ---------- kliknięcia (delegowane — działają także po ponownym renderowaniu) ---------- */
  doc.addEventListener('click', function (e) {
    var tq = e.target.closest('#tq, #tq-dlg'); if (!tq) return;
    var el;
    if ((el = e.target.closest('[data-menu-toggle]'))) { var nav = $('#nav'), op = !nav.classList.contains('open'); nav.classList.toggle('open', op); el.setAttribute('aria-expanded', op); return; }
    if (e.target.closest('#nav a')) { $('#nav').classList.remove('open'); var b = $('[data-menu-toggle]'); if (b) b.setAttribute('aria-expanded', 'false'); }
    if ((el = e.target.closest('[data-tab]'))) { selectTab(el.dataset.tab); return; }
    if ((el = e.target.closest('[data-kurs]'))) { selectTab(el.dataset.kurs); return; }
    if ((el = e.target.closest('[data-jezyk]'))) { setForm({ tryb: 'termin', jezyk: el.dataset.jezyk }); return; }
    if ((el = e.target.closest('[data-usluga]'))) { setForm({ tryb: 'termin', forma: el.dataset.usluga }); return; }
    if ((el = e.target.closest('[data-art]'))) {
      var a = null; A.state.magazyn.forEach(function (x) { if (x.id === el.dataset.art) a = x; });
      if (a) A.dlg(R.inl(R.t(a.tytul, A.lang)), (R.t(a.kategoria, A.lang) ? '<p class="art-k">' + R.esc(R.t(a.kategoria, A.lang)) + (a.data ? ' · ' + R.fmtDate(a.data, A.lang, true) : '') + '</p>' : '') +
        (a.src ? '<div class="ph" style="aspect-ratio:16/9"><img src="' + R.esc(a.src) + '" alt="" onerror="this.remove()"></div>' : '') + '<div class="txt">' + R.fmt(R.t(a.tresc, A.lang)) + '</div>');
      return;
    }
    if (e.target.closest('[data-polityka]')) { A.dlg(u().policy, '<div class="txt">' + R.fmt(R.t(A.state.polityka.tekst, A.lang).replace(/\{EMAIL\}/g, A.state.kontakt.email || u().emailTodo)) + '</div>'); return; }
    if (e.target.closest('[data-dlg-x]')) { $('#tq-dlg').close(); return; }
    if (e.target.closest('[data-panel]')) { if (A.openPanel) A.openPanel(e.target.closest('[data-panel]')); return; }
    if ((el = e.target.closest('[data-slide]'))) { slideTo(+el.dataset.slide); return; }
    if ((el = e.target.closest('[data-car]'))) { var car = $('.car', el.closest('.sek')); if (car) car.scrollBy({ left: +el.dataset.car * Math.max(280, car.clientWidth * 0.8), behavior: reduced ? 'instant' : 'smooth' }); return; }
    if ((el = e.target.closest('[data-cookie]'))) { try { localStorage.setItem('talqo-zgoda', el.dataset.cookie); } catch (x) { } var c = $('#tq .cookie'); if (c) c.remove(); if (el.dataset.cookie === 'tak') loadGA(); return; }
    if ((el = e.target.closest('[data-lang]'))) { try { localStorage.setItem('talqo-lang', el.dataset.lang); } catch (x) { } }
  });
  $('#tq-dlg').addEventListener('click', function (e) { if (e.target === this) this.close(); });
  doc.addEventListener('keydown', function (e) {
    var tab = e.target.closest && e.target.closest('#tresc [role=tab]');
    if (tab && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) {
      var tabs = $$('[role=tab]', tab.parentNode), i = tabs.indexOf(tab) + (e.key === 'ArrowRight' ? 1 : -1), n = tabs[(i + tabs.length) % tabs.length];
      selectTab(n.dataset.tab); n.focus(); e.preventDefault();
    }
    if (e.key === 'Escape') { var nav = $('#nav'); if (nav && nav.classList.contains('open')) { nav.classList.remove('open'); var b = $('[data-menu-toggle]'); b.setAttribute('aria-expanded', 'false'); b.focus(); } }
  });
  doc.addEventListener('change', function (e) { if (e.target.name === 'tryb' && e.target.form) tryb(e.target.form); });

  /* ---------- slider i pasek komunikatów ---------- */
  var slideI = 0;
  function slideTo(i) {
    var sl = $$('#tresc [data-slider] .slide'); if (!sl.length) return; slideI = (i + sl.length) % sl.length;
    sl.forEach(function (s, k) { s.classList.toggle('on', k === slideI); });
    $$('#tresc .dots button').forEach(function (b, k) { if (k === slideI) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current'); });
  }
  setInterval(function () { if (!reduced && !doc.hidden && $$('#tresc [data-slider] .slide').length > 1) slideTo(slideI + 1); }, 6000);
  var tickI = 0;
  setInterval(function () {
    var tk = $('#tq-top .ticker'); if (!tk || reduced || tk.matches(':hover') || tk.contains(doc.activeElement)) return;
    var li = $$('li', tk); if (li.length < 2) return; tickI = (tickI + 1) % li.length;
    li.forEach(function (l, k) { l.classList.toggle('on', k === tickI); });
    var n = $('[data-tick]', tk); if (n) n.textContent = (tickI + 1) + '/' + li.length;
  }, 5000);
  setInterval(tick, 60000);

  /* ---------- formularze: walidacja na żywo, antyspam, wysyłka ---------- */
  var RULES = {
    imie: function (v) { return v.trim().length >= 3 && /[A-Za-zÀ-ž]{2}/.test(v) ? '' : u().eName; },
    email: function (v) { return /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/.test(v.trim()) ? '' : u().eEmail; },
    telefon: function (v) { v = v.trim(); return !v || /^\+?[\d\s-]{9,19}$/.test(v) && v.replace(/\D/g, '').length >= 9 && v.replace(/\D/g, '').length <= 15 ? '' : u().ePhone; },
    wiadomosc: function (v, fm) { return (fm.elements.tryb && fm.elements.tryb.value === 'termin' && !v.trim()) || v.trim().length >= 10 ? '' : u().eMsg; },
    cap: function (v) { return +v.trim() === A.cap.a + A.cap.b && v.trim() !== '' ? '' : u().eCap; },
    zgoda: function (v, fm, el) { return el.checked ? '' : u().eConsent; }
  };
  function check(el) {
    var fm = el.form, rule = RULES[el.name]; if (!rule || !fm) return true;
    var msg = rule(el.value, fm, el), e = doc.getElementById(el.id + '-e');
    if (msg) { el.setAttribute('aria-invalid', 'true'); if (e) { e.textContent = msg; e.hidden = false; el.setAttribute('aria-describedby', e.id); } }
    else { el.removeAttribute('aria-invalid'); if (e) { e.hidden = true; e.textContent = ''; } }
    return !msg;
  }
  doc.addEventListener('focusout', function (e) { if (e.target.form && e.target.form.dataset.form && e.target.closest('#tq')) check(e.target); });
  doc.addEventListener('input', function (e) { if (e.target.form && e.target.form.dataset.form && e.target.closest('#tq') && (e.target.getAttribute('aria-invalid') || e.target.type === 'checkbox')) check(e.target); });
  doc.addEventListener('submit', function (e) {
    var fm = e.target; if (!fm.dataset || !fm.dataset.form || !fm.closest('#tq')) return;
    e.preventDefault();
    var msg = $('.form-msg', fm), btn = $('button[type=submit]', fm), els = $$('input,textarea,select', fm), bad = null, uu = u();
    els.forEach(function (el) { if (!check(el) && !bad) bad = el; });
    if (bad) { bad.focus(); return; }
    function done(ok, txt) { msg.className = 'form-msg ' + (ok ? 'ok' : 'bad'); msg.textContent = txt; btn.disabled = false; btn.firstChild.textContent = fm.dataset.form === 'news' ? uu.nSend : uu.fSend; if (ok) { fm.reset(); tryb(fm); A.t0 = Date.now(); } }
    if (Date.now() - A.t0 < 3500) { done(false, uu.eFast); return; }
    var okTxt = fm.dataset.form === 'news' ? uu.nOk : uu.fOk;
    if (fm.elements.website.value) { done(true, okTxt); return; } /* pułapka na boty */
    btn.disabled = true; btn.firstChild.textContent = uu.fSending;
    var g = function (n) { var el = fm.elements[n]; if (!el) return ''; if (el.tagName === 'SELECT') return el.value ? el.options[el.selectedIndex].text : ''; return el.value || ''; };
    var z = fm.dataset.form === 'news' ? { typ: 'newsletter', email: g('email').trim() }
      : { typ: g('tryb') || 'pytanie', imie: g('imie').trim(), email: g('email').trim(), telefon: g('telefon').trim(), jezyk: g('jezyk'), forma: g('forma'), termin: g('termin'), wiadomosc: g('wiadomosc').trim() };
    z.lang = A.lang; z.czas = Date.now() - A.t0;
    if (A.mode !== 'server') {
      idb.get('zgloszenia').then(function (l) { l = l || []; z.id = 'z' + Date.now(); z.data = new Date().toISOString(); l.unshift(z); return idb.set('zgloszenia', l); }).then(function () { done(true, okTxt + uu.fDemo); });
      return;
    }
    A.api('zgloszenia', { method: 'POST', json: z }).then(function (r) {
      if (r.ok) return done(true, okTxt);
      throw new Error(r.data.blad || '');
    }).catch(function () {
      var em = A.state.kontakt.email;
      if (em && z.typ !== 'newsletter') location.href = 'mailto:' + em + '?subject=' + encodeURIComponent('Zapytanie ze strony TALQO') + '&body=' + encodeURIComponent([z.imie, z.email, z.telefon, z.jezyk, z.forma, z.termin, '', z.wiadomosc].join('\n'));
      done(false, uu.fFail);
    });
  });

  /* ---------- statystyki tylko po zgodzie ---------- */
  function loadGA() {
    var id = A.state.ustawienia.ga4; if (!id || window.gtag || !/^G-[A-Z0-9]+$/.test(id)) return;
    var s = doc.createElement('script'); s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + id; doc.head.appendChild(s);
    window.dataLayer = window.dataLayer || []; window.gtag = function () { window.dataLayer.push(arguments); }; window.gtag('js', new Date()); window.gtag('config', id, { anonymize_ip: true });
  }
  function cookie() {
    if (!A.state.ustawienia.ga4 || $('#tq .cookie')) return; var z = null; try { z = localStorage.getItem('talqo-zgoda'); } catch (e) { }
    if (z === 'tak') return loadGA(); if (z === 'nie') return;
    var d = doc.createElement('div'); d.className = 'cookie'; d.setAttribute('role', 'region'); d.setAttribute('aria-label', 'Cookies');
    d.innerHTML = '<p>' + u().cookieTxt + '</p><div><button type="button" class="btn btn-s" data-cookie="tak">' + u().cookieYes + '</button><button type="button" class="btn btn-s btn-o" data-cookie="nie">' + u().cookieNo + '</button></div>';
    $('#tq').appendChild(d);
  }

  /* ---------- start ---------- */
  function start() {
    afterRender();
    load().then(function () {
      var wl = R.wlaczone(A.state).map(function (j) { return j.kod; });
      if (wl.indexOf(A.lang) < 0) { location.replace(R.langUrl('pl', A.base, A.isFile)); return; } /* wyłączona wersja → polska */
      var changed = JSON.stringify(A.state) !== JSON.stringify(D.DEFAULTS) || A.lang !== (html.getAttribute('lang') || 'pl') || A.isFile || A.logged;
      if (changed) { A.render(); restorePos(); }
      A.ready = true; spy();
      doc.dispatchEvent(new CustomEvent('talqo:ready'));
    });
  }
  A.start = start;
})();

/* ============================================================
   TALQO — PANEL ADMINISTRACYJNY (CMS)
   Kolory panelu: główny #4A1F45, akcent #C9A25A, tło #F7F2EC
   ============================================================ */
(function () {
  'use strict';
  var A = window.TALQO, R = window.TALQO_RENDER, D = window.TALQO_DATA, doc = document, esc = R.esc, $ = A.$, $$ = A.$$, clone = A.clone;
  var P = { page: 'pulpit', filter: 'wszystkie', uid: 0, dirty: false, draft: null, zglTab: 'z' };
  var PANEL_CSS = "/* TALQO — style panelu (prefiks .cmsp-). Kolory: główny #4A1F45, akcent #C9A25A, tło #F7F2EC */\nbody.cmsp-open{overflow:hidden}\n.cmsp-r{--p:#4A1F45;--pd:#2E1230;--g:#C9A25A;--bg:#F7F2EC;--ln:#D9CFC3;--tx:#221A22;--mu:#5E5360;--ok:#2F6B45;--wa:#8A5A0F;--no:#8E2F3A;font:400 15px/1.5 system-ui,-apple-system,\"Segoe UI\",Roboto,sans-serif;color:var(--tx)}\n.cmsp-r *,.cmsp-r *::before,.cmsp-r *::after{box-sizing:border-box}\n:where(.cmsp-r) :where(h1,h2,p,ul,figure){margin:0;padding:0}\n:where(.cmsp-r) ul{list-style:none}\n:where(.cmsp-r) :where(button,input,select,textarea){font:inherit;color:inherit}\n:where(.cmsp-r) :where(input:not([type=checkbox]):not([type=file]):not([type=color]),select,textarea){width:100%;min-height:44px;padding:.5rem .7rem;border:1px solid #84778a;border-radius:8px;background:#fff}\n:where(.cmsp-r) textarea{resize:vertical;line-height:1.45}\n:where(.cmsp-r) input[type=color]{width:64px;height:44px;padding:2px;border:1px solid #84778a;border-radius:8px;background:#fff}\n:where(.cmsp-r) input[type=checkbox]{width:20px;height:20px;accent-color:var(--p);flex:none}\n.cmsp-r :focus-visible{outline:3px solid var(--p);outline-offset:2px}\n.cmsp-vh{position:absolute!important;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}\n.cmsp{position:fixed;inset:0;z-index:1000;background:var(--bg);display:flex;flex-direction:column}\n.cmsp[hidden]{display:none}\n.cmsp-top{display:flex;align-items:center;gap:1rem;background:var(--p);color:#fff;padding:.6rem 1rem;flex-wrap:wrap}\n.cmsp-logo{display:flex;align-items:center;gap:.7rem;margin-right:auto}\n.cmsp-logo>span{display:grid;place-items:center;width:40px;height:40px;border-radius:50%;background:var(--bg);color:var(--p);font:400 1.5rem Georgia,serif}\n.cmsp-logo strong{display:block;font-size:.95rem;line-height:1.2}.cmsp-logo small{opacity:.85}\n.cmsp-save{display:flex;align-items:center;gap:.45rem;font-size:.9rem}\n.cmsp-save i{width:10px;height:10px;border-radius:50%;background:#9AD8AE}\n.cmsp-s-saving i{background:var(--g)}.cmsp-s-error i{background:#F0A9B1}\n.cmsp-topb{display:flex;gap:.5rem}\n.cmsp-top :focus-visible{outline-color:#fff}\n.cmsp-demo{background:var(--g);color:var(--pd);font-weight:600;text-align:center;padding:.5rem 1rem}\n.cmsp-demo[hidden]{display:none}\n.cmsp-body{flex:1;display:flex;min-height:0}\n.cmsp-nav{width:250px;flex:none;overflow:auto;background:#fff;border-right:1px solid var(--ln);padding:.8rem .6rem 2rem}\n.cmsp-ng>p{font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--mu);font-weight:700;padding:.9rem .6rem .3rem}\n.cmsp-nav button{display:flex;align-items:center;gap:.4rem;width:100%;min-height:40px;padding:.3rem .6rem;border:0;background:none;border-radius:8px;text-align:left;cursor:pointer}\n.cmsp-nav button span:first-child{flex:1}\n.cmsp-nav button:hover{background:var(--bg)}\n.cmsp-nav button[aria-current]{background:var(--p);color:#fff}\n.cmsp-cnt{font-size:.75rem;min-width:22px;text-align:center;padding:.05rem .35rem;border-radius:99px;background:#EAE2D8;color:var(--tx)}\n.cmsp-cg{background:#CDEBD6;color:#1d4a2e}\n.cmsp-main{flex:1;overflow:auto;padding:1.2rem clamp(.8rem,3vw,2rem) 5rem;min-width:0}\n.cmsp-main>*{max-width:1100px}\n.cmsp-ph{display:flex;justify-content:space-between;align-items:flex-start;gap:1rem;flex-wrap:wrap;margin-bottom:1rem}\n.cmsp-ph h1{font:400 1.9rem/1.15 Georgia,serif;color:var(--p)}\n.cmsp-ph p{color:var(--mu);max-width:60ch;margin-top:.2rem}\n.cmsp-card{background:#fff;border:1px solid var(--ln);border-radius:12px;padding:1rem;margin-bottom:1rem}\n.cmsp-card h2{font:400 1.25rem Georgia,serif;margin-bottom:.7rem}\n.cmsp-btn{display:inline-flex;align-items:center;justify-content:center;gap:.4rem;min-height:44px;padding:.4rem 1rem;border-radius:99px;border:1px solid var(--p);background:#fff;color:var(--p);cursor:pointer;text-decoration:none;font-weight:600;font-size:.92rem}\n.cmsp-btn:hover{background:var(--bg)}\n.cmsp-pri{background:var(--p);color:#fff}.cmsp-pri:hover{background:var(--pd)}\n.cmsp-lite{border-color:rgba(255,255,255,.6);background:transparent;color:#fff}.cmsp-lite:hover{background:rgba(255,255,255,.15)}\n.cmsp-dng{border-color:var(--no);color:var(--no)}\n.cmsp-sm{min-height:36px;font-size:.85rem;padding:.2rem .8rem}\n.cmsp-up{position:relative}.cmsp-up:focus-within{outline:3px solid var(--p);outline-offset:2px}\n.cmsp-acts{display:flex;flex-wrap:wrap;gap:.6rem;align-items:center;margin-top:1rem}\n.cmsp-actt{margin:0 0 .8rem}\n.cmsp-dirty{color:var(--wa);font-weight:600;font-size:.9rem}\n.cmsp-err{color:var(--no);font-weight:600;margin-top:.7rem}\n.cmsp-hint{color:var(--mu);font-size:.84rem;margin-top:.25rem}\n.cmsp-empty{color:var(--mu);font-style:italic;padding:.6rem 0}\n.cmsp-quick{display:flex;gap:.5rem;flex-wrap:wrap}\n/* podgląd */\n.cmsp-pvh{display:flex;justify-content:space-between;align-items:center;gap:.8rem;flex-wrap:wrap;margin-bottom:.7rem}\n.cmsp-pv{position:relative;overflow:auto;max-height:340px;border:1px solid var(--ln);border-radius:8px;background:#F7F2EC}\n.cmsp-pvz{position:relative;overflow:hidden}\n.cmsp-pvs{position:absolute;left:0;top:0;transform-origin:0 0;pointer-events:none}\n.cmsp-pvs .site-h{position:static}\n.cmsp-pvs .site-f{padding-bottom:3rem}\n.cmsp-pvm{max-height:62vh}\n.cmsp-pvt{max-height:110px;overflow:hidden;width:170px;flex:none}\n.tq .cmsp-hl{outline:6px solid #C9A25A!important;outline-offset:4px;background-color:rgba(201,162,90,.28)!important;border-radius:4px}\n/* formularze */\n.cmsp-form{display:grid;gap:1rem}\n.cmsp-fl{display:block;font-weight:600;font-size:.9rem;margin-bottom:.3rem}\n.cmsp-req{color:var(--no)}\n.cmsp-mlg{display:grid;gap:.5rem;grid-template-columns:repeat(auto-fit,minmax(220px,1fr))}\n.cmsp-ml{position:relative}\n.cmsp-ml label{position:absolute;right:6px;top:6px;font-size:.68rem;font-weight:700;letter-spacing:.06em;background:var(--p);color:#fff;border-radius:5px;padding:.05rem .35rem;pointer-events:none}\n.cmsp-ml input,.cmsp-ml textarea{padding-right:2.6rem}\n.cmsp-off{margin-top:.4rem}.cmsp-off summary{cursor:pointer;color:var(--mu);font-size:.85rem;min-height:32px}\n.cmsp-chk label,.cmsp-sw{display:inline-flex;align-items:center;gap:.5rem;min-height:44px;cursor:pointer}\n.cmsp-short input{max-width:220px}\n.cmsp-imgr{display:flex;gap:.8rem;flex-wrap:wrap;align-items:flex-start}\n.cmsp-thumb{width:150px;height:100px;border-radius:8px;background:linear-gradient(140deg,#E9E0D4,#CDBFAE);display:grid;place-items:center;overflow:hidden;font-size:.8rem;color:var(--mu);flex:none}\n.cmsp-thumb img{width:100%;height:100%;object-fit:cover}\n.cmsp-imgb{display:flex;flex-wrap:wrap;gap:.5rem;flex:1;min-width:220px;align-items:center}\n.cmsp-url{flex-basis:100%;font-size:.84rem;color:var(--mu)}\n/* listy */\n.cmsp-filt{display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:1rem}\n.cmsp-filt button{min-height:40px;padding:.2rem .9rem;border-radius:99px;border:1px solid var(--ln);background:#fff;cursor:pointer}\n.cmsp-filt button[aria-pressed=true]{background:var(--p);color:#fff;border-color:var(--p)}\n.cmsp-filt span{opacity:.75;font-size:.85em}\n.cmsp-rows{display:grid;gap:.5rem}\n.cmsp-row{display:flex;align-items:center;gap:.7rem;flex-wrap:wrap;border:1px solid var(--ln);border-radius:10px;padding:.5rem .6rem;background:#fff}\n.cmsp-dim{background:#F3EEE8}.cmsp-dim .cmsp-rt,.cmsp-dim .cmsp-th{opacity:.55}\n.cmsp-ord{display:flex;flex-direction:column;align-items:center}\n.cmsp-ord button{width:32px;height:26px;border:1px solid var(--ln);background:#fff;border-radius:6px;cursor:pointer;font-size:.7rem}\n.cmsp-ord button:disabled{opacity:.3;cursor:default}\n.cmsp-grip{cursor:grab;color:var(--mu);font-size:1.1rem;line-height:1}\n.cmsp-th{width:56px;height:44px;border-radius:6px;background:#EAE2D8;display:grid;place-items:center;overflow:hidden;font-weight:700;color:var(--mu);flex:none}\n.cmsp-th img{width:100%;height:100%;object-fit:cover}\n.cmsp-rt{flex:1;min-width:150px}.cmsp-rt strong{display:block;line-height:1.3}.cmsp-rt span,.cmsp-rt p{display:block;color:var(--mu);font-size:.86rem}\n.cmsp-bdg{font-size:.75rem;font-weight:700;padding:.15rem .6rem;border-radius:99px;background:#E4DDD4;color:#4b414c;white-space:nowrap}\n.cmsp-b-aktywna{background:#CDEBD6;color:#1d4a2e}.cmsp-b-zaplanowana{background:#F6E3B4;color:#5d3d06}\n.cmsp-ra{display:flex;flex-wrap:wrap;gap:.3rem;align-items:center}\n.cmsp-ra>button{min-height:36px;padding:.1rem .7rem;border-radius:99px;border:1px solid var(--ln);background:#fff;cursor:pointer;font-size:.85rem}\n.cmsp-ra>button:hover{border-color:var(--p)}\n.cmsp-ra>button.cmsp-dng{background:var(--no);color:#fff;border-color:var(--no)}\n.cmsp-sd{flex-basis:100%}.cmsp-sd summary{cursor:pointer;min-height:36px;color:var(--p);font-weight:600;font-size:.9rem}\n.cmsp-drag{opacity:.4}.cmsp-over{box-shadow:0 -3px 0 var(--p)}\n/* pulpit */\n.cmsp-tiles{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:.7rem;margin-bottom:1rem}\n.cmsp-tile{text-align:left;border:1px solid var(--ln);background:#fff;border-radius:12px;padding:.9rem;cursor:pointer;display:grid;gap:.1rem}\n.cmsp-tile:hover{border-color:var(--p)}\n.cmsp-tile strong{font:400 1.7rem/1.1 Georgia,serif;color:var(--p)}\n.cmsp-tile span{font-weight:600;font-size:.9rem}.cmsp-tile small{color:var(--mu)}\n.cmsp-t-ok strong{color:var(--ok)}.cmsp-t-off strong{color:var(--no)}\n.cmsp-gantt{position:relative;overflow:hidden}\n.cmsp-gr{display:grid;grid-template-columns:minmax(90px,200px) 1fr;gap:.6rem;align-items:center;min-height:30px;font-size:.84rem}\n.cmsp-gr>span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.cmsp-gt{position:relative;height:18px;background:#F3EEE8;border-radius:5px}\n.cmsp-gh .cmsp-gt{background:none}.cmsp-gh b{position:absolute;font-size:.72rem;color:var(--mu);border-left:1px solid var(--ln);padding-left:3px;font-weight:600}\n.cmsp-gt i{position:absolute;top:2px;bottom:2px;border-radius:4px;min-width:4px}\n.cmsp-g-aktywna{background:#3E8A5A}.cmsp-g-zaplanowana{background:#D9A93A}.cmsp-g-zakonczona,.cmsp-g-wstrzymana{background:#A79DA8}\n.cmsp-gt u{position:absolute;left:25%;top:-6px;bottom:-6px;width:2px;background:var(--no);z-index:1}\n.cmsp-gh{min-height:38px;align-items:start}.cmsp-gh em{position:absolute;left:25%;top:18px;transform:translateX(-50%);font-size:.7rem;color:var(--no);font-style:normal;font-weight:700;background:#fff;padding:0 3px}\n.cmsp-leg{display:flex;flex-wrap:wrap;gap:.4rem 1rem;align-items:center;font-size:.82rem;color:var(--mu);margin-top:.6rem}\n.cmsp-leg i{display:inline-block;width:14px;height:10px;border-radius:3px;margin-right:.2rem}\n.cmsp-up45 li{padding:.3rem 0;border-bottom:1px solid #EFE8DF}\n.cmsp-thumbs{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:1rem}\n.cmsp-thumbs li{display:grid;gap:.4rem;justify-items:start}\n.cmsp-thumbs p{font-weight:600}\n/* godziny, hasło */\n.cmsp-godz{border-collapse:collapse;width:100%;max-width:560px}\n.cmsp-godz th,.cmsp-godz td{text-align:left;padding:.3rem .5rem .3rem 0;font-weight:400;vertical-align:middle}\n.cmsp-godz thead th{font-size:.78rem;color:var(--mu);font-weight:700}\n.cmsp-godz input[type=time]{width:120px}.cmsp-godz input:disabled{opacity:.4}\n.cmsp-warn{display:block;color:var(--no);font-size:.8rem;font-weight:600}\n.cmsp-pass{display:grid;gap:1rem;max-width:420px}\n.cmsp-meter{height:8px;background:#EAE2D8;border-radius:9px;margin-top:.4rem;overflow:hidden}\n.cmsp-meter i{display:block;height:100%;width:0;background:var(--no)}\n.cmsp-meter .cmsp-m2{background:var(--g)}.cmsp-meter .cmsp-m3,.cmsp-meter .cmsp-m4{background:var(--ok)}\n.cmsp-inl{display:flex;flex-wrap:wrap;gap:.8rem;align-items:flex-end}\n/* okna */\ndialog.cmsp-dlg{border:0;border-radius:14px;padding:0;background:#fff;box-shadow:0 20px 70px rgba(46,18,48,.4);max-height:92vh;width:min(100% - 1rem,440px)}\ndialog.cmsp-dlg::backdrop{background:rgba(46,18,48,.6)}\ndialog.cmsp-modal{width:min(100% - 1rem,1180px)}\n.cmsp-login form{padding:1.4rem;display:grid;gap:.8rem}\n.cmsp-login h2{font:400 1.5rem Georgia,serif;color:var(--p)}\n.cmsp-login .cmsp-demo{border-radius:8px;font-weight:400;text-align:left}\n.cmsp-modal form{display:flex;flex-direction:column;max-height:92vh}\n.cmsp-modal header,.cmsp-modal footer{display:flex;align-items:center;gap:.6rem;padding:.8rem 1rem;border-bottom:1px solid var(--ln)}\n.cmsp-modal footer{border:0;border-top:1px solid var(--ln);flex-wrap:wrap}.cmsp-modal footer span{flex:1}\n.cmsp-modal h2{font:400 1.35rem Georgia,serif;color:var(--p);flex:1}\n.cmsp-x{width:44px;height:44px;border-radius:50%;border:1px solid var(--ln);background:#fff;font-size:1.4rem;line-height:1;cursor:pointer}\n.cmsp-m2{display:grid;gap:1rem;padding:1rem;overflow:auto;flex:1;grid-template-columns:1fr}\n.cmsp-mp{order:-1}.cmsp-mp summary{cursor:pointer;font-weight:600;min-height:36px;color:var(--p)}\n.cmsp-toast{position:fixed;left:50%;bottom:20px;transform:translate(-50%,30px);background:var(--pd);color:#fff;padding:.7rem 1.2rem;border-radius:99px;opacity:0;pointer-events:none;transition:.25s;z-index:1100;max-width:92vw;text-align:center}\n.cmsp-toast.cmsp-on{opacity:1;transform:translate(-50%,0)}\n.cmsp-toast.cmsp-bad{background:var(--no)}\n@media (min-width:900px){.cmsp-m2{grid-template-columns:minmax(0,1fr) minmax(0,1fr)}.cmsp-mp{order:0;position:sticky;top:0;align-self:start}}\n@media (max-width:899px){\n.cmsp-body{flex-direction:column}\n.cmsp-nav{width:auto;display:flex;gap:.2rem;overflow-x:auto;padding:.4rem;border-right:0;border-bottom:1px solid var(--ln);flex:none}\n.cmsp-ng{display:flex;align-items:center;flex:none}.cmsp-ng>p{display:none}\n.cmsp-ng ul{display:flex;gap:.2rem}\n.cmsp-nav button{white-space:nowrap;min-height:44px;border:1px solid var(--ln)}\n.cmsp-save{order:3;flex-basis:100%}\n.cmsp-pvt{width:100%}\n.cmsp-thumbs .cmsp-pvt{max-height:130px}\n}\n@media (prefers-reduced-motion:reduce){.cmsp-toast{transition:none}}\n@media (max-width:520px){.cmsp-godz th,.cmsp-godz td{padding-right:.3rem;font-size:.9rem}.cmsp-godz input[type=time]{width:92px;padding:.3rem .35rem}.cmsp-card{padding:.8rem}}\n";

  /* ---------- narzędzia ---------- */
  function get(o, p) { return p.split('.').reduce(function (a, k) { return a == null ? a : a[k]; }, o); }
  function set(o, p, v) { var ks = p.split('.'), l = ks.pop(); ks.forEach(function (k) { if (o[k] == null || typeof o[k] !== 'object') o[k] = {}; o = o[k]; }); o[l] = v; }
  function tp(o) { return R.t(o, 'pl'); }
  function today() { return R.ymd(new Date()); }
  function addD(d, n) { var x = new Date(d); x.setDate(x.getDate() + n); return x; }
  function langs() { return A.state.ustawienia.jezyki; }
  function plD(s) { return s ? R.fmtDate(s, 'pl', true) : ''; }
  function cut(s, n) { s = String(s || ''); return s.length > n ? s.slice(0, n - 1) + '…' : s; }
  var ST = { aktywna: 'Aktywna', zaplanowana: 'Zaplanowana', zakonczona: 'Zakończona', wstrzymana: 'Wstrzymana' };

  /* ---------- definicje pól ---------- */
  function ML(k, l, o) { return Object.assign({ k: k, l: l, t: 'ml' }, o || {}); }
  function MLA(k, l, o) { return Object.assign({ k: k, l: l, t: 'mla' }, o || {}); }
  function TX(k, l, o) { return Object.assign({ k: k, l: l, t: 'text' }, o || {}); }
  function IMG(k, l, o) { return Object.assign({ k: k, l: l, t: 'img' }, o || {}); }
  function BOOL(k, l, o) { return Object.assign({ k: k, l: l, t: 'bool' }, o || {}); }
  function DATE(k, l, o) { return Object.assign({ k: k, l: l, t: 'date' }, o || {}); }
  function TIME(k, l, o) { return Object.assign({ k: k, l: l, t: 'time' }, o || {}); }
  function SEL(k, l, opts, o) { return Object.assign({ k: k, l: l, t: 'sel', opts: opts }, o || {}); }
  function L3() { return { pl: '', en: '', it: '' }; }
  var punkt = { nowy: function () { return { tytul: L3(), opis: L3() }; }, pola: [ML('tytul', 'Tytuł', { req: 1 }), MLA('opis', 'Opis', { rows: 3 })], tytul: function (x) { return tp(x.tytul); }, info: function (x) { return cut(tp(x.opis), 80); } };
  function uslOpts() { return [['', '— brak —']].concat(A.state.uslugi.map(function (u) { return [u.id, tp(u.nazwa)]; })); }
  var CZAS = [DATE('od', 'Pokazuj od'), DATE('do', 'Pokazuj do (puste = bez końca)'), BOOL('wstrzymana', 'Wstrzymaj (nie pokazuj na stronie)'), BOOL('pasek', 'Pokaż też na górnym pasku')];

  /* ---------- LISTY (kolekcje) ---------- */
  var LISTS = {
    promocje: { sek: 'promocje', nazwa: 'Promocje', jeden: 'promocję', opis: 'Oferty czasowe. Pokazują się na stronie tylko w wybranym terminie, potem same znikają.', timed: 1, thumb: 'src',
      nowy: function () { return { tytul: L3(), opis: L3(), plakietka: L3(), src: '', usluga: '', pasek: false, od: today(), 'do': R.ymd(addD(new Date(), 14)), wstrzymana: false }; },
      pola: [ML('tytul', 'Tytuł', { req: 1 }), MLA('opis', 'Opis'), ML('plakietka', 'Plakietka (np. −15%)'), IMG('src', 'Zdjęcie'), SEL('usluga', 'Powiązany kurs (pojawi się na nim plakietka)', uslOpts)].concat(CZAS),
      tytul: function (x) { return tp(x.tytul); }, info: function (x) { return (plD(x.od) || 'od zaraz') + ' → ' + (plD(x['do']) || 'bez końca'); } },
    magazyn: { sek: 'magazyn', nazwa: 'Magazyn (aktualności i wpisy)', jeden: 'wpis', opis: 'Artykuły i aktualności w sekcji „Magazyn TALQO”. Wpis bez dat jest widoczny stale.', timed: 1, thumb: 'src',
      nowy: function () { return { tytul: L3(), kategoria: L3(), tresc: L3(), data: today(), src: '', pasek: false, od: today(), 'do': R.ymd(addD(new Date(), 14)), wstrzymana: false }; },
      pola: [ML('tytul', 'Tytuł', { req: 1 }), ML('kategoria', 'Kategoria (np. Kultura)'), MLA('tresc', 'Treść', { rows: 9 }), DATE('data', 'Data wpisu'), IMG('src', 'Zdjęcie')].concat(CZAS),
      tytul: function (x) { return tp(x.tytul); }, info: function (x) { return tp(x.kategoria) + (x.od || x['do'] ? ' · ' + (plD(x.od) || '…') + ' → ' + (plD(x['do']) || 'bez końca') : ' · bez terminu'); } },
    uslugi: { sek: 'oferta', nazwa: 'Formy zajęć (oferta)', jeden: 'formę zajęć', opis: 'Karty w sekcji „Nasze kursy”: ONE, DUO, BUSINESS, EGZAMINY.', thumb: 'src',
      nowy: function () { return { nazwa: L3(), podtytul: L3(), opis: L3(), czas: L3(), cena: L3(), src: '', alt: L3(), plakietka: L3(), nowosc: false, przycisk: 'rez' }; },
      pola: [ML('nazwa', 'Nazwa', { req: 1 }), ML('podtytul', 'Podtytuł'), MLA('opis', 'Krótki opis', { rows: 3 }), ML('czas', 'Czas (np. 60 min)'), ML('cena', 'Cena (np. od 120 zł)'), IMG('src', 'Zdjęcie'), ML('alt', 'Opis zdjęcia (dla czytników i Google)'), ML('plakietka', 'Własna plakietka'), BOOL('nowosc', 'Oznacz jako „Nowość”'), SEL('przycisk', 'Przycisk', function () { return [['rez', 'Zarezerwuj termin'], ['zap', 'Zapytaj o ofertę']]; })],
      tytul: function (x) { return tp(x.nazwa); }, info: function (x) { return [tp(x.podtytul), tp(x.czas), tp(x.cena)].filter(Boolean).join(' · '); } },
    kursy: { sek: 'kursy', nazwa: 'Kursy językowe', jeden: 'język', opis: 'Zakładki języków w sekcji „Kursy” oraz lista „Wybierz język” na pierwszym ekranie.', thumb: 'src',
      nowy: function () { return { skrot: '', kolor: '#4A1F45', nazwa: L3(), opis: L3(), alt: L3(), src: '' }; },
      pola: [ML('nazwa', 'Nazwa języka', { req: 1 }), TX('skrot', 'Skrót (2 litery, np. EN)'), TX('kolor', 'Kolor zakładki', { type: 'color' }), MLA('opis', 'Opis kursu', { rows: 6 }), IMG('src', 'Zdjęcie'), ML('alt', 'Opis zdjęcia (dla czytników i Google)')],
      tytul: function (x) { return tp(x.nazwa); }, info: function (x) { return cut(tp(x.opis), 70); } },
    grupy: Object.assign({ sek: 'kursy', nazwa: 'Dla kogo (grupy)', jeden: 'grupę', opis: 'Rozwijana lista „Dla kogo są kursy?” w sekcji „Kursy”.' }, punkt),
    pakiety: { sek: 'cennik', nazwa: 'Pakiety lekcji', jeden: 'pakiet', opis: 'Karty pakietów nad cennikiem.',
      nowy: function () { return { nazwa: L3(), opis: L3(), cena: L3(), wyrozniony: false }; },
      pola: [ML('nazwa', 'Nazwa pakietu', { req: 1 }), MLA('opis', 'Opis', { rows: 3 }), ML('cena', 'Cena (np. od 480 zł)', { hint: 'Cena zaczynająca się od „od” zmieni się w wersji EN na „from”, jeśli pole EN zostanie puste.' }), BOOL('wyrozniony', 'Wyróżnij ten pakiet')],
      tytul: function (x) { return tp(x.nazwa); }, info: function (x) { return tp(x.cena); } },
    cennik: { sek: 'cennik', nazwa: 'Cennik', jeden: 'pozycję cennika', opis: 'Pozycje cennika. Każda kategoria tworzy osobną tabelę na stronie.',
      nowy: function () { return { kategoria: L3(), nazwa: L3(), dopisek: L3(), czas: L3(), cena: L3() }; },
      pola: [ML('kategoria', 'Kategoria (nazwa tabeli)'), ML('nazwa', 'Nazwa', { req: 1 }), ML('dopisek', 'Dopisek'), ML('czas', 'Czas'), ML('cena', 'Cena', { hint: '„od …” w wersji EN zmieni się na „from …”, jeśli pole EN zostanie puste.' })],
      tytul: function (x) { return tp(x.nazwa); }, info: function (x) { return [tp(x.kategoria), tp(x.czas), tp(x.cena)].filter(Boolean).join(' · '); } },
    slajdy: { sek: 'start', nazwa: 'Zdjęcia w nagłówku', jeden: 'zdjęcie', opis: 'Zdjęcia na pierwszym ekranie. Przy kilku zdjęciach zmieniają się co 6 sekund.', thumb: 'src',
      nowy: function () { return { src: '', alt: L3() }; }, pola: [IMG('src', 'Zdjęcie', { req: 1 }), ML('alt', 'Opis zdjęcia (dla czytników i Google)')],
      tytul: function (x) { return cut(tp(x.alt), 60) || 'Zdjęcie'; }, info: function (x) { return x.src ? '' : 'tło zastępcze — brak zdjęcia'; } },
    atuty: { sek: 'start', nazwa: 'Atuty pod przyciskami', jeden: 'atut', opis: 'Cztery krótkie atuty pod pierwszym ekranem.',
      nowy: function () { return { ikona: 'ksiazka', tytul: L3(), opis: L3() }; },
      pola: [ML('tytul', 'Tytuł', { req: 1 }), ML('opis', 'Opis'), SEL('ikona', 'Ikona', function () { return [['laptop', 'Laptop'], ['osoby', 'Osoby'], ['warstwy', 'Warstwy'], ['rytm', 'Rytm (pętla)'], ['ksiazka', 'Książka'], ['dyplom', 'Dyplom']]; })],
      tytul: function (x) { return tp(x.tytul); }, info: function (x) { return tp(x.opis); } },
    filary: Object.assign({ sek: 'metoda', nazwa: 'Filary metody', jeden: 'filar', opis: 'Punkty pod opisem metody nauczania.' }, punkt),
    wyrozniki: Object.assign({ sek: 'o-nas', nazwa: 'Wyróżniki szkoły', jeden: 'wyróżnik', opis: 'Cztery wyróżniki w sekcji „O nas” (kadra, certyfikaty, test poziomujący…).' }, punkt),
    certyfikaty: Object.assign({ sek: 'o-nas', nazwa: 'Certyfikaty i akredytacje', jeden: 'certyfikat', opis: 'Lista certyfikatów w sekcji „O nas”. Proszę wpisywać wyłącznie posiadane dokumenty.' }, punkt),
    kroki: Object.assign({ sek: 'jak-zaczac', nazwa: 'Jak zacząć? (kroki)', jeden: 'krok', opis: 'Kolejne kroki od zapytania do pierwszej lekcji.' }, punkt),
    bezpieczenstwo: Object.assign({ sek: 'bezpieczenstwo', nazwa: 'Bezpieczeństwo uczestników', jeden: 'punkt', opis: 'Zasady bezpieczeństwa zajęć online.' }, punkt),
    platnosci: Object.assign({ sek: 'platnosci', nazwa: 'Metody płatności', jeden: 'metodę płatności', opis: 'Dostępne formy płatności.' }, punkt),
    opinie: { sek: 'opinie', nazwa: 'Opinie klientów', jeden: 'opinię', opis: 'Proszę wpisywać wyłącznie prawdziwe opinie klientów.',
      nowy: function () { return { autor: '', ocena: '5', usluga: L3(), tresc: L3() }; },
      pola: [TX('autor', 'Autor', { req: 1 }), SEL('ocena', 'Ocena', function () { return [['5', '5 gwiazdek'], ['4', '4 gwiazdki'], ['3', '3 gwiazdki']]; }), ML('usluga', 'Kurs / forma zajęć'), MLA('tresc', 'Treść opinii', { rows: 5 })],
      tytul: function (x) { return x.autor; }, info: function (x) { return '★'.repeat(+x.ocena || 5) + ' · ' + cut(tp(x.tresc), 60); } },
    faq: { sek: 'faq', nazwa: 'Najczęstsze pytania (FAQ)', jeden: 'pytanie', opis: 'Pytania i odpowiedzi. Trafiają też do danych dla Google (FAQPage).',
      nowy: function () { return { pytanie: L3(), odpowiedz: L3() }; }, pola: [ML('pytanie', 'Pytanie', { req: 1 }), MLA('odpowiedz', 'Odpowiedź', { rows: 4 })],
      tytul: function (x) { return tp(x.pytanie); }, info: function (x) { return cut(tp(x.odpowiedz), 80); } },
    dniSpecjalne: { sek: 'kontakt', nazwa: 'Dni specjalne', jeden: 'dzień specjalny', opis: 'Święta i wyjątki. Mają pierwszeństwo przed godzinami tygodniowymi i pokazują się na stronie 60 dni wcześniej.', sort: 1,
      nowy: function () { return { data: today(), nieczynne: true, od: '', 'do': '', opis: L3() }; },
      pola: [DATE('data', 'Data', { req: 1 }), BOOL('nieczynne', 'Biuro nieczynne w tym dniu'), TIME('od', 'Czynne od'), TIME('do', 'Czynne do'), ML('opis', 'Opis (np. Wigilia)')],
      validate: function (x) { if (!x.nieczynne && (!x.od || !x['do'])) return 'Proszę podać godziny albo zaznaczyć „Biuro nieczynne”.'; if (!x.nieczynne && x['do'] <= x.od) return 'Godzina zamknięcia musi być późniejsza niż otwarcia.'; },
      tytul: function (x) { return plD(x.data) + (tp(x.opis) ? ' — ' + tp(x.opis) : ''); }, info: function (x) { return x.nieczynne ? 'nieczynne' : R.fg(x.od) + '–' + R.fg(x['do']); } }
  };

  /* ---------- FORMULARZE (pojedyncze podstrony) ---------- */
  var FORMS = {
    start: { sek: 'start', nazwa: 'Pierwszy ekran', opis: 'Nagłówek strony: nadtytuł, tytuł główny (H1), wprowadzenie i hasła.',
      pola: [ML('hero.nadtytul', 'Nadtytuł'), ML('hero.tytul', 'Tytuł główny (H1)', { req: 1 }), MLA('hero.wstep', 'Wprowadzenie', { rows: 3 }), ML('hero.odreczne', 'Odręczne hasło przy zdjęciu'), ML('firma.podpis', 'Podpis przy nazwie TALQO', { sek: 'naglowek' }), ML('hero.stopkaHaslo', 'Hasło w stopce (opcjonalne)', { sek: 'stopka' })] },
    onas: { sek: 'o-nas', nazwa: 'O nas', opis: 'Tekst o szkole i dwa zdjęcia.', pola: [MLA('onas.tekst', 'Tekst (pusta linia = nowy akapit)', { rows: 9 }), IMG('onas.src1', 'Zdjęcie 1'), ML('onas.alt1', 'Opis zdjęcia 1'), IMG('onas.src2', 'Zdjęcie 2'), ML('onas.alt2', 'Opis zdjęcia 2')] },
    metoda: { sek: 'metoda', nazwa: 'Metoda nauczania', opis: 'Opis metody i zdjęcie.', pola: [MLA('metoda.tekst', 'Opis metody', { rows: 8 }), IMG('metoda.src', 'Zdjęcie'), ML('metoda.alt', 'Opis zdjęcia')] },
    zapisy: { sek: 'zapisy', nazwa: 'Zapisy', opis: 'Tekst w sekcji „Zapisy przez cały rok”.', pola: [MLA('zapisy.tekst', 'Tekst', { rows: 5 })] },
    cennikUwaga: { sek: 'cennik', nazwa: 'Uwaga pod cennikiem', opis: 'Dopisek pod tabelami cennika.', pola: [MLA('cennikUwaga', 'Uwaga', { rows: 3 })] },
    opiniePodsum: { sek: 'opinie', nazwa: 'Podsumowanie opinii', opis: 'Średnia i liczba opinii (np. z Google) oraz odnośnik do opinii w Google. Proszę wpisywać prawdziwe wartości.', pola: [TX('opiniePodsum.srednia', 'Średnia ocena (np. 4,9)'), TX('opiniePodsum.liczba', 'Liczba opinii'), TX('opiniePodsum.link', 'Link do opinii w Google', { type: 'url' })] },
    kontakt: { sek: 'kontakt', nazwa: 'Dane kontaktowe', opis: 'Zmiana od razu aktualizuje przyciski kontaktu, stopkę i dane dla Google.',
      pola: [TX('kontakt.email', 'E-mail', { type: 'email' }), TX('kontakt.telefon', 'Telefon (puste = nie pokazuj)', { type: 'tel' }), TX('kontakt.whatsapp', 'WhatsApp (numer)'), TX('kontakt.messenger', 'Messenger (nazwa profilu lub link)'), TX('kontakt.instagram', 'Instagram (nazwa profilu lub link)'), TX('kontakt.facebook', 'Facebook (nazwa strony lub link)'), TX('kontakt.googleProfil', 'Link do Profilu Firmy w Google', { type: 'url', sek: 'stopka' }), ML('newsletter.tytul', 'Newsletter — tytuł'), MLA('newsletter.opis', 'Newsletter — opis', { rows: 3 })] },
    polityka: { sek: 'stopka', nazwa: 'Polityka prywatności', opis: 'Treść okna „Polityka prywatności” (otwierane ze stopki i formularza). Znacznik {EMAIL} wstawia adres e-mail szkoły.', pola: [MLA('polityka.tekst', 'Treść', { rows: 18 })] },
    seo: { sek: 'naglowek', nazwa: 'SEO i statystyki', opis: 'Tytuł i opis strony w Google, adres domeny oraz statystyki odwiedzin (uruchamiane dopiero po zgodzie odwiedzającego).',
      pola: [ML('seo.title', 'Tytuł strony w Google (do ok. 60 znaków)', { req: 1 }), MLA('seo.opis', 'Opis strony w Google (140–160 znaków)', { rows: 3 }), TX('ustawienia.domena', 'Adres domeny (np. https://talqo.pl)', { hint: 'Używany w adresie kanonicznym, hreflang, Open Graph i danych strukturalnych.' }), TX('ustawienia.ga4', 'Identyfikator Google Analytics 4 (G-XXXXXXXXXX)', { hint: 'Puste = statystyki wyłączone, okno zgody się nie pokazuje.' })] }
  };

  var NAV = [
    ['Przegląd', [['pulpit', 'Pulpit'], ['sekcje', 'Sekcje strony'], ['zgloszenia', 'Zgłoszenia']]],
    ['Treści czasowe', [['promocje'], ['magazyn']]],
    ['Oferta', [['uslugi'], ['kursy'], ['grupy'], ['pakiety'], ['cennik'], ['cennikUwaga']]],
    ['Wizerunek', [['start'], ['slajdy'], ['atuty'], ['onas'], ['wyrozniki'], ['metoda'], ['filary']]],
    ['Zaufanie', [['opinie'], ['opiniePodsum'], ['certyfikaty'], ['faq'], ['bezpieczenstwo'], ['kroki'], ['zapisy']]],
    ['Szkoła', [['kontakt'], ['godziny', 'Godziny kontaktu'], ['dniSpecjalne'], ['platnosci'], ['polityka']]],
    ['Ustawienia', [['seo'], ['jezyki', 'Wersje językowe'], ['haslo', 'Zmiana hasła'], ['kopia', 'Kopia zapasowa']]]
  ];
  var SEK2PAGE = { start: 'start', promocje: 'promocje', kursy: 'kursy', oferta: 'uslugi', metoda: 'metoda', cennik: 'pakiety', 'jak-zaczac': 'kroki', zapisy: 'zapisy', 'o-nas': 'onas', bezpieczenstwo: 'bezpieczenstwo', platnosci: 'platnosci', opinie: 'opinie', faq: 'faq', magazyn: 'magazyn', kontakt: 'kontakt', stopka: 'kontakt', naglowek: 'start' };
  function sekNazwa(id) { return id === 'start' ? 'Pierwszy ekran' : id === 'stopka' ? 'Stopka' : id === 'naglowek' ? 'Nagłówek i menu' : tp(R.findSek(A.state, id).etykieta) || id; }
  function pageName(id) { return (LISTS[id] || FORMS[id] || {}).nazwa || id; }

  /* ---------- powłoka panelu ---------- */
  function ensure() {
    if ($('#cmsp')) return;
    var st = doc.createElement('style'); st.textContent = PANEL_CSS; doc.head.appendChild(st);
    var d = doc.createElement('div'); d.id = 'cmsp'; d.className = 'cmsp cmsp-r'; d.hidden = true; d.setAttribute('role', 'dialog'); d.setAttribute('aria-modal', 'true'); d.setAttribute('aria-label', 'Panel administratora TALQO');
    d.innerHTML = '<header class="cmsp-top"><div class="cmsp-logo"><span aria-hidden="true">T</span><div><strong>TALQO Szkoła językowa online</strong><small>Panel administratora</small></div></div>' +
      '<div class="cmsp-save" role="status" aria-live="polite"><i></i><span>Gotowy</span></div><div class="cmsp-topb"><button type="button" class="cmsp-btn cmsp-lite" data-act="close">Zobacz stronę</button><button type="button" class="cmsp-btn cmsp-lite" data-act="logout">Wyloguj</button></div></header>' +
      '<p class="cmsp-demo" hidden>Tryb demonstracyjny — zmiany zapisują się tylko na tym komputerze</p>' +
      '<div class="cmsp-body"><nav class="cmsp-nav" aria-label="Menu panelu"></nav><main class="cmsp-main" id="cmsp-main" tabindex="-1"></main></div><div class="cmsp-toast" role="status" aria-live="polite"></div>';
    doc.body.appendChild(d);
  }
  function toast(msg, bad) { var t = $('#cmsp .cmsp-toast') || $('.cmsp-toast'); if (!t) return; t.textContent = msg; t.className = 'cmsp-toast cmsp-on' + (bad ? ' cmsp-bad' : ''); clearTimeout(P.tt); P.tt = setTimeout(function () { t.className = 'cmsp-toast'; }, 3800); }
  A.onSave = function (s, e) {
    var el = $('#cmsp .cmsp-save'); if (!el) return; var n = new Date(), hm = (n.getHours() < 10 ? '0' : '') + n.getHours() + ':' + (n.getMinutes() < 10 ? '0' : '') + n.getMinutes();
    el.className = 'cmsp-save cmsp-s-' + s; $('span', el).textContent = s === 'saving' ? 'Zapisywanie…' : s === 'saved' ? 'Zapisano ' + hm : 'Błąd zapisu';
    if (s === 'error') { toast((e && e.message) || 'Nie udało się zapisać zmian.', true); if (!A.logged) { closePanel(); login(); } }
  };
  function commit(msg) { A.render(); A.save().then(function (ok) { if (ok) toast(msg); }); nav(); }
  function openPanel() {
    ensure(); var d = $('#cmsp'); d.hidden = false; doc.body.classList.add('cmsp-open'); $('#tq').inert = true;
    $('.cmsp-demo', d).hidden = A.mode === 'server'; P.dirty = false; go(P.page, true); $('#cmsp-main').focus();
  }
  function closePanel() { var d = $('#cmsp'); if (!d) return; d.hidden = true; doc.body.classList.remove('cmsp-open'); $('#tq').inert = false; var l = $('#tq-fab [data-panel]'); if (l) l.focus(); }
  function show(sek) { closePanel(); setTimeout(function () { A.showSection(sek === 'naglowek' ? 'start' : sek === 'stopka' ? 'tq-footer' : sek); }, 60); }

  function nav() {
    var n = $('#cmsp .cmsp-nav'); if (!n) return;
    n.innerHTML = NAV.map(function (g) {
      return '<div class="cmsp-ng"><p>' + g[0] + '</p><ul>' + g[1].map(function (it) {
        var id = it[0], lab = it[1] || pageName(id), c = '';
        if (LISTS[id]) { var l = A.state[id] || []; c = '<span class="cmsp-cnt">' + l.length + '</span>'; if (LISTS[id].timed) c += '<span class="cmsp-cnt cmsp-cg" title="aktywne">' + R.aktywne(l).length + '</span>'; }
        return '<li><button type="button" data-go="' + id + '"' + (P.page === id ? ' aria-current="page"' : '') + '><span>' + lab + '</span>' + c + '</button></li>';
      }).join('') + '</ul></div>';
    }).join('');
    var cur = $('[aria-current]', n); if (cur && cur.scrollIntoView && window.innerWidth < 900) cur.scrollIntoView({ block: 'nearest', inline: 'center' });
  }
  function go(page, force) {
    if (P.dirty && !force && P.leave !== page) { P.leave = page; toast('Są niezapisane zmiany. Proszę kliknąć ponownie, aby je porzucić, albo wybrać „Zapisz zmiany”.', true); return; }
    P.leave = null; P.dirty = false; P.draft = null; P.page = page; if (!force || page !== P.lastPage) P.filter = 'wszystkie'; P.lastPage = page;
    nav(); var m = $('#cmsp-main');
    if (page === 'pulpit') pulpit(m); else if (page === 'sekcje') sekcje(m); else if (page === 'godziny') godziny(m); else if (page === 'jezyki') jezyki(m);
    else if (page === 'haslo') haslo(m); else if (page === 'kopia') kopia(m); else if (page === 'zgloszenia') zgloszenia(m);
    else if (LISTS[page]) pageList(m, page); else if (FORMS[page]) pageForm(m, page);
    if (!force) m.scrollTop = 0;
  }
  function head(t, o, sek) { return '<header class="cmsp-ph"><div><h1>' + esc(t) + '</h1><p>' + esc(o || '') + '</p></div>' + (sek ? '<button type="button" class="cmsp-btn" data-show="' + sek + '">Zobacz na stronie</button>' : '') + '</header>'; }
  function pvCard(sek) { return '<section class="cmsp-card cmsp-pvc" aria-label="Podgląd sekcji"><div class="cmsp-pvh"><p>Ta zmiana dotyczy sekcji: <strong data-pvn>' + esc(sekNazwa(sek)) + '</strong></p><button type="button" class="cmsp-btn" data-show="' + sek + '" data-pvshow>Pokaż na stronie</button></div>' + pvBox(sek) + '</section>'; }

  /* ---------- podgląd na żywo ---------- */
  function pvBox(sek, cls) { return '<div class="cmsp-pv ' + (cls || '') + '" data-pv="' + sek + '"><div class="cmsp-pvz"><div class="cmsp-pvs tq" aria-hidden="true" inert></div></div></div>'; }
  function pvRender(box, st, hk, lang, forceId, sek) {
    if (!box) return; sek = sek || box.dataset.pv0 || box.dataset.pv; if (!box.dataset.pv0) box.dataset.pv0 = box.dataset.pv; box.dataset.pv = sek;
    var z = $('.cmsp-pvz', box), s = $('.cmsp-pvs', box), keep = box.scrollTop;
    s.innerHTML = R.sectionHtml(sek, st, lang || 'pl', { forceId: forceId, base: A.base });
    $$('button[type=submit]', s).forEach(function (x) { x.type = 'button'; });
    var W = Math.max(390, Math.min(1200, window.innerWidth)), sc = box.clientWidth / W;
    s.style.width = W + 'px'; s.style.transform = 'scale(' + sc + ')'; z.style.height = Math.ceil(s.offsetHeight * sc) + 'px'; box.scrollTop = keep;
    var card = box.closest('.cmsp-pvc'); if (card) { $('[data-pvn]', card).textContent = sekNazwa(sek); $('[data-pvshow]', card).dataset.show = sek; }
    if (hk) {
      var el = s.querySelector('[data-f="' + hk + '"]') || (forceId ? s.querySelector('[data-item="' + forceId + '"]') : null) || s.querySelector('[data-item="' + hk.split('.')[0] + '"]');
      if (el) { el.classList.add('cmsp-hl'); var top = el.getBoundingClientRect().top - s.getBoundingClientRect().top; if (top < box.scrollTop + 10 || top > box.scrollTop + box.clientHeight - 60) box.scrollTop = Math.max(0, top - 40); }
    }
  }

  /* ---------- pola formularzy ---------- */
  function field(def, obj, hkBase) {
    var v = get(obj, def.k), hk = (hkBase || '') + def.k, id = 'cf' + (++P.uid), at = ' data-k="' + def.k + '" data-hk="' + hk + '"' + (def.sek ? ' data-sek="' + def.sek + '"' : '');
    var req = def.req ? ' <span class="cmsp-req" title="wymagane">*</span>' : '', hint = def.hint ? '<p class="cmsp-hint">' + esc(def.hint) + '</p>' : '';
    if (def.t === 'ml' || def.t === 'mla') {
      var on = '', off = '', offc = [];
      langs().forEach(function (j) {
        var val = (v && typeof v === 'object' ? v[j.kod] : (j.kod === 'pl' ? v : '')) || '', fid = id + j.kod;
        var h = '<div class="cmsp-ml"><label for="' + fid + '" title="' + esc(j.nazwa) + '">' + j.kod.toUpperCase() + '<span class="cmsp-vh"> — ' + esc(def.l) + '</span></label>' +
          (def.t === 'mla' ? '<textarea id="' + fid + '" rows="' + (def.rows || 4) + '"' + at + ' data-lang="' + j.kod + '">' + esc(val) + '</textarea>' : '<input type="text" id="' + fid + '"' + at + ' data-lang="' + j.kod + '" value="' + esc(val) + '">') + '</div>';
        if (j.wl || j.kod === 'pl') on += h; else { off += h; offc.push(j.kod.toUpperCase()); }
      });
      return '<div class="cmsp-f"><p class="cmsp-fl">' + esc(def.l) + req + '</p><div class="cmsp-mlg">' + on + '</div>' + (off ? '<details class="cmsp-off"><summary>' + offc.join(', ') + ' — wersja wyłączona</summary><div class="cmsp-mlg">' + off + '</div></details>' : '') + hint + '</div>';
    }
    if (def.t === 'bool') return '<div class="cmsp-f cmsp-chk"><label><input type="checkbox"' + at + (v ? ' checked' : '') + '> <span>' + esc(def.l) + '</span></label>' + hint + '</div>';
    if (def.t === 'sel') return '<div class="cmsp-f"><label class="cmsp-fl" for="' + id + '">' + esc(def.l) + '</label><select id="' + id + '"' + at + '>' + def.opts().map(function (o) { return '<option value="' + esc(o[0]) + '"' + (String(v == null ? '' : v) === String(o[0]) ? ' selected' : '') + '>' + esc(o[1]) + '</option>'; }).join('') + '</select>' + hint + '</div>';
    if (def.t === 'img') return '<div class="cmsp-f cmsp-imgf" data-imgf="' + def.k + '"><p class="cmsp-fl">' + esc(def.l) + req + '</p><div class="cmsp-imgr"><div class="cmsp-thumb">' + (v ? '<img src="' + esc(v) + '" alt="">' : '<span>brak zdjęcia</span>') + '</div><div class="cmsp-imgb">' +
      '<label class="cmsp-btn cmsp-up">Wgraj z dysku<input type="file" accept="image/*" class="cmsp-vh" data-up' + at + '></label><button type="button" class="cmsp-btn" data-imgdel' + at + '>Usuń zdjęcie</button>' +
      '<label class="cmsp-url" for="' + id + '">albo adres URL zdjęcia</label><input type="url" id="' + id + '"' + at + ' value="' + esc(/^data:/.test(v || '') ? '' : v || '') + '" placeholder="https://…"></div></div><p class="cmsp-hint">Zdjęcie zostanie automatycznie zmniejszone do 1600 px i zapisane jako JPEG.</p></div>';
    var type = def.type || (def.t === 'date' ? 'date' : def.t === 'time' ? 'time' : 'text');
    return '<div class="cmsp-f' + (type === 'date' || type === 'time' || type === 'color' ? ' cmsp-short' : '') + '"><label class="cmsp-fl" for="' + id + '">' + esc(def.l) + req + '</label><input type="' + type + '" id="' + id + '"' + at + ' value="' + esc(v == null ? '' : v) + '">' + hint + '</div>';
  }
  function fields(pola, obj, hkBase) { return pola.map(function (d) { return field(d, obj, hkBase); }).join(''); }
  function resizeImg(file, max) {
    return new Promise(function (res, rej) {
      var url = URL.createObjectURL(file), im = new Image();
      im.onload = function () { var s = Math.min(1, max / Math.max(im.width, im.height)), c = doc.createElement('canvas'); c.width = Math.round(im.width * s); c.height = Math.round(im.height * s); var x = c.getContext('2d'); x.fillStyle = '#fff'; x.fillRect(0, 0, c.width, c.height); x.drawImage(im, 0, 0, c.width, c.height); URL.revokeObjectURL(url); c.toBlob(function (b) { b ? res(b) : rej(new Error('Nie udało się przetworzyć zdjęcia.')); }, 'image/jpeg', 0.85); };
      im.onerror = function () { rej(new Error('Ten plik nie jest zdjęciem.')); }; im.src = url;
    });
  }
  function setImg(cont, k, url, el) {
    set(cont.__obj, k, url); var f = el.closest('[data-imgf]');
    $('.cmsp-thumb', f).innerHTML = url ? '<img src="' + esc(url) + '" alt="">' : '<span>brak zdjęcia</span>'; $('input[type=url]', f).value = /^data:/.test(url) ? '' : url;
    cont.__chg(el.dataset.hk, null, el.dataset.sek);
  }
  function onInput(e) {
    var el = e.target, k = el.dataset && el.dataset.k; if (!k || !el.closest('.cmsp-r')) return;
    var cont = el.closest('[data-form]'); if (!cont || !cont.__obj) return;
    if (el.type === 'file') {
      if (e.type !== 'change' || !el.files[0]) return; var f = el.files[0]; toast('Wgrywanie zdjęcia…');
      resizeImg(f, 1600).then(A.uploadImage).then(function (url) { setImg(cont, k, url, el); toast('Zdjęcie wgrane. Proszę zapisać zmiany.'); }).catch(function (er) { var dl = el.closest('dialog'), ep = dl && $('.cmsp-err', dl), msg = er.message || 'Nie udało się wgrać zdjęcia.'; if (ep) { ep.textContent = msg; ep.hidden = false; } toast(msg, true); }); el.value = ''; return;
    }
    if (el.type === 'checkbox') set(cont.__obj, k, el.checked);
    else if (el.dataset.lang) { var o = get(cont.__obj, k); if (!o || typeof o !== 'object') o = { pl: o || '' }; o[el.dataset.lang] = el.value; set(cont.__obj, k, o); }
    else { set(cont.__obj, k, el.value); if (el.type === 'url' && el.closest('[data-imgf]')) $('.cmsp-thumb', el.closest('[data-imgf]')).innerHTML = el.value ? '<img src="' + esc(el.value) + '" alt="">' : '<span>brak zdjęcia</span>'; }
    cont.__chg(el.dataset.hk, el.dataset.lang, el.dataset.sek, e.type);
  }
  function onHover(e) {
    var el = e.target.closest && e.target.closest('[data-hk]'); if (!el || !el.closest('.cmsp-r')) return;
    var cont = el.closest('[data-form]'); if (!cont || !cont.__hl) return;
    var key = el.dataset.hk + '|' + (el.dataset.lang || ''); if (cont.__last === key) return; cont.__last = key; cont.__hl(el.dataset.hk, el.dataset.lang, el.dataset.sek);
  }

  /* ---------- podstrona: formularz ---------- */
  function pageForm(m, key) {
    var F = FORMS[key]; P.draft = clone(A.state);
    m.innerHTML = head(F.nazwa, F.opis, F.sek) + pvCard(F.sek) + '<section class="cmsp-card"><div class="cmsp-form" data-form>' + fields(F.pola, P.draft) + '</div><p class="cmsp-err" role="alert" hidden></p>' +
      '<div class="cmsp-acts"><button type="button" class="cmsp-btn cmsp-pri" data-act="fsave">Zapisz zmiany</button><button type="button" class="cmsp-btn" data-act="fcancel">Anuluj zmiany</button><span class="cmsp-dirty" hidden>niezapisane zmiany</span></div></section>';
    var cont = $('[data-form]', m), box = $('.cmsp-pv', m);
    cont.__obj = P.draft;
    cont.__hl = function (hk, lang, sek) { pvRender(box, P.draft, hk, lang, null, sek || F.sek); };
    cont.__chg = function (hk, lang, sek) { P.dirty = true; $('.cmsp-dirty', m).hidden = false; cont.__hl(hk, lang, sek); };
    pvRender(box, P.draft);
  }
  function formSave() {
    var F = FORMS[P.page], m = $('#cmsp-main'), er = $('.cmsp-err', m), bad = '';
    (F ? F.pola : []).forEach(function (d) { if (d.req && !bad) { var v = get(P.draft, d.k); if (!String((v && typeof v === 'object' ? v.pl : v) || '').trim()) bad = 'Pole „' + d.l + '” (PL) jest wymagane.'; } });
    if (P.page === 'godziny') P.draft.godziny.dni.forEach(function (g, i) { if (g.otw && g['do'] <= g.od && !bad) bad = D.UI.pl.dni[i] + ': godzina zamknięcia musi być późniejsza niż otwarcia.'; });
    if (bad) { er.textContent = bad; er.hidden = false; return; }
    A.state = P.draft; P.dirty = false; commit('Zapisano zmiany.'); go(P.page, true);
  }

  /* ---------- podstrona: lista ---------- */
  function rowStatus(L, it) { if (it.ukryty) return ['ukryta', 'Ukryta']; if (L.timed) { var s = R.status(it); return [s, ST[s]]; } return ['', '']; }
  function pageList(m, key) {
    var L = LISTS[key], list = A.state[key] || (A.state[key] = []), h = head(L.nazwa, L.opis, L.sek) + pvCard(L.sek), view = list;
    if (L.timed) {
      var cnt = { wszystkie: list.length, aktywna: 0, zaplanowana: 0, zakonczona: 0, wstrzymana: 0 }; list.forEach(function (x) { cnt[R.status(x)]++; });
      h += '<div class="cmsp-filt" role="group" aria-label="Filtr">' + [['wszystkie', 'Wszystkie'], ['aktywna', 'Aktywne'], ['zaplanowana', 'Zaplanowane'], ['zakonczona', 'Zakończone'], ['wstrzymana', 'Wstrzymane']].map(function (f) { return '<button type="button" data-filt="' + f[0] + '" aria-pressed="' + (P.filter === f[0]) + '">' + f[1] + ' <span>' + cnt[f[0]] + '</span></button>'; }).join('') + '</div>';
      if (P.filter !== 'wszystkie') view = list.filter(function (x) { return R.status(x) === P.filter; });
    }
    h += '<section class="cmsp-card"><div class="cmsp-acts cmsp-actt"><button type="button" class="cmsp-btn cmsp-pri" data-add="' + key + '">+ Dodaj ' + L.jeden + '</button></div>';
    if (!view.length) h += '<p class="cmsp-empty">Brak pozycji. Kliknij „+ Dodaj ' + esc(L.jeden) + '”.</p>';
    else h += '<ul class="cmsp-rows">' + view.map(function (it, i) {
      var st = rowStatus(L, it), th = L.thumb && it[L.thumb] ? '<img src="' + esc(it[L.thumb]) + '" alt="">' : '<span>' + (i + 1) + '</span>';
      return '<li class="cmsp-row' + (it.ukryty ? ' cmsp-dim' : '') + '" data-id="' + it.id + '">' + (L.sort ? '' : '<div class="cmsp-ord"><button type="button" data-mv="-1" aria-label="Przesuń wyżej"' + (i === 0 ? ' disabled' : '') + '>▲</button><button type="button" data-mv="1" aria-label="Przesuń niżej"' + (i === view.length - 1 ? ' disabled' : '') + '>▼</button></div>') +
        '<div class="cmsp-th">' + th + '</div><div class="cmsp-rt"><strong>' + esc(cut(L.tytul(it), 90) || '(bez tytułu)') + '</strong><span>' + esc(L.info(it) || '') + '</span></div>' + (st[0] ? '<span class="cmsp-bdg cmsp-b-' + st[0] + '">' + st[1] + '</span>' : '') +
        '<div class="cmsp-ra"><button type="button" data-hide>' + (it.ukryty ? 'Pokaż' : 'Ukryj') + '</button><button type="button" data-dup>Duplikuj</button><button type="button" data-edit>Edytuj</button><button type="button" data-del>Usuń</button></div></li>';
    }).join('') + '</ul>';
    m.innerHTML = h + '</section>'; pvRender($('.cmsp-pv', m), A.state);
  }
  function validate(L, it) {
    for (var i = 0; i < L.pola.length; i++) {
      var d = L.pola[i], v = it[d.k]; if (!d.req) continue;
      if (d.t === 'img' && !v) return 'Zdjęcie jest wymagane.';
      if (!String((v && typeof v === 'object' ? v.pl : v) || '').trim()) return 'Pole „' + d.l + '”' + (d.t === 'ml' ? ' (PL)' : '') + ' jest wymagane.';
    }
    if (it.od && it['do'] && L.timed && it['do'] < it.od) return 'Data końca nie może być wcześniejsza niż data startu.';
    return L.validate ? L.validate(it) : '';
  }
  function sortList(key) { if (LISTS[key].sort) A.state[key].sort(function (a, b) { return a.data < b.data ? -1 : a.data > b.data ? 1 : 0; }); }

  /* ---------- okno edycji elementu listy ---------- */
  function modal(key, id) {
    var L = LISTS[key], list = A.state[key], isNew = !id, orig = null;
    list.forEach(function (x) { if (x.id === id) orig = x; });
    var item = isNew ? Object.assign({ id: key.slice(0, 2) + Date.now().toString(36) }, L.nowy()) : clone(orig);
    var d = doc.createElement('dialog'); d.className = 'cmsp-r cmsp-dlg cmsp-modal'; d.setAttribute('aria-labelledby', 'cmsp-mh');
    d.innerHTML = '<form novalidate><header><h2 id="cmsp-mh">' + (isNew ? 'Dodaj ' : 'Edytuj ') + esc(L.jeden) + '</h2><button type="button" class="cmsp-x" data-mx aria-label="Zamknij">×</button></header>' +
      '<div class="cmsp-m2"><div class="cmsp-mf"><div class="cmsp-form" data-form>' + fields(L.pola, item, item.id + '.') + '</div><p class="cmsp-err" role="alert" hidden></p></div>' +
      '<details class="cmsp-mp" open><summary>Podgląd na żywo — sekcja: ' + esc(sekNazwa(L.sek)) + '</summary>' + pvBox(L.sek, 'cmsp-pvm') + '<p class="cmsp-hint">Zmiany trafią na stronę dopiero po kliknięciu „' + (isNew ? 'Dodaj' : 'Zapisz zmiany') + '”.</p></details></div>' +
      '<footer>' + (isNew ? '' : '<button type="button" class="cmsp-btn cmsp-dng" data-mdel>Usuń</button>') + '<span></span><button type="button" class="cmsp-btn" data-mx>Anuluj</button><button type="submit" class="cmsp-btn cmsp-pri">' + (isNew ? 'Dodaj' : 'Zapisz zmiany') + '</button></footer></form>';
    doc.body.appendChild(d);
    var cont = $('[data-form]', d), box = $('.cmsp-pv', d);
    function tmp() { var s = Object.assign({}, A.state); s[key] = isNew ? (L.timed ? [item].concat(list) : list.concat([item])) : list.map(function (x) { return x.id === item.id ? item : x; }); return s; }
    cont.__obj = item;
    cont.__hl = function (hk, lang) { pvRender(box, tmp(), hk, lang, item.id); };
    cont.__chg = cont.__hl;
    function close() { d.close(); }
    d.addEventListener('close', function () { d.remove(); });
    d.addEventListener('click', function (e) {
      if (e.target.closest('[data-mx]')) return close();
      var del = e.target.closest('[data-mdel]');
      if (del) { if (del.dataset.sure) { A.state[key] = list.filter(function (x) { return x.id !== item.id; }); close(); commit('Usunięto.'); go(P.page, true); } else armDel(del); }
    });
    $('form', d).addEventListener('submit', function (e) {
      e.preventDefault(); var er = validate(L, item), ep = $('.cmsp-err', d);
      if (er) { ep.textContent = er; ep.hidden = false; return; }
      if (isNew) { if (L.timed) list.unshift(item); else list.push(item); } else A.state[key] = list.map(function (x) { return x.id === item.id ? item : x; });
      sortList(key); close(); commit(isNew ? 'Dodano. Zmiana jest już na stronie.' : 'Zapisano zmiany.'); go(P.page, true);
    });
    d.showModal(); if (window.innerWidth < 900) $('.cmsp-mp', d).open = false;
    pvRender(box, tmp(), null, 'pl', item.id);
    $('.cmsp-mp', d).addEventListener('toggle', function () { if (this.open) pvRender(box, tmp(), null, 'pl', item.id); });
  }
  function armDel(b) { var old = b.textContent; b.dataset.sure = '1'; b.textContent = 'Na pewno?'; b.classList.add('cmsp-dng'); setTimeout(function () { if (b.isConnected) { delete b.dataset.sure; b.textContent = old; if (!b.hasAttribute('data-mdel')) b.classList.remove('cmsp-dng'); } }, 3500); }

  /* ---------- pulpit ---------- */
  function pulpit(m) {
    var s = A.state, now = new Date(), stat = R.statusGodzin(s, 'pl', now), pa = R.aktywne(s.promocje).length, pz = s.promocje.filter(function (x) { return !x.ukryty && R.status(x) === 'zaplanowana'; }).length;
    function tile(pg, n, l, sub, cls) { return '<button type="button" class="cmsp-tile ' + (cls || '') + '" data-go="' + pg + '"><strong>' + n + '</strong><span>' + l + '</span>' + (sub ? '<small>' + sub + '</small>' : '') + '</button>'; }
    var h = '<header class="cmsp-ph"><div><h1>Dzień dobry!</h1><p>Co chcą Państwo dziś zmienić na stronie?</p></div><div class="cmsp-quick"><button type="button" class="cmsp-btn cmsp-pri" data-add="promocje">+ Promocja</button><button type="button" class="cmsp-btn cmsp-pri" data-add="magazyn">+ Aktualność</button><button type="button" class="cmsp-btn" data-go="godziny">Godziny</button></div></header>';
    h += '<div class="cmsp-tiles">' + tile('godziny', stat.otw ? 'Otwarte' : 'Zamknięte', 'Biuro teraz', esc(stat.otw ? stat.tekst.split(' · ')[1] || '' : (stat.kiedy ? 'otwieramy ' + stat.kiedy + ' o ' + stat.od : '')), stat.otw ? 'cmsp-t-ok' : 'cmsp-t-off') +
      tile('promocje', pa, 'Aktywne promocje', pz ? '+ ' + pz + ' zaplanowane' : '') + tile('magazyn', R.aktywne(s.magazyn).length, 'Wpisy Magazynu na stronie') + tile('uslugi', R.vis(s.uslugi).length, 'Formy zajęć') +
      tile('slajdy', R.vis(s.slajdy).filter(function (x) { return x.src; }).length, 'Zdjęcia w nagłówku') + tile('opinie', R.vis(s.opinie).length, 'Opinie') + '</div>';
    h += '<section class="cmsp-card"><h2>Harmonogram promocji i wpisów</h2>' + gantt() + '</section><section class="cmsp-card"><h2>Najbliższe 45 dni</h2>' + nadchodzace() + '</section>';
    h += '<section class="cmsp-card"><h2>Sekcje strony</h2><ul class="cmsp-thumbs">' + ['start'].concat(s.sekcje.map(function (x) { return x.id; })).map(function (id) {
      return '<li>' + pvBox(id, 'cmsp-pvt') + '<p>' + esc(sekNazwa(id)) + '</p><button type="button" class="cmsp-btn cmsp-sm" data-go="' + SEK2PAGE[id] + '">Edytuj tę sekcję</button></li>';
    }).join('') + '</ul></section>';
    m.innerHTML = h; $$('.cmsp-pvt', m).forEach(function (b) { pvRender(b, A.state, null, 'pl', null); });
  }
  function gantt() {
    var now = new Date(); now.setHours(0, 0, 0, 0); var start = addD(now, -30), T = 120, rows = [];
    function dd(s) { return Math.round((R.parseYmd(s) - start) / 864e5); }
    [['promocje', 'Promocja'], ['magazyn', 'Wpis']].forEach(function (k) {
      A.state[k[0]].forEach(function (x) {
        if (!x.od && !x['do']) return; var a = x.od ? dd(x.od) : 0, b = x['do'] ? dd(x['do']) + 1 : T, st = x.ukryty ? 'wstrzymana' : R.status(x);
        a = Math.max(0, Math.min(T, a)); b = Math.max(0, Math.min(T, b));
        rows.push('<div class="cmsp-gr"><span title="' + esc(tp(x.tytul)) + '">' + k[1] + ': ' + esc(cut(tp(x.tytul), 28)) + '</span><div class="cmsp-gt"><u></u>' + (b > a ? '<i class="cmsp-g-' + st + '" style="left:' + (a / T * 100) + '%;width:' + ((b - a) / T * 100) + '%" title="' + ST[st] + ': ' + (x.od || '…') + ' → ' + (x['do'] || 'bez końca') + '"></i>' : '') + '</div></div>');
      });
    });
    if (!rows.length) return '<p class="cmsp-empty">Brak promocji i wpisów z terminem. Kliknij „+ Promocja” lub „+ Aktualność”.</p>';
    var ticks = ''; for (var i = 0; i <= T; i++) { var d = addD(start, i); if (d.getDate() === 1) ticks += '<b style="left:' + (i / T * 100) + '%">' + d.toLocaleDateString('pl-PL', { month: 'short' }) + '</b>'; }
    return '<div class="cmsp-gantt"><div class="cmsp-gr cmsp-gh"><span></span><div class="cmsp-gt">' + ticks + '<em>dzisiaj</em></div></div>' + rows.join('') + '</div>' +
      '<p class="cmsp-leg"><i class="cmsp-g-aktywna"></i> aktywne <i class="cmsp-g-zaplanowana"></i> zaplanowane <i class="cmsp-g-zakonczona"></i> zakończone / wstrzymane</p>';
  }
  function nadchodzace() {
    var td = today(), lim = R.ymd(addD(new Date(), 45)), ev = [];
    [['promocje', 'promocja'], ['magazyn', 'wpis']].forEach(function (k) {
      A.state[k[0]].forEach(function (x) {
        if (x.ukryty || x.wstrzymana) return;
        if (x.od && x.od > td && x.od <= lim) ev.push([x.od, 'pojawi się ' + k[1] + ' „' + tp(x.tytul) + '”']);
        if (x['do'] && x['do'] >= td && x['do'] <= lim) ev.push([x['do'], 'ostatni dzień: ' + k[1] + ' „' + tp(x.tytul) + '”']);
      });
    });
    A.state.dniSpecjalne.forEach(function (x) { if (!x.ukryty && x.data >= td && x.data <= lim) ev.push([x.data, (x.nieczynne ? 'biuro nieczynne' : 'biuro czynne ' + R.fg(x.od) + '–' + R.fg(x['do'])) + (tp(x.opis) ? ' (' + tp(x.opis) + ')' : '')]); });
    if (!ev.length) return '<p class="cmsp-empty">Nic zaplanowanego na najbliższe 45 dni.</p>';
    ev.sort(function (a, b) { return a[0] < b[0] ? -1 : 1; });
    return '<ul class="cmsp-up45">' + ev.map(function (e) { var p = e[0].split('-'); return '<li><strong>' + (+p[2]) + '.' + p[1] + '</strong> – ' + esc(e[1]) + '</li>'; }).join('') + '</ul>';
  }

  /* ---------- sekcje strony: kolejność, widoczność, menu, etykiety ---------- */
  function sekcje(m) {
    var h = head('Sekcje strony', 'Kolejność sekcji na stronie i w menu (przeciągnij za uchwyt lub użyj strzałek), widoczność sekcji, widoczność w menu oraz etykiety i tytuły.', '');
    h += '<section class="cmsp-card"><ul class="cmsp-rows cmsp-seks">' + A.state.sekcje.map(function (s, i) {
      var auto = (s.id === 'promocje' || s.id === 'magazyn') && s.wid && !R.sekWidoczna(A.state, s.id, {});
      return '<li class="cmsp-row cmsp-sek' + (s.wid ? '' : ' cmsp-dim') + '" data-sid="' + s.id + '" draggable="true"><div class="cmsp-ord"><span class="cmsp-grip" aria-hidden="true" title="Przeciągnij">⠿</span><button type="button" data-smv="-1" aria-label="Przesuń wyżej"' + (i === 0 ? ' disabled' : '') + '>▲</button><button type="button" data-smv="1" aria-label="Przesuń niżej"' + (i === A.state.sekcje.length - 1 ? ' disabled' : '') + '>▼</button></div>' +
        pvBox(s.id, 'cmsp-pvt') + '<div class="cmsp-rt"><strong>' + esc(tp(s.etykieta)) + '</strong><span>#' + s.id + '</span></div>' +
        '<span class="cmsp-bdg cmsp-b-' + (!s.wid ? 'ukryta' : auto ? 'zaplanowana' : 'aktywna') + '">' + (!s.wid ? 'Ukryta' : auto ? 'Pusta — schowana automatycznie' : 'Widoczna') + '</span>' +
        '<div class="cmsp-ra"><label class="cmsp-sw"><input type="checkbox" data-swid' + (s.wid ? ' checked' : '') + '> na stronie</label><label class="cmsp-sw"><input type="checkbox" data-smenu' + (s.menu ? ' checked' : '') + '> w menu</label><button type="button" data-go="' + SEK2PAGE[s.id] + '">Edytuj tę sekcję</button><button type="button" data-show="' + s.id + '">Pokaż na stronie</button></div>' +
        '<details class="cmsp-sd"><summary>Etykieta w menu, tytuł i wprowadzenie</summary><div class="cmsp-form" data-form data-sform="' + i + '">' + fields([ML('etykieta', 'Etykieta w menu'), ML('tytul', 'Tytuł sekcji (H2)'), MLA('wstep', 'Wprowadzenie', { rows: 2 })], s, 'sek.' + s.id + '.') + '</div></details></li>';
    }).join('') + '</ul></section>';
    m.innerHTML = h;
    $$('.cmsp-pvt', m).forEach(function (b) { pvRender(b, A.state); });
    $$('[data-sform]', m).forEach(function (c) {
      var s = A.state.sekcje[+c.dataset.sform], box = $('.cmsp-pv', c.closest('li')); c.__obj = s;
      c.__hl = function (hk, lang) { pvRender(box, A.state, hk, lang, null, /etykieta$/.test(hk) ? 'naglowek' : s.id); };
      c.__chg = function (hk, lang, sek, type) { c.__hl(hk, lang); if (type === 'change') commit('Zapisano zmiany.'); };
    });
  }
  function moveSek(id, to) { var l = A.state.sekcje, i = l.findIndex(function (s) { return s.id === id; }); if (i < 0 || to < 0 || to >= l.length || to === i) return; var x = l.splice(i, 1)[0]; l.splice(to, 0, x); commit('Zmieniono kolejność sekcji.'); go('sekcje', true); }

  /* ---------- godziny ---------- */
  function godziny(m) {
    P.draft = clone(A.state); var g = P.draft.godziny, dn = D.UI.pl.dni;
    m.innerHTML = head('Godziny kontaktu', 'Kiedy biuro szkoły odpowiada na telefony i wiadomości. Na stronie pokazuje się status na żywo.', 'kontakt') + pvCard('kontakt') +
      '<section class="cmsp-card"><div class="cmsp-form" data-form><table class="cmsp-godz"><thead><tr><th>Dzień</th><th>Czynne</th><th>Od</th><th>Do</th></tr></thead><tbody>' + g.dni.map(function (d, i) {
        return '<tr><th scope="row">' + dn[i] + '</th><td><label class="cmsp-sw"><input type="checkbox" data-k="godziny.dni.' + i + '.otw" data-hk="godziny.dni.' + i + '"' + (d.otw ? ' checked' : '') + '><span class="cmsp-vh">' + dn[i] + ' — czynne</span></label></td><td><input type="time" aria-label="' + dn[i] + ' od" data-k="godziny.dni.' + i + '.od" data-hk="godziny.dni.' + i + '" value="' + d.od + '"></td><td><input type="time" aria-label="' + dn[i] + ' do" data-k="godziny.dni.' + i + '.do" data-hk="godziny.dni.' + i + '" value="' + d['do'] + '"><span class="cmsp-warn" hidden>zamknięcie musi być po otwarciu</span></td></tr>';
      }).join('') + '</tbody></table><div class="cmsp-acts"><button type="button" class="cmsp-btn cmsp-sm" data-act="cp5">Kopiuj poniedziałek na wt–pt</button><button type="button" class="cmsp-btn cmsp-sm" data-act="cp7">Kopiuj poniedziałek na cały tydzień</button></div>' +
      fields([MLA('godziny.uwaga', 'Uwaga pod godzinami (opcjonalna)', { rows: 2 }), BOOL('godziny.potwierdzone', 'Godziny są potwierdzone — przekaż je też Google (dane strukturalne)')], P.draft) + '</div><p class="cmsp-err" role="alert" hidden></p>' +
      '<div class="cmsp-acts"><button type="button" class="cmsp-btn cmsp-pri" data-act="fsave">Zapisz zmiany</button><button type="button" class="cmsp-btn" data-act="fcancel">Anuluj zmiany</button><span class="cmsp-dirty" hidden>niezapisane zmiany</span><button type="button" class="cmsp-btn" data-go="dniSpecjalne">Dni specjalne (' + A.state.dniSpecjalne.length + ')</button></div></section>';
    var cont = $('[data-form]', m), box = $('.cmsp-pv', m);
    function fresh() { $$('.cmsp-godz tbody tr', m).forEach(function (tr, i) { var d = g.dni[i], t = $$('input[type=time]', tr); t[0].disabled = t[1].disabled = !d.otw; $('.cmsp-warn', tr).hidden = !(d.otw && d['do'] <= d.od); }); }
    cont.__obj = P.draft; cont.__hl = function (hk, lang) { pvRender(box, P.draft, hk, lang); };
    cont.__chg = function (hk, lang) { P.dirty = true; $('.cmsp-dirty', m).hidden = false; fresh(); cont.__hl(hk, lang); };
    fresh(); pvRender(box, P.draft);
  }

  /* ---------- wersje językowe ---------- */
  function jezyki(m) {
    m.innerHTML = head('Wersje językowe', 'Wyłączona wersja znika ze strony (przełącznik języka, hreflang, mapa strony), ale jej treści zostają w panelu.', 'naglowek') +
      '<section class="cmsp-card"><ul class="cmsp-rows">' + langs().map(function (j) {
        var stat = D.STATIC_LANGS.indexOf(j.kod) >= 0;
        return '<li class="cmsp-row' + (j.wl || j.kod === 'pl' ? '' : ' cmsp-dim') + '"><div class="cmsp-th"><span>' + j.kod.toUpperCase() + '</span></div><div class="cmsp-rt"><strong>' + esc(j.nazwa) + '</strong><span>' + (j.kod === 'pl' ? 'adres: / · zawsze włączona' : stat ? 'adres: /' + j.kod + '/' : 'adres: /?lang=' + j.kod + ' (własny adres /' + j.kod + '/ wymaga ponownego zbudowania strony)') + '</span></div>' +
          '<span class="cmsp-bdg cmsp-b-' + (j.wl || j.kod === 'pl' ? 'aktywna">włączona' : 'ukryta">wyłączona') + '</span><div class="cmsp-ra">' + (j.kod === 'pl' ? '' : '<label class="cmsp-sw"><input type="checkbox" data-jwl="' + j.kod + '"' + (j.wl ? ' checked' : '') + '> włączona</label>') + (stat ? '' : '<button type="button" data-jdel="' + j.kod + '">Usuń</button>') + '</div></li>';
      }).join('') + '</ul></section><section class="cmsp-card"><h2>Dodaj kolejny język</h2><form class="cmsp-inl" data-jadd><div class="cmsp-f cmsp-short"><label class="cmsp-fl" for="cmsp-jk">Kod (2 litery, np. de)</label><input id="cmsp-jk" maxlength="2" required pattern="[A-Za-z]{2}"></div><div class="cmsp-f"><label class="cmsp-fl" for="cmsp-jn">Nazwa (np. Deutsch)</label><input id="cmsp-jn" required></div><button type="submit" class="cmsp-btn cmsp-pri">Dodaj język</button></form><p class="cmsp-hint">Po dodaniu języka w każdym polu tekstowym pojawi się dodatkowe pole. Puste tłumaczenia pokazują tekst polski.</p></section>';
  }

  /* ---------- hasło ---------- */
  function sila(p) { var s = 0; if (p.length >= 10) s++; if (p.length >= 14) s++; if (/[a-ząćęłńóśźż]/.test(p) && /[A-ZĄĆĘŁŃÓŚŹŻ]/.test(p)) s++; if (/\d/.test(p)) s++; if (/[^A-Za-z0-9ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/.test(p)) s++; return Math.min(4, s); }
  function haslo(m) {
    m.innerHTML = head('Zmiana hasła', 'Nowe hasło obowiązuje od razu. Minimum 10 znaków.', '') + '<section class="cmsp-card"><form class="cmsp-pass" data-pass novalidate>' +
      '<div class="cmsp-f"><label class="cmsp-fl" for="cmsp-p0">Obecne hasło</label><input type="password" id="cmsp-p0" autocomplete="current-password" required></div>' +
      '<div class="cmsp-f"><label class="cmsp-fl" for="cmsp-p1">Nowe hasło</label><input type="password" id="cmsp-p1" autocomplete="new-password" required minlength="10" aria-describedby="cmsp-sil"><div class="cmsp-meter"><i></i></div><p class="cmsp-hint" id="cmsp-sil">Siła hasła: —</p></div>' +
      '<div class="cmsp-f"><label class="cmsp-fl" for="cmsp-p2">Powtórz nowe hasło</label><input type="password" id="cmsp-p2" autocomplete="new-password" required></div>' +
      '<p class="cmsp-err" role="alert" hidden></p><div class="cmsp-acts"><button type="submit" class="cmsp-btn cmsp-pri">Zmień hasło</button></div></form></section>';
  }
  function demoPass() { return A.idb.get('demo-haslo').then(function (p) { return p || 'demo'; }); }

  /* ---------- kopia zapasowa ---------- */
  function kopia(m) {
    var exp = JSON.stringify({ _talqo: 1, data: new Date().toISOString(), tresci: A.state }, null, 1);
    m.innerHTML = head('Kopia zapasowa', 'Eksport i import wszystkich treści strony oraz automatyczne kopie ostatnich zapisów.', '') +
      '<section class="cmsp-card"><h2>Eksport</h2><div class="cmsp-f"><label class="cmsp-fl" for="cmsp-exp">Dane strony (JSON)</label><textarea id="cmsp-exp" rows="6" readonly>' + esc(exp) + '</textarea></div><div class="cmsp-acts"><button type="button" class="cmsp-btn" data-act="kcopy">Kopiuj do schowka</button><button type="button" class="cmsp-btn cmsp-pri" data-act="kdown">Pobierz plik .json</button></div></section>' +
      '<section class="cmsp-card"><h2>Import</h2><div class="cmsp-f"><label class="cmsp-fl" for="cmsp-imp">Wklej zawartość kopii</label><textarea id="cmsp-imp" rows="5"></textarea></div><div class="cmsp-acts"><label class="cmsp-btn cmsp-up">Wybierz plik .json<input type="file" accept=".json,application/json" class="cmsp-vh" data-kfile></label><button type="button" class="cmsp-btn cmsp-pri" data-act="kimp">Wczytaj kopię</button></div><p class="cmsp-err" role="alert" hidden></p></section>' +
      '<section class="cmsp-card"><h2>Automatyczne kopie (10 ostatnich zapisów)</h2><div data-kopie><p class="cmsp-empty">' + (A.mode === 'server' ? 'Wczytywanie…' : 'Dostępne po podłączeniu serwera (Cloudflare KV). W trybie demonstracyjnym proszę korzystać z eksportu do pliku.') + '</p></div></section>' +
      '<section class="cmsp-card"><h2>Przywróć treści początkowe</h2><p>Usuwa wszystkie zmiany i wraca do treści wpisanych przy budowie strony.</p><div class="cmsp-acts"><button type="button" class="cmsp-btn cmsp-dng" data-act="kreset" data-step="0">Przywróć treści początkowe</button></div></section>';
    if (A.mode === 'server') A.api('kopie').then(function (r) {
      var b = $('[data-kopie]', m); if (!b) return; var l = (r.data && r.data.kopie) || [];
      b.innerHTML = l.length ? '<ul class="cmsp-rows">' + l.map(function (k, i) { return '<li class="cmsp-row"><div class="cmsp-th"><span>' + (i + 1) + '</span></div><div class="cmsp-rt"><strong>' + new Date(k.data).toLocaleString('pl-PL') + '</strong><span>zapis treści</span></div><div class="cmsp-ra"><button type="button" data-krest="' + esc(k.id) + '">Przywróć</button></div></li>'; }).join('') + '</ul>' : '<p class="cmsp-empty">Brak kopii — pojawią się po pierwszym zapisie.</p>';
    });
  }
  function importuj(txt) {
    var er = $('#cmsp-main .cmsp-err'), d;
    try { d = JSON.parse(txt); } catch (e) { d = null; }
    if (!d || d._talqo !== 1 || !d.tresci || !Array.isArray(d.tresci.sekcje)) { er.textContent = 'To nie jest kopia zapasowa z tego panelu.'; er.hidden = false; return; }
    A.state = A.migrate(A.merge(D.DEFAULTS, d.tresci)); commit('Wczytano kopię. Zmiany są już na stronie.'); go('kopia', true);
  }

  /* ---------- zgłoszenia z formularzy ---------- */
  function zgloszenia(m) {
    m.innerHTML = head('Zgłoszenia', 'Zapytania z formularza „Poproś o termin” oraz zapisy do newslettera.', 'kontakt') + '<div class="cmsp-filt" role="group" aria-label="Rodzaj"><button type="button" data-ztab="z" aria-pressed="' + (P.zglTab === 'z') + '">Zapytania</button><button type="button" data-ztab="n" aria-pressed="' + (P.zglTab === 'n') + '">Newsletter</button></div><section class="cmsp-card" data-zgl><p class="cmsp-empty">Wczytywanie…</p></section>';
    var p = A.mode === 'server' ? A.api('zgloszenia').then(function (r) { return (r.data && r.data.zgloszenia) || []; }) : A.idb.get('zgloszenia').then(function (l) { return l || []; });
    p.then(function (l) {
      var b = $('[data-zgl]', m); if (!b) return; P.zgl = l;
      var v = l.filter(function (z) { return (z.typ === 'newsletter') === (P.zglTab === 'n'); });
      if (!v.length) { b.innerHTML = '<p class="cmsp-empty">Brak zgłoszeń.</p>'; return; }
      b.innerHTML = (P.zglTab === 'n' ? '<div class="cmsp-acts cmsp-actt"><button type="button" class="cmsp-btn" data-act="zcsv">Pobierz adresy (.csv)</button></div>' : '') + '<ul class="cmsp-rows">' + v.map(function (z) {
        return '<li class="cmsp-row cmsp-zg"><div class="cmsp-rt"><strong>' + esc(z.typ === 'newsletter' ? z.email : (z.imie || '') + ' · ' + z.email + (z.telefon ? ' · ' + z.telefon : '')) + '</strong><span>' + new Date(z.data).toLocaleString('pl-PL') + (z.typ === 'termin' ? ' · prośba o termin' : z.typ === 'pytanie' ? ' · pytanie' : '') + ' · ' + esc(z.lang || '') + '</span>' +
          (z.typ !== 'newsletter' ? '<p>' + esc([z.jezyk, z.forma, z.termin].filter(Boolean).join(' · ')) + '</p><p>' + esc(z.wiadomosc || '') + '</p>' : '') + '</div><div class="cmsp-ra">' + (z.typ !== 'newsletter' ? '<a class="cmsp-btn cmsp-sm" href="mailto:' + esc(z.email) + '">Odpisz</a>' : '') + '<button type="button" data-zdel="' + esc(z.id) + '">Usuń</button></div></li>';
      }).join('') + '</ul>';
    });
  }
  function download(name, txt, type) { var a = doc.createElement('a'); a.href = URL.createObjectURL(new Blob([txt], { type: type })); a.download = name; doc.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500); }

  /* ---------- logowanie ---------- */
  var demoTries = 0;
  function login(opener) {
    ensure(); if ($('.cmsp-login')) return;
    var d = doc.createElement('dialog'); d.className = 'cmsp-r cmsp-dlg cmsp-login'; d.setAttribute('aria-labelledby', 'cmsp-lh');
    d.innerHTML = '<form novalidate><h2 id="cmsp-lh">Panel administratora</h2>' + (A.mode === 'server' ? '' : '<p class="cmsp-demo">Tryb demonstracyjny — zmiany zapisują się tylko na tym komputerze. Hasło demonstracyjne: <strong>demo</strong></p>') +
      '<div class="cmsp-f"><label class="cmsp-fl" for="cmsp-pass">Hasło</label><input type="password" id="cmsp-pass" autocomplete="current-password" required></div><p class="cmsp-err" role="alert" hidden></p><div class="cmsp-acts"><button type="submit" class="cmsp-btn cmsp-pri">Zaloguj</button><button type="button" class="cmsp-btn" data-lx>Anuluj</button></div></form>';
    doc.body.appendChild(d);
    var er = $('.cmsp-err', d), inp = $('#cmsp-pass', d);
    function fail(msg) { er.textContent = msg; er.hidden = false; inp.value = ''; inp.focus(); }
    d.addEventListener('close', function () { d.remove(); if (!A.logged && opener && opener.isConnected) opener.focus(); });
    $('[data-lx]', d).addEventListener('click', function () { d.close(); });
    $('form', d).addEventListener('submit', function (e) {
      e.preventDefault(); if (!inp.value) return fail('Proszę wpisać hasło.');
      var done = function () { A.logged = true; d.close(); A.render(); openPanel(); };
      if (A.mode !== 'server') { if (demoTries >= 5) return fail('Zbyt wiele nieudanych prób. Proszę odświeżyć stronę i spróbować ponownie.'); return demoPass().then(function (p) { if (inp.value === p) done(); else { demoTries++; fail('Nieprawidłowe hasło.'); } }); }
      A.api('login', { method: 'POST', json: { haslo: inp.value } }).then(function (r) { if (r.ok) done(); else fail(r.data.blad || 'Nie udało się zalogować.'); }).catch(function () { fail('Brak połączenia z serwerem.'); });
    });
    d.showModal(); inp.focus();
  }
  A.openPanel = function (opener) { if (A.logged) openPanel(); else login(opener); };

  /* ---------- zdarzenia panelu ---------- */
  doc.addEventListener('input', onInput); doc.addEventListener('change', onInput);
  doc.addEventListener('focusin', onHover); doc.addEventListener('mouseover', onHover);
  doc.addEventListener('input', function (e) { if (e.target.id === 'cmsp-p1') { var s = sila(e.target.value), mt = $('#cmsp .cmsp-meter i'); mt.style.width = (s * 25) + '%'; mt.className = 'cmsp-m' + s; $('#cmsp-sil').textContent = 'Siła hasła: ' + ['bardzo słabe', 'słabe', 'średnie', 'dobre', 'bardzo dobre'][s]; } });
  doc.addEventListener('change', function (e) {
    var el = e.target; if (!el.closest || !el.closest('#cmsp')) return; var li = el.closest('[data-sid]'), s;
    if (el.hasAttribute('data-swid') || el.hasAttribute('data-smenu')) { s = R.findSek(A.state, li.dataset.sid); if (el.hasAttribute('data-swid')) s.wid = el.checked; else s.menu = el.checked; commit(el.hasAttribute('data-swid') ? (el.checked ? 'Sekcja jest widoczna.' : 'Sekcja ukryta.') : (el.checked ? 'Dodano do menu.' : 'Usunięto z menu.')); go('sekcje', true); }
    if (el.dataset.jwl) { langs().forEach(function (j) { if (j.kod === el.dataset.jwl) j.wl = el.checked; }); commit(el.checked ? 'Wersja językowa włączona.' : 'Wersja językowa wyłączona — treści zostały w panelu.'); go('jezyki', true); }
    if (el.hasAttribute('data-kfile') && el.files[0]) { var fr = new FileReader(); fr.onload = function () { $('#cmsp-imp').value = fr.result; }; fr.readAsText(el.files[0]); }
  });
  doc.addEventListener('submit', function (e) {
    var f = e.target; if (!f.closest || !f.closest('#cmsp')) return;
    if (f.hasAttribute('data-jadd')) {
      e.preventDefault(); var k = $('#cmsp-jk').value.trim().toLowerCase(), n = $('#cmsp-jn').value.trim();
      if (!/^[a-z]{2}$/.test(k) || !n) return toast('Proszę podać dwuliterowy kod i nazwę języka.', true);
      if (langs().some(function (j) { return j.kod === k; })) return toast('Ten język już jest na liście.', true);
      langs().push({ kod: k, nazwa: n, wl: true }); commit('Dodano język. Proszę uzupełnić tłumaczenia.'); go('jezyki', true);
    }
    if (f.hasAttribute('data-pass')) {
      e.preventDefault(); var er = $('.cmsp-err', f), p0 = $('#cmsp-p0').value, p1 = $('#cmsp-p1').value, p2 = $('#cmsp-p2').value;
      var fail = function (t) { er.textContent = t; er.hidden = false; }, ok = function () { toast('Hasło zostało zmienione.'); go('haslo', true); };
      if (p1.length < 10) return fail('Nowe hasło musi mieć co najmniej 10 znaków.'); if (p1 !== p2) return fail('Powtórzone hasło jest inne niż nowe hasło.');
      if (A.mode !== 'server') return demoPass().then(function (p) { if (p0 !== p) return fail('Obecne hasło jest nieprawidłowe.'); A.idb.set('demo-haslo', p1).then(ok); });
      A.api('haslo', { method: 'POST', json: { obecne: p0, nowe: p1 } }).then(function (r) { if (r.ok) ok(); else fail(r.data.blad || 'Nie udało się zmienić hasła.'); });
    }
  });
  doc.addEventListener('click', function (e) {
    var root = e.target.closest('#cmsp'); if (!root) return; var el, li, key = P.page, list;
    if ((el = e.target.closest('[data-go]'))) return go(el.dataset.go);
    if ((el = e.target.closest('[data-show]'))) return show(el.dataset.show);
    if ((el = e.target.closest('[data-add]'))) { if (P.page !== el.dataset.add) go(el.dataset.add); return modal(el.dataset.add); }
    if ((el = e.target.closest('[data-filt]'))) { P.filter = el.dataset.filt; return go(P.page, true); }
    if ((el = e.target.closest('[data-ztab]'))) { P.zglTab = el.dataset.ztab; return go('zgloszenia', true); }
    if ((el = e.target.closest('[data-smv]'))) { li = el.closest('[data-sid]'); var i = A.state.sekcje.findIndex(function (s) { return s.id === li.dataset.sid; }); return moveSek(li.dataset.sid, i + (+el.dataset.smv)); }
    if ((el = e.target.closest('[data-jdel]'))) { if (!el.dataset.sure) return armDel(el); A.state.ustawienia.jezyki = langs().filter(function (j) { return j.kod !== el.dataset.jdel; }); commit('Usunięto język z listy.'); return go('jezyki', true); }
    if ((el = e.target.closest('[data-krest]'))) { if (!el.dataset.sure) return armDel(el); return A.api('kopie/przywroc', { method: 'POST', json: { id: el.dataset.krest } }).then(function (r) { if (!r.ok) return toast(r.data.blad || 'Nie udało się przywrócić kopii.', true); A.state = A.migrate(A.merge(D.DEFAULTS, r.data.tresci)); A.render(); nav(); toast('Przywrócono kopię.'); go('kopia', true); }); }
    if ((el = e.target.closest('[data-zdel]'))) {
      if (!el.dataset.sure) return armDel(el); var id = el.dataset.zdel;
      var p = A.mode === 'server' ? A.api('zgloszenia?id=' + encodeURIComponent(id), { method: 'DELETE' }) : A.idb.get('zgloszenia').then(function (l) { return A.idb.set('zgloszenia', (l || []).filter(function (z) { return z.id !== id; })); });
      return p.then(function () { toast('Usunięto.'); go('zgloszenia', true); });
    }
    if ((li = e.target.closest('.cmsp-row[data-id]')) && LISTS[key]) {
      list = A.state[key]; var it = null, idx = -1; list.forEach(function (x, n) { if (x.id === li.dataset.id) { it = x; idx = n; } }); if (!it) return;
      if (e.target.closest('[data-edit]')) return modal(key, it.id);
      if (e.target.closest('[data-hide]')) { it.ukryty = !it.ukryty; commit(it.ukryty ? 'Ukryto. Pozycja została w panelu.' : 'Pokazano na stronie.'); return go(key, true); }
      if (e.target.closest('[data-dup]')) { var c = clone(it); c.id = key.slice(0, 2) + Date.now().toString(36); var tk = LISTS[key].pola[0].k; if (c[tk] && typeof c[tk] === 'object' && c[tk].pl) c[tk].pl += ' (kopia)'; list.splice(idx + 1, 0, c); sortList(key); commit('Zduplikowano.'); return go(key, true); }
      if ((el = e.target.closest('[data-del]'))) { if (!el.dataset.sure) return armDel(el); A.state[key] = list.filter(function (x) { return x !== it; }); commit('Usunięto.'); return go(key, true); }
      if ((el = e.target.closest('[data-mv]'))) {
        var rows = $$('.cmsp-row[data-id]', li.parentNode), ri = rows.indexOf(li), other = rows[ri + (+el.dataset.mv)]; if (!other) return;
        var j = list.findIndex(function (x) { return x.id === other.dataset.id; }); list[idx] = list[j]; list[j] = it; commit('Zmieniono kolejność.'); go(key, true);
        var b = $('.cmsp-row[data-id="' + it.id + '"] [data-mv="' + el.dataset.mv + '"]'); if (b && !b.disabled) b.focus(); return;
      }
    }
    if ((el = e.target.closest('[data-act]'))) {
      var a = el.dataset.act, g;
      if (a === 'close') return closePanel();
      if (a === 'logout') { var fin = function () { A.logged = false; closePanel(); A.render(); }; return A.mode === 'server' ? A.api('logout', { method: 'POST' }).then(fin, fin) : fin(); }
      if (a === 'fsave') return formSave();
      if (a === 'fcancel') { toast('Przywrócono poprzednią wersję.'); return go(P.page, true); }
      if (a === 'cp5' || a === 'cp7') { g = P.draft.godziny.dni; for (var n = 1; n < (a === 'cp5' ? 5 : 7); n++) g[n] = clone(g[0]); A.state.godziny = clone(P.draft.godziny); commit('Skopiowano godziny i zapisano.'); return go('godziny', true); }
      if (a === 'kcopy') { var ta = $('#cmsp-exp'); ta.select(); (navigator.clipboard ? navigator.clipboard.writeText(ta.value) : Promise.reject()).then(function () { toast('Skopiowano do schowka.'); }, function () { try { doc.execCommand('copy'); toast('Skopiowano do schowka.'); } catch (x) { toast('Proszę skopiować zaznaczony tekst ręcznie (Ctrl+C).', true); } }); return; }
      if (a === 'kdown') return download('talqo-kopia-' + today() + '.json', $('#cmsp-exp').value, 'application/json');
      if (a === 'kimp') return importuj($('#cmsp-imp').value);
      if (a === 'kreset') { var st = +el.dataset.step; if (st === 0) { el.dataset.step = 1; el.textContent = 'Na pewno? Kliknij ponownie'; return; } if (st === 1) { el.dataset.step = 2; el.textContent = 'Tak, usuń wszystkie zmiany i przywróć treści początkowe'; return; } A.state = clone(D.DEFAULTS); commit('Przywrócono treści początkowe.'); return go('kopia', true); }
      if (a === 'zcsv') return download('talqo-newsletter-' + today() + '.csv', 'email;data;jezyk\n' + (P.zgl || []).filter(function (z) { return z.typ === 'newsletter'; }).map(function (z) { return [z.email, z.data, z.lang].join(';'); }).join('\n'), 'text/csv');
    }
  });
  /* przeciąganie sekcji */
  var dragId = null;
  doc.addEventListener('dragstart', function (e) { var li = e.target.closest && e.target.closest('.cmsp-sek'); if (!li) return; dragId = li.dataset.sid; e.dataTransfer.effectAllowed = 'move'; try { e.dataTransfer.setData('text/plain', dragId); } catch (x) { } li.classList.add('cmsp-drag'); });
  doc.addEventListener('dragover', function (e) { var li = e.target.closest && e.target.closest('.cmsp-sek'); if (!li || !dragId) return; e.preventDefault(); $$('.cmsp-over').forEach(function (x) { x.classList.remove('cmsp-over'); }); li.classList.add('cmsp-over'); });
  doc.addEventListener('drop', function (e) { var li = e.target.closest && e.target.closest('.cmsp-sek'); if (!li || !dragId) return; e.preventDefault(); var to = A.state.sekcje.findIndex(function (s) { return s.id === li.dataset.sid; }), id = dragId; dragId = null; moveSek(id, to); });
  doc.addEventListener('dragend', function () { dragId = null; $$('.cmsp-drag,.cmsp-over').forEach(function (x) { x.classList.remove('cmsp-drag', 'cmsp-over'); }); });
  var rsT; window.addEventListener('resize', function () { clearTimeout(rsT); rsT = setTimeout(function () { var d = $('#cmsp'); if (d && !d.hidden && !P.dirty && !$('.cmsp-modal')) go(P.page, true); }, 300); });

  A.panel = { go: go, open: openPanel, close: closePanel };
  A.start();
})();
