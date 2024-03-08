package io.nology.flow.tasks;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import io.nology.flow.categories.Category;
import io.nology.flow.common.BaseEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
@Table(name = "tasks")
public class Task extends BaseEntity {
	@Column
	private String title;
	
	@Column
	private Date dueAt;
	
	@Column
	private String description;
	
	@Column
	private boolean isCompleted;
	
	@ManyToOne()
	@JoinColumn(name = "category_id")
	@JsonIgnoreProperties("tasks")
	private Category category;
	
	public Task() {
		super();
	}
	
	public String getTitle() {
		return this.title;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public Date getDueAt() {
		return this.dueAt;
	}
	
	public void setDueAt(Date dueAt) {
		this.dueAt = dueAt;
	}
	
	public String getDescription() {
		return this.description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	public boolean getIsCompleted() {
		return this.isCompleted;
	}
	
	public void setIsCompleted(boolean isCompleted) {
		this.isCompleted = isCompleted;
	}
	
	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}
}
