public class Club {

    public String clubName;
    public int clubAvg;
    public int kamper;
    public int seier;
    public int uavgjort;
    public int tap;
    public int maol;
    public int sleptInn;
    public int maolFor;
    public int poeng;
    public int budsjett;
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