import { Link } from 'react-router-dom';
import posts from '../data/posts';
import img from '../assets/stagew1.jpg';

const Home = () => {
  // Sort all posts by date in descending order
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Get the latest three posts
  const latestPosts = sortedPosts.slice(0, 3);

  return (
    <div className="container mx-auto mt-6 px-4" style={{ paddingBottom: '80px' }}> {/* Add paddingBottom to create space for the footer */}
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Portfolio Priscilla Van der Schoot</h2>
        <h2 className="text-3xl font-semibold mb-4">Stage</h2>
        <h4 className="text-m mx-20 mb-4">
          De afsluitende stage vormt een cruciaal onderdeel van de opleiding, waarbij de student wordt voorbereid op de overgang naar de arbeidsmarkt. Tijdens deze periode staat de ontwikkeling van verschillende vaardigheden en competenties centraal, met een focus op web- en applicatieontwikkeling.

          De belangrijkste doelstellingen van deze stage zijn divers en omvatten onder meer het overwegen van verschillende oplossingen in samenwerking met het team en de opdrachtgever, het uitwerken van technische ontwerpen op basis van functionele analyses, en het ontwikkelen van (deel)applicaties met oog voor herbruikbaarheid en efficiëntie. Daarnaast dient de student te werken volgens de projectmethodiek van de werkplek, de juiste tools te gebruiken voor deployment, en projecten te realiseren volgens geldende standaarden en afspraken binnen de organisatie.

          Beveiliging en testen van applicaties spelen een belangrijke rol, waarbij de student oog heeft voor beveiligingsvoorschriften en geschikte testen uitvoert om de goede werking van applicaties te waarborgen. Het beoordelen van testresultaten en het doorvoeren van aanpassingen op basis daarvan, alsook het systematisch opleveren van gedetailleerde documentatie behoren tot de vereisten.

          Daarnaast wordt van de student verwacht dat hij of zij nieuwe ICT-technieken beoordeelt op bruikbaarheid, deontologische regels naleeft, functionele vereisten voor geïntegreerde projecten opstelt, en zowel zelfstandig als met beperkte ondersteuning projecten realiseert. Interpretatie van testresultaten, identificatie van behoeften en fouten, en aanpassingen van bestaande applicaties zijn eveneens belangrijke taken.
        </h4>
        <h2 className="text-3xl font-semibold mb-4">Doel</h2>
        <h4 className="text-m mx-20 mb-4">
          Op deze blogwebsite zal ik regelmatig reflecteren op mijn stage-ervaring en de stappen die ik neem tijdens mijn ontwikkeling. Door terug te kijken op de afgelopen periode en mijn eigen werk te evalueren, wil ik niet alleen mijn persoonlijke groei vastleggen, maar ook mijn mentor en begeleider in staat stellen om mijn voortgang te volgen. Met dit portfolio als leidraad zal ik mijn ervaringen delen en inzichten bieden in mijn dagelijkse activiteiten, uitdagingen en successen tijdens mijn stage. Hierdoor krijgen mijn mentor en begeleider een dieper inzicht in mijn werk en kunnen ze mij indien nodig van gerichte feedback voorzien.
        </h4>
        <h2 className="text-3xl font-semibold mb-4">Laatste nieuwtjes</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {latestPosts.map((post, index) => (
              <Link key={index} to={`/post/${post.id}`}>
                <div className="max-w-sm h-full rounded overflow-hidden shadow-lg bg-gray-300"> {/* Change background color to a slightly darker gray */}
                  <img className="w-full" src={img} alt={post.title} />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{post.title}</div>
                    <p className="text-gray-700 text-base">{post.introduction}</p>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"> {/* Keep tags color matching the navbar */}
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
