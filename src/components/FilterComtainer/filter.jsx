import React, {useState} from "react";

export default function Filter({data, renderFunction}) =>  {
    const [filterValue, setFilterValue] = useState('');

    const filteredData = data.filter(item =>
        item.title.toLowerCase().includes(filterValue.toLowerCase()) ||
    item.body.toLowerCase().includes(filterValue.toLowerCase())
    );

    return (
        <section>
        <input type="text" value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
        placeholder="Wright her..."/>
        {renderFunction(filteredData)}
        </section>
    );
};