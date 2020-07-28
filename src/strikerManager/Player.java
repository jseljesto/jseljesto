public class Player {
  
  /**
   * Kit number of player.
   */
  public int kitNumber;
  /**
   * First name of player.
   */
  public String firstName;
  /**
   * Surname of player.
   */
  public String surName;
  /**
   * Represented nation of player.
   */
  public String nation;
  /**
   * Current age of player.
   */
  public int age;
  /**
   * Current position of player.
   */
  public String position;
  /**
   * Current average rating of player.
   */
  public int average;
  /**
   * Potential rating of player.
   */
  public int potential;
  /**
   * Current value of player.
   */
  public int verdi;
  /**
   * Current wages of player.
   */
  public int lonn;
  
  public Player (int num, String fn, String sn, String nt, int age, String pos, int avg, int pot, int lonn, int verdi) {
    this.kitNumber = num;
    this.firstName = fn;
    this.surName = sn;
    this.nation = nt;
    this.age = age;
    this.position = pos;
    this.average = avg;
    this.potential = pot;
    this.verdi = verdi;
    this.lonn = lonn;
  
  }
  
  /**
   * Get the kit number.
   * @return Kit number.
   */
  public int getKitNumber() {
    return kitNumber;
  }
  
  /**
   * Set the kit number.
   * @param kitNumber New kit number.
   */
  public void setKitNumber(int kitNumber) {
    this.kitNumber = kitNumber;
  }
  
  /**
   * Get the first name.
   * @return First name.
   */
  public String getFirstName() {
    return firstName;
  }
  
  /**
   * Set the first name.
   * @param firstName New first name.
   */
  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }
  
  /**
   * Get the surname.
   * @return Surname.
   */
  public String getSurName() {
    return surName;
  }
  
  /**
   * Set the surname.
   * @param surName New surname.
   */
  public void setSurName(String surName) {
    this.surName = surName;
  }
  
  /**
   * Get the nation.
   * @return Nation.
   */
  public String getNation() {
    return nation;
  }
  
  /**
   * Set the nation.
   * @param nation New nation.
   */
  public void setNation(String nation) {
    this.nation = nation;
  }
  
  /**
   * Get the age.
   * @return Age.
   */
  public int getAge() {
    return age;
  }
  
  /**
   * Set the age.
   * @param age New age.
   */
  public void setAge(int age) {
    this.age = age;
  }
  
  /**
   * Get the position.
   * @return Position.
   */
  public String getPosition() {
    return position;
  }
  
  /**
   * Set the position.
   * @param position New position.
   */
  public void setPosition(String position) {
    this.position = position;
  }
  
  /**
   * Get the player average rating.
   * @return Average rating.
   */
  public int getAverage() {
    return average;
  }
  
  /**
   * Set the average player rating.
   * @param average New average player rating.
   */
  public void setAverage(int average)  {
    this.average = average;
  }
  
  /**
   * Get the player potential.
   * @return Potential.
   */
  public int getPotential() {
    return potential;
  }
  
  /**
   * Set the potential rating.
   * @param potential New potential rating.
   */
  public void setPotential(int potential) {
    this.potential = potential;
  }
  
  /**
   * Get the value.
   * @return Value.
   */
  public int getVerdi() {
    return verdi;
  }
  
  /**
   * Set the value.
   * @param verdi New value.
   */
  public void setVerdi(int verdi) {
    this.verdi = verdi;
  }
  
  /**
   * Get the wages.
   * @return Wages.
   */
  public int getLonn() {
    return lonn;
  }
  
  /**
   * Set the wages.
   * @param lonn New wages.
   */
  public void setLonn(int lonn) {
    this.lonn = lonn;
  }
  
  public String toString() {
    return kitNumber + " " + firstName + " " + surName + "\t" + "\t" + nation + "\t" + age + "\t" + position + "\t" + average + "\t" + lonn + "\t" + verdi;
  }
}