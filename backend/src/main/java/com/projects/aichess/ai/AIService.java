package com.projects.aichess.ai;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.databind.ObjectMapper;

public class AIService {

    private final String apiKey;
    private final String apiUrl;

    public AIService(String apiKey, String apiUrl) {
        this.apiKey = apiKey;
        this.apiUrl = apiUrl;
    }


    public String getAIMove(String boardState, Map<String, Object> options) throws IOException {
        // Prepare the prompt
        String prompt = generatePrompt(boardState);

        // Prepare request payload
        Map<String, Object> payload = Map.of(
                "model", options.getOrDefault("model", "text-davinci-003"),
                "prompt", prompt,
                "max_tokens", options.getOrDefault("max_tokens", 100),
                "temperature", options.getOrDefault("temperature", 0.7)
        );

        // Convert payload to JSON
        ObjectMapper mapper = new ObjectMapper();
        String jsonPayload = mapper.writeValueAsString(payload);

        // Set up HTTP connection
        URL url = new URL(apiUrl + "/v1/completions");
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("POST");
        connection.setRequestProperty("Authorization", "Bearer " + apiKey);
        connection.setRequestProperty("Content-Type", "application/json");
        connection.setDoOutput(true);

        // Send JSON payload
        try (OutputStream os = connection.getOutputStream()) {
            os.write(jsonPayload.getBytes());
            os.flush();
        }

        // Read response
        int responseCode = connection.getResponseCode();
        if (responseCode == HttpURLConnection.HTTP_OK) {
            try (BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()))) {
                StringBuilder response = new StringBuilder();
                String line;
                while ((line = in.readLine()) != null) {
                    response.append(line);
                }
                return parseResponse(response.toString());
            }
        } else {
            throw new IOException("HTTP request failed with code: " + responseCode);
        }
    }


    private String generatePrompt(String boardState) {
        return "You are an AI expert at the game Five in a Row (FIR). "
                + "The board is represented as a 15x15 grid where 'X' and 'O' are player moves. "
                + "Provide the best next move for the current player given the board state:\n\n"
                + boardState + "\n\n"
                + "Respond with the coordinates of the move (e.g., \"7,8\").";
    }


    private String parseResponse(String jsonResponse) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        Map<?, ?> responseMap = mapper.readValue(jsonResponse, Map.class);
        Map<?, ?> choice = ((List<Map<?, ?>>) responseMap.get("choices")).get(0);
        return (String) choice.get("text");
    }
}