function LeftPannelComponent() {
    return (
        <>
            <div className="w-full flex border-b">
                <h4 className="w-full">project name</h4>
            </div>
            <div className="w-full border-b left-panel-group">
                <ul>
                    <li className="flex p-1 justify-between active"><p>Group 1</p><i>r</i></li>
                    <li className="flex p-1 justify-between"><p>Group 2</p><i>r</i></li>
                    <li className="flex p-1 justify-between"><p>Group 3</p><i>r</i></li>
                    <li className="flex p-1 justify-between" ><p>Group 4</p><i>r</i></li>
                    <li className="flex p-1 justify-between"><p>Group 5</p><i>r</i></li>
                </ul>
            </div>
            <div className="w-full">
                <button type="button">Add Group</button>
            </div>
        </>
    );
}

export default LeftPannelComponent;