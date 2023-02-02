import { Knex } from "knex";
import { Transactions } from "./model";

export class TransactionsService {
	constructor(private dbClient: Knex) {} 
        async getTransaction(customer_id: number) {
            const getTransactions = await this.dbClient<Transactions>("transactions")
                .select("*")
                .where("customer_id", customer_id)
            return getTransactions;
        }

        async createTransaction(transaction_date: string,
            amount: string,
            payment_method: string,
            collect_point: boolean,
            is_refund: boolean,
            store_user_id: number,
            customer_id: number) {
                const insertData = {transaction_date, amount, payment_method, collect_point, is_refund, store_user_id, customer_id}
                const result = await this.dbClient("transactions")
                .insert(insertData)
                .returning("id");
                return result[0].id;
            }
    }