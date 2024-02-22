USE employees_db;
INSERT INTO department (name)
VALUES ('Sales'), ('Engineering'), ('HR');

INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead', 100000, 1), ('Software Engineer', 120000, 2), ('HR Manager', 80000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Frank', 'childress', 1, NULL), ('janey', 'Smith', 2, 1), ('Emily', 'Johnson', 3, 1);