import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div class="container">
      <MyForm />
    </div>
  );
}

function MyForm(){
  return(
    <form>
    <label for="fname">First name:</label><br/>
    <input type="text" id="fname" name="fname"/><br/>
    <label for="lname">Last name:</label><br/>
    <input type="text" id="lname" name="lname"/>
    </form>
  );
}