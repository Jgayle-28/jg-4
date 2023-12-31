import { useRef } from 'react'
import { useRouter } from '../../hooks/use-router'

export default function WorkSection({ reversed, projects }) {
  const firstImage = useRef(null)
  const secondImage = useRef(null)
  let requestAnimationFrameId = null
  let xPercent = reversed ? 100 : 0
  let currentXPercent = reversed ? 100 : 0
  const speed = 0.15

  const router = useRouter()

  const manageMouseMove = (e) => {
    const { clientX } = e
    xPercent = (clientX / window.innerWidth) * 100

    if (!requestAnimationFrameId) {
      requestAnimationFrameId = window.requestAnimationFrame(animate)
    }
  }

  const animate = () => {
    //Add easing to the animation
    const xPercentDelta = xPercent - currentXPercent
    currentXPercent = currentXPercent + xPercentDelta * speed

    //Change width of images between 33.33% and 66.66% based on cursor
    const firstImagePercent = 66.66 - currentXPercent * 0.33
    const secondImagePercent = 33.33 + currentXPercent * 0.33

    firstImage.current.style.width = `${firstImagePercent}%`
    secondImage.current.style.width = `${secondImagePercent}%`

    if (Math.round(xPercent) == Math.round(currentXPercent)) {
      window.cancelAnimationFrame(requestAnimationFrameId)
      requestAnimationFrameId = null
    } else {
      window.requestAnimationFrame(animate)
    }
  }

  const handleProjectClick = (id) => {
    router.push(`/project/${id}`)
  }

  return (
    <div
      onMouseMove={(e) => {
        manageMouseMove(e)
      }}
      className='double'
    >
      <div
        ref={firstImage}
        className='imageContainer cursor-pointer'
        onClick={() => handleProjectClick(projects[0].id)}
      >
        <div className='stretchyWrapper'>
          <img
            src={`/assets/images/projects/${projects[0].src}`}
            fill={true}
            alt={'image'}
          />
        </div>
        <div className='work-body'>
          <h3>{projects[0].name}</h3>
          <p>{projects[0].description}</p>
          {/* <p>{projects[0].year}</p> */}
        </div>
      </div>

      <div
        ref={secondImage}
        className='imageContainer cursor-pointer'
        onClick={() => handleProjectClick(projects[1].id)}
      >
        <div className='stretchyWrapper'>
          <img
            src={`/assets/images/projects/${projects[1].src}`}
            fill={true}
            alt={'image'}
          />
        </div>
        <div className='work-body'>
          <h3>{projects[1].name}</h3>
          <p>{projects[1].description}</p>
          {/* <p className='!text-sm'>{projects[1].year}</p> */}
        </div>
      </div>
    </div>
  )
}
