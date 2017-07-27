package camt.cbsd.controller;

import camt.cbsd.entity.Product;
import camt.cbsd.entity.security.User;
import camt.cbsd.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Created by JM on 5/15/2017.
 */
@RestController
public class UserController {
    UserService userService;

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

   /* @PostMapping("/user")
    public User uploadOnlyUser (@RequestBody User user) {

        userService.addShopkeeper(user);
        return user;

    }*/
    @GetMapping("/user")
    public List<User> getUsers() {

        List<User> users = userService.getUsers();
        return users;
    }

    @GetMapping("/users")
    public ResponseEntity<?> queryUser(HttpServletRequest request, @RequestParam("search") String query) {
        List<User> users = userService.getUsers(query);
        if (users != null)
            return ResponseEntity.ok(users);
        else
            //http code 204
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();

    }
}
