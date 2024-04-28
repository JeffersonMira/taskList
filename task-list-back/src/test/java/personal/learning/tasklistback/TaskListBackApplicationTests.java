package personal.learning.tasklistback;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import personal.learning.tasklistback.controller.TaskController;

import static org.assertj.core.api.Assertions.assertThat;

// To see the JUNIT report, see the file:///C:/work/w/TaskList/taskListBack/build/reports/tests/test/index.html
@SpringBootTest
class TaskListBackApplicationTests {

    @Autowired
    private TaskController taskController;

    @Test
    void contextLoads() {
        assertThat(this.taskController).isNotNull();
    }

}
