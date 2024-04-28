package personal.learning.tasklistback.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import personal.learning.tasklistback.model.Task;

public interface TaskRepository extends MongoRepository<Task, Long> {

    @Query("{title: '?0'}")
    Task findTaskByTitle(String title);
}
