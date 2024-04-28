package personal.learning.tasklistback.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.hamcrest.Matchers.containsString;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;

@SpringBootTest
@AutoConfigureMockMvc
public class DefaultControllerTest {
    @Autowired
    public MockMvc mockMvc;

    //Macking a Narrow integration tests, testing just the slice of WebController of the application.
    //There is no need to start the entire SpringBoot context.
    @Test
    public void shouldReturnGreetingMessage() throws Exception {
        this.mockMvc.perform(get("/greetings"))
                .andDo(print())
                .andExpect(
                        MockMvcResultMatchers
                                .content()
                                .string(containsString("Hello master, nice to see you again")));
    }

}
