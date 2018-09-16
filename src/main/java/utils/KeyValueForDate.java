package utils;

public class KeyValueForDate{
    private String startDate;
    private String endDate;
    public String getStartDate() {
        return startDate;
    }
    public String getStartDate2() {
        return startDate.replace("-","").substring(2);
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }
    public String getEndDate2() {
        return endDate.replace("-","").substring(2);
    }
    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }
}
