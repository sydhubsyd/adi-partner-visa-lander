// The short animated "thank you, here's what happens next" clip on /thank-you/.
//
// Silent by design: it autoplays, and browsers only allow autoplay when muted, so every
// word in it is on screen. That also means the page text around it already carries the
// same message for screen readers; the video is a reinforcement, never the only copy.
//
// It is NOT given the autoPlay attribute. Autoplay starts from an effect instead, and
// only when the visitor has not asked for reduced motion, so nothing plays before
// React has mounted.
//
// Source files: public/video/thank-you.{webm,mp4} and the poster frame, rendered at
// 1280x720, 24s. WebM first because it is the smaller file where it is supported.
import { useEffect, useRef } from 'react'

export default function ThankYouVideo({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    // play() rejects if the browser still blocks it (data saver, low power mode).
    // The poster and controls remain, so there is nothing to recover.
    video.play().catch(() => {})
  }, [])

  return (
    <video
      ref={ref}
      className={`aspect-video w-full rounded-xl bg-navy shadow-lg ${className}`}
      poster="/video/thank-you-poster.jpg"
      muted
      playsInline
      controls
      preload="metadata"
      width={1280}
      height={720}
      aria-label="Short video: thank you, and what happens next"
    >
      <source src="/video/thank-you.webm" type="video/webm" />
      <source src="/video/thank-you.mp4" type="video/mp4" />
    </video>
  )
}
