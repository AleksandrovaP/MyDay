import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class Connect {




    private Connection connect() {
        // SQLite connection string
        String url = "jdbc:sqlite:D:/IntelijProj/MyDayProject/src/connect/db/DB";
        String sql = "CREATE TABLE employees (\n" +
                "                          contact_id INTEGER PRIMARY KEY,\n" +
                "                          name TEXT NOT NULL,\n" +
                "                          working_hours INTEGER NOT NULL\n" +
                ");";
        Connection conn = null;
        try {
            conn = DriverManager.getConnection(url);
            PreparedStatement pstmt = conn.prepareStatement(sql);
            pstmt.executeUpdate();
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
        return conn;
    }


    public void insert(String name, double workingHours) {
        String sql = "INSERT INTO employees(name,working_hours) VALUES(?,?)";

        try (Connection conn = this.connect();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setString(1, name);
            pstmt.setDouble(2, workingHours);
            pstmt.executeUpdate();
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }


    public static void main(String[] args) {

        Connect app = new Connect();

        app.insert("Nikola", 12);
        app.insert("Simona", 8);

    }
}
