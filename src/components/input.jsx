function Input({cost, type}) {
return (
  <div className="ticket-type">
    <h2>{cost}</h2>
    <p>{type} <br /> <span>20/52</span></p>
  </div>
)
}

export default Input;