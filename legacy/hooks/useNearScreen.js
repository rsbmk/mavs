const { useEffect, useRef, useState } = require('react')

export const useNearScreen = ({ once = true } = {}) => {
  const [isIntersection, setIntersection] = useState(false)
  const elementNearScreen = useRef(null)

  useEffect(function () {
    const handleIntersection = (entries, observer) => {
      const element = entries[0]

      if (element.isIntersecting) {
        setIntersection(true)
        once && observer.disconnect()
      } else {
        !once && setIntersection(false)
      }
    }

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '750px'
    })

    observer.observe(elementNearScreen.current)

    return () => observer.disconnect()
  }, [once])

  return { elementNearScreen, isIntersection }
}
