import MonthButton from "./MonthButton"


const Month = () => {
  return (
    <div className="flex">
      <MonthButton value={-2}/>
      <MonthButton value={-1}/>
      <MonthButton value={0}/>
    </div>
  )
}

export default Month