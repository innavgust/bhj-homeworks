let tabs = document.getElementsByClassName("tab");
let tabsContent = document.getElementsByClassName("tab__contents");

function tabAct(tab) {
    tab.classList.add("tab_active");
}

function tabClose(tab) {
    tab.classList.remove("tab_active");
}

function tabContAct(tabCont) {
    tabCont.classList.add("tab__content_active");
}

function tabContClose(tabCont) {
    tabCont.classList.remove("tab__content_active");
}

tabs.addEventListener("click", function (e) {let activeTab = e.target;});

for (let i = 0; i < tabs.length; i++) {
    if (tabs.item(i) == activeTab) {
        tabs.item(i).tabAct;
        tabsContent.item(i).tabContAct;
    } else {
        tabs.item(i).tabClose;
        tabsContent.item(i).tabContClose;
    }
}
