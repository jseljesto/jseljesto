import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.File;
import java.util.ArrayList;
import java.util.Random;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Insets;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.layout.GridPane;
import javafx.stage.Stage;

public class PlayMatch {
  
  public static void playNextMatch(Club chosenClub, Stage stage) throws FileNotFoundException, IOException {
    
    GridPane grid = new GridPane();
    grid.setPadding(new Insets(10, 10, 10, 10));
    grid.setVgap(5);
    grid.setHgap(5);
    int row = 0;
    
    String leagueDirectory = "C:/Users/jonkr/Documents/java-filer/strikerManager/Leagues/" + chosenClub.league + ".txt";
    League currentLeague = Load.getLeague(leagueDirectory);
    ArrayList<Club> clubs = new ArrayList<Club>();
    String clubDirectory = "C:/Users/jonkr/Documents/java-filer/strikerManager/Clubs/";
    File folder = new File(clubDirectory);
    File listOfFiles[] = folder.listFiles();
    for (int n = 0; n < listOfFiles.length; n++) {
      if (listOfFiles[n].isFile()) {
        if (listOfFiles[n].getName().endsWith(".txt")) {
          String fullDirectory = clubDirectory + listOfFiles[n].getName();
          Club importedClub = Load.loadClub(fullDirectory);
          if (importedClub.league.equals(chosenClub.league)) {
            clubs.add(importedClub);
          }
        }
      }
    }
    String scheduleDirectory = "C:/Users/jonkr/Documents/java-filer/strikerManager/Schedules/" + currentLeague.name + 
      ".txt";
    boolean check = new File(scheduleDirectory).exists();
    if (check == false) {
      Schedule.createSchedule(currentLeague);
    }
    
    ArrayList<Integer> fixtures = new ArrayList<Integer>();
    fixtures = Schedule.loadMatches(scheduleDirectory, currentLeague.runde, currentLeague.numOfClubs);
    for (int i = 0; i < fixtures.size(); i += 2) {
      Club club1 = clubs.get(fixtures.get(i)-1);
      Club club2 = clubs.get(fixtures.get(i+1)-1);
      Random rand = new Random();
      int firstPoints = 0;
      int secondPoints = 0;
      if (club1.clubAvg > club2.clubAvg) {
        int diff = club1.clubAvg - club2.clubAvg;
        for (int c = 0; c <= 5; c++) {
          double lykke = rand.nextInt(100) + 1+(1.2*diff);
          double lykke2 = rand.nextInt(100) + 1-(1.2*diff);
          if (lykke >= 75.0) {
            firstPoints++; }
          if (lykke2 >= 75.0) {
            secondPoints++; }
        } 
        Label result = new Label(club1.clubName + " " + firstPoints + " - " + secondPoints + " " + club2.clubName);
        grid.add(result, 0, row);
        row++;
      }
      else if (club2.clubAvg > club1.clubAvg) {
        int diff = club2.clubAvg - club1.clubAvg;
        for (int c = 0; c <= 5; c++) {
          double lykke = rand.nextInt(100) + 1+(1.2*diff);
          double lykke2 = rand.nextInt(100) + 1-(1.2*diff);
          if (lykke >= 75.0) {
            secondPoints++; }
          if (lykke2 >= 75.0) {
            firstPoints++; }
        }
        Label result = new Label(club1.clubName + " " + firstPoints + " - " + secondPoints + " " + club2.clubName);
        grid.add(result, 0, row);
        row++;
      }
      else if (club1.clubAvg == club2.clubAvg) {
        for (int c = 0; c <= 5; c++) {
          double lykke = rand.nextInt(100) + 1;
          double lykke2 = rand.nextInt(100) + 1;
          if (lykke >= 75.0) {
            firstPoints++; }
          if (lykke2 >= 75.0) {
            secondPoints++; }
        }
        Label result = new Label(club1.clubName + " " + firstPoints + " - " + secondPoints + " " + club2.clubName);
        grid.add(result, 0, row);
        row++;
      }
      if (firstPoints > secondPoints) {
        club1.poeng += 3;
        club1.seier += 1;
        club2.tap += 1;
      }
      else if (secondPoints > firstPoints) {
        club2.poeng += 3;
        club2.seier += 1;
        club1.tap += 1;
      }
      else if (firstPoints == secondPoints) {
        club1.poeng += 1;
        club2.poeng += 1;
        club1.uavgjort += 1;
        club2.uavgjort += 1;
      }
      
      club1.kamper += 1;
      club2.kamper += 1;
      club1.maol += firstPoints;
      club2.maol += secondPoints;
      club1.sleptInn += secondPoints;
      club2.sleptInn += firstPoints;
      club1.maolFor = club1.maol - club1.sleptInn;
      club2.maolFor = club2.maol - club2.sleptInn;
      
      //Maote � leggja til resultat i ein scena, og so writa klubbane til filene sine. Du finne fili med � ta
      //Club-name og finne directory slik. Hugs og � auka runde i ligaen, og so writa dan ut.
    }
    
 /* Button playBtn = new Button();
    playBtn.setText("Play Next Match");
    playBtn.setOnAction(new EventHandler<ActionEvent>() {
      
      @Override
      public void handle(ActionEvent event) {
        try {
          PlayMatch play = new PlayMatch();
          Club importedClub = loader.loadClub(clubDirectory);                                        
          play.playNextMatch(chosenClub, stage);
        } catch (IOException unntak) {
          System.out.println("Feil ved innlesing:" + unntak);
        }
      }
    }); */
    
    Button view = new Button();
    view.setText("View squad");
    view.setOnAction(new EventHandler<ActionEvent>() {
     
     @Override
     public void handle(ActionEvent event) {
       try {
         SquadViewer squad = new SquadViewer();
         String fullDirectory = "C:/Users/jonkr/Documents/java-filer/strikerManager/Teams/" + chosenClub.clubName + ".txt";
         String clubFullDirectory = "C:/Users/jonkr/Documents/java-filer/strikerManager/Clubs/" + chosenClub.clubName + ".txt";
         squad.viewSquad(fullDirectory, clubFullDirectory, stage);
         return;
       } catch (IOException unntak) {
         System.out.println("Feil ved innlesing:" + unntak);
       }
     }
   });
    
   /* grid.add(playBtn, 0, row);
    row++; */
    grid.add(view, 0, row);
    Scene playScene = new Scene(grid, 600, 500);
    stage.setScene(playScene);
  }
}