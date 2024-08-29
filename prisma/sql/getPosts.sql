SELECT 
    p.id,
    p.title,
    p.author,
    p.content,
    p."createDate",
    s.name AS "statusName"
FROM 
    "Post" p
JOIN 
    "Status" s ON p."statusId" = s.id