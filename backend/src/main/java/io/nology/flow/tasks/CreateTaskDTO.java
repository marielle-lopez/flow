package io.nology.flow.tasks;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class CreateTaskDTO {
	@NotBlank
	private String title;
	
	private String description;
	
	@NotBlank
	private String dueAt;
	
	@NotNull
	@Min(1)
	private Long categoryId;
	
	public String getTitle() {
		return this.title;
	}
	
	public String getDescription() {
		return this.description;
	}
	
	public String getDueAt() {
		return this.dueAt;
	}
	
	public Long getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(Long categoryId) {
		this.categoryId = categoryId;
	}
}
