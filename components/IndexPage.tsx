import BlogContainer from 'components/BlogContainer'
import Navbar from 'components/Navbar'
import HeroSection from 'components/HeroSection'
import FeaturedSection from 'components/FeaturedSection'
import FeaturedTools, { Tool } from 'components/FeaturedTools'
import { Post, Settings } from 'lib/sanity.queries'
import { getAllTools } from 'lib/sanity.client'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  settings: Settings
  posts: Post[]
  tools: Tool[]
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, settings, posts } = props
  
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <main>
        <BlogContainer>
          <HeroSection />
          <FeaturedSection posts={posts} />
          <FeaturedTools tools={posts} />
        </BlogContainer>
      </main>
    </div>
  )
} 