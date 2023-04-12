FROM mysql:5.7

COPY ./createDatabase.sql /docker-entrypoint-initdb.d/

RUN echo "CREATE USER 'usr'@'%' IDENTIFIED BY 'pass';GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;" > /docker-entrypoint-initdb.d/_grant_remote.sql

EXPOSE 3306

CMD ["mysqld"]