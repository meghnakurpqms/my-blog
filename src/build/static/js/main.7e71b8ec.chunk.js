(this["webpackJsonpmy-blog"]=this["webpackJsonpmy-blog"]||[]).push([[0],{19:function(e,t,n){e.exports=n(34)},25:function(e,t,n){},26:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);n(20);var a=n(0),o=n.n(a),r=n(17),i=n.n(r),s=(n(25),n(26),function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Hello Welcome to my blog!"),o.a.createElement("p",null,"This is my fifth website. Don't judge me based on the website. I am work in progress! This is my second website using node.js. The first one was a disaster. You can read more about it in my article about my experience in node.js. I am really excited about this website since its the first time I am using React for developing the front end of a website. So far the experience has been good and I am sure with more practice and developing I can get good at it."),o.a.createElement("p",null,"Till a year ago, all I was doing was projects in data science. Since the covid pandemic began, I have been trying to learn software development. So this is my journey in learning full stack development and developing cool websites and products. I am sure its going to be a blast!"))}),l=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"About me"),o.a.createElement("p",null,"I am Meghna Kurup. I love coding and have a thirst for learning new things. This is my blog through which I am going to share  my experiences, likes and dislikes. This blog was created by me using node.js for the back-end, react for the front-end and mongo-db for the database. The blog is work in progress and hopefully I can turn it to something exciting. "),o.a.createElement("p",null,"As a person I am quite shy but once I get to know someone very well, I can be the goofiest person you know. When it comes to my working style I would like to believe that I am very sincere and work my best especially under pressure. Being under pressure is frustrating but it kinda gives me a thrill. "),o.a.createElement("p",null,"In my free time, I love watching youtube videos on anything and everything. I like painting though I am not good at it. I think one can enjoy something even though they are not good at it. I like stitching too. I hope that doesn't make me sound like a granny! Volunteering is something I enjoy even though I am someone who is basically shy. It goves me a chance to serve people and it is a very satisfying experience. Most of all, I love learning new things. I believe I am destined to do great things. If not now then soon. It takes time but I am working towards it. Like I mentioned somewhere in this blog, I am work in progress!"))},c=n(6),u=n.n(c),m=n(9),h=n(11),d=n(7),g=function(e){var t=e.articles;return o.a.createElement(o.a.Fragment,null,t.map((function(e,t){return o.a.createElement(d.b,{className:"article-list-item",key:t,to:"/article/".concat(e.name)},o.a.createElement("h3",null,e.title),o.a.createElement("p",null,e.content[0].substring(0,150),"..."))})))},p=function(e){var t=e.comments;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,"Comments:"),t.map((function(e,t){return o.a.createElement("div",{className:"comment",key:t},o.a.createElement("h4",null,e.username),o.a.createElement("p",null,e.text))})))},f=function(e){var t=e.articleName,n=e.upvotes,a=e.setArticleInfo,r=function(){var e=Object(m.a)(u.a.mark((function e(){var n,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/upvote"),{method:"post"});case 2:return n=e.sent,e.next=5,n.json();case 5:o=e.sent,a(o);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o.a.createElement("div",{id:"upvotes-section"},o.a.createElement("button",{onClick:function(){return r()}},"Add Upvote"),o.a.createElement("p",null,"This post has been upvoted ",n," times"))},w=function(e){var t=e.articleName,n=e.setArticleInfo,r=Object(a.useState)(""),i=Object(h.a)(r,2),s=i[0],l=i[1],c=Object(a.useState)(""),d=Object(h.a)(c,2),g=d[0],p=d[1],f=function(){var e=Object(m.a)(u.a.mark((function e(){var a,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/add-comment"),{method:"post",body:JSON.stringify({username:s,text:g}),headers:{"Content-Type":"application/json"}});case 2:return a=e.sent,e.next=5,a.json();case 5:o=e.sent,n(o),l(""),p("");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o.a.createElement("div",{id:"add-comment-form"},o.a.createElement("h3",null,"Add a Comment"),o.a.createElement("label",null,"Name:",o.a.createElement("input",{type:"text",value:s,onChange:function(e){return l(e.target.value)}})),o.a.createElement("label",null,"Comment:",o.a.createElement("textarea",{rows:"4",cols:"50",value:g,onChange:function(e){return p(e.target.value)}})),o.a.createElement("button",{onClick:function(){return f()}},"Add Comment"))},y=function(){return o.a.createElement("h1",null,"404: Not Found")},b=[{name:"learn-react",title:"My tryst with React",content:["Welcome! So I thought I would share what I felt while developing in React. This is actually the first website where I have used React and it is the first time I have used React. My experience is going to be based on my previous experience with Front end development using HTML and CSS. I have also worked a bit with AngularJS and by a bit I mean one page.","When compared to HTML and CSS I found React was not as simple but this would be because I am very familiear with HTML and CSS. React does use a bit of HTML. When we write in JSX it uses HTML tags for returning elements to the page. I don't remember much of Angular but I remember that I found it difficult to understand it. When compared to AngularJS, React was much more simple and easy to understand.","The other good thing I liked about React was it was less hassle compared to HTML. In HTML you have to write div inside div or elements for each page or part. React just makes it very modular and reusable and that was fantastic. You write less code and can reuse code to develop similar components.","I think React is worth trying and was simple for someone who only knows HTML and CSS. I think I am going to try using it more and get familiar with it. I should be great and maybe I can use it to make this blog better!"]},{name:"learn-node",title:"My experience with node.js",content:['As stated by the website node.js, it is an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.',"This is in contrast to today's more common concurrency model, in which OS threads are employed. Thread-based networking is relatively inefficient and very difficult to use. Furthermore, users of Node.js are free from worries of dead-locking the process, since there are no locks. Almost no function in Node.js directly performs I/O, so the process never blocks. Because nothing blocks, scalable systems are very reasonable to develop in Node.js.","Coming to my experience, first website with node.js was a disaster. I had no idea where to start and what to use. Which framework would be best suited and I had to develop it for an assignment for my database class. Developing that website in node.js was my choice as I wanted to learn using it but the closer I got to my deadline I realised it was very bold of me to choose node.js for development with no background in web developmentand with no time left for learning. I somehow developed a website using HTML, CSS and ExpressJS with a MySQL database. My TA was understanding enough to grade me solely on my database. Though he did deduct point on my presentation but a 90/100 for a website that hangs a lot was a lot more than I had expected.","My second website using node.js was and is much better because I am creating it while going through the resources and material provided in a course at LinkedIn Learning. The course was very hands-on. The instructer first showed how to develop the front end, back end, the database, integrating everything and finally deploying the website on AWS. I enjoyed the flow of the course and in general felt that node.js is not all that bad. After this course I am planning to either enhance this website or try developing one of my own. We will see! I am sure node.js has a lot more complex features than the ones used for this website but the course and website was a good start."]},{name:"my-thoughts-on-resumes",title:"My Thoughts on Resumes",content:["Today is the day I talk about something which scares most people: resumes.\n            Creating a resume can be a daunting task because, well, it's the first step in getting a job. It could be a deal breaker. Your resume needs to be good to atleast get through the first step in getting a call for the first round of interviews by a company and a plain resume will not help. ","I have had my struggles in creating my resume and I still do struggle with it. Being a fresher it is difficult to list out your talents in a way such that you have achieved something. while creating my resume and while going through other resumes I have felt that you should not shy away from showing yourself off, especially as a fresher. Your resume should sell your work as a person and modesty is not an option.","One of the points I was told by a senior was to use STAR which stands for Situation-Task-Action-Result. Describing your projects and work experience using this makes your case more convincing. What the situation, what were your tasks, what did you decide to do and approach it and finally what did you achieve as a result for the project or experience. It shows the recruiter that you can analyze and think clearly in a project or while working.","The other thing I have noticed is that it always helps when you quantify your results. How much have you improve the project. I achieved 55% more viewership, I increased the efficiency of the model by 45%. These numbers add value to your achievements and shows that your results were worth something.","These have been my experiences with creating a resume. Constant uodating, proof reading and rewriting is something I do on a regular basis and it's still going on. I haven't had a lot of luck with my resume but hoping all my efforts does go to some use and my resume does finally get picked to land my dream job. I hope you had fun reading this article and you can comment on what were your experiences while creating your resume and what you think works best."]}],v=function(e){var t=e.match.params.name,n=b.find((function(e){return e.name===t})),r=Object(a.useState)({upvotes:0,comments:[]}),i=Object(h.a)(r,2),s=i[0],l=i[1];if(Object(a.useEffect)((function(){(function(){var e=Object(m.a)(u.a.mark((function e(){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,console.log(a),l(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),!n)return o.a.createElement(y,null);var c=b.filter((function(e){return e.name!==t}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,n.title),o.a.createElement(f,{articleName:t,upvotes:s.upvotes,setArticleInfo:l}),n.content.map((function(e,t){return o.a.createElement("p",{key:t},e)})),o.a.createElement(p,{comments:s.comments}),o.a.createElement(w,{articleName:t,setArticleInfo:l}),o.a.createElement("h3",null,"Other Articles:"),o.a.createElement(g,{articles:c}))},I=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Articles"),o.a.createElement(g,{articles:b}))},k=function(){return o.a.createElement("nav",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(d.b,{to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(d.b,{to:"/about"},"About")),o.a.createElement("li",null,o.a.createElement(d.b,{to:"/articles-list"},"Articles"))))},E=n(1);n(33);var j=function(){return o.a.createElement(d.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(k,null),o.a.createElement("div",{id:"page-body"},o.a.createElement(E.c,null,o.a.createElement(E.a,{path:"/",component:s,exact:!0}),o.a.createElement(E.a,{path:"/about",component:l}),o.a.createElement(E.a,{path:"/article/:name",component:v}),o.a.createElement(E.a,{path:"/articles-list",component:I}),o.a.createElement(E.a,{component:y})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.7e71b8ec.chunk.js.map