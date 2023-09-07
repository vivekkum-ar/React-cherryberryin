import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';


interface LayoutProps {
  // Add your prop types here
  theme : String;
  updateTheme : Function;
}
const Layout: React.FC<LayoutProps> = ({theme,updateTheme}) => {
  // const [theme, setTheme] = useState("light");
  return (
    <div className='dark:bg-gray-900 bg-white w-screen'>
      <Navbar theme = {theme} updateTheme = {updateTheme}></Navbar>
        <Outlet></Outlet>
      <Footer theme = {theme} updateTheme = {updateTheme}></Footer>
    </div>
  )
}

export default Layout