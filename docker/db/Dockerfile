ARG POSTGRES_VERSION
ARG POSTGRES_PASSWORD

FROM docker.io/postgres:${POSTGRES_VERSION}

ENV POSTGRES_DB=dspace
ENV POSTGRES_USER=dspace
ENV POSTGRES_PASSWORD=${POSTGRES_PASSWORD}

RUN apt-get update && apt-get install -y postgresql-contrib

# pgcrypto já vem com o PostgreSQL >=13, mas garantimos aqui
RUN echo "shared_preload_libraries = 'pg_stat_statements'" >> /usr/share/postgresql/postgresql.conf.sample
