import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
   return(`
        <ul class="list-group">
            ${WhoToFollowListItem(who)}
        </ul>
`) }

export default WhoToFollowList;