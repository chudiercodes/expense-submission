package com.finance.backend.controllers;

import com.finance.backend.models.Employee;
import com.finance.backend.services.EmployeeService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/employee")
public class EmployeeController {
    
    private final EmployeeService eService;

    public EmployeeController(EmployeeService eService) {
        this.eService = eService;
    }

    @PostMapping
	public void registerEmployee(@RequestBody Employee employee) {	
		eService.addNewEmployee(employee);
	}
}