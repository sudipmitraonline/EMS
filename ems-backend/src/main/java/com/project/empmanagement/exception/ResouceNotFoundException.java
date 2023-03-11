package com.project.empmanagement.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ResouceNotFoundException extends RuntimeException{
    public static final long serialVersionUID = 1L;

    public ResouceNotFoundException (String msg){
        super(msg);
    }

}
