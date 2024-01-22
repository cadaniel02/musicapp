# Music Controller Web Application

The Music Controller Web Application is a web-based platform that allows users to manage music playback using the Spotify API and facilitates real-time song voting within shared rooms. It provides a music listening experience with interactive features.

## Features

- **Spotify Integration:** Connect your Spotify account to control playback and access your playlists.
- **Room Creation:** Create a virtual room where you and your friends can listen to music together.
- **Real-time Voting:** Users can vote on the next song to be played, creating a collaborative playlist.
- **Room Management:** Room owners have control over playback and user management.

## Getting Started

These instructions will help you set up and run the Music Controller Web Application on your local machine for development and testing purposes. 

### Prerequisites

- Python 3.x
- Django 3.x
- Django REST framework
- Node.js and npm
- Spotify Developer Account

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/music-controller-app.git
   cd music-controller-app

2. Set up Spotify API credentials:

  Create a Spotify Developer Account and register your application.
  Add a .env file with your Spotify API credentials to the root directory.

4. Install JavaScript dependencies:

   ```bash
   cd frontend
   npm install

5. Apply database migrations:

  ```bash
  python manage.py makemigrations
  python manage.py migrate

6. Access the application in your web browser at http://localhost:8000.
