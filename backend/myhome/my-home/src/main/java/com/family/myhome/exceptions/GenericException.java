package com.family.myhome.exceptions;

//@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
public class GenericException  extends RuntimeException {
    private static final long serialVersionUID = 1L;

    public GenericException() {
        super();
    }

    public GenericException(String message) {
        super(message);
    }

    public GenericException(String message, Throwable t) {
        super(message, t);
    }
}