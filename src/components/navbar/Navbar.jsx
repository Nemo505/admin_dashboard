import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon/>
        </div>

        <div className="items">
          <div className="item">
            <LanguageIcon />
            English
          </div>
          <div className="item">
            <ModeNightIcon />
          </div>
          <div className="item">
            <NotificationsActiveIcon />
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon />
          </div>
          <div className="item">
            <FormatListBulletedIcon />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar