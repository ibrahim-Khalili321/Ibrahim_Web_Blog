import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams();

  // Here you could fetch or define posts data
  const posts = {
    1: {
      title: "The Story of Ibrahim Khalili (Me 😁): Learning Against the Odds",
      content: `
        In a world where life constantly throws challenges, some people find a way to rise above. I am one such person. 
        His journey into programming wasn’t easy, and it wasn’t smooth — but it was real, raw, and inspiring.

        While many learn to code with full support, time, and peace of mind, I balanced My learning with real-life problems — 
        family responsibilities, financial pressure, and moments of deep frustration. There were days when I couldn’t focus 😩, nights 
        when electricity was out 🌙, and times when I doubted 🤷‍♂️ myself completely. But I never gave up.

        Through it all, I kept showing up — solving JavaScript bugs by candlelight, watching tutorials through mobile hotspots, and 
        sometimes just thinking about code when I couldn’t write any. What made me special wasn’t how fast I learned — 
        it was that he kept learning anyway.

        My story is a reminder: You don’t need the perfect conditions to grow. You just need to start, and keep going — 
        one small win at a time. If you’re reading this and struggling too, know this: You’re not alone. And yes — you can do it, 
        just like I did.
      `,
    },
    
  };

  const post = posts[id];

  if (!post) {
    return (
      <div className="container">
        <h1>Post Not Found</h1>
        <p>Sorry, we couldn't find the post you are looking for.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>{post.title}</h1>
      {post.content.split('\n\n').map((para, index) => (
        <p key={index} style={{ marginBottom: '1rem' }}>{para}</p>
      ))}
    </div>
  );
}

export default BlogPost;
