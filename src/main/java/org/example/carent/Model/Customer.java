package org.example.carent.Model;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Customer {
    @GeneratedValue
    @Id
    private int customerId;
    private String name;
    private String address;
    private String phone;
    private String password;
    private String email;


    @OneToMany
    private List<Car> carList;

    public Customer(String name, String address, String phone, String email,String password) {
    }
}