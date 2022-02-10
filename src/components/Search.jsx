import React from 'react'
import SearchIcon from '@mui/icons-material/Search';



export const Search = ({ search, setSearch }) => {

    const showSearch = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div className='container-fluid w-75 m-auto d-flex justify-content-start pb-5 pt-3'>
            <div><SearchIcon></SearchIcon></div>
            <form action="/" method="get">
                <input
                    type="text"
                    placeholder="Search users"
                    name="s"
                    value={search}
                    onChange={showSearch}
                />

            </form>

        </div>

    )

}
