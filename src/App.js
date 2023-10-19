import Navbar from './NavBar';
import Home from './Home';
import AddBlog from './AddBlog'
import BlogDetails from './BlogDetails';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import NotFound from './NotFound';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>

        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/AddBlog' element={< AddBlog />}></Route>
        <Route exact path='/Blog/:id' element={< BlogDetails />}></Route>
        <Route exact path='*' element={< NotFound />}></Route>

          </Routes>
        
      </div>
    </div>
    </Router>
  )
}

export default App;