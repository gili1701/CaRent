package org.example.carent.Services;
import org.example.carent.Model.Car;
import org.example.carent.Model.Customer;
import org.example.carent.Repositories.CarRepository;
import org.example.carent.Repositories.CustomerRepository;
import org.springframework.stereotype.Service;

@Service
public class CustomerService extends ClientService {

    public CustomerService(CustomerRepository customerRepo, CarRepository carRepo) {
        super(customerRepo, carRepo);
    }

    public boolean purchesCar(Car car ){
        carRepo.save(car);
        return true;
    }
}
