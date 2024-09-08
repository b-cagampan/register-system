import './App.css'
import FormReview from './pages/FormReview';
import { Route, Routes } from 'react-router-dom';
import Forms from './pages/Forms';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Forms/>}/>
      <Route path='/auth' element={<FormReview/>}/>
    </Routes>
  )
}

export default App
