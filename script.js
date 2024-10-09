// Simple user database stored in localStorage
let users = JSON.parse(localStorage.getItem('users')) || [];

// Switch between Sign-In and Sign-Up
function switchToSignUp() {
    document.getElementById('sign-in').style.display = 'none';
    document.getElementById('sign-up').style.display = 'block';
}

function switchToSignIn() {
    document.getElementById('sign-in').style.display = 'block';
    document.getElementById('sign-up').style.display = 'none';
}

// Sign-Up functionality
function signUp() {
    let username = document.getElementById('signup-username').value;
    let password = document.getElementById('signup-password').value;

    if (username && password) {
        let user = users.find(u => u.username === username);
        if (user) {
            alert('Username already exists!');
        } else {
            users.push({ username, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Account created successfully!');
            switchToSignIn();
        }
    } else {
        alert('Please fill in both fields.');
    }
}

// Sign-In functionality
function signIn() {
    let username = document.getElementById('login-username').value;
    let password = document.getElementById('login-password').value;

    let user = users.find(u => u.username === username && u.password === password);
    if (user) {
        alert('Login successful!');
        document.getElementById('auth-container').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        document.getElementById('usernameDisplay').innerText = username;
        updateProgress();  // Update progress bar if needed
    } else {
        alert('Invalid credentials!');
    }
}

// Logout functionality
function logout() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('auth-container').style.display = 'block';
}

// Carbon Footprint Calculator
function calculateFootprint() {
    let transport = document.getElementById('transport').value;
    let electricityHours = parseFloat(document.getElementById('electricity').value) || 0;

    let footprint = 0;

    // Calculate footprint based on transport and electricity
    if (transport === 'car') footprint += 20;
    if (transport === 'bus') footprint += 10;
    if (transport === 'bike') footprint += 2;
    if (transport === 'walk') footprint += 0;

    footprint += electricityHours * 0.5;  // Each hour of electricity adds 0.5 units to the footprint

    document.getElementById('footprintResult').innerText = `Your Carbon Footprint: ${footprint} units`;
}

// Example feature: Eco Challenge
const challenges = [
    "Turn off lights when not in use",
    "Unplug chargers after use",
    "Walk to school",
    "Reduce water usage by 10%",
    "Take stairs instead of using lift",
    "Bring reusable shopping bags and avoid products with excessive plastic packaging",
    "Cycle or use public transport for the whole day",
    "Take short showers",
    "Make a cloth using Recycled products",
    "Wear a shirt which is only made from recycled products for the whole day",
    "Use only eco-friendly products for the whole day"

];

function generateChallenge() {
    let randomIndex = Math.floor(Math.random() * challenges.length);
    document.getElementById("challengeDisplay").innerText = challenges[randomIndex];
}

// Example progress bar logic
function updateProgress() {
    let progress = 50;  // Example progress value
    document.getElementById('progress').style.width = progress + "%";
}

// Virtual Garden logic
function updateGarden() {
    let points = 50;  // Example points
    if (points > 40) {
        document.getElementById('gardenImage').src = 'big_plant.png';
    }
}
