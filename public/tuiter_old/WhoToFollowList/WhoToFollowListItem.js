function WhoToFollowListItem(who) {
  return `
            ${who.map(
                (link) => `
                 <li class="list-group-item" >
                    <div class="row align-items-center justify-content-xl-around">
                      <div class="col-lg-2 col-xl-2 col-xxl-2">
                        <img src="${link.avatarIcon}" width="50px" class="rounded-circle" />
                      </div>
                      <div class="col-lg-6 col-xl-6 col-xxl-7 text-nowrap">
                          <div class="fw-bolder">
                          ${link.handle}
                          <span><i class="fas fa-check-circle"></i></span>
                      </div>
                      <div>@ ${link.userName}</div>
                    </div>
                    <div class="col-lg-1 col-xl-3 col-xxl-3">
                      <button type="button" class="btn btn-primary rounded-pill">Follow</button>
                    </div>
                  </li>
                `
              )
            .join("")}
    `
}
export default WhoToFollowListItem;
