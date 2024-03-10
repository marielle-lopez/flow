package io.nology.flow.categories;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/categories")
@Tag(name = "Categories")
public class CategoryController {
	@Autowired
	private CategoryService categoryService;

	@PostMapping
	@Operation(summary = "Creates a category")
	public ResponseEntity<Category> create(@Valid @RequestBody CreateCategoryDTO data) {
		Category createdCategory = this.categoryService.create(data);
		return new ResponseEntity<>(createdCategory, HttpStatus.CREATED);

	}

	@GetMapping
	@Operation(summary = "Gets all categories")
	public ResponseEntity<List<Category>> findAll() {
		List<Category> allCategories = this.categoryService.findAll();
		return new ResponseEntity<>(allCategories, HttpStatus.OK);
	}
}
