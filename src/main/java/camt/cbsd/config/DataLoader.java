package camt.cbsd.config;

import camt.cbsd.dao.CourseDao;
import camt.cbsd.dao.ProductDao;
import camt.cbsd.dao.StudentDao;
import camt.cbsd.entity.Course;
import camt.cbsd.entity.Product;
import camt.cbsd.entity.Student;
import camt.cbsd.entity.security.Authority;
import camt.cbsd.entity.security.AuthorityName;
import camt.cbsd.entity.security.User;
import camt.cbsd.repository.StudentRepository;
import camt.cbsd.security.repository.AuthorityRepository;
import camt.cbsd.security.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;
import java.beans.Transient;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;

/**
 * Created by Dto on 07-Apr-17.
 */
@ConfigurationProperties(prefix="server")
@Component
public class DataLoader implements ApplicationRunner{

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

    @Override
    @Transactional
    public void run(ApplicationArguments args) throws Exception {
        imageBaseUrl = baseUrl + imageUrl;
        Student student1 = Student.builder().studentId("SE-001").name("Mitsuha").surname("Miyamizu")
                .gpa(2.15).image(imageBaseUrl+"mitsuha.gif").feature(true)
                .penAmount(0).description("The most beloved one").build();
        Student student2 = Student.builder().studentId("SE-002").name("Prayuth").surname("The minister")
                .gpa(3.59).image(imageBaseUrl+"tu.jpg").feature(false)
                .penAmount(15).description("The great man ever!!!!").build();
        Student student3 = Student.builder().studentId("SE-003").name("Jurgen").surname("Kloop")
                .gpa(2.15).image(imageBaseUrl+"Kloop.gif").feature(true)
                .penAmount(2).description("The man for the Kop").build();

        Product product1 = Product.builder().name("NIKON D5300").description("Meet the first in an exciting new generation of Wi-Fi enabled, ultra-high-resolution Nikon HDSLRs: the D5300. brings an outstanding new level of image quality and capabilities in a compact, ergonomic design.").image(imageBaseUrl + "1.png")
                .price(599).rate(4).amount(10).build();
        productDao.addProduct(product1);

        Product product2 = Product.builder().name("AF-S NIKKOR 14-24mm F2.8G").description("With a fast fixed maximum aperture of f/2.8, the award-winning AF-S NIKKOR 14–24mm f/2.8G ED delivers truly superlative performance in any situation.")
                .image(imageBaseUrl + "2.png").price(1899).rate(5).amount(5).build();
        productDao.addProduct(product2);

        Product product3 = Product.builder().name("AF-S NIKKOR 800mm f/5.6E FL").description("Introducing one of the most impressive feats of NIKKOR engineering yet—the remarkable full frame AF-S NIKKOR 800mm f/5.6E FL ED VR.")
                .image(imageBaseUrl + "3.png").price(1629).rate(5).amount(3).build();
        productDao.addProduct(product3);

        Product product4 = Product.builder().name("NIKON D500 Sports & Wildlife").description("The D500 is ready to go wherever your passion leads you, capturing everything with stunning clarity, speed and resolution.")
                .image(imageBaseUrl + "4.png").price(3249).rate(5).amount(9).build();
        productDao.addProduct(product4);

        Product product5 = Product.builder().name("Leica M10, silver chrome finish").description("Slimmer in size, faster in performance, and offering the best image quality with smarter connectivity for intuitive usage - the Leica M10 sets the new standards for rangefinder photography and state-of-the-art imaging.")
                .image(imageBaseUrl + "5.png").price(6895).rate(5).amount(5).build();
        productDao.addProduct(product5);

        Product product6 = Product.builder().name("Thumbs Up EP-MX - Black").description("The Thumbs Up EP-MX is CNC machined from brass billet before being hand polished. This prepares the Thumbs Up for a baked enamel finish.")
                .image(imageBaseUrl + "6.png").price(160).rate(4).amount(7).build();
        productDao.addProduct(product6);

        Product product7 = Product.builder().name("Leica Sofort Instant Film Camera").description("Leica Sofort has a unique design and a sophistication that sets it apart from other instant cameras. The Sofort brings a mature, thoughtful quality to the fun instant film photography world.")
                .image(imageBaseUrl + "7.png").price(299).rate(5).amount(15).build();
        productDao.addProduct(product7);

        Product product8 = Product.builder().name("Canon EOS Rebel T7i Body").description("Take your photos to the next level with the image quality and near-instant autofocus of the EOS Rebel T7i camera.")
                .image(imageBaseUrl + "8.png").price(699).rate(5).amount(11).build();
        productDao.addProduct(product8);

        Product product9 = Product.builder().name("Canon PowerShot SX730 HS").description("Capture subjects near, far and in-between with the PowerShot SX730 HS digital camera's powerful 40x Optical Zoom.")
                .image(imageBaseUrl + "9.png").price(3999).rate(5).amount(12).build();
        productDao.addProduct(product9);

        Product product10 = Product.builder().name("FUJIFILM GFX 50S").description("The FUJIFILM GFX 50S delivers the world's best image quality. It combines outstanding resolution of 51.4 megapixels with exceptional tones, advanced color reproduction and high-performance lenses.")
                .image(imageBaseUrl + "10.png").price(6499).rate(5).amount(13).build();
        productDao.addProduct(product10);

        Product product11 = Product.builder().name("FUJIFILM X-A2").description("A high-performance compact system camera, the FUJIFILM X-A2 will let you capture pictures in your own style")
                .image(imageBaseUrl + "11.png").price(649).rate(5).amount(18).build();
        productDao.addProduct(product11);

        Product product12 = Product.builder().name("FUJIFILM X-T20").description("The Fujifilm X-T20 is a midrange SLR-styled mirrorless camera that sits above the X-E2S and below the X-T2.")
                .image(imageBaseUrl + "12.png").price(899).rate(5).amount(25).build();
        productDao.addProduct(product12);

        Course course1 = Course.builder().courseId("953331").courseName("CBSD").build();
        Course course2 = Course.builder().courseId("953323").courseName("Software Construction").build();
        Course course3 = Course.builder().courseId("953499").courseName("Software Project").build();

        courseDao.add(course1);
        courseDao.add(course2);
        courseDao.add(course3);
        studentDao.addStudent(student1);
        studentDao.addStudent(student2);
        studentDao.addStudent(student3);

        student1.addCourse(course1);
        student1.addCourse(course2);
        student2.addCourse(course2);
        student2.addCourse(course3);
        student3.addCourse(course1);
        student3.addCourse(course3);

        securitySetup();
        student1.setUser(user1);
        user1.setStudent(student1);
        student2.setUser(user2);
        user2.setStudent(student2);
        student3.setUser(user3);
        user3.setStudent(student3);
        //student3.setUser(user4);
        //user4.setStudent(student3);
    }

    User user1,user2,user3,user4;
    private void securitySetup() {
        user1 = User.builder()
                .username("admin")
                .password("admin")
                .firstname("admin")
                .lastname("admin")
                .email("admin@admin.com")
                .enabled(true)
                .lastPasswordResetDate(Date.from(LocalDate.of(2016, 01, 01).atStartOfDay(ZoneId.systemDefault()).toInstant()))
                .build();

        user2 = User.builder()
                .username("user")
                .password("user")
                .firstname("user")
                .lastname("user")
                .email("enabled@user.com")
                .enabled(true)
                .lastPasswordResetDate(Date.from(LocalDate.of(2016, 01, 01).atStartOfDay(ZoneId.systemDefault()).toInstant()))
                .build();
        user3 = User.builder()
                .username("shopkeeper")
                .password("shopkeeper")
                .firstname("user")
                .lastname("user")
                .email("disabled@user.com")
                .enabled(true)
                .lastPasswordResetDate(Date.from(LocalDate.of(2016, 01, 01).atStartOfDay(ZoneId.systemDefault()).toInstant()))
                .build();

        user4 = User.builder()
                .username("test")
                .password("test")
                .firstname("test")
                .lastname("test")
                .email("test@gmail.com")
                .enabled(true)
                .lastPasswordResetDate(Date.from(LocalDate.of(2016, 01, 01).atStartOfDay(ZoneId.systemDefault()).toInstant()))
                .build();

        Authority auth1 = Authority.builder().name(AuthorityName.ROLE_USER).build();
        Authority auth2 = Authority.builder().name(AuthorityName.ROLE_ADMIN).build();
        Authority auth3 = Authority.builder().name(AuthorityName.ROLE_SHOPKEEPER).build();
        authorityRepository.save(auth1);
        authorityRepository.save(auth2);
        authorityRepository.save(auth3);
        user1.setAuthorities(new ArrayList<>());
        user1.getAuthorities().add(auth1);
        user1.getAuthorities().add(auth2);
        user2.setAuthorities(new ArrayList<>());
        user2.getAuthorities().add(auth1);
        user3.setAuthorities(new ArrayList<>());
        user3.getAuthorities().add(auth3);
        user4.setAuthorities(new ArrayList<>());
        user4.getAuthorities().add(auth1);


        user1.setPassword(new BCryptPasswordEncoder().encode(user1.getPassword()));
        user2.setPassword(new BCryptPasswordEncoder().encode(user2.getPassword()));
        user3.setPassword(new BCryptPasswordEncoder().encode(user3.getPassword()));
        user4.setPassword(new BCryptPasswordEncoder().encode(user4.getPassword()));
        userSecurityRepository.save(user1);
        userSecurityRepository.save(user2);
        userSecurityRepository.save(user3);
        userSecurityRepository.save(user4);
    }
}
