import "./widget.scss" 
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';

const Widget = ({ type }) => {
    let data;

    const amount = 300;
    const diff = 10;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: (
                    <Person2OutlinedIcon 
                    className="icon" 
                    style={{ backgroundColor : "#ffe5b4",
                        color : "#ff7f00"
                     }}
                     />
                    )
            }

            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: (
                    <ShoppingCartOutlinedIcon 
                    className="icon"
                    style={{ backgroundColor : "#add8e6",
                            color : "#0000ff"
                         }}
                         />
                    )
                    
            }
            break;
    
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: (
                    <MonetizationOnOutlinedIcon 
                    className="icon"
                    style={{ backgroundColor : "#a4c7a6" }}/>
                )
            }
            break;
    
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: (
                    <LocalAtmOutlinedIcon 
                    className="icon"
                    style={{ backgroundColor : "#ffd1d9",
                            color : "#ff1f44"
                         }}
                    />
                )
            }
            break;
    
        default:
            break;
    }

  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {amount}</span>
            <span className="link">{ data.link }</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpOutlinedIcon />
                {diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget