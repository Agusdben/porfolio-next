import { colors } from '@/styles/theme'
import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'

type img = {
  src: string
  alt: string
}

interface Props {
  images: img[]
}

const ImageCarousel = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [currentImage, setCurrentImage] = useState<img>(images[currentIndex])

  const handleNextImg = useCallback(() => {
    const nextIndex = currentIndex + 1
    if (nextIndex > images.length - 1) {
      setCurrentIndex(0)
      return
    }
    setCurrentIndex(nextIndex)
  }, [currentIndex, images])

  const handlePrevImg = () => {
    const prevIndex = currentIndex - 1
    if (prevIndex < 0) {
      setCurrentIndex(images.length - 1)
      return
    }
    setCurrentIndex(prevIndex)
  }

  useEffect(() => {
    setCurrentImage(images[currentIndex])
  }, [currentIndex, images])

  useEffect(() => {
    if (images.length === 1) {
      return
    }
    const interval = setInterval(() => {
      handleNextImg()
    }, 13000)
    return () => {
      clearInterval(interval)
    }
  }, [images, handleNextImg])

  return (
    <>
      <div>
        <div className='picture'>
          <Image
            fill
            alt={currentImage.alt}
            src={`/images/projects/${currentImage.src}`}
          />
        </div>
      </div>
      {images.length > 1 && (
        <div className='controls'>
          <button onClick={handlePrevImg} type='button'>
            <FaLessThan />
          </button>
          <div className='indexes'>
            {images.map((img, i) => (
              <button
                type='button'
                onClick={() => setCurrentIndex(i)}
                key={img.src}
                className={`custom-index ${
                  i === currentIndex ? 'current' : ''
                }`}
              />
            ))}
          </div>
          <button onClick={handleNextImg} type='button'>
            <FaGreaterThan />
          </button>
        </div>
      )}
      <style jsx>{`
        .picture {
          width: 100%;
          margin: auto;
          max-width: 100%;
          aspect-ratio: 16/9;
          position: relative;
        }
        .controls {
          display: flex;
          justify-content: space-between;
        }
        .indexes {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .controls button > :global(svg) {
          color: ${colors.primary};
        }

        .custom-index {
          width: 6px;
          aspect-ratio: 1/1;
          border-radius: 100%;
          border: 1px solid ${colors.primary};
        }

        .custom-index.current {
          background-color: ${colors.primary};
        }
      `}</style>
    </>
  )
}

export default ImageCarousel
