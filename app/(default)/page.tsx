export const metadata = {
  title: 'Résidence Le Lorraine | Logements Curistes & Randonnée à La Bourboule',
  description: 'Séjournez confortablement à Résidence Le Lorraine pour votre cure thermale ou escapade randonnée à La Bourboule. Réservation rapide et facile !',
}

import Hero from '@/components/hero'
import Description from '@/components/description'
import Inspiration from '@/components/inspiration'
import Carousel from '@/components/carousel'
import Pricing from '@/components/pricing'
import Faqs from '@/components/faqs'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Description />
      <Inspiration />
      <Carousel />
      <Pricing />
      <Faqs />
      <Cta />
    </>
  )
}
