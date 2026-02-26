import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { gsap } from 'gsap'
import './Masonry.css'

const useMedia = (queries, values, defaultValue) => {
  const get = () => values[queries.findIndex(q => matchMedia(q).matches)] ?? defaultValue
  const [value, setValue] = useState(get)

  useEffect(() => {
    const handler = () => setValue(get)
    queries.forEach(q => matchMedia(q).addEventListener('change', handler))
    return () => queries.forEach(q => matchMedia(q).removeEventListener('change', handler))
  }, [queries.join(',')])

  return value
}

const useMeasure = () => {
  const ref = useRef(null)
  const [size, setSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    if (!ref.current) return
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      setSize({ width, height })
    })
    ro.observe(ref.current)
    return () => ro.disconnect()
  }, [])

  return [ref, size]
}

const preloadImages = async urls => {
  await Promise.all(
    urls.map(
      src =>
        new Promise(resolve => {
          const img = new Image()
          img.src = src
          img.onload = img.onerror = () => resolve()
        })
    )
  )
}

function Masonry({
  items,
  stagger = 0.05,
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
  clickable = false,
}) {
  const columns = useMedia(
    ['(min-width:1500px)', '(min-width:1000px)', '(min-width:600px)', '(min-width:400px)'],
    [5, 4, 3, 2],
    1
  )

  const [containerRef, { width }] = useMeasure()
  const [imagesReady, setImagesReady] = useState(false)

  useEffect(() => {
    preloadImages(items.map(i => i.img)).then(() => setImagesReady(true))
  }, [items])

  const { grid, containerHeight } = useMemo(() => {
    if (!width) return { grid: [], containerHeight: 0 }

    const colHeights = new Array(columns).fill(0)
    const columnWidth = width / columns

    const result = items.map(child => {
      const col = colHeights.indexOf(Math.min(...colHeights))
      const x = columnWidth * col
      const height = child.height / 2
      const y = colHeights[col]

      colHeights[col] += height

      return { ...child, x, y, w: columnWidth, h: height }
    })

    const maxHeight = Math.max(0, ...result.map(r => r.y + r.h))
    return { grid: result, containerHeight: maxHeight }
  }, [columns, items, width])

  const hasMounted = useRef(false)

  useLayoutEffect(() => {
    if (!imagesReady || !containerRef.current) return

    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`
      if (!hasMounted.current) {
        const initialState = {
          opacity: 0,
          ...(blurToFocus && { filter: 'blur(8px)' }),
        }
        gsap.fromTo(selector, initialState, {
          opacity: 1,
          ...(blurToFocus && { filter: 'blur(0px)' }),
          duration: 0.6,
          ease: 'power2.out',
          delay: index * stagger,
        })
      }
    })

    hasMounted.current = true
  }, [grid, imagesReady, stagger, blurToFocus])

  const handleMouseEnter = (e, item) => {
    const selector = `[data-key="${item.id}"]`
    if (scaleOnHover) {
      gsap.to(selector, {
        scale: hoverScale,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
    if (colorShiftOnHover) {
      const overlay = e.currentTarget.querySelector('.color-overlay')
      if (overlay) gsap.to(overlay, { opacity: 0.3, duration: 0.3 })
    }
  }

  const handleMouseLeave = (e, item) => {
    const selector = `[data-key="${item.id}"]`
    if (scaleOnHover) {
      gsap.to(selector, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
    if (colorShiftOnHover) {
      const overlay = e.currentTarget.querySelector('.color-overlay')
      if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 })
    }
  }

  return (
    <div
      ref={containerRef}
      className="masonry-list"
      style={{ minHeight: containerHeight }}
    >
      {grid.map(item => (
        <div
          key={item.id}
          data-key={item.id}
          className="masonry-item-wrapper"
          style={{
            left: item.x,
            top: item.y,
            width: item.w,
            height: item.h,
          }}
          role={clickable ? 'button' : undefined}
          tabIndex={clickable ? 0 : undefined}
          onClick={() => clickable && item.url && window.open(item.url, '_blank', 'noopener')}
          onKeyDown={e => clickable && item.url && e.key === 'Enter' && window.open(item.url, '_blank', 'noopener')}
          onMouseEnter={e => handleMouseEnter(e, item)}
          onMouseLeave={e => handleMouseLeave(e, item)}
        >
          <div className="masonry-item-img">
            <img src={item.img} alt="" loading="lazy" />
            {colorShiftOnHover && (
              <div
                className="color-overlay"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(45deg, rgba(255,0,150,0.5), rgba(0,150,255,0.5))',
                  opacity: 0,
                  pointerEvents: 'none',
                  borderRadius: 'var(--radius-md, 8px)',
                }}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Masonry
