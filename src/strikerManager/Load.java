import java.io.FileReader;
import java.io.BufferedReader;
import java.util.ArrayList;
import java.io.IOException;
import java.io.File;
import java.io.PrintWriter;
import java.io.FileNotFoundException;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;

public class Load {

  /**
   * Loads data on all nations.
   * 
   * @param nations List of nations.
   * @return All nations in Nation objects.
   * @throws FileNotFoundException
   * @throws IOException
   */
  public static ArrayList<Nasjon> loadNationData(ArrayList<Nasjon> nations) throws FileNotFoundException, IOException {
    FileReader nasjonFileReader = new FileReader(
        "C:/Users/jonkr/Documents/GitHub-prosjekt/jseljesto/src/strikerManager/nasjoner.txt");
    BufferedReader nasjonTextReader = new BufferedReader(nasjonFileReader);
    String inputLine = "";

    while ((inputLine = nasjonTextReader.readLine()) != null) {
      String nasjonText[] = inputLine.split(" ");
      String nasjonNavn = nasjonText[0];
      String firstNameFile = nasjonText[1];
      int firstNameFileLength = Integer.parseInt(nasjonText[2]);
      String lastNameFile = nasjonText[3];
      int lastNameFileLength = Integer.parseInt(nasjonText[4]);
      Nasjon nasjon = new Nasjon(nasjonNavn, firstNameFile, firstNameFileLength, lastNameFile, lastNameFileLength);
      nations.add(nasjon);
    }
    nasjonTextReader.close();
    return (nations);
  }

  /**
   * Loads all data om selected team.
   * 
   * @param importedTeam Selected team.
   * @param directory    Directory of the selected team.
   * @return Selected team in Player array.
   * @throws FileNotFoundException
   * @throws IOException
   */
  public static ArrayList<Player> loadTeamData(ArrayList<Player> importedTeam, String directory)
      throws FileNotFoundException, IOException {
    File teamNameFile = new File(directory);
    FileReader teamNameFileReader = new FileReader(teamNameFile);
    BufferedReader teamNameTextReader = new BufferedReader(teamNameFileReader);

    String teamNameText;
    while ((teamNameText = teamNameTextReader.readLine()) != null) {
      String b[] = teamNameText.split(" ");
      int kitNumber = Integer.parseInt(b[0]);
      String firstName = b[1];
      String surName = b[2];
      String nation = b[3];
      int age = Integer.parseInt(b[4]);
      String position = b[5];
      int average = Integer.parseInt(b[6]);
      int potential = Integer.parseInt(b[7]);
      int lonn = Integer.parseInt(b[8]);
      int verdi = Integer.parseInt(b[9]);
      Player importedPlayer = new Player(kitNumber, firstName, surName, nation, age, position, average, potential, lonn,
          verdi);
      importedTeam.add(importedPlayer);
    }
    teamNameTextReader.close();
    return (importedTeam);
  }
  
  /**
   * Shows the teams player attributes to the user.
   * 
   * @param importedTeam The selected team.
   */
  public static void showTeamData(ArrayList<Player> importedTeam) {
    int tallengde = 0;
    for (int i = 0; i <= 19; i++) {
      if (i == 0) {
        tallengde = ((int) (Math.log10(i + 1) + 1));
      }
      if (i > 0) {
        tallengde = ((int) (Math.log10(i) + 1));
      }
      if ((importedTeam.get(i).firstName + importedTeam.get(i).surName).length() + tallengde <= 8
          && (importedTeam.get(i).nation).length() <= 10) {
        System.out.println(i + "." + importedTeam.get(i).firstName + " " + importedTeam.get(i).surName + "\t" + "\t"
            + "\t" + importedTeam.get(i).nation + "\t" + "\t" + importedTeam.get(i).age + "\t"
            + importedTeam.get(i).position + "\t" + importedTeam.get(i).average + "\t" + importedTeam.get(i).lonn + "\t"
            + "�" + importedTeam.get(i).verdi);
      }
      if ((importedTeam.get(i).firstName + importedTeam.get(i).surName).length() + tallengde <= 8
          && (importedTeam.get(i).nation).length() > 10) {
        System.out.println(i + "." + importedTeam.get(i).firstName + " " + importedTeam.get(i).surName + "\t" + "\t"
            + "\t" + importedTeam.get(i).nation + "\t" + importedTeam.get(i).age + "\t" + importedTeam.get(i).position
            + "\t" + importedTeam.get(i).average + "\t" + importedTeam.get(i).lonn + "\t" + "�"
            + importedTeam.get(i).verdi);
      }
      if ((importedTeam.get(i).firstName + importedTeam.get(i).surName).length() + tallengde > 8
          && (importedTeam.get(i).firstName + importedTeam.get(i).surName).length() + tallengde < 19
          && (importedTeam.get(i).nation).length() <= 10) {
        System.out.println(i + "." + importedTeam.get(i).firstName + " " + importedTeam.get(i).surName + "\t" + "\t"
            + importedTeam.get(i).nation + "\t" + "\t" + importedTeam.get(i).age + "\t" + importedTeam.get(i).position
            + "\t" + importedTeam.get(i).average + "\t" + importedTeam.get(i).lonn + "\t" + "�"
            + importedTeam.get(i).verdi);
      }
      if ((importedTeam.get(i).firstName + importedTeam.get(i).surName).length() + tallengde > 8
          && (importedTeam.get(i).firstName + importedTeam.get(i).surName).length() + tallengde < 19
          && (importedTeam.get(i).nation).length() > 10) {
        System.out.println(i + "." + importedTeam.get(i).firstName + " " + importedTeam.get(i).surName + "\t" + "\t"
            + importedTeam.get(i).nation + "\t" + importedTeam.get(i).age + "\t" + importedTeam.get(i).position + "\t"
            + importedTeam.get(i).average + "\t" + importedTeam.get(i).lonn + "\t" + "�" + importedTeam.get(i).verdi);
      }
      if ((importedTeam.get(i).firstName + importedTeam.get(i).surName).length() + tallengde >= 19
          && (importedTeam.get(i).nation).length() <= 10) {
        System.out.println(i + "." + importedTeam.get(i).firstName + " " + importedTeam.get(i).surName + "\t"
            + importedTeam.get(i).nation + "\t" + "\t" + importedTeam.get(i).age + "\t" + importedTeam.get(i).position
            + "\t" + importedTeam.get(i).average + "\t" + importedTeam.get(i).lonn + "\t" + "�"
            + importedTeam.get(i).verdi);
      }
      if ((importedTeam.get(i).firstName + importedTeam.get(i).surName).length() + tallengde >= 19
          && (importedTeam.get(i).nation).length() > 10) {
        System.out.println(i + "." + importedTeam.get(i).firstName + " " + importedTeam.get(i).surName + "\t"
            + importedTeam.get(i).nation + "\t" + importedTeam.get(i).age + "\t" + importedTeam.get(i).position + "\t"
            + importedTeam.get(i).average + "\t" + importedTeam.get(i).lonn + "\t" + "�" + importedTeam.get(i).verdi);
      }
    }
  }

  /**
   * Converts nations into flag images.
   * @param importedTeam The chosen team.
   * @return Converted team.
   * @throws FileNotFoundException
   * @throws IOException
   */
  public static ArrayList<TeamViewer> convertNationToFlag(ArrayList<Player> importedTeam)
      throws FileNotFoundException, IOException {
    ArrayList<TeamViewer> teamToConvert = new ArrayList<TeamViewer>();
    for (int i = 0; i < importedTeam.size(); i++) {
      int kitNumber = importedTeam.get(i).kitNumber;
      String firstName = importedTeam.get(i).firstName;
      String surName = importedTeam.get(i).surName;
      Image image = new Image("file:///C:/Users/jonkr/Documents/GitHub-prosjekt/jseljesto/src/strikerManager/Logoes/"
          + importedTeam.get(i).nation + ".png");
      ImageView img = new ImageView();
      img.setImage(image);
      img.setFitWidth(25);
      img.setFitHeight(25);
      int age = importedTeam.get(i).age;
      String position = importedTeam.get(i).position;
      int average = importedTeam.get(i).average;
      int potential = importedTeam.get(i).potential;
      int lonn = importedTeam.get(i).lonn;
      int verdi = importedTeam.get(i).verdi;
      TeamViewer convertedPlayer = new TeamViewer(kitNumber, firstName, surName, img, age, position, average, potential,
          lonn, verdi);
      teamToConvert.add(convertedPlayer);
    }
    return (teamToConvert);
  }

  /**
   * Loads data on selected club.
   * @param directory Directory of the selected club.
   * @return The club as a Club Object.
   * @throws FileNotFoundException
   * @throws IOException
   */
  public static Club loadClub(String directory) throws FileNotFoundException, IOException {
    File teamNameFile = new File(directory);
    FileReader teamNameFileReader = new FileReader(teamNameFile);
    BufferedReader teamNameTextReader = new BufferedReader(teamNameFileReader);
    String teamNameText = teamNameTextReader.readLine();
    String b[] = teamNameText.split(" ");
    String clubName = b[0];
    int clubAverage = Integer.parseInt(b[1]);
    int matches = Integer.parseInt(b[2]);
    int wins = Integer.parseInt(b[3]);
    int draws = Integer.parseInt(b[4]);
    int losses = Integer.parseInt(b[5]);
    int goalsScored = Integer.parseInt(b[6]);
    int goalsConceded = Integer.parseInt(b[7]);
    int goalDifference = Integer.parseInt(b[8]);
    int points = Integer.parseInt(b[9]);
    int budget = Integer.parseInt(b[10]);
    String league = b[11];

    Club returnedClub = new Club(clubName, clubAverage, matches, wins, draws, losses, goalsScored, goalsConceded,
        goalDifference, points, budget, league);
    teamNameTextReader.close();
    return returnedClub;
  }

  /**
   * Finds the average of all players in club.
   * @param importedTeam The selected team.
   * @return Average rating of all players.
   */
  public static int getAverage(ArrayList<Player> importedTeam) {
    int teamAverage = 0;
    for (int i = 0; i < importedTeam.size(); i++) {
      teamAverage += importedTeam.get(i).average;
    }
    teamAverage /= importedTeam.size();
    return teamAverage;
  }

  /**
   * Finds a currently available league.
   * @return A league with an available place.
   * @throws FileNotFoundException
   * @throws IOException
   */
  public static String getAvailableLeague() throws FileNotFoundException, IOException {
    League availableLeague = null;
    File folder = new File("C:/Users/jonkr/Documents/GitHub-prosjekt/jseljesto/src/strikerManager/Leagues");
    File listOfFiles[] = folder.listFiles();
    if (listOfFiles.length == 0) {
      availableLeague = new League("Toppdivisjonen", 1, false, 0, 1);
      File file = new File("C:/Users/jonkr/Documents/GitHub-prosjekt/jseljesto/src/strikerManager/Leagues/"
          + availableLeague.name + ".txt");
      PrintWriter writeLeague = new PrintWriter(file);
      writeLeague.println(availableLeague.name + " " + availableLeague.tourneyLvl + " " + availableLeague.isSection
          + " " + availableLeague.numOfClubs + " " + availableLeague.runde);
      writeLeague.close();
    } else {
      for (int i = 1; i < 20; i++) {
        if (availableLeague == null) {
          for (int n = 0; n < listOfFiles.length; n++) {
            if (listOfFiles[n].isFile()) {
              if (listOfFiles[n].getName().endsWith(".txt")) {
                String fullDirectory = "C:/Users/jonkr/Documents/GitHub-prosjekt/jseljesto/src/strikerManager/Leagues/"
                    + listOfFiles[n].getName();
                League test = Load.getLeague(fullDirectory);
                if (test.numOfClubs < 18 && test.tourneyLvl < i) {
                  availableLeague = test;
                  break;
                }
              }
            }
          }
        }
      }
      if (availableLeague == null) {
        availableLeague = new League("Unnamed Division", (listOfFiles.length) + 1, false, 0, 1);
        File file = new File("C:/Users/jonkr/Documents/GitHub-prosjekt/jseljesto/src/strikerManager/Leagues/"
            + availableLeague.name + ".txt");
        PrintWriter writeLeague = new PrintWriter(file);
        writeLeague.println(availableLeague.name + " " + availableLeague.tourneyLvl + " " + availableLeague.isSection
            + " " + availableLeague.numOfClubs + " " + availableLeague.runde);
        writeLeague.close();
      }
    }
    return availableLeague.name;
  }

  /**
   * Finds chosen league.
   * @param fullDirectory Directory of the league.
   * @return The league as a League Object.
   * @throws FileNotFoundException
   * @throws IOException
   */
  public static League getLeague(String fullDirectory) throws FileNotFoundException, IOException {
    League importedLeague = null;
    File leagueNameFile = new File(fullDirectory);
    FileReader leagueNameFileReader = new FileReader(leagueNameFile);
    BufferedReader leagueNameTextReader = new BufferedReader(leagueNameFileReader);

    String leagueNameText;
    while ((leagueNameText = leagueNameTextReader.readLine()) != null) {
      String b[] = leagueNameText.split(" ");
      String name = b[0];
      int tourneyLvl = Integer.parseInt(b[1]);
      boolean isSec = Boolean.parseBoolean(b[2]);
      int numOfClubs = Integer.parseInt(b[3]);
      int runde = Integer.parseInt(b[4]);
      importedLeague = new League(name, tourneyLvl, isSec, numOfClubs, runde);
    }
    leagueNameTextReader.close();
    return importedLeague;
  }

    /**
     * Checks the number of clubs assigned to league.
     * @param league The chosen league.
     * @return The number of assigned clubs.
     * @throws FileNotFoundException
     * @throws IOException
     */
  public static int numOfAssignedClubs(League league) throws FileNotFoundException, IOException {
    int assignedClubs = 0;
    File folder = new File("C:/Users/jonkr/Documents/GitHub-prosjekt/jseljesto/src/strikerManager/Clubs");
    File listOfFiles[] = folder.listFiles();
    for (int n = 0; n < listOfFiles.length; n++) {
      if (listOfFiles[n].isFile()) {
        if (listOfFiles[n].getName().endsWith(".txt")) {
          String fullDirectory = "C:/Users/jonkr/Documents/GitHub-prosjekt/jseljesto/src/strikerManager/Clubs/"
              + listOfFiles[n].getName();
          Club importedClub = Load.loadClub(fullDirectory);
          if (importedClub.league.equals(league.name)) {
            assignedClubs++;
          }
        }
      }
    }
    return assignedClubs;
  }
}