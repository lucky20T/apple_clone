import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo,smallHeroVideo } from '../utils'

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 768 ? smallHeroVideo : heroVideo)
    const handleResize = () => {
        if (window.innerWidth < 768) {
            setVideoSrc(smallHeroVideo)
        } else {
            setVideoSrc(heroVideo)
        }
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    useGSAP(() =>{
        gsap.to(['#hero'],{
            opacity: 1, 
            delay: 1.5,
            duration: 1,
        })
        gsap.to(['#cta'],{
            opacity: 1, 
            translateY: -50,
            duration: 1,
            delay: 2,
        })
    },[] )
  return (
    <section className="w-full nav-height bg-black relative">
        <div className="h-5/6 w-full flex-center flex-col">
            <p id="hero" className="hero-title">iPhone 15 pro  </p>
            <div className="md:w-10/12 w-9/12">
                <video className="pointer-events-none" autoPlay muted loop playsInline key={videoSrc}>
                    <source src={videoSrc} type="video/mp4"/>
                </video>
            </div>
        </div>
        <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
            <a href="#highlights" className="btn">Buy</a>
            <p className="font-normal text-xl">From ₹10,000/months to ₹1,00,000 </p>
        </div>
    </section> 
  )
}

export default Hero
