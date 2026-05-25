import GrainOverlay from '../../components/ui/GrainOverlay'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import Hero from '../../components/sections/Hero'
import Timeline from '../../components/sections/Timeline'
import Postcards from '../../components/sections/Postcards'
import Playlist from '../../components/sections/Playlist'
import Letter from '../../components/sections/Letter'
import WantedPosters from '../../components/sections/WantedPosters'
import { AudioProvider } from '../../contexts/AudioContext'

export default function GrandeRotaPage() {
  return (
    <AudioProvider>
      <GrainOverlay />
      <Navbar />
      <main className="pt-[68px]">
        <Hero />
        <Timeline />
        <Postcards />
        <Playlist />
        <Letter />
        <WantedPosters />
      </main>
      <Footer />
    </AudioProvider>
  )
}
