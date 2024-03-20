package ee.mainor.reversify.mapper;

import ee.mainor.reversify.dto.StudySpaceDto;
import ee.mainor.reversify.model.StudySpaceModel;
import org.springframework.stereotype.Component;

@Component
public class StudySpaceMapper {

        public static StudySpaceDto toDto(StudySpaceModel studySpaceModel) {
            StudySpaceDto studySpaceDto = new StudySpaceDto();
            if (studySpaceModel == null) {
                return studySpaceDto;
            }
            studySpaceDto.setSpaceId(studySpaceModel.getSpaceId());
            studySpaceDto.setSpaceName(studySpaceModel.getSpaceName());
            studySpaceDto.setCapacity(studySpaceModel.getCapacity());
            studySpaceDto.setLocation(studySpaceModel.getLocation());
            studySpaceDto.setAvailability(studySpaceModel.getAvailability());
            // Map other properties as needed
            return studySpaceDto;
        }

        public static StudySpaceModel toModel(StudySpaceDto studySpaceDto, StudySpaceModel studySpaceModel) {
            if (studySpaceModel == null) {
                studySpaceModel = new StudySpaceModel();
            }
            if (studySpaceDto == null) {
                return studySpaceModel;
            }
            studySpaceDto.setSpaceId(studySpaceModel.getSpaceId());
            studySpaceDto.setSpaceName(studySpaceModel.getSpaceName());
            studySpaceDto.setCapacity(studySpaceModel.getCapacity());
            studySpaceDto.setLocation(studySpaceModel.getLocation());
            studySpaceDto.setAvailability(studySpaceModel.getAvailability());
            // Map other properties as needed
            return studySpaceModel;
        }
    }

