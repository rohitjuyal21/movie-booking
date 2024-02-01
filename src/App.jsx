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
        <Route path='/' element={<Layout />}>
          <Route index element={<Feed />} />
          <Route path='bookings' element={<MyTickets />} />
          <Route path=':id' element={<Summary />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
