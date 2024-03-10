package io.nology.flow.tasks;

import java.text.ParseException;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.nology.flow.categories.Category;
import io.nology.flow.categories.CategoryService;
import io.nology.flow.exceptions.ServiceValidationException;
import io.nology.flow.exceptions.ValidationErrors;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@Service
@Transactional
public class TaskService {
	@Autowired
	private TaskRepository taskRepository;
	
	@Autowired
	private CategoryService categoryService;
	
	@Autowired
	private ModelMapper modelMapper;
	
	public List<Task> getAllTasks() {
		return this.taskRepository.findAll();
	}

	public Optional<Task> getTaskById(Long id) {
		return this.taskRepository.findById(id);
	}
	
	public Task createTask(@Valid CreateTaskDTO data) throws ParseException, ServiceValidationException {
		ValidationErrors errors = new ValidationErrors();
		Task newTask = modelMapper.map(data, Task.class);
		
		Long categoryId = data.getCategoryId();
		Optional<Category> maybeCategory = this.categoryService.findById(categoryId);
		if (maybeCategory.isEmpty()) {
			errors.addError("category", String.format("Category with id %s does not exist", categoryId));
		} else {
			newTask.setCategory(maybeCategory.get());
		}
		
		if (errors.hasErrors()) {
			throw new ServiceValidationException(errors);
		}
		
		newTask.setIsCompleted(false);
		
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
