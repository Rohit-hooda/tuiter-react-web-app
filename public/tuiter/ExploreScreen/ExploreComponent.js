import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return `
        <div class="row align-items-center">
            <div class="col-11">
                <div class="input-group">
                    <span class="input-group-text bg-transparent border-end-0 rounded-end rounded-pill">
                        <i class="fas fa-search"></i>
                    </span>
                    <input type="text" class="form-control border-start-0 rounded-start rounded-pill"
                        placeholder="Search" />
                </div>
            </div>
            <div class="col-1 wd-cog">
                <a href="#" class="fas fa-cog fa-2x text-decoration-none"></a>
            </div>
        </div>
        <ul class="nav nav-tabs mt-2">
            <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="entertainment.html">Entertainment</a>
            </li>
        </ul>

        <div class="position-relative mt-2">
            <img src="/images/spacex.webp" class="card-img w-100">
            <h2 class="text-white position-absolute bottom-0 ps-2">SpaceX's Starship</h2>
        </div>

        ${PostSummaryList()}
    `;
};
export default ExploreComponent;
