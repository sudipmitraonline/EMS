package com.project.empmanagement.controller;

import com.project.empmanagement.model.Employee;
import com.project.empmanagement.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin (origins ="http://localhost:3000")
@RequestMapping("/employee/")
public class EmployeeController {

    @Autowired
    EmployeeRepository employeeRepository;

    @GetMapping("/get-employee-list")
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }
}
