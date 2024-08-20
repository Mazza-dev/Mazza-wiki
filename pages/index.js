import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 font-mono">
      <Head>
        <title>Tolani - Portfolio</title>
        <meta name="description" content="Tolani's developer portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Tolani
          </Link>
          <div className="space-x-4">
            <Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
            <Link href="/projects" className="text-gray-600 hover:text-gray-900">Projects</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to my portfolio!</h1>
        <p className="text-xl mb-8">I'm a passionate developer who loves to create innovative solutions and share my knowledge through blogging.</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="w-full h-40 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Blog Post 1</h3>
              <p className="text-gray-600">Short description of the blog post...</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <div className="w-full h-40 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Blog Post 2</h3>
              <p className="text-gray-600">Short description of the blog post...</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Project 1</h3>
              <p className="text-gray-600 mb-4">A web application that helps users manage their tasks and stay organized.</p>
              <div className="space-x-2">
                <a href="#" className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Live Demo</a>
                <a href="#" className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">GitHub</a>
              </div>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Project 2</h3>
              <p className="text-gray-600 mb-4">A mobile app that helps users track their fitness goals and progress.</p>
              <div className="space-x-2">
                <a href="#" className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Live Demo</a>
                <a href="#" className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">GitHub</a>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <div className="w-48 h-48 bg-gray-200 rounded-lg mb-4 md:mb-0 md:mr-6"></div>
              </div>
              <div>
                <p className="mb-4">
                  Hi, I'm Tolani, a passionate developer with a love for creating innovative solutions. 
                  I've been coding for over 5 years and have experience in a variety of technologies, 
                  including React, Node.js, and Python.
                </p>
                <p className="mb-4">
                  In my free time, I enjoy exploring new technologies, tinkering with hardware projects, 
                  and sharing my knowledge through blogging. I'm always eager to learn and take on new challenges.
                </p>
                <div className="space-x-2">
                  <a href="#" className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">LinkedIn</a>
                  <a href="#" className="inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white shadow mt-12">
        <div className="container mx-auto px-6 py-3 text-center">
          <p>© 2024 Tolani. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}