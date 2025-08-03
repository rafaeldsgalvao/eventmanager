package com.rafaelgalvao.eventmanager.service;

import com.rafaelgalvao.eventmanager.dto.Event.CreateEventDTO;
import com.rafaelgalvao.eventmanager.dto.Event.EventResponseDTO;
import com.rafaelgalvao.eventmanager.dto.Event.UpdateEventDTO;
import com.rafaelgalvao.eventmanager.entity.Event;
import com.rafaelgalvao.eventmanager.impl.EventServiceImpl;
import com.rafaelgalvao.eventmanager.repository.EventRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.*;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

@ActiveProfiles("test")
@Transactional
class EventServiceTest {

    @InjectMocks
    private EventServiceImpl eventService;

    @Mock
    private EventRepository eventRepository;

    @BeforeEach
    void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    @DisplayName("Deve criar novo evento com sucesso")
    void testCreateEvent() {

        CreateEventDTO dto = new CreateEventDTO("Título", "Descrição", LocalDateTime.now().plusDays(1), "Local");

        when(eventRepository.save(any(Event.class))).thenAnswer(inv -> inv.getArgument(0));

        EventResponseDTO response = eventService.create(dto);

        assertThat(response).isNotNull();
        assertThat(response.title()).isEqualTo("Título");
        verify(eventRepository, times(1)).save(any(Event.class));
    }

    @Test
    @DisplayName("Deve atualizar evento existente")
    void testUpdateEvent() {

        Long id = 1L;
        Event existing = new Event();
        existing.setId(id);
        existing.setTitle("Antigo");

        UpdateEventDTO dto = new UpdateEventDTO("Novo Título", "Nova Desc", LocalDateTime.now().plusDays(2), "Novo Local");

        when(eventRepository.findByIdAndDeletedFalse(id)).thenReturn(Optional.of(existing));
        when(eventRepository.save(any(Event.class))).thenAnswer(inv -> inv.getArgument(0));

        EventResponseDTO response = eventService.update(id, dto);

        assertThat(response.title()).isEqualTo("Novo Título");
        verify(eventRepository).findByIdAndDeletedFalse(id);
        verify(eventRepository).save(existing);
    }

    @Test
    @DisplayName("Deve deletar logicamente um evento")
    void testDeleteEvent() {

        Long id = 2L;
        Event event = new Event();
        event.setId(id);
        event.setDeleted(false);

        when(eventRepository.findByIdAndDeletedFalse(id)).thenReturn(Optional.of(event));

        eventService.delete(id);

        verify(eventRepository).delete(argThat(e -> e.getId().equals(id)));
    }

    @org.junit.jupiter.api.AfterEach
    void cleanup() {
        eventRepository.deleteAll();
    }
}