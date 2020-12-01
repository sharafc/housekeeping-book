import Category from "./Category";
import User from "./User";

export default interface Expense {
    id: number;
    text: string;
    amount: number;
    user: User;
    category: Category;
    
}
