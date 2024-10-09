"use client";

import { Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Image from 'next/image'

const featuredProjects = [
  { id: 1, title: "Anime-themed Cafe", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80", progress: 75, category: "Food & Drink" },
  { id: 2, title: "AI Anime Translator", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80", progress: 60, category: "Technology" },
  { id: 3, title: "Anime Drawing Tool", image: "https://images.unsplash.com/photo-1560762484-813fc97650a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80", progress: 40, category: "Design" },
  { id: 4, title: "Anime Character Jewelry", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200&q=80", progress: 85, category: "Fashion" },
]

export function FeaturedProjects() {
  return (
    <div className="mb-16">
      <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-pink-500 to-indigo-500 text-transparent bg-clip-text">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-2xl hover:scale-105">
            <Image src={project.image} alt={project.title} width={300} height={200} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-indigo-500">{project.category}</span>
                <Heart className="h-5 w-5 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <Progress value={project.progress} className="h-2 mb-2" />
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>{project.progress}% funded</span>
                <span>3 days left</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button className="bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:from-pink-600 hover:to-indigo-600 transition-all">
          Explore All Projects
        </Button>
      </div>
    </div>
  )
}