package com.projects.aichess.user;

import com.projects.aichess.db.UserRepository;
import com.projects.aichess.db.entity.UserEntity;
import com.projects.aichess.security.JwtHandler;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {


    private final AuthenticationManager authenticationManager;
    private final JwtHandler jwtHandler;
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;


    public UserService(
            AuthenticationManager authenticationManager,
            JwtHandler jwtHandler,
            PasswordEncoder passwordEncoder,
            UserRepository userRepository
    ) {
        this.authenticationManager = authenticationManager;
        this.jwtHandler = jwtHandler;
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
    }


    public UserEntity register(String username, String password) throws UserAlreadyExistException {
        if (userRepository.existsByUsername(username)) {
            throw new UserAlreadyExistException();
        }


        UserEntity userEntity = new UserEntity(username, passwordEncoder.encode(password));
        return userRepository.save(userEntity);
    }


    public String login(String username, String password) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        return jwtHandler.generateToken(username);
    }

    public UserEntity findByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}
