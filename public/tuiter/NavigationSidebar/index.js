const NavigationSidebar = () => {
  return `
    <div class="list-group">
        <a href="#" class="list-group-item">
            <i class="d-inline fab fa-twitter"></i>
            <span class="d-none d-xl-inline"></span>
        </a>
        <a href="#" class="list-group-item">
            <i class="d-inline fas fa-home"></i>
            <span class="d-none d-xl-inline">Home</span>
        </a>
        <a href="#" class="list-group-item active">
            <i class="d-inline fas fa-hashtag"></i>
            <span class="d-none d-xl-inline">Explore</span>
        </a>
        <a href="#" class="list-group-item">
            <i class="d-inline fas fa-bell"></i>
            <span class="d-none d-xl-inline">Notifications</span>
        </a>
        <a href="#" class="list-group-item">
            <i class="d-inline fas fa-envelope"></i>
            <span class="d-none d-xl-inline">Messages</span>
        </a>
        <a href="#" class="list-group-item">
            <i class="d-inline fas fa-bookmark"></i>
            <span class="d-none d-xl-inline">Bookmarks</span>
        </a>
        <a href="#" class="list-group-item">
            <i class="d-inline fas fa-list"></i>
            <span class="d-none d-xl-inline">Lists</span>
        </a>
        <a href="#" class="list-group-item">
            <i class="d-inline fas fa-user"></i>
            <span class="d-none d-xl-inline">Profile</span>
        </a>
        <a href="#" class="list-group-item">
            <img src="/images/more-icon.png" style="width: 20px;">
            <span class="d-none d-xl-inline">More</span>
        </a>
    </div>
    `
};
export default NavigationSidebar;
