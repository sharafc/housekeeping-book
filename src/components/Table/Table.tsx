import React, { ReactElement } from "react";
import Expense from "../../types/Expense";

interface Props {
    readonly data: Expense[];
}

function Table(props: Props): ReactElement {
    
    const renderTableHeader = () => {
        const header = Object.keys(props.data[0]);
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>;
        });
    };


    const renderTableBody = () => {
        return props.data.map((item) => {
            const { id, text, amount, user, category } = item;
            return (
                <tr key={item.id}>
                    <td>{id}</td>
                    <td>{category.name}</td>
                    <td>{user.name}</td>
                    <td>{amount}</td>
                    <td>{text}</td>
                </tr>
            );
        });
    };

    return (
        <table>
            <thead>
                <tr>{renderTableHeader()}</tr>
            </thead>
            <tbody>{renderTableBody()}</tbody>
        </table>
    );
}

export default Table;
