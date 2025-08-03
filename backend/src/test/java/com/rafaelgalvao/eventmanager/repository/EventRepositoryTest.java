package com.rafaelgalvao.eventmanager.repository;

import com.rafaelgalvao.eventmanager.entity.Event;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;

import java.time.LocalDateTime;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@ActiveProfiles("test")
@Transactional
class EventRepositoryTest {

    @Autowired
    private EventRepository eventRepository;

    @AfterEach
    void tearDown() {
        eventRepository.deleteAll();
    }

    @Test
    @DisplayName("Deve salvar e buscar evento não deletado")
    void testSaveAndFindByIdAndDeletedFalse() {
        Event event = new Event();
        event.setTitle("Evento Teste");
        event.setDescription("Descrição");
        event.setLocation("Local");
        event.setEventDate(LocalDateTime.now().plusDays(1));
        event.setDeleted(false);

        Event saved = eventRepository.save(event);

        Optional<Event> found = eventRepository.findByIdAndDeletedFalse(saved.getId());
        assertThat(found).isPresent();
        assertThat(found.get().getTitle()).isEqualTo("Evento Teste");
    }

    @Test
    @DisplayName("Não deve encontrar evento com deleted=true")
    void testNotFindDeletedEvent() {
        Event event = new Event();
        event.setTitle("Evento Excluído");
        event.setDescription("Descrição");
        event.setLocation("Local");
        event.setEventDate(LocalDateTime.now().plusDays(2));
        event.setDeleted(true);

        Event saved = eventRepository.save(event);

        Optional<Event> found = eventRepository.findByIdAndDeletedFalse(saved.getId());
        assertThat(found).isEmpty();
    }
}