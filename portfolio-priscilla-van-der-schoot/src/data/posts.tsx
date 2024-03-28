const posts = [
  {
    id: '1',
    title: "Een Duik in mijn Stage: Eerste drie dagen",
    image: "../assets/stagew1.jpg",
    introduction: "Mijn eerste week op mijn stageplaats is vol nieuwe uitdagingen en leermomenten. Ik ben al halverwege mijn eerste week op deze plek, waar ik mijn passie voor technologie kan combineren met praktijkervaring.",
    tags: ["meeting", "onderzoek"],
    date: "2024-02-07",
    eersteParagraaf: "Mijn eerste indrukken waren ronduit positief. Mijn mentor, Patrick, verwelkomde me hartelijk en nam de tijd om me te oriënteren binnen het bedrijf. Na het doorlopen van de nodige installaties, was ik klaar om meer te leren over het project waaraan ik zou werken: het creëren van een tweedehands website. Een boeiend project, dat we vanaf het begin kunnen opbouwen. Eenmaal ingewijd in het project, begon ik met het verkennen van AWS. Samen met mijn medestagiairs Milan en Kevin kregen we de kans om ons te verdiepen in de installatie en het gebruik van AWS, wat een essentieel onderdeel zou worden van ons project.",
    tweedeParagraaf: "Op de tweede dag van mijn stage dook ik meteen in het verder uitwerken van de bestaande user stories. Daarnaast voerde ik verschillende onderzoeken uit, waaronder het onderzoeken van API's in Node.js, authenticatieprocessen en het gebruik van AWS Lambda. Het was een uitdagende taak, vooral omdat er maar weinig documentatie beschikbaar was over AWS Lambda. Vandaag draaide alles om het onderzoek naar de mogelijkheid om AWS CDK in ons project te integreren. Helaas bleek het niet haalbaar te zijn voor ons project om AWS CDK te gebruiken. Daarna hadden we een belangrijke vergadering waarin we de voortgang van de user stories bespraken. Dit bood een waardevolle gelegenheid om feedback te ontvangen en te verwerken.",
    slot: "Al met al kijk ik terug op een buitengewoon productieve week, waarin ik niet alleen nieuwe technische vaardigheden heb opgedaan, maar ook waardevolle inzichten heb verworven in de praktijk van softwareontwikkeling. Ik kijk uit naar de komende weken van mijn stage, vol nieuwe uitdagingen."
  },
  {
    id: '2',
    title: "Verdere Verkenning: Tweede Helft van Week 1 op Stage",
    image: "/img/beach-sunset.jpg",
    introduction: "Deze week op mijn stageplek blijft me verrassen met nieuwe uitdagingen en kansen om te leren. Als ik terugkijk op de tweede helft van de week, ben ik enthousiast over de nieuwe technologieën die ik heb ontdekt en de ervaringen die ik heb opgedaan.",
    tags: ["workshop", "testproject"],
    date: "2024-02-09",
    eersteParagraaf: "Donderdag stond in het teken van een boeiende workshop over Maestro en Appium. Tijdens de workshop leerde ik niet alleen over de verschillen tussen Maestro en Appium, maar kreeg ik ook de kans om praktisch aan de slag te gaan. Het was verhelderend om te zien hoe beide tools verschillen in hun aanpak en functionaliteiten.Een van de hoogtepunten van de dag was het leren werken met Maestro. Met behulp van de workshop kreeg ik inzicht in de mogelijkheden en functionaliteiten van Maestro, en kon ik experimenteren met het maken van testautomatiseringsscenario's. Het was een waardevolle ervaring die mijn begrip van testautomatisering verder heeft verdiept.",
    tweedeParagraaf: "Op vrijdag namen we een cruciale beslissing met betrekking tot ons project. Na zorgvuldige overweging hebben we besloten om AWS CDK niet te gebruiken vanwege de hogere kosten die eraan verbonden zijn. In plaats daarvan ben ik begonnen met het verkennen van AWS SAM voor mijn testproject. Deze keuze kwam voort uit een grondige kostenanalyse en de vereisten van ons project. We zijn ervan overtuigd dat dit de beste strategie is om onze doelen te bereiken binnen een zo laag mogelijk budget.",
    slot: "Deze tweede helft van de week was gevuld met nieuwe tools en belangrijke beslissingen. Ik ben dankbaar voor de kansen die ik heb gekregen om mijn vaardigheden uit te breiden en nieuwe technologieën te verkennen. Ik kijk uit naar de voortzetting van mijn stageavontuur en naar de uitdagingen die nog komen gaan."
  },
  {
    id: '3',
    title: "Verdieping en Vooruitgang: Tweede Week op Stage",
    image: "/img/mountain.jpg",
    introduction: "Terwijl mijn stage zich in de tweede week bevindt, blijf ik me onderdompelen in nieuwe taken en uitdagingen. Deze week stond in het teken van verdere verkenning van databasetechnologieën, projectmanagement en samenwerking met mijn collega's.",
    tags: ["meeting", "testproject", "onderzoek","backend project"],
    date: "2024-02-17",
    eersteParagraaf: "Op maandag heb ik me verdiept in het verschil tussen MongoDB en DynamoDB, twee veelgebruikte databases in de wereld van softwareontwikkeling. Het was fascinerend om de unieke kenmerken en toepassingen van beide databases te ontdekken. Daarna heb ik de rest van de dag gewerkt aan mijn testproject, waarbij ik mijn vaardigheden in de praktijk heb gebracht. Op dinsdag heb ik mijn testproject verder uitgewerkt. Daarnaast heb ik in Jira de user stories opgesplitst in Frontend en Backend, waardoor de planning en uitvoering van ons project verder gestructureerd zijn. Op woensdag heb ik me gericht op het verwerken van de userstories voor de Backend, terwijl ik ook een flowchart heb gemaakt om de werking van Jira te visualiseren, inclusief de benodigde hoeveelheid reviews en andere processen. Daarna hebben we alle userstories waar we mee kunnen beginnen op de TO DO-lijst van onze backlog gezet tijdens de backlog meeting dat helpt ons om onze taken georganiseerd te houden.",
    tweedeParagraaf: "Donderdag was gewijd aan het maken van een workflowchart voor ons project, samen met verdere werkzaamheden aan het testproject, met name op het gebied van filtering. Bovendien hadden we een belangrijke meeting over de coding conventions met mijn medestagiaires, wat bijdroeg aan een consistente codebase en een betere samenwerking binnen het team. Op vrijdag begonnen ik met het eerste ticket van ons project: de Searchbar. Ik werktte aan het implementeren van functionaliteit om actieve items op trefwoord te kunnen zoeken, waarmee we een belangrijke mijlpaal bereikten in ons project.",
    slot: "Deze tweede week van mijn stage was een periode van verdieping en vooruitgang. Ik heb mijn kennis uitgebreid, mijn vaardigheden verfijnd en waardevolle bijdragen geleverd aan ons project. Ik kijk uit naar de komende weken, waarin ik nog meer kan leren en groeien."
  },
  {
    id: '4',
    title: "Voortgang en Verfijning: Derde Week op Stage",
    image: "/img/forrest.jpg",
    introduction: "In de derde week van mijn stage heb ik me verder verdiept in verschillende aspecten van softwareontwikkeling en heb ik gewerkt aan het verfijnen van ons project. Deze week stond in het teken van het definiëren van onze werkwijze, onderzoek naar functionaliteiten en het verbeteren van de kwaliteit van onze codebase.",
    tags: ["meeting", "unit test", "onderzoek", "backend project"],
    date: "2024-02-23",
    eersteParagraaf: "De week begon met het onderzoeken en documenteren van de Definition of Done (DoD) en Definition of Ready (DoR), belangrijke richtlijnen binnen ons ontwikkelproces. Daarnaast heb ik onderzoek gedaan naar de zoekfunctionaliteit en unit tests geschreven om de kwaliteit van onze code te waarborgen. Ik heb de zoekfunctionaliteit op trefwoord voltooid en gebruikers kunnen nu persoonlijke items raadplegen. Dit was een belangrijke mijlpaal in ons project en een bevredigend resultaat van mijn harde werk. De Definition of Done en Definition of Ready zijn verder uitgewerkt om duidelijke en haalbare doelen voor ons project te stellen. Ik heb ook commentaar verwerkt van Pull Requests en gewerkt aan het verbeteren van de functionaliteit om persoonlijke items te raadplegen.",
    tweedeParagraaf: "Op een bepaald moment ondervonden we problemen met de Common layer die onze tests braken. Ik heb deze problemen aangepakt en gefixeerd, terwijl ik ook heb gewerkt aan het verbeteren van de functionaliteit om persoonlijke items te raadplegen. Daarnaast heb ik commentaar verwerkt van Pull Requests en nieuwe documentatie geschreven voor het zoeken van items op trefwoord. Ik heb gewerkt aan het terugkrijgen van eigen items en het verder ontwikkelen van de functionaliteit om te filteren op status. Ook hebben we de zoekfunctionaliteit op trefwoord in items hersteld en unit tests gefixeerd. Daarnaast hadden we een belangrijke meeting over het sorteren en filteren van gegevens, waarbij we besloten hebben om dit buiten de database te laten plaatsvinden om de prestaties te verbeteren.",
    slot: "Deze derde week van mijn stage was gevuld met voortgang en verfijning. Ik heb mijn vaardigheden verder ontwikkeld, problemen opgelost en waardevolle bijdragen geleverd aan ons project. Ik kijk uit naar de komende weken, waarin ik nog meer kan leren en bijdragen aan ons team."
  },
  {
    id: '5',
    title: " Innovatie en Implementatie: Vierde Week op Stage",
    image: "/img/beach-sunset.jpg",
    introduction: "De vierde week van mijn stage was een periode van voortdurende ontwikkeling en verdieping. Hieronder volgt een overzicht van de belangrijkste activiteiten en prestaties gedurende deze week:",
    tags: ["onderzoek", "unit test", "meeting", "refactor"],
    date: "2022-03-01",
    eersteParagraaf: "Het voltooien van functionaliteit voor het ophalen en filteren van eigen items op basis van status. Het omzetten van DynamoDB-tabellen naar JSON-bestanden voor testdoeleinden. Onderzoek en documentatie van Mocha als testing framework voor backend testing. Verkenning en documentatie van PlayWright als frontend testing framework. Onderzoek naar frontend testing frameworks voor verdere ontwikkeling van onze applicatie.",
    tweedeParagraaf: "Het oplossen van gebroken unit tests als gevolg van nieuwe functies voor het sorteren. Refactoring van code voor het ophalen en filteren van eigen items op basis van status. Opzetten van testcases voor het ophalen van alle actieve items. Onderzoek naar event testing om de kwaliteit van de code te waarborgen. Het afronden van de documentatie voor het ophalen en zoeken van eigen items op trefwoord. Verwerking van feedback op functionaliteit voor het ophalen van eigen items. Het oplossen van problemen met ESLint om een consistent codeformaat te handhaven.",
    slot: "Deze week was een drukke maar productieve tijd, waarin ik mijn technische vaardigheden kon uitbreiden en bijdragen aan de vooruitgang van ons project. Ik kijk uit naar wat de volgende week zal brengen in mijn stage-ervaring."
  },
  {
    id: '6',
    title: "Voorbereidingen en Prestaties: Vijfde Week op Stage",
    image: "/img/mountain.jpg",
    introduction: "De vijfde week van mijn stage was een periode van intense voorbereidingen en succesvolle prestaties. Hieronder vind je een samenvatting van de belangrijkste gebeurtenissen en mijlpalen van deze week.",
    tags: ["unit test", "refactor", "Automated test", "backend project"],
    date: "2024-03-08",
    eersteParagraaf: "Deze week begon met een belangrijke meeting met mijn collega Milan om de details van de aankomende demo te bespreken. We werkten samen om ervoor te zorgen dat alles gereed was voor een succesvolle presentatie. Een hoogtepunt van de week was de presentatie van onze demo. We hebben ons werk gepresenteerd en belangrijke feedback ontvangen die ons zal helpen bij het verbeteren van onze applicatie. Tot slot heb ik alle opmerkingen van pull requests verwerkt en de statuswijzigingsfunctionaliteit afgerond en ter beoordeling ingediend. We hadden ook een sprintplanning om onze doelen voor de komende periode vast te stellen.",
    tweedeParagraaf: "Ik heb me gericht op het schrijven en documenteren van event testen voor het ophalen van actieve items. Dit was een cruciale stap om ervoor te zorgen dat onze applicatie correct functioneert in verschillende scenario's. Vervolgens heb ik me beziggehouden met het voltooien van de refactoring voor het ophalen van actieve items en heb ik een nieuw ticket opgenomen om de functionaliteit voor het aanpassen van de itemstatus aan te pakken. Om onze codekwaliteit te verbeteren, hebben we een workshop over clean code bijgewoond. Hier hebben we alle regels van clean code doorgenomen en hebben we een praktische oefening gedaan om onze code te verbeteren.",
    slot: "De vijfde week van mijn stage was een drukke maar vruchtbare tijd, waarin ik belangrijke stappen heb gezet in de ontwikkeling van ons project. Ik kijk uit naar de voortzetting van mijn werk en verdere groei in de komende weken."
  },
  {
    id: '7',
    title: "Voortdurende Verbeteringen: Zesde Week op Stage",
    image: "/img/forrest.jpg",
    introduction: "In de zesde week van mijn stage heb ik me gericht op het verbeteren en verfijnen van verschillende aspecten van ons project. Hieronder volgt een overzicht van de belangrijkste activiteiten en prestaties gedurende deze week.",
    tags: ["refactor"],
    date: "2024-03-15",
    eersteParagraaf: "De Development Branch is opgeruimd om een overzichtelijke en georganiseerde codebase te behouden. Ik heb de code voor het wijzigen van de status van items opnieuw onder de loep genomen en geoptimaliseerd voor een betere prestatie en leesbaarheid. Ik heb een code review uitgevoerd en vervolgens de Enum gerefactored om de codebasis verder te verbeteren. Ook heb ik gewerkt aan het refactoreren van de code voor het wijzigen van de status van items. Documentatie is geschreven voor de gerefactoreerde code, en ik heb gewerkt aan het implementeren van error handling voor het wijzigen van de status. Een pull request hiervoor staat open.",
    tweedeParagraaf: "Ik heb feedback verwerkt die ontvangen is op pull requests met betrekking tot het wijzigen van de status van items. Event tests zijn geschreven om te controleren of het correct opvragen van detailinformatie van items goed werkt. Ik heb me beziggehouden met het verbeteren van de imports van de common layers, omdat deze problemen veroorzaakten bij het testen. Hierbij heb ik gezocht naar alternatieve oplossingen. Op het moment er nog geen gevonden.",
    slot: "De zesde week van mijn stage was een periode van voortdurende verbeteringen en optimalisaties. Ik ben tevreden met de vooruitgang die we hebben geboekt en kijk uit naar verdere ontwikkelingen in de komende weken."
  },
  {
    id: '8',
    title: "Stappen naar Stabiliteit: Zevende Week op Stage",
    image: "/img/forrest.jpg",
    introduction: "De zevende week van mijn stage was een periode van consolidatie en vooruitgang. Hieronder volgt een overzicht van de belangrijkste ontwikkelingen en activiteiten gedurende deze week.",
    tags: ["refactor", "unit test", "Automated test"],
    date: "2024-06-11",
    eersteParagraaf: "De resterende to-do's zijn geëvalueerd en verwerkt, waarbij prioriteit werd gegeven aan belangrijke taken en optimalisaties. Ik heb verschillende Pull Requests gemerged om de voortgang van het project te waarborgen en recente wijzigingen te integreren. Samen met mijn collega Milan heb ik zijn code voor het raten van een koper doorgenomen om een beter begrip van de implementatie te krijgen. Daarnaast heb ik deelgenomen aan verschillende meetings, waaronder sprintplanning, het oplossen van mergeconflicten en besprekingen over de aanpak van automatiseringstests.",
    tweedeParagraaf: "De unit testen zijn herschreven om voornamelijk de verschillende layers van de applicatie te testen, waardoor de codebase beter wordt gedekt. Ik heb gewerkt aan het refactoren van de API tests voor het opvragen van details van items, om zo de testbaarheid en betrouwbaarheid te verbeteren. Er is onderzoek gedaan naar mogelijkheden om automated tests te verbeteren, met als doel het elimineren van hardcoded waarden en het vergroten van de robuustheid van de tests. Ik heb testdata gegenereerd voor automatiseringstests en een package genaamd 'nicknames' ontwikkeld, gericht op het creëren van een veilige werkomgeving voor onze ontwikkelingsomgeving.",
    slot: "De zevende week van mijn stage was een tijd van nauwe samenwerking, technische vooruitgang en reflectie. Ik ben optimistisch over de voortgang van ons project en kijk uit naar verdere ontwikkelingen in de komende weken."
  }
];

export default posts;