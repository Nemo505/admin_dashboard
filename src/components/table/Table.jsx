import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const List = () => {
    const rows = [
        {
            id: 133,
            product: "Iphone 12",
            img: "https://th.bing.com/th/id/R.db836436ef6a0586e458fdb0014b7454?rik=9OuYxMUYDF7HNQ&pid=ImgRaw&r=0",
            customer: "Chyu",
            date: "12 Feb",
            amount: 14,
            method: "Cash On Devivery",
            status: "Approved",
        },
        {
            id: 134,
            product: "Iphone 13",
            img: "https://th.bing.com/th/id/R.bc096e512a6605c092d9de5e46505132?rik=lNmeVbb3z1wDeQ&pid=ImgRaw&r=0",
            customer: "Nemo",
            date: "13 Feb",
            amount: 14,
            method: "Cash On Devivery",
            status: "Approved"
        },
        {
            id: 135,
            product: "Iphone 10",
            img: "https://th.bing.com/th/id/OIP.XW_PF2CxwiCqTlaseXe6ZAAAAA?pid=ImgDet&rs=1",
            customer: "Chyu",
            date: "22 March",
            amount: 20,
            method: "Online Payment",
            status: "Pending"
        }
    ]
  return (
    <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
            <TableCell className="tableCell">Id</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {rows.map((row) => (
            <TableRow
                key={row.id}>
                <TableCell component="th" scope="row">
                {row.id}
                </TableCell>
                <TableCell align="tableCell">
                    <div className="cellWrapper">
                        <img src={row.img} alt="" />
                        {row.product}
                    </div>
                </TableCell>
                <TableCell align="tableCell">{row.customer}</TableCell>
                <TableCell align="tableCell">{row.date}</TableCell>
                <TableCell align="tableCell">{row.amount}</TableCell>
                <TableCell align="tableCell">{row.method}</TableCell>
                <TableCell align="tableCell">
                    <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer> 
    )
}

export default List