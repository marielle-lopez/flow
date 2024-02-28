package io.nology.flow.tasks;

import jakarta.validation.constraints.NotBlank;

public class CreateTaskDTO {
	@NotBlank
	private String title;
	
	private String description;
	
	private String dueAt;
	
	@NotBlank
	private String category;
	
	public String getTitle() {
		return this.title;
	}
	
	public String getDescription() {
		return this.description;
	}
	
	public String getDueAt() {
		return this.dueAt;
	}
	
	public String getCategory() {
		return this.category;
	}
}
