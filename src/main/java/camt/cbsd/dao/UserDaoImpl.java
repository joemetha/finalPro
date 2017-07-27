package camt.cbsd.dao;

import camt.cbsd.entity.security.Authority;
import camt.cbsd.entity.security.AuthorityName;
import camt.cbsd.entity.security.User;
import camt.cbsd.security.repository.AuthorityRepository;
import camt.cbsd.security.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

/**
 * Created by JM on 5/15/2017.
 */
@Repository
@Profile("DBDataSource")
public class UserDaoImpl implements UserDao{
    UserRepository userSecurityRepository;

    AuthorityRepository authorityRepository;
    @Autowired
    public void setAuthorityRepository(AuthorityRepository authorityRepository) {
        this.authorityRepository = authorityRepository;
    }


    @Override
    public User addShopkeeper(User user) {
        Authority auth3 = Authority.builder().name(AuthorityName.ROLE_SHOPKEEPER).build();
        authorityRepository.save(auth3);
        user.setAuthorities(new ArrayList<>());
        user.getAuthorities().add(auth3);
        return userSecurityRepository.save(user);
    }

}
