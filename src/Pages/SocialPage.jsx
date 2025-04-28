import React, { useState } from 'react'
import { FaPaw, FaCalendarAlt, FaUsers, FaNewspaper, FaSearch } from 'react-icons/fa'
import { IoPawOutline } from "react-icons/io5"

const SocialPage = () => {
  const [activeTab, setActiveTab] = useState('community');

  // Sample community posts data
  const communityPosts = [
    {
      id: 1,
      author: "Emily Johnson",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      petType: "Dog",
      petName: "Max",
      image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=675&q=80",
      content: "Our morning walk was magical today! Max made so many new friends at the park.",
      likes: 24,
      comments: 8,
      timeAgo: "2h ago"
    },
    {
      id: 2,
      author: "Michael Chen",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      petType: "Cat",
      petName: "Luna",
      image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=675&q=80",
      content: "Luna just had her first vet check-up at Sniffi and she was so brave! Highly recommend their gentle approach.",
      likes: 42,
      comments: 15,
      timeAgo: "5h ago"
    },
    {
      id: 3,
      author: "Sarah Martinez",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      petType: "Dog",
      petName: "Bella",
      image: "https://images.unsplash.com/photo-1601758124360-45788a7e8949?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=675&q=80",
      content: "Trying Sniffi's new healthy treats today - Bella approves! She can't get enough of them.",
      likes: 31,
      comments: 7,
      timeAgo: "1d ago"
    },
  ];

  // Sample upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Paws in the Park",
      date: "June 15, 2023",
      location: "Central City Park",
      description: "Join us for a day of fun activities with your furry friends!",
      image: "https://images.unsplash.com/photo-1551730459-92db2a308d6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 2,
      title: "Pet Health Workshop",
      date: "June 22, 2023",
      location: "Sniffi Community Center",
      description: "Learn essential tips to keep your pets healthy from our expert veterinarians.",
      image: "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 3,
      title: "Adoption Day",
      date: "July 5, 2023",
      location: "Sniffi Adoption Center",
      description: "Find your perfect companion! We're hosting a special adoption day with reduced fees.",
      image: "https://images.unsplash.com/photo-1576201836106-db1758785473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
  ];
  
  // Sample success stories
  const successStories = [
    {
      id: 1,
      title: "Max's Remarkable Recovery",
      image: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=675&q=80",
      excerpt: "After a serious injury, Max made an incredible recovery thanks to Sniffi's specialized care.",
      author: "James Wilson",
      readTime: "4 min read"
    },
    {
      id: 2,
      title: "Luna's Transformation Story",
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      excerpt: "Rescued from the streets, Luna found her forever home and thrived with proper veterinary care.",
      author: "Emily Parker",
      readTime: "5 min read"
    },
    {
      id: 3,
      title: "Charlie's Diabetes Journey",
      image: "https://images.unsplash.com/photo-1597633425046-08f5110420b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      excerpt: "Managing pet diabetes seemed impossible until we discovered Sniffi's comprehensive care program.",
      author: "Thomas Rodriguez",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-red-100/50 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-wide mb-6">
            <span className="text-[#3F3D56]">Pet Lovers </span>
            <span className="text-[#FE5F62]">Community</span>
          </h1>
          <p className="text-[#3F3D56] text-base md:text-xl max-w-3xl mx-auto mb-10">
            Connect with fellow pet parents, share your stories, discover events, and learn from each other's experiences 
            in our vibrant community dedicated to the love of pets.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <input
              type="text"
              placeholder="Search posts, events, or pet parents..."
              className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FE5F62] w-full max-w-md"
            />
            <button className="px-6 py-3 bg-[#FE5F62] text-white rounded-md hover:bg-[#e45457] transition-colors">
              <FaSearch className="inline mr-2" /> Search
            </button>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="border-b border-gray-200">
          <nav className="flex justify-center md:justify-start space-x-8 overflow-x-auto">
            <button 
              className={`py-4 px-2 text-md font-medium border-b-2 ${activeTab === 'community' ? 'border-[#FE5F62] text-[#FE5F62]' : 'border-transparent text-gray-500 hover:text-gray-700'} transition-colors duration-200`}
              onClick={() => setActiveTab('community')}
            >
              <FaUsers className="inline mr-2" /> Community Feed
            </button>
            <button 
              className={`py-4 px-2 text-md font-medium border-b-2 ${activeTab === 'events' ? 'border-[#FE5F62] text-[#FE5F62]' : 'border-transparent text-gray-500 hover:text-gray-700'} transition-colors duration-200`}
              onClick={() => setActiveTab('events')}
            >
              <FaCalendarAlt className="inline mr-2" /> Events
            </button>
            <button 
              className={`py-4 px-2 text-md font-medium border-b-2 ${activeTab === 'stories' ? 'border-[#FE5F62] text-[#FE5F62]' : 'border-transparent text-gray-500 hover:text-gray-700'} transition-colors duration-200`}
              onClick={() => setActiveTab('stories')}
            >
              <FaNewspaper className="inline mr-2" /> Success Stories
            </button>
          </nav>
        </div>
      </div>

      {/* Community Feed */}
      {activeTab === 'community' && (
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-medium mb-4">Create a Post</h3>
              <textarea 
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FE5F62]" 
                placeholder="Share your pet stories, questions, or tips..."
                rows={3}
              ></textarea>
              <div className="flex justify-between mt-4">
                <div className="flex space-x-4">
                  <button className="text-gray-500 hover:text-[#FE5F62]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Photo
                  </button>
                  <button className="text-gray-500 hover:text-[#FE5F62]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Video
                  </button>
                </div>
                <button className="px-4 py-2 bg-[#FE5F62] text-white rounded-md hover:bg-[#e45457] transition-colors">
                  Post
                </button>
              </div>
            </div>

            {/* Community Posts */}
            {communityPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                <div className="p-4">
                  <div className="flex items-center mb-3">
                    <img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-full mr-3" />
                    <div>
                      <h3 className="font-medium text-gray-800">{post.author}</h3>
                      <p className="text-xs text-gray-500">{post.timeAgo} · {post.petType} owner</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{post.content}</p>
                  
                  {post.image && (
                    <div className="mb-4">
                      <img src={post.image} alt="Post" className="w-full h-64 object-cover rounded-md" />
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                    <button className="flex items-center text-gray-500 hover:text-[#FE5F62]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                      </svg>
                      {post.likes} Likes
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-[#FE5F62]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {post.comments} Comments
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-[#FE5F62]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                      Share
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="text-center mt-8">
              <button className="px-6 py-2 bg-white border border-[#FE5F62] text-[#FE5F62] rounded-md hover:bg-red-50 transition-colors">
                Load More Posts
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Events Tab */}
      {activeTab === 'events' && (
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold">
              <span className="text-[#3F3D56]">Upcoming </span>
              <span className="text-[#FE5F62]">Events</span>
            </h2>
            <p className="text-gray-600 mt-2">Join our community events and connect with other pet lovers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-xl mb-2 text-gray-800">{event.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <FaCalendarAlt className="mr-2 text-[#FE5F62]" /> {event.date}
                  </div>
                  <div className="flex items-center text-gray-600 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#FE5F62]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {event.location}
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                  <button className="w-full py-2 bg-[#FE5F62] text-white rounded-md hover:bg-[#e45457] transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-red-100/50 rounded-lg p-6 text-center">
            <h3 className="text-2xl font-semibold text-[#3F3D56] mb-4">Host Your Own Pet Event</h3>
            <p className="text-gray-600 mb-6">Have an idea for a pet-friendly event? We'd love to help you organize it!</p>
            <button className="px-6 py-3 bg-[#FE5F62] text-white rounded-md hover:bg-[#e45457] transition-colors">
              Submit Event Proposal
            </button>
          </div>
        </div>
      )}

      {/* Success Stories Tab */}
      {activeTab === 'stories' && (
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold">
              <span className="text-[#3F3D56]">Pet Success </span>
              <span className="text-[#FE5F62]">Stories</span>
            </h2>
            <p className="text-gray-600 mt-2">Inspiring tales of recovery, adoption, and extraordinary pet journeys</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div key={story.id} className="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105 cursor-pointer">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-3">
                    <span className="bg-red-100 text-[#FE5F62] px-3 py-1 rounded-full text-xs">Success Story</span>
                    <span className="text-gray-500 text-xs">{story.readTime}</span>
                  </div>
                  <h3 className="text-[#3F3D56] font-semibold text-lg mb-2">{story.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{story.excerpt}</p>
                  <p className="text-gray-500 text-xs mb-3">By {story.author}</p>
                  <div className="flex items-center mt-4">
                    <span className="text-[#FE5F62] text-sm hover:underline">Read Full Story</span>
                    <svg className="w-4 h-4 ml-1 text-[#FE5F62]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <h3 className="text-xl font-medium text-[#3F3D56] mb-4">Have a Success Story to Share?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">We'd love to hear about your pet's journey! Share your experience with our community and inspire other pet parents.</p>
            <button className="px-6 py-3 bg-[#FE5F62] text-white rounded-md hover:bg-[#e45457] transition-colors">
              Submit Your Story
            </button>
          </div>
        </div>
      )}

      {/* Join Community */}
      <div className="bg-red-100/50 py-16 px-4 mt-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide mb-4">
            <span className="text-[#3F3D56]">Join Our </span>
            <span className="text-[#FE5F62]">Pet Community</span>
          </h2>
          <p className="text-[#3F3D56] text-base md:text-lg max-w-3xl mx-auto mb-8">
            Connect with fellow pet lovers, share your experiences, and stay updated on pet care tips, events, and more.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FE5F62] w-full max-w-md"
            />
            <button className="px-6 py-3 bg-[#FE5F62] text-white rounded-md hover:bg-[#e45457] transition-colors">
              Join Community
            </button>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">
            <span className="text-[#3F3D56]">Follow Us On </span>
            <span className="text-[#FE5F62]">Social Media</span>
          </h2>
          <div className="flex justify-center space-x-6">
            <a href="#" className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center hover:bg-[#FE5F62] hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center hover:bg-[#FE5F62] hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center hover:bg-[#FE5F62] hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center hover:bg-[#FE5F62] hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialPage
