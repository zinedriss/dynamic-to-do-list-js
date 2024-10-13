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
            return;
        }

        const li = document.createElement('li'); // Create a new list item
        li.textContent = taskText; // Set the text of the list item

        const removeButton = document.createElement('button'); // Create a remove button
        removeButton.textContent = "Remove"; // Set button text
        removeButton.className = 'remove-btn'; // Add class for styling

        // Add click event to remove the task
        removeButton.onclick = () => {
            taskList.removeChild(li); // Remove the list item when button is clicked
        };

        // Add a click event to toggle a completed task
        li.onclick = () => {
            li.classList.toggle('completed'); // Toggle 'completed' class on the list item
        };

        li.appendChild(removeButton); // Append the remove button to the list item
        taskList.appendChild(li); // Append the list item to the task list
        taskInput.value = ""; // Clear the input field
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
