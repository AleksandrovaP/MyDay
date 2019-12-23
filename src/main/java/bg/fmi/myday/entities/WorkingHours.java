package bg.fmi.myday.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class WorkingHours {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private long employeeId;
    private int hours;
    private Date date;
    private String ProjectName;

    public long getEmployeeId() {
        return employeeId;
    }

    public int getHours() {
        return hours;
    }

    public void setHours(int hours) {
        this.hours = hours;
    }

    public String getProjectName() {
        return ProjectName;
    }

    public void setProjectName(String projectName) {
        ProjectName = projectName;
    }


    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }


}
