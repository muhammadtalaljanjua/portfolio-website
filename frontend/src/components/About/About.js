import React from "react";
import "./Styles.css";

const About = () => {
  return (
    <>
      <div class="basic-2">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="text-container">
                <h2>Dictumst Vestibulum Rhoncus Est Pellentesque Elit Ullamc</h2>
                <p>
                  Malesuada fames ac turpis egestas sed tempus urna et pharetra arcu non sodales
                  neque sodales ut. Orci eu lobortis elementum nibh tellus molestie nunc risus at
                  ultrices mi temp
                </p>
                <p>
                  At urna condimentum mattis pellentesque id nibh tortor ac turpis egestas integer
                  eget aliquet nibh tellus cras adipiscing enim
                </p>
                <ul class="list-unstyled li-space-lg">
                  <li class="media">
                    <i class="fas fa-square"></i>
                    <div class="media-body">
                      <strong>Id nibh tortor ac turpis</strong> sodales neque sodales ut orci eu
                      lobo
                    </div>
                  </li>
                  <li class="media">
                    <i class="fas fa-square"></i>
                    <div class="media-body">
                      <strong>Entesque id nibh tort</strong> eger eget aliquet nibh tellus cras tera
                    </div>
                  </li>
                  <li class="media">
                    <i class="fas fa-square"></i>
                    <div class="media-body">
                      <strong>Turpis egestas integer</strong> rcu non sodales neque sodales ut orci
                    </div>
                  </li>
                </ul>
                <a class="btn-solid-reg popup-with-move-anim" href="#description-lightbox">
                  Lightbox
                </a>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="image-container">
                <img class="img-fluid" src="images/description.png" alt="alternative" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
