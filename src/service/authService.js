import { userLogin, userRegister } from '../redux/features/auth/authAction';
import store from '../redux/store';

export const handleLogin = async (e, email, password, setLoading) => {
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



export const handleRegister = async (
  e,
  firstName,
  lastName,
  email,
  password,
  purpose,
  companyName,
  phone,
  country,
  isNotBussinessEntity,
  isSeller,
  setLoading
) => {
  e.preventDefault();
  console.log('Inside handleRegister function');
  try {
    setLoading(true);
    // Assuming userRegister returns some data after successful registration
    const responseData = await store.dispatch(
      userRegister({
        firstName,
        lastName,
        email,
        password,
        purpose,
        companyName,
        phone,
        country,
        isNotBussinessEntity,
        isSeller,
      })
    );
    setLoading(false);
    return responseData; // Return the data after successful registration
  } catch (error) {
    setLoading(false);
    console.log(error);
    throw error; // Rethrow the error so that it can be caught in the handleSubmit function
  }
};

