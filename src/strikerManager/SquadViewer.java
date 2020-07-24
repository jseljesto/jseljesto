import javafx.collections.ObservableList;
import javafx.collections.FXCollections;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Insets;
import java.io.IOException;
import java.io.FileNotFoundException;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TableColumn;
import javafx.scene.control.TableView;
import javafx.scene.control.TextField;
import javafx.scene.control.cell.PropertyValueFactory;
import javafx.scene.image.ImageView;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;


import java.util.ArrayList;

public class SquadViewer {
  
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
    return kitNumber + " " + firstName + " " + surName + "\t" + "\t" + nation + "\t" + age + "\t" + position + "\t" + average + "\t" + potential + "\t" + lonn + "\t" + verdi;
  }
  
  ArrayList<Player> importedTeam = new ArrayList<Player>();
  Load loader = new Load();
  
  public static void searchSquad(Stage stage) {
    String directory = "C:/Users/jonkr/Documents/GitHub-prosjekt/jseljesto/src/strikerManager/Teams/";
    String clubDirectory = "C:/Users/jonkr/Documents/GitHub-prosjekt/jseljesto/src/strikerManager/Clubs/";
    
    //Lagar knappar og input til � s�ke opp team
    GridPane grid = new GridPane();
    grid.setPadding(new Insets(10, 10, 10, 10));
    grid.setVgap(5);
    grid.setHgap(5);
    TextField name = new TextField();
    name.setPromptText("Enter your first name.");
    name.setPrefColumnCount(10);
    GridPane.setConstraints(name, 0, 0);
    grid.getChildren().add(name);
    Button submit = new Button("Submit");
    GridPane.setConstraints(submit, 1, 0);
    grid.getChildren().add(submit);
    Button clear = new Button("Clear");
    GridPane.setConstraints(clear, 1, 1);
    grid.getChildren().add(clear);
    Label label = new Label();
    GridPane.setConstraints(label, 0, 3);
    GridPane.setColumnSpan(label, 2);
    grid.getChildren().add(label);
    Scene mainScene = new Scene(grid, 300, 250);
    stage.setScene(mainScene);
    
    clear.setOnAction(new EventHandler<ActionEvent>() {
      
      @Override
      public void handle(ActionEvent e) {
        name.clear();
        label.setText(null);
        return;
      }
    });
    
    submit.setOnAction(new EventHandler<ActionEvent>() {
      
      @Override
      public void handle(ActionEvent e) {
        if ((name.getText() == null && !name.getText().isEmpty())) {
          label.setText("You have not entered a name");
        } else {
          try {
            
            //Finner valgt lag og lagar liste av element
            String lagNavn = name.getText() + ".txt";
            String fullDirectory = directory + lagNavn;
            String fullClubDirectory = clubDirectory + lagNavn;
            SquadViewer squad = new SquadViewer();
            squad.viewSquad(fullDirectory, fullClubDirectory, stage);
            return;
            
          } catch (IOException unntak) {
            System.out.println("Feil ved innlesing:" + unntak);
          }
        }
      }
    });
  }
  
  @SuppressWarnings("unchecked")
  public void viewSquad(String fullDirectory, String clubDirectory, Stage stage) throws FileNotFoundException, IOException {
    importedTeam = Load.loadTeamData(importedTeam, fullDirectory);
    ArrayList<TeamViewer> updatedTeam = new ArrayList<TeamViewer>();
    updatedTeam = Load.convertNationToFlag(importedTeam);
    ObservableList<TeamViewer> data = FXCollections.observableList(updatedTeam);
    TableView<TeamViewer> table = new TableView<>();
    table.setEditable(false);
    
    //Setter opp columns i table
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
    
    
    //Legger inn data og columns
    table.setItems(data);
    table.getColumns().addAll(numberCol, firstNameCol, surNameCol, nationCol, ageCol, posCol, averageCol, lonnCol, verdiCol);
    
    //Byttar scene til den nye tabellen
    final VBox vbox = new VBox();
    vbox.setSpacing(5);
    vbox.setPadding(new Insets(10, 0, 0, 10));
    vbox.getChildren().add(table);
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
    
    Button trainingBtn = new Button();
    trainingBtn.setText("Train team");
    trainingBtn.setOnAction(new EventHandler<ActionEvent>() {
      
      @Override
      public void handle(ActionEvent event) {
        try {
          Training.trainSquad(fullDirectory, clubDirectory, stage);
          return;
        } catch (IOException unntak) {
          System.out.println("Feil ved innlesing:" + unntak);
        }
      }
      
    });
    
    Button buyBtn = new Button();
    buyBtn.setText("Buy a player");
    buyBtn.setOnAction(new EventHandler<ActionEvent>() {
      
      @Override
      public void handle(ActionEvent event) {
        TransferPlayer transfer = new TransferPlayer();
        transfer.findTeams(fullDirectory, clubDirectory, stage, importedTeam);
        return;
      }
    });
    
    Button playBtn = new Button();
    playBtn.setText("Play Next Match");
    playBtn.setOnAction(new EventHandler<ActionEvent>() {
      
      @Override
      public void handle(ActionEvent event) {
        try {
          //PlayMatch play = new PlayMatch();
          Club importedClub = Load.loadClub(clubDirectory); 
          PlayMatch play = new PlayMatch();                                       
          play.playNextMatch(importedClub, stage);
          return;
        } catch (IOException unntak) {
          System.out.println("Feil ved innlesing:" + unntak);
        }
      }
    });
    
    vbox.getChildren().add(btn);
    vbox.getChildren().add(trainingBtn);
    vbox.getChildren().add(buyBtn);
    vbox.getChildren().add(playBtn);
    Scene teamScene = new Scene(vbox, 600, 600);
    stage.setScene(teamScene);
  }
}