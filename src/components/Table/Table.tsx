import React, { ReactElement, useContext } from "react";
import { Trash } from "grommet-icons";
import Expense from "../../types/Expense";
import { convertStringToHumanReadableDateString } from "../../utilities/dateConverter";
import styles from "./Table.module.scss"
import { ExpensesContext } from "../App";
import { deleteData } from "../../utilities/graphql";

interface Props {
    readonly data: Expense[];
}

function Table(props: Props): ReactElement {
    const { dispatch } = useContext(ExpensesContext);

    const onDeleteItem = (id: number) => {
        console.log("clicked", id)
        deleteData(id, (result) => {
            console.log(result)
            dispatch({ type: "deleteItem", payload: id });
        });
    }

    const renderTableHeader = () => {
        const header = Object.keys(props.data[0]);
        header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>;
        });
        return (
            <>
                <th>Betrag</th>
                <th>Kategorie</th>
                <th>Buchungsdatum</th>
                <th>Konto</th>
                <th>Kommentar</th>
                <th></th>
            </>
        )
    };

    const renderTableBody = () => {
        return props.data.map((item) => {
            const { amount, category, created_at, user, text  } = item;
            return (
                <tr key={item.id}>
                    <td data-th={amount > 0 ? "Einnahme" : "Ausgabe"}>{amount}</td>
                    <td data-th="Kategorie">{category.name}</td>
                    <td data-th="Datum">{convertStringToHumanReadableDateString(created_at)}</td>
                    <td data-th="Nutzer">{user.name}</td>
                    <td data-th="Text">{text}</td>
                    <td data-th="Löschen"><Trash onClick={() => onDeleteItem(item.id)} /></td>
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
