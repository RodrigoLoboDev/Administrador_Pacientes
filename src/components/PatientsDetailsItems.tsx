
type PatientsDetailsItemsProps = {
    label: string
    data: string
}

const PatientsDetailsItems = ({label, data} : PatientsDetailsItemsProps) => {
  return (
    <p className=" font-bold mb-3 text-gray-700 uppercase ">{label}: {''}
        <span className=" font-normal normal-case">{data}</span>
    </p>
  )
}

export default PatientsDetailsItems