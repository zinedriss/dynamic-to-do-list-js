// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select the Add Task button and store it in a constant
    const addButton = document.getElementById('add-task-btn'); 
    // Select the input field for new tasks
    const taskInput = document.getElementById('task-input'); 
    // Select the unordered list to display tasks
    const taskList = document.getElementById('task-list'); 

    // Function to add a new task to the list
    function addTask() {
        // Retrieve and trim the value from the input field
        const taskText = taskInput.value.trim(); 

        // Check if the input is not empty
        if (taskText === "") {
            alert("Please enter a task."); // Alert the user if the input is empty
            return; // Exit the function if the input is empty
        }

        // Create a new list item (li) element
        const li = document.createElement('li'); 
        li.textContent = taskText; // Set the text content of the li to the task text

        // Create a new button element for removing the task
        const removeButton = document.createElement('button'); 
        removeButton.textContent = "Remove"; // Set the button text
        removeButton.className = 'remove-btn'; // Add a class for styling

        // Assign an onclick event to the remove button
        removeButton.onclick = () => {
            // When the button is clicked, remove the li element from taskList
            taskList.removeChild(li); 
        };

        // Optionally, you can add a class for styling or indicating a completed task
        li.onclick = () => {
            // Toggle the 'completed' class on the list item
            li.classList.toggle('completed'); // Toggle the completed state when clicked
        };

        // Append the remove button to the li element
        li.appendChild(removeButton); 

        // Append the li to the taskList
        taskList.appendChild(li); 

        // Clear the task input field
        taskInput.value = ""; 
    }

    // Attach event listener to the Add Task button
    addButton.addEventListener('click', addTask);

    // Attach event listener to allow adding tasks with the Enter key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(); // Call addTask if the Enter key is pressed
        }
    });
});
