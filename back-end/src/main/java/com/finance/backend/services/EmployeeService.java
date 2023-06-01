package com.finance.backend.services;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.finance.backend.models.Employee;
import com.finance.backend.repositories.EmployeeRepository;

@Service
public class EmployeeService {

    private final EmployeeRepository eRepository;

    public EmployeeService(EmployeeRepository eRepository) {
        this.eRepository = eRepository;
    }

    public String addNewEmployee(Employee employee) {
        Optional<Employee> eOptional = eRepository.findByEmail(employee.getEmail());

        if(eOptional.isPresent()) {
            return "Email already taken";
        }
        eRepository.save(employee);
        return "Employee registered successfully";
    }
}