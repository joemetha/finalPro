package camt.cbsd.services;

import camt.cbsd.entity.security.User;

import java.util.List;

/**
 * Created by JM on 5/15/2017.
 */
public interface UserService {
    void addShopkeeper (User user);
    List<User> getUsers();
    List<User> getUsers(String searchText);
}
