package frontend.smartphone.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import frontend.smartphone.models.Regis;
import frontend.smartphone.services.RegisService;
import lombok.AllArgsConstructor;

@Controller
@AllArgsConstructor
@RequestMapping("/registration")
public class RegistController {
    private RegisService regisService;  

    @GetMapping
    public String regisPage(Model model) { 
        model.addAttribute("regis", new Regis());
        return "auth/register";
    }

    @PostMapping
        public String regist(Regis regiss) {
                regisService.create(regiss);
                return "redirect:/login";
        }
}
