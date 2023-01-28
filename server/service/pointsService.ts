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

        async createPoint(	amount: number,
            point_type: string,
            customer_id: number) {
                const insertData = {amount, point_type, customer_id}
                const result = await this.dbClient("points")
                .insert(insertData)
                .returning("id");
                return result[0].id;
            }
    }
