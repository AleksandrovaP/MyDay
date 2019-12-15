package bg.fmi.myday.repositories;

import bg.fmi.myday.entities.WorkingHours;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkingHoursRepository extends CrudRepository<WorkingHours, Long> {

}
