"use client";
import { useState } from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Timeline } from "@/components/ui/timeline";

interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string;
}

const categories: Category[] = [
  {
    id: "technology",
    name: "Technology",
    description: "Latest tech innovations, AI developments, and digital trends.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "💻"
  },
  {
    id: "business",
    name: "Business",
    description: "Market insights, startup news, and entrepreneurship tips.",
    image: "https://plus.unsplash.com/premium_photo-1661772661721-b16346fe5b0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "📊"
  },
  {
    id: "health",
    name: "Health & Wellness",
    description: "Fitness tips, mental health, nutrition, and medical breakthroughs.",
    image: "https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "🏃‍♀️"
  },
  {
    id: "science",
    name: "Science",
    description: "Research discoveries, space exploration, and scientific innovations.",
    image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "🔬"
  },
  {
    id: "entertainment",
    name: "Entertainment",
    description: "Movies, TV shows, music, celebrities, and pop culture.",
    image: "https://plus.unsplash.com/premium_photo-1710500925162-93486c5a7abe?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "🎬"
  },
  {
    id: "sports",
    name: "Sports",
    description: "Game highlights, player news, and sports analysis.",
    image: "https://plus.unsplash.com/premium_photo-1685303469251-4ee0ea014bb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "⚽"
  },
  {
    id: "travel",
    name: "Travel",
    description: "Travel guides, destination tips, and adventure stories.",
    image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "✈️"
  },
  {
    id: "food",
    name: "Food & Cooking",
    description: "Recipes, restaurant reviews, and culinary trends.",
    image: "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "🍳"
  },
  {
    id: "fashion",
    name: "Fashion & Style",
    description: "Latest fashion trends, style tips, and designer news.",
    image: "https://plus.unsplash.com/premium_photo-1714226832714-60eecbb6b080?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "👗"
  }
];

export default function SelectPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedFrequency, setSelectedFrequency] = useState<string>("weekly");

  const handleCategoryChange = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter((id) => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  const handleFrequencyChange = (frequency: string) => {
    setSelectedFrequency(frequency);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="relative z-10 container mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gray-800/60 backdrop-blur-sm rounded-full px-6 py-3 mb-6 text-sm font-medium border border-gray-700/50">
            <span className="text-2xl mr-2">✨</span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Personalized Newsletter
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-white bg-clip-text text-transparent mb-6 leading-tight">
            Customize Your
            <br />
            Experience
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Select your interests to create a personalized newsletter experience that brings you exactly what you want to read.
          </p>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Choose Your Categories</h2>
          <div className="inline-flex items-center bg-gray-800/70 backdrop-blur-sm rounded-full px-8 py-4 text-lg font-medium border border-gray-700/50">
            <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-green-400 font-semibold">Selected: {selectedCategories.length} categories</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {categories.map((category) => (
            <BackgroundGradient 
              key={category.id}
              className="rounded-2xl p-1 bg-gray-900 hover:scale-105 transition-all duration-300"
              containerClassName="group"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id={category.id}
                  checked={selectedCategories.includes(category.id)}
                  onChange={() => handleCategoryChange(category.id)}
                  className="sr-only"
                />
                <label
                  htmlFor={category.id}
                  className="block cursor-pointer rounded-2xl bg-gray-900 overflow-hidden shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                        <span className="text-3xl">{category.icon}</span>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 right-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm border-2 transition-all duration-300 ${
                          selectedCategories.includes(category.id)
                            ? "bg-green-500 border-green-400 text-white scale-110"
                            : "bg-white/20 border-white/40 text-white hover:bg-white/30"
                        }`}
                      >
                        {selectedCategories.includes(category.id) ? (
                          <svg
                            className="w-7 h-7"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-7 h-7"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    
                    {selectedCategories.includes(category.id) && (
                      <div className="absolute inset-0 bg-green-500/20 border-2 border-green-400 rounded-t-2xl"></div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      {category.description}
                    </p>
                  </div>
                </label>
              </div>
            </BackgroundGradient>
          ))}
        </div>

        <div className="text-center mt-16 mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Select Update Frequency</h2>
          <div className="inline-flex items-center bg-gray-800/70 backdrop-blur-sm rounded-full px-8 py-4 text-lg font-medium border border-gray-700/50">
            <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-blue-400 font-semibold">Selected: {selectedFrequency.charAt(0).toUpperCase() + selectedFrequency.slice(1)}</span>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            {["daily", "weekly", "biweekly"].map((frequency) => (
              <button
                key={frequency}
                onClick={() => handleFrequencyChange(frequency)}
                className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                  selectedFrequency === frequency
                    ? "bg-blue-500 text-white scale-105"
                    : "bg-gray-800/70 text-gray-300 hover:bg-gray-700/70 hover:text-white"
                } border border-gray-700/50`}
              >
                {frequency.charAt(0).toUpperCase() + frequency.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {selectedCategories.length > 0 && (
          <div className="text-center mt-16">
            <button className="bg-white text-black font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg">
              Continue with {selectedCategories.length} categories →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}