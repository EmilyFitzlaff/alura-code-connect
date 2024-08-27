import './App.css'
import SearchInput from './components/SearchInput'
import Sidebar from './components/Sidebar'
import Filter from './components/Filter'
import Card from './components/Card'

function App() {
  return (
    <div className='container'>
      <Sidebar />

      <div className='main'>
        <SearchInput />
        <Filter />

        <Card />
      </div>     
    </div>
  )
}

export default App
