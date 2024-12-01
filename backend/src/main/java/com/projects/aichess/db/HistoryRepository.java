package com.projects.aichess.db;

import com.projects.aichess.db.entity.HistoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface HistoryRepository extends JpaRepository<HistoryEntity, Long> {

    List<HistoryEntity> findAllByUserId(Long userId);

    boolean existsByUserId(Long userId);

    @Modifying
    @Query(value = "SELECT COUNT(*) FROM history WHERE user_id = :userId", nativeQuery = true)
    int countTotalHistoryByUserId(Long userId);

    @Modifying
    @Query(value = "SELECT COUNT(*) FROM history WHERE user_id = :userId AND winner = 'human'", nativeQuery = true)
    int countTotalWinByUserId(Long userId);
}
