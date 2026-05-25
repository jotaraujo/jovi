import type { ReactNode } from 'react'

interface PolaroidFrameProps {
  caption?: string
  children: ReactNode
  className?: string
  rotate?: string
}

export default function PolaroidFrame({
  caption,
  children,
  className = '',
  rotate = 'rotate-0',
}: PolaroidFrameProps) {
  return (
    <div
      className={`bg-white p-3 pb-8 shadow-[4px_4px_16px_rgba(44,26,14,0.25)] inline-block ${rotate} ${className}`}
    >
      {children}
      {caption && (
        <p className="font-handwrite text-text text-center mt-2 text-sm px-1">
          {caption}
        </p>
      )}
    </div>
  )
}
