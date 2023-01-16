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
