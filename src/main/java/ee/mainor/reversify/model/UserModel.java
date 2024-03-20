package ee.mainor.reversify.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Data
@Table(name = "users")
public class UserModel {

    @Column(value = "user_id")
    @Id
    private int userId;

    private String username;
    private String password;
    private String email;

    // Constructors, getters, and setters
}
