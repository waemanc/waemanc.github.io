function showContent(section) {

const content = document.querySelector(".content");

if (section === "classes") { content.innerHTML =`<h2>Classes</h2> <p> The University of South Carolina offers a wide variety of classes and courses that students can take to complete their degree requirements and explore different areas of study. </p>`; }

else if (section === "resources") { content.innerHTML =`<h2>Resources</h2> <p> The University of South Carolina provides students with academic resources, support services, libraries, and other tools to help them succeed throughout their college experience. </p>`; }

else if (section === "textbooks") { content.innerHTML =`<h2>Textbooks</h2> <p> The textbooks section can help students find the books and other required materials needed for their classes at the University of South Carolina. </p>`;}

else if (section === "locations") { content.innerHTML =`<h2>Class Locations</h2> <p> The class locations section can help students find where their classes are located on campus and make it easier to navigate between buildings. </p>`;}

 }