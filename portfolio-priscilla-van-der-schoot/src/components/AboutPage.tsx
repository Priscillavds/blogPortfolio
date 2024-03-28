import map from '../assets/map.png'
import me from '../assets/me.jpg'

const About = () => {
  return (
    <div className="container mx-auto mt-6" style={{ paddingBottom: '80px' }}>
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Over Mij</h2>
        <img className="w-70 h-80 rounded-full mx-auto mb-4" src={me} alt="profilephoto" />

        <p className="text-lg mx-20 mb-4">Ik ben Priscilla Van der Schoot, een gedreven student met een passie voor programmeren en technologie. Momenteel studeer ik aan de AP Hogeschool in Antwerpen, waar ik het Graduaat Programmeren volg. Mijn reis in de wereld van technologie begon met een solide basis in programmeertalen zoals C#, HTML/CSS en React, die ik verder heb uitgebreid met ervaring in tools zoals Git en MySQL.
          Naast mijn studie ben ik actief betrokken geweest bij verschillende activiteiten, waaronder het geven van karatelessen en vrijwilligerswerk bij Verberd Verijdt, waar ik activiteiten begeleidde voor mensen met dementie. Deze ervaringen hebben niet alleen mijn sociale en leiderschapsvaardigheden versterkt, maar hebben ook mijn passie voor teamwork en samenwerking versterkt.
          Als een doorzetter met een positieve instelling ben ik vastbesloten om voortdurend te groeien en te leren. Mijn doel is om mijn technische vaardigheden te blijven ontwikkelen en te streven naar uitmuntendheid in alles wat ik doe. Ik ben altijd op zoek naar nieuwe uitdagingen en kansen om mijn horizon te verbreden.
        </p>
      </div>
      
      <div className="mt-8 text-center">
        <h2 className="text-3xl font-bold mb-4">b.ignited</h2>
        <p className="text-lg mx-20 mb-4">
          Bij b.ignited zijn we gespecialiseerd in TestOps & Automation. Dit betekent dat we ons richten op het automatiseren van testprocessen binnen softwareontwikkeling om de kwaliteit van applicaties te waarborgen.
          Ons team produceert hoogwaardige, no-nonsense software die wordt geautomatiseerd door middel van testing wizards. We helpen onze klanten bij het produceren van kwalitatief hoogstaande software door hen te voorzien van de juiste Test Automation-oplossingen.
          Of het nu gaat om het automatiseren van testcases, het implementeren van TestOps-processen of het optimaliseren van het testproces als geheel, wij streven ernaar om de beste partner te zijn voor onze klanten op het gebied van het kwalificeren van hun softwareproducten.
        </p>
        <img className="w-halve mx-auto mb-4" src={map} alt="map of address b.ignited" />
        <h2 className="text-3xl font-bold mb-4">stage</h2>
        <p className="text-lg mx-20 mb-4">
          Als stagiair bij b.ignited ben ik betrokken bij een opwindend project waarbij we een tweedehands website ontwikkelen die intern door Cronos zal worden gebruikt. In dit project vervul ik de rol van zowel ontwikkelaar als tester, wat me een unieke kans biedt om zowel technische implementaties te verkennen als de kwaliteit van het eindproduct te waarborgen.
          Een van de kernaspecten van dit project is het gebruik van AWS Lambda in combinatie met AWS SAM (Serverless Application Model). Dit stelt ons in staat om op een efficiënte en schaalbare manier te werken aan de ontwikkeling van de website. Samen met andere stagiaires zijn we begonnen met het opbouwen van deze site, waarbij we gebruikmaken van moderne technologieën en best practices in de industrie.
          Om het ontwikkelproces gestructureerd aan te pakken, zijn we begonnen met het opstellen van userstories. Door deze userstories een voor een te realiseren en te testen, kunnen we een iteratieve aanpak hanteren en voortdurend waarde toevoegen aan het project. Dit stelt ons in staat om snel feedback te verzamelen en eventuele knelpunten tijdig aan te pakken.
          Met nog 72 dagen te gaan tot het einde van mijn stage, heb ik een duidelijk tijdsbestek om me te concentreren op het behalen van onze doelstellingen en het succesvol afronden van dit project. Ik kijk ernaar uit om mijn vaardigheden verder te ontwikkelen, nieuwe uitdagingen aan te gaan en bij te dragen aan het succes van dit opwindende project bij b.ignited.
        </p>
      </div>
    </div>
  );
}

export default About;
