package bg.fmi.myday.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import bg.fmi.myday.entities.Employee;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long> {

    Employee findByUsername(String username);

}
