const links = [
  'twitter',
  "home",
  "hashtag",
  "bell",
  "envelope",
  "bookmark",
  "list",
  "user",
  "more",
];

const NavigationSidebar = (active) => {
  return `
    <div class="list-group">
        <a href="#" class="list-group-item">
            <i class="d-inline fab fa-twitter"></i>
            <span class="d-none d-xl-inline"></span>
        </a>
        <a href="/tuiter/HomeScreen/index.html" class="list-group-item ${active === "Home" ? 'active' : ''}">
            <i class="d-inline fas fa-home"></i>
            <span class="d-none d-xl-inline">Home</span>
        </a>
        <a href="/tuiter/explore_JS/index.html" class="list-group-item ${active === "Explore" ? 'active' : ''}">
            <i class="d-inline fas fa-hashtag"></i>
            <span class="d-none d-xl-inline">Explore</span>
        </a>
        <a href="#" class="list-group-item ${active === "Notifications" ? 'active' : ''}">
            <i class="d-inline fas fa-bell"></i>
            <span class="d-none d-xl-inline">Notifications</span>
        </a>
        <a href="#" class="list-group-item ${active === "Messages" ? 'active' : ''}">
            <i class="d-inline fas fa-envelope"></i>
            <span class="d-none d-xl-inline">Messages</span>
        </a>
        <a href="#" class="list-group-item ${active === "Bookmarks" ? 'active' : ''}">
            <i class="d-inline fas fa-bookmark"></i>
            <span class="d-none d-xl-inline">Bookmarks</span>
        </a>
        <a href="#" class="list-group-item ${active === "Lists" ? 'active' : ''}">
            <i class="d-inline fas fa-list"></i>
            <span class="d-none d-xl-inline">Lists</span>
        </a>
        <a href="#" class="list-group-item ${active === "Profile" ? 'active' : ''}">
            <i class="d-inline fas fa-user"></i>
            <span class="d-none d-xl-inline">Profile</span>
        </a>
        <a href="#" class="list-group-item ${active === "More" ? 'active' : ''}">
            <img src="/images/more-icon.png" style="width: 20px;">
            <span class="d-none d-xl-inline">More</span>
        </a>
    </div>
    `;
};
export default NavigationSidebar;
