package io.nology.flow.tasks;

import java.time.Instant;
import java.time.format.DateTimeFormatter;
import java.time.temporal.TemporalAccessor;
import java.util.Date;
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

//	public List<Task> getTasksByCategory(String category) {
//		return this.taskRepository.find;
//	}

	public Optional<Task> getTaskById(Long id) {
		return this.taskRepository.findById(id);
	}
	
	public Task createTask(@Valid CreateTaskDTO data) throws ServiceValidationException {
		ValidationErrors errors = new ValidationErrors();
		Task newTask = modelMapper.map(data, Task.class);
		
		Long categoryId = data.getCategoryId();
		Optional<Category> maybeCategory = this.categoryService.findById(categoryId);
		if (maybeCategory.isEmpty()) {
			errors.addError("category", String.format("Category with ID %s does not exist", categoryId));
		} else {
			newTask.setCategory(maybeCategory.get());
		}
		
		if (errors.hasErrors()) {
			throw new ServiceValidationException(errors);
		}
		
		newTask.setIsCompleted(false);
		
		return this.taskRepository.save(newTask);
	}

	public Optional<Task> updateById(Long id, @Valid UpdateTaskDTO data) throws ServiceValidationException {
		ValidationErrors errors = new ValidationErrors();
		Optional<Task> maybeTask = this.getTaskById(id);
		
		if (maybeTask.isEmpty()) {
			return maybeTask;
		}
		
		Task foundTask = maybeTask.get();
		
		if (data.getTitle() != null) {			
			foundTask.setTitle(data.getTitle().trim());
		}
		
		if (data.getDescription() != null) {			
			foundTask.setDescription(data.getDescription().trim());
		}
		
		if (data.getIsCompleted() != null) {			
			if (data.getIsCompleted().equals("true")) {
				foundTask.setIsCompleted(true);
			} else {				
				foundTask.setIsCompleted(false);
			}
		}

		if (data.getDueAt() != null) {			
			TemporalAccessor ta = DateTimeFormatter.ISO_INSTANT.parse(data.getDueAt());
			Instant i = Instant.from(ta);
			Date newDueAt = Date.from(i);
			
			foundTask.setDueAt(newDueAt);
		}
		
		if (data.getCategoryId() != null) {			
			Long categoryId = data.getCategoryId();
			Optional<Category> maybeCategory = this.categoryService.findById(categoryId);
			
			if (maybeCategory.isEmpty()) {
				errors.addError("category", String.format("Category with ID %d does not exist", categoryId));
			}
			
			foundTask.setCategory(maybeCategory.get());
		}
		
		
		if (errors.hasErrors()) {
			throw new ServiceValidationException(errors);
		}
		
//		System.out.println("categoryId to update to:" + data.getCategoryId());
//		System.out.println("Task before ModelMapper:" + foundTask);
//		modelMapper.map(data, foundTask);
//		System.out.println("Task after ModelMapper:" + foundTask);
		
		Task updatedTask = this.taskRepository.save(foundTask);
		return Optional.of(updatedTask);
	}

	public boolean deleteTaskById(Long id) {
		Optional<Task> maybeTask = this.taskRepository.findById(id);
		
		if (maybeTask.isEmpty()) {
			return false;
		}
		
		this.taskRepository.delete(maybeTask.get());
		return true;
	}
}
