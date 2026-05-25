interface OrnamentDividerProps {
  icon?: string
  className?: string
}

export default function OrnamentDivider({
  icon = '⚓',
  className = '',
}: OrnamentDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="h-px w-16 bg-gold" />
      <span className="text-gold text-lg">{icon}</span>
      <div className="h-px w-16 bg-gold" />
    </div>
  )
}
