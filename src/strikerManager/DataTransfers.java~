import java.io.File;
import java.lang.String;
import java.util.Random;
import java.io.IOException;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Map;
import java.util.LinkedHashMap;

public class DataTransfers {
  
  int indexOfPlayer = 0;
  
  /**
   * Checks if to players are equal objects.
   * @param player1 The first player to be compared.
   * @param player2 The second player to be compared.
   * @return True if a match was found.
   */
  public static boolean playerIsEqual(Player player1, Player player2) {
    Boolean test = false;
    if (player1.kitNumber == player2.kitNumber) {
      if (player1.firstName.equals(player2.firstName)) {
        if (player1.surName.equals(player2.surName)) {
          if (player1.verdi == player2.verdi) {
            if (player1.average == player2.average) {
              if (player1.lonn == player2.lonn) {
                test = true;
              }
            }
          }
        } else {
          test = false;
        }
      }
    }
    return test;
  }
  
  /**
   * Finds the team for chosen player.
   * @param chosenPlayer The player to be transfered.
   * @return The chosen players team.
   * @throws FileNotFoundException
   * @throws IOException
   */
  public String findCorrectTeam(Player chosenPlayer) throws FileNotFoundException, IOException {
    String chosenTeam = "";
    File folder = new File("C:/Users/jonkr/Documents/GitHub-prosjekt/jseljesto/src/strikerManager/Teams");
    File listOfFiles[] = folder.listFiles();
    for (int n = 0; n < listOfFiles.length; n++) {
      if (listOfFiles[n].isFile()) {
        if (listOfFiles[n].getName().endsWith(".txt")) {
          String fullDirectory = "C:/Users/jonkr/Documents/GitHub-prosjekt/jseljesto/src/strikerManager/Teams/" + listOfFiles[n].getName();
          ArrayList<Player> importedTeam = new ArrayList<Player>();
          importedTeam = Load.loadTeamData(importedTeam, fullDirectory);
          for (int i = 0; i < importedTeam.size(); i++) {
            if (DataTransfers.playerIsEqual(chosenPlayer, importedTeam.get(i))) {
              indexOfPlayer = i;
              chosenTeam = listOfFiles[n].getName();
            }
          }
        }
      }
    }
    return chosenTeam;
  }
  
    /**
     * Creates transfers between AI teams.
     */
  public static void computingTransfers(String controllingTeam) throws FileNotFoundException, IOException {
    
    //Create map for worst player by position
    File folder = new File("C:/Users/jonkr/Documents/GitHub-prosjekt/jseljesto/src/strikerManager/Teams");
    File listOfFiles[] = folder.listFiles();
    LinkedHashMap<String, Integer> positions = new LinkedHashMap<String, Integer>();
    positions.put("GK", 0);
    positions.put("RB", 0);
    positions.put("CB", 0);
    positions.put("LB", 0);
    positions.put("RM", 0);
    positions.put("CM", 0);
    positions.put("LM", 0);
    positions.put("ST", 0);
    positions.put("DM", 0);
    positions.put("OM", 0);
    positions.put("RW", 0);
    positions.put("LW", 0);
    positions.put("CF", 0);
    
    //Find the club to be imported
    Random rand = new Random();
    String fullDirectory = "";
    String lagNavn = "";
    while(fullDirectory.isEmpty()) {
      int chosenTeam = rand.nextInt(listOfFiles.length); 
      lagNavn = listOfFiles[chosenTeam].getName();
      if (!lagNavn.equals(controllingTeam)) {
        fullDirectory = "C:/Users/jonkr/Documents/GitHub-prosjekt/jseljesto/src/strikerManager/Teams/" + lagNavn;
      }
    }
    //String lagNavn = listOfFiles[chosenTeam].getName();
    String clubDirectory = "C:/Users/jonkr/Documents/GitHub-prosjekt/jseljesto/src/strikerManager/Clubs/" + lagNavn;
    ArrayList<Player> importedTeam = new ArrayList<Player>();
    importedTeam = Load.loadTeamData(importedTeam, fullDirectory);
    Club importedClub;
    importedClub = Load.loadClub(clubDirectory);
    
    //Find worst players of each position in club
    for (int i = 0; i < importedTeam.size(); i++) {
      int avg = positions.get(importedTeam.get(i).position);
      if (avg == 0 || avg > importedTeam.get(i).average) {
        positions.put(importedTeam.get(i).position, importedTeam.get(i).average);
      }
    }
    
    //Find worst position in club
    int lowestValue = 100;
    String worstPosition = "";
    for (Map.Entry<String, Integer> entry : positions.entrySet()) {
      String key = entry.getKey();
      Integer value = entry.getValue();
      if (value <= lowestValue) {
        lowestValue = value;
        worstPosition = key;
      }
    }
    
    //System.out.println(worstPosition + " " + lowestValue);
    
    //Finds replacements to strengthen club
    ArrayList<Player> listOfTargets = new ArrayList<Player>();
    listOfTargets = FindByPosition.findPlayers(worstPosition, importedClub.budsjett, lagNavn, lowestValue);
    
    int indexOfBestPlayer = 0;
    int bestAverage = 0;
    for (int j = 0; j < listOfTargets.size(); j++) {
      if (listOfTargets.get(j).average > bestAverage) {
        bestAverage = listOfTargets.get(j).average;
        indexOfBestPlayer = j;
      }
    }
    //Find the club of the selected player
    Player bestPlayer = listOfTargets.get(indexOfBestPlayer);
    DataTransfers findATeam = new DataTransfers();
    String selectedTeam = findATeam.findCorrectTeam(bestPlayer);
    
    System.out.println(lagNavn + " bought " + bestPlayer.firstName + " " + bestPlayer.surName + " from " + selectedTeam);
    
    //Mangla � selgja spelaren. So her ska du henta da andra laget som ha dan valgte spelaren, og so skal overgangen
    //skje, men berre dersom reglane blir fulgt, som feks. troppst�rrelse. indexOfPlayer e indeksen for spelaren i
    //klubben du pr�ve � s�kja frao.
  }
}