import React from 'react'

function Home() {
    return (
        <div className="container text-center mt-5">
            <div className="row">
                <div className="col-sm-12">
                    <h1 className="fw-bold">Better clothing for the planet</h1>
                </div>
                <div className="col-sm-6 offset-sm-3">
                    <p className="text-muted ">Create screens directly in Method or add yout images from Sketch or Figma. You can even sync designs from your cloud storage! </p>
                </div>
                <div className="col-sm-12">
                    <a href="#" className="btn btn-outline-dark py-2 px-5"> Shop All</a>
                </div>
                <div className="col-sm-12 mt-5">
                    <iframe className="w-100" width="560" height="700" src="https://www.youtube.com/embed/u9FEg5qur14" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="col-sm-8 offset-sm-2 my-5">
                    <div className="row">
                        <div className="col-sm-3 mt-3">
                        <img className="w-100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/NewYorkTimes.svg/1200px-NewYorkTimes.svg.png">
                            </img>
                        </div>
                        <div className="col-sm-3">
                        <img className="w-100" src="https://upload.wikimedia.org/wikipedia/commons/f/f8/VOGUE_LOGO.svg">
                            </img>
                        </div>
                        <div className="col-sm-3">
                        <img className="w-100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Vanity_Fair_Logo.svg/1280px-Vanity_Fair_Logo.svg.png">
                            </img>
                        </div>
                        <div className="col-sm-3">
                        <img className="w-100" src="https://aptuscapitaladvisors.com/wp-content/uploads/2020/10/cnbc-1.png">
                            </img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
