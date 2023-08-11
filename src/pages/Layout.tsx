import {Outlet} from 'react-router-dom'


const Layout = () => {
  return (
    <div className='bg-gray-900 text-white'>Layout
        <Outlet></Outlet>
    </div>
  )
}

export default Layout