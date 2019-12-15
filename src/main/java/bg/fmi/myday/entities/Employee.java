package bg.fmi.myday.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private final String name;
    private final String username;

    public Employee() {
        this.name = "";
        this.username = "";
    }

    public Employee(String name, String username) {
        this.name = name;
        this.username = username;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return username;
    }

    @Override
    public String toString() {
        return "Employee{" + "id=" + id + ", name=" + name + ", username=" + username + '}';
    }
}
