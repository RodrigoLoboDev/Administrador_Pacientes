import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { DraftPatients, Patients } from "./types";
import { v4 as uuidv4 } from 'uuid'


// type del state
type PatientsState = {
    patients: Patients[]
    id: Patients['id']
    addPatients: (data: DraftPatients) => void // void no retorna nada
    removePatients: (id: Patients['id']) => void
    getPatientsId: (id: Patients['id']) => void
    modifyPatients: (date: DraftPatients) => void
}

// Nuestro hook
// set - para modificar el state
// get - para tomar el state
export const usePatientsStore = create<PatientsState>()(devtools(persist((set) => ({ // le pasamos el type via generick
    patients: [],
    id: '',
    addPatients: (data) => {

        const newPatients = {
            id: uuidv4(),
            ...data
        }
        // console.log(newPatients);
        set((state) => ({
            patients: [
                ...state.patients,
                newPatients
            ]
        }))    
    },

    removePatients: (id) => {
        set((state) => ({
            patients: state.patients.filter(patient => patient.id !== id)
        }))
    },

    getPatientsId: (id) => {
        set(() => ({
            id: id
        }))
    },

    modifyPatients: (date) => {
        set((state) => ({
            patients: state.patients.map(patient => {
                if (patient.id === state.id) {
                    return {
                        id: state.id,
                        ...date
                    }
                }
                return patient
            }),
            id: '' // reseteamos el ID
        }))
    }
}), {
    name: 'patients-storage'
})
))