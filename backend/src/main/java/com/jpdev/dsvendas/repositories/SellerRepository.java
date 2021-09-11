package com.jpdev.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jpdev.dsvendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {

}
