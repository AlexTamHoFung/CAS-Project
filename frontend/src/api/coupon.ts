const { REACT_APP_API_BASE } = process.env;

export interface Coupon {
  id: number;
  name: string;
  description: string;
  coupon_type: string;
  points_required: number;
  valid_start: string;
  valid_end: string;
  company_id: number;
}

export const getCouponApi = async () => {
  const resp = await fetch(`${REACT_APP_API_BASE}/listings/getListing`);
  const result = await resp.json();
  if (resp.status < 200 || resp.status >= 300) {
    throw new Error(result.message);
  }
  return result as Coupon[];
};
