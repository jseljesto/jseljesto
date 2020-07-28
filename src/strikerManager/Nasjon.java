public class Nasjon {
  
  /**
   * Name of the nation.
   */
  public String navn;
  /**
   * First file to be read.
   */
  public String firstFileName;
  /**
   * Length of the first file.
   */
  public int firstFileLength;
  /**
   * Second file to be read.
   */
  public String secondFileName;
  /**
   * Length of the second file.
   */
  public int secondFileLength;
  
  public Nasjon (String navn, String firstFileName, int firstFileLength, String secondFileName, int secondFileLength) {
    
    this.navn = navn;
    this.firstFileName = firstFileName;
    this.firstFileLength = firstFileLength;
    this.secondFileName = secondFileName;
    this.secondFileLength = secondFileLength;
  
  }
  
}