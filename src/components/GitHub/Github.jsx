import React from 'react';
import { Card } from './Card/Card';
import { GithubUsers } from './GithubUsers';



let Github = () => {
    const [inputText, setInputText] = React.useState("");
    const [data, setData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);



    const handleAdd = () => {
        setIsLoading(true)
        GithubUsers(inputText)
            .then((res) => {
                setData(res.data.items)
            }).finally(() => {

                setIsLoading(false)
            })
    }



    return (
        <>
            <h1 className="text-secondary">Search GitHub Users</h1>
            <input
                value={inputText}
                className="form-control container col-2 mt-3"
                onChange={(e) => {
                    setInputText(e.target.value)
                }}
                type="text"
                placeholder="Enter a Github Username" />

            <button
                disabled={isLoading}
                onKeyUp={(e) => {

                }}
                className="btn btn-info col-2 bordered border-warning "
                onClick={handleAdd}>
                {isLoading ? "Loading" : "Search"}
            </button>
            <Card data={data} />

        </>
    );

}

export { Github }

