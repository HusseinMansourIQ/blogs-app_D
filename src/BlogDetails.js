import FetchData from "./fetchData";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const BlogDetails = () => {
  const navigate = useNavigate()
    const { id } = useParams();
    const {data : blog , error , isLoading} = FetchData('http://localhost:8000/blogs/' + id)
    
    const Delete = ()=> {
      fetch('http://localhost:8000/blogs/'+id ,{
        method : 'DELETE',        
      }).then(()=>{
        navigate('/')
      })
    }
    
    return ( 
        <div className="blog-details">
        { isLoading && <div>Loading...</div> }
        { error && <div>{ error }</div> }
        { blog && (
          <article>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
            <div>{ blog.body }</div>
            <button onClick={Delete}>Delete</button>
          </article>
        )}
      </div>
    );
}
 
export default BlogDetails;