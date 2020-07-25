import React from 'react'

function BigBanner() {
    return (
        <div>
            <div class="col-lg-6 card">
            <div class="card"> <img class="img-fluid"
                    src="https://static01.nyt.com/images/2016/08/06/us/00pain-web1/00pain-web1-superJumbo.jpg?quality=90&auto=webp" alt=""/>
                <div class="card-body">
                    <div class="news-title"><a href="#">
                            <h2 class=" title-small">Minorities Suffer From Unequal Pain Treatment</h2>
                        </a></div>
                    <p class="card-text">Some quick example text to build on the card title and make up
                        the
                        bulk of the card's content.</p>
                    <p class="card-text"><small class="text-time"><em>3 mins ago</em></small></p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default BigBanner
