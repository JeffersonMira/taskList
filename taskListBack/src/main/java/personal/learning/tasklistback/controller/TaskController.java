package personal.learning.tasklistback.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import personal.learning.tasklistback.model.Task;
import personal.learning.tasklistback.service.TaskService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/task")
public class TaskController {

    private final TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService){
        this.taskService = taskService;
    }

    @GetMapping()
    public List<Task> findAll(){
        return this.taskService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Task> find(@PathVariable Long id){
        return this.taskService.findTask(id)
                .map(task -> ResponseEntity.ok().body(task))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Task> create(@Valid @RequestBody Task task){
        Task taskCreated = this.taskService.create(task);
        return new ResponseEntity<>(taskCreated, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity update(@Valid @RequestBody Task task){
        this.taskService.update(task);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id){
        this.taskService.delete(id);
        return ResponseEntity.ok().build();
    }

}
