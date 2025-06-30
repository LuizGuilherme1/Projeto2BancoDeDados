SET @start_time = NOW(3);
SELECT * FROM mysqlproject.alunosmat;
SET @end_time = NOW(3);
SELECT TIMESTAMPDIFF(MICROSECOND, @start_time, @end_time) / 1000 AS elapsed_time_ms;

SET @start_time = NOW(3);
SELECT * FROM mysqlproject.alunosmat where sex = 'f' and mjob = 'at_home';
SET @end_time = NOW(3);
SELECT TIMESTAMPDIFF(MICROSECOND, @start_time, @end_time) / 1000 AS elapsed_time_ms;

SET @start_time = NOW(3);
INSERT INTO mysqlproject.alunosmat (sex, g1, g2, g3) VALUES ('f',5,5,5);
SET @end_time = NOW(3);
SELECT TIMESTAMPDIFF(MICROSECOND, @start_time, @end_time) / 1000 AS elapsed_time_ms;

SET @start_time = NOW(3);
INSERT INTO alunosmat (sex,age,guardian,paid,g1,g2,g3) VALUES 
('m',21,'father','yes',5,5,5),('f',19,'mother','no',5,5,5),('m',30,'mother','yes',5,5,5);
SET @end_time = NOW(3);
SELECT TIMESTAMPDIFF(MICROSECOND, @start_time, @end_time) / 1000 AS elapsed_time_ms;

SET @start_time = NOW(3);
delete from mysqlproject.alunosmat where g1 = 5 and g2 = 5 and g3 = 5;
SET @end_time = NOW(3);
SELECT TIMESTAMPDIFF(MICROSECOND, @start_time, @end_time) / 1000 AS elapsed_time_ms;

SET @start_time = NOW(3);
UPDATE mysqlproject.alunosmat set g1 = 5 and g2 = 5 and g3 = 5 where sex = 'f';
SET @end_time = NOW(3);
SELECT TIMESTAMPDIFF(MICROSECOND, @start_time, @end_time) / 1000 AS elapsed_time_ms;
ROLLBACK;
COMMIT;