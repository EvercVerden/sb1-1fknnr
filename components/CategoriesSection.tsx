import { Button } from "@/components/ui/button"

const categories = ["Anime", "Manga", "Cosplay", "Animation", "Games", "Music", "Merchandise"]

export function CategoriesSection() {
  return (
    <div className="mb-16">
      <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-pink-500 to-indigo-500 text-transparent bg-clip-text">
        Trending Categories
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <Button key={category} variant="outline" className="rounded-full text-lg font-semibold hover:bg-gradient-to-r hover:from-pink-500 hover:to-indigo-500 hover:text-white transition-all">
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
}