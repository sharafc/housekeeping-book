import Category from "./Category";
import User from "./User";

export default interface Expense {
    id: number;
    text: string;
    amount: string;
    user: User;
    category: Category;
}
