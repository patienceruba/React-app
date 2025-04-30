function Message() {
    let list = ["home", "Products", "services", "about-us"];
    // list=[];

    if (list.length < 1) {
        return (
            <div className="nav-bar">
                <h1>No content found!</h1>
                <ul>
                    {list.map((item, index)=>(<li key={item}>{item}</li>))}
                </ul>
            </div>
        );
    }

    return (
        <div className="nav-bar">
            <h1 onClick={() => console.log("logo icon")}>Test</h1>
            <ul>
                {list.map((item, index) => (
                    <li id={item} key={item}>
                        <a href="#" onClick={() => console.log(index + 1, item)}>
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Message;
