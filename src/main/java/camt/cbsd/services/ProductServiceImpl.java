package camt.cbsd.services;

import camt.cbsd.dao.ProductDao;
import camt.cbsd.dao.TransferDao;
import camt.cbsd.entity.Product;
import camt.cbsd.entity.Transfer;
import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by JM on 5/14/2017.
 */
@Service
@ConfigurationProperties(prefix = "server")
public class ProductServiceImpl implements ProductService {

    @Autowired
    ProductDao productDao;
    @Autowired
    TransferDao transferDao;


    String imageServerDir;

    public void setImageServerDir(String imageServerDir) {
        this.imageServerDir = imageServerDir;
    }

    @Transactional
    public List<Product> getProducts() {
        List<Product> products = productDao.getProducts();
        return products;
    }

    @Override
    @Transactional
    public Product findById(long id) {
        Product product = productDao.findById(id);

        return product;
    }

    @Transactional
    @Override
    public Product getProductForTransfer(String name) {
        Product product = productDao.findByName(name);
        return product;
    }

    @Override
    public Product addProduct(Product product) {
        return productDao.addProduct(product);
    }

    @Override
    public List<Product> queryProduct(String query) {
        if (query == null || query.equals(""))
            return productDao.getProducts();
        return productDao.getProducts(query);
    }

    @Transactional
    @Override
    public void deleteProduct(long id) {
        productDao.deleteProduct(id);
    }

    @Override
    public Transfer addTransfer(Transfer transfer){return transferDao.addTransfer(transfer);}
}
