import React from "react";

const Blogs = () => {
  return (
    <div className="text-center">
      <h1 className="text-muted bg-warning p-5 ">Some Basic Questions with Answers </h1>



      <div className="accordion container my-5 shadow-lg rounded" id="accordionExample">
  <div class="accordion-item p-5">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      What is the Purpose of &nbsp; <strong> React Router</strong>&nbsp; ?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <ul>
            <li><b>React Router</b> is a lightweight, fully-featured routing library for the React JavaScript library.</li>
            <li> <b>React Router</b> runs everywhere that React runs; on the web, on the server , and on React Native.</li>
            <li> It is developed and maintained by Remix Software and many amazing contributors.</li>
        </ul>
     
      </div>
    </div>
  </div>
  <div class="accordion-item p-5">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        How does &nbsp; <code>Context Api </code> &nbsp; work ?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      &nbsp; <code>Context Api </code> &nbsp;is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application. It’s aimed at solving the problem of prop drilling.&nbsp; <code>Context Api </code>  makes it easier to have our global and app-wide data available to all components therefore, making it easier and more accessible.
      </div>
    </div>
  </div>
  <div class="accordion-item p-5">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       What is &nbsp; <code> UseRef</code>&nbsp;  ?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference. A reference is an object having a special property current.
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Blogs;
