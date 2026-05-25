import { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react'
import { playlist } from '../constants/content'

type Track = typeof playlist[0]

interface AudioContextType {
  currentTrack: Track
  isPlaying: boolean
  togglePlay: (trackId?: string) => void
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

export function AudioProvider({ children }: { children: ReactNode }) {
  // Começamos sempre com a primeira música da playlist
  const [currentTrack, setCurrentTrack] = useState<Track>(playlist[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const togglePlay = (trackId?: string) => {
    // Se não passar ID (ex: clicar no play do Hero), usa a música atual. Se passar, busca na playlist.
    const targetTrackId = trackId || currentTrack.id
    const targetTrack = playlist.find(t => t.id === targetTrackId) || currentTrack

    // Clicou na mesma música que já está selecionada
    if (currentTrack.id === targetTrack.id) {
      if (isPlaying) {
        audioRef.current?.pause()
        setIsPlaying(false)
      } else {
        audioRef.current?.play()
        setIsPlaying(true)
      }
    } else {
      // Clicou numa música diferente
      setCurrentTrack(targetTrack)
      setIsPlaying(true)
      
      if (audioRef.current && targetTrack.audioSrc) {
        audioRef.current.src = targetTrack.audioSrc
        audioRef.current.play()
      }
    }
  }

  // Monitora o fim da música para trocar o ícone para "play" novamente
  useEffect(() => {
    const audioEl = audioRef.current
    if (!audioEl) return

    const handleEnded = () => setIsPlaying(false)
    audioEl.addEventListener('ended', handleEnded)

    return () => audioEl.removeEventListener('ended', handleEnded)
  }, [])

  // Inicializa o src na primeira vez que o site carrega
  useEffect(() => {
    if (audioRef.current && currentTrack.audioSrc) {
      audioRef.current.src = currentTrack.audioSrc
    }
  }, []) // Roda apenas uma vez na montagem

  return (
    <AudioContext.Provider value={{ currentTrack, isPlaying, togglePlay }}>
      {/* O player "verdadeiro" fica escondido aqui, e todos os componentes controlam ele */}
      <audio ref={audioRef} preload="metadata" />
      {children}
    </AudioContext.Provider>
  )
}

// Hook customizado para facilitar o uso nos componentes
export function useAudio() {
  const context = useContext(AudioContext)
  if (!context) {
    throw new Error('useAudio deve ser usado dentro de um AudioProvider')
  }
  return context
}