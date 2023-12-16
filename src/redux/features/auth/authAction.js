import { createAsyncThunk } from '@reduxjs/toolkit'
import API from '../../../service/API'
import { toast } from 'react-toastify'



export const userLogin = createAsyncThunk(
    'auth/login',
    async ({  email, password }, { rejectWithValue }) => {
        try {
            const { data } = await API.post('http://localhost:5000/signin', {  email, password })
            //store token
            if (data) {
                localStorage.setItem('token', data.token);
                toast.success("Login Successfull")
                
                
                    window.location.replace('/')
              
            }
            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }

        }
    }
)

//register  

export const userRegister = createAsyncThunk(
    'auth/register',
    async ({firstName,
      lastName,
      email,
      password,
      purpose,
      companyName,
      phone,
      country,
      isNotBussinessEntity,
    isSeller }, { rejectWithValue }) => {
        try {
            const { data } = await API.post('http://localhost:5000/signup', { firstName,
            lastName,
            email,
            password,
            purpose,
            companyName,
            phone,
            country,
            isNotBussinessEntity,
          isSeller})
            if (data) {
                
                
                console.log("user registered successfully")
                console.log(data)
                
            }
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }

        }
    }
)


//current user

// export const getCurrentUser = createAsyncThunk(
//     'aith/getCurrentUser',
//     async ({ rejectWithValue }) => {
//         try {
//             const res = await API.get('/auth/current-user')
//             if (res?.data) {
//                 return res?.data
//             }
//         } catch (error) {
//             if (error.response && error.response.data.message) {
//                 return rejectWithValue(error.response.data.message)
//             } else {
//                 return rejectWithValue(error.message)
//             }
//         }
//     }
// )

const apiUrl = 'http://localhost:5000/alibaba';

export const fetchCartItems = async () => {
  try {
    const response = await fetch(`${apiUrl}/getcarts`);

    if (response.ok) {
      const cartItemsData = await response.json();
      return cartItemsData;
    } else {
      console.error('Error fetching cart items:', response.status);
      return null;
    }
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export const fetchProductDetails = async (productId) => {
  try {
    const response = await API.get(`${apiUrl}/usergetone/${productId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product details for ID ${productId}:`, error);
    return null;
  }
};

export const mergeData = async (cartItemsData, setMergedCartItems) => {
  const productIds = cartItemsData?.addtocart?.map(item => item.product) || [];

  try {
    const productDetailsArray = await Promise.all(productIds.map(fetchProductDetails));

    const mergedCartItems = cartItemsData.addtocart.map((cartItem, index) => ({
      ...cartItem,
      productDetails: productDetailsArray[index],
    }));

    setMergedCartItems(mergedCartItems);
    console.log("merg", mergedCartItems);
  } catch (error) {
    console.error('Error merging data:', error);
  }
};