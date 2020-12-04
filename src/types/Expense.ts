import Category from "./Category";
import User from "./User";

export default interface Expense {
    id: number;
    amount: number;
    category: Category;
    created_at: string;
    user: User;
    text: string;
}
