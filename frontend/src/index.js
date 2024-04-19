import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
 } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store/store'
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './Screens/HomeScreen';
import LogInScreen from './Screens/LogInScreen';
import SignUp from './Screens/SignUp';
import Profile from './Screens/Profile';
import PostAt from './Screens/PostAt';
import Favorite from './Screens/Favorite';
import EstateScreen from './Screens/EstateScreen';
import VirtualTourScreen from './Screens/VirtualTourScreen';
import SearchScreen from './Screens/SearchScreen';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <App /> } >
      <Route index={true} path='/' element={ <HomeScreen /> } />
      <Route path='/estates/:id' element={<VirtualTourScreen />} />
      <Route path='/login' element={ <LogInScreen /> } />
      <Route path='/signup' element={ <SignUp /> } />     

      <Route path='' element={<PrivateRoute />} >
          <Route path='/profile' element= { <Profile /> } />
          <Route path='/postat' element={ <PostAt />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/search' element={ <SearchScreen /> } />
      </Route>

      
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
