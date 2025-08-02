package com.rafaelgalvao.eventmanager.impl;

import com.rafaelgalvao.eventmanager.dto.Event.CreateEventDTO;
import com.rafaelgalvao.eventmanager.dto.Event.EventResponseDTO;
import com.rafaelgalvao.eventmanager.dto.Event.UpdateEventDTO;
import com.rafaelgalvao.eventmanager.entity.Event;
import com.rafaelgalvao.eventmanager.repository.EventRepository;
import com.rafaelgalvao.eventmanager.service.EventService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class EventServiceImpl implements EventService {

    @Autowired
    private EventRepository repository;

    @Override
    public Page<EventResponseDTO> listAll(Pageable pageable) {
        return repository.findAllByDeletedFalse(pageable)
                .map(this::toResponseDTO);
    }

    @Override
    public EventResponseDTO findById(Long id) {
        Event event = repository.findByIdAndDeletedFalse(id)
                .orElseThrow(() -> new EntityNotFoundException("Evento não encontrado"));
        return toResponseDTO(event);
    }

    @Override
    public EventResponseDTO create(CreateEventDTO dto) {
        Event event = new Event();
        event.setTitle(dto.title());
        event.setDescription(dto.description());
        event.setEventDate(dto.eventDate());
        event.setLocation(dto.location());

        repository.save(event);
        return toResponseDTO(event);
    }

    @Override
    public EventResponseDTO update(Long id, UpdateEventDTO dto) {
        Event event = repository.findByIdAndDeletedFalse(id)
                .orElseThrow(() -> new EntityNotFoundException("Evento não encontrado"));

        event.setTitle(dto.title());
        event.setDescription(dto.description());
        event.setEventDate(dto.eventDate());
        event.setLocation(dto.location());

        repository.save(event);
        return toResponseDTO(event);
    }

    @Override
    public void delete(Long id) {
        Event event = repository.findByIdAndDeletedFalse(id)
                .orElseThrow(() -> new EntityNotFoundException("Evento não encontrado"));

        repository.delete(event);
    }

    private EventResponseDTO toResponseDTO(Event event) {
        return new EventResponseDTO(
                event.getId(),
                event.getTitle(),
                event.getDescription(),
                event.getEventDate(),
                event.getLocation()
        );
    }
}
