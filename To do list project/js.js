document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const taskDeadlineInput = document.getElementById("task-deadline");
    const taskPriorityInput = document.getElementById("task-priority");
    const taskLabelInput = document.getElementById("task-label");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value;
        const taskDeadline = taskDeadlineInput.value;
        const taskPriority = taskPriorityInput.value;
        const taskLabel = taskLabelInput.value;

        if (taskText) {
            const li = document.createElement("li");
            li.innerHTML = `
                <span class="task-text">${taskText}</span>
                <div class="task-details">
                    <span class="deadline">Deadline: ${taskDeadline}</span>
                    <span class="priority">Priority: ${taskPriority}</span>
                    <span class="label">Label: ${taskLabel}</span>
                </div>
                <button class="delete">Delete</button>
            `;

            taskList.appendChild(li);

            taskInput.value = ""; // Clear the task description input field
            taskDeadlineInput.value = ""; // Clear the deadline input field
            taskPriorityInput.value = "High"; // Reset priority to "High"
            taskLabelInput.value = ""; // Clear the label input field

            const deleteButton = li.querySelector(".delete");
            deleteButton.addEventListener("click", function () {
                taskList.removeChild(li);
            });
        }
    });
});
