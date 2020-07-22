import java.util.ArrayList;

public class CorrectValue {
  
  public static ArrayList<Player> correct(ArrayList<Player> importedTeam){
    for (int f = 0; f <=19; f++) {
      importedTeam.get(f).lonn = importedTeam.get(f).average*100;
       importedTeam.get(f).verdi = ((importedTeam.get(f).average)*(importedTeam.get(f).lonn))*(50-(importedTeam.get(f).age));
      }
    return importedTeam;
  }
}
  