import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'


interface LayoutProps {
  // Add your prop types here
  theme : String;
  updateTheme : Function;
}
const Layout: React.FC<LayoutProps> = ({theme,updateTheme}) => {
  // const [theme, setTheme] = useState("light");
  return (
    <div className=''>
      <Navbar theme = {theme} updateTheme = {updateTheme}></Navbar>
        <Outlet></Outlet>
    </div>
  )
}

export default Layout