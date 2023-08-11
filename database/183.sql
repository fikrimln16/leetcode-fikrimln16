#CARA 1
SELECT name as Customers
FROM Customers c
LEFT JOIN Orders o
ON c.id = o.customerId
WHERE o.id IS NULL

#CARA 2
SELECT c.Name as Customers
FROM Customers c
WHERE c.Id NOT IN (SELECT b.CustomerId from Orders b)