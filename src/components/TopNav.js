import React from 'react'

function TopNav() {
    return (
        <div>
        <section class="top-nav">
            <nav class="navbar navbar-expand-lg py-0">
                <div class="container">
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="exCollapsingNavbar2">
                        <ul class="nav navbar-nav ">
                            <li className="nav-item active"> <a className="nav-link" href="#">Home <span
                                        className="sr-only">(current)</span></a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#">World</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#">Politics</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#">Business</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#">Science</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#">Sports</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#">Tech</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#">Travel</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#">Health</a> </li>
                        </ul>
                        <form class="ml-auto">
                            <div class="search">
                                <input type="text" class="form-control" maxlength="64" placeholder="Search" />
                                <button type="submit" class="btn btn-search"><i class="fa fa-search"></i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </section>
    
        </div>
    )
}

export default TopNav
