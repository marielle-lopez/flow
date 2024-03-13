package io.nology.flow.tasks;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.nology.flow.exceptions.NotFoundException;
import io.nology.flow.exceptions.ServiceValidationException;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/tasks")
@Tag(name = "Tasks")
public class TaskController {
	@Autowired
	private TaskService taskService;
	
	@GetMapping
	@Operation(summary = "Gets all tasks")
	public ResponseEntity<List<Task>> getAllTasks() {
		List<Task> allTasks = this.taskService.getAllTasks();
		return new ResponseEntity<>(allTasks, HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	@Operation(summary = "Gets a task by ID")
	public ResponseEntity<Task> getTaskById(@PathVariable Long id) throws NotFoundException {
		Optional<Task> maybeTask = this.taskService.getTaskById(id);
		Task foundTask = maybeTask.orElseThrow(() -> new NotFoundException(Task.class, id));
		
		return new ResponseEntity<>(foundTask, HttpStatus.OK);
	}
	
//	@GetMapping("/{category}")
//	@Operation(summary = "Gets all tasks of a specified category")
//	public ResponseEntity<List<Task>> getTasksByCategory(@PathVariable String category) throws NotFoundException {
//		List<Task> tasks = this.taskService.getTasksByCategory(category);
//		return new ResponseEntity<>(tasks, HttpStatus.OK);
//	}
	
	@PostMapping()
	@Operation(summary = "Creates a task")
	public ResponseEntity<Task> createTask(@Valid @RequestBody CreateTaskDTO data) throws ServiceValidationException {
		Task createdTask = this.taskService.createTask(data);
		return new ResponseEntity<>(createdTask, HttpStatus.CREATED);
	}
	
	@PatchMapping("/{id}")
	@Operation(summary = "Updates a task via ID")
	public ResponseEntity<Task> updateTaskById(@PathVariable Long id, @Valid @RequestBody UpdateTaskDTO data) throws NotFoundException, ServiceValidationException {
		Optional<Task> maybeUpdatedTask = this.taskService.updateById(id, data);
		Task updatedTask = maybeUpdatedTask.orElseThrow(() -> new NotFoundException(Task.class, id));
		return new ResponseEntity<>(updatedTask, HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	@Operation(summary = "Deletes a task by ID")
	public ResponseEntity<Task> deleteTaskById(@PathVariable Long id) throws NotFoundException {
		boolean deleted = this.taskService.deleteTaskById(id);
		
		if (!deleted) {
			throw new NotFoundException(Task.class, id);
		}
		
		return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
	}
}
