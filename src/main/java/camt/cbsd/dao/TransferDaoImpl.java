package camt.cbsd.dao;

import camt.cbsd.entity.Transfer;
import camt.cbsd.repository.ProductRepository;
import camt.cbsd.repository.TransferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by JM on 5/18/2017.
 */
@Repository
public class TransferDaoImpl implements TransferDao{
    List<Transfer> transfers;
    String baseUrl;
    String imageUrl;

    public void setBaseUrl(String baseUrl) {
        this.baseUrl = baseUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    String imageBaseUrl;

    TransferRepository transferRepository;

    @Autowired
    public void setTransferRepository(TransferRepository transferRepository) {
        this.transferRepository = transferRepository;
    }

    @Override
    public Transfer addTransfer(Transfer transfer){
        return transferRepository.save(transfer);
    }
}
