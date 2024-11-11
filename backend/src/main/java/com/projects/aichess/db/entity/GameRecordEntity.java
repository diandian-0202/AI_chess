package com.projects.aichess.db.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import java.time.Instant;

@Entity
public class GameRecordEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;
    private String gameMode; // "human_vs_AI" or "AI_vs_AI"
    private String winner; // "human" or "AI" (need to specify AI's name)

    private Instant createdAt;

    public GameRecordEntity() {}

    public GameRecordEntity(Long userId, String gameMode, String winner) {
        this.userId = userId;
        this.gameMode = gameMode;
        this.winner = winner;
    }

    // Automatically set createdAt before persisting
    @PrePersist
    protected void onCreate() {
        createdAt = Instant.now();
    }


    // Getters and setters...

    public Long getId() {
        return id;
    }

    public String getGameMode() {
        return gameMode;
    }

    public void setGameMode(String gameMode) {
        this.gameMode = gameMode;
    }

    public String getWinner() {
        return winner;
    }

    public void setWinner(String winner) {
        this.winner = winner;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUser(Long userId) {
        this.userId = userId;
    }
}
