import React from 'react'
import { FaPaw, FaBookOpen, FaVideo, FaPodcast } from 'react-icons/fa'
import { IoPawOutline } from "react-icons/io5"

const LearningPage = () => {
  const resourceCategories = [
    {
      title: "Pet Care Basics",
      icon: <FaPaw />,
      description: "Essential knowledge every pet parent should know about daily care, nutrition, and exercise for dogs and cats.",
      items: ["Nutrition Guides", "Exercise Routines", "Grooming Tips", "Basic Training"]
    },
    {
      title: "Health & Wellness",
      icon: <IoPawOutline />,
      description: "Learn about preventive care, common health issues, and how to recognize signs that your pet needs medical attention.",
      items: ["Preventive Care", "Common Illnesses", "Emergency Response", "First Aid Tips"]
    },
    {
      title: "Behavior & Training",
      icon: <FaPaw />,
      description: "Understanding your pet's behavior and effective techniques to train them using positive reinforcement methods.",
      items: ["Puppy Training", "Behavioral Problems", "Advanced Commands", "Socialization Tips"]
    },
  ]

  const featuredArticles = [
    {
      title: "Understanding Your Dog's Body Language",
      category: "Behavior",
      image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      readTime: "5 min read"
    },
    {
      title: "Essential Vaccines For Your New Puppy",
      category: "Health",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      readTime: "7 min read"
    },
    {
      title: "Nutrition Guide: What to Feed Your Senior Cat",
      category: "Nutrition",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      readTime: "6 min read"
    }
  ]

  const mediaTypes = [
    {
      title: "Articles & Guides",
      icon: <FaBookOpen className="text-[#FE5F62] text-2xl" />,
      count: "120+",
      description: "In-depth articles written by certified veterinarians"
    },
    {
      title: "Video Tutorials",
      icon: <FaVideo className="text-[#FE5F62] text-2xl" />,
      count: "50+",
      description: "Step-by-step visual guides for pet care techniques"
    },
    {
      title: "Podcasts",
      icon: <FaPodcast className="text-[#FE5F62] text-2xl" />,
      count: "30+",
      description: "Listen to expert interviews and discussions"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-red-100/50 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-wide mb-6">
            <span className="text-[#3F3D56]">Pet Care </span>
            <span className="text-[#FE5F62]">Learning Center</span>
          </h1>
          <p className="text-[#3F3D56] text-base md:text-xl max-w-3xl mx-auto mb-10">
            Discover resources, tips, and expert advice to help you provide the best care for your furry companions. From basic pet care to advanced training techniques, we've got you covered.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <input
              type="text"
              placeholder="Search for resources..."
              className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FE5F62] w-full max-w-md"
            />
            <button className="px-6 py-3 bg-[#FE5F62] text-white rounded-md hover:bg-[#e45457] transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Resource Categories */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide mb-4">
            <span className="text-[#3F3D56]">Learning </span>
            <span className="text-[#FE5F62]">Categories</span>
          </h2>
          <p className="text-[#3F3D56] text-base max-w-3xl mx-auto">
            Browse through our curated collections of pet care knowledge to help you become the best pet parent possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resourceCategories.map((category, index) => (
            <div key={index} className="relative w-full">
              <div className="absolute -top-7 left-7 w-14 h-14 bg-[#FFFFFF] rounded-full outline-[0.70px] outline-offset-[-0.70px] outline-[#FE5F62] overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-red-200/50 rounded-full">
                  {category.icon && <span className="text-[#FE5F62] text-2xl">{category.icon}</span>}
                </div>
              </div>
              <div className="w-full h-auto min-h-[280px] bg-[#FFFFFF] rounded-xl outline-[0.70px] outline-offset-[-0.70px] outline-[#FE5F62] overflow-hidden p-6 pt-10">
                <h3 className="text-[#FE5F62] text-xl md:text-2xl font-medium tracking-wide mb-3">{category.title}</h3>
                <p className="text-[#3F3D56] text-sm font-normal leading-tight tracking-tight mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-[#3F3D56] text-sm">
                      <FaPaw className="text-[#FE5F62] text-xs mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <span className="text-[#FE5F62] text-base font-normal tracking-tight cursor-pointer hover:underline">Explore</span>
                  <div className="w-3.5 h-px bg-[#FE5F62] mt-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Articles */}
      <div className="bg-red-100/30 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-wide mb-4">
              <span className="text-[#3F3D56]">Featured </span>
              <span className="text-[#FE5F62]">Articles</span>
            </h2>
            <p className="text-[#3F3D56] text-base max-w-3xl mx-auto">
              Hand-picked guides and articles to help you provide the best care for your pets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105 cursor-pointer">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-3">
                    <span className="bg-red-100 text-[#FE5F62] px-3 py-1 rounded-full text-xs">{article.category}</span>
                    <span className="text-gray-500 text-xs">{article.readTime}</span>
                  </div>
                  <h3 className="text-[#3F3D56] font-semibold text-lg mb-2">{article.title}</h3>
                  <div className="flex items-center mt-4">
                    <span className="text-[#FE5F62] text-sm hover:underline">Read Article</span>
                    <svg className="w-4 h-4 ml-1 text-[#FE5F62]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button className="px-6 py-3 bg-[#FE5F62] text-white rounded-md hover:bg-[#e45457] transition-colors">
              View All Articles
            </button>
          </div>
        </div>
      </div>

      {/* Content Types */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide mb-4">
            <span className="text-[#3F3D56]">Learn Your </span>
            <span className="text-[#FE5F62]">Way</span>
          </h2>
          <p className="text-[#3F3D56] text-base max-w-3xl mx-auto">
            Multiple formats to fit your learning style and schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mediaTypes.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-[#3F3D56] text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-[#FE5F62] text-2xl font-bold mb-3">{item.count}</p>
              <p className="text-[#3F3D56] text-sm">{item.description}</p>
              <button className="mt-4 text-[#FE5F62] font-medium hover:underline flex items-center">
                Explore
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-red-100/50 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide mb-4">
            <span className="text-[#3F3D56]">Get Weekly Pet Care </span>
            <span className="text-[#FE5F62]">Tips</span>
          </h2>
          <p className="text-[#3F3D56] text-base md:text-lg max-w-3xl mx-auto mb-8">
            Subscribe to our newsletter and receive the latest pet care advice, training tips, and health information directly in your inbox.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FE5F62] w-full max-w-md"
            />
            <button className="px-6 py-3 bg-[#FE5F62] text-white rounded-md hover:bg-[#e45457] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearningPage
