import React, { useState } from 'react'
import { User } from './User'
import { Search } from './Search'
import { Gender } from './Gender'
import { countFemale, countMale, filteredUsers } from './UsersService'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

export const Users = ({ grid, users, loading }) => {
    const [search, setSearch] = useState('')

    return (
        <div>
            <Search search={search} setSearch={setSearch} ></Search>
            <Gender numOfWomen={countFemale(filteredUsers(users, search))} numOfMen={countMale(filteredUsers(users, search))}></Gender>
            <div className={grid ? "row w-75 m-auto" : ""}>
                {!loading ? <> {filteredUsers(users, search).length === 0 ? <div className='noSearch text-muted  d-flex flex-column '>
                    <div><SentimentVeryDissatisfiedIcon className='smile'></SentimentVeryDissatisfiedIcon></div>
                    <div className="text-center pt-3">We couldn't find any people matching your search </div>
                </div> : filteredUsers(users, search).map((user) => (
                    <User grid={grid} key={user.dob.date} user={user}></User>
                ))}</> : <div class="sk-cube-grid">
                    <div class="sk-cube sk-cube1"></div>
                    <div class="sk-cube sk-cube2"></div>
                    <div class="sk-cube sk-cube3"></div>
                    <div class="sk-cube sk-cube4"></div>
                    <div class="sk-cube sk-cube5"></div>
                    <div class="sk-cube sk-cube6"></div>
                    <div class="sk-cube sk-cube7"></div>
                    <div class="sk-cube sk-cube8"></div>
                    <div class="sk-cube sk-cube9"></div>
                </div>}
            </div>
        </div >
    )
}
