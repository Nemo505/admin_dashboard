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

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <div className="logo">Maple</div>
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
                <li>
                    <PersonOutlineIcon className="icon" />
                    <span>Users</span>
                </li>
                <li>
                    <CategoryIcon className="icon" />
                    <span>Products</span>
                </li>
                <li>
                    <ShoppingCartIcon className="icon" />
                    <span>Orders</span>
                </li>

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