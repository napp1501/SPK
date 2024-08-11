package frontend.smartphone.Controllers;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    @GetMapping("/dashboard")
    public String dashboard(Model model) {
        Authentication authentication = SecurityContextHolder
        .getContext()
        .getAuthentication();
        model.addAttribute("name", authentication.getPrincipal().toString());
        model.addAttribute("isActive", "dashboard");
        return "index"; 
    }
}