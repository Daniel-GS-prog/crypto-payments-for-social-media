
import { Navbar, Welcome, Loader, Footer, Services, Transactions} from './components';


const App = () => {
 
  return (
    
      <div className="min-h-screen">

        <div className="bg-welcome">
        <Navbar />
        <Welcome />
        </div>

        
        <Footer />
      </div>

      
    
   
  )
}

export default App;
