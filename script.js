document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn'); // Select the Add Task button
    const taskInput = document.getElementById('task-input'); // Select the input field
    const taskList = document.getElementById('task-list'); // Select the task list

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim the input value

        // Check if the input is not empty
        if (taskText === "") {
            alert("Please enter a task."); // Alert if input is empty
            return; // Exit the function if the input is empty
        }

        // Create a new li element
        const li = document.createElement('li'); 
        li.textContent = taskText; // Set its textContent to taskText

        // Create a new button element for removing the task
        const removeButton = document.createElement('button'); 
        removeButton.textContent = "Remove"; // Set button text
        removeButton.className = 'remove-btn'; // Add class name for styling

        // Assign an onclick event to the remove button
        removeButton.onclick = () => {
            taskList.removeChild(li); // Remove the li element from taskList
        };

        // Add click event to toggle the completed state of the task
        li.onclick = () => {
            li.classList.toggle('completed'); // Toggle 'completed' class on the list item
        };

        // Append the remove button to the li element
        li.appendChild(removeButton); 

        // Append the li to taskList
        taskList.appendChild(li); 

        // Clear the task input field
        taskInput.value = ""; 
    }

    // Event listener for adding task when button is clicked
    addButton.addEventListener('click', addTask);

    // Event listener for adding task with Enter key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(); // Call addTask if Enter is pressed
        }
    });
});
