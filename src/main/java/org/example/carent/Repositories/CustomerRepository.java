package org.example.carent.Repositories;

import org.example.carent.Model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface CustomerRepository extends JpaRepository<Customer, Integer> {

    @Query("select c.customerId from Customer c where c.loginDetails.email = ?1 and c.loginDetails.password = ?2 ")
    public Integer login(String email, String password);
    public Boolean existsByEmail(String email);


}
