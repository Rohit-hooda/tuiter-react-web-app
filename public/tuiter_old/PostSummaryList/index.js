import PostSummaryItems from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList  = () => {
  return `
        <ul class="list-group">
            ${PostSummaryItems(posts)}
        </ul>
`;
};

export default PostSummaryList;
