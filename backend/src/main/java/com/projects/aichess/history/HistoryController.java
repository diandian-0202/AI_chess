package com.projects.aichess.history;

import com.projects.aichess.db.entity.HistoryEntity;
import com.projects.aichess.db.entity.UserEntity;
import com.projects.aichess.model.HistoryRequest;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/history")
public class HistoryController {
    private final HistoryService historyService;

    public HistoryController(HistoryService historyService) {
        this.historyService = historyService;
    }

    @GetMapping
    public List<HistoryEntity> getHistory(@AuthenticationPrincipal UserEntity user) {
        return historyService.getHistory(user);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void addHistory(@AuthenticationPrincipal UserEntity user, @RequestBody HistoryRequest body) {
        historyService.addHistory(user.getId(), body.gameMode(), body.winner(), body.loser());
    }

    @GetMapping
    public Double getWinRate(@AuthenticationPrincipal UserEntity user) {
        return historyService.getWinRate(user);
    }
}
