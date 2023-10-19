import {Link} from 'react-router-dom';

const Blogs = ({blogs,title,/*DeleteBlog*/}) => {
// <button onClick={()=>{DeleteBlog(blog.id)}}>Delete</button>

    return ( 
        <div className="blog-list">
        {blogs.map(blog => (
            <div className="blog-preview" key={blog.id} >
              <Link to={`/Blog/${blog.id}`}>
              <h2>{ blog.title }</h2>
              <p>Written by { blog.author }</p>
             </Link>
            </div>
          ))}
          </div>
     );
}
 
export default Blogs;