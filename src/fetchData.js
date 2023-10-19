import { useEffect } from "react"
import { useState } from "react"

const FetchData = (url) => {
    
    const [data , setBlogs] = useState(null)
    const [error , setError] = useState(null)
    const [isLoading , setIsLoading] = useState(true)

    useEffect(() => {
      const aportCont = new AbortController()
      
      fetch(url,{signal : aportCont.signal})
        .then(res => {
          if(res.ok){
          return res.json();
          }else {
            throw  Error("something went wrong")
          }
        })
        .then(data => {
          setBlogs(data);
          setIsLoading(false)
          setError(null)
          
        }).catch((error)=>{
          if(error.name === 'AbortError'){
            console.log("this is abort error ")
          }else {
            setError(error)
            setIsLoading(false)  
          }
          })
        return ()=> aportCont.abort()
    }, [])

    return {data , error , isLoading}
    
}
 
export default FetchData;