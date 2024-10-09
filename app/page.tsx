import { Carousel } from '@/components/Carousel'
import { FeaturedProjects } from '@/components/FeaturedProjects'
import { CategoriesSection } from '@/components/CategoriesSection'
import { Button } from "@/components/ui/button"
import { Clock, Heart, Zap } from 'lucide-react'
import Link from 'next/link'
import { CreateProjectButton } from '@/components/CreateProjectButton'
import { LucideIcon } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100">
      <main className="container mx-auto px-4 py-12">
        <Carousel />
        <CategoriesSection />
        <FeaturedProjects />
        <CallToActionSection />
        <WhyChooseUsSection />
      </main>
      <Footer />
      <CreateProjectButton />
    </div>
  )
}

function CallToActionSection() {
  return (
    <section className="bg-gradient-to-r from-pink-500 to-indigo-500 py-16 mt-16 rounded-2xl">
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="text-4xl font-bold mb-8">Ready to Launch Your Project?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of creators who have successfully funded their dreams through our platform.</p>
        <Button className="bg-white text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all">
          Start Your Campaign
        </Button>
      </div>
    </section>
  )
}

function WhyChooseUsSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 to-indigo-500 text-transparent bg-clip-text">
        Why Choose JTL Fund?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon={Clock}
          title="Quick Setup"
          description="Launch your campaign in minutes with our user-friendly platform."
        />
        <FeatureCard
          icon={Heart}
          title="Supportive Community"
          description="Join a passionate community of creators and backers."
        />
        <FeatureCard
          icon={Zap}
          title="Powerful Tools"
          description="Access analytics and promotion tools to boost your campaign."
        />
      </div>
    </section>
  )
}

function FeatureCard({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 text-center transition-all hover:shadow-2xl hover:scale-105">
      <div className="bg-gradient-to-r from-pink-500 to-indigo-500 text-white rounded-full p-4 inline-block mb-4">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-indigo-500 text-transparent bg-clip-text">
              JTL Fund
            </Link>
          </div>
          <nav className="w-full md:w-auto">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">About</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Projects</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">How It Works</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Support</Link></li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-center text-gray-500">
          <p>&copy; 2023 JTL Fund. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}