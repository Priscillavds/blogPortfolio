import { useState } from 'react';
import { Link } from 'react-router-dom';
import posts from '../data/posts';

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
    }
  };

  const filteredPosts = selectedTag ? posts.filter(post => post.tags.includes(selectedTag)) : posts;

  // Sort posts by date
  filteredPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="App">
      <div className="text-center my-4">
        <h2 className="text-4xl font-bold mb-4">Blog</h2>
      </div>
      <div className="flex justify-center px-4">
        <div className="flex flex-wrap gap-2 my-4">
          {Array.from(new Set(posts.flatMap(post => post.tags))).map((tag, index) => (
            <button
              key={index}
              className={`bg-gray-800 px-4 py-2 rounded-full text-sm font-semibold text-white mr-2 mb-2 ${selectedTag === tag ? 'bg-gray-300' : ''}`}
              onClick={() => handleTagClick(tag)}
              style={{ minWidth: '90px' }}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-center px-4" style={{ paddingBottom: '80px' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPosts.map((post, index) => (
            <Link key={index} to={`/post/${post.id}`}>
              <div className="max-w-sm h-full rounded overflow-hidden shadow-lg bg-gray-300 post-container">
                <img className="w-full" src={post.image} alt={post.title} height={100}/>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{post.title}</div>
                  <p className="text-gray-700 text-base">{post.introduction}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
