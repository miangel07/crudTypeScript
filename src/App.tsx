import Home from "./components/subComponents/Home"



function App() {


  return (
    <>
      <section className="h-screen w-full" >
        <div className="w-full justify-center flex items-center ">
          <h1 className="text-3xl font-bold  mt-4 underline">
            Crud Basico
          </h1>
        </div>
        <Home />
      </section>

    </>
  )
}

export default App
