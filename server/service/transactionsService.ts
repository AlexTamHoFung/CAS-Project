import { Knex } from "knex";
import { Transactions } from "./model";

export class TransactionsService {
	constructor(private dbClient: Knex) {} 
        async getTransaction(uuid:string) {
            const getTransactions = await this.dbClient<Transactions>("transactions")
                .select("*")
                .join("customers", "transactions.customer_id", "customers.id")
                .join("store_users", "transactions.store_user_id", "store_users.id")
                .join("companies", "store_users.company_id", "companies.id")
                .where("customers.uuid", uuid)
            return getTransactions;
        }

        async createTransaction(transaction_date: string,
            amount: string,
            payment_method: string,
            collect_point: boolean,
            is_refund: boolean,
            store_user_id: number,
            uuid:string) {
                const insertData = {transaction_date, amount, payment_method, collect_point, is_refund, store_user_id}
                if (collect_point == false){
                const result = await this.dbClient("transactions")
                .insert(insertData)
                .returning("id");
                return result[0].id;
            }
         else { const id = await this.dbClient("customers")
                .select("id")
                .where("uuid", uuid)
                .returning("id")

                const result = await this.dbClient("transactions")
                .insert(insertData, id)
                .returning("id");
                return result[0].id
        }
    }
}