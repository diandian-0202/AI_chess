package com.projects.aichess.db.entity;

import jakarta.persistence.*;

import java.time.Instant;
import java.util.Objects;

@Entity
@Table(name = "history")
public class HistoryEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id")
    private Long userId;
    private String gameMode; // "human_vs_AI" or "AI_vs_AI"
    private String winner; // "human" or "AI" (need to specify AI's name)
    private String loser; // "human" or "AI" (need to specify AI's name)

    private Instant createdAt;


    @ManyToOne
    @JoinColumn(name = "user_id", foreignKey = @ForeignKey(name = "fk_history_user"), insertable = false, updatable = false)
    private UserEntity user;

    public HistoryEntity() {}

    public HistoryEntity(Long id, Long userId, String gameMode, String winner, String loser) {
        this.id = id;
        this.userId = userId;
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

    public Long getUserId() {
        return userId;
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
                Objects.equals(userId, that.userId) &&
                Objects.equals(gameMode, that.gameMode) &&
                Objects.equals(winner, that.winner) &&
                Objects.equals(loser, that.loser) &&
                Objects.equals(createdAt, that.createdAt) &&
                Objects.equals(user, that.user);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, user, gameMode, winner, loser, createdAt, user);
    }

    @Override
    public String toString() {
        return "HistoryEntity{" +
                "id=" + id +
                ", userId=" + userId +
                ", gameMode='" + gameMode + '\'' +
                ", winner='" + winner + '\'' +
                ", loser='" + loser + '\'' +
                ", createdAt=" + createdAt +
                ", user=" + user +
                '}';
    }
}
