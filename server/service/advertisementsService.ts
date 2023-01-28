import { Knex } from "knex";
import { Advertisements } from "./model";

export class AdvertisementsService {
	constructor(private dbClient: Knex) {}

	async getAd() {
		const getAd = await this.dbClient("advertisements")
			.select("*")
		return getAd;
	}

	async getAdByID(company_id: number) {
		const getAd = await this.dbClient<Advertisements>("advertisements")
			.select("*")
			.where("company_id", company_id)

		return getAd;
	}

    async createAd(
        advertisement_type: string,
        description: string,
        start_date: Date,
        end_date: Date,
        company_id: number
    ) {
        const insertData = { advertisement_type, description , start_date, end_date, company_id}
        const result = await this.dbClient("advertisements")
        .insert(insertData)
        .returning("id");
        return result[0].id;
    }

    async deleteAd(id: number) {
        const result = await this.dbClient("advertisements")
        .update({"is_deleted": true})
        .where("id", id)
        return result[0].id
    }
    }
