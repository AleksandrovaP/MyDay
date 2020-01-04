import bg.fmi.myday.entities.User;

import java.sql.*;

public class DBConnection {




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



   public void insert(User user) {
        String sql = "INSERT INTO employees(name,working_hours) VALUES(?,?)";

        try (Connection conn = this.connect();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setString(1, user.getname());

            pstmt.executeUpdate();
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public void getData(User user){
        String uname=user.getUsername();
        String sql = "SELECT id, name, uname "
                + "FROM employees WHERE uname == uname";

        try (Connection conn = this.connect();
             PreparedStatement pstmt  = conn.prepareStatement(sql)){


            pstmt.setString(1,uname);
            ResultSet rs  = pstmt.executeQuery();

            while (rs.next()) {
                System.out.println(rs.getInt("id") +  "\t" +
                        rs.getString("name") + "\t" +
                        rs.getString("password"));
            }
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public static void main(String[] args) {

        DBConnection app = new DBConnection();
            User user=new User("Petur","1243","petio");
        app.insert(user);
            app.getData(user);



    }
}
