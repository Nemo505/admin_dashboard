import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";

const Datatable = () => {

    const actionColumn = [
        { field: "action", headerName: "Action", width: 200, renderCell: ()=> {
            return (
                <div className='cellAction'>
                    <Link to="/users/test" style={{textDecoration: "none"}}>
                        <div className="viewButton">View</div>
                    </Link>
                    <div className="deleteButton">Delete</div>
                </div>
            )
        }
        }
    ]

  return (
    <div className="datatable">
        <div className="datatableTitle">
            Add New User
            <Link to="/users/new" className="link">
                Add New User
            </Link>
        </div>
        <DataGrid
            rows={userRows}
            columns={userColumns.concat(actionColumn)}
            pageSize={7}
            rowsPerPageOptions={[7]}
            checkboxSelection
        />
    </div>
  )
}

export default Datatable