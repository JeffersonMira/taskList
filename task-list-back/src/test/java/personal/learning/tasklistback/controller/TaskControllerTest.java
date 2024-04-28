package personal.learning.tasklistback.controller;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import personal.learning.tasklistback.model.Status;
import personal.learning.tasklistback.model.Task;
import personal.learning.tasklistback.service.TaskService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static personal.learning.tasklistback.util.TestUtils.convertObjectToJson;
import static org.hamcrest.Matchers.*;

/*
    Use this to load an entire embeeded web server
    For this case it is not necessary, as It is not an integration test.
    Once performing an Integration Test, it should create the complete context.
 */
//@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)

@SpringBootTest
@AutoConfigureMockMvc
public class TaskControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private TaskService taskService;

    @Test
    public void shouldReturnListOfTasks_whenNotInformingId() throws Exception{
        List<Task> tasks = new ArrayList<>();
        tasks.add(this.getDefaultTaskBuilder().build());
        tasks.add(this.getDefaultTaskBuilder().withId(10L).build());
        tasks.add(this.getDefaultTaskBuilder().withId(20L).build());

        when(taskService.findAll()).thenReturn(tasks);

        mockMvc.perform(get("/task"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(3)));

    }

    @Test
    public void shouldReturnEmptyListOfTasks_whenNoValueReturnedFromService() throws Exception{
        when(taskService.findAll()).thenReturn(new ArrayList<>());

        mockMvc.perform(get("/task"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(0)));

    }
    @Test
    public void shouldReturnTask_whenPassingId() throws Exception {
        Task task = this.getDefaultTaskBuilder().build();

        when(taskService.findTask(5L)).thenReturn(Optional.of(task));

        mockMvc.perform(get("/task/{id}", 5))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(task.getId()))
                .andExpect(jsonPath("$.title").value(task.getTitle()))
                .andExpect(jsonPath("$.description").value(task.getDescription()))
                .andExpect(jsonPath("$.status").value(task.getStatus().getValue()));
    }

    @Test
    public void shouldReturn404_whenPassingNonExistingId() throws Exception{
        mockMvc.perform(get("/task/{id}", 0))
                .andExpect(status().isNotFound());
    }

    @Test
    public void shouldReturn400_whenPassingInvalidId() throws Exception{
        mockMvc.perform(get("/task/{id}", "invalidValue"))
                .andExpect(status().isBadRequest());
    }

    @Test
    public void shouldCreateTask_whenCallingCreatingUrl() throws Exception{
        Task task = this.getDefaultTaskBuilder().build();

        mockMvc.perform(post("/task")
                .contentType(APPLICATION_JSON)
                .content(convertObjectToJson(task)))
                .andExpect(status().isCreated());
    }

    @Test
    public void shouldReturn422_whenCreatingWithInvalidEntity() throws Exception{
        Task task = this.getDefaultTaskBuilder().withTitle(null).build();

        mockMvc.perform(post("/task")
                .contentType(APPLICATION_JSON)
                .content(convertObjectToJson(task)))
                .andExpect(status().isBadRequest());
//                .andExpect(jsonPath("$.errors").isArray())
//                .andExpect(jsonPath("$.errors", hasSize(1)))
//                .andExpect(jsonPath("$.error", hasItem("Bad Request")));
    }

    @Test
    public void shouldReturn200_whenUpdatingTaskWithValidEntity() throws Exception{
        Task task = this.getDefaultTaskBuilder().build();

        mockMvc.perform(put("/task")
                .contentType(APPLICATION_JSON)
                .content(convertObjectToJson(task)))
                .andExpect(status().isOk());
    }

    @Test
    public void shouldReturn422_whenUpdatingWithInvalidEntity() throws Exception{
        Task task = this.getDefaultTaskBuilder().withTitle(null).build();

        mockMvc.perform(put("/task")
                        .contentType(APPLICATION_JSON)
                        .content(convertObjectToJson(task)))
                .andExpect(status().isBadRequest());
    }

    @Test
    public void shouldReturn200_whenDeleting() throws Exception{
        mockMvc.perform(delete("/task/{id}", 5L))
                .andExpect(status().isOk());
    }

      private Task.TaskBuilder getDefaultTaskBuilder(){
        return new Task.TaskBuilder()
                .withId(5L)
                .withTitle("Junit it")
                .withDescription("Junit this thing")
                .withStatus(Status.NEW);
    }

}
