import { userLogin,userRegister } from '../redux/features/auth/authAction';
import store from '../redux/store';

export const handleLogin = async (e, email, password,setLoading) => {
  e.preventDefault();
  try {
    if (!email || !password) {
      return alert('Please provide all fields');
    }

     // Set loading to true when the form is submitted
     setLoading(true); 
    await store.dispatch(userLogin({ email, password }));
    setLoading(false); 
     // Set loading to false after successful login
  } catch (error) {
    setLoading(false); // Set loading to false if there is an error during login
    console.error('Login failed:', error);
  }
};



export const handleRegister = async(e,  firstname, lastname, email, password,country, isnotbusinessentinty,companyname,purpose, phone,setLoading) => {
    e.preventDefault();
    console.log('Inside handleRegister function');
    try {
     
        if (!firstname || !lastname || !email || !password ||  !purpose || !phone ) {
            return alert('Please provide all fields');
          }
          setLoading(true); 
          await store.dispatch(userRegister({    firstname, lastname, email,country, password, isnotbusinessentinty,companyname,purpose, phone}))
          setLoading(false); 
    } catch (error) {
      setLoading(false); 
        console.log(error)
        
    }
}