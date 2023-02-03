import { Knex } from "knex";
import { Points } from "./model";

export class PointsService {
	constructor(private dbClient: Knex) {} 
        async getPoint(customer_id: number) {
            const getPoints = await this.dbClient<Points>("points")
                .select("*")
                .where("customer_id", customer_id)
            return getPoints;
        }

        async addPoint(	amount: number,
            point_type: string,
            transaction_date: string,
            customer_id: number) {
                const insertData = {amount, point_type, transaction_date, customer_id}
                const result = await this.dbClient("points")
                .insert(insertData)
                .returning("id");
                return result[0].id;
            }

        async redeemByPoint(amount: number,
            point_type: string,
            transaction_date: string,
            customer_id: number) {
                const insertData = {amount, point_type, transaction_date, customer_id}
                const result = await this.dbClient("points")
                .insert(insertData)
                .returning("id");
                return result[0].id;
            }

        async showTotalPoint(customer_id: number) {
            const totalPoints = await this.dbClient("points")
                .sum("amount")
                .where("customer_id", customer_id)
            return totalPoints;
        }

    }
