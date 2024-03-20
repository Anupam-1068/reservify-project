package ee.mainor.reversify.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserDto {

    private int userId;
    private String username;
    private String password;
    private String email;

}
