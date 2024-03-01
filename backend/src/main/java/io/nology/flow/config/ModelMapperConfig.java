package io.nology.flow.config;

import org.modelmapper.Converter;
import org.modelmapper.ModelMapper;
import org.modelmapper.spi.MappingContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.nology.flow.tasks.CreateTaskDTO;
import io.nology.flow.tasks.Task;
import io.nology.flow.tasks.UpdateTaskDTO;

@Configuration
public class ModelMapperConfig {
	@Bean
	public ModelMapper modelMapper() {
		ModelMapper mapper = new ModelMapper();
		mapper.typeMap(String.class, String.class).setConverter(new TrimConverter());
		mapper.getConfiguration().setSkipNullEnabled(true);
		mapper.typeMap(CreateTaskDTO.class, Task.class)
			.addMappings(m -> m.using(new LowerCaseConverter())
					.map(CreateTaskDTO::getCategory, Task::setCategory));
		mapper.typeMap(UpdateTaskDTO.class, Task.class)
			.addMappings(m -> m.using(new LowerCaseConverter())
					.map(UpdateTaskDTO::getCategory, Task::setCategory));
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
