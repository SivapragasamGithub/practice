
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header'
import Heading from './Heading'
import Card from './Card'
function App() {

  return (
    <>
      <div className="container" >
      <Header/>
      <Heading/>
      <main>
      <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <Card subs="free" price="0" />
      <Card subs="Plus" price="15" />
      <Card subs="Enterprise" price="29" />
      </div>
      </main>
      
      </div>

      
    </>
  )
}

export default App
