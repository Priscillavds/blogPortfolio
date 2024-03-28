import posts from '../data/posts';
import { useParams } from 'react-router-dom';
import img from '../assets/stagew1.jpg';

const Post = () => {
  const { id } = useParams();
  const post = posts.find(post => post.id == id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto" style={{ paddingBottom: '80px' }}>
      <article className="max-w-4xl mx-auto my-8">
        <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
        <div className="px-6 pt-4 pb-2">
          {post.tags.map((tag, index) => (
            <span key={index} className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
              #{tag}
            </span>
          ))}
        </div>
        <img src={img} alt={post.title} className="mb-4 rounded-lg" />
        <p className="text-gray-700 mb-4">{post.introduction}</p>
        <div className="text-gray-700 mb-4">{post.eersteParagraaf}</div>
        <div className="text-gray-700 mb-4">{post.tweedeParagraaf}</div>
        <div className="text-gray-700 mb-4">{post.slot}</div>
        <div className="text-sm text-gray-500">Published on {post.date}</div>
      </article>
    </div>
  );
};

export default Post;
