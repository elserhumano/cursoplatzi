SELECT nationality, COUNT(author_id) AS c_authors
FROM authors
WHERE nationality IS NOT NULL
    AND nationality NOT IN ('RUS', 'AUS')
GROUP BY nationality
ORDER BY c_authors DESC, nationality ASC;

SELECT title, price from books order by price limit 10;

select avg(price) from books

SELECT nationality, 
    COUNT(book_id) as libros,
    AVG(price) as prom,
    STDDEV(price) AS std
FROM books as b
JOIN authors as a
    ON a.author_id = b.author_id
GROUP BY nationality
ORDER BY libros DESC;

SELECT a.nationality, MAX(price), MIN(price)
FROM books as b
JOIN authors as a
    on a.author_id = b.author_id
GROUP BY nationality;

SELECT c.name, t.type, b.title,
    CONCAT(a.name, " (", a.nationality, ")") as autor,
    TO_DAYS(NOW()) - TO_DAYS(t.created_at) AS ago
FROM transactions AS t
LEFT JOIN clients AS c
    ON c.client_id = t.client_id
LEFT JOIN books AS b
    ON b.book_id = t.book_id
LEFT JOIN authors AS a
    ON b.author_id = a.author_id

