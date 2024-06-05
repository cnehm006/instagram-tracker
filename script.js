let followers = [];
let following = [];
let lastUpdated = '';

function loadList() {
    const input = document.getElementById('userInput').value;
    const userList = input.split('\n').filter(Boolean);
    const listType = document.getElementById('listType').value;

    if (listType === 'followers') {
        followers = userList;
    } else {
        following = userList;
    }
    updateLastUpdatedTime();
    displayUsers();
}

function compareList() {
    const input = document.getElementById('userInput').value;
    const newList = input.split('\n').filter(Boolean);
    const listType = document.getElementById('listType').value;

    let currentList = listType === 'followers' ? followers : following;
    const newEntries = newList.filter(user => !currentList.includes(user));
    const removedEntries = currentList.filter(user => !newList.includes(user));

    if (listType === 'followers') {
        followers = newList;
    } else {
        following = newList;
    }
    
    updateLastUpdatedTime();
    displayUsers();
    displayChanges(newEntries, removedEntries, listType);
}

function displayUsers() {
    const followersOutput = document.getElementById('followersOutput');
    const followingOutput = document.getElementById('followingOutput');

    followersOutput.innerHTML = `<h2>Followers (${followers.length})</h2>`;
    followingOutput.innerHTML = `<h2>Following (${following.length})</h2>`;

    const followersList = document.createElement('div');
    followersList.className = 'entry-list';
    followers.forEach(user => {
        followersList.innerHTML += `<div>${user}</div>`;
    });

    const followingList = document.createElement('div');
    followingList.className = 'entry-list';
    following.forEach(user => {
        followingList.innerHTML += `<div>${user}</div>`;
    });

    followersOutput.appendChild(followersList);
    followingOutput.appendChild(followingList);
}

function displayChanges(newEntries, removedEntries, listType) {
    const output = listType === 'followers' ? document.getElementById('followersOutput') : document.getElementById('followingOutput');
    const changesDiv = document.createElement('div');
    changesDiv.innerHTML = `<h3>New Entries (${newEntries.length}):</h3><p>${newEntries.join(', ')}</p><h3>Removed Entries (${removedEntries.length}):</h3><p>${removedEntries.join(', ')}</p>`;
    output.insertBefore(changesDiv, output.childNodes[1]); // Inserts changes just below the count
}

function downloadList() {
    const data = `Followers:\n${followers.join('\n')}\n\nFollowing:\n${following.join('\n')}\n\nLast Updated: ${lastUpdated}`;
    const blob = new Blob([data], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'InstagramLists.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
}

function uploadList() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.txt';

    fileInput.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) {
            console.log('No file selected');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const content = e.target.result;
            const lines = content.split('\n');
            const lastUpdatedIndex = lines.findIndex(line => line.startsWith('Last Updated: '));
            const lastUpdatedText = lastUpdatedIndex !== -1 ? lines[lastUpdatedIndex] : 'Last Updated: Never';

            // Update the followers and following lists
            followers = lines.slice(1, lines.indexOf(''));  // Assuming followers are listed first until a blank line
            following = lines.slice(lines.indexOf('') + 2, lastUpdatedIndex);  // Assume following list ends just before the last updated line

            displayUsers();
            document.getElementById('lastUpdated').textContent = lastUpdatedText;
        };
        reader.onerror = (e) => console.error('Error reading file:', e);
        reader.readAsText(file);
    };

    fileInput.click(); // Automatically open file dialog
}


function updateLastUpdatedTime() {
    lastUpdated = new Date().toLocaleString();
    document.getElementById('lastUpdated').textContent = `Last Updated: ${lastUpdated}`;
}