package frontend.smartphone.Controllers.Rest;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import frontend.smartphone.models.User;
import frontend.smartphone.services.UserService;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/user")
public class RestUser {
    private UserService userService;

    @GetMapping
    private List<User> getAll() {
        return userService.getAll();
    }

    @PostMapping
    private User create(@RequestBody User user){
        return userService.create(user);
    }

    @GetMapping("/{id}")
    private User getById(@PathVariable Integer id){
        return userService.getById(id);
    }

    @DeleteMapping("/{id}")
    private User delete(@PathVariable Integer id){
        return userService.delete(id);
    }

    @PutMapping("/{id}")
    private User update(@PathVariable Integer id, @RequestBody User user){
        return userService.update(id, user);
    }
}
