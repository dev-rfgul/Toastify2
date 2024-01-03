import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const notify = () => toast("All credits to Dev rf-gul");
  return (
    <div>
      <button onClick={notify}>Login</button>
      <ToastContainer />
    </div>
  )
}

export default App