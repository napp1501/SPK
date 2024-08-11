package spk.smartphone.controllers;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import lombok.AllArgsConstructor;
import spk.smartphone.models.User;
import spk.smartphone.models.dto.request.LoginRequest;
import spk.smartphone.models.dto.request.UserRequest;
import spk.smartphone.models.dto.response.LoginResponse;
import spk.smartphone.services.AuthService;

@RestController
@AllArgsConstructor
@RequestMapping
public class AuthController {
    private AuthService authService;

    @PostMapping("/registration")
    public User registration(@RequestBody UserRequest userRequest) {
        return authService.registration(userRequest);
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest loginRequest){
        return authService.login(loginRequest);
    }
}
