import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

const New = () => {
  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h3>Add New User</h3>
        </div>

        <div className="bottom">

          <div className="left">
            <img src="https://th.bing.com/th/id/OIP.vpU_KUELPRjvDl4PvY0xIAHaHa?pid=ImgDet&rs=1" 
              alt="avatar" />
          </div>

          <div className="right">
            <form action="">

              <div className="formInput">
                <label htmlFor="file">Image: <DriveFolderUploadIcon className="icon"/></label>
                <input type="file"id="file" style={{display: "none"}} placeholder="kazue_shiroe" />
              </div>

              <div className="formInput">
                <label htmlFor="">First Name</label>
                <input type="text" placeholder="kazue_shiroe" />
              </div>

              <div className="formInput">
                <label htmlFor="">Last Name</label>
                <input type="text" placeholder="kazue_shiroe" />
              </div>

              <div className="formInput">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="kazue@gmail.com" />
              </div>

              <div className="formInput">
                <label htmlFor="">Phone</label>
                <input type="text" placeholder="+1 02934" />
              </div>

              <div className="formInput">
                <label htmlFor="">Password</label>
                <input type="password" placeholder="11111" />
              </div>

              <div className="formInput">
                <label htmlFor="">Address</label>
                <input type="text" placeholder="129 st, NewYork" />
              </div>

              <div className="formInput">
                <label htmlFor="">Country</label>
                <input type="text" placeholder="USA" />
              </div>

              <button>Sned</button>

            </form>
          </div>

        </div>

      </div>
    </div>
  )
}

export default New