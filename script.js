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
    output.insertBefore(changesDiv, output.childNodes[1]);
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

            followers = lines.slice(1, lines.indexOf(''));
            following = lines.slice(lines.indexOf('') + 2, lastUpdatedIndex);

            displayUsers();
            document.getElementById('lastUpdated').textContent = lastUpdatedText;
        };
        reader.onerror = (e) => console.error('Error reading file:', e);
        reader.readAsText(file);
    };

    fileInput.click();
}

function updateLastUpdatedTime() {
    lastUpdated = new Date().toLocaleString();
    document.getElementById('lastUpdated').textContent = `Last Updated: ${lastUpdated}`;
}

var modal1 = document.getElementById('myModal1');
var img1 = document.querySelector('img[src="ss/p1step1.png"]');
var modalImg1 = document.getElementById('img01');

img1.onclick = function() {
    modal1.style.display = 'flex';
    modalImg1.src = this.src;
}

var modal2 = document.getElementById('myModal2');
var img2 = document.querySelector('img[src="ss/p1step2.png"]');
var modalImg2 = document.getElementById('img02');

img2.onclick = function() {
    modal2.style.display = 'flex';
    modalImg2.src = this.src;
}

var modal3 = document.getElementById('myModal3');
var img3 = document.querySelector('img[src="ss/p1step3.png"]');
var modalImg3 = document.getElementById('img03');

img3.onclick = function() {
    modal3.style.display = 'flex';
    modalImg3.src = this.src;
}

var modal4 = document.getElementById('myModal4');
var img4 = document.querySelector('img[src="ss/p2step1.png"]');
var modalImg4 = document.getElementById('img04');

img4.onclick = function() {
    modal4.style.display = 'flex';
    modalImg4.src = this.src;
}

var modal5 = document.getElementById('myModal5');
var img5 = document.querySelector('img[src="ss/p2step2.png"]');
var modalImg5 = document.getElementById('img05');

img5.onclick = function() {
    modal5.style.display = 'flex';
    modalImg5.src = this.src;
}

var modal6 = document.getElementById('myModal6');
var img6 = document.querySelector('img[src="ss/p2step3.png"]');
var modalImg6 = document.getElementById('img06');

img6.onclick = function() {
    modal6.style.display = 'flex';
    modalImg6.src = this.src;
}

var modal7 = document.getElementById('myModal7');
var img7 = document.querySelector('img[src="ss/p2step4.png"]');
var modalImg7 = document.getElementById('img07');

img7.onclick = function() {
    modal7.style.display = 'flex';
    modalImg7.src = this.src;
}

var modal8 = document.getElementById('myModal8');
var img8 = document.querySelector('img[src="ss/p2step5.png"]');
var modalImg8 = document.getElementById('img08');

img8.onclick = function() {
    modal8.style.display = 'flex';
    modalImg8.src = this.src;
}

var modal9 = document.getElementById('myModal9');
var img9 = document.querySelector('img[src="ss/p3step1.png"]');
var modalImg9 = document.getElementById('img09');

img9.onclick = function() {
    modal9.style.display = 'flex';
    modalImg9.src = this.src;
}

var modal10 = document.getElementById('myModal10');
var img10 = document.querySelector('img[src="ss/p3step2.png"]');
var modalImg10 = document.getElementById('img10');

img10.onclick = function() {
    modal10.style.display = 'flex';
    modalImg10.src = this.src;
}

var modal11 = document.getElementById('myModal11');
var img11 = document.querySelector('img[src="ss/p3step3.png"]');
var modalImg11 = document.getElementById('img11');

img11.onclick = function() {
    modal11.style.display = 'flex';
    modalImg11.src = this.src;
}

var modal12 = document.getElementById('myModal12');
var img12 = document.querySelector('img[src="ss/p3step4.png"]');
var modalImg12 = document.getElementById('img12');

img12.onclick = function() {
    modal12.style.display = 'flex';
    modalImg12.src = this.src;
}

var modal13 = document.getElementById('myModal13');
var img13 = document.querySelector('img[src="ss/p3step5.png"]');
var modalImg13 = document.getElementById('img13');

img13.onclick = function() {
    modal13.style.display = 'flex';
    modalImg13.src = this.src;
}

var modal14 = document.getElementById('myModal14');
var img14 = document.querySelector('img[src="ss/p3step6.png"]');
var modalImg14 = document.getElementById('img14');

img14.onclick = function() {
    modal14.style.display = 'flex';
    modalImg14.src = this.src;
}

var closeButtons = document.getElementsByClassName('close');

for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
        this.parentElement.style.display = 'none';
    }
}

window.onclick = function(event) {
    if (event.target === modal1 || event.target === modal2 || event.target === modal3 || event.target === modal4 || event.target === modal5 || event.target === modal6 || event.target === modal7 || event.target === modal8 || event.target === modal9 || event.target === modal10 || event.target === modal11 || event.target === modal12 || event.target === modal13 || event.target === modal14 || event.key === "Escape") {
        modal1.style.display = 'none';
        modal2.style.display = 'none';
        modal3.style.display = 'none';
        modal4.style.display = 'none';
        modal5.style.display = 'none';
        modal6.style.display = 'none';
        modal7.style.display = 'none';
        modal8.style.display = 'none';
        modal9.style.display = 'none';
        modal10.style.display = 'none';
        modal11.style.display = 'none';
        modal12.style.display = 'none';
        modal13.style.display = 'none';
        modal14.style.display = 'none';
    }
}

document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', () => {
        const codeBlock = button.nextElementSibling.querySelector('code').innerText;
        navigator.clipboard.writeText(codeBlock).then(() => {
            button.innerText = "Copied!";
            setTimeout(() => {
                button.innerText = "Copy Code";
            }, 2000);
        }).catch(err => {
            console.log('Failed to copy text: ', err);
        });
    });
});
