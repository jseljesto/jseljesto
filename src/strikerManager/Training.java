import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Insets;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.layout.GridPane;
import javafx.stage.Stage;

import java.util.Random;
import java.io.IOException;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.ArrayList;

public class Training {

 int kitNumber;
 String firstName;
 String surName;
 String nation;
 int age;
 String position;
 int average;
 int potential;
 int lonn;
 int verdi;

 public String toString() {
  return kitNumber + " " + firstName + " " + surName + " " + nation + " " + age + " " + position + " " + average + " " + potential + " " + lonn + " " + verdi;
 }

 public static void trainSquad(String fullDirectory, String clubDirectory, Stage stage) throws FileNotFoundException, IOException {
   
   ArrayList<Player> importedTeam = new ArrayList<Player>();
   importedTeam = Load.loadTeamData(importedTeam, fullDirectory);
   Club importedClub;
   importedClub = Load.loadClub(clubDirectory);
   Random rand = new Random();
   int treningkast = 0;
   int row = 0;
   int teamAverage = 0;
   

   //FileReader tekstFilLeser = new FileReader(file);
   //BufferedReader tekstLeser = new BufferedReader(tekstFilLeser);
   
   GridPane grid = new GridPane();
   grid.setPadding(new Insets(10, 10, 10, 10));
   grid.setVgap(5);
   grid.setHgap(5);
   
   for (int l = 0; l <= 19; l++) {
    if (importedTeam.get(l).average != importedTeam.get(l).potential) {
     treningkast = rand.nextInt(100) + 1;
     if (treningkast > 60 && treningkast <= 85) {
      //System.out.println(importedTeam.get(l).surName + " har aukt med +1");
       Label increase = new Label(importedTeam.get(l).surName + " har aukt med +1");
       grid.add(increase, 0, row);
       row++;
      importedTeam.get(l).average = importedTeam.get(l).average + 1;
      //System.out.println("Gammal verdi: " + importedTeam.get(l).verdi);
      Label oldValue = new Label("Gammal verdi: " + importedTeam.get(l).verdi);
       grid.add(oldValue, 0, row);
       row++;
      CorrectValue.correct(importedTeam);
      //System.out.println("Ny verdi: " + importedTeam.get(l).verdi);
      Label newValue = new Label("Ny verdi: " + importedTeam.get(l).verdi);
       grid.add(newValue, 0, row);
       row++;
     }
     if (treningkast > 85 && treningkast <= 95 && (importedTeam.get(l).potential - importedTeam.get(l).average != 1)) {
      //System.out.println(importedTeam.get(l).surName + " har aukt med +2");
       Label increase = new Label(importedTeam.get(l).surName + " har aukt med +2");
       grid.add(increase, 0, row);
       row++;
      importedTeam.get(l).average = importedTeam.get(l).average + 2;
      //System.out.println("Gammal verdi: " + importedTeam.get(l).verdi);
      Label oldValue = new Label("Gammal verdi: " + importedTeam.get(l).verdi);
       grid.add(oldValue, 0, row);
       row++;
      CorrectValue.correct(importedTeam);
      //System.out.println("Ny verdi: " + importedTeam.get(l).verdi);
      Label newValue = new Label("Ny verdi: " + importedTeam.get(l).verdi);
       grid.add(newValue, 0, row);
       row++;
     }
     if (treningkast > 95 && (importedTeam.get(l).potential - importedTeam.get(l).average != 1)
       && (importedTeam.get(l).potential - importedTeam.get(l).average != 2)) {
      //System.out.println(importedTeam.get(l).surName + " har aukt med +3");
       Label increase = new Label(importedTeam.get(l).surName + " har aukt med +3");
       grid.add(increase, 0, row);
       row++;
      importedTeam.get(l).average = importedTeam.get(l).average + 3;
      //System.out.println("Gammal verdi: " + importedTeam.get(l).verdi);
      Label oldValue = new Label("Gammal verdi: " + importedTeam.get(l).verdi);
       grid.add(oldValue, 0, row);
       row++;
      CorrectValue.correct(importedTeam);
      //System.out.println("Ny verdi: " + importedTeam.get(l).verdi);
      Label newValue = new Label("Ny verdi: " + importedTeam.get(l).verdi);
       grid.add(newValue, 0, row);
       row++;
     }
    }
    teamAverage += importedTeam.get(l).average;
   }

   File file = new File(fullDirectory);
   PrintWriter out = new PrintWriter(file);
   File clubFile = new File(clubDirectory);
   PrintWriter clubOut = new PrintWriter(clubFile);
   
   teamAverage /= importedTeam.size();
   importedClub.clubAvg = teamAverage;

   for (int k = 0; k <= 19; k++) {
    out.println(importedTeam.get(k).kitNumber + " " + importedTeam.get(k).firstName + " " + importedTeam.get(k).surName + " " + importedTeam.get(k).nation + " " + importedTeam.get(k).age + " " + importedTeam.get(k).position + " " + importedTeam.get(k).average + " " + importedTeam.get(k).potential + " " + importedTeam.get(k).lonn + " " + importedTeam.get(k).verdi);
   }
   out.close();
   
   clubOut.println(importedClub.clubName + " " + importedClub.clubAvg + " " + importedClub.kamper + " " +  importedClub.seier + " " + importedClub.uavgjort + " " + 
   importedClub.tap + " " + importedClub.maol + " " + importedClub.sleptInn + " " + importedClub.maolFor + " " + importedClub.poeng + " " + importedClub.budsjett + " " + importedClub.league);
   
   clubOut.close();
   
   Button menu = new Button();
   menu.setText("Back to Menu");
   menu.setOnAction(new EventHandler<ActionEvent>() {
     
     @Override
     public void handle(ActionEvent event) {
       Game game = new Game();
          game.start(stage);
          return;
        }
      });
   
   Button view = new Button();
   view.setText("View squad");
   view.setOnAction(new EventHandler<ActionEvent>() {
     
     @Override
     public void handle(ActionEvent event) {
       try {
         SquadViewer squad = new SquadViewer();
         squad.viewSquad(fullDirectory, clubDirectory, stage);
         return;
       } catch (IOException unntak) {
         System.out.println("Feil ved innlesing:" + unntak);
       }
     }
   });
   
   grid.add(menu, 0, row);
   row++;
   grid.add(view, 0, row);
   Scene trainingScene = new Scene(grid, 600, 500);
   stage.setScene(trainingScene);

  }
 }