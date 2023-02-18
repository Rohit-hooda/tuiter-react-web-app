import NavigationSidebar from "../NavigationSidebar/index.js";
// import PostItem from "../itempost/index.js";
import postListItems from "../PostList/index.js"
function exploreComponent() {
  $("#wd-explore").append(`
      <a href="../navigation.html">Go Back</a>
      <div class="row mt-2">
        <div class="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2">
        ${NavigationSidebar('Home')}
        </div>
        <div class="col-10 col-sm-10 col-md-10 col-lg-7 col-xl-6">
       ${postListItems()}
        </div>
      </div>
    `)
}
$(exploreComponent);
