import HeroSection from "@/components/HeroSection"
import EveryoneSection from "@/components/EveryoneSection"

export const metadata = {
  title: 'Cortex AI - Home'
}

export default function Home() {
  return (
    <>
      <div>
        <HeroSection />

        <EveryoneSection />
      </div>
    </>
  )
}

