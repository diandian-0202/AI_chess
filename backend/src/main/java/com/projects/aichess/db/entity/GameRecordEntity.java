package com.projects.aichess.db.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;

import java.time.Instant;
import java.util.Objects;

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


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        GameRecordEntity that = (GameRecordEntity) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(user, that.user) &&
                Objects.equals(gameMode, that.gameMode) &&
                Objects.equals(winner, that.winner) &&
                Objects.equals(createdAt, that.createdAt);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, user, gameMode, winner, createdAt);
    }

    @Override
    public String toString() {
        return "GameRecordEntity{" +
                "id=" + id +
                ", user=" + user +
                ", gameMode='" + gameMode + '\'' +
                ", winner='" + winner + '\'' +
                ", createdAt=" + createdAt +
                '}';
    }
}
