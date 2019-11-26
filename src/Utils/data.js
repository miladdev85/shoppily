export default [
  {
    question: "Varför är sidan seg vid första inläsning?",
    answer:
      'Back-enden och CMS verktyget är hostad på Heroku. På grund av att jag använder deras gratis version, kan den initiala laddningen av sidan ta en stund eftersom servern är i "sleep mode" och svarar inte på anrop på direkten.'
  },
  {
    question: "Berätta om detta projekt",
    answer:
      "Efter Movify projektet ville jag fördjupa mig mer inom CSS och SCSS. CSS har varit något som hamnat lite i skymundan under min utvecklingsresa men i och med detta projekt känner jag mig mycket tryggare med det. Sidan är något enklare än Movify men CSS delen är mer komplicerat och har åstadkommits utan CSS Framework förutom enstaka tillfällen där jag använt mig av Bootstrap Grid för mobila vyer."
  },
  {
    question: "Vad har varit den stora utmaningen?",
    answer:
      "Att tänka ut en design med hög användarupplevelse som fungerar bra på mobilen och på större skärmar. Sedan har kombinationen av ett Headless CMS + MongoDB + Heroku + Netlify haft sina egna utmaningar, men det har varit intressant och lärorikt."
  },
  {
    question: "Hur känner du inför React då?",
    answer:
      "Jag känner mig trygg med React och tycker att min grund är väldigt stadig och att jag är redo att ta nästa kliv i min utveckling."
  },
  {
    question: "Vad är nästa steg?",
    answer:
      'Nästa steg är att bygga en bloggportal där jag kommer att använda mig av React Hooks, Context, Router samt Firestore. Vidare vill jag utöka mitt egna bibliotek med "self contained components" som kan återanvändas i kommande projekt.'
  },
  {
    question: "Något speciellt du vill skryta om i detta projekt?",
    answer:
      'Jag är nöjd med användandet av Context samt formulärerna på "Logga in" sidan. Jag tycker att formulärerna ser bra ut och har bra funktionalitet samt att de är enkla att återanvända i andra projekt.'
  },
  {
    question: "Berätta om plattformen för denna sida",
    answer:
      "CMS är av typen Headless och heter Strapi. Jag tyckte det lät intressant att ha ett eget CMS verktyg för att hantera produkterna och satte mig därför in i dokumentationen för Strapi. Detta visar att jag kan läsa dokumentation och ge mig ut på okänd mark ;) Databasen består av MongoDB och back-enden är hostad på Heroku. På grund av att jag använder deras gratis version, kan den initiala laddningen av sidan ta en stund. Front-enden är deployad via Netlify."
  },
  {
    question: "Hur har du hanterat utmaningar som uppstått?",
    answer:
      "Genom Google, YouTube och att läsa dokumentation. Jag är en visuell person och lär mig väldigt snabbt när jag t.ex. tittar på ett kort YouTube klipp om ämnet ifråga."
  },
  {
    question: '"Mer info" knappen gör ingenting?',
    answer:
      "Jag kände inte att det skulle medföra något ytterligare i detta projekt och lämnade den för tillfället för att ta mig an nästa projekt. I framtiden kanske knappen leder till en modal eller ny sida för mer information om produkten."
  }
];
