import './featured.scss'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Featured = () => {
  return (
    <div className="featured">
        <div className="top">
            <div className="title">Total Revenue</div>
            <MoreVertOutlinedIcon fontSize='small'/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar 
                value={70} 
                text={"70%"}
                strokeWidth={3} />
            </div>
            <p className="title">Total Sales for Today</p>
            <p className="amount">$800</p>
            <p className="desc">Last Payments will not be shown.</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult positive">
                        <KeyboardArrowDownOutlinedIcon fontSize='small'/>
                        <div className="resultAmount">$12.99</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownOutlinedIcon fontSize='small'/>
                        <div className="resultAmount">$12.99</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult positive">
                        <KeyboardArrowDownOutlinedIcon fontSize='small'/>
                        <div className="resultAmount">$12.99</div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Featured