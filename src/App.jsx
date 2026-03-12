import { PreferitiProvider } from "./context/PreferitiContext"
import DefaultLayout from "./layout/DefaultLayout"
import HomePage from "./pages/HomePage"
import PreferitiPage from "./pages/PreferitiPage"
import ViniPage from "./pages/ViniPage"
import VinoDettaglioPage from "./pages/VinoDettaglioPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ConfrontoProvider } from "./context/ConfrontoContext"

function App() {

  return (

    <PreferitiProvider>
      <ConfrontoProvider>
        <BrowserRouter>
          <Routes>

            <Route element={<DefaultLayout />}>

              <Route path="/" element={<HomePage />} />

              <Route path="/vini">
                <Route index element={<ViniPage />} />
                <Route path=":id" element={<VinoDettaglioPage />} />
              </Route>

              <Route path="/preferiti" element={<PreferitiPage />} />

            </Route>

          </Routes>
        </BrowserRouter>
      </ConfrontoProvider>
    </PreferitiProvider>
  )
}

export default App