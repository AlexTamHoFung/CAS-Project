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