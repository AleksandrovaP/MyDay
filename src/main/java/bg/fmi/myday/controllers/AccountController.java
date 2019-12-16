package bg.fmi.myday.controllers;

import bg.fmi.myday.entities.Employee;
import bg.fmi.myday.services.EmployeeService;
import bg.fmi.myday.util.UserAccessError;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import bg.fmi.myday.entities.User;
import bg.fmi.myday.services.UserService;

import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("account")
public class AccountController {

    public static final Logger logger = LoggerFactory.getLogger(AccountController.class);

    @Autowired
    private UserService userService;
    @Autowired
    private EmployeeService employeeService;

    // request method to create a new account by a guest
    @CrossOrigin
    @PostMapping(value = "/register")
    public ResponseEntity<?> createUser(@RequestBody User newUser) {
        if (userService.find(newUser.getUsername()) != null) {
            logger.error("username Already exist " + newUser.getUsername());
            return new ResponseEntity(
                    new UserAccessError("user with username " + newUser.getUsername() + "already exist "),
                    HttpStatus.CONFLICT);
        }

        User user = userService.save(newUser);
        if (user.getRole().equals("employee")) {
            Employee employee = new Employee(user.getname(), user.getUsername());
            employeeService.save(employee);
        } else {
           // TODO: do the same for manager
        }

        return new ResponseEntity<User>(user, HttpStatus.CREATED);
    }

    // this is the login api/service
    @CrossOrigin
    @PostMapping("/login")
    public ResponseEntity<?> user(@RequestBody User user, HttpSession session) {
        if (userService.find(user.getUsername()) != null) {
            logger.info("user logged " + user);
            session.setAttribute("id",user.getId());
            // TODO: implement login
            return new ResponseEntity<>(user, HttpStatus.OK);
        }

        return new ResponseEntity<>(new UserAccessError("Username or password is incorrect"), HttpStatus.FORBIDDEN);
    }
    // this is the login api/service
    @CrossOrigin
    @PostMapping("/logout")
    public ResponseEntity<?> logout() {
        //TODO: Do actual logout
//        if (userService.find(user.getUsername()) != null) {
//            logger.info("user logged " + user);
//            return new ResponseEntity<>(user, HttpStatus.OK);
//        }
//
//        return new ResponseEntity<>(new UserAccessError("Username or password is incorrect"), HttpStatus.FORBIDDEN);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }



}
