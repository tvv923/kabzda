import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      {/* <Profile /> */}
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch}    />} /> 
          <Route path='/dialogs' element={<Dialogs  store={props.store} />} >
              <Route path=':id' element={<Dialogs  store={props.store} />} />
            </Route>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
