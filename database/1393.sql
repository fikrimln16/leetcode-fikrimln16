SELECT stock_name, SUM(CASE WHEN operation = "Buy" THEN price * -1 ELSE price END) as 'capital_gain_loss'
FROM Stocks
GROUP BY stock_name
ORDER BY capital_gain_loss DESC