
import ThemeToggle from '../components/Navbar/ThemeToggle'
import CarList from '../components/Car/CarList'
import Navbar from '../components/commons/Header'
function Home() {
  return (
    <>
    <Navbar/>
     <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <CarList />
    </div>
    </>
  )
}

export default Home
