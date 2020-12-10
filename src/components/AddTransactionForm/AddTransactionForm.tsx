import { Form, FormField, TextInput, Box, Button, Select, DateInput, Main, Text } from 'grommet';
import React, { ReactElement, useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import Expense from '../../types/Expense';
import { getCategories, getHighestId, getUsers } from '../../utilities/dataConverter';
import { converStringToDatabaseDate, convertStringToHumanReadableDateString } from '../../utilities/dateConverter';
import { mutateData } from '../../utilities/graphql';
import { ExpensesContext } from '../App';

interface Props {
    id?: number
    payDate?: string
}

function AddTransactionForm(props: Props): ReactElement {
    const { store, dispatch } = useContext(ExpensesContext);
    const history = useHistory();

    const [category, setCategory] = useState<string>();
    const [amount, setAmount] = useState<string>("");
    const [user, setUser] = useState<string>();
    const [text, setText] = useState<string>("");
    const [payDate, setPayDate] = useState<string>(props.payDate || new Date().toISOString());
    const [id] = useState<number>(props.id || getHighestId(store.expenses) + 1);
    const [message, setMessage] = useState<string | undefined>(undefined);

    const onSubmitFunction = () => {
        setMessage("");
        if (category && amount && user) {
            const createdAt = converStringToDatabaseDate(convertStringToHumanReadableDateString(payDate));
            const formData: Expense = {
                category: {
                    name: category,
                },
                amount: +amount.replace(",", "."),
                user: {
                    name: user,
                },
                text,
                created_at: createdAt,
                id,
            };
            mutateData( formData, () => {
                dispatch({ type: "addItem", payload: formData });
                history.push("/dashboard");
            });
        } else {
            setMessage("Please fill in all fields");
        }
    };

    const onCancelBackToDashboard = () => {
        history.push("/dashboard");
    };

    if (store.expenses.length === 0) {
        history.push("/dashboard");
    }

    return (
        <Main pad="large">
            <Form
                id="transaction"
                style={{ width: "large" }}
                onSubmit={onSubmitFunction}
            >
                {message && (
                    <Box pad={{ horizontal: "small" }}>
                        <Text color="status-error">{message}</Text>
                    </Box>
                )}

                <FormField name="category" htmlFor="category" label="Kategorie">
                    <Select
                        id="category"
                        options={getCategories(store.expenses)}
                        value={category}
                        onChange={({ option }) => setCategory(option)}
                    />
                </FormField>
                <FormField name="amount" htmlFor="amount" label="Betrag">
                    <TextInput
                        type="text"
                        id="amount"
                        name="amount"
                        value={amount}
                        pattern="[/^\-?\d+[\.|,]?\d*$/]"
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </FormField>
                <FormField name="user" htmlFor="user" label="Bezahlt von">
                    <Select
                        id="user"
                        options={getUsers(store.expenses)}
                        value={user}
                        onChange={({ option }) => setUser(option)}
                    />
                </FormField>
                <FormField name="text" htmlFor="text" label="Freitext">
                    <TextInput
                        type="text"
                        id="text"
                        name="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </FormField>
                <FormField name="date" htmlFor="date" label="Buchungsdatum">
                    <DateInput
                        id="date"
                        name="date"
                        format="dd.mm.yyyy"
                        value={payDate}
                        onChange={({ value }) => setPayDate(value as string)}
                    />
                </FormField>
                <TextInput type="hidden" value={id} />
                <Box gap="medium" direction="row" justify="end">
                    <Button type="button" label="Cancel" onClick={onCancelBackToDashboard} />
                    <Button type="submit" primary label="Transaktion speichern" />
                </Box>
            </Form>
        </Main>
    );
}

export default AddTransactionForm;
