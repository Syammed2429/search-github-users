let Card = ({ data }) => {
    return (
        <>
            <div className="  container  text-center" >

                {data.map((items) => (
                    <div key={items.id} className=" card w-50 my-3 py-3   container d-flex flex-row ">
                        <img className="card-img-top col-4 " src={items.avatar_url} alt="Profile" />
                        <div className="col">
                            <div className="card-text mt-3 row ">Username : {items.login}</div>
                            <div className=" row ">User Profile link: <a className="ml-2" href={items.html_url}> {items.html_url}</a></div>

                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
export { Card }