const Header = (props) => {
  return (
    <header className = 'header'>
      <h1> Weather </h1>
      <h2> Today is {props.title} </h2>
    </header>
  )
}

export default Header