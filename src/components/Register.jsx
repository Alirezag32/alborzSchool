import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';
import {useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../config/firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
const Register = () => {
          
          let [inputUseStateEmail, inputUseStateFunctionUsername] = useState("")
          let [inputUseStatePassword,inputUseStateFunctionPassword] = useState("")
          let [pValue,setValueParagraph] = useState("")
          let navigate = useNavigate()
          
    const fechingData =   () => {
   
      createUserWithEmailAndPassword(auth, inputUseStatePassword, inputUseStateEmail)
        .then(res => {
          console.log("SECSESFULY",res)
          localStorage.setItem("username", inputUseStateEmail.trim());
          navigate("/");
        
        })
        .catch(res => {
        console.log("EROR",res)
      })
      
      

      
    
      
            }
          
function formHandeler() {

            
  if (inputUseStateEmail.length > 8 && inputUseStatePassword.length > 8) {
              
    fechingData()
              
             

  }
           
  else {
    //localStorage.setItem("username",inputElemFirst.current.value)
    setValueParagraph("لطفا اطلاعات را درست وارد کنید")
  }
           
           
}
          
  return (
    <div className="continer">
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            نام کاربری
          </label>
          <input
            value={inputUseStateEmail}
            onChange={(e) => {
              const value = e.target.value;
              inputUseStateFunctionUsername(value);
            }}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            هیچ وقت نام کاربری خود را با دیگران به اشتراگ نگذارید.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            رمز عبور
          </label>
          <input
            value={inputUseStatePassword}
            onChange={(e) => {
              const value = e.target.value;
              inputUseStateFunctionPassword(value);
            }}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button
          onClick={formHandeler}
          type="button"
          className="btn btn-primary"
        >
          ورود
        </button>

        

        <p className="pRegister">{pValue}</p>
      </form>
    </div>
  );
}
 
export default Register;