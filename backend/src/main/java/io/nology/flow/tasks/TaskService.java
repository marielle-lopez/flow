package io.nology.flow.tasks;

import java.text.ParseException;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@Service
@Transactional
public class TaskService {
	@Autowired
	private TaskRepository taskRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	public List<Task> getAllTasks() {
		return this.taskRepository.findAll();
	}

	public Optional<Task> getTaskById(Long id) {
		return this.taskRepository.findById(id);
	}
	
	public Task createTask(@Valid CreateTaskDTO data) throws ParseException {
		Task newTask = modelMapper.map(data, Task.class);
		Date createdAt = new Date();
		newTask.setCreatedAt(createdAt);
		
		return this.taskRepository.save(newTask);
	}

	public Optional<Task> updateById(Long id, @Valid UpdateTaskDTO data) throws ParseException {
		Optional<Task> maybeTask = this.getTaskById(id);
		
		if (maybeTask.isEmpty()) {
			return maybeTask;
		}
		
		Task foundTask = maybeTask.get();
		modelMapper.map(data, foundTask);
		Task updatedTask = this.taskRepository.save(foundTask);
		return Optional.of(updatedTask);
	}

	public boolean deletePostById(Long id) {
		Optional<Task> maybeTask = this.taskRepository.findById(id);
		
		if (maybeTask.isEmpty()) {
			return false;
		}
		
		this.taskRepository.delete(maybeTask.get());
		return true;
	}
}
