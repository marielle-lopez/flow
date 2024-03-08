package io.nology.flow.categories;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class CreateCategoryDTO {
	@NotBlank
	@Size(min = 1, message = "Name must be at least 1 character long")
	private String name;
	
	public String getName() {
		return this.name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
}
