import { Form, FormField, TextInput, Box, Button, Select, DateInput, Main } from 'grommet';
import React, { ReactElement, useState } from 'react'
import { useHistory } from 'react-router-dom';

function AddTransactionForm(): ReactElement {
    const [value, setValue] = useState({});
    const history = useHistory()

    const onCancelBackToDashboard = () => {
        history.push("/dashboard");
    }

    return (
        <Main>
            <Form value={value} onReset={() => setValue({})} style={{width: "large"}}>
                <FormField name="category" htmlFor="category" label="Kategorie">
                    <Select id="category" options={["Sonstiges", "Auto", "Miete", "Versicherung", "Haushalt"]} />
                </FormField>
                <FormField name="amount" htmlFor="amount" label="Betrag" required>
                    <TextInput type="number" id="amount" name="amount" min="-100000000" />
                </FormField>
                <FormField name="user" htmlFor="user" label="Bezahlt von">
                    <Select id="user" options={["Christian", "Kathrin"]} />
                </FormField>
                <FormField name="text" htmlFor="text" label="Freitext">
                    <TextInput type="text" id="text" name="text" />
                </FormField>
                <FormField name="date" htmlFor="date" label="Buchungsdatum">
                    <DateInput id="date" name="date" format="dd.mm.yyyy" value={new Date().toISOString()} />
                </FormField>
                <Box gap="medium" direction="row" justify="end">
                    <Button type="button" label="Cancel" onClick={onCancelBackToDashboard} />
                    <Button type="reset" secondary label="Reset" />
                    <Button type="submit" primary label="Transaktion speichern" />
                </Box>
            </Form>
        </Main>
    );
}

export default AddTransactionForm;
