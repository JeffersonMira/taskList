package personal.learning.tasklistback.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotNull;
import java.lang.annotation.Documented;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Document("tasks")
public class Task {
    @Id
    private Long id;

    @NotNull(message = "Title is a mandatory field")
    private String title;
    private String description;
    private Status status;

    public Task(TaskBuilder builder){
        this(builder.id, builder.title, builder.description, builder.status);
    }

    public static class TaskBuilder{
        private Long id;
        private String title;
        private String description;
        private Status status;

        public TaskBuilder withId(Long id){
            this.id = id;
            return this;
        }

        public TaskBuilder withTitle(String title){
            this.title = title;
            return this;
        }

        public TaskBuilder withDescription(String description){
            this.description = description;
            return this;
        }

        public TaskBuilder withStatus(Status status){
            this.status = status;
            return this;
        }

        public Task build(){
            return new Task(this);
        }

    }

}
