import Blogs from './BlogsList';
import {useState,useEffect} from 'react'
import FetchData from './fetchData';
import Link from 'react-router-dom';

const Home = ()=>{

   const {data:blogs , error , isLoading} = FetchData('http://localhost:8000/blogs')

   /*function DeleteBlog(id){
    const newBlogs = blogs.filter(blog=>blog.id != id)
    setBlogs(newBlogs)
  }*/

return (
    <div className="home">
      {isLoading && <div>Loading....</div>}
      {error && <div>{error}</div>}
   {blogs && <Blogs blogs={blogs} title = "All blogs" /*DeleteBlog={DeleteBlog}*/ />}
  </div>
);
}



export default Home