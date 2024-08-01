let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const darkModeToggle = document.getElementById("dark-mode-toggle");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage.filter(lead => lead.url);
    render(myLeads);
}

darkModeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let tabUrl = tabs[0].url;
        if (tabUrl) {
            let lead = {
                url: tabUrl,
                timestamp: new Date().toLocaleString()
            };
            myLeads.push(lead);
            localStorage.setItem("myLeads", JSON.stringify(myLeads));
            render(myLeads);
        }
    });
});

inputBtn.addEventListener("click", function() {
    let inputValue = inputEl.value;
    if (inputValue) {
        let lead = {
            url: inputValue,
            timestamp: new Date().toLocaleString()
        };
        myLeads.push(lead);
        inputEl.value = "";
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    }
});

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
});

function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <div class="favicon">
                    <img src="https://www.google.com/s2/favicons?sz=32&domain_url=${leads[i].url}">
                </div>
                <div class="lead-info">
                    <a target='_blank' href='${leads[i].url}'>
                        ${leads[i].url}
                    </a>
                    <span class="timestamp">${leads[i].timestamp}</span>
                </div>
            </li>
        `;
    }
    ulEl.innerHTML = listItems;
}

