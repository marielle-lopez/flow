package io.nology.flow.tasks;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@Service
@Transactional
public class TaskService {
	@Autowired
	private TaskRepository taskRepository;
	
	public String getAllTasks() {
		return "This gets all tasks!";
	}
	
	public String getPersonalTasks() {
		return "This gets all of the 'Personal' tasks.";
	}
	
	public String getTaskById(int id) {
		if (id == 22) {
			return "You've found the secret task!";
		}
		return "This gets the task with ID: " + id + "!";
	}
	
	public Task createTask(@Valid CreateTaskDTO data) throws ParseException {
		Task newTask = new Task();
		
		Date dueAt = new SimpleDateFormat("dd/MM/yyyy").parse(data.getDueAt());
		
		newTask.setTitle(data.getTitle().trim().toLowerCase());
		newTask.setCreatedAt(new Date());
		newTask.setDueAt(dueAt);
		newTask.setDescription(data.getDescription().trim().toLowerCase());
		newTask.setCategory(data.getCategory().trim().toLowerCase());
		
		return this.taskRepository.save(newTask);
	}
}
