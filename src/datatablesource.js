export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user', headerName: 'User', width: 230, renderCell: (params) => {
        return (
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar"/>
                {params.row.username}
            </div>
        )
    }},
    { field: "email", headerName: 'Email', width: 230},
    { field: "age", headerName: 'Age', width: 100},
    { field: "status", headerName: 'Status', width: 100, 
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
    },
]

export const userRows = [
    {
        id: 133,
        username: "Iphone 12",
        img: "https://th.bing.com/th/id/R.db836436ef6a0586e458fdb0014b7454?rik=9OuYxMUYDF7HNQ&pid=ImgRaw&r=0",
        status: "active",
        email: "chyu@gmail.com",
        age: 30,
    },
    {
        id: 134,
        username: "Iphone 13",
        img: "https://th.bing.com/th/id/R.bc096e512a6605c092d9de5e46505132?rik=lNmeVbb3z1wDeQ&pid=ImgRaw&r=0",
        status: "inactive",
        email: "chyu@gmail.com",
        age: 30,
    },
    {
        id: 135,
        username: "Iphone 10",
        img: "https://th.bing.com/th/id/OIP.XW_PF2CxwiCqTlaseXe6ZAAAAA?pid=ImgDet&rs=1",
        status: "pending",
        email: "chyu@gmail.com",
        age: 30,
    }
]