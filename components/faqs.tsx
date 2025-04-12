export default function Faqs() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-b border-gray-100">
          {/* Section header */}
          <div className="pb-12 md:pb-20">
            <h2 className="h2 font-cabinet-grotesk">Toutes les questions sur les logements</h2>
          </div>
          {/* Columns */}
          <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-cabinet-grotesk font-bold">Comment puis-je régler les logements ?</h4>
                <p className="text-gray-500">Vous pouvez régler directement sur Airbnb pour vos courts séjours. Pour votre cure de 21 jours, vous devrez régler par chèque ou virement 180€ d'arrhes afin de confirmer votre réservation. 100€ de caution qui vous seront rendus à la fin de votre séjours (non encaissés si donnés par chèques) et enfin un chèque ou virement du solde de votre séjour le jour de votre arrivée.</p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-cabinet-grotesk font-bold">Où se situent les logements ?</h4>
                <p className="text-gray-500">L'immeuble se trouve au 301 boulevard Georges Clémenceau à La Bourboule. Il est littéralement situé à 220 mètre de l'entrée des termes. Et au rez-de-chaussé se trouve le cabinet du Dr Rithy EAP, ORL et médecin de cure thermale.</p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-cabinet-grotesk font-bold">Je viens en transports en commun, vais-je devoir marcher longtemps ?</h4>
                <p className="text-gray-500">Bien que la commune de La Bourboule ne dispose malheureusement plus de ligne de train,
                  <a
                    className="mx-1 text-gray-500 decoration-blue-500 decoration-2 underline-offset-2 hover:underline hover:cursor-pointer"
                    href="https://www.sancy.com/fr/fiche/commerce-et-service/ligne-p46-clermont-ferrand-la-bourboule-le-mont-dore-la-bourboule_TFO6364670/"
                    target="_blank"
                  >
                    la ligne de bus P46
                  </a>
                  dessert la commune depuis la ville de Clermont-Ferrand. L'arrêt de bus se situe littéralement au pieds de l'immeuble. Seul une dizaine de mètre vous sépare donc de votre logement.</p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-cabinet-grotesk font-bold">J'arrive, tard, tôt, dans la nuit, quelqu'un pourra-t-il m'ouvrir ?</h4>
                <p className="text-gray-500">Le logement est en accès autonome. Un code pour une boîte à clef vous sera fourni avant votre arrivé vous permettant ainsi d'arriver dans votre logement quand vous le désirez. Toutefois, sachez que la commune de La Bourboule éteint les lumières municipales à 23h chaque jour. Nous vous conseillons donc d'arriver de jour pour un meilleur confort. Enfin, votre logement (et donc les clefs) ne seront prêt qu'à partir de 16h le jour de votre arrivée.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-cabinet-grotesk font-bold">Vos logements ont-ils le wifi ?</h4>
                <p className="text-gray-500">A mon grand regret, non. Je travaille dur avec les opérateurs pour raccorder l'immeuble, mais à ce jour, les logements n'ont toujours pas le wifi. Je fais tout mon possible pour que cela arrive le plus vite possible.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-cabinet-grotesk font-bold">Disposez-vous d'un accès PMR ?</h4>
                <p className="text-gray-500">Malheureusement non, l'immeuble n'est pas encore accessible au personnes à mobilité réduite. Le rez-de-chaussée de l'immeuble se trouvant tout de même à 10 marches au dessus du niveau de la rue.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-cabinet-grotesk font-bold">J'arrive avec mon propre linge de maison, que dois-je prévoir ?</h4>
                <p className="text-gray-500">Un drap housse en 140x190, deux taies d'oreillers standards, un drap simple, une serviette de bain, un tapis de bain, et un torchon. Les couvertures sont fournies.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-cabinet-grotesk font-bold">Que se passe-t-il si j'ai oublié de régler les arrhes ou la caution avant mon arrivée ?</h4>
                <p className="text-gray-500">Je suis désolé, mais en raison d'un certains nombre de malins pensant profiter d'un logement à moindre coût, nous ne pourrons vous laisser accéder à votre logement sans ces deux chèques ou virement (à votre convenance). Pensez-donc bien à nous les faire parvenir avant votre arrivée.</p>
              </div>
            </div>
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-cabinet-grotesk font-bold">Quels sont les horaires d'arrivées et de départ ?</h4>
                <p className="text-gray-500">Vous pourrez arrivés dans votre logement à partir de 16h le premier jour. Nous vous demanderons d'en partir avant 10h le jour de votre départ. Ce, afin que l'équipe de la conciergerie puisse s'assurer du bon état du logement entre deux voyageurs.</p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-cabinet-grotesk font-bold">Puis-je ajouter des options pendant mon séjour ?</h4>
                <p className="text-gray-500">Bien sûr ! Que vous veniez pour un court séjour via Airbnb, ou pour une cure en réservant en direct, vous pouvez toujours demandé une prestation de ménage, du linge de maison, et bien d'autres services encore, au près de la conciergerie.</p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-cabinet-grotesk font-bold">Quel sont les équipements du logement ?</h4>
                <p className="text-gray-500">Tous nos logements sont équipés des élements suivants : </p>
                <ul className="text-gray-500 space-y-3 grow">
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    Télévision
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    Kitchnette avec frigo, plaques de cuissons, micro-ondes, cafetière, bouilloire, grille-pain et toute la vaisselle nécessaire
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    Salle de bain privée avec baignoire.
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    Lit en 140x190
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    Placards et meuble pour ranger vos affaires
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    Chauffage
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    Fer et table à repasser.
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-cabinet-grotesk font-bold">Je dois allez voir le médecin de cure est-loin ?</h4>
                <p className="text-gray-500">Le cabinet est littéralement dans le même immeuble ! Il vous faudra simplement passer par l'extérieur.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-cabinet-grotesk font-bold">Combien de personnes peuvent loger dans un appartement ?</h4>
                <p className="text-gray-500">Les logements sont des studios prévus pour 2 personnes pour des raisons de normes de sécurités. Toutefois, il est possible à chaque étage de réunir deux studios en un seul appartement et ainsi réunir jusqu'à 4 personnes si vous le souhaitez. Envoyez moi une demande d'information ou de réservation en me précisant cette information.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-cabinet-grotesk font-bold">Ai-je la possibilité d'avoir une facture pour ma mutuelle ?</h4>
                <p className="text-gray-500">Bien sûr, vous êtes curiste, vous recevrez donc par courrier ou email votre facture avec la mention "acquittée" pour votre mutuelle. Pour les courts séjours via Airbnb, vous trouverez votre facture directement via votre application Airbnb.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-cabinet-grotesk font-bold">L'arrivée est autonome, mais quand et comment me seront envoyé le code de ma boîte à clef ?</h4>
                <p className="text-gray-500">Sous réserve que vous soyez à jour de vos règlements (arrhes et caution ou règlement via Airbnb), les codes de vos boîtes à clefs vous seront envoyés 2 jours avant votre arrivée.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-cabinet-grotesk font-bold">Où dois-je vous faire parvenir les chèques ou les virements pour le règlement du logement ?</h4>
                <p className="text-gray-500">Pas de panique, les informations de paiements vous seront données lors de nos échanges et selon votre préférence, par courrier, email ou téléphone. Au cas où vous souhaiteriez ajouter une option durant votre séjour, vous pourrez voir directement avec la conciergerie. Encore une fois, je vous transmettrai ses coordonnées lors de votre réservation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}