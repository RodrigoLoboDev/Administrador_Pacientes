import PatientForm from "./components/PatientsForm"
import PatientsList from "./components/PatientsList"
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"


function App() {

  return (
    <>
     <header className=" container mx-auto mt-20 w-[95%]">
      <h1 className=" text-center font-black text-4xl md:w-2/3 md:mx-auto">Seguimiento de Pacientes {''} <span className=" text-indigo-700">Veterinaria</span></h1>
     </header>

     <div className=" mt-10 md:flex">
      <PatientForm />
      <PatientsList />
     </div>
     <ToastContainer />
    </>
  )
}

export default App
