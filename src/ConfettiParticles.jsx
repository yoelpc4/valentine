import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadConfettiPreset } from '@tsparticles/preset-confetti'
import { loadHeartShape } from '@tsparticles/shape-heart'
import { useMediaQuery } from '@react-hook/media-query'

export default function ConfettiParticles() {
  const [isInitialized, setIsInitialized] = useState(false)

  const isMobile = useMediaQuery('only screen and (max-width: 599px)')

  const isTablet = useMediaQuery('only screen and (min-width: 600px)')

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },
      particles: {
        shape: {
          type: 'heart',
        },
        color: {
          value: ['#FF0000', '#FF69B4', '#FF1493', '#DB7093'],
        },
      },
      emitters: [
        {
          position: {
            x: 0,
            y: 30,
          },
          rate: {
            quantity: isMobile ? 1 : isTablet ? 3 : 5,
            delay: 0.15,
          },
          particles: {
            move: {
              direction: 'top-right',
            },
          },
        },
        {
          position: {
            x: 100,
            y: 30,
          },
          rate: {
            quantity: isMobile ? 1 : isTablet ? 3 : 5,
            delay: 0.15,
          },
          particles: {
            move: {
              direction: 'top-left',
            },
          },
        },
      ],
      preset: 'confetti',
    }),
    [isMobile, isTablet]
  )

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadConfettiPreset(engine)

      await loadHeartShape(engine)

      setIsInitialized(true)
    })
  }, [])

  return isInitialized ? (
    <Particles
      options={options}
      className='translate-z-0 fixed h-screen w-full'
    />
  ) : (
    <></>
  )
}
