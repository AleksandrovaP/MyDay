package bg.fmi.myday;

import bg.fmi.myday.entities.Employee;
import bg.fmi.myday.repositories.EmployeeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.stream.Stream;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    CommandLineRunner init(EmployeeRepository employeeRepository) {
        return args -> {
            Stream.of("John", "Julie", "Jennifer", "Helen", "Rachel").forEach(name -> {
                Employee employee = new Employee(name, name.toLowerCase() + "@domain.com");
                employeeRepository.save(employee);
            });
            employeeRepository.findAll().forEach(System.out::println);
        };
    }
}
