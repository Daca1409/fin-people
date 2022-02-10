import React, { useState } from 'react'

export const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsername = (event) => {
        setUsername(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const submit = () => {
        alert(username + " " + password)
    }

    const reset = () => {
        setUsername('')
        setPassword('')
    }
    return (
        <div>
            <form>
                <label>
                    Name:
                    <input value={username} onChange={handleUsername} type="text" name="name" />
                </label>
                <label>
                    Password:
                    <input value={password} onChange={handlePassword} type="text" name="password" />
                </label>
                <button onClick={() => submit()} >Submit</button>
                <button onClick={() => reset()} >Reset</button>
            </form>
        </div>
    )
}