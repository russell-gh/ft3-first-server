const queries = {
    addUsers: (email) => {
        return `INSERT INTO users
                        (email)
                        VALUES
                        ("${email}");`
    },
    addPassword: (password, user_id) => {
        return `INSERT INTO logins
                            (password, user_id)
                            VALUES
                            ("${password}", "${user_id}");`
    }
}

module.exports = queries;