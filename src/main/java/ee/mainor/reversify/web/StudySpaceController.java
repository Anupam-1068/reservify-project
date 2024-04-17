package ee.mainor.reversify.web;


import ee.mainor.reversify.dto.StudySpaceDto;
import ee.mainor.reversify.service.StudySpaceService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("studySpace")
public class StudySpaceController {

    private final StudySpaceService studySpaceService;

    @GetMapping()
    public List<StudySpaceDto> getAllStudySpaces() {
        return studySpaceService.getAllStudySpaces();
    }

    @GetMapping("{id}")
    public StudySpaceDto getStudySpaceById(@PathVariable Long id) {
        return studySpaceService.getStudySpaceById(id);
    }

    @GetMapping("location")
    public List<StudySpaceDto> getStudySpacesByLocation(@RequestParam String location) {
        return studySpaceService.getStudySpacesByLocation(location);
    }

    @GetMapping("capacity")
    public List<StudySpaceDto> getStudySpacesByCapacityRange(
            @RequestParam int minCapacity,
            @RequestParam int maxCapacity
    ) {
        return studySpaceService.getStudySpacesByCapacityRange(minCapacity, maxCapacity);
    }



     @GetMapping("locationAndMinCapacity")
     public List<StudySpaceDto> getStudySpacesByLocationAndMinCapacity(
             @RequestParam String location,
             @RequestParam int minCapacity
     ) {
         return studySpaceService.getStudySpacesByLocationAndMinCapacity(location, minCapacity);
     }


    @PostMapping
    public StudySpaceDto createStudySpace(@RequestBody StudySpaceDto studySpaceDto) {
        return studySpaceService.createStudySpace(studySpaceDto);
    }

    @PutMapping("{id}")
    public StudySpaceDto updateStudySpace(@RequestBody StudySpaceDto studySpaceDto, @PathVariable Long id) {
        return studySpaceService.updateStudySpace(id, studySpaceDto);
    }

    @DeleteMapping("{id}")
    public void deleteStudySpace(@PathVariable Long id) {
        studySpaceService.deleteStudySpace(id);
    }




}
