package com.projects.aichess.user;

import com.projects.aichess.model.LoginRequest;
import com.projects.aichess.model.LoginResponse;
import com.projects.aichess.model.RegisterRequest;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class UserController {


    private final UserService userService;


    public UserController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public void register(@RequestBody RegisterRequest body) {
        userService.register(body.username(), body.password());
    }


    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest body) {
        String token = userService.login(body.username(), body.password());
        return new LoginResponse(token);
    }


}
