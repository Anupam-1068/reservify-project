package ee.mainor.reversify.model;

import com.fasterxml.jackson.databind.JsonNode;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;
@Data
@Table(name = "study_spaces")
public class StudySpaceModel {

        @Column(value = "space_id")
        @Id
        private Long spaceId;

        @Column(value = "space_name")
        private String spaceName;

        private int capacity;
        private String location;
        private JsonNode availability;

        // Constructors, getters, and setters

}
