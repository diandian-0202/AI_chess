package com.projects.aichess.db;

import com.projects.aichess.db.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Long> {


    UserEntity findByUsername(String username);


    boolean existsByUsername(String username);
}
