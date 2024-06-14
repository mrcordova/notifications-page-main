const markAllReadBtn = document.querySelector(".notifications-mark-all-btn");

markAllReadBtn.addEventListener("click", (e) => {
  const numberOfUnreadaSpan = document.querySelector(
    ".notifications-title-number"
  );
  const unreadDivs = document.querySelectorAll(".notifications-not-read");
  let numberOfUnread = numberOfUnreadaSpan.textContent;
  for (const unreadDiv of unreadDivs) {
    const unreadSymnboSpan = unreadDiv.querySelector(
      ".notifications-not-read-symbol"
    );
    unreadDiv.classList.remove("notifications-not-read");
    unreadSymnboSpan.classList.remove("notifications-not-read-symbol");
    numberOfUnread--;
  }
  numberOfUnreadaSpan.textContent = numberOfUnread;
});
