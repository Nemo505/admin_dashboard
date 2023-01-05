import './sidebar.scss'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <div className="logo">Maple</div>
        </div>
        <hr />
        <div className="center">
            <ul>
                <li>
                    <span>DashBoard</span>
                </li>
                <li>
                    <span>DashBoard</span>
                </li>
                <li>
                    <span>DashBoard</span>
                </li>
                <li>
                    <span>DashBoard</span>
                </li>
            </ul>
        </div>
        <div className="bottom">color options</div>
    </div>
  )
}

export default Sidebar