package io.nology.flow.config;

import org.modelmapper.Converter;
import org.modelmapper.ModelMapper;
import org.modelmapper.spi.MappingContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.nology.flow.categories.Category;
import io.nology.flow.categories.CreateCategoryDTO;

@Configuration
public class ModelMapperConfig {
	@Bean
	public ModelMapper modelMapper() {
		ModelMapper mapper = new ModelMapper();
		mapper.typeMap(String.class, String.class).setConverter(new TrimConverter());
		mapper.getConfiguration().setSkipNullEnabled(true);
		
//		mapper.typeMap(CreateTaskDTO.class, Task.class)
//			.addMappings(m -> m.using(new LowerCaseConverter())
//					.map(CreateTaskDTO::getCategory, Task::setCategory));
//		mapper.typeMap(UpdateTaskDTO.class, Task.class)
//			.addMappings(m -> m.using(new LowerCaseConverter())
//					.map(UpdateTaskDTO::getCategory, Task::setCategory));
		
		mapper.typeMap(CreateCategoryDTO.class, Category.class)
			.addMappings(m -> m.using(new LowerCaseConverter()).map(CreateCategoryDTO::getName, Category::setName));
		
		return mapper;
	}
	
	private class TrimConverter implements Converter<String, String> {
		@Override
		public String convert(MappingContext<String, String> context) {
			if (context.getSource() == null) {
				return null;
			}
			return context.getSource().trim();
		}
	}
	
	private class LowerCaseConverter implements Converter<String, String> {
		@Override
		public String convert(MappingContext<String, String> context) {
			if (context.getSource() == null) {
				return null;
			}
			return context.getSource().toLowerCase();
		}
	}
}
