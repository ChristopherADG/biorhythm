echo "Building containers"
docker-compose build

echo "Creating containers"
docker-compose up -d

echo "Creating Admin User"
docker-compose exec web bash -c "python manage.py migrate; \
    python manage.py createsuperuser;"

echo "Restarting containers"
docker-compose start

echo "All done :)"
echo "Navigate to http://localhost:8000/ to view the site."