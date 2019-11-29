package bg.fmi.myday.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bg.fmi.myday.entities.User;
import bg.fmi.myday.repositories.UserRepository;


@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public User save(User user) {
        return userRepository.saveAndFlush(user);
    }

    public User update(User user) {
        return userRepository.save(user);
    }

    public User find(String userName) {
        return userRepository.findByUsername(userName);
    }

    public User find(Long id) {
        return userRepository.findById(id).orElse(null);
    }
}

