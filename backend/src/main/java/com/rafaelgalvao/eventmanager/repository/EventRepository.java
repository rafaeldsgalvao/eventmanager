package com.rafaelgalvao.eventmanager.repository;

import com.rafaelgalvao.eventmanager.entity.Event;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EventRepository extends JpaRepository<Event, Long> {

    Page<Event> findAllByDeletedFalse(Pageable pageable);

    Optional<Event> findByIdAndDeletedFalse(Long id);
}
