package com.projects.aichess.game;

import org.springframework.stereotype.Service;
import com.projects.aichess.game.BoardService;

@Service
public class GameService {

    public GameService(){

    }

    public void initialGame(boolean isPlayerBlack, int AI_Index){
        BoardService current_board = new BoardService(isPlayerBlack, AI_Index);


    }


}
