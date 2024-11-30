package com.projects.aichess.game;

import org.springframework.stereotype.Service;

import java.util.Arrays;

@Service
public class BoardService {
    private final int BOARD_SIZE = 15;
    private char[][] board;
    private boolean isPlayerBlack;
    //private boolean isPVEActive;
    private boolean isCurrentPlayerTurn;
    private int[] playerLastStep;
    private int[] botLastStep;

    public BoardService(boolean playerColor, int AI_index) {
        this.board = new char[BOARD_SIZE][BOARD_SIZE];
        playerLastStep = new int[]{-1, -1};
        botLastStep = new int[]{-1, -1};
        for (char[] row : board) {
            Arrays.fill(row, '.');
        }
        this.isPlayerBlack = playerColor;
        isCurrentPlayerTurn = playerColor;
    }

    /*
    public boolean switchSide(){
    }
    */
    public boolean playerMakeMove(int x, int y) {
        if (x >= BOARD_SIZE || y >= BOARD_SIZE || x < 0 || y < 0 || board[x][y] != '.') return false;
        recordLastPlayerMove(x, y);
        if (isPlayerBlack) {
            board[x][y] = 'B';
            return isBlackWin(x, y);
        } else {
            board[x][y] = 'W';
            return isWhiteWin(x, y);
        }

    }

    public int[][] undo(){
        if(playerLastStep[0] == -1 && playerLastStep[1] == playerLastStep[0] || botLastStep[0] == -1 && botLastStep[1] == -1){
            return new int[][] {{-1, -1}, {-1, -1}}; // no previous move recorded, return invalid result.
        } else {
            int[][] result = new int[2][2];
            for(int i = 0; i < 2; i++){
                result[0][i] = playerLastStep[i];
                result[1][i] = botLastStep[i];
            }

            board[playerLastStep[0]][playerLastStep[1]] = '.';
            board[botLastStep[0]][botLastStep[1]] = '.';
            playerLastStep = new int[] {-1, -1};
            botLastStep = new int[] {-1, -1};
            return result;
        }
    }

    public void recordLastPlayerMove(int x, int y){
        this.playerLastStep = new int[] {x, y};
    }

    public void recordLastBotMove(int x, int y){
        this.botLastStep = new int[]{x, y};
    }
    public boolean BotMakeMove(int x, int y) {
        if(x >= BOARD_SIZE || y >= BOARD_SIZE || x < 0 || y < 0 || board[x][y] != '.') return false;
        recordLastBotMove(x, y);
        if(isPlayerBlack){
            board[x][y] = 'W';
            return isWhiteWin(x, y);
        } else {
            board[x][y] = 'B';
            return isBlackWin(x, y);
        }

    }

    public boolean isBlackWin(int x, int y){
        int count = 0;
        //vertical check:
        int curX = x;
        int curY = y;
        while(curY >= 0 && board[curX][curY] == 'B'){
            count++;
            curY--;
        }

        curY = y + 1;
        while(curY < 15 && board[curX][curY] == 'B'){
            count++;
            curY++;
        }
        if(count >= 5) return true;

        //horizontal check:
        count = 0;
        curX = x;
        curY = y;
        while(curX >= 0 && board[curX][curY] == 'B'){
            count++;
            curX--;
        }

        curX = x + 1;
        while(curX < 15 && board[curX][curY] == 'B'){
            count++;
            curX++;
        }
        if(count >= 5) return true;

        //left-upper check:
        count = 0;
        curX = x;
        curY = y;
        while(curX >= 0 && curY >= 0 && board[curX][curY] == 'B'){
            count++;
            curX--;
            curY--;
        }

        curX = x + 1;
        curY = y + 1;
        while(curX < 15 &&  curY < 15 && board[curX][curY] == 'B'){
            count++;
            curY++;
            curX++;
        }
        if(count >= 5) return true;

        //right-down check:
        count = 0;
        curX = x;
        curY = y;
        while(curX < 15 && curY >= 0 && board[curX][curY] == 'B'){
            count++;
            curX++;
            curY--;
        }

        curX = x - 1;
        curY = y + 1;
        while(curX >= 0 && curY < 15 && board[curX][curY] == 'B'){
            count++;
            curY++;
            curX--;
        }
        if(count >= 5) return true;
        return false;
    }

    public boolean isWhiteWin(int x, int y){
        int count = 0;
        //vertical check:
        int curX = x;
        int curY = y;
        while(curY >= 0 && board[curX][curY] == 'W'){
            count++;
            curY--;
        }

        curY = y + 1;
        while(curY < 15 && board[curX][curY] == 'W'){
            count++;
            curY++;
        }
        if(count >= 5) return true;

        //horizontal check:
        count = 0;
        curX = x;
        curY = y;
        while(curX >= 0 && board[curX][curY] == 'W'){
            count++;
            curX--;
        }

        curX = x + 1;
        while(curX < 15 && board[curX][curY] == 'W'){
            count++;
            curX++;
        }
        if(count >= 5) return true;

        //left-upper check:
        count = 0;
        curX = x;
        curY = y;
        while(curX >= 0 && curY >= 0 && board[curX][curY] == 'W'){
            count++;
            curX--;
            curY--;
        }

        curX = x + 1;
        curY = y + 1;
        while(curX < 15 &&  curY < 15 && board[curX][curY] == 'W'){
            count++;
            curY++;
            curX++;
        }
        if(count >= 5) return true;

        //right-down check:
        count = 0;
        curX = x;
        curY = y;
        while(curX < 15 && curY >= 0 && board[curX][curY] == 'W'){
            count++;
            curX++;
            curY--;
        }

        curX = x - 1;
        curY = y + 1;
        while(curX >= 0 && curY < 15 && board[curX][curY] == 'W'){
            count++;
            curY++;
            curX--;
        }
        if(count >= 5) return true;
        return false;
    }
}





