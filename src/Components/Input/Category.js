import React from 'react'

function Category(props) {
    return (
        <div className="category">
            <label htmlFor="category"></label>
            <span>CATEGORY</span><select name="category">
            <option value="kitchen">Kitchen</option>
            <option value="office">Office Supplies</option>
            <option value="maintance">Maintance</option>
            </select>
        </div>
    )
}

export default Category;
