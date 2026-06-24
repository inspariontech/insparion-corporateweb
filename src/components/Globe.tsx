import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface GlobeProps {
  className?: string
}

/**
 * Tema renkleriyle (mavi → mor) noktalardan oluşan, yavaşça dönen bir küre.
 * Şeffaf arka plan; açık zeminli bölümlerde dekoratif arka plan olarak kullanılır.
 */
export default function Globe({ className = '' }: GlobeProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
    camera.position.z = 3.05

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'low-power',
    })
    renderer.setClearColor(0x000000, 0)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    el.appendChild(renderer.domElement)

    const group = new THREE.Group()
    group.rotation.z = THREE.MathUtils.degToRad(-18)
    scene.add(group)

    // --- Dotted sphere ---
    const R = 1
    const N = 2600
    const positions = new Float32Array(N * 3)
    const colors = new Float32Array(N * 3)
    const cBlue = new THREE.Color('#38BDF8')
    const cViolet = new THREE.Color('#8B5CF6')
    const cFuchsia = new THREE.Color('#C84DF5')

    for (let i = 0; i < N; i++) {
      // Fibonacci sphere distribution
      const y = 1 - (i / (N - 1)) * 2
      const radius = Math.sqrt(1 - y * y)
      const theta = i * 2.399963229728653 // golden angle
      const x = Math.cos(theta) * radius
      const z = Math.sin(theta) * radius

      positions[i * 3] = x * R
      positions[i * 3 + 1] = y * R
      positions[i * 3 + 2] = z * R

      // gradient: blue (top) -> violet -> fuchsia (bottom)
      const t = (y + 1) / 2
      const col =
        t > 0.5
          ? cBlue.clone().lerp(cViolet, (1 - t) * 2)
          : cViolet.clone().lerp(cFuchsia, (0.5 - t) * 2)
      colors[i * 3] = col.r
      colors[i * 3 + 1] = col.g
      colors[i * 3 + 2] = col.b
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const mat = new THREE.PointsMaterial({
      size: 0.022,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
      depthWrite: false,
    })
    const points = new THREE.Points(geo, mat)
    group.add(points)

    // --- Faint wireframe sphere for structure ---
    const wireGeo = new THREE.SphereGeometry(R * 0.992, 36, 24)
    const wireMat = new THREE.MeshBasicMaterial({
      color: '#6E8BF5',
      wireframe: true,
      transparent: true,
      opacity: 0.08,
      depthWrite: false,
    })
    group.add(new THREE.Mesh(wireGeo, wireMat))

    // --- Equator-ish ring ---
    const ringGeo = new THREE.TorusGeometry(R * 1.18, 0.004, 8, 120)
    const ringMat = new THREE.MeshBasicMaterial({
      color: '#A855F7',
      transparent: true,
      opacity: 0.4,
    })
    const ring = new THREE.Mesh(ringGeo, ringMat)
    ring.rotation.x = Math.PI / 2.1
    group.add(ring)

    const resize = () => {
      const w = el.clientWidth
      const h = el.clientHeight
      if (!w || !h) return
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(el)

    let raf = 0
    const animate = () => {
      points.rotation.y += 0.0016
      ring.rotation.z += 0.0008
      renderer.render(scene, camera)
      raf = requestAnimationFrame(animate)
    }
    if (reduce) {
      renderer.render(scene, camera)
    } else {
      raf = requestAnimationFrame(animate)
    }

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      geo.dispose()
      mat.dispose()
      wireGeo.dispose()
      wireMat.dispose()
      ringGeo.dispose()
      ringMat.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === el)
        el.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={ref} className={className} aria-hidden="true" />
}
