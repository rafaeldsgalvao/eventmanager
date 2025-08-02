package com.rafaelgalvao.eventmanager.dto.Event;

import java.time.LocalDateTime;

public record EventResponseDTO(
        Long id,
        String title,
        String description,
        LocalDateTime eventDate,
        String location
) {}