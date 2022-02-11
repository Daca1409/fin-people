import React from 'react'
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import ViewListIcon from '@mui/icons-material/ViewList';
import { Link } from "react-router-dom";
import { fetchData } from './UsersService';

export const NavBar = (props) => {

    const changeGrid = () => {
        props.setGrid(!props.grid)
    }
    const refresh = () => {
        fetchData(props.setUsers);
        props.setLoading(true)

    }

    return (
        <div className='container-fluid navBar py-2 m-0'>
            <div className='row w-75 m-auto p-0 d-flex justify-content-between'>
                <Link to="/" className='col-4 d-flex justify-content-start p-0 text-white h2 decor'>Find People</Link>
                <div className='col-1 d-flex justify-content-end align-items-center p-0  text-white'>
                    <Link to="/about" className='p-2  text-white align-items-center decor'>About</Link>
                    <p onClick={refresh} className='p-2 btn text-white m-0'><RefreshIcon></RefreshIcon></p>
                    <p onClick={changeGrid} className='p-2 btn text-white m-0'>{props.grid ? <ViewComfyIcon></ViewComfyIcon> : <ViewListIcon></ViewListIcon>}</p>
                </div>
            </div>
        </div>
    )
}
