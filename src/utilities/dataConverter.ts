import Expense from "../types/Expense";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const dataToPieChart = (data: Expense[]): any => {
    const categories: string[] = [];
    data.forEach(element => categories.push(element.category.name));
    const labels = getUniqueArray(categories);
    const expenses = getExpenses(data);
    const expenseData: number[] = [];
    labels.forEach((item, iterator, array) => {
        expenses.filter((item) => {
            if (item.category.name === array[iterator]) {
                expenseData.push(item.amount);
            }
        });
    });

    return `{
        "labels": [${labels}],
        "datasets": [
            {
                "data": [${expenseData}],
                "backgroundColor": ["red", "#36A2EB", "#FFCE56", "purple"]
            }
        ]
    }`;
}

const getIncome = (data: Expense[]): Expense[] => {
    return data.filter((element) => element.amount > 0);
}

const getExpenses = (data: Expense[]): Expense[] => {
    return data.filter((element) => element.amount < 0);
};

/**
 * Helper which returns a unique arrray with no doubles
 * @param array array to clean up of doubles
 */
const getUniqueArray = (array: string[]): string[] => {
    const uniqueArray: string[] = [];

    for (const i of array) {
        if (uniqueArray.indexOf(i) === -1) {
            uniqueArray.push(i);
        }
    }

    return uniqueArray;
}

/**
 * Helper to check JSON validity
 * @param string string to check if it is valid JSON
 * @returns boolean true | false
 */
const isValidJSONString = (string: string): boolean => {
    try {
        JSON.parse(string);
    } catch (e) {
        return false;
    }
    return true;
}
