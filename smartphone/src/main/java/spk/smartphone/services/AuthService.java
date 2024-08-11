package spk.smartphone.services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;



import lombok.AllArgsConstructor;
import spk.smartphone.models.Role;
import spk.smartphone.models.User;
import spk.smartphone.models.dto.request.LoginRequest;
import spk.smartphone.models.dto.request.UserRequest;
import spk.smartphone.models.dto.response.LoginResponse;
import spk.smartphone.repositories.UserRepository;

@Service
@AllArgsConstructor
public class AuthService {

  private ModelMapper modelMapper;
  private RoleService roleService;
  private PasswordEncoder passwordEncoder;
  private AuthenticationManager authenticationManager;
  private UserRepository userRepository;
  private AppUserDetailService appUserDetailService;

  public User registration(UserRequest userRequest) {
    User user = modelMapper.map(userRequest, User.class);

    // set password
    user.setPassword(passwordEncoder.encode(userRequest.getPassword()));

    // set default role
    List<Role> roles = new ArrayList<>();
    roles.add(roleService.getById(2));
    user.setRoles(roles);

    return userRepository.save(user);
  }

  public LoginResponse login(LoginRequest loginRequest) {
    // set login request
    UsernamePasswordAuthenticationToken authReq = new UsernamePasswordAuthenticationToken(
        loginRequest.getUsername(),
        loginRequest.getPassword());

    // set principle
    Authentication auth = authenticationManager.authenticate(authReq);
    SecurityContextHolder.getContext().setAuthentication(auth);

    // set login response
    User user = userRepository
        .findByUsername(
            loginRequest.getUsername())
        .get();

    UserDetails userDetails = appUserDetailService.loadUserByUsername(
        loginRequest.getUsername());

    LoginResponse loginResponse = new LoginResponse();
    loginResponse.setUsername(user.getUsername());
    loginResponse.setFullname(user.getFullname());
    loginResponse.setAuthorities(
        userDetails
            .getAuthorities()
            .stream()
            .map(authority -> authority.getAuthority())
            .collect(Collectors.toList()));
    return loginResponse;
  }
}