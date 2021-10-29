import axios from 'axios';

let GithubUsers = (data) => {
    return axios.get(process.env.REACT_APP_API, {
        params: {
            q: data

        }


    })

}

export { GithubUsers }