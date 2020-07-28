public class Club {

    /**
     * The name of the club.
     */
    public String clubName;
    /**
     * Average rating of all players in club.
     */
    public int clubAvg;
    /**
     * Games played in current season.
     */
    public int kamper;
    /**
     * Victories in current season.
     */
    public int seier;
    /**
     * Draws in current season.
     */
    public int uavgjort;
    /**
     * Losses in current season.
     */
    public int tap;
    /**
     * Goals scored in current season.
     */
    public int maol;
    /**
     * Goals conceded in current season.
     */
    public int sleptInn;
    /**
     * Goal difference in current season.
     */
    public int maolFor;
    /**
     * Points scored in current season.
     */
    public int poeng;
    /**
     * Funds of club.
     */
    public int budsjett;
    /**
     * Reference to the clubs league.
     */
    public String league;

    public Club(String tn, int ta, int ka, int se, int ua, int tp, int ma, int si, int mf, int po, int bud,
            String lge) {
        this.clubName = tn;
        this.clubAvg = ta;
        this.kamper = ka;
        this.seier = se;
        this.uavgjort = ua;
        this.tap = tp;
        this.maol = ma;
        this.sleptInn = si;
        this.maolFor = mf;
        this.poeng = po;
        this.budsjett = bud;
        this.league = lge;
    }
}