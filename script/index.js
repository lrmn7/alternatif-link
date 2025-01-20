import { profileImage, links } from "./links.js";

function renderLinks(list) {
  const profileHTML = document.querySelector(".profile-image");
  const linksContainer = document.getElementById("links");

  // Set profile image
  profileHTML.setAttribute("src", profileImage);

  // Render links
  list.map((item) => {
    linksContainer.innerHTML += `
      <a class="link ${item.color}" href="${item.url}" target="_blank">
        <div class="link-content">
          <span class="link-name">${item.name}</span>
          ${
            item.description
              ? `<span class="link-description">${item.description}</span>`
              : ""
          }
        </div>
      </a>
    `;
  });
}

renderLinks(links);
