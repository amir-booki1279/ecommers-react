import 'react'
import Header from '../components/layout/Header'
import { Outlet } from 'react-router-dom'



export default function MainLayout() {
  return (
    <div className='max-h-screen'>
        <Header/>
        <main>
          <Outlet/>
        </main>
    </div>
  )
}
