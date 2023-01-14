import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
                <img src="https://cdn4.iconfinder.com/data/icons/thanksgiving-add-on-flat/48/Thanksgiving_Add_-_On-09-512.png" 
                    alt="avatar" 
                    className='avatar' />
            <Link to="/" style={{textDecoration: "none"}}>
                <div className="logo">Maple</div>
            </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">Main</p>
                <li>
                    <DashboardIcon className="icon" />
                    <span>DashBoard</span>
                </li>

                <p className="title">List</p>
                <Link to="/users" style={{textDecoration: "none"}}>
                    <li>
                        <PersonOutlineIcon className="icon" />
                        <span>Users</span>
                    </li>
                </Link>

                <Link to="/products" style={{textDecoration: "none"}}>
                    <li>
                        <CategoryIcon className="icon" />
                        <span>Products</span>
                    </li>
                </Link>

                <Link to="/orders" style={{textDecoration: "none"}}>
                    <li>
                        <ShoppingCartIcon className="icon" />
                        <span>Orders</span>
                    </li>
                </Link>

                <p className="title">Useful</p>
                <li>
                    <HealthAndSafetyIcon className="icon" />
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsActiveIcon className="icon" />
                    <span>Notification</span>
                </li>

                <p className="title">Service</p>
                <li>
                    <HealthAndSafetyIcon className="icon" />
                    <span>System Health</span>
                </li>
                <li>
                    <HealthAndSafetyIcon className="icon" />
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsOutlinedIcon className="icon" />
                    <span>Setting</span>
                </li>

                <p className="title">User</p>
                <li>
                    <AssignmentIndOutlinedIcon className="icon" />
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutOutlinedIcon className="icon" />
                    <span>LogOut</span>
                </li>
            </ul>
        </div>

        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar