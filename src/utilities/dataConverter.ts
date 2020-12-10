import Expense from "../types/Expense";
import { getDaysInMonth } from "./dateConverter";

const colors = ["#00873D", "#3D138D", "#00739D", "#A2423D", "#FF4040", "#FFAA15", "#00C781"];

/**
 * Filter Convert our data to a chart compatible format
 * @param data {Array} Array of Expense to convert to compatible chart format
 * @returns pieChartJSON {JSON} JSON object which the chart can transpile
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const dataToPieChart = (data: Expense[]): any => {
    const labels = getCategories(data);
    const expenses = getExpenses(data);
    const expenseData: number[] = [];

    labels.forEach((item, iterator, array) => {
        expenses.filter((item) => {
            if (item.category.name === array[iterator]) {
                // we need to check if the entry already exists and sum up the values
                expenseData[iterator]
                    ? expenseData[iterator] = (expenseData[iterator]) + (item.amount * -1)
                    : expenseData[iterator]= item.amount * -1;
            }
        });
    });

    const pieChartJSON = {
        labels: labels,
        datasets: [
            {
                data: expenseData,
                backgroundColor: colors,
            },
        ],
    };

    return pieChartJSON;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const dataToLineChart = (data: Expense[], month: number): any => {
    const labels = [];
    const daysInThisMonth = getDaysInMonth(new Date(), month);

    for (let i = 1; i <= daysInThisMonth; i++) {
        labels.push(i);
    }

    const currentIncome: number[] = []
    const currentExpense: number[] = []
    labels.forEach((item) => {
        currentIncome[item] = 0;
        currentExpense[item] = 0;
    })

    data.forEach((item) => {
        const day = new Date(item.created_at).getDate();

        if (item.amount < 0) {
            if (currentExpense[day]) {
                currentExpense[day] = currentExpense[day] + item.amount;
            } else {
                currentExpense[day] = item.amount;
            }
        } else {
            if (currentIncome[day]) {
                currentIncome[day] = currentIncome[day] + item.amount;
            } else {
                currentIncome[day] = item.amount;
            }
        }
    })

    const lineChartJSON = {
        labels: labels,
        datasets: [
            {
                label: "Ausgaben",
                data: currentExpense.splice(1),
                fill: false,
                backgroundColor: "#A2423D",
                borderColor: "#A2423D",
            },
            {
                label: "Einnahmen",
                data: currentIncome.splice(1),
                fill: false,
                backgroundColor: "#00873D",
                borderColor: "#00873D",
            },
        ],
    };

    return lineChartJSON;
};

const getExpenses = (data: Expense[]): Expense[] => {
    return data.filter((element) => element.amount < 0);
};

/**
 * Fetch categories from store
 * @param data our store
 * @returns string[] all categories cleaned from doubles
 */
export const getCategories = (data: Expense[]): string[] => {
    const categories: string[] = [];
    data.forEach((element) => categories.push(element.category.name));
    return Array.from(new Set(categories));
};

/**
 * Fetch users from store
 * @param data our store
 * @returns string[] all users cleaned from doubles
 */
export const getUsers = (data: Expense[]): string[] => {
    const users: string[] = [];
    data.forEach((element) => users.push(element.user.name));
    return Array.from(new Set(users));
};

/**
 * Get the highest ID in our store
 * @param data our store
 * @returns number highest id in store
 */
export const getHighestId = (data: Expense[]): number => {
    const ids = data.map((item) => item.id);
    return Math.max.apply(null, ids);
}
