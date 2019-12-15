package bg.fmi.myday.services;

import bg.fmi.myday.entities.Employee;
import bg.fmi.myday.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
    @Autowired
    EmployeeRepository employeeRepository;

    public Employee save(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Employee update(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Employee find(String username) {
        return employeeRepository.findByUsername(username);
    }

    public Employee find(Long id) {
        return employeeRepository.findById(id).orElse(null);
    }
}
