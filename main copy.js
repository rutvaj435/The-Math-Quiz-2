function addUser() {
    user1 = document.getElementById("user1").value;
    user2 = document.getElementById("user2").value
    localStorage.setItem("User 1", user1);
    localStorage.setItem("User 2", user2);
    
    window.location = "index.html"
}