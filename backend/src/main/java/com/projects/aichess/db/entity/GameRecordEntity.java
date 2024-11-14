package com.projects.aichess.db.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;

import java.time.Instant;

@Entity
public class GameRecordEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private UserEntity user;
    private String gameMode; // "human_vs_AI" or "AI_vs_AI"
    private String winner; // "human" or "AI" (need to specify AI's name)

    private Instant createdAt;

    public GameRecordEntity() {}

    public GameRecordEntity(UserEntity user, String gameMode, String winner) {
        this.user = user;
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

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
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

    public Instant getCreatedAt() {
        return createdAt;
    }
}
