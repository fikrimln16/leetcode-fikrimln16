SELECT u.name, SUM(amount) as 'balance'
FROM Transactions t
JOIN Users u ON t.account = u.account
GROUP BY t.account
HAVING balance > 10000

CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
SET N = N - 1;
  RETURN (
      SELECT DISTINCT(salary)
      FROM Employee
      ORDER BY salary DESC
      LIMIT 1 OFFSET N
  );
END