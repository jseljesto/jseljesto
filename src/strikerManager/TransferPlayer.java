import javafx.collections.ObservableList;
import javafx.collections.FXCollections;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Insets;
import javafx.scene.Scene;
import javafx.scene.control.TextField;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.cell.PropertyValueFactory;
import javafx.scene.control.Alert;
import javafx.scene.image.ImageView;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;

import java.io.*;
import java.util.ArrayList;

public class TransferPlayer {

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
  return kitNumber + " " + firstName + " " + surName + " " + " " + nation + " " + age + " " + position + " " + average + " " + potential + " " + lonn + " " + verdi;
 }
 
 ArrayList<TeamViewer> updatedTeam = new ArrayList<TeamViewer>();
 
 /**
  * Finds all the teams available.
  * @param fullDirectory Directory of players from player-controlled team.
  * @param clubDirectory Directory of player-controlled club.
  * @param stage Current stage.
  * @param importedTeam Players from player-controlled team.
  */
 public void findTeams(String fullDirectory, String clubDirectory, Stage stage, ArrayList<Player> importedTeam) {
   GridPane grid = new GridPane();
   grid.setPadding(new Insets(10, 10, 10, 10));
   grid.setVgap(5);
   grid.setHgap(5);
   TextField teamName = new TextField();
   teamName.setPromptText("Search for a club:");
   teamName.setPrefColumnCount(10);
   GridPane.setConstraints(teamName, 0, 1);
   grid.getChildren().add(teamName);
   Button submit = new Button("Submit");
   GridPane.setConstraints(submit, 1, 1);
   grid.getChildren().add(submit);
   Label label = new Label();
   label.setText("Enter the name of the club you want to buy a player from: ");
   GridPane.setConstraints(label, 0, 0);
   grid.getChildren().add(label);
   
   submit.setOnAction(new EventHandler<ActionEvent>() {
     
     @Override
     public void handle(ActionEvent event) {
       try {
       String directory = "C:/Users/jonkr/Documents/GitHub-prosjekt/jseljesto/src/strikerManager/Teams/";
       String secondDirectory = directory + teamName.getText() + ".txt";
       String secondClubDirectory = "C:/Users/jonkr/Documents/GitHub-prosjekt/jseljesto/src/strikerManager/Clubs/" + teamName.getText() + ".txt";
       ArrayList<Player> importedTeam2 = new ArrayList<Player>();
       importedTeam2 = Load.loadTeamData(importedTeam2, secondDirectory);
       TransferPlayer transfer = new TransferPlayer();
       transfer.choosePlayer(fullDirectory, secondDirectory, clubDirectory, secondClubDirectory, stage, 
                             importedTeam, importedTeam2);
       return;
     } catch (IOException unntak) {
      System.out.println("Feil ved innlesing:" + unntak);
     }
     }
   });
   
   Scene currentScene = new Scene(grid, 500, 450);
   stage.setScene(currentScene);
 }
 
 /**
  * Transfers player from AI team to player-controlled team.
  * @param fullDirectory Directory of player-controlled team.
  * @param secondDirectory Directory of selling team.
  * @param clubDirectory Directory of player-controlled club.
  * @param secondClubDirectory Directory of selling club.
  * @param stage The current Stage.
  * @param firstTeam Players from player-controlled team.
  * @param secondTeam Players from selling team.
  * @throws FileNotFoundException
  * @throws IOException
  */
 @SuppressWarnings("unchecked")
 public void choosePlayer(String fullDirectory, String secondDirectory, String clubDirectory, 
                          String secondClubDirectory, Stage stage, 
                          ArrayList<Player> firstTeam, ArrayList<Player> secondTeam) throws FileNotFoundException, IOException {

   updatedTeam = Load.convertNationToFlag(secondTeam);
   ObservableList<TeamViewer> data = FXCollections.observableList(updatedTeam);
   TableView<TeamViewer> transferTable = new TableView<>();
   transferTable.setEditable(false);
   Club currentClub;
   currentClub = Load.loadClub(clubDirectory);
   Club sellingClub;
   sellingClub = Load.loadClub(secondClubDirectory);
   
   TableColumn<TeamViewer, Integer> numberCol = new TableColumn<>("Kit Number");
   numberCol.setCellValueFactory(new PropertyValueFactory<>("kitNumber"));
   TableColumn<TeamViewer, String> firstNameCol = new TableColumn<>("First Name");
   firstNameCol.setCellValueFactory(new PropertyValueFactory<>("firstName"));
   TableColumn<TeamViewer, String> surNameCol = new TableColumn<>("Last Name");
   surNameCol.setCellValueFactory(new PropertyValueFactory<>("surName"));
   TableColumn<TeamViewer, ImageView> nationCol = new TableColumn<>("Nation");
   nationCol.setCellValueFactory(new PropertyValueFactory<>("nation"));
   TableColumn<TeamViewer, Integer> ageCol = new TableColumn<>("Age");
   ageCol.setCellValueFactory(new PropertyValueFactory<>("age"));
   TableColumn<TeamViewer, String> posCol = new TableColumn<>("Position");
   posCol.setCellValueFactory(new PropertyValueFactory<>("position"));
   TableColumn<TeamViewer, Integer> averageCol = new TableColumn<>("Average");
   averageCol.setCellValueFactory(new PropertyValueFactory<>("average"));
   TableColumn<TeamViewer, Integer> lonnCol = new TableColumn<>("L�nn");
   lonnCol.setCellValueFactory(new PropertyValueFactory<>("lonn"));
   TableColumn<TeamViewer, Integer> verdiCol = new TableColumn<>("Verdi");
   verdiCol.setCellValueFactory(new PropertyValueFactory<>("verdi"));
   
   transferTable.setItems(data);
   transferTable.getColumns().addAll(numberCol, firstNameCol, surNameCol, nationCol, ageCol, posCol, averageCol, lonnCol, verdiCol);
   
   final VBox vbox = new VBox();
   vbox.setSpacing(5);
   vbox.setPadding(new Insets(10, 0, 0, 10));
   vbox.getChildren().add(transferTable);
   
   Button btn = new Button();
   btn.setText("Back to Menu");
   btn.setOnAction(new EventHandler<ActionEvent>() {
     @Override
      public void handle(ActionEvent event) {
       Game game = new Game();
       game.start(stage);
       return;
     }
   });
   
   Button buyBtn = new Button();
   buyBtn.setText("Buy selected player");
   buyBtn.setOnAction(new EventHandler<ActionEvent>() {
     @Override
     public void handle(ActionEvent event) {
       if (transferTable.getSelectionModel().getSelectedItem() == null) {
         Alert alert = new Alert(AlertType.INFORMATION);
         alert.setTitle("Warning!");
         alert.setHeaderText("You made a mistake!");
         alert.setContentText("You haven't selected a player! Select a player to buy the player");
         alert.showAndWait();
       } else {
         if (secondTeam.size() <= 18) {
           Alert illegalSquad = new Alert(AlertType.INFORMATION);
           illegalSquad.setTitle("Warning!");
           illegalSquad.setHeaderText("Illegal Squad!");
           illegalSquad.setContentText("You can't buy this player because the opposing team has too few players");
           illegalSquad.showAndWait();
         }
         else if (firstTeam.size() >= 30) {
           Alert illegalSquad = new Alert(AlertType.INFORMATION);
           illegalSquad.setTitle("Warning!");
           illegalSquad.setHeaderText("Illegal Squad!");
           illegalSquad.setContentText("You can't buy this player because your team already contains 30 players");
           illegalSquad.showAndWait();
         } else {
           TeamViewer selectedPlayer = transferTable.getSelectionModel().getSelectedItem();
           if (selectedPlayer.verdi > currentClub.budsjett) {
             Alert insufficientFunds = new Alert(AlertType.INFORMATION);
             insufficientFunds.setTitle("Warning!");
             insufficientFunds.setHeaderText("Insufficient Funds!");
             insufficientFunds.setContentText("You don't have enough budget to buy this player");
             insufficientFunds.showAndWait();
           } else {
             int pos = updatedTeam.indexOf(selectedPlayer);
             Player newPlayer = secondTeam.get(pos);
             secondTeam.remove(pos);
             boolean foundAvailableNumber = false;
             int j = 1;
             while (foundAvailableNumber == false) {
               for (int i = 0; i < firstTeam.size(); i++) {
                 if (j == (firstTeam.get(i).kitNumber)) {
                   j++;
                   continue;
                 }
                 foundAvailableNumber = true;
                 break;
               }
             }
             newPlayer.kitNumber = j;
             firstTeam.add(newPlayer);
             currentClub.clubAvg = Load.getAverage(firstTeam);
             sellingClub.clubAvg = Load.getAverage(secondTeam);
             
             try {
             
             File file = new File(fullDirectory);
             PrintWriter writeTeam = new PrintWriter(file);
             File clubFile = new File(clubDirectory);
             PrintWriter writeClub = new PrintWriter(clubFile);
             
             File file2 = new File(secondDirectory);
             PrintWriter writeTeam2 = new PrintWriter(file2);
             File clubFile2 = new File(secondClubDirectory);
             PrintWriter writeClub2 = new PrintWriter(clubFile2);
             
             for (int k = 0; k < firstTeam.size(); k++) {
               writeTeam.println(firstTeam.get(k).kitNumber + " " + firstTeam.get(k).firstName + " " + 
                                 firstTeam.get(k).surName + " " + firstTeam.get(k).nation + " " + 
                                 firstTeam.get(k).age + " " + firstTeam.get(k).position + " " + 
                                 firstTeam.get(k).average + " " + firstTeam.get(k).potential + " " + 
                                 firstTeam.get(k).lonn + " " + firstTeam.get(k).verdi);
             }
             
             writeTeam.close();
             
             for (int l = 0; l < secondTeam.size(); l++) {
               writeTeam2.println(secondTeam.get(l).kitNumber + " " + secondTeam.get(l).firstName + " " + 
                                 secondTeam.get(l).surName + " " + secondTeam.get(l).nation + " " + 
                                 secondTeam.get(l).age + " " + secondTeam.get(l).position + " " + 
                                 secondTeam.get(l).average + " " + secondTeam.get(l).potential + " " + 
                                 secondTeam.get(l).lonn + " " + secondTeam.get(l).verdi);
             }
             
             writeTeam2.close();
             
             currentClub.budsjett -= newPlayer.verdi;
             sellingClub.budsjett += newPlayer.verdi;
             
             writeClub.println(currentClub.clubName + " " + currentClub.clubAvg + " " + currentClub.kamper + " " + 
                               currentClub.seier + " " + currentClub.uavgjort + " " + currentClub.tap + " " + 
                               currentClub.maol + " " + currentClub.sleptInn + " " + currentClub.maolFor + " " + 
                               currentClub.poeng + " " + currentClub.budsjett + " " + currentClub.league);
             
             writeClub.close();
             
             writeClub2.println(sellingClub.clubName + " " + sellingClub.clubAvg + " " + sellingClub.kamper + " " + 
                               sellingClub.seier + " " + sellingClub.uavgjort + " " + sellingClub.tap + " " + 
                               sellingClub.maol + " " + sellingClub.sleptInn + " " + sellingClub.maolFor + " " + 
                               sellingClub.poeng + " " + sellingClub.budsjett + " " + sellingClub.league);
             
             writeClub2.close();
             
             SquadViewer showNewSquad = new SquadViewer();
             showNewSquad.viewSquad(fullDirectory, clubDirectory, stage);
             return;
             
             } catch (IOException unntak) {
               System.out.println("Feil ved innlesing:" + unntak); }
           }
         }
       }
     }
   });
   
   vbox.getChildren().add(btn);
   vbox.getChildren().add(buyBtn);
   Scene teamScene = new Scene(vbox, 700, 600);
   stage.setScene(teamScene);
   }
}