package com.projects.aichess.model;

public record HistoryRequest(
        String gameMode,
        String winner,
        String loser
) {
}
