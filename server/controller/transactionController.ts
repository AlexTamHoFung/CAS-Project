import type { Request, Response } from "express";
import { logger } from "../utils/logger";
import { TransactionsService } from "../service/transactionsService";

export class TransactionsController {
	constructor(private transactionsService: TransactionsService) {}

    getTransaction = async (req: Request, res: Response) => {
		try {
			const { uuid } = req.body;
			const transactionResult = await this.transactionsService.getTransaction(uuid);

			if (transactionResult.length > 0) {
				res.json({ message: "found transaction", data: transactionResult });
				return;
			} else {
				res.status(400).json({ message: "no such transaction" });
			}
		} catch (error) {
			logger.error(error.message);
			res.status(500).json({ message: "internal server error" });
			
		}
	}
    createTransaction = async (req: Request, res: Response) => {
		const { transaction_date, amount, payment_method, collect_point, is_refund, store_user_id, customer_id } = req.body;
		const transaction = await this.transactionsService.createTransaction(
            transaction_date, amount, payment_method, collect_point, is_refund, store_user_id, customer_id
		);

		if (transaction.length > 0) {
			res.json({ message: "create transaction success" });
		} else {
			res.status(400).json({ message: "create transaction failed" });
		}
	}
}
