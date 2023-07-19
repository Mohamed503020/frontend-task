"use strict";(self.webpackChunkfront_task=self.webpackChunkfront_task||[]).push([[524],{524:(v,l,a)=>{a.r(l),a.d(l,{HomeModule:()=>Z});var s=a(814),c=a(472),e=a(946),p=a(862);let m=(()=>{class t{constructor(n){this.HttpClient=n}getAllEmployee(n,o){return this.HttpClient.get(`https://reqres.in/api/users?page=${n}&per_page=${o}`)}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(p.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function d(t,i){if(1&t&&(e.TgZ(0,"tr")(1,"td"),e._UZ(2,"img",19),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",20)(8,"div",21),e._uU(9),e.qZA()(),e.TgZ(10,"td")(11,"a",22),e.O4$(),e.TgZ(12,"svg",23),e._UZ(13,"path",24),e.qZA(),e.kcU(),e.TgZ(14,"span",25),e._uU(15," Send Email"),e.qZA()()()()),2&t){const n=i.$implicit;e.xp6(2),e.Q6J("src",n.avatar,e.LSH),e.xp6(2),e.Oqu(n.first_name),e.xp6(2),e.Oqu(n.last_name),e.xp6(3),e.Oqu(n.email),e.xp6(2),e.MGl("href","mailto:",n.email,"",e.LSH)}}const u=function(t){return{active:t}};function h(t,i){if(1&t){const n=e.EpF();e.O4$(),e.kcU(),e.TgZ(0,"li",11)(1,"a",26),e.NdJ("click",function(){const P=e.CHM(n).$implicit,_=e.oxw();return e.KtG(_.goToPage(P))}),e._uU(2),e.qZA()()}if(2&t){const n=i.$implicit,o=e.oxw();e.Q6J("ngClass",e.VKq(2,u,o.currentPage===n)),e.xp6(2),e.Oqu(n)}}const g=function(t){return{disabled:t}},C=[{path:"",component:(()=>{class t{constructor(n){this.EmployeeService=n,this.isLoading=!0,this.employees=[],this.currentPage=1,this.perPage=6,this.totalItems=0,this.totalPages=0,this.pages=[]}ngOnInit(){this.fetchEmployees()}fetchEmployees(){this.EmployeeService.getAllEmployee(this.currentPage,this.perPage).subscribe({next:n=>{this.employees=n.data,this.totalItems=n.total,this.totalPages=Math.ceil(this.totalItems/this.perPage),this.pages=Array(this.totalPages).fill(0).map((o,r)=>r+1)},error:n=>console.log(n.message)})}nextPage(){this.currentPage<this.totalPages&&(this.currentPage++,this.fetchEmployees())}prevPage(){this.currentPage>1&&(this.currentPage--,this.fetchEmployees())}goToPage(n){n>=1&&n<=this.totalPages&&(this.currentPage=n,this.fetchEmployees())}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(m))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home"]],decls:43,vars:11,consts:[[1,"description","mt-5"],[1,"container"],[1,"container","mt-5","mb-4"],[1,"table-content","bg-white","rounded","p-2","shadow"],[1,"table-responsive"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],[1,"row"],[1,"col-sm-6"],["aria-label","Page navigation"],[1,"pagination","justify-content-end"],[1,"page-item",3,"ngClass"],["aria-label","Previous",1,"",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","32","height","32","viewBox","0 0 32 32","fill","none"],["d","M8 31.5L24 31.5C28.1421 31.5 31.5 28.1421 31.5 24L31.5 8C31.5 3.85786 28.1421 0.5 24 0.5L8 0.5C3.85786 0.5 0.5 3.85786 0.5 8L0.5 24C0.5 28.1421 3.85786 31.5 8 31.5Z","stroke","#E2E2EA","stroke-miterlimit","10"],["d","M14.414 16L18.707 20.293C18.8025 20.3852 18.8787 20.4956 18.9311 20.6176C18.9835 20.7396 19.0111 20.8708 19.0123 21.0036C19.0134 21.1364 18.9881 21.268 18.9378 21.3909C18.8875 21.5138 18.8133 21.6255 18.7194 21.7194C18.6255 21.8133 18.5139 21.8875 18.391 21.9378C18.2681 21.9881 18.1364 22.0134 18.0036 22.0122C17.8708 22.0111 17.7396 21.9835 17.6176 21.9311C17.4956 21.8787 17.3852 21.8025 17.293 21.707L12.293 16.707C12.1055 16.5195 12.0002 16.2651 12.0002 16C12.0002 15.7348 12.1055 15.4805 12.293 15.293L17.293 10.293C17.4816 10.1108 17.7342 10.01 17.9964 10.0123C18.2586 10.0146 18.5094 10.1198 18.6948 10.3052C18.8802 10.4906 18.9854 10.7414 18.9877 11.0036C18.99 11.2658 18.8892 11.5184 18.707 11.707L14.414 16Z","fill","#92929D"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],["aria-label","Next",1,"",3,"click"],["d","M17.586 16L13.293 11.707C13.1109 11.5184 13.0101 11.2658 13.0124 11.0036C13.0146 10.7414 13.1198 10.4905 13.3052 10.3051C13.4906 10.1197 13.7414 10.0146 14.0036 10.0123C14.2658 10.01 14.5184 10.1108 14.707 10.293L19.707 15.293C19.8945 15.4805 19.9998 15.7348 19.9998 16C19.9998 16.2651 19.8945 16.5194 19.707 16.707L14.707 21.707C14.5184 21.8891 14.2658 21.9899 14.0036 21.9876C13.7414 21.9854 13.4906 21.8802 13.3052 21.6948C13.1198 21.5094 13.0146 21.2586 13.0124 20.9964C13.0101 20.7342 13.1109 20.4816 13.293 20.293L17.586 16Z","fill","#92929D"],["alt","Avatar","width","50",1,"rounded-circle","border-info","border-4","border",3,"src"],[1,""],[1,"text-primary","fw-bold","email"],[1,"btn","btnEmail",3,"href"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none"],["d","M3.67124 20.4L21.1212 12.92C21.9312 12.57 21.9312 11.43 21.1212 11.08L3.67124 3.6C3.01124 3.31 2.28124 3.8 2.28124 4.51L2.27124 9.12C2.27124 9.62 2.64124 10.05 3.14124 10.11L17.2712 12L3.14124 13.88C2.64124 13.95 2.27124 14.38 2.27124 14.88L2.28124 19.49C2.28124 20.2 3.01124 20.69 3.67124 20.4Z","fill","white"],[1,"emailText"],[1,"page-link",3,"click"]],template:function(n,o){1&n&&(e.TgZ(0,"div")(1,"div",0)(2,"div",1)(3,"h2"),e._uU(4,"Users List"),e.qZA(),e.TgZ(5,"p"),e._uU(6,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, veniam? "),e.qZA()()()(),e.TgZ(7,"div",2)(8,"div",3)(9,"div",4)(10,"table",5)(11,"thead")(12,"tr")(13,"th"),e._uU(14,"Photo"),e.qZA(),e.TgZ(15,"th"),e._uU(16,"First Name"),e.qZA(),e.TgZ(17,"th"),e._uU(18,"Last Name"),e.qZA(),e.TgZ(19,"th"),e._uU(20,"Email"),e.qZA(),e.TgZ(21,"th"),e._uU(22,"Send Email"),e.qZA()()(),e.TgZ(23,"tbody"),e.YNc(24,d,16,5,"tr",6),e.qZA()()(),e.TgZ(25,"div",7)(26,"div",8)(27,"p"),e._uU(28),e.qZA()(),e.TgZ(29,"div",8)(30,"nav",9)(31,"ul",10)(32,"li",11)(33,"a",12),e.NdJ("click",function(){return o.prevPage()}),e.O4$(),e.TgZ(34,"svg",13),e._UZ(35,"path",14)(36,"path",15),e.qZA()()(),e.YNc(37,h,3,4,"li",16),e.kcU(),e.TgZ(38,"li",11)(39,"a",17),e.NdJ("click",function(){return o.nextPage()}),e.O4$(),e.TgZ(40,"svg",13),e._UZ(41,"path",14)(42,"path",18),e.qZA()()()()()()()()()),2&n&&(e.xp6(24),e.Q6J("ngForOf",o.employees),e.xp6(4),e.lnq("Showing ",(o.currentPage-1)*o.perPage+1,"-",(o.currentPage-1)*o.perPage+o.employees.length," of ",o.totalItems," items."),e.xp6(4),e.Q6J("ngClass",e.VKq(7,g,1===o.currentPage)),e.xp6(5),e.Q6J("ngForOf",o.pages),e.xp6(1),e.Q6J("ngClass",e.VKq(9,g,o.currentPage===o.totalPages)))},dependencies:[s.mk,s.sg],styles:["th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:20px;border:none}.btnEmail[_ngcontent-%COMP%]{color:#fff;padding:8px 24px;justify-content:center;align-items:center;gap:4px;background-color:#004a9b}@media only screen and (max-width: 800px){.emailText[_ngcontent-%COMP%]{display:none}.btnEmail[_ngcontent-%COMP%]{display:flex;gap:0;align-items:center;padding:5px 10px}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{font-size:14px}img[_ngcontent-%COMP%]{width:30px}td[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]{display:block;width:60px;word-wrap:break-word}}"]}),t})()}];let f=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.Bz.forChild(C),c.Bz]}),t})(),Z=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.ez,f]}),t})()}}]);