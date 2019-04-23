select count(book_id),
    sum(if(year < 1950, 1, 0)) as '<1950',
    sum(if(year >= 1950 and year < 1990, 0, 1)) as '<1990',
    sum(if(year >= 1990 and year < 2000, 1, 0)) as '<2000',
    sum(if(year >= 2000, 1, 0)) as '<hoy'
from books b
join authors as a
    on a.author_id = b.author_id
where
    a.nationality is not null
group by nationality;

