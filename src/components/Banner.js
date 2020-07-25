import React from 'react'

function Banner(props) {
    return (
        <div>
            <div className="col-md-3">
            <div className="card"> <img class="img-fluid"
                    src="https://ichef.bbci.co.uk/news/624/cpsprodpb/A65E/production/_90709524_a8f74dc1-ebc2-4c7d-b71c-8dde30c96386.jpg" alt=""/>
                <div className="card-img-overlay"> <span class="badge badge-pill badge-danger">News</span> </div>
                <div className="card-body">
                    <div className="news-title">
                        <h2 className=" title-small"><a href="#">Syria war: Why the battle for Aleppo matters</a>
                        </h2>
                    </div>
                    <p className="card-text"><small className="text-time"><em>3 mins ago</em></small></p>
                </div>
            </div>
        </div>

        </div>
    )
}

export default Banner
