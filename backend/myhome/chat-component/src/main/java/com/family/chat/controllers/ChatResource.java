package com.family.chat.controllers;

import com.family.chat.models.ChatMessage;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

@Controller
@Slf4j
@CrossOrigin(origins = "*")
public class ChatResource {

    @MessageMapping("/register/{familyname}")
    @SendTo("/topic/{familyname}")
    public ChatMessage register(@DestinationVariable String familyname,
                                @Payload ChatMessage message,
                                SimpMessageHeaderAccessor accessor) {

        log.info("User {} from family {} registered for chat service", message.getUserId(), familyname);
        accessor.getSessionAttributes().put("username", message.getUserId());
        return message;
    }

    @MessageMapping("/send/{familyname}")
    @SendTo("/topic/{familyname}")
    public ChatMessage sendMessage(@DestinationVariable String familyname,
                                   @Payload ChatMessage message) {
        log.info("Message received in backend is  {}", message);
        return message;
    }
}
