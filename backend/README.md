# Setup

To setup the backend, make sure you have installed Docker in your system.
Run
```
docker-compose up
```
inside the backend directory to install all the required utilities.

# USING THE API

Once the srever is running on localhost, you can use the Django Admin pannel located at [http://127.0.0.1:8000/admin](http://127.0.0.1:8000/admin) to enter and delete data.

# API ENPOINTS
The endpoints for the API are as follows:

[http://127.0.0.1:8000/api/announcements](http://127.0.0.1:8000/api/announcements) - To get or update announcements 

[http://127.0.0.1:8000/api/contactform](http://127.0.0.1:8000/api/contactform) - To get or update contactform 

[http://127.0.0.1:8000/api/imageupload](http://127.0.0.1:8000/api/imageupload) - To get or update image upload

You can perform REST operations like GET, POST etc to these endpoints

# Table structure
### Announcements

| Field       | Type                     |
|-------------|--------------------------|
| title       | CharField( max char-120) |
| description | TextField                |
| completed   | boolean                  |

### contactForm

| Field     | Type                     |
|-----------|--------------------------|
| name      | CharField( max char-120) |
| phone     | CharField( max char-120) |
| email     | CharField( max char-120) |
| message   | Textfield                |
| completed | boolean                  |

### ImageUpload

| Field   | Type                     |
|---------|--------------------------|
| title   | CharField( max char-120) |
| content | TextField                |
| image   | ImageField               |

