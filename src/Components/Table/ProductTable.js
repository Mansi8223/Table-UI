import React from 'react'
import './Table.css'
import data from '../../Data/tableData.json'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AddIcon from '@mui/icons-material/Add';
import Rate from './Rate';

function ProductTable() {
//   const[products,setProducts]=useState("")
//   useEffect(()=>{
//     setProducts(data.products)
    console.log(data.products)
//   },[])
  return (
    <div className="table-wrapper">
        <div className='products-header'>
            <h2>Products</h2>
            <button className='btn'>
                <AddIcon/>
                Add products
            </button>
        </div>
        <TableContainer className="table">
            <Table size="small" aria-label="a dense table" >
            <TableHead>
                <TableRow className='table-header'>
                    <TableCell align="left">Title</TableCell>
                    <TableCell align="left">Description</TableCell>
                    <TableCell align="left">Price</TableCell>
                    <TableCell align="left">Discount</TableCell>
                    <TableCell align="left">Rating</TableCell>
                    <TableCell align="left">Stock</TableCell>
                    <TableCell align="left">Brand</TableCell>
                    <TableCell align="left">Category</TableCell>
                    <TableCell align="left">Images</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {data.products && data.products.map((item,index)=>(
                <TableRow key={index+1} className={index%2===0?'table-body-even':'table-body'}>
                    <TableCell component="th" scope="row">{item.title}</TableCell>
                    <TableCell align="left">{item.description}</TableCell>
                    <TableCell align="left">{item.price}</TableCell>
                    <TableCell align="left">{item.discountPercentage}</TableCell>
                    <TableCell align="center"><Rate ratings={item.rating}/></TableCell>
                    <TableCell align="left">{item.stock}</TableCell>
                    <TableCell align="left">{item.brand}</TableCell>
                    <TableCell align="left">{item.category}</TableCell>
                    <TableCell align="center">images</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default ProductTable