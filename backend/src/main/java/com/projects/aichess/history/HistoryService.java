package com.projects.aichess.history;

import com.projects.aichess.db.HistoryRepository;
import com.projects.aichess.db.entity.HistoryEntity;
import com.projects.aichess.db.entity.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HistoryService {
    private final HistoryRepository historyRepository;

    @Autowired
    public HistoryService(HistoryRepository historyRepository) {
        this.historyRepository = historyRepository;
    }

    public List<HistoryEntity> getHistory(UserEntity user) {
        return historyRepository.findAllByUserId(user.getId());
    }

    public void addHistory(Long userId, String gameMode, String winner, String loser) {
        historyRepository.save(new HistoryEntity(null, userId, gameMode, winner, loser));
    }

    public Double getWinRate(UserEntity user) {
        int totalHistory = historyRepository.countTotalHistoryByUserId(user.getId());
        if (totalHistory == 0) {
            return 0.0;
        }
        return (double) historyRepository.countTotalWinByUserId(user.getId()) / (double) totalHistory;
    }
}
