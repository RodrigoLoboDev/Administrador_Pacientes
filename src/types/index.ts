
export type Patients = {
    id: string
    name: string
    caretaker: string
    email: string
    date: Date
    symptoms: string
}

export type DraftPatients = Omit<Patients, 'id'>