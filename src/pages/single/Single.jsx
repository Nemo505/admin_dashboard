import "./single.scss"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"

const Single = () => {
  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
        <Navbar />
          <div className="top">
            <div className="left">
              <div className="editButton">Edit</div>
              <h3 className="title">Information</h3>
              <div className="item">
                <img src="https://th.bing.com/th/id/R.7d638ed35d26d62f46f5136afb49aee6?rik=DsHuZeVbrXaang&pid=ImgRaw&r=0" 
                    alt="avatar" 
                    className="itemImg" />

                <div className="details">
                  <h4 className="itemTitle">Kazue</h4>

                  <div className="detailItem">
                    <span className="itemKey">Email :</span>
                    <span className="itemValue">kazue@gmail.com</span>
                  </div>

                  <div className="detailItem">
                    <span className="itemKey">Phone :</span>
                    <span className="itemValue">+95 0124358</span>
                  </div>

                  <div className="detailItem">
                    <span className="itemKey">Address :</span>
                    <span className="itemValue">Jose St. 323, New York</span>
                  </div>

                  <div className="detailItem">
                    <span className="itemKey">Country :</span>
                    <span className="itemValue">USA</span>
                  </div>

                </div>

              </div>
            </div>

            <div className="right">
              <Chart aspect={3/1} title="Last 6 days Detail" />
            </div>

          </div>
          <div className="bottom">
            <div className="title">Last Transactions</div>
            <List/>
          </div>
      </div>
    </div>
  )
}

export default Single