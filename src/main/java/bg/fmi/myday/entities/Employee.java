package bg.fmi.myday.entities;

import javax.persistence.*;
import java.util.List;

@Entity
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private final String name;

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public List<WorkingHours> getWorkingh() {
        return workingh;
    }

    public void setWorkingh(List<WorkingHours> workingh) {
        this.workingh = workingh;
    }

    private final String username;
    @ManyToMany
    private List<WorkingHours> workingh;

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