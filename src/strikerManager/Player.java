public class Player {
  
  public int kitNumber;
  public String firstName;
  public String surName;
  public String nation;
  public int age;
  public String position;
  public int average;
  public int potential;
  public int verdi;
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
  
  public int getKitNumber() {
    return kitNumber;
  }
  
  public void setKitNumber(int kitNumber) {
    this.kitNumber = kitNumber;
  }
  
  public String getFirstName() {
    return firstName;
  }
  
  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }
  
  public String getSurName() {
    return surName;
  }
  
  public void setSurName(String surName) {
    this.surName = surName;
  }
  
  public String getNation() {
    return nation;
  }
  
  public void setNation(String nation) {
    this.nation = nation;
  }
  
  public int getAge() {
    return age;
  }
  
  public void setAge(int age) {
    this.age = age;
  }
  
  public String getPosition() {
    return position;
  }
  
  public void setPosition(String position) {
    this.position = position;
  }
  
  public int getAverage() {
    return average;
  }
  
  public void setAverage(int average)  {
    this.average = average;
  }
  
  public int getPotential() {
    return potential;
  }
  
  public void setPotential(int potential) {
    this.potential = potential;
  }
  
  public int getVerdi() {
    return verdi;
  }
  
  public void setVerdi(int verdi) {
    this.verdi = verdi;
  }
  
  public int getLonn() {
    return lonn;
  }
  
  public void setLonn(int lonn) {
    this.lonn = lonn;
  }
  
  public String toString() {
    return kitNumber + " " + firstName + " " + surName + "\t" + "\t" + nation + "\t" + age + "\t" + position + "\t" + average + "\t" + lonn + "\t" + verdi;
  }
}