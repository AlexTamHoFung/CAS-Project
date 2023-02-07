import { Knex } from "knex";
import { hashPassword } from "../utils/hash";

export async function seed(knex: Knex): Promise<void> {
  await knex("admins").del();
  await knex("customers").del();
  await knex("store_users").del();
  await knex("companies").del();

  await knex("coupon_listings").del();
  await knex("transactions").del();
  await knex("coupons").del();
  await knex("promotions").del();
  await knex("points").del();
  await knex("coupon_transactions").del();

  // admins
  let hashedadmin = await hashPassword("admin");
  await knex("admins").insert([
    {username: "admin1", password: hashedadmin},
    {username: "admin2", password: hashedadmin},
  ]);

// customers
  let hashedcustomer = await hashPassword("1234");
  await knex("customers").insert([
    {   name: "alex",
        phone: 98765432,
        email: "alex@hello.com",
        username: "alex", 
        password: hashedcustomer,
        gender: "male",
        yob: 2000,
        mob: 9,
        occupation: "engineer",
        income_group: "rich",
        region: "tsuenwan",
    },

    {   name: "chris",
        phone: 98765431,
        email: "chris@hello.com",
        username: "chris", 
        password: hashedcustomer,
        gender: "male",
        yob: 1994,
        mob: 4,
        occupation: "designer",
        income_group: "rich",
        region: "kowloontong"
    },
  ]);

// companies
// let hashedcompany = await hashPassword("com1234");
await knex("companies").insert([
  {   name: "com1",
      username: "com1", 
      password: "com1234",
      number_of_store: 20,
      target_customer: "target1",
      company_type: "restaurant",
      category: "restaurant",
      found_date: "1990-09-01",
      size: "medium",
  },
  {   name: "com2",
        username: "com2", 
        password: "com2345",
        number_of_store: 30,
        target_customer: "target2",
        company_type: "retail",
        category: "retail",
        found_date: "1986-09-01",
        size: "large",
    },
]);

// store_users
let hashedstoreuser = await hashPassword("1234");
await knex("store_users").insert([
  {   name: "user1",
      username: "user1", 
      password: hashedstoreuser,
      location: "tsuenwan",
      size: 30,
      company_id: 1,
  },
  {   name: "user2",
      username: "user2", 
      password: hashedstoreuser,
      location: "tsimshatsui",
      size: 40,
      company_id: 2,
  },
]);

// coupon_listings
await knex("coupon_listings").insert([
    {   name: "coupon1",
        description: "coupon1",
        coupon_type: "type1",
        points_required: 3000,
        valid_start: "2023-01-01",
        valid_end: "2023-03-01",
        is_deleted: false,
        company_id: 1
    },
    {   name: "coupon2",
        description: "coupon2",
        coupon_type: "type2",
        points_required: 4000,
        valid_start: "2023-01-01",
        valid_end: "2023-03-01",
        is_deleted: false,
        company_id: 1
    },
    {   name: "coupon3",
        description: "coupon3",
        coupon_type: "type3",
        points_required: 3000,
        valid_start: "2023-02-01",
        valid_end: "2023-03-01",
        is_deleted: false,
        company_id: 2
    },
    {   name: "coupon4",
        description: "coupon4",
        coupon_type: "type4",
        points_required: 4000,
        valid_start: "2023-02-01",
        valid_end: "2023-03-01",
        is_deleted: false,
        company_id: 2
    },
]);

// transactions
await knex("transactions").insert([
    {   amount: 1000,
        transaction_date: "2023-02-02",
        payment_method: "creditcard",
        collect_point: true,
        is_refund: false,
        store_user_id: 1,
        customer_id: 1
    },
    {   amount: 2000,
        transaction_date: "2023-02-02",
        payment_method: "cash",
        collect_point: true,
        is_refund: false,
        store_user_id: 1,
        customer_id: 1
    },
    {   amount: 1500,
        transaction_date: "2023-02-02",
        payment_method: "creditcard",
        collect_point: true,
        is_refund: false,
        store_user_id: 1,
        customer_id: 2
    },
    {   amount: 1200,
        transaction_date: "2023-02-02",
        payment_method: "cash",
        collect_point: true,
        is_refund: false,
        store_user_id: 1,
        customer_id: 2
    },
    {   amount: 1000,
        transaction_date: "2023-02-02",
        payment_method: "creditcard",
        collect_point: true,
        is_refund: false,
        store_user_id: 2,
        customer_id: 1
    },
    {   amount: 2000,
        transaction_date: "2023-02-02",
        payment_method: "cash",
        collect_point: true,
        is_refund: false,
        store_user_id: 2,
        customer_id: 1
    },
    {   amount: 1500,
        transaction_date: "2023-02-02",
        payment_method: "creditcard",
        collect_point: true,
        is_refund: false,
        store_user_id: 2,
        customer_id: 2
    },
    {   amount: 1200,
        transaction_date: "2023-02-02",
        payment_method: "cash",
        collect_point: true,
        is_refund: false,
        store_user_id: 2,
        customer_id: 2
    },
]);

// coupons
await knex("coupons").insert([
    {   name: "coupon1",
        transaction_date: "2023-02-02",
        description: "coupon1",
        expiry: "2023-03-01",
        is_used: false,
        is_expired: false,
        customer_id: 1
    },
    {   name: "coupon2",
        transaction_date: "2023-02-02",
        description: "coupon2",
        expiry: "2023-03-01",
        is_used: false,
        is_expired: false,
        customer_id: 1
    },
    {   name: "coupon3",
        transaction_date: "2023-02-02",
        description: "coupon3",
        expiry: "2023-03-01",
        is_used: false,
        is_expired: false,
        customer_id: 2
    },
    {   name: "coupon4",
        transaction_date: "2023-02-02",
        description: "coupon4",
        expiry: "2023-03-01",
        is_used: false,
        is_expired: false,
        customer_id: 2
    },
]);

// promotions
await knex("promotions").insert([
    {   name: "promo1",
        description: "promo1",
        discount: 100,
        promotion_type: "type1",
        start_date: "2023-01-01",
        end_date: "2023-03-01",
        is_deleted: false,
        listing_id: 1
    },
    {   name: "promo2",
        description: "promo2",
        discount: 500,
        promotion_type: "type2",
        start_date: "2023-01-01",
        end_date: "2023-03-01",
        is_deleted: false,
        listing_id: 2
    },
]);

// points
await knex("points").insert([
    {   amount: 10000,
        point_type: "add",
        transaction_date: "2023-02-02",
        customer_id: 1
    },
    {   amount: 10000,
        point_type: "add",
        transaction_date: "2023-02-02",
        customer_id: 2
    },
    {   amount: -2000,
        point_type: "redeem",
        transaction_date: "2023-02-02",
        customer_id: 1
    },
    {   amount: -3000,
        point_type: "redeem",
        transaction_date: "2023-02-02",
        customer_id: 2
    },
]);

// coupon_transactions
await knex("coupon_transactions").insert([
    {   total: 1,
        quantity: 1,
        transaction_date: "2023-02-02",
        customer_id: 1,
        listing_id: 1
    },
    {   total: 2,
        quantity: 2,
        transaction_date: "2023-02-02",
        customer_id: 1,
        listing_id: 2
    },
    {   total: 1,
        quantity: 1,
        transaction_date: "2023-02-02",
        customer_id: 2,
        listing_id: 1
    },
    {   total: 2,
        quantity: 2,
        transaction_date: "2023-02-02",
        customer_id: 2,
        listing_id: 2
    },
]);


}
