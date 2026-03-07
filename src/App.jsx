import Navbar from "./components/Navbar"
import ConfrontaPage from "./pages/ConfrontaPage"
import HomePage from "./pages/HomePage"
import PreferitiPage from "./pages/PreferitiPage"
import ViniPage from "./pages/ViniPage"
import VinoDettaglioPage from "./pages/VinoDettaglioPage"

function App() {

  return (
    <>
      <Navbar/>
      <HomePage/>
      <ViniPage />
      <VinoDettaglioPage/>
      <ConfrontaPage/>
      <PreferitiPage/>
    </>
  )
}

export default App
