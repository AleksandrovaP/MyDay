package bg.fmi.myday.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import bg.fmi.myday.entities.Employee;
import bg.fmi.myday.repositories.EmployeeRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {

    private final EmployeeRepository employeeRepository;

    public EmployeeController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @GetMapping("/users")
    public List<Employee> listEmployees() {
        return (List<Employee>) employeeRepository.findAll();
    }

    @PostMapping("/employees")
    void addEmployee(@RequestBody Employee employee) {
        employeeRepository.save(employee);
    }
}
