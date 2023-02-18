import posts from "./posts.js";
import postListItem from "./postListItems.js";

function postListItems() {
  return `
      <ul class="list-group list-group-flush">
        ${posts
          .map((post) => {
            return postListItem(post);
          })
          .join("")}
     </ul>
  `;
}

export default postListItems;
