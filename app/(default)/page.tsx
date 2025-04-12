export const metadata = {
  title: 'Résidence Le Lorraine - Hébergements Courte Durée et Cures Thermales',
  description: 'Présentation des logements, tout ce que vous devez savoir avant de réserver votre logement pour une cure à La Bourboule',
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
      {/* <Blog /> */}
      <Cta />
    </>
  )
}
