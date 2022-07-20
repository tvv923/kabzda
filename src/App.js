import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
//import {Dialogs} from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';

function App(props) {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      {/* <Profile /> */}
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element={<Profile   />} /> 
          <Route path='/dialogs' element={<DialogsContainer  />} >
              <Route path=':id' element={<DialogsContainer   />} />
            </Route>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
