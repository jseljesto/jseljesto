public class League {
  
  public String name;
  public int tourneyLvl;
  public boolean isSection;
  public int numOfClubs;
  public int runde;
  
  public League (String name, int tLvl, boolean isSec, int clubs, int runde) {
    this.name = name;
    this.tourneyLvl = tLvl;
    this.isSection = isSec;
    this.numOfClubs = clubs;
    this.runde = runde;
  }
  
  public String getName() {
    return name;
  }
  
  public void getName(String name) {
    this.name = name;
  }
}