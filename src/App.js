import Header from './components/Header'
import TextField from './components/TextField'

var city = 'Enter a city'

function getCurrentDate() {
  var today = new Date()
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0')
  var yyyy = today.getFullYear()

  today = mm + '/' + dd + '/' + yyyy
  return today
}

function App() {
  return (
    <>
      <Header title = {getCurrentDate()}> </Header>
      <TextField title = {city}> </TextField>
    </>
  );
}

export default App;