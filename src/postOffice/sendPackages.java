public class sendPackages {

    public static void sendPackage(Package pack, PostOffice[][] map) {
        System.out.println("Package to be sent to " + pack.receiver.firstName + " " 
        + pack.receiver.lastName + " at " + pack.receiver.address + ", " + pack.receiver.postalCode);
        int finalX = 0;
        int finalY = 0;
        for (int i = 0; i < 20; i++) {
            for (int j = 0; j < 20; j++) {
                if (map[i][j] != null) {
                    if (map[i][j].location == pack.destination) {
                        finalX = i;
                        finalY = j;
                    }
                }
            }
        }

        pack.status = pack.checkStatus(pack, map);

        while (pack.status != "Delivered") {
            if (pack.x > finalX) {
                pack.x--;
                pack.distanceTravelled++;
            }
            if (pack.x < finalX) {
                pack.x++;
                pack.distanceTravelled++;
            }
            if (pack.y > finalY) {
                pack.y--;
                pack.distanceTravelled++;
            }
            if (pack.y < finalY) {
                pack.y++;
                pack.distanceTravelled++;
            }
            System.out.println(pack.y + " " + pack.x);
            pack.status = pack.checkStatus(pack, map);
        }
    }

    public static void main(String args[]) {

        PostOffice[][] map = new PostOffice[20][20];
        map[0][0] = new PostOffice("Yenmore Station", "Yenmore", 6500);
        map[2][15] = new PostOffice("Gliepolis Post Office", "Gliepolis", 5200);
        map[5][8] = new PostOffice("Esterburgh Post Service", "Esterburgh", 3000);
        map[9][1] = new PostOffice("Olkburg Postal Service", "Olkburg", 4500);
        map[12][13] = new PostOffice("Entorora Grocery Shop", "Entorora", 1000);
        map[17][4] = new PostOffice("Clevale Post Office", "Clevale", 3700);
        map[19][19] = new PostOffice("Maesea Postal Service", "Maesea", 4400);

        Person example = new Person("Clay", "Potter", "Westvale Street", "4500 Olkburg");

        Package badmintonRacket = new Package(example, 15, 19, 19, false, false, "Olkburg", 0, "To be sent");
        sendPackage(badmintonRacket, map);
    }

}