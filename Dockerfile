# Use the official PostgreSQL image
FROM postgres:15

# Copy custom configuration files (if any) to the container
# COPY custom-config.conf /docker-entrypoint-initdb.d/

# Expose PostgreSQL's default port
EXPOSE 5432

