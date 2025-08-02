package com.rafaelgalvao.eventmanager.controller;

import com.rafaelgalvao.eventmanager.dto.Event.CreateEventDTO;
import com.rafaelgalvao.eventmanager.dto.Event.EventResponseDTO;
import com.rafaelgalvao.eventmanager.dto.Event.UpdateEventDTO;
import com.rafaelgalvao.eventmanager.service.EventService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/events")
public class EventController {

    @Autowired
    private EventService eventService;

    @GetMapping
    public Page<EventResponseDTO> list(Pageable pageable) {
        return eventService.listAll(pageable);
    }

    @GetMapping("/{id}")
    public EventResponseDTO get(@PathVariable Long id) {
        return eventService.findById(id);
    }

    @PostMapping
    public EventResponseDTO create(@Valid @RequestBody CreateEventDTO dto) {
        return eventService.create(dto);
    }

    @PutMapping("/{id}")
    public EventResponseDTO update(@PathVariable Long id, @Valid @RequestBody UpdateEventDTO dto) {
        return eventService.update(id, dto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        eventService.delete(id);
    }
}