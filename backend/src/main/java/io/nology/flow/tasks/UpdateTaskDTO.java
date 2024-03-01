package io.nology.flow.tasks;

import jakarta.validation.constraints.Pattern;

public class UpdateTaskDTO {
	@Pattern(regexp = "^(?=\\S).*$", message = "Title cannot be empty")
	private String title;
	
	@Pattern(regexp = "^(?=\\S).*$", message = "Description cannot be empty")
	private String description;
	
	@Pattern(regexp = "^(?=\\S).*$", message = "Due date cannot be empty")
	private String dueAt;

	@Pattern(regexp = "^(?=\\S).*$", message = "Due date cannot be empty")
	private String category;
	
	public String getTitle() {
		return title;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public String getDescription() {
		return description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getDueAt() {
		return dueAt;
	}
	
	public void setDueAt(String dueAt) {
		this.dueAt = dueAt;
	}
	
	public String getCategory() {
		return this.category;
	}
	
	public void setCategory(String category) {
		this.category = category;
	}
}
