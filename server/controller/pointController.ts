import type { Request, Response } from "express";
import { logger } from "../utils/logger";
import { PointsService } from "../service/pointsService";

export class PointsController {
	constructor(private pointsService: PointsService) {}

    getPoint = async (req: Request, res: Response) => {
		try {
			const { customer_id } = req.body;
			const pointResult = await this.pointsService.getPoint(customer_id);

			if (pointResult.length > 0) {
				res.json({ message: "found promo", data: pointResult });
				return;
			} else {
				res.status(400).json({ message: "no such promo" });
			}
		} catch (error) {
			logger.error(error.message);
			res.status(500).json({ message: "internal server error" });
			
		}
	}
    createPoint = async (req: Request, res: Response) => {
		const { amount, point_type, transaction_date, customer_id } = req.body;
		const point = await this.pointsService.createPoint(
            amount, point_type, transaction_date, customer_id
		);

		if (point.length > 0) {
			res.json({ message: "create point success" });
		} else {
			res.status(400).json({ message: "create point failed" });
		}
	}
}