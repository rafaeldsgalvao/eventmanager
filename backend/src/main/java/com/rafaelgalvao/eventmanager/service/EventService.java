package com.rafaelgalvao.eventmanager.service;

import com.rafaelgalvao.eventmanager.dto.Event.CreateEventDTO;
import com.rafaelgalvao.eventmanager.dto.Event.EventResponseDTO;
import com.rafaelgalvao.eventmanager.dto.Event.UpdateEventDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface EventService {

    Page<EventResponseDTO> listAll(Pageable pageable);

    EventResponseDTO findById(Long id);

    EventResponseDTO create(CreateEventDTO dto);

    EventResponseDTO update(Long id, UpdateEventDTO dto);

    void delete(Long id);
}
