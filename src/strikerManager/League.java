public class League {

  /**
   * Name of the league.
   */
  public String name;
  /**
   * The level of the league.
   */
  public int tourneyLvl;
  /**
   * Value to check if league is part of a larger concept.
   */
  public boolean isSection;
  /**
   * Number of clubs assigned to league.
   */
  public int numOfClubs;
  /**
   * Current round of the league.
   */
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