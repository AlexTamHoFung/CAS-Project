Routes map [[updated on 1 FEb 2023]]-->

/customers
./register
    ~ req.body -> name, email, password, phone
./getCustomer
    ~ req.body -> phone
./login
    ~ req.body -> email, password

/companies
./register
    ~ req.body -> name, username, password, number of store, target_customers, company_type, found_date, size
./getCompany
    ~ req.body -> username
./login
    ~ req.body -> username, password
./update
    ~ req.body -> number_of_store, target_customer, size

/stores
./register
    ~ req.body -> name, username, password, location, size, company_id
./getStore
    ~ req.body -> username
./login
    ~ req.body -> username, password

/admins
./getAdmin
    ~ req.body -> name
./login
    ~ req.body -> username, password

/promotions
./get
    ~ req.body -> customer_id
./create
    ~ req.body -> amount, point_type, customer_id

/listings
./getListing
    ~ req.body -> ??
./getListingById
    ~ req.body -> company_id
./create
    ~ req.body -> name, description , coupon_type, points_required, valid_start, valid_end, company_id
./delete
    ~ req.body -> id

/points
./get
    ~ req.body -> customer_id
./create    
    ~ req.body -> amount, point_type, customer_id


