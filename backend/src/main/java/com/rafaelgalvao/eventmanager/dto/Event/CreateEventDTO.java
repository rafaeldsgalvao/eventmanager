package com.rafaelgalvao.eventmanager.dto.Event;

import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.time.LocalDateTime;

public record CreateEventDTO(

        @NotBlank
        @Size(max = 100)
        String title,

        @Size(max = 1000)
        String description,

        @FutureOrPresent
        LocalDateTime eventDate,

        @Size(max = 200)
        String location
) {}
