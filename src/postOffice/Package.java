public class Package {

  public int weight;
  public int x;
  public int y;
  public boolean isFragile;
  public boolean fastDelivery;
  public String destination;
  public int distanceTravelled;
  public String status;

  public Package(int wgt, int x, int y, boolean isFrag, boolean fastDel, String dest, int dTravelled, String stat) {
    this.weight = wgt;
    this.x = x;
    this.y = y;
    this.isFragile = isFrag;
    this.fastDelivery = fastDel;
    this.destination = dest;
    this.distanceTravelled = dTravelled;
    this.status = stat;
  }

  public String checkStatus(Package pack, PostOffice[][] map) {
    String currentStatus = pack.status;
    if (map[pack.x][pack.y] != null) {
      if (map[pack.x][pack.y].location == pack.destination) {
        System.out.println("Package ready to be picked up!");
        currentStatus = "Delivered";
        int bill = getBill(pack);
        System.out.println("The delivery will cost " + bill + "$");
      } else if (map[pack.x][pack.y] != null) {
        System.out.println("Package is at " + map[pack.x][pack.y].name);
        currentStatus = "Currently in " + map[pack.x][pack.y].location;
      }
    } else {
      System.out.println("On the road..");
      currentStatus = "On the road..";
    }
    return currentStatus;
  }

  public static int getBill(Package pack) {
    int bill = (pack.distanceTravelled) * 25;
    if (pack.isFragile == true) {
      bill += 250;
    }
    if (pack.fastDelivery == true) {
      bill += 250;
    }
    return bill;
  }

}