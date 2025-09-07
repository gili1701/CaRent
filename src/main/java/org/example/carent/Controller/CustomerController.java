package org.example.carent.Controller;

import org.example.carent.Model.Customer;
import org.example.carent.Services.ClientService;

import java.util.List;

public class CustomerController {
    private ClientService clientService;

    //    Customer cus = new Customer();
    public List<Customer> getAllCustomer() {
        return clientService.getAllCustomer();
    }

}



