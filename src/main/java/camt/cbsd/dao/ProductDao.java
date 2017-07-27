package camt.cbsd.dao;

import camt.cbsd.entity.Product;

import java.util.List;

/**
 * Created by JM on 5/14/2017.
 */
public interface ProductDao {
    List<Product> getProducts();
    Product findById(long id);
    Product findByName(String name);
    Product addProduct(Product Product);
    void deleteProduct(long id);
    List<Product> getProducts(String searchText);
}
