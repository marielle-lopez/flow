package io.nology.flow.categories;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import io.nology.flow.common.BaseEntity;
import io.nology.flow.tasks.Task;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "categories")
public class Category extends BaseEntity {	
	@Column(unique = true)
	private String name;
	
	@OneToMany(mappedBy = "category")
	@JsonIgnoreProperties("category")
	private List<Task> tasks;
	
	public List<Task> getTasks() {
		return tasks;
	}
	
	public Category() {
	}
	
	public String getName() {
		return this.name;
	}
	
	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Category [name=" + name + ", tasks=" + tasks + "]";
	}
}
