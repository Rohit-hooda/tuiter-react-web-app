const postListItems = (post) => {
    return `
        <li class="list-group-item">
            <div class="row align-top">
                  <div class="col-1" ><img src="${post.avatar}" class="rounded-circle" style="width: 45px;"/>
                  </div>
                  <div class="col-10">
                      <span><b>${post.userName}</b> 
                      <i class="fa-solid fa-circle-check"></i>
                      </span> 
                      <span style="color: darkgray">${post.annotation}</span>
                      <br>
                      <span>${post.title}</span>
                  </div>
                  <div class="col-1"><i class="fa-solid fa-ellipsis"></i></div>
            </div>
   
            <div class="card wd-article-card rounded-5 ms-4 mt-1">
                  <img class="card-img-top rounded-5 " src=${post.image}>
                  ${post.card_title === undefined ? '': `
                      <div class="card-body">           
                          <h6 class="card-title" style="color: lightgrey">${post.card_title}</h6>
                          <p class="card-text" style="color: darkgray">${post.card_content}</p>
                      </div>`
                  }
            </div>
            
            <div class="row mt-3 ms-5">
              <span class="col-3">
                <a href="#"><i class="fa-regular fa-comment wd-icon-config"></i></a>
                <span> ${post.comments}</span>
              </span>
              <span class="col-3">
                <a href="#"><i class="fa-solid fa-retweet wd-icon-config"></i></a>
                <span> ${post.retweets}</span>
              </span>
              <span class="col-3">
                <a class="wd-likes-red"><i class="fa-solid fa-heart wd-icon-config"></i></a>
                <span> ${post.likes}</span>
              </span>
              <span class="col-3">
                <a href="#"><i class="fa-solid fa-arrow-up-from-bracket wd-icon-config"></i></a>
                <span></span>
              </span>
            </div>
        </li>
      `;
  };
  
  export default postListItems;
  