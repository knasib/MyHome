package com.family.chat.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ChatMessage {
    //private String familyName;
    private String userId;
    private String message;
    private MsgType type;

    public enum MsgType {
        CHAT, LEAVE, JOIN
    }
}
