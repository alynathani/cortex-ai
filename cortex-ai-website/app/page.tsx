import HeroSection from "@/components/HeroSection"

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata = {
  title: 'Cortex AI - Home'
}


export default function Home() {
  return (
    <>
      <div>
        <HeroSection />
      </div>
    </>
  )
}

