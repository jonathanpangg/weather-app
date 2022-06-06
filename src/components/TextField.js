const TextField = (props) => {
  return (
    <header className = 'header'>
        <label>
            City:
            <input type="text" name="name" /> 
        </label>
        <input type="submit" value="Submit" />
    </header>
  )
}

export default TextField