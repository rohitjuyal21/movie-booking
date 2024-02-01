import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Summary from './screens/Summary/Summary'
import MyTickets from './screens/MyTickets/MyTickets'
import Layout from './Layout/Layout'
import Feed from './screens/Feed/Feed'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Feed />} />
          <Route path='/tickets' element={<MyTickets />} />

        </Route>
        <Route path='/:id' element={<Summary />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
