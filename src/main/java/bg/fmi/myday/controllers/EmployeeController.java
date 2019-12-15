package bg.fmi.myday.controllers;

import bg.fmi.myday.entities.WorkingHours;
import bg.fmi.myday.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

import bg.fmi.myday.entities.Employee;
import bg.fmi.myday.repositories.EmployeeRepository;

import javax.servlet.http.HttpSession;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    private final EmployeeRepository employeeRepository;

    public EmployeeController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @GetMapping("/employees")
    public List<Employee> listEmployees() {
        return (List<Employee>) employeeRepository.findAll();
    }

    @GetMapping("/employees/{username}")
    public Employee getEmployee(@PathVariable String username) {
        return employeeService.find(username);
    }

    @PostMapping("/employees")
    void addEmployee(@RequestBody Employee employee) {
        employeeRepository.save(employee);
    }

    @PostMapping("employees/loghours")
    public Employee  logHour(@RequestBody WorkingHours log, HttpSession session)
    {
        Long id = (Long)session.getAttribute("id");
        Optional<Employee> emp =  employeeRepository.findById(id);
        Employee emp1 =emp.get();
        emp1.getWorkingh().add(log);

        return employeeRepository.findById(id).get();

    }
}
