import { ApiProvider } from "./context/ApiContext"
import { ConfrontoProvider } from "./context/ConfrontoContext"
import { PreferitiProvider } from "./context/PreferitiContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import HomePage from "./pages/HomePage"
import PreferitiPage from "./pages/PreferitiPage"
import ViniPage from "./pages/ViniPage"
import VinoDettaglioPage from "./pages/VinoDettaglioPage"
import NotFoundPage from "./pages/NotFoundPage"

function App() {

  /*************
      RENDER
  **************/
  return (
    <>
      {/* Providers */}
      <ApiProvider>
        <PreferitiProvider>
          <ConfrontoProvider>

            {/* Routing */}
            <BrowserRouter>

              {/* Rotte */}
              <Routes>
                <Route element={<DefaultLayout/>} >
                  <Route path="/" element={<HomePage/>} />

                  <Route path="/vini">
                    <Route index element={<ViniPage/>} />
                    <Route path=":id" element={<VinoDettaglioPage/>} />
                  </Route>

                  <Route path="/preferiti" element={<PreferitiPage/>} />

                  {/* Se nessuna rotta corrisponde -> mostra pagina 404 */}
                  <Route path="*" element ={<NotFoundPage/>} />
                </Route>
              </Routes>

            </BrowserRouter>

          </ConfrontoProvider>
        </PreferitiProvider>
      </ApiProvider>
  </>
  )
}

export default App