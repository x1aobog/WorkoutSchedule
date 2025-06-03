🏋️‍♀️ Workout Scheduler

Workout Scheduler is a web application that helps users plan and organize their weekly fitness classes with ease. It aggregates schedules from various fitness companies (like CorePower Yoga, Barry’s, OrangeTheory, etc.) using web scraping, and provides a simple interface to select, manage, and avoid overlapping workout sessions.

🚀 Features

🗓 Weekly Schedule Builder: Plan your workouts for the week using a clean drag-and-drop interface.
🔍 Web Scraping Integration: Automatically pulls real-time class schedules from participating fitness companies' websites.
⏰ Conflict-Free Planning: Detects and prevents time overlaps between selected classes.
💪 Multi-Studio Support: Browse and select classes from multiple workout providers in one unified view.
💾 Save Your Schedule: Save your customized workout schedule to view or modify later.
🔧 How It Works

The backend runs web scrapers to collect up-to-date class schedules from each workout company’s public-facing website.
The frontend displays available classes in a calendar-style interface.
Users can select their preferred classes, and the system will ensure no time conflicts exist in the schedule.
The schedule can be exported, saved to a profile, or sent to a calendar app (future feature).
🛠 Built With

Frontend: React / HTML / CSS (Tailwind or Bootstrap)
Backend: Node.js / Express or Python Flask
Web Scraping: Python (BeautifulSoup, Requests, Selenium)
Database: PostgreSQL / MongoDB (based on project scope)
📌 Project Status

This project is currently in active development. Core features like schedule scraping, conflict detection, and user interface are being built iteratively.
