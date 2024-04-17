package ee.mainor.reversify.service;

import ee.mainor.reversify.dto.StudySpaceDto;
import ee.mainor.reversify.mapper.StudySpaceMapper;
import ee.mainor.reversify.model.StudySpaceModel;
import ee.mainor.reversify.repository.StudySpaceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StudySpaceService {

    private final StudySpaceRepository studySpaceRepository;

    private static List<StudySpaceDto> getStudySpaceDtos(List<StudySpaceModel> studySpaceModels) {
        return studySpaceModels.stream().map(studySpaceModel -> {
            StudySpaceDto studySpaceDto = new StudySpaceDto();
            studySpaceDto.setSpaceId(studySpaceModel.getSpaceId());
            studySpaceDto.setSpaceName(studySpaceModel.getSpaceName());
            studySpaceDto.setCapacity(studySpaceModel.getCapacity());
            studySpaceDto.setLocation(studySpaceModel.getLocation());
            // Map other properties as needed
            return studySpaceDto;
        }).toList();
    }


    public List<StudySpaceDto> getAllStudySpaces() {
        List<StudySpaceModel> studySpaceModels = studySpaceRepository.getAllStudySpaces();

        return getStudySpaceDtos(studySpaceModels);
    }

    public StudySpaceDto getStudySpaceById(Long id) {
        StudySpaceModel studySpaceModel = studySpaceRepository.findStudySpaceModelBySpaceId(id);
        return StudySpaceMapper.toDto(studySpaceModel);
    }

    public List<StudySpaceDto> getStudySpacesByLocation(String location) {
        List<StudySpaceModel> studySpaceModels = studySpaceRepository.findAllByLocation(location);
        return getStudySpaceDtos(studySpaceModels);
    }
    @Transactional
    public StudySpaceDto createStudySpace(StudySpaceDto studySpaceDto) {
        StudySpaceModel studySpaceModel = StudySpaceMapper.toModel(studySpaceDto, null);
        StudySpaceModel createdStudySpace = studySpaceRepository.save(studySpaceModel);

        return StudySpaceMapper.toDto(createdStudySpace);
    }

    @Transactional
    public StudySpaceDto updateStudySpace(Long id, StudySpaceDto studySpaceDto) {
        StudySpaceModel initialStudySpace = requireStudySpace(id);
        StudySpaceModel studySpaceModel = StudySpaceMapper.toModel(studySpaceDto, initialStudySpace);

        return StudySpaceMapper.toDto(studySpaceRepository.save(studySpaceModel));
    }

    public void deleteStudySpace(Long id) {
        studySpaceRepository.deleteById(id);
    }

    private StudySpaceModel requireStudySpace(Long id) {
        return studySpaceRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException(String.format("Study Space with id: %s was not found", id)));
    }



    public List<StudySpaceDto> getStudySpacesByCapacityRange(int minCapacity, int maxCapacity) {
        List<StudySpaceModel> studySpaceModels = studySpaceRepository.findAllByCapacityRange(minCapacity, maxCapacity);
        return getStudySpaceDtos(studySpaceModels);
    }

    public List<StudySpaceDto> getStudySpacesByLocationAndMinCapacity(String location, int minCapacity) {
        List<StudySpaceModel> studySpaceModels = studySpaceRepository.findAllByLocation(location);

        studySpaceModels = studySpaceModels.stream()
                .filter(studySpaceModel -> studySpaceModel.getCapacity() >= minCapacity)
                .collect(Collectors.toList());

        return getStudySpaceDtos(studySpaceModels);
    }

}
