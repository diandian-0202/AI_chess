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
public class HistoryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private UserEntity user;
    private String gameMode; // "human_vs_AI" or "AI_vs_AI"
    private String winner; // "human" or "AI" (need to specify AI's name)
    private String loser; // "human" or "AI" (need to specify AI's name)

    private Instant createdAt;

    public HistoryEntity() {}

    public HistoryEntity(UserEntity user, String gameMode, String winner, String loser) {
        this.user = user;
        this.gameMode = gameMode;
        this.winner = winner;
        this.loser = loser;
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

    public String getLoser() {
        return loser;
    }

    public void setLoser(String winner) {
        this.loser = loser;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        HistoryEntity that = (HistoryEntity) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(user, that.user) &&
                Objects.equals(gameMode, that.gameMode) &&
                Objects.equals(winner, that.winner) &&
                Objects.equals(loser, that.loser) &&
                Objects.equals(createdAt, that.createdAt);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, user, gameMode, winner, loser, createdAt);
    }

    @Override
    public String toString() {
        return "HistoryEntity{" +
                "id=" + id +
                ", user=" + user +
                ", gameMode='" + gameMode + '\'' +
                ", winner='" + winner + '\'' +
                ", loser='" + loser + '\'' +
                ", createdAt=" + createdAt +
                '}';
    }
}
