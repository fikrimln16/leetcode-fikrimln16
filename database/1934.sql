
SELECT s.user_id, ROUND(AVG(IF(c.action="confirmed",1,0)),2) as confirmation_rate
FROM Signups s
LEFT JOIN Confirmations c ON s.user_id = c.user_id
GROUP BY s.user_id

-- #Karena kita tetap menampilkan semua user meskipun ada yang tidak pada confirmations table
-- #Maka kita akan menggunakan LEFT JOIN

-- #Kita akan mengelompokan dari setiap user_id pada tabel Signups

-- #Lalu kita akan menghitung rata-ratanya

-- #IF(c.action="confirmed",1,0)
-- #kondisi diatas akan mengecek apabila action confirmed maka akan return 1, jika tidak maka 0

-- #AVG(....)
-- #fungsi AVG untuk menghitung rata-rata setelah pengelompokan GROUP BY berdasarkan user_id

-- #ROUND(...,2)
-- #fungsi diatas untuk membulatkan dengan mengambil 2 angka setelah koma

-- # .... as confirmation_rate
-- # berfungsi untuk mengubah kolom menjadi "confirmation_rate"


-- #contoh untuk user_id 2:
-- #terdapat 2 action yaitu [confirmed, timeout], jika kita menggunakan AVG maka akan seperti:
-- #AVG((1+0)/totalaction(2)) --> 1 / 2 = 0.5

-- #contoh untuk user_id 7:
-- #terdapat 3 action yaitu [confirmed, confirmed, confirmed], jika kita menggunakan AVG maka akan seperti:
-- #AVG((1+1+1)/totalaction(3)) --> 3 / 3 = 1