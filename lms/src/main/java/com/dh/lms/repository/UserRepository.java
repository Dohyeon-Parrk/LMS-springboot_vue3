package com.dh.lms.repository;

import com.dh.lms.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findOneWithAuthoritiesByEmail(String email);
}
