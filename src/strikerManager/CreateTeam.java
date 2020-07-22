import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Insets;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.TextField;
import javafx.scene.control.ChoiceBox;
import javafx.scene.layout.GridPane;
import javafx.stage.Stage;

import java.util.Random;
import java.io.*;
import java.util.ArrayList;

public class CreateTeam {
  
  ArrayList<Nasjon> nasjonsListe = new ArrayList<Nasjon>();
  
 public void findClubAndNation(Stage stage) throws FileNotFoundException, IOException {
    
   //Loading in nations
   //ArrayList<Nasjon> nasjonsListe = new ArrayList<Nasjon>(); //alle desse mao modererast
   nasjonsListe = Load.loadNationData(nasjonsListe);
   
   GridPane grid = new GridPane();
   grid.setPadding(new Insets(10, 10, 10, 10));
   grid.setVgap(5);
   grid.setHgap(5);
   TextField name = new TextField();
   name.setPromptText("Enter the name and country of club:");
   name.setPrefColumnCount(10);
   GridPane.setConstraints(name, 0, 0);
   grid.getChildren().add(name);
   ChoiceBox cb = new ChoiceBox();
   GridPane.setConstraints(cb, 1, 0);
   Button submit = new Button("Submit");
   GridPane.setConstraints(submit, 1, 1);
   grid.getChildren().add(submit);
   
   for (int i = 0; i < nasjonsListe.size(); i++) {
     cb.getItems().add(nasjonsListe.get(i).navn);
   }
   
   submit.setOnAction(new EventHandler<ActionEvent>() {
     
     @Override
     public void handle(ActionEvent event) {
       try {
       String valgtNasjon = (String) cb.getValue();
       String lagNavn = name.getText() + ".txt";
       CreateTeam nt = new CreateTeam();
       nt.createNewTeam(nasjonsListe, valgtNasjon, lagNavn, stage);
       return;
       } catch (IOException unntak) {
      System.out.println("Feil ved innlesing:" + unntak);
       }
     }
   });
   
   grid.getChildren().add(cb);
   Scene currentScene = new Scene(grid, 600, 500);
   stage.setScene(currentScene);
   
 }
 
 public void createNewTeam(ArrayList<Nasjon> nasjonsListe, String valgtNasjon, String clubName, Stage stage) throws FileNotFoundException, IOException {
   
   int surnameFileLength = 0;
   int firstnameFileLength = 0;
   String firstNameTextFile = " ";
   String secondNameTextFile = " ";
   int avgAld = 0;
   int teamAverage = 0;
   String nationDirectory = "C:/Users/jonkr/Documents/java-filer/strikerManager/Nations/";
  
   //System.out.println("Velg din nasjon: ");
   //String valgtNasjon = chosenNation.nextLine();
   
   //Finds correct nation
   for (int j = 0; j < nasjonsListe.size(); j++) { //mao og modererast
     if (nasjonsListe.get(j).navn.equals(valgtNasjon)) {
       surnameFileLength = nasjonsListe.get(j).secondFileLength;
       firstnameFileLength = nasjonsListe.get(j).firstFileLength;
       firstNameTextFile = nasjonsListe.get(j).firstFileName;
       secondNameTextFile = nasjonsListe.get(j).secondFileName;
     }
   }
       
   int kortEtternamn = surnameFileLength - 3;
   int kortFornamn = firstnameFileLength - 3;
       
   FileReader surnameFileReader = new FileReader(nationDirectory + (valgtNasjon + "/" + secondNameTextFile));
   BufferedReader surnameTextReader = new BufferedReader(surnameFileReader);
   FileReader firstnameFileReader = new FileReader(nationDirectory + (valgtNasjon + "/" +  firstNameTextFile));
   BufferedReader firstnameTextReader = new BufferedReader(firstnameFileReader);
   Random rand = new Random();
   String[] firstNames = new String[firstnameFileLength]; 
   String[] surNames = new String[surnameFileLength];
   ArrayList<Player> importedTeam = new ArrayList<Player>();
   int randFN = 0;
   int randSN = 0;
   int averageST = 0;
   int potentialST = 0;
   int potentialCalc = 0;
   int alderST = 0;

   for (int i = 1; i < firstnameFileLength; i++) {
    firstNames[i] = firstnameTextReader.readLine();
   }

   firstnameTextReader.close();

   for (int j = 1; j < surnameFileLength; j++) {
    surNames[j] = surnameTextReader.readLine();
   }
   surnameTextReader.close();

   String directory = "C:/Users/jonkr/Documents/java-filer/strikerManager/Teams/";
   String clubDirectory = "C:/Users/jonkr/Documents/java-filer/strikerManager/Clubs/";
   String leagueDirectory = "C:/Users/jonkr/Documents/java-filer/strikerManager/Leagues/";
   String teamDirectory = directory + clubName;
   String clubFullDirectory = clubDirectory + clubName;
   
   String availableLeague = Load.getAvailableLeague();
   String leagueFullDirectory = leagueDirectory + availableLeague + ".txt";
   Club newClub = new Club((clubName.replace(".txt", "")), 0, 0, 0, 0, 0, 0, 0, 0, 0, 10000000, availableLeague);
   League chosenLeague = Load.getLeague(leagueFullDirectory);
   

   File file = new File(teamDirectory);
   PrintWriter writeTeam = new PrintWriter(file);
   
   File clubFile = new File(clubFullDirectory);
   PrintWriter writeClub = new PrintWriter(clubFile);

   for (int o = 0; o < 20; o++) {
    int kitNumber = o+1;
    averageST = rand.nextInt(26) + 30;
    potentialCalc = rand.nextInt(20) + 1;
    if (potentialCalc <= 12) {
     potentialST = rand.nextInt(4) + averageST;
     alderST = rand.nextInt(16) + 20;
    }
    if (potentialCalc > 12 && potentialCalc <= 17) {
     potentialST = rand.nextInt(5) + (averageST + 5);
     alderST = rand.nextInt(9) + 18;
    }
    if (potentialCalc > 17 && potentialCalc <= 19) {
     potentialST = rand.nextInt(10) + (averageST + 10);
     alderST = rand.nextInt(7) + 18;
    }
    if (potentialCalc > 19) {
     potentialST = rand.nextInt(25) + (averageST + 20);
     alderST = rand.nextInt(4) + 18;
    }
    
    int average = averageST;
    teamAverage = teamAverage + average;
    int potential = potentialST;
    int lonn = averageST*100;
    int age = alderST;
    avgAld = 50-alderST;
    int verdi = (averageST*(lonn))*avgAld;
    randFN = rand.nextInt(kortFornamn) + 1; 
    randSN = rand.nextInt(kortEtternamn) + 1; 
    String firstName = firstNames[randFN];
    String surName = surNames[randSN];
    String nation = valgtNasjon;
    String position = " ";
    Player importedPlayer = new Player(kitNumber, firstName, surName, nation, age, position, average, potential, lonn, verdi);
    importedTeam.add(importedPlayer);
    
   }
   
   importedTeam.get(0).position = "GK";
   importedTeam.get(1).position = "RB";
   importedTeam.get(2).position = "CB";
   importedTeam.get(3).position = "CB";
   importedTeam.get(4).position = "LB";
   importedTeam.get(5).position = "RM";
   importedTeam.get(6).position = "CM";
   importedTeam.get(7).position = "CM";
   importedTeam.get(8).position = "LM";
   importedTeam.get(9).position = "ST";
   importedTeam.get(10).position = "ST";
   importedTeam.get(11).position = "GK";
   importedTeam.get(12).position = "DM";
   importedTeam.get(13).position = "OM";
   importedTeam.get(14).position = "RW";
   importedTeam.get(15).position = "LW";
   importedTeam.get(16).position = "RB";
   importedTeam.get(17).position = "LB";
   importedTeam.get(18).position = "CF";
   importedTeam.get(19).position = "CB";

   for (int k = 0; k < 20; k++) {
    
    /*if ((importedTeam.get(k).firstName + importedTeam.get(k).surName).length() <= 9) {
        System.out.println(importedTeam.get(k).firstName + " " + importedTeam.get(k).surName + "\t" + "\t" + "\t" + "\t" + importedTeam.get(k).nation + "\t" + "\t" + importedTeam.get(k).age + "\t" + importedTeam.get(k).position + "\t" + importedTeam.get(k).average + "\t" + importedTeam.get(k).lonn + "\t" + "�" + importedTeam.get(k).verdi); }
    if ((importedTeam.get(k).firstName + importedTeam.get(k).surName).length() > 9 && (importedTeam.get(k).firstName + importedTeam.get(k).surName).length() < 20) {
        System.out.println(importedTeam.get(k).firstName + " " + importedTeam.get(k).surName + "\t" + "\t" + "\t" + importedTeam.get(k).nation + "\t" + "\t" + importedTeam.get(k).age + "\t" + importedTeam.get(k).position + "\t" + importedTeam.get(k).average + "\t" + importedTeam.get(k).lonn + "\t" + "�" + importedTeam.get(k).verdi); }
    if ((importedTeam.get(k).firstName + importedTeam.get(k).surName).length() >= 20) {
        System.out.println(importedTeam.get(k).firstName + " " + importedTeam.get(k).surName + "\t" + "\t" + importedTeam.get(k).nation + "\t" + "\t" + importedTeam.get(k).age + "\t" + importedTeam.get(k).position + "\t" + importedTeam.get(k).average + "\t" + importedTeam.get(k).lonn + "\t" + "�" + importedTeam.get(k).verdi); } */
    writeTeam.println(importedTeam.get(k).kitNumber + " " + importedTeam.get(k).firstName + " " + importedTeam.get(k).surName + " " + importedTeam.get(k).nation + " " + importedTeam.get(k).age + " " + importedTeam.get(k).position + " " + importedTeam.get(k).average + " " + importedTeam.get(k).potential + " " + importedTeam.get(k).lonn + " " + importedTeam.get(k).verdi);
   }
   
   writeTeam.close();
   /*System.out.println("");
    System.out.println("Team Average: " + teamAverage/20); */
    
   newClub.clubAvg = teamAverage/20;
   writeClub.println(newClub.clubName + " " + newClub.clubAvg + " " + newClub.kamper + " " +  newClub.seier + " " + 
                     newClub.uavgjort + " " + newClub.tap + " " + newClub.maol + " " + newClub.sleptInn + " " + 
                     newClub.maolFor + " " + newClub.poeng + " " + newClub.budsjett + " " +  newClub.league);
   
   writeClub.close();
   
   chosenLeague.numOfClubs = Load.numOfAssignedClubs(chosenLeague);
   File file3 = new File(leagueFullDirectory);
   PrintWriter writeLeague = new PrintWriter(file3);
   writeLeague.println(chosenLeague.name + " " + chosenLeague.tourneyLvl + " " + chosenLeague.isSection + " " +
                       chosenLeague.numOfClubs + " " + chosenLeague.runde);
   writeLeague.close();
   
   SquadViewer showTeam = new SquadViewer();
   showTeam.viewSquad(teamDirectory, clubFullDirectory, stage);
   return;

  }

 }