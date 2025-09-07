package org.example.carent.Services;

import org.example.carent.Model.Customer;
import org.example.carent.Repositories.CarRepository;
import org.example.carent.Repositories.CustomerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public abstract class ClientService {

    protected CustomerRepository customerRepo;
    protected CarRepository carRepo;


    public ClientService(CustomerRepository customerRepo, CarRepository carRepo) {
        customerRepo = customerRepo;
        carRepo = carRepo;
    }

    public boolean login(String email, String password) {

        return false;
    }

    public boolean register(Customer cus) {
        // שמור את הלקוח במסד הנתונים
        customerRepo.save(cus);
        return true;
    }

    public List<Customer> getAllCustomer() {
        // שמור את הלקוח במסד הנתונים
        return customerRepo.findAll();

    }


}
