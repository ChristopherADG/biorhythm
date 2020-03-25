echo "Building containers"
docker-compose build

echo "Creating containers"
docker-compose up -d

echo "Creating Admin User"
docker-compose exec api bash -c "python3 manage.py makemigrations; \
    python3 manage.py migrate; \
    python3 manage.py createsuperuser;"

echo "Restarting containers"
docker-compose up

echo "All done :)"
echo "Navigate to http://localhost:3000/ to view the site."
echo "Navigate to http://localhost:8000/ to access the api."