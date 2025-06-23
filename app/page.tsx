import PublicHeader from "@/components/public/PublicHeader"
import Hero from "@/components/public/Hero"
import HowItWorks from "@/components/public/HowItWorks"
import FeaturedCourses from "@/components/public/FeaturedCourses"
import StatsSection from "@/components/public/StatsSection"
import SuccessStories from "@/components/public/SuccessStories"
import Testimonials from "@/components/public/Testimonials"
import Partners from "@/components/public/Partners"
import PublicFooter from "@/components/public/PublicFooter"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <PublicHeader />
      <Hero />
      <HowItWorks />
      <FeaturedCourses />
      <StatsSection />
      <SuccessStories />
      <Testimonials />
      <Partners />
      <PublicFooter />
    </div>
  )
}
