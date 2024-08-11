package frontend.smartphone.Controllers;

import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import frontend.smartphone.models.dto.request.LoginRequest;
import frontend.smartphone.services.AuthService;
import lombok.AllArgsConstructor;

@Controller
@AllArgsConstructor
@RequestMapping("/login")
public class AuthController {
    
    private AuthService authService;

    @GetMapping
    public String loginView(LoginRequest loginRequest, Model model){
        Authentication auth = SecurityContextHolder
        .getContext()
        .getAuthentication();

        if (auth instanceof AnonymousAuthenticationToken) {
            return "auth/login";
        }
        return "redirect:/dashboard";
    }

    @PostMapping
    public String login(LoginRequest loginRequest){
        if (!authService.login(loginRequest)){
            return "redirect:/login?error=true";
        }
            return "redirect:/dashboard";
        }
}