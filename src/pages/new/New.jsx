import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from "react";

const New = ({inputs, title}) => {
  const [file, setFile] = useState("");

  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h3>{title}</h3>
        </div>

        <div className="bottom">

          <div className="left">
            <img src={file ? URL.createObjectURL(file) : "https://th.bing.com/th/id/OIP.vpU_KUELPRjvDl4PvY0xIAHaHa?pid=ImgDet&rs=1"} 
              alt="avatar" />
          </div>

          <div className="right">
            <form action="">

              <div className="formInput">
                <label htmlFor="file">Image: <DriveFolderUploadIcon className="icon"/></label>
                <input type="file"id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{display: "none"}} />
              </div>

              {inputs.map((input) => (

                <div className="formInput" key={input.id}>
                  <label htmlFor="">{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>

              ))}


              <button>Send</button>

            </form>
          </div>

        </div>

      </div>
    </div>
  )
}

export default New