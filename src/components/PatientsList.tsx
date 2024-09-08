import { usePatientsStore } from "../store"
import { Patients } from "../types";
import PatientsDetailsItems from "./PatientsDetailsItems";
import { toast } from 'react-toastify'

const PatientsList = () => {

  const patients = usePatientsStore(state => state.patients)
  const removePatients = usePatientsStore(state => state.removePatients)
  const getPatientsId = usePatientsStore(state => state.getPatientsId)
  
  const handleClick = (id : Patients['id']) => {
      removePatients(id)
      toast.error('Paciente Eliminado Correctamente')
  }

  return (
    <div className="md:w-1/2 lg:w-3/5 mx-5 md:h-screen overflow-y-scroll">

        {patients.length ? (
          <>
            <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Administra tus {''}
                <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p>

            <div className="mt-10 space-y-2">
              {patients.map(patient => (
                <div className="bg-white rounded-md shadow-md px-5 py-10 " key={patient.id}>
                  <PatientsDetailsItems label="ID" data={patient.id} />
                  <PatientsDetailsItems label="Nombre" data={patient.name} />
                  <PatientsDetailsItems label="Propietario" data={patient.caretaker} />
                  <PatientsDetailsItems label="Email" data={patient.email} />
                  <PatientsDetailsItems label="Fecha" data={patient.date.toString()} />
                  <PatientsDetailsItems label="Sintomas" data={patient.symptoms} />

                  <div className=" flex justify-between items-center gap-3 flex-col lg:flex-row">
                    <button className=" py-1 px-6 text-white uppercase font-bold text-center rounded-md bg-orange-600 w-full lg:w-auto" type="button"
                    onClick={() => getPatientsId(patient.id)}
                    >Editar</button>
                    <button className=" py-1 px-6 text-white uppercase font-bold text-center rounded-md bg-red-600 w-full lg:w-auto" type="button" 
                    onClick={() => handleClick(patient.id)}
                    >Eliminar</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Comienza agregando pacientes {''}
                <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
            </p>
          </>
        )}
        
    </div>
  )
}

export default PatientsList