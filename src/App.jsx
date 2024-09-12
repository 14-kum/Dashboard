import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from './components/shared/Layout'
import Dashboard from './components/Dashboard'
import Products from './components/Products'
import TransactionChart from "./components/TransactionChart"


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />



        
          <Route path="products" element={<Products />} />
          <Route path="transactionChart" element={<TransactionChart/>} />
          </Route>
          <Route path="login" element={<div>This is login page</div>} />
      </Routes>
    </Router>
  )
}

export default App
