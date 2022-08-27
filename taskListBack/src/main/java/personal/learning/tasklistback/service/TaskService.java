package personal.learning.tasklistback.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import personal.learning.tasklistback.model.Task;
import personal.learning.tasklistback.repository.TaskRepository;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    private TaskRepository taskRepository;

    @Autowired
    public TaskService(TaskRepository taskRepository){
        this.taskRepository = taskRepository;
    }

    public Optional<Task> findTask(Long id){
        return this.taskRepository.findById(id);
    }

    public Task create(Task task) {
        return taskRepository.save(task);
    }

    public List<Task> findAll() {
        return this.taskRepository.findAll();
    }

    public void update(Task task) {
        this.taskRepository.save(task);
    }

    public void delete(Long id) {
        taskRepository.deleteById(id);
    }
}
