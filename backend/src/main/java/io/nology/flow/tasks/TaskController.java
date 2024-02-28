package io.nology.flow.tasks;

import java.text.ParseException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/tasks")
public class TaskController {
	@Autowired
	private TaskService taskService;
	
	@GetMapping
	public String getAllTasks() {
		return this.taskService.getAllTasks();
	}
	
	@GetMapping("/personal")
	public String getPersonalTasks() {
		return this.taskService.getPersonalTasks();
	}
	
	@GetMapping("/{id}")
	public String getTaskById(@PathVariable int id) {
		return this.taskService.getTaskById(id);
	}
	
	@PostMapping()
	public ResponseEntity<Task> createTask(@Valid @RequestBody CreateTaskDTO data) throws ParseException {
		Task createdTask = this.taskService.createTask(data);
		return new ResponseEntity<>(createdTask, HttpStatus.CREATED);
	}
}
