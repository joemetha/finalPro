package camt.cbsd.services;

import camt.cbsd.dao.CourseDao;
import camt.cbsd.dao.ProductDao;
import camt.cbsd.dao.StudentDao;
import camt.cbsd.dao.UserDao;
import camt.cbsd.entity.Product;
import camt.cbsd.entity.Student;
import camt.cbsd.entity.security.Authority;
import camt.cbsd.entity.security.AuthorityName;
import camt.cbsd.entity.security.User;
import camt.cbsd.security.repository.AuthorityRepository;
import camt.cbsd.security.repository.UserRepository;
import jersey.repackaged.com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by JM on 5/15/2017.
 */
@Service
public class UserServiceImpl implements UserService {
    ProductDao productDao;
    @Autowired
    public void setProductDao(ProductDao productDao) {
        this.productDao = productDao;
    }




    StudentDao studentDao;
    @Autowired
    public void setStudentDao(StudentDao studentDao) {
        this.studentDao = studentDao;
    }

    CourseDao courseDao;
    @Autowired
    public void setCourseDao(CourseDao courseDao) {
        this.courseDao = courseDao;
    }

    String baseUrl;
    String imageUrl;
    String imageBaseUrl;
    public void setBaseUrl(String baseUrl) {
        this.baseUrl = baseUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    UserRepository userSecurityRepository;
    @Autowired
    public void setUserSecurityRepository(UserRepository userSecurityRepository) {
        this.userSecurityRepository = userSecurityRepository;
    }
    AuthorityRepository authorityRepository;

    @Autowired
    public void setAuthorityRepository(AuthorityRepository authorityRepository) {
        this.authorityRepository = authorityRepository;
    }

User usertemp;
    @Override
    public void addShopkeeper(User user) {

        usertemp = User.builder()
                .username(user.getUsername())
                .password(user.getPassword())
                .firstname(user.getFirstname())
                .lastname(user.getLastname())
                .email(user.getEmail())
                .enabled(true)
                .lastPasswordResetDate(Date.from(LocalDate.of(2016, 01, 01).atStartOfDay(ZoneId.systemDefault()).toInstant()))
                .build();

        Authority auth3 = Authority.builder().name(AuthorityName.ROLE_SHOPKEEPER).build();
        authorityRepository.save(auth3);
        usertemp.setAuthorities(new ArrayList<>());
        usertemp.getAuthorities().add(auth3);

        usertemp.setPassword(new BCryptPasswordEncoder().encode(usertemp.getPassword()));
        userSecurityRepository.save(usertemp);

        Student student3 = Student.builder().studentId("SE-003").name("Jurgen").surname("Kloop")
                .gpa(2.15).image(imageBaseUrl+"Kloop.gif").feature(true)
                .penAmount(2).description("The man for the Kop").build();
        student3.setUser(usertemp);


        usertemp.setStudent(student3);
    }

    @Override
    public List<User> getUsers() {
        return Lists.newArrayList( userSecurityRepository.findAll());

    }

    @Override
    public List<User> getUsers(String searchText) {
        if (searchText == null || searchText.equals("")){return Lists.newArrayList( userSecurityRepository.findAll());}
        else{
            return Lists.newArrayList(userSecurityRepository.findByUsername(searchText));
        }


    }
}
