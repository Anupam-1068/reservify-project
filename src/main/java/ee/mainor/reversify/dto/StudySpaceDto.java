package ee.mainor.reversify.dto;

import com.fasterxml.jackson.databind.JsonNode;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class StudySpaceDto {

    private Long spaceId;
    private String spaceName;
    private int capacity;
    private String location;
}
