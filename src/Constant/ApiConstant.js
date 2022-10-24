const DOMAIN_NAME = "https://localhost:8080/"

export const CUSTOMER_API = {
    "InsertCustomerApi": DOMAIN_NAME + "insertCustomer",
    "DeleteCustomer": (userId) => DOMAIN_NAME + "deleteCustomer/"+userId,
    "ViewCustomer":(userId) => DOMAIN_NAME + "viewCustomer/"+userId

}