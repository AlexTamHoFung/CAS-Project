import type { Request, Response } from "express";
import { logger } from "../utils/logger";
import { AdvertisementsService } from "../service/advertisementsService";

export class AdvertisementsController {
	constructor(private advertisementsService: AdvertisementsService) {}

    getAd = async (req: Request, res: Response) => {
        const adResult = await this.advertisementsService.getAd()
        res.json(adResult)
    }
	getAdById= async (req: Request, res: Response) => {
		try {
			const { company_id } = req.body;
			const adResult = await this.advertisementsService.getAdByID(company_id);

			if (adResult.length > 0) {
				res.json({ message: "found ad", data: adResult });
				return;
			} else {
				res.status(400).json({ message: "no such ad" });
			}
		} catch (error) {
			logger.error(error.message);
			res.status(500).json({ message: "internal server error" });
			
		}
	}
    createAd = async (req: Request, res: Response) => {
		const { advertisement_type, description , start_date, end_date, company_id } = req.body;
		const ad = await this.advertisementsService.createAd(
            advertisement_type, description , start_date, end_date, company_id
		);

		if (ad.length > 0) {
			res.json({ message: "create success" });
		} else {
			res.status(400).json({ message: "create failed" });
		}
	};

    deleteAd = async (req: Request, res: Response) => {
        const { id } = req.body;
        const ad = await this.advertisementsService.deleteAd(id)

        if (ad.length > 0) {
			res.json({ message: "delete success" });
		} else {
			res.status(400).json({ message: "delete failed" });
		}
    }}