import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Insets;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.GridPane;
import javafx.stage.Stage;

import java.io.*;

public class Game extends Application {
  
  public void start(Stage primaryStage) {
    
  GridPane grid = new GridPane();
  grid.setPadding(new Insets(10, 10, 10, 10));
  grid.setVgap(5);
  grid.setHgap(5);
  
  
  Button btn = new Button();
  btn.setText("View a team");
  btn.setOnAction(new EventHandler<ActionEvent>() {
    
    @Override
    public void handle(ActionEvent event) {
      SquadViewer.searchSquad(primaryStage);
    }
  });
  
  GridPane.setConstraints(btn, 0, 0);
  
  Button newTeamBtn = new Button();
  newTeamBtn.setText("Create a new team");
  newTeamBtn.setOnAction(new EventHandler<ActionEvent>() {
    
    @Override
    public void handle(ActionEvent event) {
      try {
        CreateTeam team = new CreateTeam();
        team.findClubAndNation(primaryStage);
      } catch (IOException unntak) {
        System.out.println("Feil ved innlesing:" + unntak);
      }
    }
  });
  
  GridPane.setConstraints(newTeamBtn, 1, 0);
  
  grid.getChildren().add(btn);
  grid.getChildren().add(newTeamBtn);
  Scene mainScene = new Scene(grid, 300, 250);
  primaryStage.setTitle("Main Menu!");
  primaryStage.setScene(mainScene);
  primaryStage.show();
 }

public static void main(String[] args) {
  launch(args);
}
  }