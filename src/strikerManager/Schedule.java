import java.util.ArrayList;
import java.io.File;
import java.io.PrintWriter;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.FileReader;
import java.io.BufferedReader;

public class Schedule {
  
  public static void createSchedule(League league) throws FileNotFoundException, IOException {
    String ligaNavn = league.name;
    int number = league.numOfClubs;
    String output = "";
    File file = new File("C:/Users/jonkr/Documents/GitHub-prosjekt/jseljesto/src/strikerManager/Schedules/" + ligaNavn + ".txt");
    PrintWriter writeSchedule = new PrintWriter(file);
    ArrayList<Integer> matches = new ArrayList<Integer>(); 
    for (int i = 1; i < number; i++) {
      if (i == 1) {
        for (int j = 1; j <= number/2; j++) {
          if (j == 1) {
            matches.add(number-1);
            matches.add(number-2);
          }
          else if (j == 2) {
            matches.add(1);
            matches.add(number-3);
          }
          else if (j == (number/2)) {
            matches.add(1+(j-2));
            matches.add(number);
          }
          else {
            matches.add(1+(j-2));
            matches.add(number - (j+1));
          }
        }
      } else {
        for (int l = 0; l < number; l++) {
          if (l != (matches.size()-1)) {
            if (matches.get(l) == 1) {
              matches.set((l), (matches.size()-1));
            }
            else {
              int newNumber = matches.get((l))-1;
              matches.set((l), newNumber);
            }
          }
        }
      }
      
      for (int k = 0; k < matches.size(); k++) {
        if (k == (matches.size()-1)) {
          output += matches.get(k);
        } else {
          output += matches.get(k) + " ";
        }
      }
      writeSchedule.println(output);
      output = "";
    }
    writeSchedule.close();
  }
  
  public static ArrayList<Integer> loadMatches(String scheduleDirectory, int runde, int numOfClubs) throws FileNotFoundException, IOException {
    
    File scheduleFile = new File(scheduleDirectory);
    FileReader scheduleFileReader = new FileReader(scheduleFile);
    BufferedReader scheduleTextReader = new BufferedReader(scheduleFileReader);
    ArrayList<Integer> fixtures = new ArrayList<Integer>();
    String scheduleText;
    for (int i = 1; i <= numOfClubs; i++) {
      if ((scheduleText = scheduleTextReader.readLine()) != null) {
        if (i == runde) {
          String input[] = scheduleText.split(" ");
          for (int j = 0; j < input.length; j++) {
            fixtures.add(Integer.parseInt(input[j]));
          }
        }
      }
    }
    scheduleTextReader.close();
    return fixtures;
  }
}