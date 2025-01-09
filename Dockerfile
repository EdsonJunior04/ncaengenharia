FROM httpd:alpine3.21

# Configura o Apache
COPY ./site/ /usr/local/apache2/htdocs/

# Expõe as portas do Apache e JSON Server
EXPOSE 80