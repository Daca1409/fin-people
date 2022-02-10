import moment from 'moment'


export const isFemale = (user) => {
    if (user.gender === "female") {
        return true
    } else
        return false
}

export const countFemale = (users) => {
    var result = users.filter(user => isFemale(user)).length
    return result
}

export const countMale = (users) => {
    var result = users.filter(user => !isFemale(user)).length
    return result
}


export const hideEmail = (email) => {
    var hiddenEmail = "";
    for (let i = 0; i < email.length; i++) {
        if (i >= 3 && i <= 6) {
            hiddenEmail += ".";
        } else {
            hiddenEmail += email[i];
        }
    }
    return hiddenEmail;
}


export const formatDate = (birthday) => {
    var date = new Date(birthday)
    var output = moment(date).format('YYYY-MM-DD')
    return output
}

export const searchByLetter = (string, search) => {
    if (string.toLowerCase().indexOf(search.toLowerCase()) === 0) {
        return true
    }
}

export const showUsers = (user, search) => {
    if (search === "") {
        return user
        // } else if (user.name.first.toLowerCase().includes(search.toLowerCase()) || user.name.last.toLowerCase().includes(search.toLowerCase())) {
    } else if (searchByLetter(user.name.first, search)) {
        return true
    } else if (searchByLetter(user.name.last, search)) {
        return true
    }
}


export const filteredUsers = (users, search) => {
    return users.filter((user) => showUsers(user, search))

}

export const fetchData = (setUsers) => {
    fetch('https://randomuser.me/api/?results=15').then(file => {
        file.text().then(txt => {
            var obj = JSON.parse(txt)
            setUsers(obj.results);
            console.log(obj.results)
        })
    })


}




