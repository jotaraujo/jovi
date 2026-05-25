import { useDaysSince } from '../../hooks/useDaysSince'

export default function DayCounter() {
  const days = useDaysSince()
  return (
    <p className="font-serif text-warm text-4xl md:text-5xl">
      {days} dias navegando juntos
    </p>
  )
}
