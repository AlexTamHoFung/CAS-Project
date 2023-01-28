export interface Customer {
	uuid: string;
	name: string;
	email: string;
	password: string;
	phone: number;
	year_of_birth?: number;
	month_of_birth?: number;
	age?: number;
	gender?: number;
	occupation?: string;
	income_group?: string;
	region?: string;
	qrcode?: string;
}

export interface Companies {
	id: number,
	name: string,
	username: string,
	password: string,
	number_of_store: number,
	target_customer: string,
	company_type: string,
	found_date: Date,
	size: string
}
export interface Stores {
	id: number,
	name: string,
	username: string,
	password: string,
	location: string,
	size: string,
	company_id: number
}

export interface Admins {
	id:number,
	username: string,
	password: string
}

export interface Advertisements {
	id: number,
	advertisement_type: string,
	description: string,
	start_date: Date,
	end_date: Date,
	is_deleted: boolean,
	company_id: number
}

export interface Promotions {
	id: number,
	name: string,
	description: string,
	discount: number,
	promotion_type: string,
	start_date: string,
	end_date: string,
	listing_id: number
}

export interface Listings {
	id: number,
	name: string,
	description: string,
	coupon_type: string,
	points_required: number,
	valid_start: Date,
	valid_end: Date,
	company_id: number
}

export interface Points {
	id: number,
	amount: number,
	point_type: string,
	customer_id: number
}