import java.io.File;
import java.lang.String;
import java.io.IOException;
import java.util.ArrayList;

public class FindByPosition {
  
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
    return firstName + " " + surName + "\t" + "\t" + nation + "\t" + age + "\t" + position + "\t" + average + "\t" + potential + "\t" + lonn + "\t" + verdi;
  }
  
  /**
   * Finds players matching a certain position.
   * @param posisjon The chosen position.
   * @param budsjett The budget to be met.
   * @param chosenTeam Team controlled by player.
   * @param lowestValue Lowest acceptable player average.
   * @return Array of all players matching the conditions.
   */
  public static ArrayList<Player> findPlayers(String posisjon, int budsjett, String chosenTeam, int lowestValue) {
    
    ArrayList<Player> matchingPlayers = new ArrayList<Player>();
    
    try {
      
      File folder = new File("C:/Users/jonkr/Documents/java-filer/strikerManager/Teams");
      File listOfFiles[] = folder.listFiles();
      
      for (int n = 0; n < listOfFiles.length; n++) {
        if (listOfFiles[n].isFile()) {
          if (listOfFiles[n].getName().endsWith(".txt") && !listOfFiles[n].getName().equals(chosenTeam)) {
            String fullDirectory = "C:/Users/jonkr/Documents/GitHub-prosjekt/jseljesto/src/strikerManager/Teams/" + listOfFiles[n].getName();
            ArrayList<Player> importedTeam = new ArrayList<Player>();
            if (fullDirectory != chosenTeam) {
            importedTeam = Load.loadTeamData(importedTeam, fullDirectory);
            }
            for (int i = 0; i < importedTeam.size(); i++) {
              if (importedTeam.get(i).position.equals(posisjon) && importedTeam.get(i).verdi <= budsjett 
                    && importedTeam.get(i).average > (lowestValue+5)) {
                matchingPlayers.add(importedTeam.get(i));
              }
            }
          }
        }
      }
    } catch (IOException unntak) {
      System.out.println("Feil ved innlesing:" + unntak);
    }
    return matchingPlayers;
  }
}