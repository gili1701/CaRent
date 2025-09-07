package org.example.carent.Services;

import org.example.carent.Model.Car;
import org.example.carent.Model.Customer;
import org.example.carent.Repositories.CarRepository;
import org.example.carent.Repositories.CustomerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService extends ClientService {
private CustomerRepository customerRepository;
private CarRepository carRepo;
    public AdminService(CustomerRepository customerRepo, CarRepository carRepo) {
        super(customerRepo, carRepo);
    }

    public List<Customer> getAllCustomer() {
         return customerRepository.findAll();
    }
    public List<Car> getAllCar() {
         return carRepo.findAll();
    }



}