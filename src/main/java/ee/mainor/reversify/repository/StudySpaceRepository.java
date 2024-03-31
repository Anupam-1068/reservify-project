package ee.mainor.reversify.repository;

import ee.mainor.reversify.model.StudySpaceModel;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudySpaceRepository extends CrudRepository<StudySpaceModel, Long> {

        @Query("""
            select * from study_spaces
            """)
        List<StudySpaceModel> getAllStudySpaces();

        StudySpaceModel findStudySpaceModelBySpaceId(Long id);

        List<StudySpaceModel> findAllByLocation(String location);

        @Query("""
            select * from study_spaces where availability ->> :day = 'available'
            """)
        List<StudySpaceModel> findAllAvailableByDay(String day);

        @Query("""
            select * from study_spaces where capacity >= :minCapacity and capacity <= :maxCapacity
            """)
        List<StudySpaceModel> findAllByCapacityRange(int minCapacity, int maxCapacity);

     @Query("""
             select * from study_spaces where location = :location and availability ->> :day = 'available'
             """)
     List<StudySpaceModel> findAllAvailableByLocationAndDay(String location, String day);

     @Query("""
             select * from study_spaces where location = :location and capacity >= :minCapacity
             """)
     List<StudySpaceModel> findAllByLocationAndMinCapacity(String location, int minCapacity);
    }

