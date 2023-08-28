import logo from './logo.svg';
import './App.css';
import TopAppBar from './top-app-bar';
import { Routes,Route } from 'react-router-dom';
import routes from './routes';


function App() {
  return (
    <>
      <TopAppBar/>
      {
        <Routes>
          {routes.map((route,index)=>{

             return <Route
             key={index}
             element={route.component}
             path={route.path}
             />

          })}
        </Routes>
      }
    </>
  );
}

export default App;
