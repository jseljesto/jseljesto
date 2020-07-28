import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.File;
import java.util.ArrayList;
import java.util.Random;
//import java.util.Timer;
//import java.util.TimerTask;

//import javafx.application.Platform;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Insets;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.GridPane;
import javafx.stage.Stage;
import javafx.beans.property.*;

public class PlayMatch {

  int possessionHome = 50;
  int possessionAway = 50;
  String posHome = "";
  String posAway = "";
  Club test1 = null;
  Club test2 = null;
  Boolean isHomeTeam = false;
  Boolean isAwayTeam = false;
  int goalsHomeTeam = 0;
  int goalsAwayTeam = 0;

  /**
   * Plays the next batch of matches.
   * @param chosenClub Club controlled by player.
   * @param stage The current stage.
   * @throws FileNotFoundException
   * @throws IOException
   */
  public void playNextMatch(Club chosenClub, Stage stage) throws FileNotFoundException, IOException {

    GridPane grid = new GridPane();
    grid.setPadding(new Insets(10, 10, 10, 10));
    grid.setVgap(5);
    grid.setHgap(5);
    int row = 0;

    String leagueDirectory = "C:/Users/jonkr/Documents/GitHub-prosjekt/jseljesto/src/strikerManager/Leagues/"
        + chosenClub.league + ".txt";
    League currentLeague = Load.getLeague(leagueDirectory);
    ArrayList<Club> clubs = new ArrayList<Club>();
    String clubDirectory = "C:/Users/jonkr/Documents/GitHub-prosjekt/jseljesto/src/strikerManager/Clubs/";
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
    String scheduleDirectory = "C:/Users/jonkr/Documents/GitHub-prosjekt/jseljesto/src/strikerManager/Schedules/"
        + currentLeague.name + ".txt";
    boolean check = new File(scheduleDirectory).exists();
    if (check == false) {
      Schedule.createSchedule(currentLeague);
    }

    ArrayList<Integer> fixtures = new ArrayList<Integer>();
    fixtures = Schedule.loadMatches(scheduleDirectory, currentLeague.runde, currentLeague.numOfClubs);
    for (int i = 0; i < fixtures.size(); i += 2) {
      Club club1 = clubs.get(fixtures.get(i) - 1);
      Club club2 = clubs.get(fixtures.get(i + 1) - 1);
      if (club1.clubName.equals(chosenClub.clubName) || club2.clubName.equals(chosenClub.clubName)) {
        test1 = club1;
        if (test1.clubName.equals(chosenClub.clubName)) {
          isHomeTeam = !isHomeTeam;
        }
        test2 = club2;
        if (test2.clubName.equals(chosenClub.clubName)) {
          isAwayTeam = !isAwayTeam;
        }
      } else {
        Random rand = new Random();
        int firstPoints = 0;
        int secondPoints = 0;
        if (club1.clubAvg > club2.clubAvg) {
          int diff = club1.clubAvg - club2.clubAvg;
          for (int c = 0; c <= 5; c++) {
            double lykke = rand.nextInt(100) + 1 + (1.2 * diff);
            double lykke2 = rand.nextInt(100) + 1 - (1.2 * diff);
            if (lykke >= 75.0) {
              firstPoints++;
            }
            if (lykke2 >= 75.0) {
              secondPoints++;
            }
          }
          Label result = new Label(club1.clubName + " " + firstPoints + " - " + secondPoints + " " + club2.clubName);
          grid.add(result, 0, row);
          row++;
        } else if (club2.clubAvg > club1.clubAvg) {
          int diff = club2.clubAvg - club1.clubAvg;
          for (int c = 0; c <= 5; c++) {
            double lykke = rand.nextInt(100) + 1 + (1.2 * diff);
            double lykke2 = rand.nextInt(100) + 1 - (1.2 * diff);
            if (lykke >= 75.0) {
              secondPoints++;
            }
            if (lykke2 >= 75.0) {
              firstPoints++;
            }
          }
          Label result = new Label(club1.clubName + " " + firstPoints + " - " + secondPoints + " " + club2.clubName);
          grid.add(result, 0, row);
          row++;
        } else if (club1.clubAvg == club2.clubAvg) {
          for (int c = 0; c <= 5; c++) {
            double lykke = rand.nextInt(100) + 1;
            double lykke2 = rand.nextInt(100) + 1;
            if (lykke >= 75.0) {
              firstPoints++;
            }
            if (lykke2 >= 75.0) {
              secondPoints++;
            }
          }
          Label result = new Label(club1.clubName + " " + firstPoints + " - " + secondPoints + " " + club2.clubName);
          grid.add(result, 0, row);
          row++;
        }
        if (firstPoints > secondPoints) {
          club1.poeng += 3;
          club1.seier += 1;
          club2.tap += 1;
        } else if (secondPoints > firstPoints) {
          club2.poeng += 3;
          club2.seier += 1;
          club1.tap += 1;
        } else if (firstPoints == secondPoints) {
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
      }
    }

    /*
     * Button playBtn = new Button(); playBtn.setText("Play Next Match");
     * playBtn.setOnAction(new EventHandler<ActionEvent>() {
     * 
     * @Override public void handle(ActionEvent event) { try { PlayMatch play = new
     * PlayMatch(); Club importedClub = loader.loadClub(clubDirectory);
     * play.playNextMatch(chosenClub, stage); } catch (IOException unntak) {
     * System.out.println("Feil ved innlesing:" + unntak); } } });
     */

    Button test = new Button();
    test.setText("Quick Sim");
    test.setOnAction(new EventHandler<ActionEvent>() {
      @Override
      public void handle(ActionEvent event) {
        PlayMatch test = new PlayMatch();
        try {
          test.showMatchScreen(test1, test2, isHomeTeam, isAwayTeam, stage);
        } catch (InterruptedException unntak) {
          System.out.println("Feil ved innlesing:" + unntak);
        } catch (IOException e) {
          e.printStackTrace();
        }
      }
    });

    /*
     * grid.add(playBtn, 0, row); row++;
     */
    grid.add(test, 0, row);
    Scene playScene = new Scene(grid, 600, 500);
    stage.setScene(playScene);
  }

    /**
     * Shows the current players match on screen.
     * @param homeTeam Team at home.
     * @param awayTeam Team playing away.
     * @param isHomeTeam True if player controlled team is playing at home.
     * @param isAwayTeam True if player controlled team is playing away.
     * @param stage The current stage.
     * @throws IOException
     * @throws InterruptedException
     */
  public void showMatchScreen(Club homeTeam, Club awayTeam, Boolean isHomeTeam, boolean isAwayTeam, Stage stage)
      throws IOException, InterruptedException {
    GridPane grid = new GridPane();
    grid.setPadding(new Insets(10, 10, 10, 10));
    grid.setVgap(2);
    grid.setHgap(2);

    Label homeTeamName = new Label(homeTeam.clubName);
    grid.add(homeTeamName, 0, 0);
    Label awayTeamName = new Label(awayTeam.clubName);
    grid.add(awayTeamName, 5, 0);
    possessionHome = 50;
    possessionAway = 50;
    posHome = Integer.toString(possessionHome);
    posAway = Integer.toString(possessionAway);
    StringProperty propertyHome = new SimpleStringProperty();
    StringProperty propertyAway = new SimpleStringProperty();
    propertyHome.setValue(posHome);
    propertyAway.setValue(posAway);
    Random rand = new Random();

    /*
     * Button testBtn = new Button(); testBtn.setText("Test");
     * testBtn.setOnAction(new EventHandler<ActionEvent>() {
     * 
     * @Override public void handle(ActionEvent event) { int homeRoll =
     * rand.nextInt(100 - homeTeam.clubAvg) + homeTeam.clubAvg; int awayRoll =
     * rand.nextInt(100 - awayTeam.clubAvg) + awayTeam.clubAvg; if (homeRoll >
     * awayRoll) { possessionHome++; possessionAway--; } else if (awayRoll >
     * homeRoll) { possessionHome--; possessionAway++; }
     * System.out.println(possessionHome); posHome =
     * Integer.toString(possessionHome); posAway = Integer.toString(possessionAway);
     * propertyHome.setValue(posHome); propertyAway.setValue(posAway); } });
     * grid.add(testBtn, 8, 5);
     */

    int matchTime = 0;
    while (matchTime < 90) {
      int homeRoll = rand.nextInt(100 - homeTeam.clubAvg) + homeTeam.clubAvg;
      int awayRoll = rand.nextInt(100 - awayTeam.clubAvg) + awayTeam.clubAvg;
      if (homeRoll > awayRoll) {
        possessionHome++;
        possessionAway--;
      } else if (awayRoll > homeRoll) {
        possessionHome--;
        possessionAway++;
      }
      posHome = Integer.toString(possessionHome);
      posAway = Integer.toString(possessionAway);
      propertyHome.setValue(posHome);
      propertyAway.setValue(posAway);

      homeRoll = rand.nextInt(100 - possessionHome) + possessionHome;
      if (homeRoll > 98) {
        goalsHomeTeam++;
      }
      awayRoll = rand.nextInt(100 - possessionAway) + possessionAway;
      if (awayRoll > 98) {
        goalsAwayTeam++;
      }

      matchTime++;
    }
    Label possessionLeft = new Label(posHome);
    grid.add(possessionLeft, 0, 8);
    Label possessionRight = new Label(posAway);
    grid.add(possessionRight, 5, 8);
    possessionLeft.textProperty().bind(propertyHome);
    possessionRight.textProperty().bind(propertyAway);
    Label result = new Label(goalsHomeTeam + " - " + goalsAwayTeam);
    grid.add(result, 3, 4);

    Button prizeBtn = new Button();
    prizeBtn.setText("Show rewards");
    prizeBtn.setOnAction(new EventHandler<ActionEvent>() {

      @Override
      public void handle(ActionEvent event) {
        PlayMatch rewards = new PlayMatch();
        if (isHomeTeam) {
          rewards.showRewards(homeTeam, awayTeam, goalsHomeTeam, goalsAwayTeam, stage);
        } else if (isAwayTeam) {
          rewards.showRewards(awayTeam, homeTeam, goalsAwayTeam, goalsHomeTeam, stage);
        }
      }
    });
    grid.add(prizeBtn, 2, 12);

    Scene matchScene = new Scene(grid, 600, 500);
    stage.setScene(matchScene);

    /*
     * TimerTask task = new TimerTask() { public void run() { int homeRoll =
     * rand.nextInt(100 - homeTeam.clubAvg) + homeTeam.clubAvg; int awayRoll =
     * rand.nextInt(100 - awayTeam.clubAvg) + awayTeam.clubAvg; if (homeRoll >
     * awayRoll) { possessionHome++; possessionAway--; } else if (awayRoll >
     * homeRoll) { possessionHome--; possessionAway++; } posHome =
     * Integer.toString(possessionHome); posAway = Integer.toString(possessionAway);
     * propertyHome.setValue(posHome); propertyAway.setValue(posAway); } }; //
     * Different events during game // task.start();
     * 
     * Timer timer = new Timer(); timer.schedule(task, 1000l);
     */
  }

    /**
     * Shows rewards won by player-controlled team.
     * @param myTeam Team controlled by player.
     * @param opponentTeam Opposing team in last match.
     * @param myGoals Goals scored by player.
     * @param opponentGoals Goals scored by opposing team.
     * @param stage The current stage.
     */
  public void showRewards(Club myTeam, Club opponentTeam, int myGoals, int opponentGoals, Stage stage) {
    double multiplier = 0;
    if (myGoals < opponentGoals) {
      opponentTeam.poeng += 3;
      opponentTeam.seier += 1;
      myTeam.tap += 1;
      multiplier = 0.5;
    } else if (myGoals > opponentGoals) {
      myTeam.poeng += 3;
      myTeam.seier += 1;
      opponentTeam.tap += 1;
      multiplier = 1.5;
    } else if (myGoals == opponentGoals) {
      myTeam.poeng += 1;
      opponentTeam.poeng += 1;
      myTeam.uavgjort += 1;
      opponentTeam.uavgjort += 1;
      multiplier = 1;
    }

    myTeam.kamper += 1;
    opponentTeam.kamper += 1;
    myTeam.maol += myGoals;
    opponentTeam.maol += opponentGoals;
    myTeam.sleptInn += opponentGoals;
    opponentTeam.sleptInn += myGoals;
    myTeam.maolFor = myTeam.maol - myTeam.sleptInn;
    opponentTeam.maolFor = opponentTeam.maol - opponentTeam.sleptInn;

    GridPane grid = new GridPane();
    grid.setPadding(new Insets(10, 10, 10, 10));
    grid.setVgap(2);
    grid.setHgap(1);

    int gold = (int) ((750 + (150 * myGoals)) * multiplier);
    String goldWon = Integer.toString(gold);
    Label showGold = new Label("Gold won: " + goldWon);
    grid.add(showGold, 0, 0);

    Image image = new Image("Images/coins.png");
    ImageView img = new ImageView();
    img.setImage(image);
    img.setFitWidth(25);
    img.setFitHeight(25);
    grid.add(img, 2, 0);

    int ballCoinz = (int) ((10 + (5 * myGoals)) * multiplier);
    String ballCoinzWon = Integer.toString(ballCoinz);
    Label showBallCoinz = new Label("BallCoinz won: " + ballCoinzWon);
    grid.add(showBallCoinz, 0, 2);

    Image ballImage = new Image("Images/ballCoinz.png");
    ImageView ballImg = new ImageView();
    ballImg.setImage(ballImage);
    ballImg.setFitWidth(20);
    ballImg.setFitHeight(20);
    grid.add(ballImg, 3, 2);

    Button view = new Button();
    view.setText("View squad");
    view.setOnAction(new EventHandler<ActionEvent>() {

      @Override
      public void handle(ActionEvent event) {
        try {
          SquadViewer squad = new SquadViewer();
          String fullDirectory = "C:/Users/jonkr/Documents/GitHub-prosjekt/jseljesto/src/strikerManager/Teams/"
              + myTeam.clubName + ".txt";
          String clubFullDirectory = "C:/Users/jonkr/Documents/GitHub-prosjekt/jseljesto/src/strikerManager/Clubs/"
              + myTeam.clubName + ".txt";
          squad.viewSquad(fullDirectory, clubFullDirectory, stage);
          return;
        } catch (IOException unntak) {
          System.out.println("Feil ved innlesing:" + unntak);
        }
      }
    });

    grid.add(view, 0, 5);

    // Add images to gold and ballCoinz

    Scene prizeScene = new Scene(grid, 600, 500);
    stage.setScene(prizeScene);

    // Writing out the clubs to txt, and adding gold to budget and ballCoinz to
    // club.
  }
}