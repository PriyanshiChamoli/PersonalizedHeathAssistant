# PersonalizedHeathAssistant
Welcome to the personalized health assistant for Sunita Sharma(or any elderly person) that provides health-related information, reminders for medication and appointments, and encourages physical activity.


## Table of Contents
- Objective:
Create a personalized health assistant for Sunita Sharma that provides health-related information, reminders for medication and appointments, and encourages physical activity.
- Prototype:
Develop a simple web application that Sunita can access easily on her computer or tablet. The application should have the following features:

Personalized Dashboard:

Display a personalized dashboard with weather updates, local news, and health tips relevant to Sunita's location.
Show her upcoming appointments, medication schedule, and any recommended activities.
Medication Reminders:

Set up a medication reminder system that sends notifications to Sunita's device when it's time to take her medication.
Include a feature to mark medications as taken and send alerts to a designated contact if she misses a dose.
Appointment Management:

Integrate a calendar system that reminds Sunita of upcoming medical appointments, allowing her to confirm or reschedule them.
Provide transportation options or a contact number for assistance if needed.
Physical Activity Tracker:

Implement a simple physical activity tracker that monitors Sunita's daily steps or encourages short exercises.
Provide video tutorials for easy exercises suitable for her age group.
Emergency Assistance:

Include an emergency button on the application that, when pressed, sends an alert to predefined contacts with Sunita's location.
Integrate with emergency services for quick response.
Health Journal:

Allow Sunita to maintain a digital health journal where she can log her daily activities, moods, and any symptoms.
Provide insights or suggestions based on the recorded data.
-Technology Stack:

Frontend: HTML, CSS, JavaScript
Backend: Node.js with Express for server-side logic
Database: MongoDB for storing user data
Notifications: Use a notification service (e.g., Firebase Cloud Messaging) for real-time alerts
Mapping: Integrate Google Maps API for location-based services
Emergency Assistance: Twilio API for sending SMS alerts


## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) installed and running

### Installation
1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/PriyanshiChamoli/PersonalizedHealthAssistant.git
    ```

2. Navigate to the project directory:

    ```bash
    cd PersonalizedHealthAssistant
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the server:

    ```bash
    npm start
    ```

    The app will be accessible at `http://localhost:3000` by default.



## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js with Express for the server
- MongoDB for database storage
- [Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging) for real-time alerts
- [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview) for location-based services
- [Twilio API](https://www.twilio.com/docs) for sending SMS alerts

## Contributing

If you'd like to contribute to this project, please follow these steps:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

