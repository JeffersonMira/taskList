package personal.learning.tasklistback.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class DefaultController {

    @GetMapping("/greetings")
    public String greetings(){
        return "Hello master, nice to see you again";
    }
}
