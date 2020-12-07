import React, { ReactElement } from "react";
import Expense from "../../types/Expense";
import { convertStringToHumanReadableDateString } from "../../utilities/dateConverter";
import styles from "./Table.module.scss"

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
            const { id, amount, category, created_at, user, text  } = item;
            return (
                <tr key={item.id}>
                    <td data-th="ID">{id}</td>
                    <td data-th={amount > 0 ? "Einnahme" : "Ausgabe"}>{amount}</td>
                    <td data-th="Kategorie">{category.name}</td>
                    <td data-th="Datum">{convertStringToHumanReadableDateString(created_at)}</td>
                    <td data-th="Nutzer">{user.name}</td>
                    <td data-th="Text">{text}</td>
                </tr>
            );
        });
    };

    return (
        <table className={styles.rwd_table}>
            <thead>
                <tr>{renderTableHeader()}</tr>
            </thead>
            <tbody>{renderTableBody()}</tbody>
        </table>
    );
}

export default Table;
