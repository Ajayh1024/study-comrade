<script>
  // Function that takes input and callback
  function getUserData(input, callback) {
    console.log("Fetching user data...");
    setTimeout(() => {
      callback(input); // pass input to callback
    }, 2000); // simulating async work
  }

  // Callback function
  function displayUserData(data) {
    console.log("User Data Received:", data);
    alert("Hello " + data.name + " 👋 Age: " + data.age);
  }

  // Example usage
  let user = { name: "Ajay", age: 22 };
  getUserData(user, displayUserData);
</script>
