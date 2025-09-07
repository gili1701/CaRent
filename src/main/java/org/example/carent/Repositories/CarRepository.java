package org.example.carent.Repositories;

import org.example.carent.Model.Car;
import org.example.carent.Model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface CarRepository extends JpaRepository<Car, Long> {


}