import{a as Gi,b as Qo,c as Zo,d as si,e as Yo,f as Mn}from"./chunk-4EIWVX2F.js";import{a as kt,b as No}from"./chunk-XID7LZNZ.js";import{A as Rt,Aa as xe,B as To,Ba as jo,C as So,Ca as ht,D as Ui,Da as oi,E as ko,Ea as Wo,F as we,Fa as tt,G as At,Ga as Ee,H as bt,Ha as Ko,I as Oo,Ia as ft,J as On,Ja as Go,K as vi,L as Ni,M as Mo,Ma as st,N as ji,Na as Ae,O as De,Pa as Be,Q as Zt,Qa as xi,R as Eo,Ra as He,S as et,Sa as ri,T as Qi,U as Wi,Ua as ai,V as qo,W as se,X as V,Y as We,Za as Ht,_ as Y,_a as Qe,a as mt,b as ut,ba as Tt,c as Hi,ca as Po,d as _i,da as Vo,e as Gt,ea as Xt,f as _o,fa as St,g as bo,ga as at,h as vo,ha as Lo,ia as Ge,j as wt,ja as Jt,ka as zo,l as Lt,la as yi,ma as ei,n as yo,na as $o,o as Ce,oa as ti,p as Re,pa as Ro,q as bi,qa as ii,r as Co,ra as Ao,s as xo,sa as Bo,t as zt,ta as ni,u as wo,ua as Ci,v as It,va as Ho,w as Io,wa as Q,x as $t,xa as Bt,y as Sn,ya as Ki,z as kn,za as Uo}from"./chunk-TC6PUFBD.js";import{c as ge,d as Do}from"./chunk-SFFLDQGC.js";import{$ as eo,$a as G,$b as Yt,A as yt,Aa as In,Ab as ke,B as L,Ba as p,Bb as ae,C as X,Ca as d,Cb as U,Da as u,Db as dt,E as Je,Ea as q,Eb as uo,F as j,Fa as F,Ga as R,Ha as T,I as Te,J as f,Ja as _,Jb as Ai,K as g,Ka as c,Kb as ho,L as ue,La as he,M as S,Ma as me,Na as O,Nb as Kt,O as I,Oa as $,P as pt,Pa as v,Pb as Bi,Qa as y,Qb as fo,R as Ct,Rb as go,Sb as rt,Ta as K,Tb as Tn,U as Me,Ua as C,Va as B,Wa as ye,Wb as _t,Xa as xt,Y as Jn,Ya as qe,Z as ot,Za as Fe,_ as $e,_a as Pe,aa as to,ab as zi,b as Gn,ba as s,bb as ce,ca as io,cb as H,db as re,dc as Fo,e as fi,eb as Dt,fa as M,g as Qt,ga as no,gb as ao,hb as so,hc as Le,ia as x,ib as lo,j as Pt,ja as J,jb as co,k as vn,ka as oo,kb as $i,la as ro,lb as Ri,m as gi,ma as E,n as Zn,nb as A,oa as m,pb as po,qb as P,r as Yn,ra as b,rb as fe,sa as a,t as Vt,ta as Se,tb as Wt,u as Xn,ua as ve,ub as mo,va as oe,wa as k,x as yn,xa as te,xb as ie,y as Cn,ya as xn,yb as Ve,za as wn,zb as Z}from"./chunk-FRSQSI7O.js";import{a as W,b as je,g as Ie}from"./chunk-GAL4ENT6.js";var li=class t{constructor(o,e){this._authFacade=o;this._store=e;this._authFacade.authUser$.subscribe(i=>{i&&(!i.name||i.name.trim()==="")&&(this.showProfileUpdate=!0,this.isProfileUpdateClosable=!1)})}showProfileUpdate=!1;isProfileUpdateClosable=!0;sidebarVisible=!1;onProfileUpdateComplete(){this.showProfileUpdate=!1,this.isProfileUpdateClosable=!0}toggleSidebar(){this.sidebarVisible=!this.sidebarVisible}static \u0275fac=function(e){return new(e||t)(M(Le),M(Yt))};static \u0275cmp=x({type:t,selectors:[["app-user"]],standalone:!1,decls:9,vars:3,consts:[[1,"relative","flex","w-full","bg-surface-200","antialiased","overflow-auto","overflow-x-hidden","min-h-screen"],[1,"sticky","top-0","hidden","h-full","w-[250px]","lg:block"],[1,"hidden","md:block","h-full"],[1,"relative","w-full","overflow-auto","overflow-x-hidden","max-h-screen"],[3,"menuClick"],[1,"m-0"],[1,"md:hidden",3,"visible"],[3,"isOpenChange","profileUpdated","isOpen","closable"]],template:function(e,i){e&1&&(p(0,"div",0)(1,"aside",1),u(2,"app-sidebar",2),d(),p(3,"div",3)(4,"app-header",4),_("menuClick",function(){return i.toggleSidebar()}),d(),p(5,"div",5),u(6,"router-outlet"),d()()(),u(7,"app-sidebar",6),p(8,"app-profile-update",7),_("isOpenChange",function(r){return i.showProfileUpdate=r})("profileUpdated",function(){return i.onProfileUpdateComplete()}),d()),e&2&&(s(7),a("visible",i.sidebarVisible),s(),a("isOpen",i.showProfileUpdate)("closable",i.isProfileUpdateClosable))},encapsulation:2})};var ya=["loadMoreTrigger"],Ca=t=>({$implicit:t});function xa(t,o){t&1&&R(0)}function wa(t,o){if(t&1&&(q(0),m(1,xa,1,0,"ng-container",8),F()),t&2){let e=c(),i=K(5);s(),a("ngTemplateOutlet",e.loadingTemplate||i)}}function Ia(t,o){t&1&&R(0)}function Ta(t,o){t&1&&(p(0,"div",9),C(1,"Loading..."),d())}function Sa(t,o){t&1&&(p(0,"div",9),C(1," No items found "),d())}var ze=class t{loadMoreData;itemTemplate;loadingTemplate;emptyMessage="No items found";initialPage=1;rootMargin="100px";threshold=.1;identifier="load-more-trigger-default";itemSelected=new I;loadMoreTrigger;observer=null;items=[];loading=!1;currentPage=1;hasMore=!0;error=!1;ngOnInit(){this.currentPage=this.initialPage,this.loadInitialData()}ngAfterViewInit(){this.setupIntersectionObserver()}ngOnDestroy(){this.observer&&this.observer.disconnect()}setupIntersectionObserver(){let o={root:null,rootMargin:this.rootMargin,threshold:this.threshold};this.observer=new IntersectionObserver(e=>{e.forEach(i=>{i.isIntersecting&&!this.loading&&this.hasMore&&!this.error&&this.loadMore()})},o),this.loadMoreTrigger&&this.observer.observe(this.loadMoreTrigger.nativeElement)}loadInitialData(){return Ie(this,null,function*(){if(!this.loadMoreData){console.error("loadMoreData function is not provided");return}yield this.loadData(this.initialPage)})}loadData(o){return Ie(this,null,function*(){if(!(this.loading||!this.hasMore||!this.loadMoreData)){this.loading=!0,this.error=!1;try{let e=yield this.loadMoreData(o);if(!e)throw new Error("No response from loadMoreData");o===this.initialPage?this.items=e.items||[]:this.items=[...this.items,...e.items||[]],this.currentPage=o,this.hasMore=e.hasMore}catch(e){console.error("Error loading data:",e),this.error=!0,this.hasMore=!1}finally{this.loading=!1}}})}loadMore(){return Ie(this,null,function*(){!this.loading&&this.hasMore&&!this.error&&(yield this.loadData(this.currentPage+1))})}onItemSelect(o){this.itemSelected.emit(o)}reset(){this.items=[],this.currentPage=this.initialPage,this.hasMore=!0,this.error=!1,this.loadInitialData()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-infinite-scroll"]],viewQuery:function(e,i){if(e&1&&$(ya,5),e&2){let n;v(n=y())&&(i.loadMoreTrigger=n.first)}},inputs:{loadMoreData:"loadMoreData",itemTemplate:"itemTemplate",loadingTemplate:"loadingTemplate",emptyMessage:"emptyMessage",initialPage:"initialPage",rootMargin:"rootMargin",threshold:"threshold",identifier:"identifier"},outputs:{itemSelected:"itemSelected"},decls:9,vars:7,consts:[["defaultLoadingTemplate",""],["loadMoreTrigger",""],[1,"w-full","relative"],[1,"w-full"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","py-4 text-center text-gray-600",4,"ngIf"],[1,"h-5","w-full",3,"id"],[4,"ngTemplateOutlet"],[1,"py-4","text-center","text-gray-600"]],template:function(e,i){e&1&&(p(0,"div",2)(1,"div",3),m(2,wa,2,1,"ng-container",4)(3,Ia,1,0,"ng-container",5)(4,Ta,2,0,"ng-template",null,0,A)(6,Sa,2,0,"div",6),d(),u(7,"div",7,1),d()),e&2&&(s(2),a("ngIf",i.loading),s(),a("ngTemplateOutlet",i.itemTemplate)("ngTemplateOutletContext",H(5,Ca,i.items)),s(3),a("ngIf",!i.loading&&i.items.length===0),s(),a("id",i.identifier))},dependencies:[U,Z,ae],encapsulation:2})};var nt=class t{constructor(o){this._httpService=o}POSTS_ENDPOINT="/api/posts";getAllPosts(){return this._httpService.get(this.POSTS_ENDPOINT)}getPostById(o){return this._httpService.get(`${this.POSTS_ENDPOINT}/${o}`)}createPost(o){return this._httpService.post(this.POSTS_ENDPOINT,o)}updatePost(o,e){return this._httpService.put(`${this.POSTS_ENDPOINT}/${o}`,e)}deletePost(o){return this._httpService.delete(`${this.POSTS_ENDPOINT}/${o}`)}toggleLike(o){return this._httpService.post(`${this.POSTS_ENDPOINT}/${o}/like`,{})}getUserPosts(o=1,e=3,i=""){return this._httpService.get(`${this.POSTS_ENDPOINT}/user/${i}`,{page:o,limit:e})}getFeed(o=1,e=10){return this._httpService.get(`${this.POSTS_ENDPOINT}/feed`,{page:o,limit:e})}generatePost(o=""){return this._httpService.post(`${this.POSTS_ENDPOINT}/generate`,{prompt:o})}static \u0275fac=function(e){return new(e||t)(Je(Tt))};static \u0275prov=L({token:t,factory:t.\u0275fac,providedIn:"root"})};var Ot=class t{constructor(o){this._httpService=o}PROFILE_ENDPOINT="/api/user";updateMe(o){return this._httpService.put(`${this.PROFILE_ENDPOINT}/me`,o)}searchUsers(o,e=1){return this._httpService.get(`${this.PROFILE_ENDPOINT}/search`,{search:o,page:e})}getUserById(o){return this._httpService.get(`${this.PROFILE_ENDPOINT}/${o}`)}static \u0275fac=function(e){return new(e||t)(Je(Tt))};static \u0275prov=L({token:t,factory:t.\u0275fac,providedIn:"root"})};var gt=class t{constructor(o){this._authFacade=o;this._authFacade.authUser$.subscribe(e=>{this._currentUser=e})}_currentUser;get isUser(){return this._currentUser?.roles.includes(ge.user.enum)||!1}get isModerator(){return this._currentUser?.roles.includes(ge.moderator.enum)||!1}get isAdmin(){return this._currentUser?.roles.includes(ge.admin.enum)||!1}get currentUser(){return this._currentUser}getHighestRole(){return!this._currentUser?.roles||this._currentUser.roles.length===0?ge.user.name:this._currentUser.roles.includes(ge.admin.enum)?ge.admin.name:this._currentUser.roles.includes(ge.moderator.enum)?ge.moderator.name:ge.user.name}getHighestRoleFromRoles(o){return!o||o.length===0?ge.user.enum:o.includes(ge.admin.enum)?ge.admin.enum:o.includes(ge.moderator.enum)?ge.moderator.enum:ge.user.enum}static \u0275fac=function(e){return new(e||t)(Je(Le))};static \u0275prov=L({token:t,factory:t.\u0275fac,providedIn:"root"})};var ka=["*"];function Oa(t,o){if(t&1&&(p(0,"span",3),C(1),d()),t&2){let e=c();s(),B(e.label)}}function Ma(t,o){if(t&1&&u(0,"span",5),t&2){let e=c(2);k(e.icon),a("ngClass","p-avatar-icon")}}function Ea(t,o){if(t&1&&m(0,Ma,1,3,"span",4),t&2){let e=c(),i=K(5);a("ngIf",e.icon)("ngIfElse",i)}}function qa(t,o){if(t&1){let e=T();p(0,"img",7),_("error",function(n){f(e);let r=c(2);return g(r.imageError(n))}),d()}if(t&2){let e=c(2);a("src",e.image,$e),b("aria-label",e.ariaLabel)}}function Fa(t,o){if(t&1&&m(0,qa,1,2,"img",6),t&2){let e=c();a("ngIf",e.image)}}var Pa=({dt:t})=>`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${t("avatar.width")};
    height: ${t("avatar.height")};
    font-size: ${t("avatar.font.size")};
    color: ${t("avatar.color")};
    background: ${t("avatar.background")};
    border-radius: ${t("avatar.border.radius")};
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: ${t("avatar.icon.size")};
    width: ${t("avatar.icon.size")};
    height: ${t("avatar.icon.size")};
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: ${t("avatar.lg.width")};
    height: ${t("avatar.lg.width")};
    font-size: ${t("avatar.lg.font.size")};
}

.p-avatar-lg .p-avatar-icon {
    font-size: ${t("avatar.lg.icon.size")};
    width: ${t("avatar.lg.icon.size")};
    height: ${t("avatar.lg.icon.size")};
}

.p-avatar-xl {
    width: ${t("avatar.xl.width")};
    height: ${t("avatar.xl.width")};
    font-size: ${t("avatar.xl.font.size")};
}

.p-avatar-xl .p-avatar-icon {
    font-size: ${t("avatar.xl.font.size")};
    width: ${t("avatar.xl.icon.size")};
    height: ${t("avatar.xl.icon.size")};
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-inline-start: ${t("avatar.group.offset")};
}

.p-avatar-group .p-avatar {
    border: 2px solid ${t("avatar.group.border.color")};
}

.p-avatar-group .p-avatar-lg + .p-avatar-lg {
    margin-inline-start: ${t("avatar.lg.group.offset")};
}

.p-avatar-group .p-avatar-xl + .p-avatar-xl {
    margin-inline-start: ${t("avatar.xl.group.offset")};
}
`,Va={root:({props:t})=>["p-avatar p-component",{"p-avatar-image":t.image!=null,"p-avatar-circle":t.shape==="circle","p-avatar-lg":t.size==="large","p-avatar-xl":t.size==="xlarge"}],label:"p-avatar-label",icon:"p-avatar-icon"},Jo=(()=>{class t extends Y{name="avatar";theme=Pa;classes=Va;static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var Ze=(()=>{class t extends Q{label;icon;image;size="normal";shape="square";style;styleClass;ariaLabel;ariaLabelledBy;onImageError=new I;_componentStyle=j(Jo);imageError(e){this.onImageError.emit(e)}get hostClass(){return this.styleClass}static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-avatar"]],hostVars:19,hostBindings:function(i,n){i&2&&(b("data-pc-name","avatar")("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledBy),oe(n.style),k(n.hostClass),ve("p-avatar",!0)("p-component",!0)("p-avatar-circle",n.shape==="circle")("p-avatar-lg",n.size==="large")("p-avatar-xl",n.size==="xlarge")("p-avatar-image",n.image!=null))},inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",style:"style",styleClass:"styleClass",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onImageError:"onImageError"},features:[G([Jo]),E],ngContentSelectors:ka,decls:6,vars:2,consts:[["iconTemplate",""],["imageTemplate",""],["class","p-avatar-text",4,"ngIf","ngIfElse"],[1,"p-avatar-text"],[3,"class","ngClass",4,"ngIf","ngIfElse"],[3,"ngClass"],[3,"src","error",4,"ngIf"],[3,"error","src"]],template:function(i,n){if(i&1&&(he(),me(0),m(1,Oa,2,1,"span",2)(2,Ea,1,2,"ng-template",null,0,A)(4,Fa,1,1,"ng-template",null,1,A)),i&2){let r=K(3);s(),a("ngIf",n.label)("ngIfElse",r)}},dependencies:[U,ie,Z,V],encapsulation:2,changeDetection:0})}return t})(),er=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=J({type:t});static \u0275inj=X({imports:[Ze,V,V]})}return t})();var tr=(()=>{class t extends xe{static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["AngleDownIcon"]],features:[E],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z","fill","currentColor"]],template:function(i,n){i&1&&(ue(),p(0,"svg",0),u(1,"path",1),d()),i&2&&(k(n.getClassNames()),b("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return t})();var ir=(()=>{class t extends xe{static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["AngleRightIcon"]],features:[E],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z","fill","currentColor"]],template:function(i,n){i&1&&(ue(),p(0,"svg",0),u(1,"path",1),d()),i&2&&(k(n.getClassNames()),b("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return t})();var Xi=(()=>{class t extends xe{static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["ChevronDownIcon"]],features:[E],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z","fill","currentColor"]],template:function(i,n){i&1&&(ue(),p(0,"svg",0),u(1,"path",1),d()),i&2&&(k(n.getClassNames()),b("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return t})();var nr=(()=>{class t extends xe{static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["ChevronRightIcon"]],features:[E],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z","fill","currentColor"]],template:function(i,n){i&1&&(ue(),p(0,"svg",0),u(1,"path",1),d()),i&2&&(k(n.getClassNames()),b("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return t})();var or=(()=>{class t extends xe{static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["MinusIcon"]],features:[E],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(i,n){i&1&&(ue(),p(0,"svg",0),u(1,"path",1),d()),i&2&&(k(n.getClassNames()),b("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return t})();var rr=(()=>{class t extends xe{pathId;ngOnInit(){this.pathId="url(#"+De()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["PlusIcon"]],features:[E],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(ue(),p(0,"svg",0)(1,"g"),u(2,"path",1),d(),p(3,"defs")(4,"clipPath",2),u(5,"rect",3),d()()()),i&2&&(k(n.getClassNames()),b("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),s(),b("clip-path",n.pathId),s(3),a("id",n.pathId))},encapsulation:2})}return t})();var ar=(()=>{class t extends xe{pathId;ngOnInit(){this.pathId="url(#"+De()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["RefreshIcon"]],features:[E],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M6.77051 5.96336C6.84324 5.99355 6.92127 6.00891 7.00002 6.00854C7.07877 6.00891 7.1568 5.99355 7.22953 5.96336C7.30226 5.93317 7.36823 5.88876 7.42357 5.83273L9.82101 3.43529C9.93325 3.32291 9.99629 3.17058 9.99629 3.01175C9.99629 2.85292 9.93325 2.70058 9.82101 2.5882L7.42357 0.190763C7.3687 0.131876 7.30253 0.0846451 7.22901 0.0518865C7.15549 0.019128 7.07612 0.00151319 6.99564 9.32772e-05C6.91517 -0.00132663 6.83523 0.0134773 6.7606 0.0436218C6.68597 0.0737664 6.61817 0.118634 6.56126 0.175548C6.50435 0.232462 6.45948 0.300257 6.42933 0.374888C6.39919 0.449519 6.38439 0.529456 6.38581 0.609933C6.38722 0.690409 6.40484 0.769775 6.4376 0.843296C6.47036 0.916817 6.51759 0.982986 6.57647 1.03786L7.95103 2.41241H6.99998C5.46337 2.41241 3.98969 3.02283 2.90314 4.10938C1.81659 5.19593 1.20618 6.66961 1.20618 8.20622C1.20618 9.74283 1.81659 11.2165 2.90314 12.3031C3.98969 13.3896 5.46337 14 6.99998 14C8.53595 13.9979 10.0084 13.3868 11.0945 12.3007C12.1806 11.2146 12.7917 9.74218 12.7938 8.20622C12.7938 8.04726 12.7306 7.89481 12.6182 7.78241C12.5058 7.67001 12.3534 7.60686 12.1944 7.60686C12.0355 7.60686 11.883 7.67001 11.7706 7.78241C11.6582 7.89481 11.5951 8.04726 11.5951 8.20622C11.5951 9.11504 11.3256 10.0035 10.8207 10.7591C10.3157 11.5148 9.59809 12.1037 8.75845 12.4515C7.9188 12.7993 6.99489 12.8903 6.10353 12.713C5.21217 12.5357 4.3934 12.0981 3.75077 11.4554C3.10813 10.8128 2.67049 9.99404 2.49319 9.10268C2.31589 8.21132 2.40688 7.2874 2.75468 6.44776C3.10247 5.60811 3.69143 4.89046 4.44709 4.38554C5.20275 3.88063 6.09116 3.61113 6.99998 3.61113H7.95098L6.57647 4.98564C6.46423 5.09802 6.40119 5.25035 6.40119 5.40918C6.40119 5.56801 6.46423 5.72035 6.57647 5.83273C6.63181 5.88876 6.69778 5.93317 6.77051 5.96336Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(ue(),p(0,"svg",0)(1,"g"),u(2,"path",1),d(),p(3,"defs")(4,"clipPath",2),u(5,"rect",3),d()()()),i&2&&(k(n.getClassNames()),b("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),s(),b("clip-path",n.pathId),s(3),a("id",n.pathId))},encapsulation:2})}return t})();var sr=(()=>{class t extends xe{pathId;ngOnInit(){this.pathId="url(#"+De()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["SearchIcon"]],features:[E],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(ue(),p(0,"svg",0)(1,"g"),u(2,"path",1),d(),p(3,"defs")(4,"clipPath",2),u(5,"rect",3),d()()()),i&2&&(k(n.getClassNames()),b("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),s(),b("clip-path",n.pathId),s(3),a("id",n.pathId))},encapsulation:2})}return t})();var lr=(()=>{class t extends xe{pathId;ngOnInit(){this.pathId="url(#"+De()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["SearchMinusIcon"]],features:[E],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M6.0208 12.0411C4.83005 12.0411 3.66604 11.688 2.67596 11.0265C1.68589 10.3649 0.914216 9.42464 0.458534 8.32452C0.00285271 7.22441 -0.116374 6.01388 0.11593 4.84601C0.348235 3.67813 0.921637 2.60537 1.76363 1.76338C2.60562 0.921393 3.67838 0.34799 4.84625 0.115686C6.01412 -0.116618 7.22466 0.00260857 8.32477 0.45829C9.42488 0.913972 10.3652 1.68564 11.0267 2.67572C11.6883 3.66579 12.0414 4.8298 12.0414 6.02056C12.0395 7.41563 11.5542 8.76029 10.6783 9.8305L13.8244 12.9765C13.9367 13.089 13.9997 13.2414 13.9997 13.4003C13.9997 13.5592 13.9367 13.7116 13.8244 13.8241C13.769 13.8801 13.703 13.9245 13.6302 13.9548C13.5575 13.985 13.4794 14.0003 13.4006 14C13.3218 14.0003 13.2437 13.985 13.171 13.9548C13.0982 13.9245 13.0322 13.8801 12.9768 13.8241L9.83082 10.678C8.76059 11.5539 7.4159 12.0393 6.0208 12.0411ZM6.0208 1.20731C5.07199 1.20731 4.14449 1.48867 3.35559 2.0158C2.56669 2.54292 1.95181 3.29215 1.58872 4.16874C1.22562 5.04532 1.13062 6.00989 1.31572 6.94046C1.50083 7.87104 1.95772 8.72583 2.62863 9.39674C3.29954 10.0676 4.15433 10.5245 5.0849 10.7096C6.01548 10.8947 6.98005 10.7997 7.85663 10.4367C8.73322 10.0736 9.48244 9.45868 10.0096 8.66978C10.5367 7.88088 10.8181 6.95337 10.8181 6.00457C10.8181 4.73226 10.3126 3.51206 9.41297 2.6124C8.51331 1.71274 7.29311 1.20731 6.0208 1.20731ZM4.00591 6.60422H8.00362C8.16266 6.60422 8.31518 6.54104 8.42764 6.42859C8.5401 6.31613 8.60328 6.1636 8.60328 6.00456C8.60328 5.84553 8.5401 5.693 8.42764 5.58054C8.31518 5.46809 8.16266 5.40491 8.00362 5.40491H4.00591C3.84687 5.40491 3.69434 5.46809 3.58189 5.58054C3.46943 5.693 3.40625 5.84553 3.40625 6.00456C3.40625 6.1636 3.46943 6.31613 3.58189 6.42859C3.69434 6.54104 3.84687 6.60422 4.00591 6.60422Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(ue(),p(0,"svg",0)(1,"g"),u(2,"path",1),d(),p(3,"defs")(4,"clipPath",2),u(5,"rect",3),d()()()),i&2&&(k(n.getClassNames()),b("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),s(),b("clip-path",n.pathId),s(3),a("id",n.pathId))},encapsulation:2})}return t})();var cr=(()=>{class t extends xe{pathId;ngOnInit(){this.pathId="url(#"+De()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["SearchPlusIcon"]],features:[E],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M2.67596 11.0265C3.66604 11.688 4.83005 12.0411 6.0208 12.0411C6.81143 12.0411 7.59432 11.8854 8.32477 11.5828C8.86999 11.357 9.37802 11.0526 9.83311 10.6803L12.9768 13.8241C13.0322 13.8801 13.0982 13.9245 13.171 13.9548C13.2437 13.985 13.3218 14.0003 13.4006 14C13.4794 14.0003 13.5575 13.985 13.6302 13.9548C13.703 13.9245 13.769 13.8801 13.8244 13.8241C13.9367 13.7116 13.9997 13.5592 13.9997 13.4003C13.9997 13.2414 13.9367 13.089 13.8244 12.9765L10.6806 9.8328C11.0529 9.37773 11.3572 8.86972 11.5831 8.32452C11.8856 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0267 2.67572C10.3652 1.68564 9.42488 0.913972 8.32477 0.45829C7.22466 0.00260857 6.01412 -0.116618 4.84625 0.115686C3.67838 0.34799 2.60562 0.921393 1.76363 1.76338C0.921637 2.60537 0.348235 3.67813 0.11593 4.84601C-0.116374 6.01388 0.00285271 7.22441 0.458534 8.32452C0.914216 9.42464 1.68589 10.3649 2.67596 11.0265ZM3.35559 2.0158C4.14449 1.48867 5.07199 1.20731 6.0208 1.20731C7.29311 1.20731 8.51331 1.71274 9.41297 2.6124C10.3126 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5367 7.88088 10.0096 8.66978C9.48244 9.45868 8.73322 10.0736 7.85663 10.4367C6.98005 10.7997 6.01548 10.8947 5.0849 10.7096C4.15433 10.5245 3.29954 10.0676 2.62863 9.39674C1.95772 8.72583 1.50083 7.87104 1.31572 6.94046C1.13062 6.00989 1.22562 5.04532 1.58872 4.16874C1.95181 3.29215 2.56669 2.54292 3.35559 2.0158ZM6.00481 8.60309C5.84641 8.60102 5.69509 8.53718 5.58308 8.42517C5.47107 8.31316 5.40722 8.16183 5.40515 8.00344V6.60422H4.00591C3.84687 6.60422 3.69434 6.54104 3.58189 6.42859C3.46943 6.31613 3.40625 6.1636 3.40625 6.00456C3.40625 5.84553 3.46943 5.693 3.58189 5.58054C3.69434 5.46809 3.84687 5.40491 4.00591 5.40491H5.40515V4.00572C5.40515 3.84668 5.46833 3.69416 5.58079 3.5817C5.69324 3.46924 5.84577 3.40607 6.00481 3.40607C6.16385 3.40607 6.31637 3.46924 6.42883 3.5817C6.54129 3.69416 6.60447 3.84668 6.60447 4.00572V5.40491H8.00362C8.16266 5.40491 8.31518 5.46809 8.42764 5.58054C8.5401 5.693 8.60328 5.84553 8.60328 6.00456C8.60328 6.1636 8.5401 6.31613 8.42764 6.42859C8.31518 6.54104 8.16266 6.60422 8.00362 6.60422H6.60447V8.00344C6.60239 8.16183 6.53855 8.31316 6.42654 8.42517C6.31453 8.53718 6.1632 8.60102 6.00481 8.60309Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(ue(),p(0,"svg",0)(1,"g"),u(2,"path",1),d(),p(3,"defs")(4,"clipPath",2),u(5,"rect",3),d()()()),i&2&&(k(n.getClassNames()),b("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),s(),b("clip-path",n.pathId),s(3),a("id",n.pathId))},encapsulation:2})}return t})();var pr=(()=>{class t extends xe{pathId;ngOnInit(){this.pathId="url(#"+De()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["UndoIcon"]],features:[E],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M6.77042 5.96336C6.84315 5.99355 6.92118 6.00891 6.99993 6.00854C7.07868 6.00891 7.15671 5.99355 7.22944 5.96336C7.30217 5.93317 7.36814 5.88876 7.42348 5.83273C7.53572 5.72035 7.59876 5.56801 7.59876 5.40918C7.59876 5.25035 7.53572 5.09802 7.42348 4.98564L6.04897 3.61113H6.99998C7.9088 3.61113 8.79722 3.88063 9.55288 4.38554C10.3085 4.89046 10.8975 5.60811 11.2453 6.44776C11.5931 7.2874 11.6841 8.21132 11.5068 9.10268C11.3295 9.99404 10.8918 10.8128 10.2492 11.4554C9.60657 12.0981 8.7878 12.5357 7.89644 12.713C7.00508 12.8903 6.08116 12.7993 5.24152 12.4515C4.40188 12.1037 3.68422 11.5148 3.17931 10.7591C2.67439 10.0035 2.4049 9.11504 2.4049 8.20622C2.4049 8.04726 2.34175 7.89481 2.22935 7.78241C2.11695 7.67001 1.9645 7.60686 1.80554 7.60686C1.64658 7.60686 1.49413 7.67001 1.38172 7.78241C1.26932 7.89481 1.20618 8.04726 1.20618 8.20622C1.20829 9.74218 1.81939 11.2146 2.90548 12.3007C3.99157 13.3868 5.46402 13.9979 6.99998 14C8.5366 14 10.0103 13.3896 11.0968 12.3031C12.1834 11.2165 12.7938 9.74283 12.7938 8.20622C12.7938 6.66961 12.1834 5.19593 11.0968 4.10938C10.0103 3.02283 8.5366 2.41241 6.99998 2.41241H6.04892L7.42348 1.03786C7.48236 0.982986 7.5296 0.916817 7.56235 0.843296C7.59511 0.769775 7.61273 0.690409 7.61415 0.609933C7.61557 0.529456 7.60076 0.449519 7.57062 0.374888C7.54047 0.300257 7.49561 0.232462 7.43869 0.175548C7.38178 0.118634 7.31398 0.0737664 7.23935 0.0436218C7.16472 0.0134773 7.08478 -0.00132663 7.00431 9.32772e-05C6.92383 0.00151319 6.84447 0.019128 6.77095 0.0518865C6.69742 0.0846451 6.63126 0.131876 6.57638 0.190763L4.17895 2.5882C4.06671 2.70058 4.00366 2.85292 4.00366 3.01175C4.00366 3.17058 4.06671 3.32291 4.17895 3.43529L6.57638 5.83273C6.63172 5.88876 6.69769 5.93317 6.77042 5.96336Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(ue(),p(0,"svg",0)(1,"g"),u(2,"path",1),d(),p(3,"defs")(4,"clipPath",2),u(5,"rect",3),d()()()),i&2&&(k(n.getClassNames()),b("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),s(),b("clip-path",n.pathId),s(3),a("id",n.pathId))},encapsulation:2})}return t})();var dr=(()=>{class t extends xe{pathId;ngOnInit(){this.pathId="url(#"+De()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["UploadIcon"]],features:[E],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(ue(),p(0,"svg",0)(1,"g"),u(2,"path",1),d(),p(3,"defs")(4,"clipPath",2),u(5,"rect",3),d()()()),i&2&&(k(n.getClassNames()),b("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),s(),b("clip-path",n.pathId),s(3),a("id",n.pathId))},encapsulation:2})}return t})();var Da=["removeicon"],La=["*"];function za(t,o){if(t&1){let e=T();p(0,"img",4),_("error",function(n){f(e);let r=c();return g(r.imageError(n))}),d()}if(t&2){let e=c();a("src",e.image,$e)("alt",e.alt)}}function $a(t,o){if(t&1&&u(0,"span",6),t&2){let e=c(2);k(e.icon),a("ngClass","p-chip-icon"),b("data-pc-section","icon")}}function Ra(t,o){if(t&1&&m(0,$a,1,4,"span",5),t&2){let e=c();a("ngIf",e.icon)}}function Aa(t,o){if(t&1&&(p(0,"div",7),C(1),d()),t&2){let e=c();b("data-pc-section","label"),s(),B(e.label)}}function Ba(t,o){if(t&1){let e=T();p(0,"span",11),_("click",function(n){f(e);let r=c(3);return g(r.close(n))})("keydown",function(n){f(e);let r=c(3);return g(r.onKeydown(n))}),d()}if(t&2){let e=c(3);k(e.removeIcon),a("ngClass","p-chip-remove-icon"),b("data-pc-section","removeicon")("aria-label",e.removeAriaLabel)}}function Ha(t,o){if(t&1){let e=T();p(0,"TimesCircleIcon",12),_("click",function(n){f(e);let r=c(3);return g(r.close(n))})("keydown",function(n){f(e);let r=c(3);return g(r.onKeydown(n))}),d()}if(t&2){let e=c(3);k("p-chip-remove-icon"),b("data-pc-section","removeicon")("aria-label",e.removeAriaLabel)}}function Ua(t,o){if(t&1&&(q(0),m(1,Ba,1,5,"span",9)(2,Ha,1,4,"TimesCircleIcon",10),F()),t&2){let e=c(2);s(),a("ngIf",e.removeIcon),s(),a("ngIf",!e.removeIcon)}}function Na(t,o){}function ja(t,o){t&1&&m(0,Na,0,0,"ng-template")}function Qa(t,o){if(t&1){let e=T();p(0,"span",13),_("click",function(n){f(e);let r=c(2);return g(r.close(n))})("keydown",function(n){f(e);let r=c(2);return g(r.onKeydown(n))}),m(1,ja,1,0,null,14),d()}if(t&2){let e=c(2);b("data-pc-section","removeicon")("aria-label",e.removeAriaLabel),s(),a("ngTemplateOutlet",e.removeIconTemplate||e._removeIconTemplate)}}function Wa(t,o){if(t&1&&(q(0),m(1,Ua,3,2,"ng-container",3)(2,Qa,2,3,"span",8),F()),t&2){let e=c();s(),a("ngIf",!e.removeIconTemplate&&!e._removeIconTemplate),s(),a("ngIf",e.removeIconTemplate||e._removeIconTemplate)}}var Ka=({dt:t})=>`
.p-chip {
    display: inline-flex;
    align-items: center;
    background: ${t("chip.background")};
    color: ${t("chip.color")};
    border-radius: ${t("chip.border.radius")};
    padding: ${t("chip.padding.y")} ${t("chip.padding.x")};
    gap: ${t("chip.gap")};
}

.p-chip-icon {
    color: ${t("chip.icon.color")};
    font-size: ${t("chip.icon.font.size")};
    width: ${t("chip.icon.size")};
    height: ${t("chip.icon.size")};
}

.p-chip-image {
    border-radius: 50%;
    width: ${t("chip.image.width")};
    height: ${t("chip.image.height")};
    margin-left: calc(-1 * ${t("chip.padding.y")});
}

.p-chip:has(.p-chip-remove-icon) {
    padding-inline-end: ${t("chip.padding.y")};
}

.p-chip:has(.p-chip-image) {
    padding-top: calc(${t("chip.padding.y")} / 2);
    padding-bottom: calc(${t("chip.padding.y")} / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    font-size: ${t("chip.remove.icon.font.size")};
    width: ${t("chip.remove.icon.size")};
    height: ${t("chip.remove.icon.size")};
    color: ${t("chip.remove.icon.color")};
    border-radius: 50%;
    transition: outline-color ${t("chip.transition.duration")}, box-shadow ${t("chip.transition.duration")};
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: ${t("chip.remove.icon.focus.ring.shadow")};
    outline: ${t("chip.remove.icon.focus.ring.width")} ${t("chip.remove.icon.focus.ring.style")} ${t("chip.remove.icon.focus.ring.color")};
    outline-offset: ${t("chip.remove.icon.focus.ring.offset")};
}
`,Ga={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},mr=(()=>{class t extends Y{name="chip";theme=Ka;classes=Ga;static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var Ii=(()=>{class t extends Q{label;icon;image;alt;style;styleClass;removable=!1;removeIcon;onRemove=new I;onImageError=new I;visible=!0;get removeAriaLabel(){return this.config.getTranslation(We.ARIA).removeLabel}get chipProps(){return this._chipProps}set chipProps(e){this._chipProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([i,n])=>this[`_${i}`]!==n&&(this[`_${i}`]=n))}_chipProps;_componentStyle=j(mr);removeIconTemplate;templates;_removeIconTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"removeicon":this._removeIconTemplate=e.template;break;default:this._removeIconTemplate=e.template;break}})}ngOnChanges(e){if(super.ngOnChanges(e),e.chipProps&&e.chipProps.currentValue){let{currentValue:i}=e.chipProps;i.label!==void 0&&(this.label=i.label),i.icon!==void 0&&(this.icon=i.icon),i.image!==void 0&&(this.image=i.image),i.alt!==void 0&&(this.alt=i.alt),i.style!==void 0&&(this.style=i.style),i.styleClass!==void 0&&(this.styleClass=i.styleClass),i.removable!==void 0&&(this.removable=i.removable),i.removeIcon!==void 0&&(this.removeIcon=i.removeIcon)}}containerClass(){let e="p-chip p-component";return this.styleClass&&(e+=` ${this.styleClass}`),e}close(e){this.visible=!1,this.onRemove.emit(e)}onKeydown(e){(e.key==="Enter"||e.key==="Backspace")&&this.close(e)}imageError(e){this.onImageError.emit(e)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-chip"]],contentQueries:function(i,n,r){if(i&1&&(O(r,Da,4),O(r,se,4)),i&2){let l;v(l=y())&&(n.removeIconTemplate=l.first),v(l=y())&&(n.templates=l)}},hostVars:9,hostBindings:function(i,n){i&2&&(b("data-pc-name","chip")("aria-label",n.label)("data-pc-section","root"),oe(n.style),k(n.containerClass()),Se("display",!n.visible&&"none"))},inputs:{label:"label",icon:"icon",image:"image",alt:"alt",style:"style",styleClass:"styleClass",removable:[2,"removable","removable",P],removeIcon:"removeIcon",chipProps:"chipProps"},outputs:{onRemove:"onRemove",onImageError:"onImageError"},features:[G([mr]),E,Te],ngContentSelectors:La,decls:6,vars:4,consts:[["iconTemplate",""],["class","p-chip-image",3,"src","alt","error",4,"ngIf","ngIfElse"],["class","p-chip-label",4,"ngIf"],[4,"ngIf"],[1,"p-chip-image",3,"error","src","alt"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],[1,"p-chip-label"],["tabindex","0","class","p-chip-remove-icon","role","button",3,"click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","ngClass","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"click","keydown","ngClass"],["tabindex","0","role","button",3,"click","keydown"],["tabindex","0","role","button",1,"p-chip-remove-icon",3,"click","keydown"],[4,"ngTemplateOutlet"]],template:function(i,n){if(i&1&&(he(),me(0),m(1,za,1,2,"img",1)(2,Ra,1,1,"ng-template",null,0,A)(4,Aa,2,2,"div",2)(5,Wa,3,2,"ng-container",3)),i&2){let r=K(3);s(),a("ngIf",n.image)("ngIfElse",r),s(3),a("ngIf",n.label),s(),a("ngIf",n.removable)}},dependencies:[U,ie,Z,ae,Qo,V],encapsulation:2,changeDetection:0})}return t})(),ur=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=J({type:t});static \u0275inj=X({imports:[Ii,V,V]})}return t})();var Ya=({dt:t})=>`
.p-skeleton {
    overflow: hidden;
    background: ${t("skeleton.background")};
    border-radius: ${t("skeleton.border.radius")};
}

.p-skeleton::after {
    content: "";
    animation: p-skeleton-animation 1.2s infinite;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), ${t("skeleton.animation.background")}, rgba(255, 255, 255, 0));
}

[dir='rtl'] .p-skeleton::after {
    animation-name: p-skeleton-animation-rtl;
}

.p-skeleton-circle {
    border-radius: 50%;
}

.p-skeleton-animation-none::after {
    animation: none;
}

@keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}

@keyframes p-skeleton-animation-rtl {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(-100%);
    }
}
`,Xa={root:{position:"relative"}},Ja={root:({props:t})=>["p-skeleton p-component",{"p-skeleton-circle":t.shape==="circle","p-skeleton-animation-none":t.animation==="none"}]},hr=(()=>{class t extends Y{name="skeleton";theme=Ya;classes=Ja;inlineStyles=Xa;static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var lt=(()=>{class t extends Q{styleClass;style;shape="rectangle";animation="wave";borderRadius;size;width="100%";height="1rem";_componentStyle=j(hr);containerClass(){return{"p-skeleton p-component":!0,"p-skeleton-circle":this.shape==="circle","p-skeleton-animation-none":this.animation==="none"}}get containerStyle(){let e=this._componentStyle?.inlineStyles.root,i;return this.size?i=je(W(W({},this.style),e),{width:this.size,height:this.size,borderRadius:this.borderRadius}):i=W(je(W({},e),{width:this.width,height:this.height,borderRadius:this.borderRadius}),this.style),i}static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-skeleton"]],inputs:{styleClass:"styleClass",style:"style",shape:"shape",animation:"animation",borderRadius:"borderRadius",size:"size",width:"width",height:"height"},features:[G([hr]),E],decls:1,vars:7,consts:[[3,"ngClass","ngStyle"]],template:function(i,n){i&1&&u(0,"div",0),i&2&&(k(n.styleClass),a("ngClass",n.containerClass())("ngStyle",n.containerStyle),b("data-pc-name","skeleton")("aria-hidden",!0)("data-pc-section","root"))},dependencies:[U,ie,ke,V],encapsulation:2,changeDetection:0})}return t})(),fr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=J({type:t});static \u0275inj=X({imports:[lt,V,V]})}return t})();var es=["checkboxicon"],ts=["input"],is=()=>({"p-checkbox-input":!0}),ns=t=>({checked:t,class:"p-checkbox-icon"});function os(t,o){if(t&1&&u(0,"span",8),t&2){let e=c(3);a("ngClass",e.checkboxIcon),b("data-pc-section","icon")}}function rs(t,o){t&1&&u(0,"CheckIcon",9),t&2&&(a("styleClass","p-checkbox-icon"),b("data-pc-section","icon"))}function as(t,o){if(t&1&&(q(0),m(1,os,1,2,"span",7)(2,rs,1,2,"CheckIcon",6),F()),t&2){let e=c(2);s(),a("ngIf",e.checkboxIcon),s(),a("ngIf",!e.checkboxIcon)}}function ss(t,o){t&1&&u(0,"MinusIcon",9),t&2&&(a("styleClass","p-checkbox-icon"),b("data-pc-section","icon"))}function ls(t,o){if(t&1&&(q(0),m(1,as,3,2,"ng-container",4)(2,ss,1,2,"MinusIcon",6),F()),t&2){let e=c();s(),a("ngIf",e.checked),s(),a("ngIf",e._indeterminate())}}function cs(t,o){}function ps(t,o){t&1&&m(0,cs,0,0,"ng-template")}var ds=({dt:t})=>`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${t("checkbox.width")};
    height: ${t("checkbox.height")};
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: ${t("checkbox.border.radius")};
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${t("checkbox.border.radius")};
    border: 1px solid ${t("checkbox.border.color")};
    background: ${t("checkbox.background")};
    width: ${t("checkbox.width")};
    height: ${t("checkbox.height")};
    transition: background ${t("checkbox.transition.duration")}, color ${t("checkbox.transition.duration")}, border-color ${t("checkbox.transition.duration")}, box-shadow ${t("checkbox.transition.duration")}, outline-color ${t("checkbox.transition.duration")};
    outline-color: transparent;
    box-shadow: ${t("checkbox.shadow")};
}

.p-checkbox-icon {
    transition-duration: ${t("checkbox.transition.duration")};
    color: ${t("checkbox.icon.color")};
    font-size: ${t("checkbox.icon.size")};
    width: ${t("checkbox.icon.size")};
    height: ${t("checkbox.icon.size")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: ${t("checkbox.hover.border.color")};
}

.p-checkbox-checked .p-checkbox-box {
    border-color: ${t("checkbox.checked.border.color")};
    background: ${t("checkbox.checked.background")};
}

.p-checkbox-checked .p-checkbox-icon {
    color: ${t("checkbox.icon.checked.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${t("checkbox.checked.hover.background")};
    border-color: ${t("checkbox.checked.hover.border.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: ${t("checkbox.icon.checked.hover.color")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${t("checkbox.focus.border.color")};
    box-shadow: ${t("checkbox.focus.ring.shadow")};
    outline: ${t("checkbox.focus.ring.width")} ${t("checkbox.focus.ring.style")} ${t("checkbox.focus.ring.color")};
    outline-offset: ${t("checkbox.focus.ring.offset")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${t("checkbox.checked.focus.border.color")};
}

p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
    border-color: ${t("checkbox.invalid.border.color")};
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: ${t("checkbox.filled.background")};
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: ${t("checkbox.checked.background")};
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${t("checkbox.checked.hover.background")};
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: ${t("checkbox.disabled.background")};
    border-color: ${t("checkbox.checked.disabled.border.color")};
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: ${t("checkbox.icon.disabled.color")};
}

.p-checkbox-sm,
.p-checkbox-sm .p-checkbox-box {
    width: ${t("checkbox.sm.width")};
    height: ${t("checkbox.sm.height")};
}

.p-checkbox-sm .p-checkbox-icon {
    font-size: ${t("checkbox.icon.sm.size")};
    width: ${t("checkbox.icon.sm.size")};
    height: ${t("checkbox.icon.sm.size")};
}

.p-checkbox-lg,
.p-checkbox-lg .p-checkbox-box {
    width: ${t("checkbox.lg.width")};
    height: ${t("checkbox.lg.height")};
}

.p-checkbox-lg .p-checkbox-icon {
    font-size: ${t("checkbox.icon.lg.size")};
    width: ${t("checkbox.icon.lg.size")};
    height: ${t("checkbox.icon.lg.size")};
}
`,ms={root:({instance:t,props:o})=>["p-checkbox p-component",{"p-checkbox-checked":t.checked,"p-disabled":o.disabled,"p-invalid":o.invalid,"p-variant-filled":o.variant?o.variant==="filled":t.config.inputStyle==="filled"||t.config.inputVariant==="filled"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},gr=(()=>{class t extends Y{name="checkbox";theme=ds;classes=ms;static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var us={provide:Xt,useExisting:yt(()=>Ji),multi:!0},Ji=(()=>{class t extends Q{value;name;disabled;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;style;inputStyle;styleClass;inputClass;indeterminate=!1;size;formControl;checkboxIcon;readonly;required;autofocus;trueValue=!0;falseValue=!1;variant;onChange=new I;onFocus=new I;onBlur=new I;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.model===this.trueValue:Oo(this.value,this.model)}get containerClass(){return{"p-checkbox p-component":!0,"p-checkbox-checked p-highlight":this.checked,"p-disabled":this.disabled,"p-variant-filled":this.variant==="filled"||this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-checkbox-sm p-inputfield-sm":this.size==="small","p-checkbox-lg p-inputfield-lg":this.size==="large"}}_indeterminate=Me(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;_componentStyle=j(gr);ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"icon":this._checkboxIconTemplate=e.template;break;case"checkboxicon":this._checkboxIconTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e),e.indeterminate&&this._indeterminate.set(e.indeterminate.currentValue)}updateModel(e){let i,n=this.injector.get(Lo,null,{optional:!0,self:!0}),r=n&&!this.formControl?n.value:this.model;this.binary?(i=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.model=i,this.onModelChange(i)):(this.checked||this._indeterminate()?i=r.filter(l=>!bt(l,this.value)):i=r?[...r,this.value]:[this.value],this.onModelChange(i),this.model=i,this.formControl&&this.formControl.setValue(i)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:i,originalEvent:e})}handleChange(e){this.readonly||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(e){this.model=e,this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){setTimeout(()=>{this.disabled=e,this.cd.markForCheck()})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(i,n,r){if(i&1&&(O(r,es,4),O(r,se,4)),i&2){let l;v(l=y())&&(n.checkboxIconTemplate=l.first),v(l=y())&&(n.templates=l)}},viewQuery:function(i,n){if(i&1&&$(ts,5),i&2){let r;v(r=y())&&(n.inputViewChild=r.first)}},inputs:{value:"value",name:"name",disabled:[2,"disabled","disabled",P],binary:[2,"binary","binary",P],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",fe],inputId:"inputId",style:"style",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",P],size:"size",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",P],required:[2,"required","required",P],autofocus:[2,"autofocus","autofocus",P],trueValue:"trueValue",falseValue:"falseValue",variant:"variant"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[G([us,gr]),E,Te],decls:6,vars:29,consts:[["input",""],[3,"ngClass"],["type","checkbox",3,"focus","blur","change","value","checked","disabled","readonly","ngClass"],[1,"p-checkbox-box"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"styleClass",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"]],template:function(i,n){if(i&1){let r=T();p(0,"div",1)(1,"input",2,0),_("focus",function(h){return f(r),g(n.onInputFocus(h))})("blur",function(h){return f(r),g(n.onInputBlur(h))})("change",function(h){return f(r),g(n.handleChange(h))}),d(),p(3,"div",3),m(4,ls,3,2,"ng-container",4)(5,ps,1,0,null,5),d()()}i&2&&(oe(n.style),k(n.styleClass),a("ngClass",n.containerClass),b("data-p-highlight",n.checked)("data-p-checked",n.checked)("data-p-disabled",n.disabled),s(),oe(n.inputStyle),k(n.inputClass),a("value",n.value)("checked",n.checked)("disabled",n.disabled)("readonly",n.readonly)("ngClass",ce(26,is)),b("id",n.inputId)("name",n.name)("tabindex",n.tabindex)("required",n.required?!0:null)("aria-labelledby",n.ariaLabelledBy)("aria-label",n.ariaLabel),s(3),a("ngIf",!n.checkboxIconTemplate&&!n._checkboxIconTemplate),s(),a("ngTemplateOutlet",n.checkboxIconTemplate||n._checkboxIconTemplate)("ngTemplateOutletContext",H(27,ns,n.checked)))},dependencies:[U,ie,Z,ae,Gi,or,V],encapsulation:2,changeDetection:0})}return t})();var hs=["*"],fs=({dt:t})=>`
.p-iconfield {
    position: relative;
    display: block;
}

.p-inputicon {
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * (${t("icon.size")} / 2));
    color: ${t("iconfield.icon.color")};
    line-height: 1;
}

.p-iconfield .p-inputicon:first-child {
    inset-inline-start: ${t("form.field.padding.x")};
}

.p-iconfield .p-inputicon:last-child {
    inset-inline-end: ${t("form.field.padding.x")};
}

.p-iconfield .p-inputtext:not(:first-child) {
    padding-inline-start: calc((${t("form.field.padding.x")} * 2) + ${t("icon.size")});
}

.p-iconfield .p-inputtext:not(:last-child) {
    padding-inline-end: calc((${t("form.field.padding.x")} * 2) + ${t("icon.size")});
}

.p-iconfield:has(.p-inputfield-sm) .p-inputicon {
    font-size: ${t("form.field.sm.font.size")};
    width: ${t("form.field.sm.font.size")};
    height: ${t("form.field.sm.font.size")};
    margin-top: calc(-1 * (${t("form.field.sm.font.size")} / 2));
}

.p-iconfield:has(.p-inputfield-lg) .p-inputicon {
    font-size: ${t("form.field.lg.font.size")};
    width: ${t("form.field.lg.font.size")};
    height: ${t("form.field.lg.font.size")};
    margin-top: calc(-1 * (${t("form.field.lg.font.size")} / 2));
}
`,gs={root:"p-iconfield"},_r=(()=>{class t extends Y{name="iconfield";theme=fs;classes=gs;static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var Si=(()=>{class t extends Q{iconPosition="left";get _styleClass(){return this.styleClass}styleClass;_componentStyle=j(_r);static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostAttrs:[1,"p-iconfield"],hostVars:6,hostBindings:function(i,n){i&2&&(k(n._styleClass),ve("p-iconfield-left",n.iconPosition==="left")("p-iconfield-right",n.iconPosition==="right"))},inputs:{iconPosition:"iconPosition",styleClass:"styleClass"},features:[G([_r]),E],ngContentSelectors:hs,decls:1,vars:0,template:function(i,n){i&1&&(he(),me(0))},dependencies:[U],encapsulation:2,changeDetection:0})}return t})(),br=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=J({type:t});static \u0275inj=X({imports:[Si]})}return t})();var bs=["*"],vs={root:"p-inputicon"},vr=(()=>{class t extends Y{name="inputicon";classes=vs;static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})(),Ut=(()=>{class t extends Q{styleClass;get hostClasses(){return this.styleClass}_componentStyle=j(vr);static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:4,hostBindings:function(i,n){i&2&&(k(n.hostClasses),ve("p-inputicon",!0))},inputs:{styleClass:"styleClass"},features:[G([vr]),E],ngContentSelectors:bs,decls:1,vars:0,template:function(i,n){i&1&&(he(),me(0))},dependencies:[U,V],encapsulation:2,changeDetection:0})}return t})(),yr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=J({type:t});static \u0275inj=X({imports:[Ut,V,V]})}return t})();var xr=["content"],ys=["overlay"],Cs=["*"],xs=(t,o,e,i,n,r,l,h,w,D,N,_e,le,de)=>({"p-overlay p-component":!0,"p-overlay-modal p-overlay-mask p-overlay-mask-enter":t,"p-overlay-center":o,"p-overlay-top":e,"p-overlay-top-start":i,"p-overlay-top-end":n,"p-overlay-bottom":r,"p-overlay-bottom-start":l,"p-overlay-bottom-end":h,"p-overlay-left":w,"p-overlay-left-start":D,"p-overlay-left-end":N,"p-overlay-right":_e,"p-overlay-right-start":le,"p-overlay-right-end":de}),ws=(t,o,e)=>({showTransitionParams:t,hideTransitionParams:o,transform:e}),Is=t=>({value:"visible",params:t}),Ts=t=>({mode:t}),Ss=t=>({$implicit:t});function ks(t,o){t&1&&R(0)}function Os(t,o){if(t&1){let e=T();p(0,"div",3,1),_("click",function(n){f(e);let r=c(2);return g(r.onOverlayContentClick(n))})("@overlayContentAnimation.start",function(n){f(e);let r=c(2);return g(r.onOverlayContentAnimationStart(n))})("@overlayContentAnimation.done",function(n){f(e);let r=c(2);return g(r.onOverlayContentAnimationDone(n))}),me(2),m(3,ks,1,0,"ng-container",4),d()}if(t&2){let e=c(2);k(e.contentStyleClass),a("ngStyle",e.contentStyle)("ngClass","p-overlay-content")("@overlayContentAnimation",H(11,Is,Dt(7,ws,e.showTransitionOptions,e.hideTransitionOptions,e.transformOptions[e.modal?e.overlayResponsiveDirection:"default"]))),s(3),a("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",H(15,Ss,H(13,Ts,e.overlayMode)))}}function Ms(t,o){if(t&1){let e=T();p(0,"div",3,0),_("click",function(){f(e);let n=c();return g(n.onOverlayClick())}),m(2,Os,4,17,"div",2),d()}if(t&2){let e=c();k(e.styleClass),a("ngStyle",e.style)("ngClass",co(5,xs,[e.modal,e.modal&&e.overlayResponsiveDirection==="center",e.modal&&e.overlayResponsiveDirection==="top",e.modal&&e.overlayResponsiveDirection==="top-start",e.modal&&e.overlayResponsiveDirection==="top-end",e.modal&&e.overlayResponsiveDirection==="bottom",e.modal&&e.overlayResponsiveDirection==="bottom-start",e.modal&&e.overlayResponsiveDirection==="bottom-end",e.modal&&e.overlayResponsiveDirection==="left",e.modal&&e.overlayResponsiveDirection==="left-start",e.modal&&e.overlayResponsiveDirection==="left-end",e.modal&&e.overlayResponsiveDirection==="right",e.modal&&e.overlayResponsiveDirection==="right-start",e.modal&&e.overlayResponsiveDirection==="right-end"])),s(2),a("ngIf",e.visible)}}var Es=({dt:t})=>`
.p-overlay {
    position: absolute;
    top: 0;
}

.p-overlay-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-content {
    transform-origin: inherit;
}

.p-overlay-modal > .p-overlay-content {
    z-index: 1;
    width: 90%;
}

/* Position */
/* top */
.p-overlay-top {
    align-items: flex-start;
}
.p-overlay-top-start {
    align-items: flex-start;
    justify-content: flex-start;
}
.p-overlay-top-end {
    align-items: flex-start;
    justify-content: flex-end;
}

/* bottom */
.p-overlay-bottom {
    align-items: flex-end;
}
.p-overlay-bottom-start {
    align-items: flex-end;
    justify-content: flex-start;
}
.p-overlay-bottom-end {
    align-items: flex-end;
    justify-content: flex-end;
}

/* left */
.p-overlay-left {
    justify-content: flex-start;
}
.p-overlay-left-start {
    justify-content: flex-start;
    align-items: flex-start;
}
.p-overlay-left-end {
    justify-content: flex-start;
    align-items: flex-end;
}

/* right */
.p-overlay-right {
    justify-content: flex-end;
}
.p-overlay-right-start {
    justify-content: flex-end;
    align-items: flex-start;
}
.p-overlay-right-end {
    justify-content: flex-end;
    align-items: flex-end;
}
`,wr=(()=>{class t extends Y{name="overlay";theme=Es;static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})(),qs=ri([Be({transform:"{{transform}}",opacity:0}),Ae("{{showTransitionParams}}")]),Fs=ri([Ae("{{hideTransitionParams}}",Be({transform:"{{transform}}",opacity:0}))]),Ir=(()=>{class t extends Q{overlayService;zone;get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.modalVisible&&(this.modalVisible=!0)}get mode(){return this._mode||this.overlayOptions?.mode}set mode(e){this._mode=e}get style(){return Ht.merge(this._style,this.modal?this.overlayResponsiveOptions?.style:this.overlayOptions?.style)}set style(e){this._style=e}get styleClass(){return Ht.merge(this._styleClass,this.modal?this.overlayResponsiveOptions?.styleClass:this.overlayOptions?.styleClass)}set styleClass(e){this._styleClass=e}get contentStyle(){return Ht.merge(this._contentStyle,this.modal?this.overlayResponsiveOptions?.contentStyle:this.overlayOptions?.contentStyle)}set contentStyle(e){this._contentStyle=e}get contentStyleClass(){return Ht.merge(this._contentStyleClass,this.modal?this.overlayResponsiveOptions?.contentStyleClass:this.overlayOptions?.contentStyleClass)}set contentStyleClass(e){this._contentStyleClass=e}get target(){let e=this._target||this.overlayOptions?.target;return e===void 0?"@prev":e}set target(e){this._target=e}get appendTo(){return this._appendTo||this.overlayOptions?.appendTo}set appendTo(e){this._appendTo=e}get autoZIndex(){let e=this._autoZIndex||this.overlayOptions?.autoZIndex;return e===void 0?!0:e}set autoZIndex(e){this._autoZIndex=e}get baseZIndex(){let e=this._baseZIndex||this.overlayOptions?.baseZIndex;return e===void 0?0:e}set baseZIndex(e){this._baseZIndex=e}get showTransitionOptions(){let e=this._showTransitionOptions||this.overlayOptions?.showTransitionOptions;return e===void 0?".12s cubic-bezier(0, 0, 0.2, 1)":e}set showTransitionOptions(e){this._showTransitionOptions=e}get hideTransitionOptions(){let e=this._hideTransitionOptions||this.overlayOptions?.hideTransitionOptions;return e===void 0?".1s linear":e}set hideTransitionOptions(e){this._hideTransitionOptions=e}get listener(){return this._listener||this.overlayOptions?.listener}set listener(e){this._listener=e}get responsive(){return this._responsive||this.overlayOptions?.responsive}set responsive(e){this._responsive=e}get options(){return this._options}set options(e){this._options=e}visibleChange=new I;onBeforeShow=new I;onShow=new I;onBeforeHide=new I;onHide=new I;onAnimationStart=new I;onAnimationDone=new I;overlayViewChild;contentViewChild;contentTemplate;templates;_contentTemplate;_visible=!1;_mode;_style;_styleClass;_contentStyle;_contentStyleClass;_target;_appendTo;_autoZIndex;_baseZIndex;_showTransitionOptions;_hideTransitionOptions;_listener;_responsive;_options;modalVisible=!1;isOverlayClicked=!1;isOverlayContentClicked=!1;scrollHandler;documentClickListener;documentResizeListener;_componentStyle=j(wr);documentKeyboardListener;window;transformOptions={default:"scaleY(0.8)",center:"scale(0.7)",top:"translate3d(0px, -100%, 0px)","top-start":"translate3d(0px, -100%, 0px)","top-end":"translate3d(0px, -100%, 0px)",bottom:"translate3d(0px, 100%, 0px)","bottom-start":"translate3d(0px, 100%, 0px)","bottom-end":"translate3d(0px, 100%, 0px)",left:"translate3d(-100%, 0px, 0px)","left-start":"translate3d(-100%, 0px, 0px)","left-end":"translate3d(-100%, 0px, 0px)",right:"translate3d(100%, 0px, 0px)","right-start":"translate3d(100%, 0px, 0px)","right-end":"translate3d(100%, 0px, 0px)"};get modal(){if(dt(this.platformId))return this.mode==="modal"||this.overlayResponsiveOptions&&this.document.defaultView?.matchMedia(this.overlayResponsiveOptions.media?.replace("@media","")||`(max-width: ${this.overlayResponsiveOptions.breakpoint})`).matches}get overlayMode(){return this.mode||(this.modal?"modal":"overlay")}get overlayOptions(){return W(W({},this.config?.overlayOptions),this.options)}get overlayResponsiveOptions(){return W(W({},this.overlayOptions?.responsive),this.responsive)}get overlayResponsiveDirection(){return this.overlayResponsiveOptions?.direction||"center"}get overlayEl(){return this.overlayViewChild?.nativeElement}get contentEl(){return this.contentViewChild?.nativeElement}get targetEl(){return Io(this.target,this.el?.nativeElement)}constructor(e,i){super(),this.overlayService=e,this.zone=i}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}show(e,i=!1){this.onVisibleChange(!0),this.handleEvents("onShow",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),i&&Re(this.targetEl),this.modal&&ut(this.document?.body,"p-overflow-hidden")}hide(e,i=!1){if(this.visible)this.onVisibleChange(!1),this.handleEvents("onHide",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),i&&Re(this.targetEl),this.modal&&_i(this.document?.body,"p-overflow-hidden");else return}alignOverlay(){!this.modal&&Bt.alignOverlay(this.overlayEl,this.targetEl,this.appendTo)}onVisibleChange(e){this._visible=e,this.visibleChange.emit(e)}onOverlayClick(){this.isOverlayClicked=!0}onOverlayContentClick(e){this.overlayService.add({originalEvent:e,target:this.targetEl}),this.isOverlayContentClicked=!0}onOverlayContentAnimationStart(e){switch(e.toState){case"visible":this.handleEvents("onBeforeShow",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.autoZIndex&&Qe.set(this.overlayMode,this.overlayEl,this.baseZIndex+this.config?.zIndex[this.overlayMode]),Bt.appendOverlay(this.overlayEl,this.appendTo==="body"?this.document.body:this.appendTo,this.appendTo),this.alignOverlay();break;case"void":this.handleEvents("onBeforeHide",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.modal&&ut(this.overlayEl,"p-overlay-mask-leave");break}this.handleEvents("onAnimationStart",e)}onOverlayContentAnimationDone(e){let i=this.overlayEl||e.element.parentElement;switch(e.toState){case"visible":this.visible&&(this.show(i,!0),this.bindListeners());break;case"void":if(!this.visible){this.hide(i,!0),this.modalVisible=!1,this.unbindListeners(),Bt.appendOverlay(this.overlayEl,this.targetEl,this.appendTo),Qe.clear(i),this.cd.markForCheck();break}}this.handleEvents("onAnimationDone",e)}handleEvents(e,i){this[e].emit(i),this.options&&this.options[e]&&this.options[e](i),this.config?.overlayOptions&&(this.config?.overlayOptions)[e]&&(this.config?.overlayOptions)[e](i)}bindListeners(){this.bindScrollListener(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindDocumentKeyboardListener()}unbindListeners(){this.unbindScrollListener(),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindDocumentKeyboardListener()}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Ki(this.targetEl,e=>{(this.listener?this.listener(e,{type:"scroll",mode:this.overlayMode,valid:!0}):!0)&&this.hide(e,!0)})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=this.renderer.listen(this.document,"click",e=>{let n=!(this.targetEl&&(this.targetEl.isSameNode(e.target)||!this.isOverlayClicked&&this.targetEl.contains(e.target)))&&!this.isOverlayContentClicked;(this.listener?this.listener(e,{type:"outside",mode:this.overlayMode,valid:e.which!==3&&n}):n)&&this.hide(e),this.isOverlayClicked=this.isOverlayContentClicked=!1}))}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{(this.listener?this.listener(e,{type:"resize",mode:this.overlayMode,valid:!Rt()}):!Rt())&&this.hide(e,!0)}))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindDocumentKeyboardListener(){this.documentKeyboardListener||this.zone.runOutsideAngular(()=>{this.documentKeyboardListener=this.renderer.listen(this.document.defaultView,"keydown",e=>{if(this.overlayOptions.hideOnEscape===!1||e.code!=="Escape")return;(this.listener?this.listener(e,{type:"keydown",mode:this.overlayMode,valid:!Rt()}):!Rt())&&this.zone.run(()=>{this.hide(e,!0)})})})}unbindDocumentKeyboardListener(){this.documentKeyboardListener&&(this.documentKeyboardListener(),this.documentKeyboardListener=null)}ngOnDestroy(){this.hide(this.overlayEl,!0),this.overlayEl&&(Bt.appendOverlay(this.overlayEl,this.targetEl,this.appendTo),Qe.clear(this.overlayEl)),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindListeners(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||t)(M(Qi),M(pt))};static \u0275cmp=x({type:t,selectors:[["p-overlay"]],contentQueries:function(i,n,r){if(i&1&&(O(r,xr,4),O(r,se,4)),i&2){let l;v(l=y())&&(n.contentTemplate=l.first),v(l=y())&&(n.templates=l)}},viewQuery:function(i,n){if(i&1&&($(ys,5),$(xr,5)),i&2){let r;v(r=y())&&(n.overlayViewChild=r.first),v(r=y())&&(n.contentViewChild=r.first)}},inputs:{visible:"visible",mode:"mode",style:"style",styleClass:"styleClass",contentStyle:"contentStyle",contentStyleClass:"contentStyleClass",target:"target",appendTo:"appendTo",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",listener:"listener",responsive:"responsive",options:"options"},outputs:{visibleChange:"visibleChange",onBeforeShow:"onBeforeShow",onShow:"onShow",onBeforeHide:"onBeforeHide",onHide:"onHide",onAnimationStart:"onAnimationStart",onAnimationDone:"onAnimationDone"},features:[G([wr]),E],ngContentSelectors:Cs,decls:1,vars:1,consts:[["overlay",""],["content",""],[3,"ngStyle","class","ngClass","click",4,"ngIf"],[3,"click","ngStyle","ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,n){i&1&&(he(),m(0,Ms,3,20,"div",2)),i&2&&a("ngIf",n.modalVisible)},dependencies:[U,ie,Z,ae,ke,V],encapsulation:2,data:{animation:[st("overlayContentAnimation",[He(":enter",[ai(qs)]),He(":leave",[ai(Fs)])])]},changeDetection:0})}return t})();var Tr=["content"],Ps=["item"],Vs=["loader"],Ds=["loadericon"],Ls=["element"],zs=["*"],$s=(t,o,e)=>({"p-virtualscroller":!0,"p-virtualscroller-inline":t,"p-virtualscroller-both p-both-scroll":o,"p-virtualscroller-horizontal p-horizontal-scroll":e}),Fn=(t,o)=>({$implicit:t,options:o}),Rs=t=>({"p-virtualscroller-content":!0,"p-virtualscroller-loading ":t}),As=t=>({"p-virtualscroller-loader-mask":t}),Bs=t=>({numCols:t}),kr=t=>({options:t}),Hs=()=>({styleClass:"p-virtualscroller-loading-icon"}),Us=(t,o)=>({rows:t,columns:o});function Ns(t,o){t&1&&R(0)}function js(t,o){if(t&1&&(q(0),m(1,Ns,1,0,"ng-container",10),F()),t&2){let e=c(2);s(),a("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",re(2,Fn,e.loadedItems,e.getContentOptions()))}}function Qs(t,o){t&1&&R(0)}function Ws(t,o){if(t&1&&(q(0),m(1,Qs,1,0,"ng-container",10),F()),t&2){let e=o.$implicit,i=o.index,n=c(3);s(),a("ngTemplateOutlet",n.itemTemplate||n._itemTemplate)("ngTemplateOutletContext",re(2,Fn,e,n.getOptions(i)))}}function Ks(t,o){if(t&1&&(p(0,"div",11,3),m(2,Ws,2,5,"ng-container",12),d()),t&2){let e=c(2);oe(e.contentStyle),k(e.contentStyleClass),a("ngClass",H(8,Rs,e.d_loading)),b("data-pc-section","content"),s(2),a("ngForOf",e.loadedItems)("ngForTrackBy",e._trackBy)}}function Gs(t,o){if(t&1&&u(0,"div",13),t&2){let e=c(2);a("ngStyle",e.spacerStyle),b("data-pc-section","spacer")}}function Zs(t,o){t&1&&R(0)}function Ys(t,o){if(t&1&&(q(0),m(1,Zs,1,0,"ng-container",10),F()),t&2){let e=o.index,i=c(4);s(),a("ngTemplateOutlet",i.loaderTemplate||i._loaderTemplate)("ngTemplateOutletContext",H(4,kr,i.getLoaderOptions(e,i.both&&H(2,Bs,i.numItemsInViewport.cols))))}}function Xs(t,o){if(t&1&&(q(0),m(1,Ys,2,6,"ng-container",15),F()),t&2){let e=c(3);s(),a("ngForOf",e.loaderArr)}}function Js(t,o){t&1&&R(0)}function el(t,o){if(t&1&&(q(0),m(1,Js,1,0,"ng-container",10),F()),t&2){let e=c(4);s(),a("ngTemplateOutlet",e.loaderIconTemplate||e._loaderIconTemplate)("ngTemplateOutletContext",H(3,kr,ce(2,Hs)))}}function tl(t,o){t&1&&u(0,"SpinnerIcon",16),t&2&&(a("styleClass","p-virtualscroller-loading-icon pi-spin"),b("data-pc-section","loadingIcon"))}function il(t,o){if(t&1&&m(0,el,2,5,"ng-container",6)(1,tl,1,2,"ng-template",null,5,A),t&2){let e=K(2),i=c(3);a("ngIf",i.loaderIconTemplate||i._loaderIconTemplate)("ngIfElse",e)}}function nl(t,o){if(t&1&&(p(0,"div",14),m(1,Xs,2,1,"ng-container",6)(2,il,3,2,"ng-template",null,4,A),d()),t&2){let e=K(3),i=c(2);a("ngClass",H(4,As,!i.loaderTemplate)),b("data-pc-section","loader"),s(),a("ngIf",i.loaderTemplate||i._loaderTemplate)("ngIfElse",e)}}function ol(t,o){if(t&1){let e=T();q(0),p(1,"div",7,1),_("scroll",function(n){f(e);let r=c();return g(r.onContainerScroll(n))}),m(3,js,2,5,"ng-container",6)(4,Ks,3,10,"ng-template",null,2,A)(6,Gs,1,2,"div",8)(7,nl,4,6,"div",9),d(),F()}if(t&2){let e=K(5),i=c();s(),k(i._styleClass),a("ngStyle",i._style)("ngClass",Dt(12,$s,i.inline,i.both,i.horizontal)),b("id",i._id)("tabindex",i.tabindex)("data-pc-name","scroller")("data-pc-section","root"),s(2),a("ngIf",i.contentTemplate||i._contentTemplate)("ngIfElse",e),s(3),a("ngIf",i._showSpacer),s(),a("ngIf",!i.loaderDisabled&&i._showLoader&&i.d_loading)}}function rl(t,o){t&1&&R(0)}function al(t,o){if(t&1&&(q(0),m(1,rl,1,0,"ng-container",10),F()),t&2){let e=c(2);s(),a("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",re(5,Fn,e.items,re(2,Us,e._items,e.loadedColumns)))}}function sl(t,o){if(t&1&&(me(0),m(1,al,2,8,"ng-container",17)),t&2){let e=c();s(),a("ngIf",e.contentTemplate||e._contentTemplate)}}var ll=({dt:t})=>`
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${t("virtualscroller.loader.mask.background")};
    color: ${t("virtualscroller.loader.mask.color")};
}

.p-virtualscroller-loader-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-loading-icon {
    font-size: ${t("virtualscroller.loader.icon.size")};
    width: ${t("virtualscroller.loader.icon.size")};
    height: ${t("virtualscroller.loader.icon.size")};
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}
`,Sr=(()=>{class t extends Y{name="virtualscroller";theme=ll;static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var Pn=(()=>{class t extends Q{zone;get id(){return this._id}set id(e){this._id=e}get style(){return this._style}set style(e){this._style=e}get styleClass(){return this._styleClass}set styleClass(e){this._styleClass=e}get tabindex(){return this._tabindex}set tabindex(e){this._tabindex=e}get items(){return this._items}set items(e){this._items=e}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=e}get scrollHeight(){return this._scrollHeight}set scrollHeight(e){this._scrollHeight=e}get scrollWidth(){return this._scrollWidth}set scrollWidth(e){this._scrollWidth=e}get orientation(){return this._orientation}set orientation(e){this._orientation=e}get step(){return this._step}set step(e){this._step=e}get delay(){return this._delay}set delay(e){this._delay=e}get resizeDelay(){return this._resizeDelay}set resizeDelay(e){this._resizeDelay=e}get appendOnly(){return this._appendOnly}set appendOnly(e){this._appendOnly=e}get inline(){return this._inline}set inline(e){this._inline=e}get lazy(){return this._lazy}set lazy(e){this._lazy=e}get disabled(){return this._disabled}set disabled(e){this._disabled=e}get loaderDisabled(){return this._loaderDisabled}set loaderDisabled(e){this._loaderDisabled=e}get columns(){return this._columns}set columns(e){this._columns=e}get showSpacer(){return this._showSpacer}set showSpacer(e){this._showSpacer=e}get showLoader(){return this._showLoader}set showLoader(e){this._showLoader=e}get numToleratedItems(){return this._numToleratedItems}set numToleratedItems(e){this._numToleratedItems=e}get loading(){return this._loading}set loading(e){this._loading=e}get autoSize(){return this._autoSize}set autoSize(e){this._autoSize=e}get trackBy(){return this._trackBy}set trackBy(e){this._trackBy=e}get options(){return this._options}set options(e){this._options=e,e&&typeof e=="object"&&(Object.entries(e).forEach(([i,n])=>this[`_${i}`]!==n&&(this[`_${i}`]=n)),Object.entries(e).forEach(([i,n])=>this[`${i}`]!==n&&(this[`${i}`]=n)))}onLazyLoad=new I;onScroll=new I;onScrollIndexChange=new I;elementViewChild;contentViewChild;height;_id;_style;_styleClass;_tabindex=0;_items;_itemSize=0;_scrollHeight;_scrollWidth;_orientation="vertical";_step=0;_delay=0;_resizeDelay=10;_appendOnly=!1;_inline=!1;_lazy=!1;_disabled=!1;_loaderDisabled=!1;_columns;_showSpacer=!0;_showLoader=!1;_numToleratedItems;_loading;_autoSize=!1;_trackBy;_options;d_loading=!1;d_numToleratedItems;contentEl;contentTemplate;itemTemplate;loaderTemplate;loaderIconTemplate;templates;_contentTemplate;_itemTemplate;_loaderTemplate;_loaderIconTemplate;first=0;last=0;page=0;isRangeChanged=!1;numItemsInViewport=0;lastScrollPos=0;lazyLoadState={};loaderArr=[];spacerStyle={};contentStyle={};scrollTimeout;resizeTimeout;initialized=!1;windowResizeListener;defaultWidth;defaultHeight;defaultContentWidth;defaultContentHeight;_contentStyleClass;get contentStyleClass(){return this._contentStyleClass}set contentStyleClass(e){this._contentStyleClass=e}get vertical(){return this._orientation==="vertical"}get horizontal(){return this._orientation==="horizontal"}get both(){return this._orientation==="both"}get loadedItems(){return this._items&&!this.d_loading?this.both?this._items.slice(this._appendOnly?0:this.first.rows,this.last.rows).map(e=>this._columns?e:e.slice(this._appendOnly?0:this.first.cols,this.last.cols)):this.horizontal&&this._columns?this._items:this._items.slice(this._appendOnly?0:this.first,this.last):[]}get loadedRows(){return this.d_loading?this._loaderDisabled?this.loaderArr:[]:this.loadedItems}get loadedColumns(){return this._columns&&(this.both||this.horizontal)?this.d_loading&&this._loaderDisabled?this.both?this.loaderArr[0]:this.loaderArr:this._columns.slice(this.both?this.first.cols:this.first,this.both?this.last.cols:this.last):this._columns}_componentStyle=j(Sr);constructor(e){super(),this.zone=e}ngOnInit(){super.ngOnInit(),this.setInitialState()}ngOnChanges(e){super.ngOnChanges(e);let i=!1;if(this.scrollHeight=="100%"&&(this.height="100%"),e.loading){let{previousValue:n,currentValue:r}=e.loading;this.lazy&&n!==r&&r!==this.d_loading&&(this.d_loading=r,i=!0)}if(e.orientation&&(this.lastScrollPos=this.both?{top:0,left:0}:0),e.numToleratedItems){let{previousValue:n,currentValue:r}=e.numToleratedItems;n!==r&&r!==this.d_numToleratedItems&&(this.d_numToleratedItems=r)}if(e.options){let{previousValue:n,currentValue:r}=e.options;this.lazy&&n?.loading!==r?.loading&&r?.loading!==this.d_loading&&(this.d_loading=r.loading,i=!0),n?.numToleratedItems!==r?.numToleratedItems&&r?.numToleratedItems!==this.d_numToleratedItems&&(this.d_numToleratedItems=r.numToleratedItems)}this.initialized&&!i&&(e.items?.previousValue?.length!==e.items?.currentValue?.length||e.itemSize||e.scrollHeight||e.scrollWidth)&&(this.init(),this.calculateAutoSize())}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"loadericon":this._loaderIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}ngAfterViewInit(){super.ngAfterViewInit(),Promise.resolve().then(()=>{this.viewInit()})}ngAfterViewChecked(){this.initialized||this.viewInit()}ngOnDestroy(){this.unbindResizeListener(),this.contentEl=null,this.initialized=!1,super.ngOnDestroy()}viewInit(){dt(this.platformId)&&!this.initialized&&Sn(this.elementViewChild?.nativeElement)&&(this.setInitialState(),this.setContentEl(this.contentEl),this.init(),this.defaultWidth=$t(this.elementViewChild?.nativeElement),this.defaultHeight=zt(this.elementViewChild?.nativeElement),this.defaultContentWidth=$t(this.contentEl),this.defaultContentHeight=zt(this.contentEl),this.initialized=!0)}init(){this._disabled||(this.setSize(),this.calculateOptions(),this.setSpacerSize(),this.bindResizeListener(),this.cd.detectChanges())}setContentEl(e){this.contentEl=e||this.contentViewChild?.nativeElement||Ce(this.elementViewChild?.nativeElement,".p-virtualscroller-content")}setInitialState(){this.first=this.both?{rows:0,cols:0}:0,this.last=this.both?{rows:0,cols:0}:0,this.numItemsInViewport=this.both?{rows:0,cols:0}:0,this.lastScrollPos=this.both?{top:0,left:0}:0,this.d_loading=this._loading||!1,this.d_numToleratedItems=this._numToleratedItems,this.loaderArr=[]}getElementRef(){return this.elementViewChild}getPageByFirst(e){return Math.floor(((e??this.first)+this.d_numToleratedItems*4)/(this._step||1))}isPageChanged(e){return this._step?this.page!==this.getPageByFirst(e??this.first):!0}scrollTo(e){this.elementViewChild?.nativeElement?.scrollTo(e)}scrollToIndex(e,i="auto"){if(this.both?e.every(r=>r>-1):e>-1){let r=this.first,{scrollTop:l=0,scrollLeft:h=0}=this.elementViewChild?.nativeElement,{numToleratedItems:w}=this.calculateNumItems(),D=this.getContentPosition(),N=this.itemSize,_e=(pe=0,ne)=>pe<=ne?0:pe,le=(pe,ne,Ne)=>pe*ne+Ne,de=(pe=0,ne=0)=>this.scrollTo({left:pe,top:ne,behavior:i}),be=this.both?{rows:0,cols:0}:0,Ke=!1,ee=!1;this.both?(be={rows:_e(e[0],w[0]),cols:_e(e[1],w[1])},de(le(be.cols,N[1],D.left),le(be.rows,N[0],D.top)),ee=this.lastScrollPos.top!==l||this.lastScrollPos.left!==h,Ke=be.rows!==r.rows||be.cols!==r.cols):(be=_e(e,w),this.horizontal?de(le(be,N,D.left),l):de(h,le(be,N,D.top)),ee=this.lastScrollPos!==(this.horizontal?h:l),Ke=be!==r),this.isRangeChanged=Ke,ee&&(this.first=be)}}scrollInView(e,i,n="auto"){if(i){let{first:r,viewport:l}=this.getRenderedRange(),h=(N=0,_e=0)=>this.scrollTo({left:N,top:_e,behavior:n}),w=i==="to-start",D=i==="to-end";if(w){if(this.both)l.first.rows-r.rows>e[0]?h(l.first.cols*this._itemSize[1],(l.first.rows-1)*this._itemSize[0]):l.first.cols-r.cols>e[1]&&h((l.first.cols-1)*this._itemSize[1],l.first.rows*this._itemSize[0]);else if(l.first-r>e){let N=(l.first-1)*this._itemSize;this.horizontal?h(N,0):h(0,N)}}else if(D){if(this.both)l.last.rows-r.rows<=e[0]+1?h(l.first.cols*this._itemSize[1],(l.first.rows+1)*this._itemSize[0]):l.last.cols-r.cols<=e[1]+1&&h((l.first.cols+1)*this._itemSize[1],l.first.rows*this._itemSize[0]);else if(l.last-r<=e+1){let N=(l.first+1)*this._itemSize;this.horizontal?h(N,0):h(0,N)}}}else this.scrollToIndex(e,n)}getRenderedRange(){let e=(r,l)=>l||r?Math.floor(r/(l||r)):0,i=this.first,n=0;if(this.elementViewChild?.nativeElement){let{scrollTop:r,scrollLeft:l}=this.elementViewChild.nativeElement;if(this.both)i={rows:e(r,this._itemSize[0]),cols:e(l,this._itemSize[1])},n={rows:i.rows+this.numItemsInViewport.rows,cols:i.cols+this.numItemsInViewport.cols};else{let h=this.horizontal?l:r;i=e(h,this._itemSize),n=i+this.numItemsInViewport}}return{first:this.first,last:this.last,viewport:{first:i,last:n}}}calculateNumItems(){let e=this.getContentPosition(),i=(this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetWidth-e.left:0)||0,n=(this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetHeight-e.top:0)||0,r=(D,N)=>N||D?Math.ceil(D/(N||D)):0,l=D=>Math.ceil(D/2),h=this.both?{rows:r(n,this._itemSize[0]),cols:r(i,this._itemSize[1])}:r(this.horizontal?i:n,this._itemSize),w=this.d_numToleratedItems||(this.both?[l(h.rows),l(h.cols)]:l(h));return{numItemsInViewport:h,numToleratedItems:w}}calculateOptions(){let{numItemsInViewport:e,numToleratedItems:i}=this.calculateNumItems(),n=(h,w,D,N=!1)=>this.getLast(h+w+(h<D?2:3)*D,N),r=this.first,l=this.both?{rows:n(this.first.rows,e.rows,i[0]),cols:n(this.first.cols,e.cols,i[1],!0)}:n(this.first,e,i);this.last=l,this.numItemsInViewport=e,this.d_numToleratedItems=i,this.showLoader&&(this.loaderArr=this.both?Array.from({length:e.rows}).map(()=>Array.from({length:e.cols})):Array.from({length:e})),this._lazy&&Promise.resolve().then(()=>{this.lazyLoadState={first:this._step?this.both?{rows:0,cols:r.cols}:0:r,last:Math.min(this._step?this._step:this.last,this.items.length)},this.handleEvents("onLazyLoad",this.lazyLoadState)})}calculateAutoSize(){this._autoSize&&!this.d_loading&&Promise.resolve().then(()=>{if(this.contentEl){this.contentEl.style.minHeight=this.contentEl.style.minWidth="auto",this.contentEl.style.position="relative",this.elementViewChild.nativeElement.style.contain="none";let[e,i]=[$t(this.contentEl),zt(this.contentEl)];e!==this.defaultContentWidth&&(this.elementViewChild.nativeElement.style.width=""),i!==this.defaultContentHeight&&(this.elementViewChild.nativeElement.style.height="");let[n,r]=[$t(this.elementViewChild.nativeElement),zt(this.elementViewChild.nativeElement)];(this.both||this.horizontal)&&(this.elementViewChild.nativeElement.style.width=n<this.defaultWidth?n+"px":this._scrollWidth||this.defaultWidth+"px"),(this.both||this.vertical)&&(this.elementViewChild.nativeElement.style.height=r<this.defaultHeight?r+"px":this._scrollHeight||this.defaultHeight+"px"),this.contentEl.style.minHeight=this.contentEl.style.minWidth="",this.contentEl.style.position="",this.elementViewChild.nativeElement.style.contain=""}})}getLast(e=0,i=!1){return this._items?Math.min(i?(this._columns||this._items[0]).length:this._items.length,e):0}getContentPosition(){if(this.contentEl){let e=getComputedStyle(this.contentEl),i=parseFloat(e.paddingLeft)+Math.max(parseFloat(e.left)||0,0),n=parseFloat(e.paddingRight)+Math.max(parseFloat(e.right)||0,0),r=parseFloat(e.paddingTop)+Math.max(parseFloat(e.top)||0,0),l=parseFloat(e.paddingBottom)+Math.max(parseFloat(e.bottom)||0,0);return{left:i,right:n,top:r,bottom:l,x:i+n,y:r+l}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}}setSize(){if(this.elementViewChild?.nativeElement){let e=this.elementViewChild.nativeElement.parentElement.parentElement,i=this._scrollWidth||`${this.elementViewChild.nativeElement.offsetWidth||e.offsetWidth}px`,n=this._scrollHeight||`${this.elementViewChild.nativeElement.offsetHeight||e.offsetHeight}px`,r=(l,h)=>this.elementViewChild.nativeElement.style[l]=h;this.both||this.horizontal?(r("height",n),r("width",i)):r("height",n)}}setSpacerSize(){if(this._items){let e=this.getContentPosition(),i=(n,r,l,h=0)=>this.spacerStyle=je(W({},this.spacerStyle),{[`${n}`]:(r||[]).length*l+h+"px"});this.both?(i("height",this._items,this._itemSize[0],e.y),i("width",this._columns||this._items[1],this._itemSize[1],e.x)):this.horizontal?i("width",this._columns||this._items,this._itemSize,e.x):i("height",this._items,this._itemSize,e.y)}}setContentPosition(e){if(this.contentEl&&!this._appendOnly){let i=e?e.first:this.first,n=(l,h)=>l*h,r=(l=0,h=0)=>this.contentStyle=je(W({},this.contentStyle),{transform:`translate3d(${l}px, ${h}px, 0)`});if(this.both)r(n(i.cols,this._itemSize[1]),n(i.rows,this._itemSize[0]));else{let l=n(i,this._itemSize);this.horizontal?r(l,0):r(0,l)}}}onScrollPositionChange(e){let i=e.target,n=this.getContentPosition(),r=(ee,pe)=>ee?ee>pe?ee-pe:ee:0,l=(ee,pe)=>pe||ee?Math.floor(ee/(pe||ee)):0,h=(ee,pe,ne,Ne,Xe,ct)=>ee<=Xe?Xe:ct?ne-Ne-Xe:pe+Xe-1,w=(ee,pe,ne,Ne,Xe,ct,Ft)=>ee<=ct?0:Math.max(0,Ft?ee<pe?ne:ee-ct:ee>pe?ne:ee-2*ct),D=(ee,pe,ne,Ne,Xe,ct=!1)=>{let Ft=pe+Ne+2*Xe;return ee>=Xe&&(Ft+=Xe+1),this.getLast(Ft,ct)},N=r(i.scrollTop,n.top),_e=r(i.scrollLeft,n.left),le=this.both?{rows:0,cols:0}:0,de=this.last,be=!1,Ke=this.lastScrollPos;if(this.both){let ee=this.lastScrollPos.top<=N,pe=this.lastScrollPos.left<=_e;if(!this._appendOnly||this._appendOnly&&(ee||pe)){let ne={rows:l(N,this._itemSize[0]),cols:l(_e,this._itemSize[1])},Ne={rows:h(ne.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],ee),cols:h(ne.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],pe)};le={rows:w(ne.rows,Ne.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],ee),cols:w(ne.cols,Ne.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],pe)},de={rows:D(ne.rows,le.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:D(ne.cols,le.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},be=le.rows!==this.first.rows||de.rows!==this.last.rows||le.cols!==this.first.cols||de.cols!==this.last.cols||this.isRangeChanged,Ke={top:N,left:_e}}}else{let ee=this.horizontal?_e:N,pe=this.lastScrollPos<=ee;if(!this._appendOnly||this._appendOnly&&pe){let ne=l(ee,this._itemSize),Ne=h(ne,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,pe);le=w(ne,Ne,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,pe),de=D(ne,le,this.last,this.numItemsInViewport,this.d_numToleratedItems),be=le!==this.first||de!==this.last||this.isRangeChanged,Ke=ee}}return{first:le,last:de,isRangeChanged:be,scrollPos:Ke}}onScrollChange(e){let{first:i,last:n,isRangeChanged:r,scrollPos:l}=this.onScrollPositionChange(e);if(r){let h={first:i,last:n};if(this.setContentPosition(h),this.first=i,this.last=n,this.lastScrollPos=l,this.handleEvents("onScrollIndexChange",h),this._lazy&&this.isPageChanged(i)){let w={first:this._step?Math.min(this.getPageByFirst(i)*this._step,this.items.length-this._step):i,last:Math.min(this._step?(this.getPageByFirst(i)+1)*this._step:n,this.items.length)};(this.lazyLoadState.first!==w.first||this.lazyLoadState.last!==w.last)&&this.handleEvents("onLazyLoad",w),this.lazyLoadState=w}}}onContainerScroll(e){if(this.handleEvents("onScroll",{originalEvent:e}),this._delay&&this.isPageChanged()){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),!this.d_loading&&this.showLoader){let{isRangeChanged:i}=this.onScrollPositionChange(e);(i||(this._step?this.isPageChanged():!1))&&(this.d_loading=!0,this.cd.detectChanges())}this.scrollTimeout=setTimeout(()=>{this.onScrollChange(e),this.d_loading&&this.showLoader&&(!this._lazy||this._loading===void 0)&&(this.d_loading=!1,this.page=this.getPageByFirst()),this.cd.detectChanges()},this._delay)}else!this.d_loading&&this.onScrollChange(e)}bindResizeListener(){dt(this.platformId)&&(this.windowResizeListener||this.zone.runOutsideAngular(()=>{let e=this.document.defaultView,i=Rt()?"orientationchange":"resize";this.windowResizeListener=this.renderer.listen(e,i,this.onWindowResize.bind(this))}))}unbindResizeListener(){this.windowResizeListener&&(this.windowResizeListener(),this.windowResizeListener=null)}onWindowResize(){this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(()=>{if(Sn(this.elementViewChild?.nativeElement)){let[e,i]=[$t(this.elementViewChild?.nativeElement),zt(this.elementViewChild?.nativeElement)],[n,r]=[e!==this.defaultWidth,i!==this.defaultHeight];(this.both?n||r:this.horizontal?n:this.vertical?r:!1)&&this.zone.run(()=>{this.d_numToleratedItems=this._numToleratedItems,this.defaultWidth=e,this.defaultHeight=i,this.defaultContentWidth=$t(this.contentEl),this.defaultContentHeight=zt(this.contentEl),this.init()})}},this._resizeDelay)}handleEvents(e,i){return this.options&&this.options[e]?this.options[e](i):this[e].emit(i)}getContentOptions(){return{contentStyleClass:`p-virtualscroller-content ${this.d_loading?"p-virtualscroller-loading":""}`,items:this.loadedItems,getItemOptions:e=>this.getOptions(e),loading:this.d_loading,getLoaderOptions:(e,i)=>this.getLoaderOptions(e,i),itemSize:this._itemSize,rows:this.loadedRows,columns:this.loadedColumns,spacerStyle:this.spacerStyle,contentStyle:this.contentStyle,vertical:this.vertical,horizontal:this.horizontal,both:this.both}}getOptions(e){let i=(this._items||[]).length,n=this.both?this.first.rows+e:this.first+e;return{index:n,count:i,first:n===0,last:n===i-1,even:n%2===0,odd:n%2!==0}}getLoaderOptions(e,i){let n=this.loaderArr.length;return W({index:e,count:n,first:e===0,last:e===n-1,even:e%2===0,odd:e%2!==0},i)}static \u0275fac=function(i){return new(i||t)(M(pt))};static \u0275cmp=x({type:t,selectors:[["p-scroller"],["p-virtualscroller"],["p-virtual-scroller"],["p-virtualScroller"]],contentQueries:function(i,n,r){if(i&1&&(O(r,Tr,4),O(r,Ps,4),O(r,Vs,4),O(r,Ds,4),O(r,se,4)),i&2){let l;v(l=y())&&(n.contentTemplate=l.first),v(l=y())&&(n.itemTemplate=l.first),v(l=y())&&(n.loaderTemplate=l.first),v(l=y())&&(n.loaderIconTemplate=l.first),v(l=y())&&(n.templates=l)}},viewQuery:function(i,n){if(i&1&&($(Ls,5),$(Tr,5)),i&2){let r;v(r=y())&&(n.elementViewChild=r.first),v(r=y())&&(n.contentViewChild=r.first)}},hostVars:2,hostBindings:function(i,n){i&2&&Se("height",n.height)},inputs:{id:"id",style:"style",styleClass:"styleClass",tabindex:"tabindex",items:"items",itemSize:"itemSize",scrollHeight:"scrollHeight",scrollWidth:"scrollWidth",orientation:"orientation",step:"step",delay:"delay",resizeDelay:"resizeDelay",appendOnly:"appendOnly",inline:"inline",lazy:"lazy",disabled:"disabled",loaderDisabled:"loaderDisabled",columns:"columns",showSpacer:"showSpacer",showLoader:"showLoader",numToleratedItems:"numToleratedItems",loading:"loading",autoSize:"autoSize",trackBy:"trackBy",options:"options"},outputs:{onLazyLoad:"onLazyLoad",onScroll:"onScroll",onScrollIndexChange:"onScrollIndexChange"},features:[G([Sr]),E,Te],ngContentSelectors:zs,decls:3,vars:2,consts:[["disabledContainer",""],["element",""],["buildInContent",""],["content",""],["buildInLoader",""],["buildInLoaderIcon",""],[4,"ngIf","ngIfElse"],[3,"scroll","ngStyle","ngClass"],["class","p-virtualscroller-spacer",3,"ngStyle",4,"ngIf"],["class","p-virtualscroller-loader",3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"p-virtualscroller-spacer",3,"ngStyle"],[1,"p-virtualscroller-loader",3,"ngClass"],[4,"ngFor","ngForOf"],[3,"styleClass"],[4,"ngIf"]],template:function(i,n){if(i&1&&(he(),m(0,ol,8,16,"ng-container",6)(1,sl,2,1,"ng-template",null,0,A)),i&2){let r=K(2);a("ngIf",!n._disabled)("ngIfElse",r)}},dependencies:[U,ie,Ve,Z,ae,ke,jo,V],encapsulation:2})}return t})(),Or=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=J({type:t});static \u0275inj=X({imports:[Pn,V,V]})}return t})();var cl=({dt:t})=>`
.p-tooltip {
    position: absolute;
    display: none;
    max-width: ${t("tooltip.max.width")};
}

.p-tooltip-right,
.p-tooltip-left {
    padding: 0 ${t("tooltip.gutter")};
}

.p-tooltip-top,
.p-tooltip-bottom {
    padding: ${t("tooltip.gutter")} 0;
}

.p-tooltip-text {
    white-space: pre-line;
    word-break: break-word;
    background: ${t("tooltip.background")};
    color: ${t("tooltip.color")};
    padding: ${t("tooltip.padding")};
    box-shadow: ${t("tooltip.shadow")};
    border-radius: ${t("tooltip.border.radius")};
}

.p-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    scale: 2;
}

.p-tooltip-right .p-tooltip-arrow {
    top: 50%;
    left: 0;
    margin-top: calc(-1 * ${t("tooltip.gutter")});
    border-width: ${t("tooltip.gutter")} ${t("tooltip.gutter")} ${t("tooltip.gutter")} 0;
    border-right-color: ${t("tooltip.background")};
}

.p-tooltip-left .p-tooltip-arrow {
    top: 50%;
    right: 0;
    margin-top: calc(-1 * ${t("tooltip.gutter")});
    border-width: ${t("tooltip.gutter")} 0 ${t("tooltip.gutter")} ${t("tooltip.gutter")};
    border-left-color: ${t("tooltip.background")};
}

.p-tooltip-top .p-tooltip-arrow {
    bottom: 0;
    left: 50%;
    margin-left: calc(-1 * ${t("tooltip.gutter")});
    border-width: ${t("tooltip.gutter")} ${t("tooltip.gutter")} 0 ${t("tooltip.gutter")};
    border-top-color: ${t("tooltip.background")};
    border-bottom-color: ${t("tooltip.background")};
}

.p-tooltip-bottom .p-tooltip-arrow {
    top: 0;
    left: 50%;
    margin-left: calc(-1 * ${t("tooltip.gutter")});
    border-width: 0 ${t("tooltip.gutter")} ${t("tooltip.gutter")} ${t("tooltip.gutter")};
    border-top-color: ${t("tooltip.background")};
    border-bottom-color: ${t("tooltip.background")};
}
`,pl={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},Mr=(()=>{class t extends Y{name="tooltip";theme=cl;classes=pl;static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var ki=(()=>{class t extends Q{zone;viewContainer;tooltipPosition;tooltipEvent="hover";appendTo;positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this.deactivate()}tooltipOptions;_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:De("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=j(Mr);interactionInProgress=!1;constructor(e,i){super(),this.zone=e,this.viewContainer=i}ngAfterViewInit(){super.ngAfterViewInit(),dt(this.platformId)&&this.zone.runOutsideAngular(()=>{let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),e==="focus"||e==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.addEventListener("focus",this.focusListener),i.addEventListener("blur",this.blurListener)}})}ngOnChanges(e){super.ngOnChanges(e),e.tooltipPosition&&this.setOption({tooltipPosition:e.tooltipPosition.currentValue}),e.tooltipEvent&&this.setOption({tooltipEvent:e.tooltipEvent.currentValue}),e.appendTo&&this.setOption({appendTo:e.appendTo.currentValue}),e.positionStyle&&this.setOption({positionStyle:e.positionStyle.currentValue}),e.tooltipStyleClass&&this.setOption({tooltipStyleClass:e.tooltipStyleClass.currentValue}),e.tooltipZIndex&&this.setOption({tooltipZIndex:e.tooltipZIndex.currentValue}),e.escape&&this.setOption({escape:e.escape.currentValue}),e.showDelay&&this.setOption({showDelay:e.showDelay.currentValue}),e.hideDelay&&this.setOption({hideDelay:e.hideDelay.currentValue}),e.life&&this.setOption({life:e.life.currentValue}),e.positionTop&&this.setOption({positionTop:e.positionTop.currentValue}),e.positionLeft&&this.setOption({positionLeft:e.positionLeft.currentValue}),e.disabled&&this.setOption({disabled:e.disabled.currentValue}),e.content&&(this.setOption({tooltipLabel:e.content.currentValue}),this.active&&(e.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),e.autoHide&&this.setOption({autoHide:e.autoHide.currentValue}),e.id&&this.setOption({id:e.id.currentValue}),e.tooltipOptions&&(this._tooltipOptions=W(W({},this._tooltipOptions),e.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(e){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(e){this.isAutoHide()?this.deactivate():!(mt(e.relatedTarget,"p-tooltip")||mt(e.relatedTarget,"p-tooltip-text")||mt(e.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(e){this.activate()}onBlur(e){this.deactivate()}onInputClick(e){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let e=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},e)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let e=document.createElement("div");e.className="p-tooltip-arrow",this.container.appendChild(e),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?Lt(this.container,this.el.nativeElement):Lt(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let e=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(e,"mouseleave",i=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),yo(this.container,250),this.getOption("tooltipZIndex")==="auto"?Qe.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&Qe.clear(this.container),this.remove()}updateText(){let e=this.getOption("tooltipLabel");if(e instanceof io){let i=this.viewContainer.createEmbeddedView(e);i.detectChanges(),i.rootNodes.forEach(n=>this.tooltipText.appendChild(n))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(e))):this.tooltipText.innerHTML=e}align(){let e=this.getOption("tooltipPosition"),i={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]};for(let[n,r]of i[e].entries())if(n===0)r.call(this);else if(this.isOutOfBounds())r.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let e=this.el.nativeElement.getBoundingClientRect(),i=e.left+bo(),n=e.top+vo();return{left:i,top:n}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.startsWith("P-")?Ce(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let e=this.activeElement,i=wt(e),n=(It(e)-It(this.container))/2;this.alignTooltip(i,n)}alignLeft(){this.preAlign("left");let e=wt(this.container),i=(It(this.el.nativeElement)-It(this.container))/2;this.alignTooltip(-e,i)}alignTop(){this.preAlign("top");let e=(wt(this.el.nativeElement)-wt(this.container))/2,i=It(this.container);this.alignTooltip(e,-i)}alignBottom(){this.preAlign("bottom");let e=(wt(this.el.nativeElement)-wt(this.container))/2,i=It(this.el.nativeElement);this.alignTooltip(e,i)}alignTooltip(e,i){let n=this.getHostOffset(),r=n.left+e,l=n.top+i;this.container.style.left=r+this.getOption("positionLeft")+"px",this.container.style.top=l+this.getOption("positionTop")+"px"}setOption(e){this._tooltipOptions=W(W({},this._tooltipOptions),e)}getOption(e){return this._tooltipOptions[e]}getTarget(e){return mt(e,"p-inputwrapper")?Ce(e,"input"):e}preAlign(e){this.container.style.left="-999px",this.container.style.top="-999px";let i="p-tooltip p-component p-tooltip-"+e;this.container.className=this.getOption("tooltipStyleClass")?i+" "+this.getOption("tooltipStyleClass"):i}isOutOfBounds(){let e=this.container.getBoundingClientRect(),i=e.top,n=e.left,r=wt(this.container),l=It(this.container),h=_o();return n+r>h.width||n<0||i<0||i+l>h.height}onWindowResize(e){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Ki(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),e==="focus"||e==="both"){let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.removeEventListener("focus",this.focusListener),i.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):To(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),super.ngOnDestroy(),this.container&&Qe.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(i){return new(i||t)(M(pt),M(no))};static \u0275dir=oo({type:t,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",appendTo:"appendTo",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",P],showDelay:[2,"showDelay","showDelay",fe],hideDelay:[2,"hideDelay","hideDelay",fe],life:[2,"life","life",fe],positionTop:[2,"positionTop","positionTop",fe],positionLeft:[2,"positionLeft","positionLeft",fe],autoHide:[2,"autoHide","autoHide",P],fitContent:[2,"fitContent","fitContent",P],hideOnEscape:[2,"hideOnEscape","hideOnEscape",P],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions"},features:[G([Mr]),E,Te]})}return t})(),en=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=J({type:t});static \u0275inj=X({})}return t})();var Mi=t=>({height:t}),ml=(t,o,e)=>({"p-multiselect-option-selected":t,"p-disabled":o,"p-focus":e}),qr=t=>({$implicit:t}),ul=(t,o)=>({checked:t,class:o});function hl(t,o){}function fl(t,o){t&1&&m(0,hl,0,0,"ng-template")}function gl(t,o){if(t&1&&m(0,fl,1,0,null,4),t&2){let e=o.class,i=c(2);a("ngTemplateOutlet",i.itemCheckboxIconTemplate)("ngTemplateOutletContext",re(2,ul,i.selected,e))}}function _l(t,o){t&1&&(q(0),m(1,gl,1,5,"ng-template",null,0,A),F())}function bl(t,o){if(t&1&&(p(0,"span"),C(1),d()),t&2){let e,i=c();s(),B((e=i.label)!==null&&e!==void 0?e:"empty")}}function vl(t,o){t&1&&R(0)}var yl=["item"],Cl=["group"],xl=["loader"],wl=["header"],Il=["filter"],Tl=["footer"],Sl=["emptyfilter"],kl=["empty"],Ol=["selecteditems"],Ml=["checkicon"],El=["loadingicon"],ql=["filtericon"],Fl=["removetokenicon"],Pl=["chipicon"],Vl=["clearicon"],Dl=["dropdownicon"],Ll=["itemcheckboxicon"],zl=["headercheckboxicon"],$l=["overlay"],Rl=["filterInput"],Al=["focusInput"],Bl=["items"],Hl=["scroller"],Ul=["lastHiddenFocusableEl"],Nl=["firstHiddenFocusableEl"],jl=["headerCheckbox"],Ql=[[["p-header"]],[["p-footer"]]],Wl=["p-header","p-footer"],Kl=()=>({class:"p-multiselect-chip-icon"}),Gl=(t,o)=>({$implicit:t,removeChip:o}),Fr=t=>({options:t}),Zl=(t,o,e)=>({checked:t,partialSelected:o,class:e}),Pr=(t,o)=>({$implicit:t,options:o}),Yl=()=>({});function Xl(t,o){if(t&1&&(q(0),C(1),F()),t&2){let e=c(2);s(),B(e.label()||"empty")}}function Jl(t,o){if(t&1&&C(0),t&2){let e=c(3);ye(" ",e.getSelectedItemsLabel()," ")}}function ec(t,o){t&1&&R(0)}function tc(t,o){if(t&1){let e=T();p(0,"span",28),_("click",function(n){f(e);let r=c(4).$implicit,l=c(4);return g(l.removeOption(r,n))}),m(1,ec,1,0,"ng-container",29),d()}if(t&2){let e=c(8);b("data-pc-section","clearicon")("aria-hidden",!0),s(),a("ngTemplateOutlet",e.chipIconTemplate||e._chipIconTemplate||e.removeTokenIconTemplate||e._removeTokenIconTemplate)("ngTemplateOutletContext",ce(4,Kl))}}function ic(t,o){if(t&1&&(q(0),m(1,tc,2,5,"span",27),F()),t&2){let e=c(7);s(),a("ngIf",e.chipIconTemplate||e._chipIconTemplate||e.removeTokenIconTemplate||e._removeTokenIconTemplate)}}function nc(t,o){if(t&1&&m(0,ic,2,1,"ng-container",20),t&2){let e=c(6);a("ngIf",!e.disabled&&!e.readonly)}}function oc(t,o){t&1&&(q(0),m(1,nc,1,1,"ng-template",null,5,A),F())}function rc(t,o){if(t&1){let e=T();p(0,"div",24,4)(2,"p-chip",26),_("onRemove",function(n){let r=f(e).$implicit,l=c(4);return g(l.removeOption(r,n))}),m(3,oc,3,0,"ng-container",20),d()()}if(t&2){let e=o.$implicit,i=c(4);s(2),a("label",i.getLabelByValue(e))("removable",!i.disabled&&!i.readonly)("removeIcon",i.chipIcon),s(),a("ngIf",i.chipIconTemplate||i._chipIconTemplate||i.removeTokenIconTemplate||i._removeTokenIconTemplate)}}function ac(t,o){if(t&1&&m(0,rc,4,4,"div",25),t&2){let e=c(3);a("ngForOf",e.chipSelectedItems())}}function sc(t,o){if(t&1&&(q(0),C(1),F()),t&2){let e=c(3);s(),B(e.placeholder()||e.defaultLabel||"empty")}}function lc(t,o){if(t&1&&(q(0),m(1,Jl,1,1)(2,ac,1,1,"div",24)(3,sc,2,1,"ng-container",20),F()),t&2){let e=c(2);s(),te(e.chipSelectedItems()&&e.chipSelectedItems().length===e.maxSelectedLabels?1:2),s(2),a("ngIf",!e.modelValue()||e.modelValue().length===0)}}function cc(t,o){if(t&1&&(q(0),m(1,Xl,2,1,"ng-container",20)(2,lc,4,2,"ng-container",20),F()),t&2){let e=c();s(),a("ngIf",e.display==="comma"),s(),a("ngIf",e.display==="chip")}}function pc(t,o){t&1&&R(0)}function dc(t,o){if(t&1&&(q(0),C(1),F()),t&2){let e=c(2);s(),B(e.placeholder()||e.defaultLabel||"empty")}}function mc(t,o){if(t&1&&(q(0),m(1,pc,1,0,"ng-container",29)(2,dc,2,1,"ng-container",20),F()),t&2){let e=c();s(),a("ngTemplateOutlet",e.selectedItemsTemplate||e._selectedItemsTemplate)("ngTemplateOutletContext",re(3,Gl,e.selectedOptions,e.removeOption.bind(e))),s(),a("ngIf",!e.modelValue()||e.modelValue().length===0)}}function uc(t,o){if(t&1){let e=T();p(0,"TimesIcon",31),_("click",function(n){f(e);let r=c(2);return g(r.clear(n))}),d()}t&2&&b("data-pc-section","clearicon")("aria-hidden",!0)}function hc(t,o){}function fc(t,o){t&1&&m(0,hc,0,0,"ng-template")}function gc(t,o){if(t&1){let e=T();p(0,"span",31),_("click",function(n){f(e);let r=c(2);return g(r.clear(n))}),m(1,fc,1,0,null,32),d()}if(t&2){let e=c(2);b("data-pc-section","clearicon")("aria-hidden",!0),s(),a("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function _c(t,o){if(t&1&&(q(0),m(1,uc,1,2,"TimesIcon",30)(2,gc,2,3,"span",30),F()),t&2){let e=c();s(),a("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),s(),a("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function bc(t,o){t&1&&R(0)}function vc(t,o){if(t&1&&(q(0),m(1,bc,1,0,"ng-container",32),F()),t&2){let e=c(2);s(),a("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)}}function yc(t,o){if(t&1&&u(0,"span",35),t&2){let e=c(3);a("ngClass","p-multiselect-loading-icon pi-spin "+e.loadingIcon)}}function Cc(t,o){t&1&&u(0,"span",36),t&2&&k("p-multiselect-loading-icon pi pi-spinner pi-spin")}function xc(t,o){if(t&1&&(q(0),m(1,yc,1,1,"span",33)(2,Cc,1,2,"span",34),F()),t&2){let e=c(2);s(),a("ngIf",e.loadingIcon),s(),a("ngIf",!e.loadingIcon)}}function wc(t,o){if(t&1&&(q(0),m(1,vc,2,1,"ng-container",20)(2,xc,3,2,"ng-container",20),F()),t&2){let e=c();s(),a("ngIf",e.loadingIconTemplate||e._loadingIconTemplate),s(),a("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate)}}function Ic(t,o){if(t&1&&u(0,"span",40),t&2){let e=c(3);a("ngClass",e.dropdownIcon),b("data-pc-section","triggericon")("aria-hidden",!0)}}function Tc(t,o){t&1&&u(0,"ChevronDownIcon",41),t&2&&(a("styleClass","p-multiselect-dropdown-icon"),b("data-pc-section","triggericon")("aria-hidden",!0))}function Sc(t,o){if(t&1&&(q(0),m(1,Ic,1,3,"span",38)(2,Tc,1,3,"ChevronDownIcon",39),F()),t&2){let e=c(2);s(),a("ngIf",e.dropdownIcon),s(),a("ngIf",!e.dropdownIcon)}}function kc(t,o){}function Oc(t,o){t&1&&m(0,kc,0,0,"ng-template")}function Mc(t,o){if(t&1&&(p(0,"span",42),m(1,Oc,1,0,null,32),d()),t&2){let e=c(2);b("data-pc-section","triggericon")("aria-hidden",!0),s(),a("ngTemplateOutlet",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function Ec(t,o){if(t&1&&m(0,Sc,3,2,"ng-container",20)(1,Mc,2,3,"span",37),t&2){let e=c();a("ngIf",!e.dropdownIconTemplate&&!e._dropdownIconTemplate),s(),a("ngIf",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function qc(t,o){t&1&&R(0)}function Fc(t,o){t&1&&R(0)}function Pc(t,o){if(t&1&&(q(0),m(1,Fc,1,0,"ng-container",29),F()),t&2){let e=c(3);s(),a("ngTemplateOutlet",e.filterTemplate||e._filterTemplate)("ngTemplateOutletContext",H(2,Fr,e.filterOptions))}}function Vc(t,o){if(t&1&&u(0,"CheckIcon",41),t&2){let e=c().class;a("styleClass",e),b("data-pc-section","icon")}}function Dc(t,o){}function Lc(t,o){t&1&&m(0,Dc,0,0,"ng-template")}function zc(t,o){if(t&1&&m(0,Vc,1,2,"CheckIcon",39)(1,Lc,1,0,null,29),t&2){let e=o.class,i=c(5);a("ngIf",!i.headerCheckboxIconTemplate&&!i._headerCheckboxIconTemplate&&i.allSelected()),s(),a("ngTemplateOutlet",i.headerCheckboxIconTemplate||i._headerCheckboxIconTemplate)("ngTemplateOutletContext",Dt(3,Zl,i.allSelected(),i.partialSelected(),e))}}function $c(t,o){if(t&1){let e=T();p(0,"p-checkbox",51,10),_("onChange",function(n){f(e);let r=c(4);return g(r.onToggleAll(n))}),m(2,zc,2,7,"ng-template",null,11,A),d()}if(t&2){let e=c(4);a("ngModel",e.allSelected())("ariaLabel",e.toggleAllAriaLabel)("binary",!0)("variant",e.variant)("disabled",e.disabled)}}function Rc(t,o){t&1&&u(0,"SearchIcon",41),t&2&&a("styleClass","p-multiselect-filter-icon")}function Ac(t,o){}function Bc(t,o){t&1&&m(0,Ac,0,0,"ng-template")}function Hc(t,o){if(t&1&&(p(0,"span",55),m(1,Bc,1,0,null,32),d()),t&2){let e=c(5);s(),a("ngTemplateOutlet",e.filterIconTemplate||e._filterIconTemplate)}}function Uc(t,o){if(t&1){let e=T();p(0,"div",52)(1,"p-iconfield")(2,"input",53,12),_("input",function(n){f(e);let r=c(4);return g(r.onFilterInputChange(n))})("keydown",function(n){f(e);let r=c(4);return g(r.onFilterKeyDown(n))})("click",function(n){f(e);let r=c(4);return g(r.onInputClick(n))})("blur",function(n){f(e);let r=c(4);return g(r.onFilterBlur(n))}),d(),p(4,"p-inputicon"),m(5,Rc,1,1,"SearchIcon",39)(6,Hc,2,1,"span",54),d()()()}if(t&2){let e=c(4);s(2),a("variant",e.variant)("value",e._filterValue()||"")("disabled",e.disabled),b("autocomplete",e.autocomplete)("aria-owns",e.id+"_list")("aria-activedescendant",e.focusedOptionId)("placeholder",e.filterPlaceHolder)("aria-label",e.ariaFilterLabel),s(3),a("ngIf",!e.filterIconTemplate&&!e._filterIconTemplate),s(),a("ngIf",e.filterIconTemplate||e._filterIconTemplate)}}function Nc(t,o){if(t&1&&m(0,$c,4,5,"p-checkbox",49)(1,Uc,7,10,"div",50),t&2){let e=c(3);a("ngIf",e.showToggleAll&&!e.selectionLimit),s(),a("ngIf",e.filter)}}function jc(t,o){if(t&1&&(p(0,"div",48),me(1),m(2,Pc,2,4,"ng-container",22)(3,Nc,2,2,"ng-template",null,9,A),d()),t&2){let e=K(4),i=c(2);s(2),a("ngIf",i.filterTemplate||i._filterTemplate)("ngIfElse",e)}}function Qc(t,o){t&1&&R(0)}function Wc(t,o){if(t&1&&m(0,Qc,1,0,"ng-container",29),t&2){let e=o.$implicit,i=o.options;c(2);let n=K(9);a("ngTemplateOutlet",n)("ngTemplateOutletContext",re(2,Pr,e,i))}}function Kc(t,o){t&1&&R(0)}function Gc(t,o){if(t&1&&m(0,Kc,1,0,"ng-container",29),t&2){let e=o.options,i=c(4);a("ngTemplateOutlet",i.loaderTemplate||i._loaderTemplate)("ngTemplateOutletContext",H(2,Fr,e))}}function Zc(t,o){t&1&&(q(0),m(1,Gc,1,4,"ng-template",null,14,A),F())}function Yc(t,o){if(t&1){let e=T();p(0,"p-scroller",56,13),_("onLazyLoad",function(n){f(e);let r=c(2);return g(r.onLazyLoad.emit(n))}),m(2,Wc,1,5,"ng-template",null,3,A)(4,Zc,3,0,"ng-container",20),d()}if(t&2){let e=c(2);oe(H(9,Mi,e.scrollHeight)),a("items",e.visibleOptions())("itemSize",e.virtualScrollItemSize||e._itemSize)("autoSize",!0)("tabindex",-1)("lazy",e.lazy)("options",e.virtualScrollOptions),s(4),a("ngIf",e.loaderTemplate||e._loaderTemplate)}}function Xc(t,o){t&1&&R(0)}function Jc(t,o){if(t&1&&(q(0),m(1,Xc,1,0,"ng-container",29),F()),t&2){c();let e=K(9),i=c();s(),a("ngTemplateOutlet",e)("ngTemplateOutletContext",re(3,Pr,i.visibleOptions(),ce(2,Yl)))}}function ep(t,o){if(t&1&&(p(0,"span"),C(1),d()),t&2){let e=c(2).$implicit,i=c(3);s(),B(i.getOptionGroupLabel(e.optionGroup))}}function tp(t,o){t&1&&R(0)}function ip(t,o){if(t&1&&(q(0),p(1,"li",60),m(2,ep,2,1,"span",20)(3,tp,1,0,"ng-container",29),d(),F()),t&2){let e=c(),i=e.$implicit,n=e.index,r=c().options,l=c(2);s(),a("ngStyle",H(5,Mi,r.itemSize+"px")),b("id",l.id+"_"+l.getOptionIndex(n,r)),s(),a("ngIf",!l.groupTemplate),s(),a("ngTemplateOutlet",l.groupTemplate)("ngTemplateOutletContext",H(7,qr,i.optionGroup))}}function np(t,o){if(t&1){let e=T();q(0),p(1,"p-multiselect-item",61),_("onClick",function(n){f(e);let r=c().index,l=c().options,h=c(2);return g(h.onOptionSelect(n,!1,h.getOptionIndex(r,l)))})("onMouseEnter",function(n){f(e);let r=c().index,l=c().options,h=c(2);return g(h.onOptionMouseEnter(n,h.getOptionIndex(r,l)))}),d(),F()}if(t&2){let e=c(),i=e.$implicit,n=e.index,r=c().options,l=c(2);s(),a("id",l.id+"_"+l.getOptionIndex(n,r))("option",i)("selected",l.isSelected(i))("label",l.getOptionLabel(i))("disabled",l.isOptionDisabled(i))("template",l.itemTemplate||l._itemTemplate)("checkIconTemplate",l.checkIconTemplate||l._checkIconTemplate)("itemCheckboxIconTemplate",l.itemCheckboxIconTemplate||l._itemCheckboxIconTemplate)("itemSize",r.itemSize)("focused",l.focusedOptionIndex()===l.getOptionIndex(n,r))("ariaPosInset",l.getAriaPosInset(l.getOptionIndex(n,r)))("ariaSetSize",l.ariaSetSize)("variant",l.variant)("highlightOnSelect",l.highlightOnSelect)}}function op(t,o){if(t&1&&m(0,ip,4,9,"ng-container",20)(1,np,2,14,"ng-container",20),t&2){let e=o.$implicit,i=c(3);a("ngIf",i.isOptionGroup(e)),s(),a("ngIf",!i.isOptionGroup(e))}}function rp(t,o){if(t&1&&C(0),t&2){let e=c(4);ye(" ",e.emptyFilterMessageLabel," ")}}function ap(t,o){t&1&&R(0)}function sp(t,o){if(t&1&&m(0,ap,1,0,"ng-container",32),t&2){let e=c(4);a("ngTemplateOutlet",e.emptyFilterTemplate||e._emptyFilterTemplate||e.emptyTemplate||e._emptyFilterTemplate)}}function lp(t,o){if(t&1&&(p(0,"li",62),m(1,rp,1,1)(2,sp,1,1,"ng-container"),d()),t&2){let e=c().options,i=c(2);a("ngStyle",H(2,Mi,e.itemSize+"px")),s(),te(!i.emptyFilterTemplate&&!i._emptyFilterTemplate&&!i.emptyTemplate&&!i._emptyTemplate?1:2)}}function cp(t,o){if(t&1&&C(0),t&2){let e=c(4);ye(" ",e.emptyMessageLabel," ")}}function pp(t,o){t&1&&R(0)}function dp(t,o){if(t&1&&m(0,pp,1,0,"ng-container",32),t&2){let e=c(4);a("ngTemplateOutlet",e.emptyTemplate||e._emptyTemplate)}}function mp(t,o){if(t&1&&(p(0,"li",62),m(1,cp,1,1)(2,dp,1,1,"ng-container"),d()),t&2){let e=c().options,i=c(2);a("ngStyle",H(2,Mi,e.itemSize+"px")),s(),te(!i.emptyTemplate&&!i._emptyTemplate?1:2)}}function up(t,o){if(t&1&&(p(0,"ul",57,15),m(2,op,2,2,"ng-template",58)(3,lp,3,4,"li",59)(4,mp,3,4,"li",59),d()),t&2){let e=o.$implicit,i=o.options,n=c(2);oe(i.contentStyle),a("ngClass",i.contentStyleClass),b("aria-label",n.listLabel),s(2),a("ngForOf",e),s(),a("ngIf",n.hasFilter()&&n.isEmpty()),s(),a("ngIf",!n.hasFilter()&&n.isEmpty())}}function hp(t,o){t&1&&R(0)}function fp(t,o){if(t&1&&(p(0,"div"),me(1,1),m(2,hp,1,0,"ng-container",32),d()),t&2){let e=c(2);s(2),a("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}function gp(t,o){if(t&1){let e=T();p(0,"div",43)(1,"span",44,6),_("focus",function(n){f(e);let r=c();return g(r.onFirstHiddenFocus(n))}),d(),m(3,qc,1,0,"ng-container",32)(4,jc,5,2,"div",45),p(5,"div",46),m(6,Yc,5,11,"p-scroller",47)(7,Jc,2,6,"ng-container",20)(8,up,5,7,"ng-template",null,7,A),d(),m(10,fp,3,1,"div",20),p(11,"span",44,8),_("focus",function(n){f(e);let r=c();return g(r.onLastHiddenFocus(n))}),d()()}if(t&2){let e=c();k(e.panelStyleClass),a("ngClass","p-multiselect-overlay p-component")("ngStyle",e.panelStyle),b("id",e.id+"_list"),s(),b("tabindex",0)("data-p-hidden-accessible",!0)("data-p-hidden-focusable",!0),s(2),a("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),s(),a("ngIf",e.showHeader),s(),Se("max-height",e.virtualScroll?"auto":e.scrollHeight||"auto"),s(),a("ngIf",e.virtualScroll),s(),a("ngIf",!e.virtualScroll),s(3),a("ngIf",e.footerFacet||e.footerTemplate||e._footerTemplate),s(),b("tabindex",0)("data-p-hidden-accessible",!0)("data-p-hidden-focusable",!0)}}var _p=({dt:t})=>`
.p-multiselect {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: ${t("multiselect.background")};
    border: 1px solid ${t("multiselect.border.color")};
    transition: background ${t("multiselect.transition.duration")}, color ${t("multiselect.transition.duration")}, border-color ${t("multiselect.transition.duration")}, outline-color ${t("multiselect.transition.duration")}, box-shadow ${t("multiselect.transition.duration")};
    border-radius: ${t("multiselect.border.radius")};
    outline-color: transparent;
    box-shadow: ${t("multiselect.shadow")};
}

.p-multiselect.ng-invalid.ng-dirty {
    border-color: ${t("multiselect.invalid.border.color")};
}

.p-multiselect:not(.p-disabled):hover {
    border-color: ${t("multiselect.hover.border.color")};
}

.p-multiselect:not(.p-disabled).p-focus {
    border-color: ${t("multiselect.focus.border.color")};
    box-shadow: ${t("multiselect.focus.ring.shadow")};
    outline: ${t("multiselect.focus.ring.width")} ${t("multiselect.focus.ring.style")} ${t("multiselect.focus.ring.color")};
    outline-offset: ${t("multiselect.focus.ring.offset")};
}

.p-multiselect.p-variant-filled {
    background: ${t("multiselect.filled.background")};
}

.p-multiselect.p-variant-filled:not(.p-disabled):hover {
    background: ${t("multiselect.filled.hover.background")};
}

.p-multiselect.p-variant-filled.p-focus {
    background: ${t("multiselect.filled.focus.background")};
}

.p-multiselect.p-disabled {
    opacity: 1;
    background: ${t("multiselect.disabled.background")};
}

.p-multiselect-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: ${t("multiselect.dropdown.color")};
    width: ${t("multiselect.dropdown.width")};
    border-start-end-radius: ${t("multiselect.border.radius")};
    border-end-end-radius: ${t("multiselect.border.radius")};
}

.p-multiselect-label-container {
    overflow: hidden;
    flex: 1 1 auto;
    cursor: pointer;
}

.p-multiselect-label {
    display: flex;
    align-items-center;
    gap: calc(${t("multiselect.padding.y")} / 2);
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: ${t("multiselect.padding.y")} ${t("multiselect.padding.x")};
    color: ${t("multiselect.color")};
}

.p-multiselect-label.p-placeholder {
    color: ${t("multiselect.placeholder.color")};
}

p-multiSelect.ng-invalid.ng-dirty .p-multiselect-label.p-placeholder,
p-multi-select.ng-invalid.ng-dirty .p-multiselect-label.p-placeholder,
p-multiselect.ng-invalid.ng-dirty .p-multiselect-label.p-placeholder {
    color: ${t("multiselect.invalid.placeholder.color")};
}

.p-multiselect.p-disabled .p-multiselect-label {
    color: ${t("multiselect.disabled.color")};
}

.p-multiselect-label-empty {
    overflow: hidden;
    visibility: hidden;
}

.p-multiselect .p-multiselect-overlay {
    min-width: 100%;
}

.p-multiselect-overlay {
    background: ${t("multiselect.overlay.background")};
    color: ${t("multiselect.overlay.color")};
    border: 1px solid ${t("multiselect.overlay.border.color")};
    border-radius: ${t("multiselect.overlay.border.radius")};
    box-shadow: ${t("multiselect.overlay.shadow")};
}

.p-multiselect-header {
    display: flex;
    align-items: center;
    padding: ${t("multiselect.list.header.padding")};
}

.p-multiselect-header .p-checkbox {
    margin-inline-end: ${t("multiselect.option.gap")};
}

.p-multiselect-filter-container {
    flex: 1 1 auto;
}

.p-multiselect-filter {
    width: 100%;
}

.p-multiselect-list-container {
    overflow: auto;
}

.p-multiselect-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: ${t("multiselect.list.padding")};
    display: flex;
    flex-direction: column;
    gap: ${t("multiselect.list.gap")}
}

.p-multiselect-option {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: ${t("multiselect.option.gap")};
    padding: ${t("multiselect.option.padding")};
    border: 0 none;
    color: ${t("multiselect.option.color")};
    background: transparent;
    transition: background ${t("multiselect.transition.duration")}, color ${t("multiselect.transition.duration")}, border-color ${t("multiselect.transition.duration")}, box-shadow ${t("multiselect.transition.duration")}, outline-color ${t("multiselect.transition.duration")};
    border-radius: ${t("multiselect.option.border.radius")}
}

.p-multiselect-option:not(.p-multiselect-option-selected):not(.p-disabled).p-focus {
    background: ${t("multiselect.option.focus.background")};
    color: ${t("multiselect.option.focus.color")};
}

.p-multiselect-option.p-multiselect-option-selected {
    background: ${t("multiselect.option.selected.background")};
    color: ${t("multiselect.option.selected.color")};
}

.p-multiselect-option.p-multiselect-option-selected.p-focus {
    background: ${t("multiselect.option.selected.focus.background")};
    color: ${t("multiselect.option.selected.focus.color")};
}

.p-multiselect-option-group {
    cursor: auto;
    margin: 0;
    padding: ${t("multiselect.option.group.padding")};
    background: ${t("multiselect.option.group.background")};
    color: ${t("multiselect.option.group.color")};
    font-weight: ${t("multiselect.option.group.font.weight")};
}

.p-multiselect-empty-message {
    padding: ${t("multiselect.empty.message.padding")};
}

.p-multiselect-label .p-chip {
    padding-top: calc(${t("multiselect.padding.y")} / 2);
    padding-bottom: calc(${t("multiselect.padding.y")} / 2);
    border-radius: ${t("multiselect.chip.border.radius")};
}

.p-multiselect-label:has(.p-chip) {
    padding: calc(${t("multiselect.padding.y")} / 2) calc(${t("multiselect.padding.x")} / 2);
}

.p-multiselect-fluid {
    display: flex;
}

.p-multiselect-sm .p-multiselect-label {
    font-size: ${t("multiselect.sm.font.size")};
    padding-block: ${t("multiselect.sm.padding.y")};
    padding-inline: ${t("multiselect.sm.padding.x")};
}

.p-multiselect-sm .p-multiselect-dropdown .p-icon {
    font-size: ${t("multiselect.sm.font.size")};
    width: ${t("multiselect.sm.font.size")};
    height: ${t("multiselect.sm.font.size")};
}

.p-multiselect-lg .p-multiselect-label {
    font-size: ${t("multiselect.lg.font.size")};
    padding-block: ${t("multiselect.lg.padding.y")};
    padding-inline: ${t("multiselect.lg.padding.x")};
}

.p-multiselect-lg .p-multiselect-dropdown .p-icon {
    font-size: ${t("multiselect.lg.font.size")};
    width: ${t("multiselect.lg.font.size")};
    height: ${t("multiselect.lg.font.size")};
}

.p-multiselect-clear-icon {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: ${t("multiselect.clear.icon.color")};
}`,bp={root:({props:t})=>({position:t.appendTo==="self"?"relative":void 0})},vp={root:({instance:t})=>({"p-multiselect p-component p-inputwrapper":!0,"p-multiselect-display-chip":t.display==="chip","p-disabled":t.disabled,"p-invalid":t.invalid,"p-variant-filled":t.variant?t.variant==="filled":t.config.inputStyle==="filled","p-focus":t.focused,"p-inputwrapper-filled":t.filled,"p-inputwrapper-focus":t.focused||t.overlayVisible,"p-multiselect-open":t.overlayVisible,"p-multiselect-fluid":t.hasFluid,"p-multiselect-sm p-inputfield-sm":t.size==="small","p-multiselect-lg p-inputfield-lg":t.size==="large"}),labelContainer:"p-multiselect-label-container",label:({instance:t})=>({"p-multiselect-label":!0,"p-placeholder":t.label()===t.placeholder(),"p-multiselect-label-empty":!t.placeholder()&&!t.defaultLabel&&(!t.modelValue()||t.modelValue().length===0)}),chipItem:"p-multiselect-chip-item",pcChip:"p-multiselect-chip",chipIcon:"p-multiselect-chip-icon",dropdown:"p-multiselect-dropdown",loadingIcon:"p-multiselect-loading-icon",dropdownIcon:"p-multiselect-dropdown-icon",overlay:"p-multiselect-overlay p-component",header:"p-multiselect-header",pcFilterContainer:"p-multiselect-filter-container",pcFilter:"p-multiselect-filter",listContainer:"p-multiselect-list-container",list:"p-multiselect-list",optionGroup:"p-multiselect-option-group",option:({instance:t,option:o,index:e,getItemOptions:i})=>({"p-multiselect-option":!0,"p-multiselect-option-selected":t.isSelected(o)&&t.highlightOnSelect,"p-focus":t.focusedOptionIndex===t.getOptionIndex(e,i),"p-disabled":t.isOptionDisabled(o)}),emptyMessage:"p-multiselect-empty-message"},Er=(()=>{class t extends Y{name="multiselect";theme=_p;classes=vp;inlineStyles=bp;static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var yp={provide:Xt,useExisting:yt(()=>tn),multi:!0},Cp=(()=>{class t extends Q{id;option;selected;label;disabled;itemSize;focused;ariaPosInset;ariaSetSize;variant;template;checkIconTemplate;itemCheckboxIconTemplate;highlightOnSelect;onClick=new I;onMouseEnter=new I;onOptionClick(e){this.onClick.emit({originalEvent:e,option:this.option,selected:this.selected}),e.stopPropagation(),e.preventDefault()}onOptionMouseEnter(e){this.onMouseEnter.emit({originalEvent:e,option:this.option,selected:this.selected})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-multiSelectItem"],["p-multiselect-item"]],inputs:{id:"id",option:"option",selected:[2,"selected","selected",P],label:"label",disabled:[2,"disabled","disabled",P],itemSize:[2,"itemSize","itemSize",fe],focused:[2,"focused","focused",P],ariaPosInset:"ariaPosInset",ariaSetSize:"ariaSetSize",variant:"variant",template:"template",checkIconTemplate:"checkIconTemplate",itemCheckboxIconTemplate:"itemCheckboxIconTemplate",highlightOnSelect:[2,"highlightOnSelect","highlightOnSelect",P]},outputs:{onClick:"onClick",onMouseEnter:"onMouseEnter"},features:[E],decls:5,vars:28,consts:[["checkboxicon",""],["pRipple","","role","option",1,"p-multiselect-option",3,"click","mouseenter","ngStyle","ngClass","id"],[3,"ngModel","binary","tabindex","variant","ariaLabel"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,n){i&1&&(p(0,"li",1),_("click",function(l){return n.onOptionClick(l)})("mouseenter",function(l){return n.onOptionMouseEnter(l)}),p(1,"p-checkbox",2),m(2,_l,3,0,"ng-container",3),d(),m(3,bl,2,1,"span",3)(4,vl,1,0,"ng-container",4),d()),i&2&&(a("ngStyle",H(20,Mi,n.itemSize+"px"))("ngClass",Dt(22,ml,n.selected&&n.highlightOnSelect,n.disabled,n.focused))("id",n.id),b("aria-label",n.label)("aria-setsize",n.ariaSetSize)("aria-posinset",n.ariaPosInset)("aria-selected",n.selected)("data-p-focused",n.focused)("data-p-highlight",n.selected)("data-p-disabled",n.disabled)("aria-checked",n.selected),s(),a("ngModel",n.selected)("binary",!0)("tabindex",-1)("variant",n.variant)("ariaLabel",n.label),s(),a("ngIf",n.itemCheckboxIconTemplate),s(),a("ngIf",!n.template),s(),a("ngTemplateOutlet",n.template)("ngTemplateOutletContext",H(26,qr,n.option)))},dependencies:[U,ie,Z,ae,ke,Ji,Ci,Ge,yi,oi,V],encapsulation:2})}return t})(),tn=(()=>{class t extends Q{zone;filterService;overlayService;id;ariaLabel;style;styleClass;panelStyle;panelStyleClass;inputId;disabled;fluid;readonly;group;filter=!0;filterPlaceHolder;filterLocale;overlayVisible;tabindex=0;variant;appendTo;dataKey;name;ariaLabelledBy;set displaySelectedLabel(e){this._displaySelectedLabel=e}get displaySelectedLabel(){return this._displaySelectedLabel}set maxSelectedLabels(e){this._maxSelectedLabels=e}get maxSelectedLabels(){return this._maxSelectedLabels}selectionLimit;selectedItemsLabel;showToggleAll=!0;emptyFilterMessage="";emptyMessage="";resetFilterOnHide=!1;dropdownIcon;chipIcon;optionLabel;optionValue;optionDisabled;optionGroupLabel="label";optionGroupChildren="items";showHeader=!0;filterBy;scrollHeight="200px";lazy=!1;virtualScroll;loading=!1;virtualScrollItemSize;loadingIcon;virtualScrollOptions;overlayOptions;ariaFilterLabel;filterMatchMode="contains";tooltip="";tooltipPosition="right";tooltipPositionStyle="absolute";tooltipStyleClass;autofocusFilter=!1;display="comma";autocomplete="off";size;showClear=!1;autofocus;get autoZIndex(){return this._autoZIndex}set autoZIndex(e){this._autoZIndex=e,console.log("The autoZIndex property is deprecated since v14.2.0, use overlayOptions property instead.")}get baseZIndex(){return this._baseZIndex}set baseZIndex(e){this._baseZIndex=e,console.log("The baseZIndex property is deprecated since v14.2.0, use overlayOptions property instead.")}get showTransitionOptions(){return this._showTransitionOptions}set showTransitionOptions(e){this._showTransitionOptions=e,console.log("The showTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.")}get hideTransitionOptions(){return this._hideTransitionOptions}set hideTransitionOptions(e){this._hideTransitionOptions=e,console.log("The hideTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.")}set defaultLabel(e){this._defaultLabel=e,console.log("defaultLabel property is deprecated since 16.6.0, use placeholder instead")}get defaultLabel(){return this._defaultLabel}set placeholder(e){this._placeholder.set(e)}get placeholder(){return this._placeholder.asReadonly()}get options(){return this._options()}set options(e){ko(this._options(),e)||this._options.set(e)}get filterValue(){return this._filterValue()}set filterValue(e){this._filterValue.set(e)}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=e,console.log("The itemSize property is deprecated, use virtualScrollItemSize property instead.")}get selectAll(){return this._selectAll}set selectAll(e){this._selectAll=e}focusOnHover=!0;filterFields;selectOnFocus=!1;autoOptionFocus=!1;highlightOnSelect=!0;onChange=new I;onFilter=new I;onFocus=new I;onBlur=new I;onClick=new I;onClear=new I;onPanelShow=new I;onPanelHide=new I;onLazyLoad=new I;onRemove=new I;onSelectAllChange=new I;overlayViewChild;filterInputChild;focusInputViewChild;itemsViewChild;scroller;lastHiddenFocusableElementOnOverlay;firstHiddenFocusableElementOnOverlay;headerCheckboxViewChild;footerFacet;headerFacet;_componentStyle=j(Er);searchValue;searchTimeout;_selectAll=null;_autoZIndex;_baseZIndex;_showTransitionOptions;_hideTransitionOptions;_defaultLabel;_placeholder=Me(void 0);_itemSize;_selectionLimit;_disableTooltip=!1;value;_filteredOptions;onModelChange=()=>{};onModelTouched=()=>{};valuesAsString;focus;filtered;itemTemplate;groupTemplate;loaderTemplate;headerTemplate;filterTemplate;footerTemplate;emptyFilterTemplate;emptyTemplate;selectedItemsTemplate;checkIconTemplate;loadingIconTemplate;filterIconTemplate;removeTokenIconTemplate;chipIconTemplate;clearIconTemplate;dropdownIconTemplate;itemCheckboxIconTemplate;headerCheckboxIconTemplate;templates;_itemTemplate;_groupTemplate;_loaderTemplate;_headerTemplate;_filterTemplate;_footerTemplate;_emptyFilterTemplate;_emptyTemplate;_selectedItemsTemplate;_checkIconTemplate;_loadingIconTemplate;_filterIconTemplate;_removeTokenIconTemplate;_chipIconTemplate;_clearIconTemplate;_dropdownIconTemplate;_itemCheckboxIconTemplate;_headerCheckboxIconTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break;case"group":this._groupTemplate=e.template;break;case"selectedItems":case"selecteditems":this._selectedItemsTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"filter":this._filterTemplate=e.template;break;case"emptyfilter":this._emptyFilterTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"checkicon":this._checkIconTemplate=e.template,console.warn("checkicon is deprecated and will removed in future. Use itemcheckboxicon or headercheckboxicon templates instead.");break;case"headercheckboxicon":this._headerCheckboxIconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;case"filtericon":this._filterIconTemplate=e.template;break;case"removetokenicon":this._removeTokenIconTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"dropdownicon":this._dropdownIconTemplate=e.template;break;case"itemcheckboxicon":this._itemCheckboxIconTemplate=e.template;break;case"chipicon":this._chipIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}headerCheckboxFocus;filterOptions;preventModelTouched;preventDocumentDefault;focused=!1;itemsWrapper;_displaySelectedLabel=!0;_maxSelectedLabels=3;modelValue=Me(null);_filterValue=Me(null);_options=Me(null);startRangeIndex=Me(-1);focusedOptionIndex=Me(-1);selectedOptions;clickInProgress=!1;get hostClasses(){let e=[];return typeof this.rootClass=="string"?e.push(this.rootClass):Array.isArray(this.rootClass)?e.push(...this.rootClass):typeof this.rootClass=="object"&&Object.keys(this.rootClass).filter(i=>this.rootClass[i]).forEach(i=>e.push(i)),this.styleClass&&e.push(this.styleClass),e.join(" ")}get rootClass(){return this._componentStyle.classes.root({instance:this})}get labelClass(){return this._componentStyle.classes.label({instance:this})}get emptyMessageLabel(){return this.emptyMessage||this.config.getTranslation(We.EMPTY_MESSAGE)}get emptyFilterMessageLabel(){return this.emptyFilterMessage||this.config.getTranslation(We.EMPTY_FILTER_MESSAGE)}get filled(){return typeof this.modelValue()=="string"?!!this.modelValue():we(this.modelValue())}get isVisibleClearIcon(){return this.modelValue()!=null&&this.modelValue()!==""&&we(this.modelValue())&&this.showClear&&!this.disabled&&!this.readonly&&this.filled}get toggleAllAriaLabel(){return this.config.translation.aria?this.config.translation.aria[this.allSelected()?"selectAll":"unselectAll"]:void 0}get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}get listLabel(){return this.config.getTranslation(We.ARIA).listLabel}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return this.fluid||!!i}getAllVisibleAndNonVisibleOptions(){return this.group?this.flatOptions(this.options):this.options||[]}visibleOptions=Wt(()=>{let e=this.getAllVisibleAndNonVisibleOptions(),i=Mo(e)&&Ht.isObject(e[0]);if(this._filterValue()){let n;if(i?n=this.filterService.filter(e,this.searchFields(),this._filterValue(),this.filterMatchMode,this.filterLocale):n=e.filter(r=>r.toString().toLocaleLowerCase().includes(this._filterValue().toLocaleLowerCase())),this.group){let r=this.options||[],l=[];return r.forEach(h=>{let D=this.getOptionGroupChildren(h).filter(N=>n.includes(N));D.length>0&&l.push(je(W({},h),{[typeof this.optionGroupChildren=="string"?this.optionGroupChildren:"items"]:[...D]}))}),this.flatOptions(l)}return n}return e});label=Wt(()=>{let e,i=this.modelValue();if(i&&i.length&&this.displaySelectedLabel){if(we(this.maxSelectedLabels)&&i.length>this.maxSelectedLabels)return this.getSelectedItemsLabel();e="";for(let n=0;n<i.length;n++)n!==0&&(e+=", "),e+=this.getLabelByValue(i[n])}else e=this.placeholder()||this.defaultLabel||"";return e});chipSelectedItems=Wt(()=>we(this.maxSelectedLabels)&&this.modelValue()&&this.modelValue().length>this.maxSelectedLabels?this.modelValue().slice(0,this.maxSelectedLabels):this.modelValue());constructor(e,i,n){super(),this.zone=e,this.filterService=i,this.overlayService=n,mo(()=>{let r=this.modelValue(),l=this.getAllVisibleAndNonVisibleOptions();l&&we(l)&&(this.optionValue&&this.optionLabel&&r?this.selectedOptions=l.filter(h=>r.includes(h[this.optionLabel])||r.includes(h[this.optionValue])):this.selectedOptions=r,this.cd.markForCheck())})}ngOnInit(){super.ngOnInit(),this.id=this.id||De("pn_id_"),this.autoUpdateModel(),this.filterBy&&(this.filterOptions={filter:e=>this.onFilterInputChange(e),reset:()=>this.resetFilter()})}maxSelectionLimitReached(){return this.selectionLimit&&this.modelValue()&&this.modelValue().length===this.selectionLimit}ngAfterViewInit(){super.ngAfterViewInit(),this.overlayVisible&&this.show()}ngAfterViewChecked(){this.filtered&&(this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild?.alignOverlay()},1)}),this.filtered=!1)}flatOptions(e){return(e||[]).reduce((i,n,r)=>{i.push({optionGroup:n,group:!0,index:r});let l=this.getOptionGroupChildren(n);return l&&l.forEach(h=>i.push(h)),i},[])}autoUpdateModel(){if(this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption()){this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex());let e=this.getOptionValue(this.visibleOptions()[this.focusedOptionIndex()]);this.onOptionSelect({originalEvent:null,option:[e]})}}updateModel(e,i){this.value=e,this.onModelChange(e),this.modelValue.set(e)}onInputClick(e){e.stopPropagation(),e.preventDefault(),this.focusedOptionIndex.set(-1)}onOptionSelect(e,i=!1,n=-1){let{originalEvent:r,option:l}=e;if(this.disabled||this.isOptionDisabled(l))return;let h=this.isSelected(l),w=null;h?w=this.modelValue().filter(D=>!bt(D,this.getOptionValue(l),this.equalityKey())):w=[...this.modelValue()||[],this.getOptionValue(l)],this.updateModel(w,r),n!==-1&&this.focusedOptionIndex.set(n),i&&Re(this.focusInputViewChild?.nativeElement),this.onChange.emit({originalEvent:e,value:w,itemValue:l})}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}onOptionSelectRange(e,i=-1,n=-1){if(i===-1&&(i=this.findNearestSelectedOptionIndex(n,!0)),n===-1&&(n=this.findNearestSelectedOptionIndex(i)),i!==-1&&n!==-1){let r=Math.min(i,n),l=Math.max(i,n),h=this.visibleOptions().slice(r,l+1).filter(w=>this.isValidOption(w)).map(w=>this.getOptionValue(w));this.updateModel(h,e)}}searchFields(){return(this.filterBy||this.optionLabel||"label").split(",")}findNearestSelectedOptionIndex(e,i=!1){let n=-1;return this.hasSelectedOption()&&(i?(n=this.findPrevSelectedOptionIndex(e),n=n===-1?this.findNextSelectedOptionIndex(e):n):(n=this.findNextSelectedOptionIndex(e),n=n===-1?this.findPrevSelectedOptionIndex(e):n)),n>-1?n:e}findPrevSelectedOptionIndex(e){let i=this.hasSelectedOption()&&e>0?vi(this.visibleOptions().slice(0,e),n=>this.isValidSelectedOption(n)):-1;return i>-1?i:-1}findFirstFocusedOptionIndex(){let e=this.findFirstSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findFirstSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextSelectedOptionIndex(e){let i=this.hasSelectedOption()&&e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(n=>this.isValidSelectedOption(n)):-1;return i>-1?i+e+1:-1}equalityKey(){return this.optionValue?null:this.dataKey}hasSelectedOption(){return we(this.modelValue())}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}isOptionGroup(e){return(this.group||this.optionGroupLabel)&&e.optionGroup&&e.group}isValidOption(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionDisabled(e){return this.maxSelectionLimitReached()&&!this.isSelected(e)?!0:this.optionDisabled?At(e,this.optionDisabled):e&&e.disabled!==void 0?e.disabled:!1}isSelected(e){let i=this.getOptionValue(e);return(this.modelValue()||[]).some(n=>bt(n,i,this.equalityKey()))}isOptionMatched(e){return this.isValidOption(e)&&this.getOptionLabel(e).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale))}isEmpty(){return!this._options()||this.visibleOptions()&&this.visibleOptions().length===0}getOptionIndex(e,i){return this.virtualScrollerDisabled?e:i&&i.getItemOptions(e).index}getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions().slice(0,e).filter(i=>this.isOptionGroup(i)).length:e)+1}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}getLabelByValue(e){let n=(this.group?this.flatOptions(this._options()):this._options()||[]).find(r=>!this.isOptionGroup(r)&&bt(this.getOptionValue(r),e,this.equalityKey()));return n?this.getOptionLabel(n):null}getSelectedItemsLabel(){let e=/{(.*?)}/,i=this.selectedItemsLabel?this.selectedItemsLabel:this.config.getTranslation(We.SELECTION_MESSAGE);return e.test(i)?i.replace(i.match(e)[0],this.modelValue().length+""):i}getOptionLabel(e){return this.optionLabel?At(e,this.optionLabel):e&&e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?At(e,this.optionValue):!this.optionLabel&&e&&e.value!==void 0?e.value:e}getOptionGroupLabel(e){return this.optionGroupLabel?At(e,this.optionGroupLabel):e&&e.label!=null?e.label:e}getOptionGroupChildren(e){return this.optionGroupChildren?At(e,this.optionGroupChildren):e.items}onKeyDown(e){if(this.disabled){e.preventDefault();return}let i=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"Space":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"ShiftLeft":case"ShiftRight":this.onShiftKey();break;default:if(e.code==="KeyA"&&i){let n=this.visibleOptions().filter(r=>this.isValidOption(r)).map(r=>this.getOptionValue(r));this.updateModel(n,e),e.preventDefault();break}!i&&ji(e.key)&&(!this.overlayVisible&&this.show(),this.searchOptions(e,e.key),e.preventDefault());break}}onFilterKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,!0);break;case"Home":this.onHomeKey(e,!0);break;case"End":this.onEndKey(e,!0);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e,!0);break;default:break}}onArrowLeftKey(e,i=!1){i&&this.focusedOptionIndex.set(-1)}onArrowDownKey(e){let i=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.findFirstFocusedOptionIndex();e.shiftKey&&this.onOptionSelectRange(e,this.startRangeIndex(),i),this.changeFocusedOptionIndex(e,i),!this.overlayVisible&&this.show(),e.preventDefault(),e.stopPropagation()}onArrowUpKey(e,i=!1){if(e.altKey&&!i)this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.overlayVisible&&this.hide(),e.preventDefault();else{let n=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.findLastFocusedOptionIndex();e.shiftKey&&this.onOptionSelectRange(e,n,this.startRangeIndex()),this.changeFocusedOptionIndex(e,n),!this.overlayVisible&&this.show(),e.preventDefault()}e.stopPropagation()}onHomeKey(e,i=!1){let{currentTarget:n}=e;if(i){let r=n.value.length;n.setSelectionRange(0,e.shiftKey?r:0),this.focusedOptionIndex.set(-1)}else{let r=e.metaKey||e.ctrlKey,l=this.findFirstOptionIndex();e.shiftKey&&r&&this.onOptionSelectRange(e,l,this.startRangeIndex()),this.changeFocusedOptionIndex(e,l),!this.overlayVisible&&this.show()}e.preventDefault()}onEndKey(e,i=!1){let{currentTarget:n}=e;if(i){let r=n.value.length;n.setSelectionRange(e.shiftKey?0:r,r),this.focusedOptionIndex.set(-1)}else{let r=e.metaKey||e.ctrlKey,l=this.findLastFocusedOptionIndex();e.shiftKey&&r&&this.onOptionSelectRange(e,this.startRangeIndex(),l),this.changeFocusedOptionIndex(e,l),!this.overlayVisible&&this.show()}e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onEnterKey(e){this.overlayVisible?this.focusedOptionIndex()!==-1&&(e.shiftKey?this.onOptionSelectRange(e,this.focusedOptionIndex()):this.onOptionSelect({originalEvent:e,option:this.visibleOptions()[this.focusedOptionIndex()]})):this.onArrowDownKey(e),e.preventDefault()}onEscapeKey(e){this.overlayVisible&&this.hide(!0),e.stopPropagation(),e.preventDefault()}onDeleteKey(e){this.showClear&&(this.clear(e),e.preventDefault())}onTabKey(e,i=!1){i||(this.overlayVisible&&this.hasFocusableElements()?(Re(e.shiftKey?this.lastHiddenFocusableElementOnOverlay.nativeElement:this.firstHiddenFocusableElementOnOverlay.nativeElement),e.preventDefault()):(this.focusedOptionIndex()!==-1&&this.onOptionSelect({originalEvent:e,option:this.visibleOptions()[this.focusedOptionIndex()]}),this.overlayVisible&&this.hide(this.filter)))}onShiftKey(){this.startRangeIndex.set(this.focusedOptionIndex())}onContainerClick(e){if(!(this.disabled||this.loading||this.readonly||e.target.isSameNode(this.focusInputViewChild?.nativeElement))){if(!this.overlayViewChild||!this.overlayViewChild.el.nativeElement.contains(e.target)){if(this.clickInProgress)return;this.clickInProgress=!0,setTimeout(()=>{this.clickInProgress=!1},150),this.overlayVisible?this.hide(!0):this.show(!0)}this.focusInputViewChild?.nativeElement.focus({preventScroll:!0}),this.onClick.emit(e),this.cd.detectChanges()}}onFirstHiddenFocus(e){let i=e.relatedTarget===this.focusInputViewChild?.nativeElement?xo(this.overlayViewChild?.overlayViewChild?.nativeElement,':not([data-p-hidden-focusable="true"])'):this.focusInputViewChild?.nativeElement;Re(i)}onInputFocus(e){this.focused=!0;let i=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(i),this.overlayVisible&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit({originalEvent:e})}onInputBlur(e){this.focused=!1,this.onBlur.emit({originalEvent:e}),this.preventModelTouched||this.onModelTouched(),this.preventModelTouched=!1}onFilterInputChange(e){let i=e.target.value;this._filterValue.set(i),this.focusedOptionIndex.set(-1),this.onFilter.emit({originalEvent:e,filter:this._filterValue()}),!this.virtualScrollerDisabled&&this.scroller.scrollToIndex(0),setTimeout(()=>{this.overlayViewChild.alignOverlay()})}onLastHiddenFocus(e){let i=e.relatedTarget===this.focusInputViewChild?.nativeElement?wo(this.overlayViewChild?.overlayViewChild?.nativeElement,':not([data-p-hidden-focusable="true"])'):this.focusInputViewChild?.nativeElement;Re(i)}onOptionMouseEnter(e,i){this.focusOnHover&&this.changeFocusedOptionIndex(e,i)}onHeaderCheckboxKeyDown(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"Space":this.onToggleAll(e);break;case"Enter":this.onToggleAll(e);break;default:break}}onFilterBlur(e){this.focusedOptionIndex.set(-1)}onHeaderCheckboxFocus(){this.headerCheckboxFocus=!0}onHeaderCheckboxBlur(){this.headerCheckboxFocus=!1}onToggleAll(e){if(!(this.disabled||this.readonly)){if(this.selectAll!=null)this.onSelectAllChange.emit({originalEvent:e,checked:!this.allSelected()});else{let i=this.getAllVisibleAndNonVisibleOptions().filter(w=>this.isSelected(w)&&(this.optionDisabled?At(w,this.optionDisabled):w&&w.disabled!==void 0?w.disabled:!1)),n=this.allSelected()?this.visibleOptions().filter(w=>!this.isValidOption(w)&&this.isSelected(w)):this.visibleOptions().filter(w=>this.isSelected(w)||this.isValidOption(w)),l=[...this.filter&&!this.allSelected()?this.getAllVisibleAndNonVisibleOptions().filter(w=>this.isSelected(w)&&this.isValidOption(w)):[],...i,...n].map(w=>this.getOptionValue(w)),h=[...new Set(l)];this.updateModel(h,e),(!h.length||h.length===this.getAllVisibleAndNonVisibleOptions().length)&&this.onSelectAllChange.emit({originalEvent:e,checked:!!h.length})}this.partialSelected()&&(this.selectedOptions=null,this.cd.markForCheck()),this.onChange.emit({originalEvent:e,value:this.value}),Bt.focus(this.headerCheckboxViewChild?.inputViewChild?.nativeElement),this.headerCheckboxFocus=!0,e.originalEvent.preventDefault(),e.originalEvent.stopPropagation()}}changeFocusedOptionIndex(e,i){this.focusedOptionIndex()!==i&&(this.focusedOptionIndex.set(i),this.scrollInView())}get virtualScrollerDisabled(){return!this.virtualScroll}scrollInView(e=-1){let i=e!==-1?`${this.id}_${e}`:this.focusedOptionId;if(this.itemsViewChild&&this.itemsViewChild.nativeElement){let n=Ce(this.itemsViewChild.nativeElement,`li[id="${i}"]`);n?n.scrollIntoView&&n.scrollIntoView({block:"nearest",inline:"nearest"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll&&this.scroller?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.id}_${this.focusedOptionIndex()}`:null}writeValue(e){this.value=e,this.modelValue.set(this.value),this.cd.markForCheck()}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.disabled=e,this.cd.markForCheck()}allSelected(){return this.selectAll!==null?this.selectAll:we(this.visibleOptions())&&this.visibleOptions().every(e=>this.isOptionGroup(e)||this.isOptionDisabled(e)||this.isSelected(e))}partialSelected(){return this.selectedOptions&&this.selectedOptions.length>0&&this.selectedOptions.length<this.options.length}show(e){this.overlayVisible=!0;let i=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.findSelectedOptionIndex();this.focusedOptionIndex.set(i),e&&Re(this.focusInputViewChild?.nativeElement),this.cd.markForCheck()}hide(e){this.overlayVisible=!1,this.focusedOptionIndex.set(-1),this.filter&&this.resetFilterOnHide&&this.resetFilter(),this.overlayOptions?.mode==="modal"&&Gt(),e&&Re(this.focusInputViewChild?.nativeElement),this.cd.markForCheck()}onOverlayAnimationStart(e){if(e.toState==="visible"){if(this.itemsWrapper=Ce(this.overlayViewChild?.overlayViewChild?.nativeElement,this.virtualScroll?".p-scroller":".p-multiselect-list-container"),this.virtualScroll&&this.scroller?.setContentEl(this.itemsViewChild?.nativeElement),this.options&&this.options.length)if(this.virtualScroll){let i=this.modelValue()?this.focusedOptionIndex():-1;i!==-1&&this.scroller?.scrollToIndex(i)}else{let i=Ce(this.itemsWrapper,'[data-p-highlight="true"]');i&&i.scrollIntoView({block:"nearest",inline:"nearest"})}this.filterInputChild&&this.filterInputChild.nativeElement&&(this.preventModelTouched=!0,this.autofocusFilter&&this.filterInputChild.nativeElement.focus()),this.onPanelShow.emit(e)}e.toState==="void"&&(this.itemsWrapper=null,this.onModelTouched(),this.onPanelHide.emit(e))}resetFilter(){this.filterInputChild&&this.filterInputChild.nativeElement&&(this.filterInputChild.nativeElement.value=""),this._filterValue.set(null),this._filteredOptions=null}close(e){this.hide(),e.preventDefault(),e.stopPropagation()}clear(e){this.value=null,this.updateModel(null,e),this.selectedOptions=null,this.onClear.emit(),this._disableTooltip=!0,e.stopPropagation()}labelContainerMouseLeave(){this._disableTooltip&&(this._disableTooltip=!1)}removeOption(e,i){let n=this.modelValue().filter(r=>!bt(r,e,this.equalityKey()));this.updateModel(n,i),this.onChange.emit({originalEvent:i,value:n,itemValue:e}),this.onRemove.emit({newValue:n,removed:e}),i&&i.stopPropagation()}findNextItem(e){let i=e.nextElementSibling;return i?mt(i.children[0],"p-disabled")||kn(i.children[0])||mt(i,"p-multiselect-item-group")?this.findNextItem(i):i.children[0]:null}findPrevItem(e){let i=e.previousElementSibling;return i?mt(i.children[0],"p-disabled")||kn(i.children[0])||mt(i,"p-multiselect-item-group")?this.findPrevItem(i):i.children[0]:null}findNextOptionIndex(e){let i=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(n=>this.isValidOption(n)):-1;return i>-1?i+e+1:e}findPrevOptionIndex(e){let i=e>0?vi(this.visibleOptions().slice(0,e),n=>this.isValidOption(n)):-1;return i>-1?i:e}findLastSelectedOptionIndex(){return this.hasSelectedOption()?vi(this.visibleOptions(),e=>this.isValidSelectedOption(e)):-1}findLastFocusedOptionIndex(){let e=this.findLastSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}findLastOptionIndex(){return vi(this.visibleOptions(),e=>this.isValidOption(e))}searchOptions(e,i){this.searchValue=(this.searchValue||"")+i;let n=-1,r=!1;return this.focusedOptionIndex()!==-1?(n=this.visibleOptions().slice(this.focusedOptionIndex()).findIndex(l=>this.isOptionMatched(l)),n=n===-1?this.visibleOptions().slice(0,this.focusedOptionIndex()).findIndex(l=>this.isOptionMatched(l)):n+this.focusedOptionIndex()):n=this.visibleOptions().findIndex(l=>this.isOptionMatched(l)),n!==-1&&(r=!0),n===-1&&this.focusedOptionIndex()===-1&&(n=this.findFirstFocusedOptionIndex()),n!==-1&&this.changeFocusedOptionIndex(e,n),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),r}activateFilter(){if(this.hasFilter()&&this._options)if(this.group){let e=[];for(let i of this.options){let n=this.filterService.filter(this.getOptionGroupChildren(i),this.searchFields(),this.filterValue,this.filterMatchMode,this.filterLocale);n&&n.length&&e.push(je(W({},i),{[this.optionGroupChildren]:n}))}this._filteredOptions=e}else this._filteredOptions=this.filterService.filter(this.options,this.searchFields(),this.filterValue,this.filterMatchMode,this.filterLocale);else this._filteredOptions=null}hasFocusableElements(){return Co(this.overlayViewChild.overlayViewChild.nativeElement,':not([data-p-hidden-focusable="true"])').length>0}hasFilter(){return this._filterValue()&&this._filterValue().trim().length>0}static \u0275fac=function(i){return new(i||t)(M(pt),M(Eo),M(Qi))};static \u0275cmp=x({type:t,selectors:[["p-multiSelect"],["p-multiselect"],["p-multi-select"]],contentQueries:function(i,n,r){if(i&1&&(O(r,qo,5),O(r,Wi,5),O(r,yl,4),O(r,Cl,4),O(r,xl,4),O(r,wl,4),O(r,Il,4),O(r,Tl,4),O(r,Sl,4),O(r,kl,4),O(r,Ol,4),O(r,Ml,4),O(r,El,4),O(r,ql,4),O(r,Fl,4),O(r,Pl,4),O(r,Vl,4),O(r,Dl,4),O(r,Ll,4),O(r,zl,4),O(r,se,4)),i&2){let l;v(l=y())&&(n.footerFacet=l.first),v(l=y())&&(n.headerFacet=l.first),v(l=y())&&(n.itemTemplate=l.first),v(l=y())&&(n.groupTemplate=l.first),v(l=y())&&(n.loaderTemplate=l.first),v(l=y())&&(n.headerTemplate=l.first),v(l=y())&&(n.filterTemplate=l.first),v(l=y())&&(n.footerTemplate=l.first),v(l=y())&&(n.emptyFilterTemplate=l.first),v(l=y())&&(n.emptyTemplate=l.first),v(l=y())&&(n.selectedItemsTemplate=l.first),v(l=y())&&(n.checkIconTemplate=l.first),v(l=y())&&(n.loadingIconTemplate=l.first),v(l=y())&&(n.filterIconTemplate=l.first),v(l=y())&&(n.removeTokenIconTemplate=l.first),v(l=y())&&(n.chipIconTemplate=l.first),v(l=y())&&(n.clearIconTemplate=l.first),v(l=y())&&(n.dropdownIconTemplate=l.first),v(l=y())&&(n.itemCheckboxIconTemplate=l.first),v(l=y())&&(n.headerCheckboxIconTemplate=l.first),v(l=y())&&(n.templates=l)}},viewQuery:function(i,n){if(i&1&&($($l,5),$(Rl,5),$(Al,5),$(Bl,5),$(Hl,5),$(Ul,5),$(Nl,5),$(jl,5)),i&2){let r;v(r=y())&&(n.overlayViewChild=r.first),v(r=y())&&(n.filterInputChild=r.first),v(r=y())&&(n.focusInputViewChild=r.first),v(r=y())&&(n.itemsViewChild=r.first),v(r=y())&&(n.scroller=r.first),v(r=y())&&(n.lastHiddenFocusableElementOnOverlay=r.first),v(r=y())&&(n.firstHiddenFocusableElementOnOverlay=r.first),v(r=y())&&(n.headerCheckboxViewChild=r.first)}},hostVars:7,hostBindings:function(i,n){i&1&&_("click",function(l){return n.onContainerClick(l)}),i&2&&(b("id",n.id),oe(n.style),k(n.hostClasses),ve("p-variant-filled",n.variant==="filled"||n.config.inputVariant()==="filled"||n.config.inputStyle()==="filled"))},inputs:{id:"id",ariaLabel:"ariaLabel",style:"style",styleClass:"styleClass",panelStyle:"panelStyle",panelStyleClass:"panelStyleClass",inputId:"inputId",disabled:[2,"disabled","disabled",P],fluid:[2,"fluid","fluid",P],readonly:[2,"readonly","readonly",P],group:[2,"group","group",P],filter:[2,"filter","filter",P],filterPlaceHolder:"filterPlaceHolder",filterLocale:"filterLocale",overlayVisible:[2,"overlayVisible","overlayVisible",P],tabindex:[2,"tabindex","tabindex",fe],variant:"variant",appendTo:"appendTo",dataKey:"dataKey",name:"name",ariaLabelledBy:"ariaLabelledBy",displaySelectedLabel:"displaySelectedLabel",maxSelectedLabels:"maxSelectedLabels",selectionLimit:[2,"selectionLimit","selectionLimit",fe],selectedItemsLabel:"selectedItemsLabel",showToggleAll:[2,"showToggleAll","showToggleAll",P],emptyFilterMessage:"emptyFilterMessage",emptyMessage:"emptyMessage",resetFilterOnHide:[2,"resetFilterOnHide","resetFilterOnHide",P],dropdownIcon:"dropdownIcon",chipIcon:"chipIcon",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",optionGroupLabel:"optionGroupLabel",optionGroupChildren:"optionGroupChildren",showHeader:[2,"showHeader","showHeader",P],filterBy:"filterBy",scrollHeight:"scrollHeight",lazy:[2,"lazy","lazy",P],virtualScroll:[2,"virtualScroll","virtualScroll",P],loading:[2,"loading","loading",P],virtualScrollItemSize:[2,"virtualScrollItemSize","virtualScrollItemSize",fe],loadingIcon:"loadingIcon",virtualScrollOptions:"virtualScrollOptions",overlayOptions:"overlayOptions",ariaFilterLabel:"ariaFilterLabel",filterMatchMode:"filterMatchMode",tooltip:"tooltip",tooltipPosition:"tooltipPosition",tooltipPositionStyle:"tooltipPositionStyle",tooltipStyleClass:"tooltipStyleClass",autofocusFilter:[2,"autofocusFilter","autofocusFilter",P],display:"display",autocomplete:"autocomplete",size:"size",showClear:[2,"showClear","showClear",P],autofocus:[2,"autofocus","autofocus",P],autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",defaultLabel:"defaultLabel",placeholder:"placeholder",options:"options",filterValue:"filterValue",itemSize:"itemSize",selectAll:"selectAll",focusOnHover:[2,"focusOnHover","focusOnHover",P],filterFields:"filterFields",selectOnFocus:[2,"selectOnFocus","selectOnFocus",P],autoOptionFocus:[2,"autoOptionFocus","autoOptionFocus",P],highlightOnSelect:[2,"highlightOnSelect","highlightOnSelect",P]},outputs:{onChange:"onChange",onFilter:"onFilter",onFocus:"onFocus",onBlur:"onBlur",onClick:"onClick",onClear:"onClear",onPanelShow:"onPanelShow",onPanelHide:"onPanelHide",onLazyLoad:"onLazyLoad",onRemove:"onRemove",onSelectAllChange:"onSelectAllChange"},features:[G([yp,Er]),E],ngContentSelectors:Wl,decls:16,vars:35,consts:[["focusInput",""],["elseBlock",""],["overlay",""],["content",""],["token",""],["removeicon",""],["firstHiddenFocusableEl",""],["buildInItems",""],["lastHiddenFocusableEl",""],["builtInFilterElement",""],["headerCheckbox",""],["checkboxicon",""],["filterInput",""],["scroller",""],["loader",""],["items",""],[1,"p-hidden-accessible"],["role","combobox",3,"focus","blur","keydown","pTooltip","tooltipPosition","positionStyle","tooltipStyleClass","pAutoFocus"],[1,"p-multiselect-label-container",3,"mouseleave","pTooltip","tooltipDisabled","tooltipPosition","positionStyle","tooltipStyleClass"],[3,"ngClass"],[4,"ngIf"],[1,"p-multiselect-dropdown"],[4,"ngIf","ngIfElse"],[3,"visibleChange","onAnimationStart","onHide","visible","options","target","appendTo","autoZIndex","baseZIndex","showTransitionOptions","hideTransitionOptions"],[1,"p-multiselect-chip-item"],["class","p-multiselect-chip-item",4,"ngFor","ngForOf"],["styleClass","p-multiselect-chip",3,"onRemove","label","removable","removeIcon"],["class","p-multiselect-chip-icon",3,"click",4,"ngIf"],[1,"p-multiselect-chip-icon",3,"click"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","p-multiselect-clear-icon",3,"click",4,"ngIf"],[1,"p-multiselect-clear-icon",3,"click"],[4,"ngTemplateOutlet"],["aria-hidden","true",3,"ngClass",4,"ngIf"],["aria-hidden","true",3,"class",4,"ngIf"],["aria-hidden","true",3,"ngClass"],["aria-hidden","true"],["class","p-multiselect-dropdown-icon",4,"ngIf"],["class","p-multiselect-dropdown-icon",3,"ngClass",4,"ngIf"],[3,"styleClass",4,"ngIf"],[1,"p-multiselect-dropdown-icon",3,"ngClass"],[3,"styleClass"],[1,"p-multiselect-dropdown-icon"],[3,"ngClass","ngStyle"],["role","presentation",1,"p-hidden-accessible","p-hidden-focusable",3,"focus"],["class","p-multiselect-header",4,"ngIf"],[1,"p-multiselect-list-container"],[3,"items","style","itemSize","autoSize","tabindex","lazy","options","onLazyLoad",4,"ngIf"],[1,"p-multiselect-header"],[3,"ngModel","ariaLabel","binary","variant","disabled","onChange",4,"ngIf"],["class","p-multiselect-filter-container",4,"ngIf"],[3,"onChange","ngModel","ariaLabel","binary","variant","disabled"],[1,"p-multiselect-filter-container"],["pInputText","","type","text","role","searchbox",1,"p-multiselect-filter",3,"input","keydown","click","blur","variant","value","disabled"],["class","p-multiselect-filter-icon",4,"ngIf"],[1,"p-multiselect-filter-icon"],[3,"onLazyLoad","items","itemSize","autoSize","tabindex","lazy","options"],["role","listbox","aria-multiselectable","true",1,"p-multiselect-list",3,"ngClass"],["ngFor","",3,"ngForOf"],["class","p-multiselect-empty-message","role","option",3,"ngStyle",4,"ngIf"],["role","option",1,"p-multiselect-option-group",3,"ngStyle"],[3,"onClick","onMouseEnter","id","option","selected","label","disabled","template","checkIconTemplate","itemCheckboxIconTemplate","itemSize","focused","ariaPosInset","ariaSetSize","variant","highlightOnSelect"],["role","option",1,"p-multiselect-empty-message",3,"ngStyle"]],template:function(i,n){if(i&1){let r=T();he(Ql),p(0,"div",16)(1,"input",17,0),_("focus",function(h){return f(r),g(n.onInputFocus(h))})("blur",function(h){return f(r),g(n.onInputBlur(h))})("keydown",function(h){return f(r),g(n.onKeyDown(h))}),d()(),p(3,"div",18),_("mouseleave",function(){return f(r),g(n.labelContainerMouseLeave())}),p(4,"div",19),m(5,cc,3,2,"ng-container",20)(6,mc,3,6,"ng-container",20),d()(),m(7,_c,3,2,"ng-container",20),p(8,"div",21),m(9,wc,3,2,"ng-container",22)(10,Ec,2,2,"ng-template",null,1,A),d(),p(12,"p-overlay",23,2),Pe("visibleChange",function(h){return f(r),Fe(n.overlayVisible,h)||(n.overlayVisible=h),g(h)}),_("onAnimationStart",function(h){return f(r),g(n.onOverlayAnimationStart(h))})("onHide",function(){return f(r),g(n.hide())}),m(14,gp,13,18,"ng-template",null,3,A),d()}if(i&2){let r,l=K(11);b("data-p-hidden-accessible",!0),s(),a("pTooltip",n.tooltip)("tooltipPosition",n.tooltipPosition)("positionStyle",n.tooltipPositionStyle)("tooltipStyleClass",n.tooltipStyleClass)("pAutoFocus",n.autofocus),b("aria-disabled",n.disabled)("id",n.inputId)("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledBy)("aria-haspopup","listbox")("aria-expanded",(r=n.overlayVisible)!==null&&r!==void 0?r:!1)("aria-controls",n.overlayVisible?n.id+"_list":null)("tabindex",n.disabled?-1:n.tabindex)("aria-activedescendant",n.focused?n.focusedOptionId:void 0)("value",n.label()||"empty"),s(2),a("pTooltip",n.tooltip)("tooltipDisabled",n._disableTooltip)("tooltipPosition",n.tooltipPosition)("positionStyle",n.tooltipPositionStyle)("tooltipStyleClass",n.tooltipStyleClass),s(),a("ngClass",n.labelClass),s(),a("ngIf",!n.selectedItemsTemplate&&!n._selectedItemsTemplate),s(),a("ngIf",n.selectedItemsTemplate||n._selectedItemsTemplate),s(),a("ngIf",n.isVisibleClearIcon),s(2),a("ngIf",n.loading)("ngIfElse",l),s(3),qe("visible",n.overlayVisible),a("options",n.overlayOptions)("target","@parent")("appendTo",n.appendTo)("autoZIndex",n.autoZIndex)("baseZIndex",n.baseZIndex)("showTransitionOptions",n.showTransitionOptions)("hideTransitionOptions",n.hideTransitionOptions)}},dependencies:[U,ie,Ve,Z,ae,ke,Cp,Ir,V,ki,Pn,Uo,Gi,sr,ht,Xi,Si,Ut,ft,Ii,Ji,Ci,Ge,yi],encapsulation:2,changeDetection:0})}return t})(),Vr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=J({type:t});static \u0275inj=X({imports:[tn,V,V]})}return t})();var nn=class t{updateProfile(o,e){return o.group({_id:[{value:e?._id||"",disabled:!e?._id}],name:[e?.name||"",at.required],bio:[e?.bio||""],skills:[e?.skills||[]],avatar:[e?.avatar||""],file:[],social:o.group({github:[e?.social?.github||"",[at.pattern("^(https?://)?(www\\.)?github\\.com/[a-zA-Z0-9-]+/?$")]],linkedin:[e?.social?.linkedin||"",[at.pattern("^(https?://)?(www\\.)?linkedin\\.com/in/[a-zA-Z0-9-]+/?$")]],twitter:[e?.social?.twitter||"",[at.pattern("^(https?://)?(www\\.)?twitter\\.com/[a-zA-Z0-9-]+/?$")]],website:[e?.social?.website||"",[at.pattern("^(https?://)?(www\\.)?[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\\.[a-zA-Z]{2,}(/\\S*)?$")]]})})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=L({token:t,factory:t.\u0275fac,providedIn:"root"})};var Ip=["container"],Tp=["icon"],Sp=["closeicon"],kp=["*"],Op=(t,o)=>({showTransitionParams:t,hideTransitionParams:o}),Mp=t=>({value:"visible()",params:t}),Ep=t=>({closeCallback:t});function qp(t,o){t&1&&R(0)}function Fp(t,o){if(t&1&&m(0,qp,1,0,"ng-container",7),t&2){let e=c(2);a("ngTemplateOutlet",e.iconTemplate||e.iconTemplate)}}function Pp(t,o){if(t&1&&u(0,"i",3),t&2){let e=c(2);a("ngClass",e.icon)}}function Vp(t,o){if(t&1&&u(0,"span",9),t&2){let e=c(3);a("ngClass",e.cx("text"))("innerHTML",e.text,ot)}}function Dp(t,o){if(t&1&&(p(0,"div"),m(1,Vp,1,2,"span",8),d()),t&2){let e=c(2);s(),a("ngIf",!e.escape)}}function Lp(t,o){if(t&1&&(p(0,"span",5),C(1),d()),t&2){let e=c(3);a("ngClass",e.cx("text")),s(),B(e.text)}}function zp(t,o){if(t&1&&m(0,Lp,2,2,"span",10),t&2){let e=c(2);a("ngIf",e.escape&&e.text)}}function $p(t,o){t&1&&R(0)}function Rp(t,o){if(t&1&&m(0,$p,1,0,"ng-container",11),t&2){let e=c(2);a("ngTemplateOutlet",e.containerTemplate||e.containerTemplate)("ngTemplateOutletContext",H(2,Ep,e.close.bind(e)))}}function Ap(t,o){if(t&1&&(p(0,"span",5),me(1),d()),t&2){let e=c(2);a("ngClass",e.cx("text"))}}function Bp(t,o){if(t&1&&u(0,"i",13),t&2){let e=c(3);a("ngClass",e.closeIcon)}}function Hp(t,o){t&1&&R(0)}function Up(t,o){if(t&1&&m(0,Hp,1,0,"ng-container",7),t&2){let e=c(3);a("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function Np(t,o){t&1&&u(0,"TimesIcon",14)}function jp(t,o){if(t&1){let e=T();p(0,"button",12),_("click",function(n){f(e);let r=c(2);return g(r.close(n))}),m(1,Bp,1,1,"i",13)(2,Up,1,1,"ng-container")(3,Np,1,0,"TimesIcon",14),d()}if(t&2){let e=c(2);b("aria-label",e.closeAriaLabel),s(),te(e.closeIcon?1:-1),s(),te(e.closeIconTemplate||e._closeIconTemplate?2:-1),s(),te(!e.closeIconTemplate&&!e._closeIconTemplate&&!e.closeIcon?3:-1)}}function Qp(t,o){if(t&1&&(p(0,"div",1)(1,"div",2),m(2,Fp,1,1,"ng-container")(3,Pp,1,1,"i",3)(4,Dp,2,1,"div",4)(5,zp,1,1,"ng-template",null,0,A)(7,Rp,1,4,"ng-container")(8,Ap,2,1,"span",5)(9,jp,4,4,"button",6),d()()),t&2){let e=K(6),i=c();a("ngClass",i.containerClass)("@messageAnimation",H(13,Mp,re(10,Op,i.showTransitionOptions,i.hideTransitionOptions))),b("aria-live","polite")("role","alert"),s(2),te(i.iconTemplate||i._iconTemplate?2:-1),s(),te(i.icon?3:-1),s(),a("ngIf",!i.escape)("ngIfElse",e),s(3),te(i.containerTemplate||i._containerTemplate?7:8),s(2),te(i.closable?9:-1)}}var Wp=({dt:t})=>`
.p-message {
    border-radius: ${t("message.border.radius")};
    outline-width: ${t("message.border.width")};
    outline-style: solid;
}

.p-message-content {
    display: flex;
    align-items: center;
    padding: ${t("message.content.padding")};
    gap: ${t("message.content.gap")};
    height: 100%;
}

.p-message-icon {
    flex-shrink: 0;
}

.p-message-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-inline-start: auto;
    overflow: hidden;
    position: relative;
    width: ${t("message.close.button.width")};
    height: ${t("message.close.button.height")};
    border-radius: ${t("message.close.button.border.radius")};
    background: transparent;
    transition: background ${t("message.transition.duration")}, color ${t("message.transition.duration")}, outline-color ${t("message.transition.duration")}, box-shadow ${t("message.transition.duration")}, opacity 0.3s;
    outline-color: transparent;
    color: inherit;
    padding: 0;
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-message-close-icon {
    font-size: ${t("message.close.icon.size")};
    width: ${t("message.close.icon.size")};
    height: ${t("message.close.icon.size")};
}

.p-message-close-button:focus-visible {
    outline-width: ${t("message.close.button.focus.ring.width")};
    outline-style: ${t("message.close.button.focus.ring.style")};
    outline-offset: ${t("message.close.button.focus.ring.offset")};
}

.p-message-info {
    background: ${t("message.info.background")};
    outline-color: ${t("message.info.border.color")};
    color: ${t("message.info.color")};
    box-shadow: ${t("message.info.shadow")};
}

.p-message-info .p-message-close-button:focus-visible {
    outline-color: ${t("message.info.close.button.focus.ring.color")};
    box-shadow: ${t("message.info.close.button.focus.ring.shadow")};
}

.p-message-info .p-message-close-button:hover {
    background: ${t("message.info.close.button.hover.background")};
}

.p-message-info.p-message-outlined {
    color: ${t("message.info.outlined.color")};
    outline-color: ${t("message.info.outlined.border.color")};
}

.p-message-info.p-message-simple {
    color: ${t("message.info.simple.color")};
}

.p-message-success {
    background: ${t("message.success.background")};
    outline-color: ${t("message.success.border.color")};
    color: ${t("message.success.color")};
    box-shadow: ${t("message.success.shadow")};
}

.p-message-success .p-message-close-button:focus-visible {
    outline-color: ${t("message.success.close.button.focus.ring.color")};
    box-shadow: ${t("message.success.close.button.focus.ring.shadow")};
}

.p-message-success .p-message-close-button:hover {
    background: ${t("message.success.close.button.hover.background")};
}

.p-message-success.p-message-outlined {
    color: ${t("message.success.outlined.color")};
    outline-color: ${t("message.success.outlined.border.color")};
}

.p-message-success.p-message-simple {
    color: ${t("message.success.simple.color")};
}

.p-message-warn {
    background: ${t("message.warn.background")};
    outline-color: ${t("message.warn.border.color")};
    color: ${t("message.warn.color")};
    box-shadow: ${t("message.warn.shadow")};
}

.p-message-warn .p-message-close-button:focus-visible {
    outline-color: ${t("message.warn.close.button.focus.ring.color")};
    box-shadow: ${t("message.warn.close.button.focus.ring.shadow")};
}

.p-message-warn .p-message-close-button:hover {
    background: ${t("message.warn.close.button.hover.background")};
}

.p-message-warn.p-message-outlined {
    color: ${t("message.warn.outlined.color")};
    outline-color: ${t("message.warn.outlined.border.color")};
}

.p-message-warn.p-message-simple {
    color: ${t("message.warn.simple.color")};
}

.p-message-error {
    background: ${t("message.error.background")};
    outline-color: ${t("message.error.border.color")};
    color: ${t("message.error.color")};
    box-shadow: ${t("message.error.shadow")};
}

.p-message-error .p-message-close-button:focus-visible {
    outline-color: ${t("message.error.close.button.focus.ring.color")};
    box-shadow: ${t("message.error.close.button.focus.ring.shadow")};
}

.p-message-error .p-message-close-button:hover {
    background: ${t("message.error.close.button.hover.background")};
}

.p-message-error.p-message-outlined {
    color: ${t("message.error.outlined.color")};
    outline-color: ${t("message.error.outlined.border.color")};
}

.p-message-error.p-message-simple {
    color: ${t("message.error.simple.color")};
}

.p-message-secondary {
    background: ${t("message.secondary.background")};
    outline-color: ${t("message.secondary.border.color")};
    color: ${t("message.secondary.color")};
    box-shadow: ${t("message.secondary.shadow")};
}

.p-message-secondary .p-message-close-button:focus-visible {
    outline-color: ${t("message.secondary.close.button.focus.ring.color")};
    box-shadow: ${t("message.secondary.close.button.focus.ring.shadow")};
}

.p-message-secondary .p-message-close-button:hover {
    background: ${t("message.secondary.close.button.hover.background")};
}

.p-message-secondary.p-message-outlined {
    color: ${t("message.secondary.outlined.color")};
    outline-color: ${t("message.secondary.outlined.border.color")};
}

.p-message-secondary.p-message-simple {
    color: ${t("message.secondary.simple.color")};
}

.p-message-contrast {
    background: ${t("message.contrast.background")};
    outline-color: ${t("message.contrast.border.color")};
    color: ${t("message.contrast.color")};
    box-shadow: ${t("message.contrast.shadow")};
}

.p-message-contrast .p-message-close-button:focus-visible {
    outline-color: ${t("message.contrast.close.button.focus.ring.color")};
    box-shadow: ${t("message.contrast.close.button.focus.ring.shadow")};
}

.p-message-contrast .p-message-close-button:hover {
    background: ${t("message.contrast.close.button.hover.background")};
}

.p-message-contrast.p-message-outlined {
    color: ${t("message.contrast.outlined.color")};
    outline-color: ${t("message.contrast.outlined.border.color")};
}

.p-message-contrast.p-message-simple {
    color: ${t("message.contrast.simple.color")};
}

.p-message-text {
    display: inline-flex;
    align-items: center;
    font-size: ${t("message.text.font.size")};
    font-weight: ${t("message.text.font.weight")};
}

.p-message-icon {
    font-size: ${t("message.icon.size")};
    width: ${t("message.icon.size")};
    height: ${t("message.icon.size")};
}

.p-message-enter-from {
    opacity: 0;
}

.p-message-enter-active {
    transition: opacity 0.3s;
}

.p-message.p-message-leave-from {
    max-height: 1000px;
}

.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0;
}

.p-message-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.3s;
}

.p-message-leave-active .p-message-close-button {
    opacity: 0;
}

.p-message-sm .p-message-content {
    padding: ${t("message.content.sm.padding")};
}

.p-message-sm .p-message-text {
    font-size: ${t("message.text.sm.font.size")};
}

.p-message-sm .p-message-icon {
    font-size: ${t("message.icon.sm.size")};
    width: ${t("message.icon.sm.size")};
    height: ${t("message.icon.sm.size")};
}

.p-message-sm .p-message-close-icon {
    font-size: ${t("message.close.icon.sm.size")};
    width: ${t("message.close.icon.sm.size")};
    height: ${t("message.close.icon.sm.size")};
}

.p-message-lg .p-message-content {
    padding: ${t("message.content.lg.padding")};
}

.p-message-lg .p-message-text {
    font-size: ${t("message.text.lg.font.size")};
}

.p-message-lg .p-message-icon {
    font-size: ${t("message.icon.lg.size")};
    width: ${t("message.icon.lg.size")};
    height: ${t("message.icon.lg.size")};
}

.p-message-lg .p-message-close-icon {
    font-size: ${t("message.close.icon.lg.size")};
    width: ${t("message.close.icon.lg.size")};
    height: ${t("message.close.icon.lg.size")};
}

.p-message-outlined {
    background: transparent;
    outline-width: ${t("message.outlined.border.width")};
}

.p-message-simple {
    background: transparent;
    outline-color: transparent;
    box-shadow: none;
}

.p-message-simple .p-message-content {
    padding: ${t("message.simple.content.padding")};
}

.p-message-outlined .p-message-close-button:hover,
.p-message-simple .p-message-close-button:hover {
    background: transparent;
}`,Kp={root:({props:t})=>["p-message p-component p-message-"+t.severity,{"p-message-simple":t.variant==="simple"}],content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},Dr=(()=>{class t extends Y{name="message";theme=Wp;classes=Kp;static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var Lr=(()=>{class t extends Q{severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;onClose=new I;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}get containerClass(){let e=this.variant==="outlined"?"p-message-outlined":this.variant==="simple"?"p-message-simple":"",i=this.size==="small"?"p-message-sm":this.size==="large"?"p-message-lg":"";return`p-message-${this.severity} ${e} ${i}`.trim()+(this.styleClass?" "+this.styleClass:"")}visible=Me(!0);_componentStyle=j(Dr);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;ngOnInit(){super.ngOnInit(),this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"container":this._containerTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break}})}close(e){this.visible.set(!1),this.onClose.emit({originalEvent:e})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-message"]],contentQueries:function(i,n,r){if(i&1&&(O(r,Ip,4),O(r,Tp,4),O(r,Sp,4),O(r,se,4)),i&2){let l;v(l=y())&&(n.containerTemplate=l.first),v(l=y())&&(n.iconTemplate=l.first),v(l=y())&&(n.closeIconTemplate=l.first),v(l=y())&&(n.templates=l)}},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",P],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",P],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant"},outputs:{onClose:"onClose"},features:[G([Dr]),E],ngContentSelectors:kp,decls:1,vars:1,consts:[["escapeOut",""],[1,"p-message","p-component",3,"ngClass"],[1,"p-message-content"],[1,"p-message-icon",3,"ngClass"],[4,"ngIf","ngIfElse"],[3,"ngClass"],["pRipple","","type","button",1,"p-message-close-button"],[4,"ngTemplateOutlet"],[3,"ngClass","innerHTML",4,"ngIf"],[3,"ngClass","innerHTML"],[3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pRipple","","type","button",1,"p-message-close-button",3,"click"],[1,"p-message-close-icon",3,"ngClass"],["styleClass","p-message-close-icon"]],template:function(i,n){i&1&&(he(),m(0,Qp,10,15,"div",1)),i&2&&te(n.visible()?0:-1)},dependencies:[U,ie,Z,ae,ht,oi,V],encapsulation:2,data:{animation:[st("messageAnimation",[He(":enter",[Be({opacity:0,transform:"translateY(-25%)"}),Ae("{{showTransitionParams}}")]),He(":leave",[Ae("{{hideTransitionParams}}",Be({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return t})();var Gp=["content"],Zp=(t,o)=>({"p-progressbar p-component":!0,"p-progressbar-determinate":t,"p-progressbar-indeterminate":o}),Yp=t=>({$implicit:t});function Xp(t,o){if(t&1&&(p(0,"div"),C(1),d()),t&2){let e=c(2);Se("display",e.value!=null&&e.value!==0?"flex":"none"),b("data-pc-section","label"),s(),xt("",e.value,"",e.unit,"")}}function Jp(t,o){t&1&&R(0)}function ed(t,o){if(t&1&&(p(0,"div",3)(1,"div",4),m(2,Xp,2,5,"div",5)(3,Jp,1,0,"ng-container",6),d()()),t&2){let e=c();k(e.valueStyleClass),Se("width",e.value+"%")("background",e.color),a("ngClass","p-progressbar-value p-progressbar-value-animate"),b("data-pc-section","value"),s(2),a("ngIf",e.showValue&&!e.contentTemplate&&!e._contentTemplate),s(),a("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",H(11,Yp,e.value))}}function td(t,o){if(t&1&&(p(0,"div",7),u(1,"div",8),d()),t&2){let e=c();k(e.valueStyleClass),a("ngClass","p-progressbar-indeterminate-container"),b("data-pc-section","container"),s(),Se("background",e.color),b("data-pc-section","value")}}var id=({dt:t})=>`
.p-progressbar {
    position: relative;
    overflow: hidden;
    height: ${t("progressbar.height")};
    background: ${t("progressbar.background")};
    border-radius: ${t("progressbar.border.radius")};
}

.p-progressbar-value {
    margin: 0;
    background: ${t("progressbar.value.background")};
}

.p-progressbar-label {
    color: ${t("progressbar.label.color")};
    font-size: ${t("progressbar.label.font.size")};
    font-weight: ${t("progressbar.label.font.weight")};
}

.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: width 1s ease-in-out;
}

.p-progressbar-determinate .p-progressbar-label {
    display: inline-flex;
}

.p-progressbar-indeterminate .p-progressbar-value::before {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.p-progressbar-indeterminate .p-progressbar-value::after {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
}

@-webkit-keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}
@keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
@keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
`,nd={root:({instance:t})=>["p-progressbar p-component",{"p-progressbar-determinate":t.determinate,"p-progressbar-indeterminate":t.indeterminate}],value:"p-progressbar-value",label:"p-progressbar-label"},zr=(()=>{class t extends Y{name="progressbar";theme=id;classes=nd;static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var $r=(()=>{class t extends Q{value;showValue=!0;styleClass;valueStyleClass;style;unit="%";mode="determinate";color;contentTemplate;_componentStyle=j(zr);templates;_contentTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template}})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-progressBar"],["p-progressbar"],["p-progress-bar"]],contentQueries:function(i,n,r){if(i&1&&(O(r,Gp,4),O(r,se,4)),i&2){let l;v(l=y())&&(n.contentTemplate=l.first),v(l=y())&&(n.templates=l)}},inputs:{value:[2,"value","value",fe],showValue:[2,"showValue","showValue",P],styleClass:"styleClass",valueStyleClass:"valueStyleClass",style:"style",unit:"unit",mode:"mode",color:"color"},features:[G([zr]),E],decls:3,vars:15,consts:[["role","progressbar",3,"ngStyle","ngClass"],["style","display:flex",3,"ngClass","class","width","background",4,"ngIf"],[3,"ngClass","class",4,"ngIf"],[2,"display","flex",3,"ngClass"],[1,"p-progressbar-label"],[3,"display",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass"],[1,"p-progressbar-value","p-progressbar-value-animate"]],template:function(i,n){i&1&&(p(0,"div",0),m(1,ed,4,13,"div",1)(2,td,2,7,"div",2),d()),i&2&&(k(n.styleClass),a("ngStyle",n.style)("ngClass",re(12,Zp,n.mode==="determinate",n.mode==="indeterminate")),b("aria-valuemin",0)("aria-valuenow",n.value)("aria-valuemax",100)("data-pc-name","progressbar")("data-pc-section","root")("aria-label",n.value+n.unit),s(),a("ngIf",n.mode==="determinate"),s(),a("ngIf",n.mode==="indeterminate"))},dependencies:[U,ie,Z,ae,ke,V],encapsulation:2,changeDetection:0})}return t})();var od=["file"],rd=["header"],Rr=["content"],ad=["toolbar"],sd=["chooseicon"],ld=["filelabel"],cd=["uploadicon"],pd=["cancelicon"],dd=["empty"],md=["advancedfileinput"],ud=["basicfileinput"],hd=(t,o,e,i,n)=>({$implicit:t,uploadedFiles:o,chooseCallback:e,clearCallback:i,uploadCallback:n}),fd=(t,o,e,i,n,r,l,h)=>({$implicit:t,uploadedFiles:o,chooseCallback:e,clearCallback:i,removeUploadedFileCallback:n,removeFileCallback:r,progress:l,messages:h}),gd=t=>({$implicit:t});function _d(t,o){if(t&1&&u(0,"span"),t&2){let e=c(3);k(e.chooseIcon),b("aria-label",!0)("data-pc-section","chooseicon")}}function bd(t,o){t&1&&u(0,"PlusIcon"),t&2&&b("aria-label",!0)("data-pc-section","chooseicon")}function vd(t,o){}function yd(t,o){t&1&&m(0,vd,0,0,"ng-template")}function Cd(t,o){if(t&1&&(p(0,"span"),m(1,yd,1,0,null,11),d()),t&2){let e=c(4);b("aria-label",!0)("data-pc-section","chooseicon"),s(),a("ngTemplateOutlet",e.chooseIconTemplate||e._chooseIconTemplate)}}function xd(t,o){if(t&1&&(q(0),m(1,bd,1,2,"PlusIcon",9)(2,Cd,2,3,"span",9),F()),t&2){let e=c(3);s(),a("ngIf",!e.chooseIconTemplate&&!e._chooseIconTemplate),s(),a("ngIf",e.chooseIconTemplate||e._chooseIconTemplate)}}function wd(t,o){if(t&1&&u(0,"span",21),t&2){let e=c(4);a("ngClass",e.uploadIcon),b("aria-hidden",!0)}}function Id(t,o){t&1&&u(0,"UploadIcon")}function Td(t,o){}function Sd(t,o){t&1&&m(0,Td,0,0,"ng-template")}function kd(t,o){if(t&1&&(p(0,"span"),m(1,Sd,1,0,null,11),d()),t&2){let e=c(5);b("aria-hidden",!0),s(),a("ngTemplateOutlet",e.uploadIconTemplate||e._uploadIconTemplate)}}function Od(t,o){if(t&1&&(q(0),m(1,Id,1,0,"UploadIcon",9)(2,kd,2,2,"span",9),F()),t&2){let e=c(4);s(),a("ngIf",!e.uploadIconTemplate&&!e._uploadIconTemplate),s(),a("ngIf",e.uploadIconTemplate||e._uploadIconTemplate)}}function Md(t,o){if(t&1){let e=T();p(0,"p-button",19),_("onClick",function(){f(e);let n=c(3);return g(n.upload())}),m(1,wd,1,2,"span",20)(2,Od,3,2,"ng-container",9),d()}if(t&2){let e=c(3);a("label",e.uploadButtonLabel)("disabled",!e.hasFiles()||e.isFileLimitExceeded())("styleClass","p-fileupload-upload-button "+e.uploadStyleClass)("buttonProps",e.uploadButtonProps),s(),a("ngIf",e.uploadIcon),s(),a("ngIf",!e.uploadIcon)}}function Ed(t,o){if(t&1&&u(0,"span",21),t&2){let e=c(4);a("ngClass",e.cancelIcon)}}function qd(t,o){t&1&&u(0,"TimesIcon"),t&2&&b("aria-hidden",!0)}function Fd(t,o){}function Pd(t,o){t&1&&m(0,Fd,0,0,"ng-template")}function Vd(t,o){if(t&1&&(p(0,"span"),m(1,Pd,1,0,null,11),d()),t&2){let e=c(5);b("aria-hidden",!0),s(),a("ngTemplateOutlet",e.cancelIconTemplate||e._cancelIconTemplate)}}function Dd(t,o){if(t&1&&(q(0),m(1,qd,1,1,"TimesIcon",9)(2,Vd,2,2,"span",9),F()),t&2){let e=c(4);s(),a("ngIf",!e.cancelIconTemplate&&!e._cancelIconTemplate),s(),a("ngIf",e.cancelIconTemplate||e._cancelIconTemplate)}}function Ld(t,o){if(t&1){let e=T();p(0,"p-button",19),_("onClick",function(){f(e);let n=c(3);return g(n.clear())}),m(1,Ed,1,1,"span",20)(2,Dd,3,2,"ng-container",9),d()}if(t&2){let e=c(3);a("label",e.cancelButtonLabel)("disabled",!e.hasFiles()||e.uploading)("styleClass","p-fileupload-cancel-button "+e.cancelStyleClass)("buttonProps",e.cancelButtonProps),s(),a("ngIf",e.cancelIcon),s(),a("ngIf",!e.cancelIcon)}}function zd(t,o){if(t&1){let e=T();q(0),p(1,"p-button",16),_("focus",function(){f(e);let n=c(2);return g(n.onFocus())})("blur",function(){f(e);let n=c(2);return g(n.onBlur())})("onClick",function(){f(e);let n=c(2);return g(n.choose())})("keydown.enter",function(){f(e);let n=c(2);return g(n.choose())}),p(2,"input",7,0),_("change",function(n){f(e);let r=c(2);return g(r.onFileSelect(n))}),d(),m(4,_d,1,4,"span",17)(5,xd,3,2,"ng-container",9),d(),m(6,Md,3,6,"p-button",18)(7,Ld,3,6,"p-button",18),F()}if(t&2){let e=c(2);s(),a("styleClass","p-fileupload-choose-button "+e.chooseStyleClass)("disabled",e.disabled||e.isChooseDisabled())("label",e.chooseButtonLabel)("buttonProps",e.chooseButtonProps),b("data-pc-section","choosebutton"),s(),a("multiple",e.multiple)("accept",e.accept)("disabled",e.disabled||e.isChooseDisabled()),b("aria-label",e.browseFilesLabel)("title","")("data-pc-section","input"),s(2),a("ngIf",e.chooseIcon),s(),a("ngIf",!e.chooseIcon),s(),a("ngIf",!e.auto&&e.showUploadButton),s(),a("ngIf",!e.auto&&e.showCancelButton)}}function $d(t,o){t&1&&R(0)}function Rd(t,o){t&1&&R(0)}function Ad(t,o){if(t&1&&u(0,"p-progressbar",22),t&2){let e=c(2);a("value",e.progress)("showValue",!1)}}function Bd(t,o){if(t&1&&u(0,"p-message",14),t&2){let e=o.$implicit;a("severity",e.severity)("text",e.text)}}function Hd(t,o){if(t&1){let e=T();p(0,"img",33),_("error",function(n){f(e);let r=c(5);return g(r.imageError(n))}),d()}if(t&2){let e=c().$implicit,i=c(4);a("src",e.objectURL,$e)("width",i.previewWidth)}}function Ud(t,o){t&1&&u(0,"TimesIcon")}function Nd(t,o){}function jd(t,o){t&1&&m(0,Nd,0,0,"ng-template")}function Qd(t,o){if(t&1&&m(0,Ud,1,0,"TimesIcon",9)(1,jd,1,0,null,11),t&2){let e=c(5);a("ngIf",!e.cancelIconTemplate&&!e._cancelIconTemplate),s(),a("ngTemplateOutlet",e.cancelIconTemplate||e._cancelIconTemplate)}}function Wd(t,o){if(t&1){let e=T();p(0,"div",24),m(1,Hd,1,2,"img",27),p(2,"div",28)(3,"div",29),C(4),d(),p(5,"span",30),C(6),d()(),p(7,"div",31)(8,"p-button",32),_("onClick",function(n){let r=f(e).index,l=c(4);return g(l.remove(n,r))}),m(9,Qd,2,2,"ng-template",null,2,A),d()()()}if(t&2){let e=o.$implicit,i=c(4);s(),a("ngIf",i.isImage(e)),s(3),B(e.name),s(2),B(i.formatSize(e.size)),s(2),a("disabled",i.uploading)("styleClass","p-fileupload-file-remove-button "+i.removeStyleClass)}}function Kd(t,o){if(t&1&&m(0,Wd,11,5,"div",26),t&2){let e=c(3);a("ngForOf",e.files)}}function Gd(t,o){}function Zd(t,o){if(t&1&&m(0,Gd,0,0,"ng-template",25),t&2){let e=c(3);a("ngForOf",e.files)("ngForTemplate",e.fileTemplate||e._fileTemplate)}}function Yd(t,o){if(t&1&&(p(0,"div",23),m(1,Kd,1,1,"div",24)(2,Zd,1,2,null,25),d()),t&2){let e=c(2);s(),te(!e.fileTemplate&&!e._fileTemplate?1:-1),s(),te(e.fileTemplate||e._fileTemplate?2:-1)}}function Xd(t,o){t&1&&R(0)}function Jd(t,o){t&1&&R(0)}function em(t,o){if(t&1&&m(0,Jd,1,0,"ng-container",11),t&2){let e=c(2);a("ngTemplateOutlet",e.emptyTemplate||e._emptyTemplate)}}function tm(t,o){if(t&1){let e=T();p(0,"div",6)(1,"input",7,0),_("change",function(n){f(e);let r=c();return g(r.onFileSelect(n))}),d(),p(3,"div",8),m(4,zd,8,15,"ng-container",9)(5,$d,1,0,"ng-container",10)(6,Rd,1,0,"ng-container",11),d(),p(7,"div",12,1),_("dragenter",function(n){f(e);let r=c();return g(r.onDragEnter(n))})("dragleave",function(n){f(e);let r=c();return g(r.onDragLeave(n))})("drop",function(n){f(e);let r=c();return g(r.onDrop(n))}),m(9,Ad,1,2,"p-progressbar",13),wn(10,Bd,1,2,"p-message",14,xn),m(12,Yd,3,2,"div",15)(13,Xd,1,0,"ng-container",10)(14,em,1,1,"ng-container"),d()()}if(t&2){let e=c();k(e.styleClass),a("ngClass","p-fileupload p-fileupload-advanced p-component")("ngStyle",e.style),b("data-pc-name","fileupload")("data-pc-section","root"),s(),Se("display","none"),a("multiple",e.multiple)("accept",e.accept)("disabled",e.disabled||e.isChooseDisabled()),b("aria-label",e.browseFilesLabel)("title","")("data-pc-section","input"),s(3),a("ngIf",!e.headerTemplate&&!e._headerTemplate),s(),a("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)("ngTemplateOutletContext",ao(24,hd,e.files,e.uploadedFiles,e.choose.bind(e),e.clear.bind(e),e.upload.bind(e))),s(),a("ngTemplateOutlet",e.toolbarTemplate||e._toolbarTemplate),s(),b("data-pc-section","content"),s(2),a("ngIf",e.hasFiles()),s(),In(e.msgs),s(2),a("ngIf",e.hasFiles()),s(),a("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",lo(30,fd,e.files,e.uploadedFiles,e.choose.bind(e),e.clear.bind(e),e.removeUploadedFile.bind(e),e.remove.bind(e),e.progress,e.msgs)),s(),te((e.emptyTemplate||e._emptyTemplate)&&!e.hasFiles()&&!e.hasUploadedFiles()?14:-1)}}function im(t,o){if(t&1&&u(0,"p-message",14),t&2){let e=o.$implicit;a("severity",e.severity)("text",e.text)}}function nm(t,o){if(t&1&&u(0,"span",37),t&2){let e=c(4);a("ngClass",e.uploadIcon)}}function om(t,o){t&1&&u(0,"UploadIcon",40),t&2&&a("styleClass","p-button-icon p-button-icon-left")}function rm(t,o){}function am(t,o){t&1&&m(0,rm,0,0,"ng-template")}function sm(t,o){if(t&1&&(p(0,"span",41),m(1,am,1,0,null,11),d()),t&2){let e=c(5);s(),a("ngTemplateOutlet",e._uploadIconTemplate||e.uploadIconTemplate)}}function lm(t,o){if(t&1&&(q(0),m(1,om,1,1,"UploadIcon",38)(2,sm,2,1,"span",39),F()),t&2){let e=c(4);s(),a("ngIf",!e.uploadIconTemplate&&!e._uploadIconTemplate),s(),a("ngIf",e._uploadIconTemplate||e.uploadIconTemplate)}}function cm(t,o){if(t&1&&m(0,nm,1,1,"span",36)(1,lm,3,2,"ng-container",9),t&2){let e=c(3);a("ngIf",e.uploadIcon),s(),a("ngIf",!e.uploadIcon)}}function pm(t,o){if(t&1&&u(0,"span",43),t&2){let e=c(4);a("ngClass",e.chooseIcon)}}function dm(t,o){t&1&&u(0,"PlusIcon"),t&2&&b("data-pc-section","uploadicon")}function mm(t,o){}function um(t,o){t&1&&m(0,mm,0,0,"ng-template")}function hm(t,o){if(t&1&&(q(0),m(1,dm,1,1,"PlusIcon",9)(2,um,1,0,null,11),F()),t&2){let e=c(4);s(),a("ngIf",!e.chooseIconTemplate&&!e._chooseIconTemplate),s(),a("ngTemplateOutlet",e.chooseIconTemplate||e._chooseIconTemplate)}}function fm(t,o){if(t&1&&m(0,pm,1,1,"span",42)(1,hm,3,2,"ng-container",9),t&2){let e=c(3);a("ngIf",e.chooseIcon),s(),a("ngIf",!e.chooseIcon)}}function gm(t,o){if(t&1&&m(0,cm,2,2)(1,fm,2,2),t&2){let e=c(2);te(e.hasFiles()&&!e.auto?0:1)}}function _m(t,o){if(t&1&&(p(0,"span"),C(1),d()),t&2){let e=c(3);k(e.cx("filelabel")),s(),ye(" ",e.basicFileChosenLabel()," ")}}function bm(t,o){t&1&&R(0)}function vm(t,o){if(t&1&&m(0,bm,1,0,"ng-container",10),t&2){let e=c(3);a("ngTemplateOutlet",e.fileLabelTemplate||e._fileLabelTemplate)("ngTemplateOutletContext",H(2,gd,e.files))}}function ym(t,o){if(t&1&&m(0,_m,2,3,"span",44)(1,vm,1,4,"ng-container"),t&2){let e=c(2);te(!e.fileLabelTemplate&&!e._fileLabelTemplate?0:1)}}function Cm(t,o){if(t&1){let e=T();p(0,"div",21),wn(1,im,1,2,"p-message",14,xn),p(3,"p-button",34),_("onClick",function(){f(e);let n=c();return g(n.onBasicUploaderClick())})("keydown",function(n){f(e);let r=c();return g(r.onBasicKeydown(n))}),m(4,gm,2,1,"ng-template",null,2,A),p(6,"input",35,3),_("change",function(n){f(e);let r=c();return g(r.onFileSelect(n))})("focus",function(){f(e);let n=c();return g(n.onFocus())})("blur",function(){f(e);let n=c();return g(n.onBlur())}),d()(),m(8,ym,2,1),d()}if(t&2){let e=c();k(e.styleClass),a("ngClass","p-fileupload p-fileupload-basic p-component"),b("data-pc-name","fileupload"),s(),In(e.msgs),s(2),oe(e.style),a("styleClass","p-fileupload-choose-button "+e.chooseStyleClass)("disabled",e.disabled)("label",e.chooseButtonLabel)("buttonProps",e.chooseButtonProps),s(3),a("accept",e.accept)("multiple",e.multiple)("disabled",e.disabled),b("aria-label",e.browseFilesLabel)("data-pc-section","input"),s(2),te(e.auto?-1:8)}}var xm=({dt:t})=>`
.p-fileupload input[type="file"] {
    display: none;
}

.p-fileupload-advanced {
    border: 1px solid ${t("fileupload.border.color")};
    border-radius: ${t("fileupload.border.radius")};
    background: ${t("fileupload.background")};
    color: ${t("fileupload.color")};
}

.p-fileupload-header {
    display: flex;
    align-items: center;
    padding: ${t("fileupload.header.padding")};
    background: ${t("fileupload.header.background")};
    color: ${t("fileupload.header.color")};
    border-style: solid;
    border-width: ${t("fileupload.header.border.width")};
    border-color: ${t("fileupload.header.border.color")};
    border-radius: ${t("fileupload.header.border.radius")};
    gap: ${t("fileupload.header.gap")};
}

.p-fileupload-content {
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;
    gap: ${t("fileupload.content.gap")};
    transition: border-color ${t("fileupload.transition.duration")};
    padding: ${t("fileupload.content.padding")};
}

.p-fileupload-content .p-progressbar {
    width: 100%;
    height: ${t("fileupload.progressbar.height")};
}

.p-fileupload-file-list {
    display: flex;
    flex-direction: column;
    gap: ${t("fileupload.filelist.gap")};
}

.p-fileupload-file {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: ${t("fileupload.file.padding")};
    border-bottom: 1px solid ${t("fileupload.file.border.color")};
    gap: ${t("fileupload.file.gap")};
}

.p-fileupload-file:last-child {
    border-bottom: 0;
}

.p-fileupload-file-info {
    display: flex;
    flex-direction: column;
    gap: ${t("fileupload.file.info.gap")};
}

.p-fileupload-file-thumbnail {
    flex-shrink: 0;
}

.p-fileupload-file-actions {
    margin-left: auto;
}

.p-fileupload-highlight {
    border: 1px dashed ${t("fileupload.content.highlight.border.color")};
}

.p-fileupload-advanced .p-message {
    margin-top: 0;
}

.p-fileupload-basic {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: ${t("fileupload.basic.gap")};
}
`,wm={root:({instance:t})=>`p-fileupload p-fileupload-${t.mode} p-component`,header:"p-fileupload-header",pcChooseButton:"p-fileupload-choose-button",pcUploadButton:"p-fileupload-upload-button",pcCancelButton:"p-fileupload-cancel-button",content:"p-fileupload-content",fileList:"p-fileupload-file-list",file:"p-fileupload-file",fileThumbnail:"p-fileupload-file-thumbnail",fileInfo:"p-fileupload-file-info",fileName:"p-fileupload-file-name",fileSize:"p-fileupload-file-size",pcFileBadge:"p-fileupload-file-badge",fileActions:"p-fileupload-file-actions",pcFileRemoveButton:"p-fileupload-file-remove-button"},Ar=(()=>{class t extends Y{name="fileupload";theme=xm;classes=wm;static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var Ei=(()=>{class t extends Q{name;url;method="post";multiple;accept;disabled;auto;withCredentials;maxFileSize;invalidFileSizeMessageSummary="{0}: Invalid file size, ";invalidFileSizeMessageDetail="maximum upload size is {0}.";invalidFileTypeMessageSummary="{0}: Invalid file type, ";invalidFileTypeMessageDetail="allowed file types: {0}.";invalidFileLimitMessageDetail="limit is {0} at most.";invalidFileLimitMessageSummary="Maximum number of files exceeded, ";style;styleClass;previewWidth=50;chooseLabel;uploadLabel;cancelLabel;chooseIcon;uploadIcon;cancelIcon;showUploadButton=!0;showCancelButton=!0;mode="advanced";headers;customUpload;fileLimit;uploadStyleClass;cancelStyleClass;removeStyleClass;chooseStyleClass;chooseButtonProps;uploadButtonProps={severity:"secondary"};cancelButtonProps={severity:"secondary"};onBeforeUpload=new I;onSend=new I;onUpload=new I;onError=new I;onClear=new I;onRemove=new I;onSelect=new I;onProgress=new I;uploadHandler=new I;onImageError=new I;onRemoveUploadedFile=new I;fileTemplate;headerTemplate;contentTemplate;toolbarTemplate;chooseIconTemplate;fileLabelTemplate;uploadIconTemplate;cancelIconTemplate;emptyTemplate;advancedFileInput;basicFileInput;content;set files(e){this._files=[];for(let i=0;i<e.length;i++){let n=e[i];this.validate(n)&&(this.isImage(n)&&(n.objectURL=this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(e[i]))),this._files.push(e[i]))}}get files(){return this._files}get basicButtonLabel(){return this.auto||!this.hasFiles()?this.chooseLabel:this.uploadLabel??this.files[0].name}_files=[];progress=0;dragHighlight;msgs;uploadedFileCount=0;focus;uploading;duplicateIEEvent;translationSubscription;dragOverListener;uploadedFiles=[];sanitizer=j(Kt);zone=j(pt);http=j(ho);_componentStyle=j(Ar);ngOnInit(){super.ngOnInit(),this.translationSubscription=this.config.translationObserver.subscribe(()=>{this.cd.markForCheck()})}ngAfterViewInit(){super.ngAfterViewInit(),dt(this.platformId)&&this.mode==="advanced"&&this.zone.runOutsideAngular(()=>{this.content&&(this.dragOverListener=this.renderer.listen(this.content.nativeElement,"dragover",this.onDragOver.bind(this)))})}_headerTemplate;_contentTemplate;_toolbarTemplate;_chooseIconTemplate;_uploadIconTemplate;_cancelIconTemplate;_emptyTemplate;_fileTemplate;_fileLabelTemplate;templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"header":this._headerTemplate=e.template;break;case"file":this._fileTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;case"toolbar":this._toolbarTemplate=e.template;break;case"chooseicon":this._chooseIconTemplate=e.template;break;case"uploadicon":this._uploadIconTemplate=e.template;break;case"cancelicon":this._cancelIconTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"filelabel":this._fileLabelTemplate=e.template;break;default:this._fileTemplate=e.template;break}})}basicFileChosenLabel(){return this.auto?this.chooseButtonLabel:this.hasFiles()?this.files&&this.files.length===1?this.files[0].name:this.config.getTranslation("fileChosenMessage")?.replace("{0}",this.files.length):this.config.getTranslation("noFileChosenMessage")||""}getTranslation(e){return this.config.getTranslation(e)}choose(){this.advancedFileInput?.nativeElement.click()}onFileSelect(e){if(e.type!=="drop"&&this.isIE11()&&this.duplicateIEEvent){this.duplicateIEEvent=!1;return}this.msgs=[],this.multiple||(this.files=[]);let i=e.dataTransfer?e.dataTransfer.files:e.target.files;for(let n=0;n<i.length;n++){let r=i[n];this.isFileSelected(r)||this.validate(r)&&(this.isImage(r)&&(r.objectURL=this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(i[n]))),this.files.push(i[n]))}this.onSelect.emit({originalEvent:e,files:i,currentFiles:this.files}),this.checkFileLimit(i),this.hasFiles()&&this.auto&&(this.mode!=="advanced"||!this.isFileLimitExceeded())&&this.upload(),e.type!=="drop"&&this.isIE11()?this.clearIEInput():this.clearInputElement()}isFileSelected(e){for(let i of this.files)if(i.name+i.type+i.size===e.name+e.type+e.size)return!0;return!1}isIE11(){if(dt(this.platformId))return!!this.document.defaultView.MSInputMethodContext&&!!this.document.documentMode}validate(e){if(this.msgs=this.msgs||[],this.accept&&!this.isFileTypeValid(e)){let i=`${this.invalidFileTypeMessageSummary.replace("{0}",e.name)} ${this.invalidFileTypeMessageDetail.replace("{0}",this.accept)}`;return this.msgs.push({severity:"error",text:i}),!1}if(this.maxFileSize&&e.size>this.maxFileSize){let i=`${this.invalidFileSizeMessageSummary.replace("{0}",e.name)} ${this.invalidFileSizeMessageDetail.replace("{0}",this.formatSize(this.maxFileSize))}`;return this.msgs.push({severity:"error",text:i}),!1}return!0}isFileTypeValid(e){let i=this.accept?.split(",").map(n=>n.trim());for(let n of i)if(this.isWildcard(n)?this.getTypeClass(e.type)===this.getTypeClass(n):e.type==n||this.getFileExtension(e).toLowerCase()===n.toLowerCase())return!0;return!1}getTypeClass(e){return e.substring(0,e.indexOf("/"))}isWildcard(e){return e.indexOf("*")!==-1}getFileExtension(e){return"."+e.name.split(".").pop()}isImage(e){return/^image\//.test(e.type)}onImageLoad(e){window.URL.revokeObjectURL(e.src)}uploader(){if(this.customUpload)this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.uploadHandler.emit({files:this.files}),this.cd.markForCheck();else{this.uploading=!0,this.msgs=[];let e=new FormData;this.onBeforeUpload.emit({formData:e});for(let i=0;i<this.files.length;i++)e.append(this.name,this.files[i],this.files[i].name);this.http.request(this.method,this.url,{body:e,headers:this.headers,reportProgress:!0,observe:"events",withCredentials:this.withCredentials}).subscribe(i=>{switch(i.type){case Ai.Sent:this.onSend.emit({originalEvent:i,formData:e});break;case Ai.Response:this.uploading=!1,this.progress=0,i.status>=200&&i.status<300?(this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.onUpload.emit({originalEvent:i,files:this.files})):this.onError.emit({files:this.files}),this.uploadedFiles.push(...this.files),this.clear();break;case Ai.UploadProgress:{i.loaded&&(this.progress=Math.round(i.loaded*100/i.total)),this.onProgress.emit({originalEvent:i,progress:this.progress});break}}this.cd.markForCheck()},i=>{this.uploading=!1,this.onError.emit({files:this.files,error:i})})}}clear(){this.files=[],this.uploadedFileCount=0,this.onClear.emit(),this.clearInputElement(),this.msgs=[],this.cd.markForCheck()}remove(e,i){this.clearInputElement(),this.onRemove.emit({originalEvent:e,file:this.files[i]}),this.files.splice(i,1),this.checkFileLimit(this.files)}removeUploadedFile(e){let i=this.uploadedFiles.splice(e,1)[0];this.uploadedFiles=[...this.uploadedFiles],this.onRemoveUploadedFile.emit({file:i,files:this.uploadedFiles})}isFileLimitExceeded(){let i=this.auto?this.files.length:this.files.length+this.uploadedFileCount;return this.fileLimit&&this.fileLimit<=i&&this.focus&&(this.focus=!1),this.fileLimit&&this.fileLimit<i}isChooseDisabled(){return this.auto?this.fileLimit&&this.fileLimit<=this.files.length:this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount}checkFileLimit(e){this.msgs??=[];let i=this.msgs.length>0&&this.fileLimit&&this.fileLimit<e.length;if(this.isFileLimitExceeded()||i){let n=`${this.invalidFileLimitMessageSummary.replace("{0}",this.fileLimit.toString())} ${this.invalidFileLimitMessageDetail.replace("{0}",this.fileLimit.toString())}`;this.msgs.push({severity:"error",text:n})}else this.msgs=this.msgs.filter(n=>!n.text.includes(this.invalidFileLimitMessageSummary))}clearInputElement(){this.advancedFileInput&&this.advancedFileInput.nativeElement&&(this.advancedFileInput.nativeElement.value=""),this.basicFileInput&&this.basicFileInput.nativeElement&&(this.basicFileInput.nativeElement.value="")}clearIEInput(){this.advancedFileInput&&this.advancedFileInput.nativeElement&&(this.duplicateIEEvent=!0,this.advancedFileInput.nativeElement.value="")}hasFiles(){return this.files&&this.files.length>0}hasUploadedFiles(){return this.uploadedFiles&&this.uploadedFiles.length>0}onDragEnter(e){this.disabled||(e.stopPropagation(),e.preventDefault())}onDragOver(e){this.disabled||(ut(this.content?.nativeElement,"p-fileupload-highlight"),this.dragHighlight=!0,e.stopPropagation(),e.preventDefault())}onDragLeave(e){this.disabled||_i(this.content?.nativeElement,"p-fileupload-highlight")}onDrop(e){if(!this.disabled){_i(this.content?.nativeElement,"p-fileupload-highlight"),e.stopPropagation(),e.preventDefault();let i=e.dataTransfer?e.dataTransfer.files:e.target.files;(this.multiple||i&&i.length===1)&&this.onFileSelect(e)}}onFocus(){this.focus=!0}onBlur(){this.focus=!1}formatSize(e){let r=this.getTranslation(We.FILE_SIZE_TYPES);if(e===0)return`0 ${r[0]}`;let l=Math.floor(Math.log(e)/Math.log(1024));return`${(e/Math.pow(1024,l)).toFixed(3)} ${r[l]}`}upload(){this.hasFiles()&&this.uploader()}onBasicUploaderClick(){this.basicFileInput?.nativeElement.click()}onBasicKeydown(e){switch(e.code){case"Space":case"Enter":this.onBasicUploaderClick(),e.preventDefault();break}}imageError(e){this.onImageError.emit(e)}getBlockableElement(){return this.el.nativeElement.children[0]}get chooseButtonLabel(){return this.chooseLabel||this.config.getTranslation(We.CHOOSE)}get uploadButtonLabel(){return this.uploadLabel||this.config.getTranslation(We.UPLOAD)}get cancelButtonLabel(){return this.cancelLabel||this.config.getTranslation(We.CANCEL)}get browseFilesLabel(){return this.config.getTranslation(We.ARIA)[We.BROWSE_FILES]}get pendingLabel(){return this.config.getTranslation(We.PENDING)}ngOnDestroy(){this.content&&this.content.nativeElement&&this.dragOverListener&&(this.dragOverListener(),this.dragOverListener=null),this.translationSubscription&&this.translationSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-fileupload"],["p-fileUpload"]],contentQueries:function(i,n,r){if(i&1&&(O(r,od,4),O(r,rd,4),O(r,Rr,4),O(r,ad,4),O(r,sd,4),O(r,ld,4),O(r,cd,4),O(r,pd,4),O(r,dd,4),O(r,se,4)),i&2){let l;v(l=y())&&(n.fileTemplate=l.first),v(l=y())&&(n.headerTemplate=l.first),v(l=y())&&(n.contentTemplate=l.first),v(l=y())&&(n.toolbarTemplate=l.first),v(l=y())&&(n.chooseIconTemplate=l.first),v(l=y())&&(n.fileLabelTemplate=l.first),v(l=y())&&(n.uploadIconTemplate=l.first),v(l=y())&&(n.cancelIconTemplate=l.first),v(l=y())&&(n.emptyTemplate=l.first),v(l=y())&&(n.templates=l)}},viewQuery:function(i,n){if(i&1&&($(md,5),$(ud,5),$(Rr,5)),i&2){let r;v(r=y())&&(n.advancedFileInput=r.first),v(r=y())&&(n.basicFileInput=r.first),v(r=y())&&(n.content=r.first)}},inputs:{name:"name",url:"url",method:"method",multiple:[2,"multiple","multiple",P],accept:"accept",disabled:[2,"disabled","disabled",P],auto:[2,"auto","auto",P],withCredentials:[2,"withCredentials","withCredentials",P],maxFileSize:[2,"maxFileSize","maxFileSize",fe],invalidFileSizeMessageSummary:"invalidFileSizeMessageSummary",invalidFileSizeMessageDetail:"invalidFileSizeMessageDetail",invalidFileTypeMessageSummary:"invalidFileTypeMessageSummary",invalidFileTypeMessageDetail:"invalidFileTypeMessageDetail",invalidFileLimitMessageDetail:"invalidFileLimitMessageDetail",invalidFileLimitMessageSummary:"invalidFileLimitMessageSummary",style:"style",styleClass:"styleClass",previewWidth:[2,"previewWidth","previewWidth",fe],chooseLabel:"chooseLabel",uploadLabel:"uploadLabel",cancelLabel:"cancelLabel",chooseIcon:"chooseIcon",uploadIcon:"uploadIcon",cancelIcon:"cancelIcon",showUploadButton:[2,"showUploadButton","showUploadButton",P],showCancelButton:[2,"showCancelButton","showCancelButton",P],mode:"mode",headers:"headers",customUpload:[2,"customUpload","customUpload",P],fileLimit:[2,"fileLimit","fileLimit",e=>fe(e,null)],uploadStyleClass:"uploadStyleClass",cancelStyleClass:"cancelStyleClass",removeStyleClass:"removeStyleClass",chooseStyleClass:"chooseStyleClass",chooseButtonProps:"chooseButtonProps",uploadButtonProps:"uploadButtonProps",cancelButtonProps:"cancelButtonProps",files:"files"},outputs:{onBeforeUpload:"onBeforeUpload",onSend:"onSend",onUpload:"onUpload",onError:"onError",onClear:"onClear",onRemove:"onRemove",onSelect:"onSelect",onProgress:"onProgress",uploadHandler:"uploadHandler",onImageError:"onImageError",onRemoveUploadedFile:"onRemoveUploadedFile"},features:[G([Ar]),E],decls:2,vars:2,consts:[["advancedfileinput",""],["content",""],["icon",""],["basicfileinput",""],[3,"ngClass","ngStyle","class",4,"ngIf"],[3,"ngClass","class",4,"ngIf"],[3,"ngClass","ngStyle"],["type","file",3,"change","multiple","accept","disabled"],[1,"p-fileupload-header"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngTemplateOutlet"],[1,"p-fileupload-content",3,"dragenter","dragleave","drop"],[3,"value","showValue",4,"ngIf"],[3,"severity","text"],["class","p-fileupload-file-list",4,"ngIf"],[3,"focus","blur","onClick","keydown.enter","styleClass","disabled","label","buttonProps"],[3,"class",4,"ngIf"],[3,"label","disabled","styleClass","buttonProps","onClick",4,"ngIf"],[3,"onClick","label","disabled","styleClass","buttonProps"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],[3,"value","showValue"],[1,"p-fileupload-file-list"],[1,"p-fileupload-file"],["ngFor","",3,"ngForOf","ngForTemplate"],["class","p-fileupload-file",4,"ngFor","ngForOf"],["class","p-fileupload-file-thumbnail",3,"src","width","error",4,"ngIf"],[1,"p-fileupload-file-info"],[1,"p-fileupload-file-name"],[1,"p-fileupload-file-size"],[1,"p-fileupload-file-actions"],["text","","rounded","","severity","danger",3,"onClick","disabled","styleClass"],[1,"p-fileupload-file-thumbnail",3,"error","src","width"],[3,"onClick","keydown","styleClass","disabled","label","buttonProps"],["type","file",3,"change","focus","blur","accept","multiple","disabled"],["class","p-button-icon p-button-icon-left",3,"ngClass",4,"ngIf"],[1,"p-button-icon","p-button-icon-left",3,"ngClass"],[3,"styleClass",4,"ngIf"],["class","p-button-icon p-button-icon-left",4,"ngIf"],[3,"styleClass"],[1,"p-button-icon","p-button-icon-left"],["class","p-button-icon p-button-icon-left pi",3,"ngClass",4,"ngIf"],[1,"p-button-icon","p-button-icon-left","pi",3,"ngClass"],[3,"class"]],template:function(i,n){i&1&&m(0,tm,15,39,"div",4)(1,Cm,9,16,"div",5),i&2&&(a("ngIf",n.mode==="advanced"),s(),a("ngIf",n.mode==="basic"))},dependencies:[U,ie,Ve,Z,ae,ke,Ee,$r,Lr,rr,dr,ht,V],encapsulation:2,changeDetection:0})}return t})(),Br=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=J({type:t});static \u0275inj=X({imports:[Ei,V,V]})}return t})();var Im=()=>({width:"50vw"}),Tm=()=>({"1199px":"75vw","575px":"90vw"}),Sm=()=>({required:"Name is required"}),km=()=>({required:"Skills are required",pattern:""}),Om=()=>({pattern:"Invalid GitHub URL"}),Mm=()=>({pattern:"Invalid LinkedIn URL"}),Em=()=>({pattern:"Invalid Twitter URL"}),qm=()=>({pattern:"Invalid Website URL"});function Fm(t,o){if(t&1&&(p(0,"h3",24),C(1),d()),t&2){let e=c();s(),B(e.title)}}var pi=class t{constructor(o,e,i,n,r,l){this._authFacade=o;this._store=e;this._profileFormBuilder=i;this.messageService=n;this._fb=r;this._profileService=l;this.profileUpdatedForm=i.updateProfile(r),this._authFacade.authUser$.subscribe(h=>{h&&(this.userData||(this.user=h,this.updateForm(h)))})}userData;isOpen=!1;title="Update Profile";closable=!0;isOpenChange=new I;profileUpdated=new I;user={_id:"",name:"",bio:"",skills:"",avatar:"",social:{github:"",linkedin:"",twitter:"",website:""},roles:[],createdAt:"",updatedAt:""};profileUpdatedForm;ngOnChanges(o){o.isOpen&&this.isOpen&&this.updateForm(this.userData||this.user),o.userData&&this.userData&&(this.user=this.userData,this.updateForm(this.userData))}updateForm(o){this.profileUpdatedForm=this._profileFormBuilder.updateProfile(this._fb,o)}onFileSelect(o){let e=o.files[0];this.profileUpdatedForm.get("file")?.setValue(e)}onSubmit(){if(this.profileUpdatedForm.valid){let o=this.profileUpdatedForm.value,e=this.profileUpdatedForm.get("file")?.value,i=new FormData;Object.keys(o).forEach(n=>{n==="social"?i.append(n,JSON.stringify(o[n])):n!=="file"&&i.append(n,o[n])}),e&&i.append("file",e),this._profileService.updateMe(i).subscribe({next:n=>{this._store.dispatch(Fo.success({user:n})),this.messageService.add({severity:"success",summary:"Profile Updated",detail:"Your profile has been updated successfully!",life:4e3}),this.profileUpdated.emit(),this.closeDialog()},error:n=>{this.messageService.add({severity:"error",summary:"Update Failed",detail:n.message||"Failed to update profile. Please try again.",life:4e3})}})}}closeDialog(){this.isOpen=!1,this.isOpenChange.emit(!1),this.updateForm(this.userData||this.user)}get skills(){return this.user.skills?this.user.skills:[]}static \u0275fac=function(e){return new(e||t)(M(Le),M(Yt),M(nn),M(et),M(ni),M(Ot))};static \u0275cmp=x({type:t,selectors:[["app-profile-update"]],inputs:{userData:"userData",isOpen:"isOpen",title:"title",closable:"closable"},outputs:{isOpenChange:"isOpenChange",profileUpdated:"profileUpdated"},standalone:!1,features:[Te],decls:25,vars:33,consts:[[3,"visibleChange","onHide","visible","breakpoints","modal","draggable","resizable","closable"],["pTemplate","header"],[3,"ngSubmit","formGroup"],[1,"grid","gap-4"],["label","Name",3,"control","errorMessages"],["pInputText","","formControlName","name",1,"w-full","p-2","border","rounded-md"],["label","Bio",3,"control"],["pInputTextarea","","formControlName","bio","rows","3",1,"w-full","p-2","border","rounded-md"],["mode","basic","chooseLabel","Choose","chooseIcon","pi pi-upload","name","demo[]","accept","image/*","maxFileSize","1000000",3,"onSelect","multiple"],["label","Skills (Note: comma seperated)",3,"control","errorMessages"],["pInputText","","formControlName","skills",1,"w-full","p-2","border","rounded-md"],["formGroupName","social",1,"grid","gap-4"],[1,"font-semibold"],["label","GitHub",3,"control","errorMessages"],["pInputText","","formControlName","github",1,"w-full","p-2","border","rounded-md"],["label","LinkedIn",3,"control","errorMessages"],["pInputText","","formControlName","linkedin",1,"w-full","p-2","border","rounded-md"],["label","Twitter",3,"control","errorMessages"],["pInputText","","formControlName","twitter",1,"w-full","p-2","border","rounded-md"],["label","Website",3,"control","errorMessages"],["pInputText","","formControlName","website",1,"w-full","p-2","border","rounded-md"],[1,"flex","justify-end","gap-2","mt-4"],["type","button","label","Cancel","styleClass","p-button-text",3,"onClick","disabled"],["type","submit","label","Update",3,"disabled"],[1,"text-xl","font-bold"]],template:function(e,i){e&1&&(p(0,"p-dialog",0),Pe("visibleChange",function(r){return Fe(i.isOpen,r)||(i.isOpen=r),r}),_("onHide",function(){return i.closeDialog()}),m(1,Fm,2,1,"ng-template",1),p(2,"form",2),_("ngSubmit",function(){return i.onSubmit()}),p(3,"div",3)(4,"app-input-wrapper",4),u(5,"input",5),d(),p(6,"app-input-wrapper",6),u(7,"textarea",7),d(),p(8,"p-fileupload",8),_("onSelect",function(r){return i.onFileSelect(r)}),d(),p(9,"app-input-wrapper",9),u(10,"input",10),d(),p(11,"div",11)(12,"h4",12),C(13,"Social Links"),d(),p(14,"app-input-wrapper",13),u(15,"input",14),d(),p(16,"app-input-wrapper",15),u(17,"input",16),d(),p(18,"app-input-wrapper",17),u(19,"input",18),d(),p(20,"app-input-wrapper",19),u(21,"input",20),d()()(),p(22,"div",21)(23,"p-button",22),_("onClick",function(){return i.isOpen=!1}),d(),u(24,"p-button",23),d()()()),e&2&&(oe(ce(25,Im)),qe("visible",i.isOpen),a("breakpoints",ce(26,Tm))("modal",!0)("draggable",!1)("resizable",!1)("closable",i.closable),s(2),a("formGroup",i.profileUpdatedForm),s(2),a("control",i.profileUpdatedForm.get("name"))("errorMessages",ce(27,Sm)),s(2),a("control",i.profileUpdatedForm.get("bio")),s(2),a("multiple",!1),s(),a("control",i.profileUpdatedForm.get("skills"))("errorMessages",ce(28,km)),s(5),a("control",i.profileUpdatedForm.get("social.github"))("errorMessages",ce(29,Om)),s(2),a("control",i.profileUpdatedForm.get("social.linkedin"))("errorMessages",ce(30,Mm)),s(2),a("control",i.profileUpdatedForm.get("social.twitter"))("errorMessages",ce(31,Em)),s(2),a("control",i.profileUpdatedForm.get("social.website"))("errorMessages",ce(32,qm)),s(3),a("disabled",!i.closable),s(),a("disabled",i.profileUpdatedForm.invalid))},dependencies:[se,Ee,si,kt,ft,ei,St,Ge,Jt,ti,ii,Ro,Ei],encapsulation:2})};var on=class t{postForm(o,e){return o.group({_id:[{value:e?._id||"",disabled:!e?._id}],content:[e?.content||"",[at.required]],docUrl:[e?.docUri||""],file:[],prompt:[""]})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=L({token:t,factory:t.\u0275fac,providedIn:"root"})};var Dm=["header"],Lm=[[["p-header"]]],zm=["p-header"];function $m(t,o){t&1&&R(0)}function Rm(t,o){if(t&1&&(p(0,"div",3),me(1),m(2,$m,1,0,"ng-container",4),d()),t&2){let e=c();s(2),a("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)}}function Am(t,o){t&1&&(p(0,"div",3)(1,"span",5)(2,"select",6)(3,"option",7),C(4,"Heading"),d(),p(5,"option",8),C(6,"Subheading"),d(),p(7,"option",9),C(8,"Normal"),d()(),p(9,"select",10)(10,"option",9),C(11,"Sans Serif"),d(),p(12,"option",11),C(13,"Serif"),d(),p(14,"option",12),C(15,"Monospace"),d()()(),p(16,"span",5),u(17,"button",13)(18,"button",14)(19,"button",15),d(),p(20,"span",5),u(21,"select",16)(22,"select",17),d(),p(23,"span",5),u(24,"button",18)(25,"button",19),p(26,"select",20),u(27,"option",9),p(28,"option",21),C(29,"center"),d(),p(30,"option",22),C(31,"right"),d(),p(32,"option",23),C(33,"justify"),d()()(),p(34,"span",5),u(35,"button",24)(36,"button",25)(37,"button",26),d(),p(38,"span",5),u(39,"button",27),d()())}var Bm=({dt:t})=>`
/*!
* Quill Editor v1.3.3
* https://quilljs.com/
* Copyright (c) 2014, Jason Chen
* Copyright (c) 2013, salesforce.com
*/
.ql-container {
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 13px;
    height: 100%;
    margin: 0;
    position: relative;
}
.ql-container.ql-disabled .ql-tooltip {
    visibility: hidden;
}
.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {
    pointer-events: none;
}
.ql-clipboard {
    inset-inline-start: -100000px;
    height: 1px;
    overflow-y: hidden;
    position: absolute;
    top: 50%;
}
.ql-clipboard p {
    margin: 0;
    padding: 0;
}
.ql-editor {
    box-sizing: border-box;
    line-height: 1.42;
    height: 100%;
    outline: none;
    overflow-y: auto;
    padding: 12px 15px;
    tab-size: 4;
    -moz-tab-size: 4;
    text-align: start;
    white-space: pre-wrap;
    word-wrap: break-word;
}
.ql-editor > * {
    cursor: text;
}
.ql-editor p,
.ql-editor ol,
.ql-editor ul,
.ql-editor pre,
.ql-editor blockquote,
.ql-editor h1,
.ql-editor h2,
.ql-editor h3,
.ql-editor h4,
.ql-editor h5,
.ql-editor h6 {
    margin: 0;
    padding: 0;
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol,
.ql-editor ul {
    padding-inline-start: 1.5rem;
}
.ql-editor ol > li,
.ql-editor ul > li {
    list-style-type: none;
}
.ql-editor ul > li::before {
    content: '\\2022';
}
.ql-editor ul[data-checked='true'],
.ql-editor ul[data-checked='false'] {
    pointer-events: none;
}
.ql-editor ul[data-checked='true'] > li *,
.ql-editor ul[data-checked='false'] > li * {
    pointer-events: all;
}
.ql-editor ul[data-checked='true'] > li::before,
.ql-editor ul[data-checked='false'] > li::before {
    color: #777;
    cursor: pointer;
    pointer-events: all;
}
.ql-editor ul[data-checked='true'] > li::before {
    content: '\\2611';
}
.ql-editor ul[data-checked='false'] > li::before {
    content: '\\2610';
}
.ql-editor li::before {
    display: inline-block;
    white-space: nowrap;
    width: 1.2rem;
}
.ql-editor li:not(.ql-direction-rtl)::before {
    margin-inline-start: -1.5rem;
    margin-inline-end: 0.3rem;
    text-align: end;
}
.ql-editor li.ql-direction-rtl::before {
    margin-inline-start: 0.3rem;
    margin-inline-end: -1.5rem;
}
.ql-editor ol li:not(.ql-direction-rtl),
.ql-editor ul li:not(.ql-direction-rtl) {
    padding-inline-start: 1.5rem;
}
.ql-editor ol li.ql-direction-rtl,
.ql-editor ul li.ql-direction-rtl {
    padding-inline-end: 1.5rem;
}
.ql-editor ol li {
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    counter-increment: list-0;
}
.ql-editor ol li:before {
    content: counter(list-0, decimal) '. ';
}
.ql-editor ol li.ql-indent-1 {
    counter-increment: list-1;
}
.ql-editor ol li.ql-indent-1:before {
    content: counter(list-1, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-1 {
    counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-2 {
    counter-increment: list-2;
}
.ql-editor ol li.ql-indent-2:before {
    content: counter(list-2, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-2 {
    counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-3 {
    counter-increment: list-3;
}
.ql-editor ol li.ql-indent-3:before {
    content: counter(list-3, decimal) '. ';
}
.ql-editor ol li.ql-indent-3 {
    counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-4 {
    counter-increment: list-4;
}
.ql-editor ol li.ql-indent-4:before {
    content: counter(list-4, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-4 {
    counter-reset: list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-5 {
    counter-increment: list-5;
}
.ql-editor ol li.ql-indent-5:before {
    content: counter(list-5, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-5 {
    counter-reset: list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-6 {
    counter-increment: list-6;
}
.ql-editor ol li.ql-indent-6:before {
    content: counter(list-6, decimal) '. ';
}
.ql-editor ol li.ql-indent-6 {
    counter-reset: list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-7 {
    counter-increment: list-7;
}
.ql-editor ol li.ql-indent-7:before {
    content: counter(list-7, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-7 {
    counter-reset: list-8 list-9;
}
.ql-editor ol li.ql-indent-8 {
    counter-increment: list-8;
}
.ql-editor ol li.ql-indent-8:before {
    content: counter(list-8, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-8 {
    counter-reset: list-9;
}
.ql-editor ol li.ql-indent-9 {
    counter-increment: list-9;
}
.ql-editor ol li.ql-indent-9:before {
    content: counter(list-9, decimal) '. ';
}
.ql-editor .ql-video {
    display: block;
    max-width: 100%;
}
.ql-editor .ql-video.ql-align-center {
    margin: 0 auto;
}
.ql-editor .ql-video.ql-align-right {
    margin: 0 0 0 auto;
}
.ql-editor .ql-bg-black {
    background: #000;
}
.ql-editor .ql-bg-red {
    background: #e60000;
}
.ql-editor .ql-bg-orange {
    background: #f90;
}
.ql-editor .ql-bg-yellow {
    background: #ff0;
}
.ql-editor .ql-bg-green {
    background: #008a00;
}
.ql-editor .ql-bg-blue {
    background: #06c;
}
.ql-editor .ql-bg-purple {
    background: #93f;
}
.ql-editor .ql-color-white {
    color: #fff;
}
.ql-editor .ql-color-red {
    color: #e60000;
}
.ql-editor .ql-color-orange {
    color: #f90;
}
.ql-editor .ql-color-yellow {
    color: #ff0;
}
.ql-editor .ql-color-green {
    color: #008a00;
}
.ql-editor .ql-color-blue {
    color: #06c;
}
.ql-editor .ql-color-purple {
    color: #93f;
}
.ql-editor .ql-font-serif {
    font-family: Georgia, Times New Roman, serif;
}
.ql-editor .ql-font-monospace {
    font-family: Monaco, Courier New, monospace;
}
.ql-editor .ql-size-small {
    font-size: 0.75rem;
}
.ql-editor .ql-size-large {
    font-size: 1.5rem;
}
.ql-editor .ql-size-huge {
    font-size: 2.5rem;
}
.ql-editor .ql-direction-rtl {
    direction: rtl;
    text-align: inherit;
}
.ql-editor .ql-align-center {
    text-align: center;
}
.ql-editor .ql-align-justify {
    text-align: justify;
}
.ql-editor .ql-align-right {
    text-align: end;
}
.ql-editor.ql-blank::before {
    color: rgba(0, 0, 0, 0.6);
    content: attr(data-placeholder);
    font-style: italic;
    inset-inline-start: 15px;
    pointer-events: none;
    position: absolute;
    inset-inline-end: 15px;
}
.ql-snow.ql-toolbar:after,
.ql-snow .ql-toolbar:after {
    clear: both;
    content: '';
    display: table;
}
.ql-snow.ql-toolbar button,
.ql-snow .ql-toolbar button {
    background: none;
    border: none;
    cursor: pointer;
    display: inline-block;
    float: left;
    height: 24px;
    padding-block: 3px;
    padding-inline: 5px;
    width: 28px;
}
.ql-snow.ql-toolbar button svg,
.ql-snow .ql-toolbar button svg {
    float: left;
    height: 100%;
}
.ql-snow.ql-toolbar button:active:hover,
.ql-snow .ql-toolbar button:active:hover {
    outline: none;
}
.ql-snow.ql-toolbar input.ql-image[type='file'],
.ql-snow .ql-toolbar input.ql-image[type='file'] {
    display: none;
}
.ql-snow.ql-toolbar button:hover,
.ql-snow .ql-toolbar button:hover,
.ql-snow.ql-toolbar button:focus,
.ql-snow .ql-toolbar button:focus,
.ql-snow.ql-toolbar button.ql-active,
.ql-snow .ql-toolbar button.ql-active,
.ql-snow.ql-toolbar .ql-picker-label:hover,
.ql-snow .ql-toolbar .ql-picker-label:hover,
.ql-snow.ql-toolbar .ql-picker-label.ql-active,
.ql-snow .ql-toolbar .ql-picker-label.ql-active,
.ql-snow.ql-toolbar .ql-picker-item:hover,
.ql-snow .ql-toolbar .ql-picker-item:hover,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected {
    color: #06c;
}
.ql-snow.ql-toolbar button:hover .ql-fill,
.ql-snow .ql-toolbar button:hover .ql-fill,
.ql-snow.ql-toolbar button:focus .ql-fill,
.ql-snow .ql-toolbar button:focus .ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
    fill: #06c;
}
.ql-snow.ql-toolbar button:hover .ql-stroke,
.ql-snow .ql-toolbar button:hover .ql-stroke,
.ql-snow.ql-toolbar button:focus .ql-stroke,
.ql-snow .ql-toolbar button:focus .ql-stroke,
.ql-snow.ql-toolbar button.ql-active .ql-stroke,
.ql-snow .ql-toolbar button.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow.ql-toolbar button:hover .ql-stroke-miter,
.ql-snow .ql-toolbar button:hover .ql-stroke-miter,
.ql-snow.ql-toolbar button:focus .ql-stroke-miter,
.ql-snow .ql-toolbar button:focus .ql-stroke-miter,
.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
    stroke: #06c;
}
@media (pointer: coarse) {
    .ql-snow.ql-toolbar button:hover:not(.ql-active),
    .ql-snow .ql-toolbar button:hover:not(.ql-active) {
        color: #444;
    }
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
        fill: #444;
    }
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
        stroke: #444;
    }
}
.ql-snow {
    box-sizing: border-box;
}
.ql-snow * {
    box-sizing: border-box;
}
.ql-snow .ql-hidden {
    display: none;
}
.ql-snow .ql-out-bottom,
.ql-snow .ql-out-top {
    visibility: hidden;
}
.ql-snow .ql-tooltip {
    position: absolute;
    transform: translateY(10px);
}
.ql-snow .ql-tooltip a {
    cursor: pointer;
    text-decoration: none;
}
.ql-snow .ql-tooltip.ql-flip {
    transform: translateY(-10px);
}
.ql-snow .ql-formats {
    display: inline-block;
    vertical-align: middle;
}
.ql-snow .ql-formats:after {
    clear: both;
    content: '';
    display: table;
}
.ql-snow .ql-stroke {
    fill: none;
    stroke: #444;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
}
.ql-snow .ql-stroke-miter {
    fill: none;
    stroke: #444;
    stroke-miterlimit: 10;
    stroke-width: 2;
}
.ql-snow .ql-fill,
.ql-snow .ql-stroke.ql-fill {
    fill: #444;
}
.ql-snow .ql-empty {
    fill: none;
}
.ql-snow .ql-even {
    fill-rule: evenodd;
}
.ql-snow .ql-thin,
.ql-snow .ql-stroke.ql-thin {
    stroke-width: 1;
}
.ql-snow .ql-transparent {
    opacity: 0.4;
}
.ql-snow .ql-direction svg:last-child {
    display: none;
}
.ql-snow .ql-direction.ql-active svg:last-child {
    display: inline;
}
.ql-snow .ql-direction.ql-active svg:first-child {
    display: none;
}
.ql-snow .ql-editor h1 {
    font-size: 2rem;
}
.ql-snow .ql-editor h2 {
    font-size: 1.5rem;
}
.ql-snow .ql-editor h3 {
    font-size: 1.17rem;
}
.ql-snow .ql-editor h4 {
    font-size: 1rem;
}
.ql-snow .ql-editor h5 {
    font-size: 0.83rem;
}
.ql-snow .ql-editor h6 {
    font-size: 0.67rem;
}
.ql-snow .ql-editor a {
    text-decoration: underline;
}
.ql-snow .ql-editor blockquote {
    border-inline-start: 4px solid #ccc;
    margin-block-end: 5px;
    margin-block-start: 5px;
    padding-inline-start: 16px;
}
.ql-snow .ql-editor code,
.ql-snow .ql-editor pre {
    background: #f0f0f0;
    border-radius: 3px;
}
.ql-snow .ql-editor pre {
    white-space: pre-wrap;
    margin-block-end: 5px;
    margin-block-start: 5px;
    padding: 5px 10px;
}
.ql-snow .ql-editor code {
    font-size: 85%;
    padding: 2px 4px;
}
.ql-snow .ql-editor pre.ql-syntax {
    background: #23241f;
    color: #f8f8f2;
    overflow: visible;
}
.ql-snow .ql-editor img {
    max-width: 100%;
}
.ql-snow .ql-picker {
    color: #444;
    display: inline-block;
    float: left;
    inset-inline-start: 0;
    font-size: 14px;
    font-weight: 500;
    height: 24px;
    position: relative;
    vertical-align: middle;
}
.ql-snow .ql-picker-label {
    cursor: pointer;
    display: inline-block;
    height: 100%;
    padding-inline-start: 8px;
    padding-inline-end: 2px;
    position: relative;
    width: 100%;
}
.ql-snow .ql-picker-label::before {
    display: inline-block;
    line-height: 22px;
}
.ql-snow .ql-picker-options {
    background: #fff;
    display: none;
    min-width: 100%;
    padding: 4px 8px;
    position: absolute;
    white-space: nowrap;
}
.ql-snow .ql-picker-options .ql-picker-item {
    cursor: pointer;
    display: block;
    padding-block-end: 5px;
    padding-block-start: 5px;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    color: #ccc;
    z-index: 2;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
    fill: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
    stroke: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    display: block;
    margin-block-start: -1px;
    top: 100%;
    z-index: 1;
}
.ql-snow .ql-color-picker,
.ql-snow .ql-icon-picker {
    width: 28px;
}
.ql-snow .ql-color-picker .ql-picker-label,
.ql-snow .ql-icon-picker .ql-picker-label {
    padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-label svg,
.ql-snow .ql-icon-picker .ql-picker-label svg {
    inset-inline-end: 4px;
}
.ql-snow .ql-icon-picker .ql-picker-options {
    padding: 4px 0;
}
.ql-snow .ql-icon-picker .ql-picker-item {
    height: 24px;
    width: 24px;
    padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-options {
    padding: 3px 5px;
    width: 152px;
}
.ql-snow .ql-color-picker .ql-picker-item {
    border: 1px solid transparent;
    float: left;
    height: 16px;
    margin: 2px;
    padding: 0;
    width: 16px;
}
.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
    position: absolute;
    margin-block-start: -9px;
    inset-inline-end: 0;
    top: 50%;
    width: 18px;
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {
    content: attr(data-label);
}
.ql-snow .ql-picker.ql-header {
    width: 98px;
}
.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
    content: 'Normal';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
    content: 'Heading 1';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
    content: 'Heading 2';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
    content: 'Heading 3';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
    content: 'Heading 4';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
    content: 'Heading 5';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
    content: 'Heading 6';
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
    font-size: 2rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
    font-size: 1.5rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
    font-size: 1.17rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
    font-size: 1rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
    font-size: 0.83rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
    font-size: 0.67rem;
}
.ql-snow .ql-picker.ql-font {
    width: 108px;
}
.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
    content: 'Sans Serif';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
    content: 'Serif';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='monospace']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
    content: 'Monospace';
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
    font-family: Georgia, Times New Roman, serif;
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
    font-family: Monaco, Courier New, monospace;
}
.ql-snow .ql-picker.ql-size {
    width: 98px;
}
.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
    content: 'Normal';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
    content: 'Small';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
    content: 'Large';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
    content: 'Huge';
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
    font-size: 10px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
    font-size: 18px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
    font-size: 32px;
}
.ql-snow .ql-color-picker.ql-background .ql-picker-item {
    background: #fff;
}
.ql-snow .ql-color-picker.ql-color .ql-picker-item {
    background: #000;
}
.ql-toolbar.ql-snow {
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    padding: 8px;
}
.ql-toolbar.ql-snow .ql-formats {
    margin-inline-end: 15px;
}
.ql-toolbar.ql-snow .ql-picker-label {
    border: 1px solid transparent;
}
.ql-toolbar.ql-snow .ql-picker-options {
    border: 1px solid transparent;
    box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    border-color: #ccc;
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    border-color: #ccc;
}
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
    border-color: #000;
}
.ql-toolbar.ql-snow + .ql-container.ql-snow {
    border-block-start: 0;
}
.ql-snow .ql-tooltip {
    background: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 0 5px #ddd;
    color: #444;
    padding: 5px 12px;
    white-space: nowrap;
}
.ql-snow .ql-tooltip::before {
    content: 'Visit URL:';
    line-height: 26px;
    margin-inline-end: 8px;
}
.ql-snow .ql-tooltip input[type='text'] {
    display: none;
    border: 1px solid #ccc;
    font-size: 13px;
    height: 26px;
    margin: 0;
    padding: 3px 5px;
    width: 170px;
}
.ql-snow .ql-tooltip a.ql-preview {
    display: inline-block;
    max-width: 200px;
    overflow-x: hidden;
    text-overflow: ellipsis;
    vertical-align: top;
}
.ql-snow .ql-tooltip a.ql-action::after {
    border-inline-end: 1px solid #ccc;
    content: 'Edit';
    margin-inline-start: 16px;
    padding-inline-end: 8px;
}
.ql-snow .ql-tooltip a.ql-remove::before {
    content: 'Remove';
    margin-inline-start: 8px;
}
.ql-snow .ql-tooltip a {
    line-height: 26px;
}
.ql-snow .ql-tooltip.ql-editing a.ql-preview,
.ql-snow .ql-tooltip.ql-editing a.ql-remove {
    display: none;
}
.ql-snow .ql-tooltip.ql-editing input[type='text'] {
    display: inline-block;
}
.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
    border-inline-end: 0;
    content: 'Save';
    padding-inline-end: 0;
}
.ql-snow .ql-tooltip[data-mode='link']::before {
    content: 'Enter link:';
}
.ql-snow .ql-tooltip[data-mode='formula']::before {
    content: 'Enter formula:';
}
.ql-snow .ql-tooltip[data-mode='video']::before {
    content: 'Enter video:';
}
.ql-snow a {
    color: #06c;
}
.ql-container.ql-snow {
    border: 1px solid #ccc;
}

.p-editor .p-editor-toolbar {
    background: ${t("editor.toolbar.background")};
    border-start-end-radius: ${t("editor.toolbar.border.radius")};
    border-start-start-radius: ${t("editor.toolbar.border.radius")};
}

.p-editor .p-editor-toolbar.ql-snow {
    border: 1px solid ${t("editor.toolbar.border.color")};
}

.p-editor .p-editor-toolbar.ql-snow .ql-stroke {
    stroke: ${t("editor.toolbar.item.color")};
}

.p-editor .p-editor-toolbar.ql-snow .ql-fill {
    fill: ${t("editor.toolbar.item.color")};
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label {
    border: 0 none;
    color: ${t("editor.toolbar.item.color")};
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover {
    color: ${t("editor.toolbar.item.hover.color")};
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-stroke {
    stroke: ${t("editor.toolbar.item.hover.color")};
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-fill {
    fill: ${t("editor.toolbar.item.hover.color")};
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    color: ${t("editor.toolbar.item.active.color")};
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
    stroke: ${t("editor.toolbar.item.active.color")};
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
    fill: ${t("editor.toolbar.item.active.color")};
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    background: ${t("editor.overlay.background")};
    border: 1px solid ${t("editor.overlay.border.color")};
    box-shadow: ${t("editor.overlay.shadow")};
    border-radius: ${t("editor.overlay.border.radius")};
    padding: ${t("editor.overlay.padding")};
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item {
    color: ${t("editor.overlay.option.color")};
    border-radius: ${t("editor.overlay.option.border.radius")};
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item:hover {
    background: ${t("editor.overlay.option.focus.background")};
    color: ${t("editor.overlay.option.focus.color")};
}

.p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded:not(.ql-icon-picker) .ql-picker-item {
    padding: ${t("editor.overlay.option.padding")};
}

.p-editor .p-editor-content {
    border-end-end-radius: ${t("editor.content.border.radius")};
    border-end-start-radius: ${t("editor.content.border.radius")};
}

.p-editor .p-editor-content.ql-snow {
    border: 1px solid ${t("editor.content.border.color")};
}

.p-editor .p-editor-content .ql-editor {
    background: ${t("editor.content.background")};
    color: ${t("editor.content.color")};
    border-end-end-radius: ${t("editor.content.border.radius")};
    border-end-start-radius: ${t("editor.content.border.radius")};
}

.p-editor .ql-snow.ql-toolbar button:hover,
.p-editor .ql-snow.ql-toolbar button:focus {
    color: ${t("editor.toolbar.item.hover.color")};
}

.p-editor .ql-snow.ql-toolbar button:hover .ql-stroke,
.p-editor .ql-snow.ql-toolbar button:focus .ql-stroke {
    stroke: ${t("editor.toolbar.item.hover.color")};
}

.p-editor .ql-snow.ql-toolbar button:hover .ql-fill,
.p-editor .ql-snow.ql-toolbar button:focus .ql-fill {
    fill: ${t("editor.toolbar.item.hover.color")};
}

.p-editor .ql-snow.ql-toolbar button.ql-active,
.p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active,
.p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected {
    color: ${t("editor.toolbar.item.active.color")};
}

.p-editor .ql-snow.ql-toolbar button.ql-active .ql-stroke,
.p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke {
    stroke: ${t("editor.toolbar.item.active.color")};
}

.p-editor .ql-snow.ql-toolbar button.ql-active .ql-fill,
.p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill {
    fill: ${t("editor.toolbar.item.active.color")};
}

.p-editor .ql-snow.ql-toolbar button.ql-active .ql-picker-label,
.p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-picker-label,
.p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-picker-label {
    color: ${t("editor.toolbar.item.active.color")};
}
`,Hm={root:"p-editor",toolbar:"p-editor-toolbar",content:"p-editor-content"},jr=(()=>{class t extends Y{name="editor";theme=Bm;classes=Hm;static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var Um={provide:Xt,useExisting:yt(()=>rn),multi:!0},rn=(()=>{class t extends Q{style;styleClass;placeholder;formats;modules;bounds;scrollingContainer;debug;get readonly(){return this._readonly}set readonly(e){this._readonly=e,this.quill&&(this._readonly?this.quill.disable():this.quill.enable())}onInit=new I;onTextChange=new I;onSelectionChange=new I;toolbar;value;delayedCommand=null;_readonly=!1;onModelChange=()=>{};onModelTouched=()=>{};quill;dynamicQuill;headerTemplate;templates;_headerTemplate;get isAttachedQuillEditorToDOM(){return this.quillElements?.editorElement?.isConnected}quillElements;_componentStyle=j(jr);constructor(){super(),Jn(()=>{this.initQuillElements(),this.initQuillEditor()})}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this.headerTemplate=e.template;break}})}writeValue(e){if(this.value=e,this.quill)if(e){let i=()=>{this.quill.setContents(this.quill.clipboard.convert(this.dynamicQuill.version.startsWith("2")?{html:this.value}:this.value))};this.isAttachedQuillEditorToDOM?i():this.delayedCommand=i}else{let i=()=>{this.quill.setText("")};this.isAttachedQuillEditorToDOM?i():this.delayedCommand=i}}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}getQuill(){return this.quill}initQuillEditor(){uo(this.platformId)||(this.dynamicQuill?this.createQuillEditor():import("./chunk-GBOB52RX.js").then(e=>{this.dynamicQuill=e.default,this.createQuillEditor()}).catch(e=>console.error(e.message)))}createQuillEditor(){this.initQuillElements();let{toolbarElement:e,editorElement:i}=this.quillElements,n={toolbar:e},r=this.modules?W(W({},n),this.modules):n;this.quill=new this.dynamicQuill(i,{modules:r,placeholder:this.placeholder,readOnly:this.readonly,theme:"snow",formats:this.formats,bounds:this.bounds,debug:this.debug,scrollingContainer:this.scrollingContainer});let l=this.dynamicQuill.version.startsWith("2");this.value&&this.quill.setContents(this.quill.clipboard.convert(l?{html:this.value}:this.value)),this.quill.on("text-change",(h,w,D)=>{if(D==="user"){let N=l?this.quill.getSemanticHTML():Ce(i,".ql-editor").innerHTML,_e=this.quill.getText().trim();N==="<p><br></p>"&&(N=null),this.onTextChange.emit({htmlValue:N,textValue:_e,delta:h,source:D}),this.onModelChange(N),this.onModelTouched()}}),this.quill.on("selection-change",(h,w,D)=>{this.onSelectionChange.emit({range:h,oldRange:w,source:D})}),this.onInit.emit({editor:this.quill})}initQuillElements(){this.quillElements||(this.quillElements={editorElement:Ce(this.el.nativeElement,"div.p-editor-content"),toolbarElement:Ce(this.el.nativeElement,"div.p-editor-toolbar")})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["p-editor"]],contentQueries:function(i,n,r){if(i&1&&(O(r,Wi,5),O(r,Dm,4),O(r,se,4)),i&2){let l;v(l=y())&&(n.toolbar=l.first),v(l=y())&&(n.headerTemplate=l.first),v(l=y())&&(n.templates=l)}},hostAttrs:[1,"p-editor"],inputs:{style:"style",styleClass:"styleClass",placeholder:"placeholder",formats:"formats",modules:"modules",bounds:"bounds",scrollingContainer:"scrollingContainer",debug:"debug",readonly:"readonly"},outputs:{onInit:"onInit",onTextChange:"onTextChange",onSelectionChange:"onSelectionChange"},features:[G([Um,jr]),E],ngContentSelectors:zm,decls:4,vars:6,consts:[[3,"ngClass"],["class","p-editor-toolbar",4,"ngIf"],[1,"p-editor-content",3,"ngStyle"],[1,"p-editor-toolbar"],[4,"ngTemplateOutlet"],[1,"ql-formats"],[1,"ql-header"],["value","1"],["value","2"],["selected",""],[1,"ql-font"],["value","serif"],["value","monospace"],["aria-label","Bold","type","button",1,"ql-bold"],["aria-label","Italic","type","button",1,"ql-italic"],["aria-label","Underline","type","button",1,"ql-underline"],[1,"ql-color"],[1,"ql-background"],["value","ordered","aria-label","Ordered List","type","button",1,"ql-list"],["value","bullet","aria-label","Unordered List","type","button",1,"ql-list"],[1,"ql-align"],["value","center"],["value","right"],["value","justify"],["aria-label","Insert Link","type","button",1,"ql-link"],["aria-label","Insert Image","type","button",1,"ql-image"],["aria-label","Insert Code Block","type","button",1,"ql-code-block"],["aria-label","Remove Styles","type","button",1,"ql-clean"]],template:function(i,n){i&1&&(he(Lm),p(0,"div",0),m(1,Rm,3,1,"div",1)(2,Am,40,0,"div",1),u(3,"div",2),d()),i&2&&(k(n.styleClass),a("ngClass","p-editor-container"),s(),a("ngIf",n.toolbar||n.headerTemplate||n._headerTemplate),s(),a("ngIf",!n.toolbar&&!n.headerTemplate&&!n._headerTemplate),s(),a("ngStyle",n.style))},dependencies:[U,ie,Z,ae,ke,V],encapsulation:2,changeDetection:0})}return t})(),Qr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=J({type:t});static \u0275inj=X({imports:[rn,V,V]})}return t})();var jm=["*"],Qm={root:"p-inputgroupaddon"},Wr=(()=>{class t extends Y{name="inputgroupaddon";classes=Qm;static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})(),Dn=(()=>{class t extends Q{style;styleClass;_componentStyle=j(Wr);get hostStyle(){return this.style}static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-inputgroup-addon"],["p-inputGroupAddon"]],hostVars:7,hostBindings:function(i,n){i&2&&(b("data-pc-name","inputgroupaddon"),oe(n.hostStyle),k(n.styleClass),ve("p-inputgroupaddon",!0))},inputs:{style:"style",styleClass:"styleClass"},features:[G([Wr]),E],ngContentSelectors:jm,decls:1,vars:0,template:function(i,n){i&1&&(he(),me(0))},dependencies:[U],encapsulation:2})}return t})(),Kr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=J({type:t});static \u0275inj=X({imports:[Dn,V,V]})}return t})();var Km=["*"],Gm=({dt:t})=>`
.p-inputgroup,
.p-inputgroup .p-floatlabel,
.p-inputgroup .p-iftalabel {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper {
    flex: 1 1 auto;
    width: 1%;
}

.p-inputgroupaddon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${t("inputgroup.addon.padding")};
    background: ${t("inputgroup.addon.background")};
    color: ${t("inputgroup.addon.color")};
    border-block-start: 1px solid ${t("inputgroup.addon.border.color")};
    border-block-end: 1px solid ${t("inputgroup.addon.border.color")};
    min-width: ${t("inputgroup.addon.min.width")};
}

.p-inputgroupaddon:first-child,
.p-inputgroupaddon + .p-inputgroupaddon {
    border-inline-start: 1px solid ${t("inputgroup.addon.border.color")};
}

.p-inputgroupaddon:last-child {
    border-inline-end: 1px solid ${t("inputgroup.addon.border.color")};
}

.p-inputgroupaddon:has(.p-button) {
    padding: 0;
    overflow: hidden;
}

.p-inputgroupaddon .p-button {
    border-radius: 0;
}

.p-inputgroup > .p-component,
.p-inputgroup > .p-inputwrapper > .p-component,
.p-inputgroup:first-child > p-button > .p-button,
.p-inputgroup > .p-floatlabel > .p-component,
.p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel > .p-component,
.p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
    border-radius: 0;
    margin: 0;
}

.p-inputgroupaddon:first-child,
.p-inputgroup > .p-component:first-child,
.p-inputgroup > .p-inputwrapper:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {
    border-start-start-radius: ${t("inputgroup.addon.border.radius")};
    border-end-start-radius: ${t("inputgroup.addon.border.radius")};
}

.p-inputgroupaddon:last-child,
.p-inputgroup > .p-component:last-child,
.p-inputgroup > .p-inputwrapper:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
    border-start-end-radius: ${t("inputgroup.addon.border.radius")};
    border-end-end-radius: ${t("inputgroup.addon.border.radius")};
}

.p-inputgroup .p-component:focus,
.p-inputgroup .p-component.p-focus,
.p-inputgroup .p-inputwrapper-focus,
.p-inputgroup .p-component:focus ~ label,
.p-inputgroup .p-component.p-focus ~ label,
.p-inputgroup .p-inputwrapper-focus ~ label {
    z-index: 1;
}

.p-inputgroup > .p-button:not(.p-button-icon-only) {
    width: auto;
}

/*For PrimeNG*/

.p-inputgroup p-button:first-child, .p-inputgroup p-button:last-child {
    display: inline-flex;
}

.p-inputgroup:has(> p-button:first-child) .p-button{
    border-start-start-radius: ${t("inputgroup.addon.border.radius")};
    border-end-start-radius: ${t("inputgroup.addon.border.radius")};
}

.p-inputgroup:has(> p-button:last-child) .p-button {
    border-start-end-radius: ${t("inputgroup.addon.border.radius")};
    border-end-end-radius: ${t("inputgroup.addon.border.radius")};
}
`,Zm={root:({props:t})=>["p-inputgroup",{"p-inputgroup-fluid":t.fluid}]},Gr=(()=>{class t extends Y{name="inputgroup";theme=Gm;classes=Zm;static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var Ln=(()=>{class t extends Q{style;styleClass;_componentStyle=j(Gr);static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-inputgroup"],["p-inputGroup"],["p-input-group"]],hostAttrs:[1,"p-inputgroup"],hostVars:5,hostBindings:function(i,n){i&2&&(b("data-pc-name","inputgroup"),oe(n.style),k(n.styleClass))},inputs:{style:"style",styleClass:"styleClass"},features:[G([Gr]),E],ngContentSelectors:Km,decls:1,vars:0,template:function(i,n){i&1&&(he(),me(0))},dependencies:[U,V],encapsulation:2})}return t})(),Zr=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=J({type:t});static \u0275inj=X({imports:[Ln,V,V]})}return t})();var Xm=["editor"],Jm=()=>({width:"50vw"}),eu=()=>({"1199px":"75vw","575px":"90vw"}),tu=()=>({required:"Content is required"}),iu=()=>({height:"320px","word-break":"break-all","overflow-wrap":"break-word"});function nu(t,o){if(t&1&&(p(0,"h3",16),C(1),d()),t&2){let e=c();s(),B(e.title)}}function ou(t,o){t&1&&(p(0,"span",17)(1,"select",18),u(2,"option",19)(3,"option",20)(4,"option",21)(5,"option",22),d(),u(6,"select",23)(7,"button",24)(8,"button",25)(9,"button",26)(10,"select",27)(11,"select",28)(12,"button",29)(13,"button",30)(14,"button",31),d())}var qt=class t{constructor(o,e,i,n){this._postFormHandler=o;this._fb=e;this._messageService=i;this._postService=n;this.postForm=this._postFormHandler.postForm(this._fb)}isOpen=!1;title="Create Post";postData;isOpenChange=new I;postCreated=new I;postUpdated=new I;editor;postForm;isGenerating=!1;editorModules={toolbar:[["bold","italic","underline"],[{list:"ordered"},{list:"bullet"}],[{header:[1,2,3,!1]}],["link"],[{align:[]}],["clean"]]};ngOnChanges(o){(o.isOpen||o.postData)&&this.isOpen&&(this.postForm=this._postFormHandler.postForm(this._fb,this.postData),this.title=this.postData?"Edit Post":"Create Post",this.postData?.content&&this.editor?.quill?.root&&(this.editor.quill.root.innerHTML=this.postData?.content||""))}onFileSelect(o){let e=o.files[0];this.postForm.get("file")?.setValue(e)}onEditorChange(o){let e=o.htmlValue,i=document.querySelector("#content .ql-editor");i&&(e=i.innerHTML);let n=this.editor.getQuill();if(n){let r=n.root.innerHTML;this.postForm.get("content")?.setValue(r),this.postForm.value}else console.warn("Quill instance not found!");(e==="<p></p>"||e==="")&&this.postForm.get("content")?.setErrors({required:!0})}onGenratePost(){let o=this.postForm.get("prompt")?.value;if(!o){this._messageService.add({severity:"warn",summary:"Warning",detail:"Please enter a prompt to generate post",life:3e3});return}this.isGenerating=!0,this.postForm.get("prompt")?.disable(),this._postService.generatePost(o).subscribe({next:e=>{this.editor&&this.editor.writeValue(e.post)},error:e=>{console.error("Error generating post:",e),this._messageService.add({severity:"error",summary:"Error",detail:"Failed to generate post. Please try again.",life:4e3})},complete:()=>{this.isGenerating=!1,this.postForm.get("prompt")?.enable()}})}onSubmit(){if(this.postForm.valid){let o=this.postForm.value,e=this.postForm.get("file")?.value,i=new FormData;Object.keys(o).forEach(r=>{r!=="file"&&i.append(r,o[r])}),e&&i.append("file",e),(this.postData?this._postService.updatePost(this.postData._id,i):this._postService.createPost(i)).subscribe({next:r=>{this._messageService.add({severity:"success",summary:this.postData?"Post Updated":"Post Created",detail:this.postData?"Your post has been updated successfully!":"Your post has been created successfully!",life:4e3}),this.postData?this.postUpdated.emit(r):this.postCreated.emit(r),this.closeDialog()},error:r=>{console.error("Error saving post:",r),this._messageService.add({severity:"error",summary:"Error",detail:"Failed to save post. Please try again.",life:4e3})}})}}closeDialog(){this.isOpen=!1,this.isOpenChange.emit(!1),this.postForm=this._postFormHandler.postForm(this._fb)}static \u0275fac=function(e){return new(e||t)(M(on),M(ni),M(et),M(nt))};static \u0275cmp=x({type:t,selectors:[["app-post-handler"]],viewQuery:function(e,i){if(e&1&&$(Xm,5),e&2){let n;v(n=y())&&(i.editor=n.first)}},inputs:{isOpen:"isOpen",title:"title",postData:"postData"},outputs:{isOpenChange:"isOpenChange",postCreated:"postCreated",postUpdated:"postUpdated"},standalone:!1,features:[Te],decls:20,vars:20,consts:[["editor",""],["header",""],[3,"visibleChange","onHide","visible","breakpoints","modal","draggable","resizable"],["pTemplate","header"],[3,"ngSubmit","formGroup"],[1,"grid","gap-4","max-w-full"],["label","Content",3,"control","errorMessages"],["id","content",3,"onTextChange"],[1,"mb-6"],["styleClass","pi pi-microchip-ai"],["type","text","pInputText","","formControlName","prompt","placeholder","Generate with AI....",1,"w-full"],["icon","pi pi-send","styleClass","h-full",1,"h-full",3,"onClick","disabled","loading"],["mode","basic","chooseLabel","Choose","chooseIcon","pi pi-upload","name","demo[]","accept","image/*","maxFileSize","1000000",3,"onSelect","multiple"],[1,"flex","justify-end","gap-2","mt-4"],["type","button","label","Cancel","severity","secondary",3,"onClick"],["type","submit","label","Post",3,"disabled"],[1,"text-xl","font-bold"],[1,"ql-formats"],[1,"ql-header"],["selected",""],["value","1"],["value","2"],["value","3"],[1,"ql-font"],["aria-label","Bold",1,"ql-bold"],["aria-label","Italic",1,"ql-italic"],["aria-label","Underline",1,"ql-underline"],[1,"ql-color"],[1,"ql-background"],["value","ordered","aria-label","Ordered List",1,"ql-list"],["value","bullet","aria-label","Bullet List",1,"ql-list"],["aria-label","Insert Link",1,"ql-link"]],template:function(e,i){if(e&1){let n=T();p(0,"p-dialog",2),Pe("visibleChange",function(l){return f(n),Fe(i.isOpen,l)||(i.isOpen=l),g(l)}),_("onHide",function(){return f(n),g(i.closeDialog())}),m(1,nu,2,1,"ng-template",3),p(2,"form",4),_("ngSubmit",function(){return f(n),g(i.onSubmit())}),p(3,"div",5)(4,"app-input-wrapper",6)(5,"p-editor",7,0),_("onTextChange",function(l){return f(n),g(i.onEditorChange(l))}),m(7,ou,15,0,"ng-template",null,1,A),d()()(),p(9,"div",8)(10,"p-inputgroup")(11,"p-inputgroup-addon"),u(12,"p-inputicon",9),d(),u(13,"input",10),p(14,"p-inputgroup-addon")(15,"p-button",11),_("onClick",function(){return f(n),g(i.onGenratePost())}),d()()()(),p(16,"p-fileupload",12),_("onSelect",function(l){return f(n),g(i.onFileSelect(l))}),d(),p(17,"div",13)(18,"p-button",14),_("onClick",function(){return f(n),g(i.closeDialog())}),d(),u(19,"p-button",15),d()()()}if(e&2){let n;oe(ce(16,Jm)),qe("visible",i.isOpen),a("breakpoints",ce(17,eu))("modal",!0)("draggable",!1)("resizable",!1),s(2),a("formGroup",i.postForm),s(2),a("control",i.postForm.get("content"))("errorMessages",ce(18,tu)),s(),oe(ce(19,iu)),s(10),a("disabled",!((n=i.postForm.get("prompt"))!=null&&n.value)||i.isGenerating)("loading",i.isGenerating),s(),a("multiple",!1),s(3),a("disabled",i.postForm.invalid)}},dependencies:[se,Ee,si,kt,ft,ei,Ao,Bo,St,Ge,Jt,ti,ii,rn,Ut,Ei,Dn,Ln],encapsulation:2})};var an=class t{constructor(o){this._httpService=o}COMMENT_ENDPOINT="/api/comment";COMMENTS_BY_POST_ENDPOINT="/api/comments/post";createComment(o){return this._httpService.post(this.COMMENT_ENDPOINT,W({},o))}getCommentsByPost(o,e=1,i=10){return this._httpService.get(`${this.COMMENTS_BY_POST_ENDPOINT}/${o}`,{page:e,limit:i})}getCommentById(o){return this._httpService.get(`${this.COMMENT_ENDPOINT}/${o}`)}updateComment(o,e){return this._httpService.put(`${this.COMMENT_ENDPOINT}/${o}`,{content:e})}deleteComment(o){return this._httpService.delete(`${this.COMMENT_ENDPOINT}/${o}`)}static \u0275fac=function(e){return new(e||t)(Je(Tt))};static \u0275prov=L({token:t,factory:t.\u0275fac,providedIn:"root"})};var sn=class t{commentForm(o,e){return console.log("\u{1F680} ~ PostFormHandler ~ commentForm ~ data:",e),o.group({_id:[{value:e?._id||"",disabled:!e?._id}],content:[e?.content||"",[at.required]],postId:[e?.postId||"",[at.required]],userId:[e?.user?._id||""]})}static \u0275fac=function(e){return new(e||t)};static \u0275prov=L({token:t,factory:t.\u0275fac,providedIn:"root"})};var di=class t{transform(o){if(!o)return"";let e=new Date(o),n=Math.floor((new Date().getTime()-e.getTime())/1e3);if(n<60)return"just now";let r=Math.floor(n/60);if(r<60)return`${r} ${r===1?"minute":"minutes"} ago`;let l=Math.floor(r/60);if(l<24)return`${l} ${l===1?"hour":"hours"} ago`;let h=Math.floor(l/24);if(h<7)return`${h} ${h===1?"day":"days"} ago`;let w=Math.floor(h/7);if(w<4)return`${w} ${w===1?"week":"weeks"} ago`;let D=Math.floor(h/30);if(D<12)return`${D} ${D===1?"month":"months"} ago`;let N=Math.floor(h/365);return`${N} ${N===1?"year":"years"} ago`}static \u0275fac=function(e){return new(e||t)};static \u0275pipe=ro({name:"timeAgo",type:t,pure:!0})};var su=()=>({width:"50vw"}),lu=()=>({"1199px":"75vw","575px":"90vw"}),cu=()=>({required:"Content is required"});function pu(t,o){t&1&&(p(0,"h3",7),C(1,"Comments"),d())}function du(t,o){if(t&1){let e=T();p(0,"button",15),_("click",function(){f(e);let n=c(2);return g(n.cancelEdit())}),d()}}function mu(t,o){if(t&1){let e=T();p(0,"div",8)(1,"form",9),_("ngSubmit",function(){f(e);let n=c();return g(n.isEditing?n.saveEdit():n.addComment())}),p(2,"div",10)(3,"app-input-wrapper",11),u(4,"input",12),d(),u(5,"p-button",13),m(6,du,1,0,"button",14),d()()()}if(t&2){let e=c();s(),a("formGroup",e.commentForm),s(2),a("control",e.commentForm.get("content"))("errorMessages",ce(7,cu)),s(),a("placeholder",e.isEditing?"Edit your comment...":"Write a comment..."),s(),a("disabled",e.commentForm.invalid)("icon",e.isEditing?"pi pi-save":"pi pi-send"),s(),a("ngIf",e.isEditing)}}function uu(t,o){if(t&1&&u(0,"p-avatar",21),t&2){let e=c().$implicit;a("image",e.user.avatar)}}function hu(t,o){t&1&&u(0,"p-avatar",22)}function fu(t,o){if(t&1){let e=T();p(0,"div",28)(1,"button",29),_("click",function(){f(e);let n=c().$implicit,r=c(2);return g(r.startEdit(n))}),d(),p(2,"button",30),_("click",function(n){f(e);let r=c().$implicit,l=c(2);return g(l.deleteComment(n,r))}),d()()}}function gu(t,o){if(t&1&&(p(0,"div",18)(1,"div",19)(2,"div",20),m(3,uu,1,1,"p-avatar",21)(4,hu,1,0,"p-avatar",22),p(5,"span",23),C(6),d()(),p(7,"span",24),C(8),$i(9,"timeAgo"),d()(),p(10,"div",25)(11,"p",26),C(12),d(),m(13,fu,3,0,"div",27),d()()),t&2){let e=o.$implicit,i=c(2);s(3),te(e.user.avatar?3:4),s(3),B(e.user.name),s(2),ye(" ",Ri(9,5,e.updatedAt)," "),s(4),B(e.content),s(),a("ngIf",i.canEditComment(e))}}function _u(t,o){if(t&1&&(p(0,"div",16),m(1,gu,14,7,"div",17),d()),t&2){let e=c();s(),a("ngForOf",e.comments)}}var mi=class t{constructor(o,e,i,n,r,l,h){this._commentService=o;this._messageService=e;this._confirmationService=i;this._authFacade=n;this._formBuilder=r;this._formHandler=l;this._cdr=h;this.commentForm=this._formHandler.commentForm(this._formBuilder)}visible=!1;visibleChange=new I;commentCountHandler=new I;postId="";postOwnerId="";infiniteScroll;comments=[];commentForm;currentUserId;isAdmin=!1;isEditing=!1;ngOnInit(){this._authFacade.authUser$.pipe(Qt(o=>(o?(this.currentUserId=o._id,this.isAdmin=o.roles.includes(ge.admin.enum)):(this.currentUserId=void 0,this.isAdmin=!1),o)),Vt(()=>this._cdr.detectChanges())).subscribe(),this.commentForm.valueChanges.pipe(Cn(()=>{this.commentForm.invalid&&console.log("Form Errors:",this.getFormErrors())}),Vt(()=>this._cdr.detectChanges())).subscribe()}ngOnChanges(o){(o.postId||o.postOwnerId)&&(this.commentForm=this._formHandler.commentForm(this._formBuilder,{postId:this.postId}),this.comments=[],this.isEditing=!1,this.commentForm.valueChanges.pipe(Cn(()=>{this.commentForm.invalid&&(console.log("Form Errors:",this.getFormErrors()),console.log("Form Value:",this.commentForm.value))})).subscribe(),this.visible&&this.postId&&this.loadMoreComments(1))}getFormErrors(){let o={};return Object.keys(this.commentForm.controls).forEach(e=>{let i=this.commentForm.get(e);i?.errors&&(o[e]=i.errors)}),o}loadMoreComments=o=>Ie(this,null,function*(){return!this.postId||!this._commentService?(console.error("PostId or CommentService is not available"),{items:[],hasMore:!1}):new Promise((e,i)=>{this._commentService.getCommentsByPost(this.postId,o).pipe(Qt(n=>(o===1?this.comments=n.items:this.comments=[...this.comments,...n.items],{items:n.items,hasMore:n.pagination.hasMore})),gi(n=>(console.error("Error loading comments:",n),i(n),fi({items:[],hasMore:!1}))),Vt(()=>this._cdr.detectChanges())).subscribe(e)})});addComment(){if(this.commentForm.invalid){console.log("Cannot add comment - Form is invalid:",this.getFormErrors());return}if(!this.postId||!this.currentUserId){console.log("Cannot add comment - Missing required data:",{postId:this.postId,currentUserId:this.currentUserId});return}let o={postId:this.postId,content:this.commentForm.get("content")?.value.trim()};console.log("Adding comment with data:",o),this._commentService.createComment(o).pipe(Qt(e=>(console.log("Comment added successfully:",e),this.comments.unshift(e),this.commentForm=this._formHandler.commentForm(this._formBuilder,{postId:this.postId}),this._messageService.add({severity:"success",summary:"Success",detail:"Comment added successfully",life:3e3}),this.commentCountHandler.emit(1),e)),gi(e=>(console.error("Error adding comment:",e),this._messageService.add({severity:"error",summary:"Error",detail:"Failed to add comment",life:4e3}),fi(null))),Vt(()=>this._cdr.detectChanges())).subscribe()}startEdit(o){this.isEditing=!0,this.commentForm=this._formHandler.commentForm(this._formBuilder,o)}saveEdit(){if(this.commentForm.invalid){console.log("Cannot save edit - Form is invalid:",this.getFormErrors());return}let o=this.commentForm.get("_id")?.value,e=this.commentForm.get("content")?.value.trim();console.log("Saving comment edit:",{commentId:o,content:e}),this._commentService.updateComment(o,e).pipe(Qt(i=>{console.log("Comment updated successfully:",i);let n=this.comments.findIndex(r=>r._id===i._id);return n!==-1&&(this.comments[n]=i),this.cancelEdit(),this._messageService.add({severity:"success",summary:"Success",detail:"Comment updated successfully",life:3e3}),i}),gi(i=>(console.error("Error updating comment:",i),this._messageService.add({severity:"error",summary:"Error",detail:"Failed to update comment",life:4e3}),fi(null))),Vt(()=>this._cdr.detectChanges())).subscribe()}cancelEdit(){this.isEditing=!1,this.commentForm=this._formHandler.commentForm(this._formBuilder,{postId:this.postId})}deleteComment(o,e){this._confirmationService.confirm({target:o.target,message:"Are you sure you want to delete this comment?",header:"Delete Confirmation",icon:"pi pi-exclamation-triangle",acceptButtonStyleClass:"p-button-danger",acceptIcon:"pi pi-trash",rejectButtonStyleClass:"p-button-text",accept:()=>{this._commentService.deleteComment(e._id).pipe(Qt(()=>{this.comments=this.comments.filter(i=>i._id!==e._id),this._messageService.add({severity:"success",summary:"Success",detail:"Comment deleted successfully",life:3e3}),this.commentCountHandler.emit(-1)}),gi(i=>(console.error("Error deleting comment:",i),this._messageService.add({severity:"error",summary:"Error",detail:"Failed to delete comment",life:4e3}),fi(null))),Vt(()=>this._cdr.detectChanges())).subscribe()}})}canEditComment(o){return!!(this.currentUserId&&(this.currentUserId===o.user._id||this.currentUserId===this.postOwnerId||this.isAdmin))}canDeleteComment(o){return this.canEditComment(o)}onCommentSelected(o){}closeDialog(){this.visible=!1,this.commentForm=this._formHandler.commentForm(this._formBuilder,{postId:this.postId}),this.comments=[],this.infiniteScroll.reset()}static \u0275fac=function(e){return new(e||t)(M(an),M(et),M(Zt),M(Le),M(ni),M(sn),M(po))};static \u0275cmp=x({type:t,selectors:[["app-comments"]],viewQuery:function(e,i){if(e&1&&$(ze,5),e&2){let n;v(n=y())&&(i.infiniteScroll=n.first)}},inputs:{visible:"visible",postId:"postId",postOwnerId:"postOwnerId"},outputs:{visibleChange:"visibleChange",commentCountHandler:"commentCountHandler"},standalone:!1,features:[Te],decls:8,vars:12,consts:[["commentTemplate",""],[3,"visibleChange","onShow","onHide","visible","breakpoints","modal","draggable","resizable"],["pTemplate","header"],[1,"comments-container"],[1,"comments-list"],[3,"itemSelected","loadMoreData","itemTemplate","identifier"],["pTemplate","footer"],[1,"text-xl","font-semibold"],[1,"w-full"],[3,"ngSubmit","formGroup"],[1,"flex","items-center","gap-3"],["containerClass","!m-0",1,"flex-1",3,"control","errorMessages"],["pInputText","","formControlName","content",1,"w-full",3,"placeholder"],["type","submit",3,"disabled","icon"],["pButton","","type","button","icon","pi pi-times","class","p-button-secondary",3,"click",4,"ngIf"],["pButton","","type","button","icon","pi pi-times",1,"p-button-secondary",3,"click"],[1,"flex","flex-col","gap-3"],["class","p-2 shadow-md group rounded-md border border-gray-200 last:border-b-0",4,"ngFor","ngForOf"],[1,"p-2","shadow-md","group","rounded-md","border","border-gray-200","last:border-b-0"],[1,"flex","justify-between","items-center","mb-2","border-b","pb-2"],[1,"flex","gap-2","items-center"],["shape","circle","size","normal","styleClass","object-cover",3,"image"],["icon","pi pi-user","shape","circle","size","normal","styleClass","bg-gray-200 text-gray-600"],[1,"font-semibold","text-gray-900"],[1,"text-sm","text-gray-500"],[1,"mb-2","relative"],[1,"text-gray-800","whitespace-pre-wrap"],["class","absolute hidden group-hover:flex justify-end gap-2 top-0 right-0",4,"ngIf"],[1,"absolute","hidden","group-hover:flex","justify-end","gap-2","top-0","right-0"],["pButton","","type","button","icon","pi pi-pencil",1,"p-button-text","p-button-rounded",3,"click"],["pButton","","type","button","icon","pi pi-trash",1,"p-button-text","p-button-rounded","p-button-danger",3,"click"]],template:function(e,i){if(e&1){let n=T();p(0,"p-dialog",1),Pe("visibleChange",function(l){return f(n),Fe(i.visible,l)||(i.visible=l),g(l)}),_("onShow",function(){return f(n),g(i.loadMoreComments(1))})("onHide",function(){return f(n),g(i.closeDialog())}),m(1,pu,2,0,"ng-template",2),p(2,"div",3)(3,"div",4)(4,"app-infinite-scroll",5),_("itemSelected",function(l){return f(n),g(i.onCommentSelected(l))}),d()()(),m(5,mu,7,8,"ng-template",6),d(),m(6,_u,2,1,"ng-template",null,0,A)}if(e&2){let n=K(7);oe(ce(10,su)),qe("visible",i.visible),a("breakpoints",ce(11,lu))("modal",!0)("draggable",!1)("resizable",!1),s(4),a("loadMoreData",i.loadMoreComments)("itemTemplate",n)("identifier","load-more-trigger-comment")}},dependencies:[Ve,Z,Ze,se,tt,Ee,si,kt,ft,ei,St,Ge,Jt,ti,ii,ze,di],encapsulation:2})};var vu=["contentContainer"];function yu(t,o){t&1&&(p(0,"div",5)(1,"div",6),u(2,"p-skeleton",7)(3,"p-skeleton",8)(4,"p-skeleton",8)(5,"p-skeleton",9),d(),p(6,"div",10)(7,"div",11),u(8,"p-skeleton",12)(9,"p-skeleton",9),d(),u(10,"p-skeleton",9),d()())}function Cu(t,o){t&1&&u(0,"div",23)}function xu(t,o){if(t&1){let e=T();p(0,"button",27),_("click",function(){f(e);let n=c(3);return g(n.onEdit())}),d()}if(t&2){let e=c(3);a("disabled",e.isLoading)}}function wu(t,o){if(t&1){let e=T();p(0,"button",28),_("click",function(n){f(e);let r=c(3);return g(r.onDelete(n))}),d()}if(t&2){let e=c(3);a("disabled",e.isLoading)}}function Iu(t,o){if(t&1&&(p(0,"div",24),m(1,xu,1,1,"button",25)(2,wu,1,1,"button",26),d()),t&2){let e=c(2);s(),a("ngIf",e.canEditPost),s(),a("ngIf",e.canEditPost)}}function Tu(t,o){if(t&1){let e=T();p(0,"button",29),_("click",function(){f(e);let n=c(2);return g(n.toggleExpand())}),C(1),d()}if(t&2){let e=c(2);s(),ye(" ",e.isExpanded?"Show less":"Show more"," ")}}function Su(t,o){if(t&1){let e=T();p(0,"div",5)(1,"div",13)(2,"div",14,0),u(4,"div",15),d(),m(5,Cu,1,0,"div",16)(6,Iu,3,2,"div",17),d(),m(7,Tu,2,1,"button",18),p(8,"div",19)(9,"div",11)(10,"button",20),_("click",function(){f(e);let n=c();return g(n.toggleLike())}),d(),p(11,"span",21),C(12),d(),p(13,"p-button",22),_("click",function(){f(e);let n=c();return g(n.toggleComments())}),d(),p(14,"span",21),C(15),d()()()()}if(t&2){let e=c();s(2),k(e.isExpanded?"max-h-none":"max-h-[100px] overflow-hidden"),s(2),a("innerHTML",e.postContent,ot),s(),a("ngIf",!e.isExpanded&&e.hasOverflow),s(),a("ngIf",e.showActions),s(),a("ngIf",e.hasOverflow),s(3),ve("text-primary",e.isLiked)("text-gray-400",!e.isLiked),a("icon",e.isLiked?"pi pi-heart-fill":"pi pi-heart")("disabled",e.isLoading),s(2),xt(" ",e.likesCount," ",e.likesCount===1?"like":"likes"," "),s(),a("disabled",e.isLoading)("outlined",!0),s(2),xt(" ",e.postData.commentsCount," ",e.postData.commentsCount<=1?"comment":"comments"," ")}}var ln=class t{constructor(o,e,i,n,r,l){this._postService=o;this._messageService=e;this._authFacade=i;this._confirmationService=n;this._sanitizer=r;this._commonService=l}postId;postData;showActions=!0;postUpdated=new I;postDeleted=new I;contentContainer;isLoading=!1;isLikeLoading=!1;isAuthor=!1;isAdmin=!1;currentUserId;isEditDialogOpen=!1;isExpanded=!1;hasOverflow=!1;isCommentsDialogOpen=!1;commentsCount=0;ngOnInit(){this.postId&&!this.postData?this.loadPost():this.postData&&this.checkUserPermissions(),this._authFacade.authUser$.subscribe(o=>{o?(this.currentUserId=o._id,this.isAdmin=o.roles.includes(ge.admin.enum),this.postData&&(this.isAuthor=o._id===this.postData.user._id)):(this.currentUserId=void 0,this.isAdmin=!1,this.isAuthor=!1)})}ngOnChanges(o){o.postData&&o.postData.currentValue&&(this.checkUserPermissions(),this.checkContentOverflow())}checkUserPermissions(){this.postData&&this._authFacade.authUser$.subscribe(o=>{o?(this.isAuthor=o._id===this.postData?.user._id,this.isAdmin=o.roles.includes(ge.admin.enum)):(this.isAuthor=!1,this.isAdmin=!1)})}checkContentOverflow(){}handleCommentCount(o){this.postData&&(this.postData.commentsCount+=o)}loadPost(){this.isLoading=!0,this._postService.getPostById(this.postId).subscribe({next:o=>{this.postData=o,this.checkUserPermissions(),this.checkContentOverflow(),this.isLoading=!1},error:o=>{console.error("Error loading post:",o),this._messageService.add({severity:"error",summary:"Error",detail:"Failed to load post",life:4e3}),this.isLoading=!1}})}get isLiked(){return!!(this.currentUserId&&this.postData?.likes?.includes(this.currentUserId))}get likesCount(){return this.postData?.likes?.length??0}toggleExpand(){this.isExpanded=!this.isExpanded}toggleLike(){if(!this.currentUserId||!this.postData||this.isLikeLoading)return;this.isLikeLoading=!0;let o=[...this.postData.likes||[]];this.isLiked?this.postData.likes=(this.postData.likes||[]).filter(e=>e!==this.currentUserId):this.postData.likes=[...this.postData.likes||[],this.currentUserId],this._postService.toggleLike(this.postData._id).subscribe({next:e=>{this.postData=e,this.checkContentOverflow()},error:e=>{this.postData&&(this.postData.likes=o),console.error("Error toggling like:",e),this._messageService.add({severity:"error",summary:"Error",detail:"Failed to update like status",life:4e3}),this.isLoading=!1},complete:()=>{this.isLikeLoading=!1}})}onEdit(){this.postData&&(this.isEditDialogOpen=!0)}onPostUpdated(o){this.postData=o,this.postUpdated.emit(o),this.isEditDialogOpen=!1,this.checkContentOverflow()}closeEditDialog(){this.isEditDialogOpen=!1}get canEditPost(){return this.isAuthor||this.isAdmin}onDelete(o){this.postData&&this._confirmationService.confirm({target:o.target,message:"Are you sure you want to delete this post?",header:"Delete Confirmation",icon:"pi pi-exclamation-triangle",acceptButtonStyleClass:"p-button-danger",acceptIcon:"pi pi-trash",rejectButtonStyleClass:"p-button-text",accept:()=>{this._postService.deletePost(this.postData._id).subscribe({next:()=>{this._messageService.add({severity:"success",summary:"Success",detail:"Post deleted successfully",life:4e3}),this.postDeleted.emit(this.postData._id)},error:e=>{console.error("Error deleting post:",e),this._messageService.add({severity:"error",summary:"Error",detail:"Failed to delete post",life:4e3})}})},reject:()=>{this._messageService.add({severity:"info",summary:"Cancelled",detail:"Post deletion cancelled",life:3e3})}})}toggleComments(){this.isCommentsDialogOpen=!this.isCommentsDialogOpen}visibleChange(o){this.isCommentsDialogOpen=o}get postContent(){return this._sanitizer.bypassSecurityTrustHtml(this.postData?.content||"")}static \u0275fac=function(e){return new(e||t)(M(nt),M(et),M(Le),M(Zt),M(Kt),M(gt))};static \u0275cmp=x({type:t,selectors:[["app-post-card"]],viewQuery:function(e,i){if(e&1&&$(vu,5),e&2){let n;v(n=y())&&(i.contentContainer=n.first)}},inputs:{postId:"postId",postData:"postData",showActions:"showActions"},outputs:{postUpdated:"postUpdated",postDeleted:"postDeleted"},standalone:!1,features:[Te],decls:5,vars:7,consts:[["contentContainer",""],[1,"bg-white","rounded-lg","shadow-md","p-4"],["class","flex flex-col gap-3",4,"ngIf"],[3,"isOpenChange","postUpdated","isOpen","postData"],[3,"visibleChange","commentCountHandler","visible","postId","postOwnerId"],[1,"flex","flex-col","gap-3"],[1,"flex","flex-col","gap-2"],["height","2rem",1,"mb-2"],["height","1rem",1,"mb-2"],["height","1rem"],[1,"flex","justify-between","items-center"],[1,"flex","items-center","gap-2"],["shape","circle","size","2rem"],[1,"relative","group"],[1,"prose","max-w-none","transition-all","duration-300","ease-in-out","min-h-[100px]"],[1,"ql-editor",3,"innerHTML"],["class","absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none",4,"ngIf"],["class","md:hidden absolute flex top-0 right-0 group-hover:flex items-center gap-2",4,"ngIf"],["class","text-primary-600 hover:text-primary-700 text-sm font-medium hover:underline transition-colors",3,"click",4,"ngIf"],[1,"flex","justify-between","items-center","pt-2","border-t","border-gray-100"],["pButton","","pRipple","","type","button",1,"p-button-text","p-button-rounded","hover:bg-gray-100","transition-colors",3,"click","icon","disabled"],[1,"text-sm","text-gray-500"],["type","button","icon","pi pi-comments","styleClass","border-0 rounded-full",3,"click","disabled","outlined"],[1,"absolute","bottom-0","left-0","right-0","h-16","bg-gradient-to-t","from-white","to-transparent","pointer-events-none"],[1,"md:hidden","absolute","flex","top-0","right-0","group-hover:flex","items-center","gap-2"],["pButton","","type","button","icon","pi pi-pencil","class","p-button-text p-button-rounded bg-gray-100 hover:bg-primary-100 transition-colors","pTooltip","Edit Post",3,"disabled","click",4,"ngIf"],["pButton","","type","button","icon","pi pi-trash","class","p-button-text p-button-rounded bg-gray-100 hover:bg-primary-100 transition-colors text-red-500","pTooltip","Delete Post",3,"disabled","click",4,"ngIf"],["pButton","","type","button","icon","pi pi-pencil","pTooltip","Edit Post",1,"p-button-text","p-button-rounded","bg-gray-100","hover:bg-primary-100","transition-colors",3,"click","disabled"],["pButton","","type","button","icon","pi pi-trash","pTooltip","Delete Post",1,"p-button-text","p-button-rounded","bg-gray-100","hover:bg-primary-100","transition-colors","text-red-500",3,"click","disabled"],[1,"text-primary-600","hover:text-primary-700","text-sm","font-medium","hover:underline","transition-colors",3,"click"]],template:function(e,i){e&1&&(p(0,"div",1),m(1,yu,11,0,"div",2)(2,Su,16,18,"div",2),d(),p(3,"app-post-handler",3),Pe("isOpenChange",function(r){return Fe(i.isEditDialogOpen,r)||(i.isEditDialogOpen=r),r}),_("postUpdated",function(r){return i.onPostUpdated(r)})("isOpenChange",function(){return i.closeEditDialog()}),d(),p(4,"app-comments",4),Pe("visibleChange",function(r){return Fe(i.isCommentsDialogOpen,r)||(i.isCommentsDialogOpen=r),r}),_("visibleChange",function(r){return i.visibleChange(r)})("commentCountHandler",function(r){return i.handleCommentCount(r)}),d()),e&2&&(s(),a("ngIf",i.isLoading),s(),a("ngIf",!i.isLoading&&i.postData),s(),qe("isOpen",i.isEditDialogOpen),a("postData",i.postData),s(),qe("visible",i.isCommentsDialogOpen),a("postId",(i.postData==null?null:i.postData._id)||"")("postOwnerId",(i.postData==null||i.postData.user==null?null:i.postData.user._id)||""))},dependencies:[Z,tt,Ee,lt,oi,qt,mi],styles:['.post-content[_ngcontent-%COMP%]{max-height:200px;overflow:hidden;position:relative}.post-content.expanded[_ngcontent-%COMP%]{max-height:none}.post-content.expanded[_ngcontent-%COMP%]:after{display:none}.post-content[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;left:0;right:0;height:40px;background:linear-gradient(transparent,#fff);pointer-events:none}.expand-button[_ngcontent-%COMP%]{color:var(--primary-color);cursor:pointer;font-size:.875rem;font-weight:500;margin-top:.5rem}.expand-button[_ngcontent-%COMP%]:hover{text-decoration:underline}.prose[_ngcontent-%COMP%]{overflow-wrap:break-word;word-wrap:break-word;hyphens:auto}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:.75rem}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}']})};function Ou(t,o){t&1&&R(0)}function Mu(t,o){if(t&1&&(p(0,"div",7)(1,"div",8)(2,"div",9)(3,"div",10)(4,"div",11),u(5,"p-skeleton",12),d()(),p(6,"div",13)(7,"div",14)(8,"div",15),u(9,"p-skeleton",16)(10,"p-skeleton",17)(11,"p-skeleton",17)(12,"p-skeleton",17)(13,"p-skeleton",17)(14,"p-skeleton",18),d()()()()(),p(15,"div",19)(16,"div",20)(17,"span",21),C(18,"Posts"),d()(),m(19,Ou,1,0,"ng-container",22),d()()),t&2){c();let e=K(4);s(19),a("ngTemplateOutlet",e)}}function Eu(t,o){if(t&1&&u(0,"p-avatar",25),t&2){let e=c(2);a("image",e.user.avatar)}}function qu(t,o){t&1&&u(0,"p-avatar",26)}function Fu(t,o){if(t&1){let e=T();p(0,"p-button",38),_("click",function(){f(e);let n=c(2);return g(n.openUpdateDialog())}),d()}}function Pu(t,o){if(t&1&&u(0,"p-chip",42),t&2){let e=o.$implicit;a("label",e)}}function Vu(t,o){if(t&1&&(p(0,"div",39)(1,"div",40),C(2," Skills: "),m(3,Pu,1,1,"p-chip",41),d()()),t&2){let e=c(2);s(3),a("ngForOf",e.skills)}}function Du(t,o){if(t&1&&(p(0,"a",43)(1,"p-chip",44)(2,"span",45),u(3,"i",46),d(),p(4,"span",47),C(5," Github "),d()()()),t&2){let e=c(2);a("href",e.user.social.github,$e)}}function Lu(t,o){if(t&1&&(p(0,"a",43)(1,"p-chip",44)(2,"span",48),u(3,"i",49),d(),p(4,"span",47),C(5," Linkedin "),d()()()),t&2){let e=c(2);a("href",e.user.social.linkedin,$e)}}function zu(t,o){if(t&1&&(p(0,"a",43)(1,"p-chip",44)(2,"span",48),u(3,"i",50),d(),p(4,"span",47),C(5," Twitter "),d()()()),t&2){let e=c(2);a("href",e.user.social.twitter,$e)}}function $u(t,o){if(t&1&&(p(0,"a",43)(1,"p-chip",44)(2,"span",45),u(3,"i",51),d(),p(4,"span",47),C(5," Website "),d()()()),t&2){let e=c(2);a("href",e.user.social.website,$e)}}function Ru(t,o){if(t&1){let e=T();p(0,"div",52),C(1," Roles: "),p(2,"p-multiselect",53),Pe("ngModelChange",function(n){f(e);let r=c(2);return Fe(r.selectedRoles,n)||(r.selectedRoles=n),g(n)}),_("onPanelHide",function(n){f(e);let r=c(2);return g(r.onRolesChange(n))})("onChange",function(){f(e);let n=c(2);return g(n.sortRoles())}),d()()}if(t&2){let e=c(2);s(2),a("options",e.roles),qe("ngModel",e.selectedRoles),a("maxSelectedLabels",3)("emptyMessage","Atleast one role should be assigned")("loading",e.updatingRoles)("disabled",e.updatingRoles)}}function Au(t,o){if(t&1){let e=T();p(0,"p-button",54),_("click",function(){f(e);let n=c(2);return g(n.openUpdateDialog())}),d()}}function Bu(t,o){if(t&1){let e=T();p(0,"div",55)(1,"button",56),_("click",function(){f(e);let n=c(2);return g(n.openPostDialog())}),d()()}}function Hu(t,o){if(t&1){let e=T();p(0,"app-post-card",59),_("postUpdated",function(n){f(e);let r=c(3);return g(r.onPostUpdated(n))})("postDeleted",function(n){f(e);let r=c(3);return g(r.onPostDeleted(n))}),d()}if(t&2){let e=o.$implicit;a("postData",e)}}function Uu(t,o){if(t&1&&(p(0,"div",57),m(1,Hu,1,1,"app-post-card",58),d()),t&2){let e=c(2);s(),a("ngForOf",e.posts)}}function Nu(t,o){if(t&1){let e=T();p(0,"div",23)(1,"div",24)(2,"div",9)(3,"div",10)(4,"div",11),m(5,Eu,1,1,"p-avatar",25)(6,qu,1,0,"p-avatar",26),d(),m(7,Fu,1,0,"p-button",27),d(),p(8,"div",13)(9,"div",14)(10,"div")(11,"div")(12,"h1",28),C(13),d()(),p(14,"p",29),C(15),d()()(),m(16,Vu,4,1,"div",30),p(17,"div",31),m(18,Du,6,1,"a",32)(19,Lu,6,1,"a",32)(20,zu,6,1,"a",32)(21,$u,6,1,"a",32),d(),m(22,Ru,3,6,"div",33),d()(),m(23,Au,1,0,"p-button",34),d(),p(24,"div",35)(25,"div",20)(26,"span",21),C(27,"Posts"),d(),m(28,Bu,2,0,"div",36),d(),p(29,"app-infinite-scroll",37),_("itemSelected",function(n){f(e);let r=c();return g(r.onPostSelected(n))}),m(30,Uu,2,1,"ng-template",null,1,A),d()()()}if(t&2){let e=K(31),i=c(),n=K(4);s(5),te(i.user.avatar?5:6),s(2),a("ngIf",i.canEditProfile),s(6),ye(" ",i.user.name," "),s(2),B(i.user.bio||"No bio"),s(),a("ngIf",i.skills.length),s(2),a("ngIf",i.user.social.github),s(),a("ngIf",i.user.social.linkedin),s(),a("ngIf",i.user.social.twitter),s(),a("ngIf",i.user.social.website),s(),a("ngIf",!i.isOwnProfile&&i.isAdmin),s(),a("ngIf",i.canEditProfile),s(5),a("ngIf",i.canCreatePost),s(),a("loadMoreData",i.loadMorePosts)("itemTemplate",e)("loadingTemplate",n)}}function ju(t,o){t&1&&(p(0,"div",57)(1,"div",60)(2,"div",61)(3,"div",62)(4,"div",63),u(5,"p-skeleton",64)(6,"p-skeleton",17)(7,"p-skeleton",17)(8,"p-skeleton",18),d()(),p(9,"div",65)(10,"div",66),u(11,"p-button",67)(12,"p-skeleton",68),d(),p(13,"div",66),u(14,"p-button",67)(15,"p-skeleton",68),d()()()(),p(16,"div",60)(17,"div",61)(18,"div",62)(19,"div",63),u(20,"p-skeleton",64)(21,"p-skeleton",17)(22,"p-skeleton",17)(23,"p-skeleton",18),d()(),p(24,"div",65)(25,"div",66),u(26,"p-button",67)(27,"p-skeleton",68),d(),p(28,"div",66),u(29,"p-button",67)(30,"p-skeleton",68),d()()()(),p(31,"div",60)(32,"div",61)(33,"div",62)(34,"div",63),u(35,"p-skeleton",64)(36,"p-skeleton",17)(37,"p-skeleton",17)(38,"p-skeleton",18),d()(),p(39,"div",65)(40,"div",66),u(41,"p-button",67)(42,"p-skeleton",68),d(),p(43,"div",66),u(44,"p-button",67)(45,"p-skeleton",68),d()()()()()),t&2&&(s(11),a("outlined",!0)("loading",!0),s(3),a("outlined",!0)("loading",!0),s(12),a("outlined",!0)("loading",!0),s(3),a("outlined",!0)("loading",!0),s(12),a("outlined",!0)("loading",!0),s(3),a("outlined",!0)("loading",!0))}var qi=class t{constructor(o,e,i,n,r,l,h,w){this._authFacade=o;this._store=e;this._postService=i;this._profileService=n;this._route=r;this._commonService=l;this._messageService=h;this._authService=w}user={_id:"",name:"",bio:"",skills:"",avatar:"",social:{github:"",linkedin:"",twitter:"",website:""},roles:[],createdAt:"",updatedAt:""};isUpdateDialogOpen=!1;isPostDialogOpen=!1;currentPage=1;posts=[];roles=Object.values(ge);selectedRoles=[];isOwnProfile=!1;isLoading=!0;isAdmin=!1;authSubscription=null;infiniteScroll;loading=!1;updatingRoles=!1;ngOnInit(){this.loading=!0,this._route.params.subscribe(o=>{let e=o.id;this.isAdmin=this._commonService.isAdmin,e?this.loadUserProfile(e):this.loadOwnProfile()})}loadUserProfile(o){this.isLoading=!0,this._profileService.getUserById(o).subscribe({next:e=>{this.user=e,this.selectedRoles=e.roles,this.checkIfOwnProfile(),this.isLoading=!1},error:e=>{console.error("Error loading user profile:",e),this.isLoading=!1}})}loadOwnProfile(){this.authSubscription=this._authFacade.authUser$.subscribe(o=>{o&&(this.user=o,this.selectedRoles=o.roles,this.isOwnProfile=!0,this.isLoading=!1)})}checkIfOwnProfile(){this._authFacade.authUser$.subscribe(o=>{this.isOwnProfile=o?._id===this.user._id})}ngOnDestroy(){this.authSubscription&&this.authSubscription.unsubscribe()}loadMorePosts=o=>Ie(this,null,function*(){if(!this._postService)return console.error("PostService is not available"),{items:[],hasMore:!1};let e=this.posts;return this.posts=[],new Promise((i,n)=>{this._postService.getUserPosts(o,10,this.user._id).subscribe({next:r=>{o===1?this.posts=r.items:this.posts=[...e,...r.items],i({items:r.items,hasMore:r.pagination.hasMore})},error:r=>{console.error("Error loading posts:",r),this.posts=e,n(r)}})})});onPostCreated(o){this.currentPage=1,this.infiniteScroll.reset(),this.closePostDialog(null)}onPostUpdated(o){let e=this.posts.findIndex(i=>i._id===o._id);e!==-1?this.posts[e]=o:(this.currentPage=1,this.infiniteScroll.reset()),this.closePostDialog(null)}onPostDeleted(o){let e=[...this.posts].filter(i=>i._id!==o);this.posts=e,this.posts.length===0&&this.currentPage>1&&(this.currentPage=1,this.infiniteScroll.reset())}onPostSelected(o){}openUpdateDialog(){this.isUpdateDialogOpen=!0}closeUpdateDialog(o){this.isUpdateDialogOpen=!1}openPostDialog(){this.isPostDialogOpen=!0}closePostDialog(o){this.isPostDialogOpen=!1}onError(o){console.log(o)}get skills(){return this.user.skills?this.user.skills.split(","):[]}get canEditProfile(){return this.isOwnProfile||this.isAdmin}get canCreatePost(){return this.isOwnProfile}sortRoles(){this.selectedRoles.sort((o,e)=>o-e)}onRolesChange(o){if(!(!this.user._id||!this.isAdmin)){if(!this.selectedRoles||this.selectedRoles.length===0){this._messageService.add({severity:"warn",summary:"Warning",detail:"At least one role must be selected",life:3e3}),this.selectedRoles=this.user.roles;return}this.updatingRoles=!0,this._authService.updateUserRoles(this.user._id,this.selectedRoles).subscribe({next:e=>{this._messageService.add({severity:"success",summary:"Success",detail:"User roles updated successfully",life:3e3}),this.updatingRoles=!1},error:e=>{console.error("Error updating roles:",e),this._messageService.add({severity:"error",summary:"Error",detail:"Failed to update user roles",life:3e3}),this.selectedRoles=this.user.roles,this.updatingRoles=!1}})}}static \u0275fac=function(e){return new(e||t)(M(Le),M(Yt),M(nt),M(Ot),M(Bi),M(gt),M(et),M(Vo))};static \u0275cmp=x({type:t,selectors:[["app-profile"]],viewQuery:function(e,i){if(e&1&&$(ze,5),e&2){let n;v(n=y())&&(i.infiniteScroll=n.first)}},standalone:!1,decls:7,vars:5,consts:[["loadingTemplate",""],["postTemplate",""],[1,"container","mx-auto","px-4","py-0"],["class","flex flex-col justify-center items-center min-h-[200px]",4,"ngIf"],["class","max-w-4xl mx-auto",4,"ngIf"],[3,"isOpenChange","isOpen","userData"],[3,"isOpenChange","postCreated","isOpen"],[1,"flex","flex-col","justify-center","items-center","min-h-[200px]"],[1,"bg-white","rounded-lg","shadow-md","max-w-4xl","p-6","mb-6","w-full"],[1,"flex","flex-col","md:flex-row","items-center","md:items-start","gap-6"],[1,"flex","flex-col","gap-4","justify-center","items-center"],[1,"rounded-full","overflow-hidden"],["shape","circle","size","4rem"],[1,"flex-1"],[1,"flex","justify-between","items-start"],[1,"flex","flex-col","w-full"],["height","2rem",1,"mb-2","w-[160px]"],["height","1rem",1,"mb-2"],["height","1rem"],[1,"flex","flex-col","space-y-4","w-full","!min-w-4xl","max-w-4xl"],[1,"flex","justify-between","items-center"],[1,"text-lg","font-bold"],[4,"ngTemplateOutlet"],[1,"max-w-4xl","mx-auto"],[1,"bg-white","rounded-lg","shadow-md","p-6","mb-6","relative","md:static"],["shape","circle","size","xlarge","styleClass","object-cover",3,"image"],["icon","pi pi-user","shape","circle","size","xlarge","styleClass","bg-gray-200 text-gray-600"],["type","button","icon","pi pi-pencil","label","Edit Profile","styleClass","text-nowrap","class","hidden md:block",3,"click",4,"ngIf"],[1,"text-2xl","font-bold","text-gray-900","text-center","md:text-start"],[1,"text-gray-600","mt-1"],["class","mt-4",4,"ngIf"],[1,"mt-4","flex","flex-wrap","gap-4"],["target","_blank","class","group",3,"href",4,"ngIf"],["class","mt-4 flex flex-wrap gap-2 items-center",4,"ngIf"],["type","button","icon","pi pi-pencil","styleClass","text-nowrap rounded-full h-10 ","class","block md:hidden top-4 right-4 absolute",3,"click",4,"ngIf"],[1,"flex","flex-col","space-y-4"],["class","flex justify-end",4,"ngIf"],[3,"itemSelected","loadMoreData","itemTemplate","loadingTemplate"],["type","button","icon","pi pi-pencil","label","Edit Profile","styleClass","text-nowrap",1,"hidden","md:block",3,"click"],[1,"mt-4"],[1,"flex","items-center","flex-wrap","gap-2"],["class","bg-primary-100 text-primary-700",3,"label",4,"ngFor","ngForOf"],[1,"bg-primary-100","text-primary-700",3,"label"],["target","_blank",1,"group",3,"href"],[1,"!py-0","!pl-0","!pr-2","!gap-0","align-middle"],[1,"bg-gray-600","text-white","group-hover:text-black","rounded-full","w-8","h-8","flex","items-center","justify-center"],[1,"pi","pi-github"],[1,"ml-1","text-sm"],[1,"bg-gray-600","text-white","group-hover:text-blue-300","rounded-full","w-8","h-8","flex","items-center","justify-center"],[1,"pi","pi-linkedin"],[1,"pi","pi-twitter"],[1,"pi","pi-globe"],[1,"mt-4","flex","flex-wrap","gap-2","items-center"],["optionLabel","name","optionValue","enum","placeholder","Select Roles","styleClass","w-full md:w-80",3,"ngModelChange","onPanelHide","onChange","options","ngModel","maxSelectedLabels","emptyMessage","loading","disabled"],["type","button","icon","pi pi-pencil","styleClass","text-nowrap rounded-full h-10 ",1,"block","md:hidden","top-4","right-4","absolute",3,"click"],[1,"flex","justify-end"],["pButton","","type","button","icon","pi pi-plus","label","Create Post",3,"click"],[1,"grid","grid-cols-1","md:grid-cols-2","lg:grid-cols-3","gap-4"],[3,"postData","postUpdated","postDeleted",4,"ngFor","ngForOf"],[3,"postUpdated","postDeleted","postData"],[1,"bg-white","rounded-lg","shadow-md","p-4"],[1,"flex","flex-col","gap-3"],[1,"relative"],[1,"flex","flex-col","gap-2"],["height","2rem",1,"mb-2"],[1,"flex","items-centerb","gap-4","pt-2","border-t","border-gray-100"],[1,"flex","items-center","gap-2"],["type","button","styleClass","border-none",3,"outlined","loading"],["height","1rem",1,"w-[40px]"]],template:function(e,i){if(e&1){let n=T();p(0,"div",2),m(1,Mu,20,1,"div",3)(2,Nu,32,15,"div",4),d(),m(3,ju,46,12,"ng-template",null,0,A),p(5,"app-profile-update",5),Pe("isOpenChange",function(l){return f(n),Fe(i.isUpdateDialogOpen,l)||(i.isUpdateDialogOpen=l),g(l)}),_("isOpenChange",function(l){return f(n),g(i.closeUpdateDialog(l))}),d(),p(6,"app-post-handler",6),Pe("isOpenChange",function(l){return f(n),Fe(i.isPostDialogOpen,l)||(i.isPostDialogOpen=l),g(l)}),_("postCreated",function(l){return f(n),g(i.onPostCreated(l))})("isOpenChange",function(l){return f(n),g(i.closePostDialog(l))}),d()}e&2&&(s(),a("ngIf",i.isLoading),s(),a("ngIf",!i.isLoading),s(3),qe("isOpen",i.isUpdateDialogOpen),a("userData",i.user),s(),qe("isOpen",i.isPostDialogOpen))},dependencies:[Ve,Z,ae,Ze,Ii,tt,Ee,Ge,yi,lt,ze,tn,pi,qt,ln],encapsulation:2})};function Qu(t,o){if(t&1){let e=T();p(0,"app-post-view",6),_("postUpdated",function(n){f(e);let r=c(2);return g(r.onPostUpdated(n))})("postDeleted",function(n){f(e);let r=c(2);return g(r.onPostDeleted(n))}),d()}if(t&2){let e=o.$implicit;a("postData",e)("showActions",!0)}}function Wu(t,o){if(t&1&&(p(0,"div",4),m(1,Qu,1,2,"app-post-view",5),d()),t&2){let e=o.$implicit;s(),a("ngForOf",e)}}function Ku(t,o){t&1&&(p(0,"div",7)(1,"div",8)(2,"div",9)(3,"div",10),u(4,"p-skeleton",11)(5,"p-skeleton",12),d(),p(6,"div",13)(7,"div",14),u(8,"p-skeleton",15)(9,"p-skeleton",16)(10,"p-skeleton",16)(11,"p-skeleton",17),d()(),p(12,"div",18)(13,"div",19),u(14,"p-button",20)(15,"p-skeleton",21),d(),p(16,"div",19),u(17,"p-button",20)(18,"p-skeleton",21),d()()()(),p(19,"div",8)(20,"div",9)(21,"div",10),u(22,"p-skeleton",11)(23,"p-skeleton",12),d(),p(24,"div",13)(25,"div",14),u(26,"p-skeleton",15)(27,"p-skeleton",16)(28,"p-skeleton",16)(29,"p-skeleton",17),d()(),p(30,"div",18)(31,"div",19),u(32,"p-button",20)(33,"p-skeleton",21),d(),p(34,"div",19),u(35,"p-button",20)(36,"p-skeleton",21),d()()()()()),t&2&&(s(14),a("outlined",!0)("loading",!0),s(3),a("outlined",!0)("loading",!0),s(15),a("outlined",!0)("loading",!0),s(3),a("outlined",!0)("loading",!0))}var ui=class t{constructor(o){this._postService=o}posts=[];currentPage=1;infiniteScroll;ngOnInit(){}loadMorePosts=o=>Ie(this,null,function*(){return this._postService?new Promise((e,i)=>{this._postService.getFeed(o).subscribe({next:n=>{o===1?this.posts=n.items:this.posts=[...this.posts,...n.items],e({items:n.items,hasMore:n.pagination.hasMore})},error:n=>{console.error("Error loading feed:",n),i(n)}})}):(console.error("PostService is not available"),{items:[],hasMore:!1})});onPostUpdated(o){let e=this.posts.findIndex(i=>i._id===o._id);e!==-1?this.posts[e]=o:(this.currentPage=1,this.infiniteScroll.reset())}onPostDeleted(o){let e=[...this.posts].filter(i=>i._id!==o);this.posts=e,this.posts.length===0&&this.currentPage>1&&(this.currentPage=1,this.infiniteScroll.reset())}onPostSelected(o){}static \u0275fac=function(e){return new(e||t)(M(nt))};static \u0275cmp=x({type:t,selectors:[["app-feed"]],viewQuery:function(e,i){if(e&1&&$(ze,5),e&2){let n;v(n=y())&&(i.infiniteScroll=n.first)}},standalone:!1,decls:6,vars:3,consts:[["postTemplate",""],["loadingTemplate",""],[1,"container","mx-auto","px-4","py-2"],[3,"itemSelected","loadMoreData","itemTemplate","loadingTemplate"],[1,"mb-4","flex","flex-col","gap-4","items-center"],["class","md:max-w-[70vw]",3,"postData","showActions","postUpdated","postDeleted",4,"ngFor","ngForOf"],[1,"md:max-w-[70vw]",3,"postUpdated","postDeleted","postData","showActions"],[1,"flex","flex-col","gap-4","justify-center","items-center"],[1,"bg-white","rounded-lg","shadow-md","p-4","min-w-full","md:max-w-[70vw]","md:min-w-[70vw]"],[1,"flex","flex-col","gap-3"],[1,"flex","items-center","gap-2","mb-2"],["shape","circle","size","2rem"],["height","1rem",1,"w-[80px]"],[1,"relative"],[1,"flex","flex-col","gap-2"],["height","2rem",1,"mb-2"],["height","1rem",1,"mb-2"],["height","1rem"],[1,"flex","items-centerb","gap-4","pt-2","border-t","border-gray-100"],[1,"flex","items-center","gap-2"],["type","button","styleClass","border-none",3,"outlined","loading"],["height","1rem",1,"w-[40px]"]],template:function(e,i){if(e&1){let n=T();p(0,"div",2)(1,"app-infinite-scroll",3),_("itemSelected",function(l){return f(n),g(i.onPostSelected(l))}),m(2,Wu,2,1,"ng-template",null,0,A)(4,Ku,37,8,"ng-template",null,1,A),d()()}if(e&2){let n=K(3),r=K(5);s(),a("loadMoreData",i.loadMorePosts)("itemTemplate",n)("loadingTemplate",r)}},styles:[".prose[_ngcontent-%COMP%]{overflow-wrap:break-word;word-wrap:break-word;hyphens:auto}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:.75rem}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}"]})};var Gu=(t,o)=>["/user",t,o];function Zu(t,o){if(t&1&&u(0,"p-avatar",13),t&2){let e=c().$implicit;a("image",e.avatar)}}function Yu(t,o){t&1&&u(0,"p-avatar",14)}function Xu(t,o){if(t&1&&(p(0,"div",10)(1,"div",11)(2,"div",12),m(3,Zu,1,1,"p-avatar",13)(4,Yu,1,0,"p-avatar",14),d(),p(5,"div",15)(6,"h3",16),C(7),d(),p(8,"p",17),C(9),d()()(),u(10,"p-button",18),d()),t&2){let e=o.$implicit,i=c(2);s(3),te(e&&e.avatar!=""?3:4),s(4),B(e.name),s(2),ye(" ",e.bio||"No bio"," "),s(),a("routerLink",re(4,Gu,i.route.profileById.url,e._id))}}function Ju(t,o){if(t&1&&(p(0,"div",8),m(1,Xu,11,7,"div",9),d()),t&2){let e=c();s(),a("ngForOf",e.users)}}function e0(t,o){t&1&&(p(0,"div",19)(1,"div",11)(2,"div",12),u(3,"p-skeleton",20),d(),p(4,"div",21),u(5,"p-skeleton",22)(6,"p-skeleton",23),d()(),u(7,"button",24),d()),t&2&&(s(7),a("loading",!0))}var cn=class t{constructor(o){this._profileService=o}route=Ue;infiniteScroll;searchControl=new zo("");users=[];currentPage=1;isLoading=!1;ngOnInit(){this.searchControl.valueChanges.pipe(Zn(300),Yn()).subscribe(o=>{this.currentPage=1,this.users=[],this.infiniteScroll?.reset()})}loadMoreUsers=o=>Ie(this,null,function*(){let e=this.searchControl.value;return this.isLoading=!0,e?new Promise((i,n)=>{this._profileService.searchUsers(e,o).subscribe({next:r=>{o===1?this.users=r.items:this.users=[...this.users,...r.items],i({items:r.items,hasMore:r.pagination.hasMore})},error:r=>{console.error("Error searching users:",r),n(r)},complete:()=>{this.isLoading=!1}})}):{items:[],hasMore:!1}});onUserSelected(o){}static \u0275fac=function(e){return new(e||t)(M(Ot))};static \u0275cmp=x({type:t,selectors:[["app-search"]],viewQuery:function(e,i){if(e&1&&$(ze,5),e&2){let n;v(n=y())&&(i.infiniteScroll=n.first)}},standalone:!1,decls:11,vars:5,consts:[["userTemplate",""],["loadingTemplate",""],[1,"container","mx-auto","px-4","py-0"],[1,"mb-6","w-full"],["styleClass","pi pi-search"],["type","text","pInputText","","placeholder","Search users...",1,"w-full",3,"formControl"],[1,"grid","gap-4"],[3,"itemSelected","loadMoreData","itemTemplate","loadingTemplate","emptyMessage"],[1,"flex","flex-col","gap-2"],["class","bg-white rounded-lg shadow p-4 flex flex-col md:flex-row md:items-center gap-4",4,"ngFor","ngForOf"],[1,"bg-white","rounded-lg","shadow","p-4","flex","flex-col","md:flex-row","md:items-center","gap-4"],[1,"flex","flex-1","gap-4"],[1,"rounded-full","overflow-hidden"],["shape","circle","size","large","styleClass","object-cover",3,"image"],["icon","pi pi-user","shape","circle","size","large","styleClass","bg-gray-200 text-gray-600"],[1,"flex-1"],[1,"font-semibold","text-gray-900"],[1,"text-sm","line-clamp-2","text-gray-600"],["label","View Profile","icon","pi pi-user","styleClass","w-full md:w-fit",1,"w-full","md:w-fit",3,"routerLink"],[1,"bg-white","rounded-lg","shadow","p-4","flex","items-center","gap-4"],["shape","circle","size","3rem"],[1,"flex-1","flex","flex-col"],["height","2rem",1,"mb-2","!max-w-[160px]"],["height","1rem",1,"mb-2"],["pButton","","type","button","label","View Profile","icon","pi pi-user",1,"p-button-text",3,"loading"]],template:function(e,i){if(e&1){let n=T();p(0,"div",2)(1,"div",3)(2,"p-iconfield"),u(3,"p-inputicon",4)(4,"input",5),d()(),p(5,"div",6)(6,"app-infinite-scroll",7),_("itemSelected",function(l){return f(n),g(i.onUserSelected(l))}),m(7,Ju,2,1,"ng-template",null,0,A)(9,e0,8,1,"ng-template",null,1,A),d()()()}if(e&2){let n=K(8),r=K(10);s(4),a("formControl",i.searchControl),s(2),a("loadMoreData",i.loadMoreUsers)("itemTemplate",n)("loadingTemplate",r)("emptyMessage","No users found")}},dependencies:[Ve,rt,Ze,tt,Ee,ft,St,Ge,$o,lt,ze,Si,Ut],encapsulation:2})};var pn=class t{constructor(o){this._httpService=o}ADMIN_ENDPOINT="/api/admin";getDashboardStats(){return this._httpService.get(`${this.ADMIN_ENDPOINT}/dashboard`)}getHistory(){return this._httpService.get(`${this.ADMIN_ENDPOINT}/history`)}static \u0275fac=function(e){return new(e||t)(Je(Tt))};static \u0275prov=L({token:t,factory:t.\u0275fac,providedIn:"root"})};var i0=["lineChartCanvas"],n0=["pieChartCanvas"],o0=(t,o)=>["/user",t,o];function r0(t,o){if(t&1&&u(0,"app-post-view",23),t&2){let e=o.$implicit;a("postData",e)}}function a0(t,o){if(t&1&&u(0,"p-avatar",27),t&2){let e=c().$implicit;a("image",e.avatar)}}function s0(t,o){t&1&&u(0,"p-avatar",28)}function l0(t,o){if(t&1&&(p(0,"div",24)(1,"div",25)(2,"div",26),m(3,a0,1,1,"p-avatar",27)(4,s0,1,0,"p-avatar",28),d(),p(5,"div",29)(6,"h3",30),C(7),d(),p(8,"p",31),C(9),d()()(),u(10,"p-button",32),d()),t&2){let e=o.$implicit,i=c();s(3),te(e&&e.avatar!=""?3:4),s(4),B(e.name),s(2),ye(" ",e.bio||"No bio"," "),s(),a("routerLink",re(4,o0,i.route.profileById.url,e._id))}}var hi=class t{constructor(o){this._adminService=o}overview;roleDistribution=[];recentPosts=[];recentUsers=[];dashboardData=null;mostLikedPosts=[];mostCommentedPosts=[];historyData={};isLoading=!0;error=null;route=Ue;config={};lineChartCanvas;chart;pieChartCanvas;pieChart;ngOnInit(){this.loadDashboardData()}loadDashboardData(){this.isLoading=!0,this.error=null,this._adminService.getDashboardStats().subscribe({next:o=>{this.dashboardData=o,this.overview=o.overview,this.recentPosts=o.recentActivity.posts,this.recentUsers=o.recentActivity.users,this.mostLikedPosts=o.recentActivity.mostLikedPosts,this.mostCommentedPosts=o.recentActivity.mostCommentedPosts,this.isLoading=!1},error:o=>{this.error=o.message||"Failed to load dashboard data",this.isLoading=!1}}),this._adminService.getHistory().subscribe({next:o=>{this.isLoading=!1,this.historyData=o,this.generateGraph()},error:o=>{this.error=o.message||"Failed to load dashboard data",this.isLoading=!1}})}generateGraph(){let o=[{label:"Users",data:this.historyData.usersOverTime,color:"blue"},{label:"Posts",data:this.historyData.postsOverTime,color:"green"},{label:"Comments",data:this.historyData.commentsOverTime,color:"orange"}],e=this.createLineChartConfig(o);this.chart=new Mn(this.lineChartCanvas.nativeElement,e);let i=this.createPieChartConfig();this.pieChart=new Mn(this.pieChartCanvas.nativeElement,i)}createLineChartConfig(o){let e=new Set;o.forEach(l=>{l.data.forEach(h=>e.add(h.date))});let i=Array.from(e).sort(),n=o.map(l=>{let h=new Map(l.data.map(D=>[D.date,D.count])),w=i.map(D=>h.get(D)||0);return{label:l.label,data:w,borderColor:l.color,fill:!1,tension:.3}});return{type:"line",data:{labels:i,datasets:n},options:{maintainAspectRatio:!1,plugins:{legend:{position:"top",labels:{font:{size:12}}},title:{display:!0,text:"Historical Data Over Time",font:{size:16}},tooltip:{mode:"index",intersect:!1}},scales:{x:{title:{display:!0,text:"Date",font:{size:12}},ticks:{font:{size:10},maxRotation:45,minRotation:30,autoSkip:!0},grid:{display:!1}},y:{title:{display:!0,text:"Count",font:{size:12}},ticks:{font:{size:10}},beginAtZero:!0,grid:{display:!0}}},interaction:{mode:"nearest",axis:"x",intersect:!1}}}}createPieChartConfig(){let o=this.historyData.roleDistribution.map(n=>n.role),e=this.historyData.roleDistribution.map(n=>n.count);return{type:"pie",data:{labels:o,datasets:[{label:"Role Distribution",data:e,backgroundColor:["#FF6384","#36A2EB","#FFCE56","#4BC0C0"]}]},options:{responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"User Role Distribution"}}}}}ngOnDestroy(){this.chart&&this.chart.destroy(),this.pieChart&&this.pieChart.destroy()}static \u0275fac=function(e){return new(e||t)(M(pn))};static \u0275cmp=x({type:t,selectors:[["app-admin-dashboard"]],viewQuery:function(e,i){if(e&1&&($(i0,7),$(n0,7)),e&2){let n;v(n=y())&&(i.lineChartCanvas=n.first),v(n=y())&&(i.pieChartCanvas=n.first)}},standalone:!1,decls:50,vars:8,consts:[["lineChartCanvas",""],["pieChartCanvas",""],[1,"px-4"],[1,"bg-white","rounded-lg","h-[80vh]"],[1,""],[1,"flex","flex-col","md:flex-row","gap-4","mt-6"],[1,"grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-3","gap-4","mb-6"],[1,"p-4","bg-blue-500","text-white","rounded","shadow"],[1,"text-xl","font-semibold"],[1,"text-3xl"],[1,"p-4","bg-green-500","text-white","rounded","shadow"],[1,"p-4","bg-yellow-500","text-white","rounded","shadow"],[1,"p-4","bg-purple-500","text-white","rounded","shadow"],[1,"p-4","bg-orange-500","text-white","rounded","shadow"],[1,"p-4","bg-pink-500","text-white","rounded","shadow"],[1,"max-h-80","w-fit"],[1,"mt-6"],[1,"text-2xl","font-semibold","mb-2"],[1,"space-y-2"],[1,"grid","grid-cols-1","md:grid-cols-2","lg:grid-cols-3","gap-4"],[3,"postData",4,"ngFor","ngForOf"],[1,"my-6"],["class","bg-white rounded-lg shadow p-4 flex flex-col md:flex-row md:items-center gap-4",4,"ngFor","ngForOf"],[3,"postData"],[1,"bg-white","rounded-lg","shadow","p-4","flex","flex-col","md:flex-row","md:items-center","gap-4"],[1,"flex","flex-1","gap-4"],[1,"rounded-full","overflow-hidden"],["shape","circle","size","large","styleClass","object-cover",3,"image"],["icon","pi pi-user","shape","circle","size","large","styleClass","bg-gray-200 text-gray-600"],[1,"flex-1"],[1,"font-semibold","text-gray-900"],[1,"text-sm","line-clamp-2","text-gray-600"],["label","View Profile","icon","pi pi-user","styleClass","w-full md:w-fit",1,"w-full","md:w-fit",3,"routerLink"]],template:function(e,i){e&1&&(p(0,"div",2)(1,"div",3),u(2,"canvas",4,0),d(),p(4,"div",5)(5,"div",6)(6,"div",7)(7,"div",8),C(8,"Total Users"),d(),p(9,"div",9),C(10),d()(),p(11,"div",10)(12,"div",8),C(13,"Total Posts"),d(),p(14,"div",9),C(15),d()(),p(16,"div",11)(17,"div",8),C(18,"Total Comments"),d(),p(19,"div",9),C(20),d()(),p(21,"div",12)(22,"div",8),C(23,"New Users (7d)"),d(),p(24,"div",9),C(25),d()(),p(26,"div",13)(27,"div",8),C(28,"New Posts (7d)"),d(),p(29,"div",9),C(30),d()(),p(31,"div",14)(32,"div",8),C(33,"New Comments (7d)"),d(),p(34,"div",9),C(35),d()()(),p(36,"div",15),u(37,"canvas",null,1),d()(),p(39,"div",16)(40,"h2",17),C(41,"Recent Posts"),d(),p(42,"div",18)(43,"div",19),m(44,r0,1,1,"app-post-view",20),d()()(),p(45,"div",21)(46,"h2",17),C(47,"Recent Users"),d(),p(48,"div",18),m(49,l0,11,7,"div",22),d()()()),e&2&&(s(10),B(i.overview.totalUsers),s(5),B(i.overview.totalPosts),s(5),B(i.overview.totalComments),s(5),B(i.overview.newUsers),s(5),B(i.overview.newPosts),s(5),B(i.overview.newComments),s(9),a("ngForOf",i.recentPosts),s(5),a("ngForOf",i.recentUsers))},encapsulation:2})};var Ue={profile:{path:"profile",url:"profile"},profileById:{path:"profile/:id",url:"profile"},feed:{path:"feed",url:"feed"},search:{path:"search",url:"search"},admin:{path:"admin",url:"admin"}},c0=[{path:"",component:li,children:[{path:Ue.feed.path,component:ui},{path:Ue.profile.path,component:qi},{path:Ue.profileById.path,component:qi},{path:Ue.search.path,component:cn},{path:Ue.admin.path,component:hi,canActivate:[Do]}]}],dn=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=J({type:t});static \u0275inj=X({imports:[_t.forChild(c0),_t]})};var p0=["header"],d0=["footer"],m0=["content"],u0=["closeicon"],h0=["headless"],f0=["maskRef"],g0=["container"],_0=["closeButton"],b0=["*"],v0=(t,o,e,i,n,r)=>({"p-drawer":!0,"p-drawer-active":t,"p-drawer-left":o,"p-drawer-right":e,"p-drawer-top":i,"p-drawer-bottom":n,"p-drawer-full":r}),y0=(t,o)=>({transform:t,transition:o}),C0=t=>({value:"visible",params:t});function x0(t,o){t&1&&R(0)}function w0(t,o){if(t&1&&m(0,x0,1,0,"ng-container",4),t&2){let e=c(2);a("ngTemplateOutlet",e.headlessTemplate||e._headlessTemplate)}}function I0(t,o){t&1&&R(0)}function T0(t,o){if(t&1&&(p(0,"div"),C(1),d()),t&2){let e=c(3);k(e.cx("title")),s(),B(e.header)}}function S0(t,o){t&1&&u(0,"TimesIcon"),t&2&&b("data-pc-section","closeicon")}function k0(t,o){}function O0(t,o){t&1&&m(0,k0,0,0,"ng-template")}function M0(t,o){if(t&1&&m(0,S0,1,1,"TimesIcon",8)(1,O0,1,0,null,4),t&2){let e=c(4);a("ngIf",!e.closeIconTemplate&&!e._closeIconTemplate),s(),a("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate)}}function E0(t,o){if(t&1){let e=T();p(0,"p-button",9),_("onClick",function(n){f(e);let r=c(3);return g(r.close(n))})("keydown.enter",function(n){f(e);let r=c(3);return g(r.close(n))}),m(1,M0,2,2,"ng-template",null,1,A),d()}if(t&2){let e=c(3);a("ngClass",e.cx("closeButton"))("buttonProps",e.closeButtonProps)("ariaLabel",e.ariaCloseLabel),b("data-pc-section","closebutton")("data-pc-group-section","iconcontainer")}}function q0(t,o){t&1&&R(0)}function F0(t,o){t&1&&R(0)}function P0(t,o){if(t&1&&(q(0),p(1,"div",5),m(2,F0,1,0,"ng-container",4),d(),F()),t&2){let e=c(3);s(),a("ngClass",e.cx("footer")),b("data-pc-section","footer"),s(),a("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}function V0(t,o){if(t&1&&(p(0,"div",5),m(1,I0,1,0,"ng-container",4)(2,T0,2,3,"div",6)(3,E0,3,5,"p-button",7),d(),p(4,"div",5),me(5),m(6,q0,1,0,"ng-container",4),d(),m(7,P0,3,3,"ng-container",8)),t&2){let e=c(2);a("ngClass",e.cx("header")),b("data-pc-section","header"),s(),a("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),s(),a("ngIf",e.header),s(),a("ngIf",e.showCloseIcon&&e.closable),s(),a("ngClass",e.cx("content")),b("data-pc-section","content"),s(2),a("ngTemplateOutlet",e.contentTemplate||e._contentTemplate),s(),a("ngIf",e.footerTemplate||e._footerTemplate)}}function D0(t,o){if(t&1){let e=T();p(0,"div",3,0),_("@panelState.start",function(n){f(e);let r=c();return g(r.onAnimationStart(n))})("@panelState.done",function(n){f(e);let r=c();return g(r.onAnimationEnd(n))})("keydown",function(n){f(e);let r=c();return g(r.onKeyDown(n))}),m(2,w0,1,1,"ng-container")(3,V0,8,9),d()}if(t&2){let e=c();oe(e.style),k(e.styleClass),a("ngClass",so(9,v0,e.visible,e.position==="left"&&!e.fullScreen,e.position==="right"&&!e.fullScreen,e.position==="top"&&!e.fullScreen,e.position==="bottom"&&!e.fullScreen,e.fullScreen||e.position==="full"))("@panelState",H(19,C0,re(16,y0,e.transformOptions,e.transitionOptions))),b("data-pc-name","sidebar")("data-pc-section","root"),s(2),te(e.headlessTemplate||e._headlessTemplate?2:3)}}var L0=({dt:t})=>`
.p-drawer {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    transform: translate3d(0px, 0px, 0px);
    position: fixed;
    transition: transform 0.3s;
    background: ${t("drawer.background")};
    color: ${t("drawer.color")};
    border: 1px solid ${t("drawer.border.color")};
    box-shadow: ${t("drawer.shadow")};
}

.p-drawer-content {
    overflow-y: auto;
    flex-grow: 1;
    padding: ${t("drawer.content.padding")};
}

.p-drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: ${t("drawer.header.padding")};
}

.p-drawer-footer {
    padding: ${t("drawer.header.padding")};
}

.p-drawer-title {
    font-weight: ${t("drawer.title.font.weight")};
    font-size: ${t("drawer.title.font.size")};
}

.p-drawer-full .p-drawer {
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    max-height: 100%;
    top: 0px !important;
    left: 0px !important;
    border-width: 1px;
}

.p-drawer-left .p-drawer {
    align-self: start;
    width: 20rem;
    height: 100%;
    border-right-width: 1px;
}

.p-drawer-right .p-drawer {
    align-self: end;
    width: 20rem;
    height: 100%;
    border-left-width: 1px;
}

.p-drawer-top .p-drawer {
    height: 10rem;
    width: 100%;
    border-bottom-width: 1px;
}

.p-drawer-bottom .p-drawer {
    height: 10rem;
    width: 100%;
    border-top-width: 1px;
}

.p-drawer-left .p-drawer-content,
.p-drawer-right .p-drawer-content,
.p-drawer-top .p-drawer-content,
.p-drawer-bottom .p-drawer-content {
    width: 100%;
    height: 100%;
}

.p-drawer-open {
    display: flex;
}

.p-drawer-top {
    justify-content: flex-start;
}

.p-drawer-bottom {
    justify-content: flex-end;
}

.p-drawer {
    position: fixed;
    transition: transform 0.3s;
    display: flex;
    flex-direction: column;
}

.p-drawer-content {
    position: relative;
    overflow-y: auto;
    flex-grow: 1;
}

.p-drawer-header {
    display: flex;
    align-items: center;
}

.p-drawer-footer {
    margin-top: auto;
}

.p-drawer-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
}

.p-drawer-left {
    top: 0;
    left: 0;
    width: 20rem;
    height: 100%;
}

.p-drawer-right {
    top: 0;
    right: 0;
    width: 20rem;
    height: 100%;
}

.p-drawer-top {
    top: 0;
    left: 0;
    width: 100%;
    height: 10rem;
}

.p-drawer-bottom {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10rem;
}

.p-drawer-full {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    -webkit-transition: none;
    transition: none;
}

.p-drawer-mask {
    background-color: rgba(0, 0, 0, 0.4);
    transition-duration: 0.2s;
}

.p-overlay-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask:dir(rtl) {
    flex-direction: row-reverse;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation 150ms forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation 150ms forwards;
}

@keyframes p-overlay-mask-enter-animation {
    from {
        background-color: transparent;
    }
    to {
        background-color: rgba(0, 0, 0, 0.4);
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background-color: rgba(0, 0, 0, 0.4);
    }
    to {
        background-color: transparent;
    }
}
`,z0={mask:({instance:t})=>({position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",flexDirection:"column",alignItems:t.position==="top"?"flex-start":t.position==="bottom"?"flex-end":"center"})},$0={mask:({instance:t})=>({"p-drawer-mask":!0,"p-overlay-mask p-overlay-mask-enter":t.modal,"p-drawer-open":t.containerVisible,"p-drawer-full":t.fullScreen,[`p-drawer-${t.position}`]:!!t.position}),root:({instance:t})=>({"p-drawer p-component":!0,"p-drawer-full":t.fullScreen}),header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},Jr=(()=>{class t extends Y{name="drawer";theme=L0;classes=$0;inlineStyles=z0;static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var R0=ri([Be({transform:"{{transform}}",opacity:0}),Ae("{{transition}}")]),A0=ri([Ae("{{transition}}",Be({transform:"{{transform}}",opacity:0}))]),$n=(()=>{class t extends Q{appendTo="body";blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;closeButtonProps={severity:"secondary",text:!0,rounded:!0};dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible}set visible(e){this._visible=e}get position(){return this._position}set position(e){if(this._position=e,e==="full"){this.transformOptions="none";return}switch(e){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break}}get fullScreen(){return this._fullScreen}set fullScreen(e){this._fullScreen=e,e&&(this.transformOptions="none")}header;maskStyle;closable=!0;onShow=new I;onHide=new I;visibleChange=new I;maskRef;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=!1;container;transformOptions="translate3d(-100%, 0px, 0px)";mask;maskClickListener;documentEscapeListener;animationEndListener;_componentStyle=j(Jr);ngAfterViewInit(){super.ngAfterViewInit(),this.initialized=!0}headerTemplate;footerTemplate;contentTemplate;closeIconTemplate;headlessTemplate;_headerTemplate;_footerTemplate;_contentTemplate;_closeIconTemplate;_headlessTemplate;templates;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break;case"headless":this._headlessTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}onKeyDown(e){e.code==="Escape"&&this.hide(!1)}show(){this.container.setAttribute(this.attrSelector,""),this.autoZIndex&&Qe.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(e=!0){e&&this.onHide.emit({}),this.modal&&this.disableModality()}close(e){this.hide(),this.visibleChange.emit(!1),e.preventDefault()}enableModality(){let e=this.document.querySelectorAll(".p-drawer-active"),i=e.length,n=i==1?String(parseInt(this.container.style.zIndex)-1):String(parseInt(e[i-1].style.zIndex)-1);this.mask||(this.mask=this.renderer.createElement("div"),this.renderer.setStyle(this.mask,"zIndex",n),So(this.mask,"style",this.maskStyle),ut(this.mask,"p-overlay-mask p-drawer-mask p-overlay-mask-enter"),this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",r=>{this.dismissible&&this.close(r)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&Hi())}disableModality(){this.mask&&(ut(this.mask,"p-overlay-mask-leave"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&Gt(),this.unbindAnimationEndListener(),this.mask=null}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener();break}}onAnimationEnd(e){switch(e.toState){case"void":this.hide(!1),Qe.clear(this.container),this.unbindGlobalListeners();break}}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):Lt(this.appendTo,this.container))}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(e,"keydown",i=>{i.which==27&&parseInt(this.container.style.zIndex)===Qe.get(this.container)&&this.close(i)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}ngOnDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.appendTo&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&Qe.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-drawer"]],contentQueries:function(i,n,r){if(i&1&&(O(r,p0,4),O(r,d0,4),O(r,m0,4),O(r,u0,4),O(r,h0,4),O(r,se,4)),i&2){let l;v(l=y())&&(n.headerTemplate=l.first),v(l=y())&&(n.footerTemplate=l.first),v(l=y())&&(n.contentTemplate=l.first),v(l=y())&&(n.closeIconTemplate=l.first),v(l=y())&&(n.headlessTemplate=l.first),v(l=y())&&(n.templates=l)}},viewQuery:function(i,n){if(i&1&&($(f0,5),$(g0,5),$(_0,5)),i&2){let r;v(r=y())&&(n.maskRef=r.first),v(r=y())&&(n.containerViewChild=r.first),v(r=y())&&(n.closeButtonViewChild=r.first)}},inputs:{appendTo:"appendTo",blockScroll:[2,"blockScroll","blockScroll",P],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",P],baseZIndex:[2,"baseZIndex","baseZIndex",fe],modal:[2,"modal","modal",P],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",P],showCloseIcon:[2,"showCloseIcon","showCloseIcon",P],closeOnEscape:[2,"closeOnEscape","closeOnEscape",P],transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen",header:"header",maskStyle:"maskStyle",closable:[2,"closable","closable",P]},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[G([Jr]),E],ngContentSelectors:b0,decls:1,vars:1,consts:[["container",""],["icon",""],["role","complementary",3,"ngClass","style","class","keydown",4,"ngIf"],["role","complementary",3,"keydown","ngClass"],[4,"ngTemplateOutlet"],[3,"ngClass"],[3,"class",4,"ngIf"],[3,"ngClass","buttonProps","ariaLabel","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"onClick","keydown.enter","ngClass","buttonProps","ariaLabel"]],template:function(i,n){i&1&&(he(),m(0,D0,4,21,"div",2)),i&2&&a("ngIf",n.visible)},dependencies:[U,ie,Z,ae,Ee,ht,V],encapsulation:2,data:{animation:[st("panelState",[He("void => visible",[ai(R0)]),He("visible => void",[ai(A0)])])]},changeDetection:0})}return t})(),ea=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=J({type:t});static \u0275inj=X({imports:[$n,V,V]})}return t})();var H0=()=>({width:"250px"}),ta=t=>({item:t,level:0}),U0=(t,o)=>({item:t,level:o});function N0(t,o){}function j0(t,o){if(t&1&&m(0,N0,0,0,"ng-template",17),t&2){let e=c().$implicit;c();let i=K(17);a("ngTemplateOutlet",i)("ngTemplateOutletContext",H(2,ta,e))}}function Q0(t,o){if(t&1&&(q(0),m(1,j0,1,4,null,16),F()),t&2){let e=o.$implicit;s(),a("ngIf",e.visible)}}function W0(t,o){if(t&1&&u(0,"p-avatar",9),t&2){let e=c();a("image",e.user==null?null:e.user.avatar)}}function K0(t,o){t&1&&u(0,"p-avatar",10)}function G0(t,o){if(t&1&&u(0,"i",26),t&2){let e=c(2).item;a("ngClass",e.expanded?"pi-chevron-down":"pi-chevron-right")}}function Z0(t,o){if(t&1&&u(0,"i"),t&2){let e=c(2).item;k(e.icon+" text-lg")}}function Y0(t,o){if(t&1&&(p(0,"a",22),m(1,G0,1,1,"i",23)(2,Z0,1,2,"i",24),p(3,"span",25),C(4),d()()),t&2){let e=c().item;a("routerLink",e.routerLink),s(),a("ngIf",e.items==null?null:e.items.length),s(),a("ngIf",!(e.items!=null&&e.items.length)),s(2),B(e.label)}}function X0(t,o){if(t&1&&u(0,"i",26),t&2){let e=c(2).item;a("ngClass",e.expanded?"pi-chevron-down":"pi-chevron-right")}}function J0(t,o){if(t&1&&u(0,"i"),t&2){let e=c(2).item;k(e.icon+" text-lg")}}function eh(t,o){if(t&1){let e=T();p(0,"div",27),_("click",function(){f(e);let n=c().item,r=c();return g(r.toggle(n))}),m(1,X0,1,1,"i",23)(2,J0,1,2,"i",24),p(3,"span",25),C(4),d()()}if(t&2){let e=c().item;s(),a("ngIf",e.items==null?null:e.items.length),s(),a("ngIf",!(e.items!=null&&e.items.length)),s(2),B(e.label)}}function th(t,o){}function ih(t,o){if(t&1&&m(0,th,0,0,"ng-template",17),t&2){let e=c().$implicit,i=c(2).level;c();let n=K(17);a("ngTemplateOutlet",n)("ngTemplateOutletContext",re(2,U0,e,i+1))}}function nh(t,o){if(t&1&&(q(0),m(1,ih,1,5,null,16),F()),t&2){let e=o.$implicit;s(),a("ngIf",e.visible)}}function oh(t,o){if(t&1&&(p(0,"div",28),m(1,nh,2,1,"ng-container",5),d()),t&2){let e=c().item;a("ngClass",e.expanded?"max-h-96 opacity-100":"max-h-0 opacity-0"),s(),a("ngForOf",e.items)}}function rh(t,o){if(t&1&&(p(0,"div",18),m(1,Y0,5,4,"a",19)(2,eh,5,3,"div",20)(3,oh,2,2,"div",21),d()),t&2){let e=o.item,i=o.level;Se("padding-left",i*16,"px"),s(),a("ngIf",e.routerLink),s(),a("ngIf",!e.routerLink),s(),a("ngIf",e.items==null?null:e.items.length)}}function ah(t,o){t&1&&(p(0,"h3",29),C(1,"DevConnect"),d())}function sh(t,o){}function lh(t,o){if(t&1&&m(0,sh,0,0,"ng-template",17),t&2){let e=c().$implicit;c();let i=K(17);a("ngTemplateOutlet",i)("ngTemplateOutletContext",H(2,ta,e))}}function ch(t,o){if(t&1&&(q(0),m(1,lh,1,4,null,16),F()),t&2){let e=o.$implicit;s(),a("ngIf",e.visible)}}function ph(t,o){if(t&1&&(p(0,"div",6)(1,"div",7)(2,"div",8),u(3,"p-avatar",30),d(),p(4,"div")(5,"div",11),C(6),d(),p(7,"div",12),C(8),d()()()()),t&2){let e=c();s(),a("routerLink",e.route.profile.url),s(2),a("image",e.user==null?null:e.user.avatar),s(3),ye(" ",(e.user==null?null:e.user.name)||"Guest"," "),s(2),ye(" ",e.formattedRoles," ")}}var mn=class t{constructor(o,e){this._authFacade=o;this._commonService=e}visible=!1;route=Ue;user;items=[{label:"Admin",icon:"pi pi-cog",routerLink:Ue.admin.url,routerLinkActiveOptions:{exact:!0},visible:!1},{label:"Feed",icon:"pi pi-home",routerLink:Ue.feed.url,routerLinkActiveOptions:{exact:!0},visible:!0},{label:"Search",icon:"pi pi-search",routerLink:Ue.search.url,routerLinkActiveOptions:{exact:!0},visible:!0},{label:"Account",icon:"pi pi-user",routerLink:Ue.profile.url,routerLinkActiveOptions:{exact:!0},visible:!0}];ngOnInit(){this._authFacade.authUser$.subscribe(o=>{this.user=o,this.updateMenuVisibility()})}updateMenuVisibility(){this.user&&this.items.forEach(o=>{o.label==="Admin"&&(o.visible=this._commonService.isAdmin)})}get formattedRoles(){return this._commonService.getHighestRole()}toggle(o){o.items?.length&&(o.expanded=!o.expanded)}static \u0275fac=function(e){return new(e||t)(M(Le),M(gt))};static \u0275cmp=x({type:t,selectors:[["app-sidebar"]],inputs:{visible:"visible"},standalone:!1,decls:23,vars:12,consts:[["renderItem",""],[1,"hidden","md:flex","md:min-w-44","h-screen","bg-white","dark:bg-gray-900","text-gray-900","dark:text-white","flex-col","shadow-lg"],[1,"px-6","py-4","border-b","border-gray-200","dark:border-gray-700"],[1,"text-2xl","font-bold"],[1,"flex-1","overflow-y-auto","py-4","px-2"],[4,"ngFor","ngForOf"],[1,"p-4","border-t","border-gray-200","dark:border-gray-700"],[1,"flex","cursor-pointer","items-center","space-x-3",3,"routerLink"],[1,"rounded-full","overflow-hidden"],["shape","circle","size","large","styleClass","object-cover",3,"image"],["icon","pi pi-user","shape","circle","size","large","styleClass","bg-gray-200 text-gray-600"],[1,"font-semibold","text-gray-900","dark:text-white"],[1,"text-sm","text-gray-600","dark:text-gray-400"],["position","left","styleClass","md:hidden",3,"visibleChange","visible","showCloseIcon","modal"],["pTemplate","header"],["pTemplate","footer"],[4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mb-1"],["class","flex items-center space-x-3 px-4 py-2 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition",3,"routerLink",4,"ngIf"],["class","flex items-center space-x-3 px-4 py-2 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition",3,"click",4,"ngIf"],["class","overflow-hidden transition-all duration-300 ease-in-out",3,"ngClass",4,"ngIf"],[1,"flex","items-center","space-x-3","px-4","py-2","rounded","cursor-pointer","hover:bg-gray-100","dark:hover:bg-gray-800","transition",3,"routerLink"],["class","pi",3,"ngClass",4,"ngIf"],[3,"class",4,"ngIf"],[1,"text-sm"],[1,"pi",3,"ngClass"],[1,"flex","items-center","space-x-3","px-4","py-2","rounded","cursor-pointer","hover:bg-gray-100","dark:hover:bg-gray-800","transition",3,"click"],[1,"overflow-hidden","transition-all","duration-300","ease-in-out",3,"ngClass"],[1,"text-xl","font-bold","p-4"],["icon","pi pi-user","shape","circle","size","xlarge","styleClass","bg-gray-200 text-gray-600",3,"image"]],template:function(e,i){if(e&1){let n=T();p(0,"div",1)(1,"div",2)(2,"span",3),C(3,"DevConnect"),d()(),p(4,"nav",4),m(5,Q0,2,1,"ng-container",5),d(),p(6,"div",6)(7,"div",7)(8,"div",8),m(9,W0,1,1,"p-avatar",9)(10,K0,1,0,"p-avatar",10),d(),p(11,"div")(12,"div",11),C(13),d(),p(14,"div",12),C(15),d()()()()(),m(16,rh,4,5,"ng-template",null,0,A),p(18,"p-drawer",13),Pe("visibleChange",function(l){return f(n),Fe(i.visible,l)||(i.visible=l),g(l)}),m(19,ah,2,0,"ng-template",14),p(20,"nav",4),m(21,ch,2,1,"ng-container",5),d(),m(22,ph,9,4,"ng-template",15),d()}e&2&&(s(5),a("ngForOf",i.items),s(2),a("routerLink",i.route.profile.url),s(2),te(i.user!=null&&i.user.avatar?9:10),s(4),ye(" ",(i.user==null?null:i.user.name)||"Guest"," "),s(2),ye(" ",i.formattedRoles," "),s(3),oe(ce(11,H0)),qe("visible",i.visible),a("showCloseIcon",!0)("modal",!0),s(3),a("ngForOf",i.items))},dependencies:[ie,Ve,Z,ae,rt,Ze,se,$n],encapsulation:2})};var un=class t{constructor(o){this._authFacade=o}menuClick=new I;onLogout(){this._authFacade.logout()}onMenuClick(){this.menuClick.emit()}static \u0275fac=function(e){return new(e||t)(M(Le))};static \u0275cmp=x({type:t,selectors:[["app-header"]],outputs:{menuClick:"menuClick"},standalone:!1,decls:9,vars:0,consts:[[1,"bg-primary-600","text-primary-50","px-2","py-2","rounded-md","shadow-md","m-5","mt-4"],[1,"flex","justify-between","items-center"],[1,"flex","items-center","gap-4"],["pButton","","type","button","icon","pi pi-bars",1,"lg:hidden",3,"click"],[1,"text-xl","font-semibold"],["type","button","icon","pi pi-sign-out","label","Logout",1,"md:block","hidden",3,"click"],["type","button","icon","pi pi-sign-out",1,"md:hidden","block",3,"click"]],template:function(e,i){e&1&&(p(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),_("click",function(){return i.onMenuClick()}),d(),p(4,"span",4),C(5,"DevConnect"),d()(),p(6,"div",2)(7,"p-button",5),_("click",function(){return i.onLogout()}),d(),p(8,"p-button",6),_("click",function(){return i.onLogout()}),d()()()())},dependencies:[tt,Ee],encapsulation:2})};var dh=["list"],mh=()=>({"p-panelmenu-submenu":!0}),na=t=>({"p-disabled":t}),oa=()=>({exact:!1}),ra=t=>({$implicit:t});function uh(t,o){t&1&&u(0,"li",7)}function hh(t,o){if(t&1&&u(0,"AngleDownIcon",21),t&2){let e=c(6).$implicit,i=c();a("styleClass","p-panelmenu-submenu-icon")("ngStyle",i.getItemProp(e,"iconStyle"))}}function fh(t,o){if(t&1&&u(0,"AngleRightIcon",21),t&2){let e=c(6).$implicit,i=c();a("styleClass","p-panelmenu-submenu-icon")("ngStyle",i.getItemProp(e,"iconStyle"))}}function gh(t,o){if(t&1&&(q(0),m(1,hh,1,2,"AngleDownIcon",20)(2,fh,1,2,"AngleRightIcon",20),F()),t&2){let e=c(5).$implicit,i=c();s(),a("ngIf",i.isItemActive(e)),s(),a("ngIf",!i.isItemActive(e))}}function _h(t,o){}function bh(t,o){t&1&&m(0,_h,0,0,"ng-template")}function vh(t,o){if(t&1&&(q(0),m(1,gh,3,2,"ng-container",10)(2,bh,1,0,null,19),F()),t&2){let e=c(5);s(),a("ngIf",!e.panelMenu.submenuIconTemplate&&!e.panelMenu._submenuIconTemplate),s(),a("ngTemplateOutlet",e.panelMenu.submenuIconTemplate||e.panelMenu._submenuIconTemplate)}}function yh(t,o){if(t&1&&u(0,"span",22),t&2){let e=c(4).$implicit,i=c();a("ngClass",e.icon)("ngStyle",i.getItemProp(e,"iconStyle"))}}function Ch(t,o){if(t&1&&(p(0,"span",23),C(1),d()),t&2){let e=c(4).$implicit,i=c();s(),B(i.getItemProp(e,"label"))}}function xh(t,o){if(t&1&&u(0,"span",24),t&2){let e=c(4).$implicit,i=c();a("innerHTML",i.getItemProp(e,"label"),ot)}}function wh(t,o){if(t&1&&(p(0,"span",25),C(1),d()),t&2){let e=c(4).$implicit;a("ngClass",e.badgeStyleClass),s(),B(e.badge)}}function Ih(t,o){if(t&1&&(p(0,"a",15),m(1,vh,3,2,"ng-container",10)(2,yh,1,2,"span",16)(3,Ch,2,1,"span",17)(4,xh,1,1,"ng-template",null,1,A)(6,wh,2,2,"span",18),d()),t&2){let e=K(5),i=c(3).$implicit,n=c();a("ngClass",H(10,na,n.getItemProp(i,"disabled")))("target",n.getItemProp(i,"target")),b("href",n.getItemProp(i,"url"),$e)("data-pc-section","action")("tabindex",n.parentExpanded?"0":"-1"),s(),a("ngIf",n.isItemGroup(i)),s(),a("ngIf",i.icon),s(),a("ngIf",(i.item==null?null:i.item.escape)!==!1)("ngIfElse",e),s(3),a("ngIf",i.badge)}}function Th(t,o){if(t&1&&u(0,"AngleDownIcon",21),t&2){let e=c(6).$implicit,i=c();a("styleClass","p-panelmenu-submenu-icon")("ngStyle",i.getItemProp(e,"iconStyle"))}}function Sh(t,o){if(t&1&&u(0,"AngleRightIcon",21),t&2){let e=c(6).$implicit,i=c();a("styleClass","p-panelmenu-submenu-icon")("ngStyle",i.getItemProp(e,"iconStyle"))}}function kh(t,o){if(t&1&&(q(0),m(1,Th,1,2,"AngleDownIcon",20)(2,Sh,1,2,"AngleRightIcon",20),F()),t&2){let e=c(5).$implicit,i=c();s(),a("ngIf",i.isItemActive(e)),s(),a("ngIf",!i.isItemActive(e))}}function Oh(t,o){}function Mh(t,o){t&1&&m(0,Oh,0,0,"ng-template")}function Eh(t,o){if(t&1&&(q(0),m(1,kh,3,2,"ng-container",10)(2,Mh,1,0,null,19),F()),t&2){let e=c(5);s(),a("ngIf",!e.panelMenu.submenuIconTemplate&&!e.panelMenu._submenuIconTemplate),s(),a("ngTemplateOutlet",e.panelMenu.submenuIconTemplate&&e.panelMenu._submenuIconTemplate)}}function qh(t,o){if(t&1&&u(0,"span",22),t&2){let e=c(4).$implicit,i=c();a("ngClass",e.icon)("ngStyle",i.getItemProp(e,"iconStyle"))}}function Fh(t,o){if(t&1&&(p(0,"span",23),C(1),d()),t&2){let e=c(4).$implicit,i=c();s(),B(i.getItemProp(e,"label"))}}function Ph(t,o){if(t&1&&u(0,"span",24),t&2){let e=c(4).$implicit,i=c();a("innerHTML",i.getItemProp(e,"label"),ot)}}function Vh(t,o){if(t&1&&(p(0,"span",25),C(1),d()),t&2){let e=c(4).$implicit,i=c();a("ngClass",i.getItemProp(e,"badgeStyleClass")),s(),B(i.getItemProp(e,"badge"))}}function Dh(t,o){if(t&1&&(p(0,"a",26),m(1,Eh,3,2,"ng-container",10)(2,qh,1,2,"span",16)(3,Fh,2,1,"span",17)(4,Ph,1,1,"ng-template",null,2,A)(6,Vh,2,2,"span",18),d()),t&2){let e=K(5),i=c(3).$implicit,n=c();a("routerLink",n.getItemProp(i,"routerLink"))("queryParams",n.getItemProp(i,"queryParams"))("routerLinkActive","p-panelmenu-item-link-active")("routerLinkActiveOptions",n.getItemProp(i,"routerLinkActiveOptions")||ce(20,oa))("ngClass",H(21,na,n.getItemProp(i,"disabled")))("target",n.getItemProp(i,"target"))("fragment",n.getItemProp(i,"fragment"))("queryParamsHandling",n.getItemProp(i,"queryParamsHandling"))("preserveFragment",n.getItemProp(i,"preserveFragment"))("skipLocationChange",n.getItemProp(i,"skipLocationChange"))("replaceUrl",n.getItemProp(i,"replaceUrl"))("state",n.getItemProp(i,"state")),b("title",n.getItemProp(i,"title"))("data-pc-section","action")("tabindex",n.parentExpanded?"0":"-1"),s(),a("ngIf",n.isItemGroup(i)),s(),a("ngIf",i.icon),s(),a("ngIf",n.getItemProp(i,"escape")!==!1)("ngIfElse",e),s(3),a("ngIf",i.badge)}}function Lh(t,o){if(t&1&&(q(0),m(1,Ih,7,12,"a",13)(2,Dh,7,23,"a",14),F()),t&2){let e=c(2).$implicit,i=c();s(),a("ngIf",!i.getItemProp(e,"routerLink")),s(),a("ngIf",i.getItemProp(e,"routerLink"))}}function zh(t,o){}function $h(t,o){t&1&&m(0,zh,0,0,"ng-template")}function Rh(t,o){if(t&1&&(q(0),m(1,$h,1,0,null,27),F()),t&2){let e=c(2).$implicit,i=c();s(),a("ngTemplateOutlet",i.itemTemplate)("ngTemplateOutletContext",H(2,ra,e.item))}}function Ah(t,o){if(t&1){let e=T();p(0,"p-panelmenu-sub",28),_("itemToggle",function(n){f(e);let r=c(3);return g(r.onItemToggle(n))}),d()}if(t&2){let e=c(2).$implicit,i=c();a("id",i.getItemId(e)+"_list")("panelId",i.panelId)("items",e==null?null:e.items)("itemTemplate",i.itemTemplate)("transitionOptions",i.transitionOptions)("focusedItemId",i.focusedItemId)("activeItemPath",i.activeItemPath)("level",i.level+1)("parentExpanded",!!i.parentExpanded&&i.isItemExpanded(e))}}function Bh(t,o){if(t&1){let e=T();p(0,"li",8)(1,"div",9),_("click",function(n){f(e);let r=c().$implicit,l=c();return g(l.onItemClick(n,r))}),m(2,Lh,3,2,"ng-container",10)(3,Rh,2,4,"ng-container",10),d(),p(4,"div",11),m(5,Ah,1,9,"p-panelmenu-sub",12),d()()}if(t&2){let e=c(),i=e.$implicit,n=e.index,r=c();k(r.getItemProp(i,"styleClass")),ve("p-hidden",i.visible===!1)("p-focus",r.isItemFocused(i)&&!r.isItemDisabled(i)),a("ngClass",r.getItemClass(i))("ngStyle",r.getItemProp(i,"style"))("pTooltip",r.getItemProp(i,"tooltip"))("tooltipOptions",r.getItemProp(i,"tooltipOptions")),b("id",r.getItemId(i))("aria-label",r.getItemProp(i,"label"))("aria-expanded",r.isItemGroup(i)?r.isItemActive(i):void 0)("aria-level",r.level+1)("aria-setsize",r.getAriaSetSize())("aria-posinset",r.getAriaPosInset(n))("data-p-disabled",r.isItemDisabled(i)),s(2),a("ngIf",!r.itemTemplate),s(),a("ngIf",r.itemTemplate),s(),a("@submenu",r.getAnimation(i)),s(),a("ngIf",r.isItemVisible(i)&&r.isItemGroup(i)&&r.isItemExpanded(i))}}function Hh(t,o){if(t&1&&m(0,uh,1,0,"li",5)(1,Bh,6,21,"li",6),t&2){let e=o.$implicit,i=c();a("ngIf",e.separator),s(),a("ngIf",!e.separator&&i.isItemVisible(e))}}var Uh=["submenu"],Nh=["submenuicon"],jh=["item"],Qh=["container"],Wh=(t,o)=>({"p-component p-panelmenu-header":!0,"p-panelmenu-header-active":t,"p-disabled":o}),Kh=t=>({"p-panelmenu-expanded":t});function Gh(t,o){t&1&&u(0,"ChevronDownIcon",20),t&2&&a("styleClass","p-panelmenu-submenu-icon")}function Zh(t,o){t&1&&u(0,"ChevronRightIcon",20),t&2&&a("styleClass","p-panelmenu-submenu-icon")}function Yh(t,o){if(t&1&&(q(0),m(1,Gh,1,1,"ChevronDownIcon",19)(2,Zh,1,1,"ChevronRightIcon",19),F()),t&2){let e=c(5).$implicit,i=c();s(),a("ngIf",i.isItemActive(e)),s(),a("ngIf",!i.isItemActive(e))}}function Xh(t,o){}function Jh(t,o){t&1&&m(0,Xh,0,0,"ng-template")}function ef(t,o){if(t&1&&(q(0),m(1,Yh,3,2,"ng-container",9)(2,Jh,1,0,null,18),F()),t&2){let e=c(5);s(),a("ngIf",!e.submenuIconTemplate&&!e._submenuIconTemplate),s(),a("ngTemplateOutlet",e.submenuIconTemplate||e._submenuIconTemplate)}}function tf(t,o){if(t&1&&u(0,"span",21),t&2){let e=c(4).$implicit,i=c();a("ngClass",e.icon)("ngStyle",i.getItemProp(e,"iconStyle"))}}function nf(t,o){if(t&1&&(p(0,"span",22),C(1),d()),t&2){let e=c(4).$implicit,i=c();s(),B(i.getItemProp(e,"label"))}}function of(t,o){if(t&1&&u(0,"span",23),t&2){let e=c(4).$implicit,i=c();a("innerHTML",i.getItemProp(e,"label"),ot)}}function rf(t,o){if(t&1&&(p(0,"span",24),C(1),d()),t&2){let e=c(4).$implicit,i=c();a("ngClass",i.getItemProp(e,"badgeStyleClass")),s(),B(i.getItemProp(e,"badge"))}}function af(t,o){if(t&1&&(p(0,"a",14),m(1,ef,3,2,"ng-container",9)(2,tf,1,2,"span",15)(3,nf,2,1,"span",16)(4,of,1,1,"ng-template",null,1,A)(6,rf,2,2,"span",17),d()),t&2){let e=K(5),i=c(3).$implicit,n=c();a("target",n.getItemProp(i,"target")),b("href",n.getItemProp(i,"url"),$e)("tabindex",-1)("title",n.getItemProp(i,"title"))("data-pc-section","headeraction"),s(),a("ngIf",n.isItemGroup(i)),s(),a("ngIf",i.icon),s(),a("ngIf",n.getItemProp(i,"escape")!==!1)("ngIfElse",e),s(3),a("ngIf",n.getItemProp(i,"badge"))}}function sf(t,o){if(t&1&&(q(0),m(1,af,7,10,"a",13),F()),t&2){let e=c(2).$implicit,i=c();s(),a("ngIf",!i.getItemProp(e,"routerLink"))}}function lf(t,o){t&1&&R(0)}function cf(t,o){t&1&&u(0,"ChevronDownIcon",20),t&2&&a("styleClass","p-panelmenu-submenu-icon")}function pf(t,o){t&1&&u(0,"ChevronRightIcon",20),t&2&&a("styleClass","p-panelmenu-submenu-icon")}function df(t,o){if(t&1&&(q(0),m(1,cf,1,1,"ChevronDownIcon",19)(2,pf,1,1,"ChevronRightIcon",19),F()),t&2){let e=c(4).$implicit,i=c();s(),a("ngIf",i.isItemActive(e)),s(),a("ngIf",!i.isItemActive(e))}}function mf(t,o){}function uf(t,o){t&1&&m(0,mf,0,0,"ng-template")}function hf(t,o){if(t&1&&(q(0),m(1,df,3,2,"ng-container",9)(2,uf,1,0,null,18),F()),t&2){let e=c(4);s(),a("ngIf",!e.submenuIconTemplate&&!e._submenuIconTemplate),s(),a("ngTemplateOutlet",e.submenuIconTemplate||e._submenuIconTemplate)}}function ff(t,o){if(t&1&&u(0,"span",21),t&2){let e=c(3).$implicit,i=c();a("ngClass",e.icon)("ngStyle",i.getItemProp(e,"iconStyle"))}}function gf(t,o){if(t&1&&(p(0,"span",22),C(1),d()),t&2){let e=c(3).$implicit,i=c();s(),B(i.getItemProp(e,"label"))}}function _f(t,o){if(t&1&&u(0,"span",23),t&2){let e=c(3).$implicit,i=c();a("innerHTML",i.getItemProp(e,"label"),ot)}}function bf(t,o){if(t&1&&(p(0,"span",24),C(1),d()),t&2){let e=c(3).$implicit,i=c();a("ngClass",i.getItemProp(e,"badgeStyleClass")),s(),B(i.getItemProp(e,"badge"))}}function vf(t,o){if(t&1&&(p(0,"a",25),m(1,hf,3,2,"ng-container",9)(2,ff,1,2,"span",15)(3,gf,2,1,"span",16)(4,_f,1,1,"ng-template",null,2,A)(6,bf,2,2,"span",17),d()),t&2){let e=K(5),i=c(2).$implicit,n=c();a("routerLink",n.getItemProp(i,"routerLink"))("queryParams",n.getItemProp(i,"queryParams"))("routerLinkActive","p-panelmenu-item-link-active")("routerLinkActiveOptions",n.getItemProp(i,"routerLinkActiveOptions")||ce(18,oa))("target",n.getItemProp(i,"target"))("fragment",n.getItemProp(i,"fragment"))("queryParamsHandling",n.getItemProp(i,"queryParamsHandling"))("preserveFragment",n.getItemProp(i,"preserveFragment"))("skipLocationChange",n.getItemProp(i,"skipLocationChange"))("replaceUrl",n.getItemProp(i,"replaceUrl"))("state",n.getItemProp(i,"state")),b("tabindex",-1)("data-pc-section","headeraction"),s(),a("ngIf",n.isItemGroup(i)),s(),a("ngIf",i.icon),s(),a("ngIf",n.getItemProp(i,"escape")!==!1)("ngIfElse",e),s(3),a("ngIf",n.getItemProp(i,"badge"))}}function yf(t,o){if(t&1){let e=T();p(0,"div",26),_("@rootItem.done",function(){f(e);let n=c(3);return g(n.onToggleDone())}),p(1,"div",27)(2,"p-panelMenuList",28),_("headerFocus",function(n){f(e);let r=c(3);return g(r.updateFocusedHeader(n))}),d()()()}if(t&2){let e=c(2),i=e.$implicit,n=e.index,r=c();a("@rootItem",r.getAnimation(i))("ngClass",H(14,Kh,r.isItemActive(i))),b("id",r.getContentId(i,n))("aria-labelledby",r.getHeaderId(i,n))("data-pc-section","toggleablecontent"),s(),b("data-pc-section","menucontent"),s(),a("panelId",r.getPanelId(n,i))("items",r.getItemProp(i,"items"))("itemTemplate",r.itemTemplate||r._itemTemplate)("transitionOptions",r.transitionOptions)("root",!0)("activeItem",r.activeItem())("tabindex",r.tabindex)("parentExpanded",r.isItemActive(i))}}function Cf(t,o){if(t&1){let e=T();p(0,"div",6)(1,"div",7),_("click",function(n){f(e);let r=c(),l=r.$implicit,h=r.index,w=c();return g(w.onHeaderClick(n,l,h))})("keydown",function(n){f(e);let r=c(),l=r.$implicit,h=r.index,w=c();return g(w.onHeaderKeyDown(n,l,h))}),p(2,"div",8),m(3,sf,2,1,"ng-container",9)(4,lf,1,0,"ng-container",10)(5,vf,7,19,"a",11),d()(),m(6,yf,3,16,"div",12),d()}if(t&2){let e=c(),i=e.$implicit,n=e.index,r=c();a("ngClass",r.getItemProp(i,"headerClass"))("ngStyle",r.getItemProp(i,"style")),b("data-pc-section","panel"),s(),k(r.getItemProp(i,"styleClass")),a("ngClass",re(23,Wh,r.isItemActive(i)&&!!i.items,r.isItemDisabled(i)))("ngStyle",r.getItemProp(i,"style"))("pTooltip",r.getItemProp(i,"tooltip"))("tabindex",0)("tooltipOptions",r.getItemProp(i,"tooltipOptions")),b("id",r.getHeaderId(i,n))("aria-expanded",r.isItemActive(i))("aria-label",r.getItemProp(i,"label"))("aria-controls",r.getContentId(i,n))("aria-disabled",r.isItemDisabled(i))("data-p-highlight",r.isItemActive(i))("data-p-disabled",r.isItemDisabled(i))("data-pc-section","header"),s(2),a("ngIf",!r.itemTemplate&&!r._itemTemplate),s(),a("ngTemplateOutlet",r.itemTemplate)("ngTemplateOutletContext",H(26,ra,i)),s(),a("ngIf",r.getItemProp(i,"routerLink")),s(),a("ngIf",r.isItemGroup(i))}}function xf(t,o){if(t&1&&(q(0),m(1,Cf,7,28,"div",5),F()),t&2){let e=o.$implicit,i=c();s(),a("ngIf",i.isItemVisible(e))}}var wf=({dt:t})=>`
.p-panelmenu {
    display: flex;
    flex-direction: column;
    gap: ${t("panelmenu.gap")};
}

.p-panelmenu-panel {
    background: ${t("panelmenu.panel.background")};
    border-width: ${t("panelmenu.panel.border.width")};
    border-style: solid;
    border-color: ${t("panelmenu.panel.border.color")};
    color: ${t("panelmenu.panel.color")};
    border-radius: ${t("panelmenu.panel.border.radius")};
    padding: ${t("panelmenu.panel.padding")};
}

.p-panelmenu-panel:first-child {
    border-width: ${t("panelmenu.panel.first.border.width")};
    border-start-start-radius: ${t("panelmenu.panel.first.top.border.radius")};
    border-start-end-radius: ${t("panelmenu.panel.first.top.border.radius")};
}

.p-panelmenu-panel:last-child {
    border-width: ${t("panelmenu.panel.last.border.width")};
    border-end-start-radius: ${t("panelmenu.panel.last.bottom.border.radius")};
    border-end-end-radius: ${t("panelmenu.panel.last.bottom.border.radius")};
}

.p-panelmenu-header {
    outline: 0 none;
}

.p-panelmenu-header-content {
    border-radius: ${t("panelmenu.item.border.radius")};
    transition: background ${t("panelmenu.transition.duration")}, color ${t("panelmenu.transition.duration")}, outline-color ${t("panelmenu.transition.duration")}, box-shadow ${t("panelmenu.transition.duration")};
    outline-color: transparent;
    color: ${t("panelmenu.item.color")};
}

.p-panelmenu-header-link {
    display: flex;
    gap: ${t("panelmenu.item.gap")};
    padding: ${t("panelmenu.item.padding")};
    align-items: center;
    user-select: none;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    color: inherit;
}

.p-panelmenu-header-icon,
.p-panelmenu-item-icon {
    color: ${t("panelmenu.item.icon.color")};
}

.p-panelmenu-submenu-icon {
    color: ${t("panelmenu.submenu.icon.color")};
}

.p-panelmenu-header:not(.p-panelmenu-header-active)  .p-panelmenu-header-content .p-panelmenu-submenu-icon:dir(rtl) {
    transform: rotate(180deg);
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content {
    background: ${t("panelmenu.item.focus.background")};
    color: ${t("panelmenu.item.focus.color")};
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-header-icon {
    color: ${t("panelmenu.item.icon.focus.color")};
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-submenu-icon {
    color: ${t("panelmenu.submenu.icon.focus.color")};
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover {
    background: ${t("panelmenu.item.focus.background")};
    color: ${t("panelmenu.item.focus.color")};
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-header-icon {
    color: ${t("panelmenu.item.icon.focus.color")};
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-submenu-icon {
    color: ${t("panelmenu.submenu.icon.focus.color")};
}

.p-panelmenu-submenu {
    margin: 0;
    padding: 0 0 0 ${t("panelmenu.submenu.indent")};
    outline: 0;
    list-style: none;
}

.p-panelmenu-submenu:dir(rtl) {
    padding: 0 ${t("panelmenu.submenu.indent")} 0 0;
}

.p-panelmenu-item-link {
    display: flex;
    gap: ${t("panelmenu.item.gap")};
    padding: ${t("panelmenu.item.padding")};
    align-items: center;
    user-select: none;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    position: relative;
    overflow: hidden;
}

.p-panelmenu-item-label {
    line-height: 1;
}

.p-panelmenu-item-content {
    border-radius: ${t("panelmenu.item.border.radius")};
    transition: background ${t("panelmenu.transition.duration")}, color ${t("panelmenu.transition.duration")}, outline-color ${t("panelmenu.transition.duration")}, box-shadow ${t("panelmenu.transition.duration")};
    color: ${t("panelmenu.item.color")};
    outline-color: transparent;
}

.p-panelmenu-item.p-focus > .p-panelmenu-item-content {
    background: ${t("panelmenu.item.focus.background")};
    color: ${t("panelmenu.item.focus.color")};
}

.p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-item-icon {
    color: ${t("panelmenu.item.focus.color")};
}

.p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-submenu-icon {
    color: ${t("panelmenu.submenu.icon.focus.color")};
}

.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover {
    background: ${t("panelmenu.item.focus.background")};
    color: ${t("panelmenu.item.focus.color")};
}

.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-item-icon {
    color: ${t("panelmenu.item.icon.focus.color")};
}

.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-submenu-icon {
    color: ${t("panelmenu.submenu.icon.focus.color")};
}


/*For PrimeNG*/

.p-panelmenu-item:not(.ng-animating) {
    overflow: hidden;
}

.p-panelmenu-panel {
    overflow: hidden;
}

`,If={root:"p-panelmenu p-component",panel:"p-panelmenu-panel",header:({instance:t,item:o})=>["p-panelmenu-header",{"p-panelmenu-header-active":t.isItemActive(o)&&!!o.items,"p-disabled":t.isItemDisabled(o)}],headerContent:"p-panelmenu-header-content",headerLink:"p-panelmenu-header-link",headerIcon:"p-panelmenu-header-icon",headerLabel:"p-panelmenu-header-label",contentContainer:"p-panelmenu-content-container",content:"p-panelmenu-content",rootList:"p-panelmenu-root-list",item:({instance:t,processedItem:o})=>["p-panelmenu-item",{"p-focus":t.isItemFocused(o),"p-disabled":t.isItemDisabled(o)}],itemContent:"p-panelmenu-item-content",itemLink:"p-panelmenu-item-link",itemIcon:"p-panelmenu-item-icon",itemLabel:"p-panelmenu-item-label",submenuIcon:"p-panelmenu-submenu-icon",submenu:"p-panelmenu-submenu",separator:"p-menuitem-separator"},ia=(()=>{class t extends Y{name="panelmenu";theme=wf;classes=If;static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var Tf=(()=>{class t extends Q{panelId;focusedItemId;items;itemTemplate;level=0;activeItemPath;root;tabindex;transitionOptions;parentExpanded;itemToggle=new I;menuFocus=new I;menuBlur=new I;menuKeyDown=new I;listViewChild;panelMenu=j(yt(()=>Rn));getItemId(e){return e.item?.id??`${this.panelId}_${e.key}`}getItemKey(e){return this.getItemId(e)}getItemClass(e){return{"p-panelmenu-item":!0,"p-disabled":this.isItemDisabled(e),"p-focus":this.isItemFocused(e)}}getItemProp(e,i,n){return e&&e.item?Ni(e.item[i],n):void 0}getItemLabel(e){return this.getItemProp(e,"label")}isItemExpanded(e){return e.expanded}isItemActive(e){return this.isItemExpanded(e)||this.activeItemPath.some(i=>i&&i.key===e.key)}isItemVisible(e){return this.getItemProp(e,"visible")!==!1}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemFocused(e){return this.focusedItemId===this.getItemId(e)}isItemGroup(e){return we(e.items)}getAnimation(e){return this.isItemActive(e)?{value:"visible",params:{transitionParams:this.transitionOptions,height:"*"}}:{value:"hidden",params:{transitionParams:this.transitionOptions,height:"0"}}}getAriaSetSize(){return this.items.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length}getAriaPosInset(e){return e-this.items.slice(0,e).filter(i=>this.isItemVisible(i)&&this.getItemProp(i,"separator")).length+1}onItemClick(e,i){this.isItemDisabled(i)||(this.getItemProp(i,"command",{originalEvent:e,item:i.item}),this.itemToggle.emit({processedItem:i,expanded:!this.isItemActive(i)}))}onItemToggle(e){this.itemToggle.emit(e)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-panelMenuSub"],["p-panelmenu-sub"]],viewQuery:function(i,n){if(i&1&&$(dh,5),i&2){let r;v(r=y())&&(n.listViewChild=r.first)}},inputs:{panelId:"panelId",focusedItemId:"focusedItemId",items:"items",itemTemplate:"itemTemplate",level:[2,"level","level",fe],activeItemPath:"activeItemPath",root:[2,"root","root",P],tabindex:[2,"tabindex","tabindex",fe],transitionOptions:"transitionOptions",parentExpanded:[2,"parentExpanded","parentExpanded",P]},outputs:{itemToggle:"itemToggle",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeyDown:"menuKeyDown"},features:[E],decls:3,vars:7,consts:[["list",""],["htmlLabel",""],["htmlRouteLabel",""],["role","tree",3,"focusin","focusout","keydown","ngClass","tabindex"],["ngFor","",3,"ngForOf"],["class","p-menuitem-separator","role","separator",4,"ngIf"],["role","treeitem",3,"ngClass","class","p-hidden","p-focus","ngStyle","pTooltip","tooltipOptions",4,"ngIf"],["role","separator",1,"p-menuitem-separator"],["role","treeitem",3,"ngClass","ngStyle","pTooltip","tooltipOptions"],[1,"p-panelmenu-item-content",3,"click"],[4,"ngIf"],[1,"p-toggleable-content"],[3,"id","panelId","items","itemTemplate","transitionOptions","focusedItemId","activeItemPath","level","parentExpanded","itemToggle",4,"ngIf"],["class","p-panelmenu-item-link",3,"ngClass","target",4,"ngIf"],["class","p-panelmenu-item-link",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","ngClass","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],[1,"p-panelmenu-item-link",3,"ngClass","target"],["class","p-panelmenu-submenu-icon",3,"ngClass","ngStyle",4,"ngIf"],["class","p-panelmenu-item-label",4,"ngIf","ngIfElse"],["class","p-menuitem-badge",3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet"],[3,"styleClass","ngStyle",4,"ngIf"],[3,"styleClass","ngStyle"],[1,"p-panelmenu-submenu-icon",3,"ngClass","ngStyle"],[1,"p-panelmenu-item-label"],[1,"p-panelmenu-item-label",3,"innerHTML"],[1,"p-menuitem-badge",3,"ngClass"],[1,"p-panelmenu-item-link",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","ngClass","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"itemToggle","id","panelId","items","itemTemplate","transitionOptions","focusedItemId","activeItemPath","level","parentExpanded"]],template:function(i,n){if(i&1){let r=T();p(0,"ul",3,0),_("focusin",function(h){return f(r),g(n.menuFocus.emit(h))})("focusout",function(h){return f(r),g(n.menuBlur.emit(h))})("keydown",function(h){return f(r),g(n.menuKeyDown.emit(h))}),m(2,Hh,2,2,"ng-template",4),d()}i&2&&(a("ngClass",ce(6,mh))("tabindex",-1),b("aria-activedescendant",n.focusedItemId)("data-pc-section","menu")("aria-hidden",!n.parentExpanded),s(2),a("ngForOf",n.items))},dependencies:[t,U,ie,Ve,Z,ae,ke,_t,rt,Tn,en,ki,tr,ir,V],encapsulation:2,data:{animation:[st("submenu",[xi("hidden",Be({height:"0"})),xi("visible",Be({height:"*"})),He("visible <=> hidden",[Ae("{{transitionParams}}")]),He("void => *",Ae(0))])]}})}return t})(),Sf=(()=>{class t extends Q{panelId;id;items;itemTemplate;parentExpanded;expanded;transitionOptions;root;tabindex;activeItem;itemToggle=new I;headerFocus=new I;subMenuViewChild;searchTimeout;searchValue;focused;focusedItem=Me(null);activeItemPath=Me([]);processedItems=Me([]);visibleItems=Wt(()=>{let e=this.processedItems();return this.flatItems(e)});get focusedItemId(){let e=this.focusedItem();return e&&e.item?.id?e.item.id:we(this.focusedItem())?`${this.panelId}_${this.focusedItem().key}`:void 0}ngOnChanges(e){this.processedItems.set(this.createProcessedItems(e?.items?.currentValue||this.items||[]))}getItemProp(e,i){return e&&e.item?Ni(e.item[i]):void 0}getItemLabel(e){return this.getItemProp(e,"label")}isItemVisible(e){return this.getItemProp(e,"visible")!==!1}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemActive(e){return this.activeItemPath().some(i=>i.key===e.parentKey)}isItemGroup(e){return we(e.items)}isElementInPanel(e,i){let n=e.currentTarget.closest('[data-pc-section="panel"]');return n&&n.contains(i)}isItemMatched(e){return this.isValidItem(e)&&this.getItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isVisibleItem(e){return!!e&&(e.level===0||this.isItemActive(e))&&this.isItemVisible(e)}isValidItem(e){return!!e&&!this.isItemDisabled(e)&&!e.separator}findFirstItem(){return this.visibleItems().find(e=>this.isValidItem(e))}findLastItem(){return On(this.visibleItems(),e=>this.isValidItem(e))}findItemByEventTarget(e){let i=e;for(;i&&i.tagName?.toLowerCase()!=="li";)i=i?.parentNode;return i?.id&&this.visibleItems().find(n=>this.isValidItem(n)&&`${this.panelId}_${n.key}`===i.id)}createProcessedItems(e,i=0,n={},r=""){let l=[];return e&&e.forEach((h,w)=>{let D=(r!==""?r+"_":"")+w,N={icon:h.icon,expanded:h.expanded,separator:h.separator,item:h,index:w,level:i,key:D,parent:n,parentKey:r};N.items=this.createProcessedItems(h.items,i+1,N,D),l.push(N)}),l}findProcessedItemByItemKey(e,i,n=0){if(i=i||this.processedItems(),i&&i.length)for(let r=0;r<i.length;r++){let l=i[r];if(this.getItemProp(l,"key")===e)return l;let h=this.findProcessedItemByItemKey(e,l.items,n+1);if(h)return h}}flatItems(e,i=[]){return e&&e.forEach(n=>{this.isVisibleItem(n)&&(i.push(n),this.flatItems(n.items,i))}),i}changeFocusedItem(e){let{originalEvent:i,processedItem:n,focusOnNext:r,selfCheck:l,allowHeaderFocus:h=!0}=e;we(this.focusedItem())&&this.focusedItem().key!==n.key?(this.focusedItem.set(n),this.scrollInView()):h&&this.headerFocus.emit({originalEvent:i,focusOnNext:r,selfCheck:l})}scrollInView(){let e=Ce(this.subMenuViewChild.listViewChild.nativeElement,`li[id="${`${this.focusedItemId}`}"]`);e&&e.scrollIntoView&&e.scrollIntoView({block:"nearest",inline:"nearest"})}onFocus(e){if(!this.focused){this.focused=!0;let i=this.focusedItem()||(this.isElementInPanel(e,e.relatedTarget)?this.findItemByEventTarget(e.target)||this.findFirstItem():this.findLastItem());e.relatedTarget!==null&&this.focusedItem.set(i)}}onBlur(e){let i=e.relatedTarget;this.focused&&!this.el.nativeElement.contains(i)&&(this.focused=!1,this.focusedItem.set(null),this.searchValue="")}onItemToggle(e){let{processedItem:i,expanded:n}=e;i.item&&(i.item.expanded=!i.item.expanded),this.processedItems.set(this.createProcessedItems(this.items||[],0,{},""));let r=this.activeItemPath().filter(l=>l.parentKey!==i.parentKey);n&&r.push(i),this.activeItemPath.set(r),this.focusedItem.set(i)}onKeyDown(e){let i=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":case"Tab":case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!i&&ji(e.key)&&this.searchItems(e,e.key);break}}onArrowDownKey(e){let i=we(this.focusedItem())?this.findNextItem(this.focusedItem()):this.findFirstItem();this.changeFocusedItem({originalEvent:e,processedItem:i,focusOnNext:!0}),e.preventDefault()}onArrowUpKey(e){let i=we(this.focusedItem())?this.findPrevItem(this.focusedItem()):this.findLastItem();this.changeFocusedItem({originalEvent:e,processedItem:i,selfCheck:!0}),e.preventDefault()}onArrowLeftKey(e){if(we(this.focusedItem())){if(this.activeItemPath().some(n=>n.key===this.focusedItem().key)){let n=this.activeItemPath().filter(r=>r.key!==this.focusedItem().key);this.activeItemPath.set(n)}else{let n=we(this.focusedItem().parent)?this.focusedItem().parent:this.focusedItem();this.focusedItem.set(n)}e.preventDefault()}}onArrowRightKey(e){if(we(this.focusedItem())){if(this.isItemGroup(this.focusedItem()))if(this.activeItemPath().some(r=>r.key===this.focusedItem().key))this.onArrowDownKey(e);else{let r=this.activeItemPath().filter(l=>l.parentKey!==this.focusedItem().parentKey);r.push(this.focusedItem()),this.activeItemPath.set(r)}e.preventDefault()}}onHomeKey(e){this.changeFocusedItem({originalEvent:e,processedItem:this.findFirstItem(),allowHeaderFocus:!1}),e.preventDefault()}onEndKey(e){this.changeFocusedItem({originalEvent:e,processedItem:this.findLastItem(),focusOnNext:!0,allowHeaderFocus:!1}),e.preventDefault()}onEnterKey(e){if(we(this.focusedItem())){let i=Ce(this.subMenuViewChild.listViewChild.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),n=i&&(Ce(i,'[data-pc-section="action"]')||Ce(i,"a,button"));n?n.click():i&&i.click()}e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}findNextItem(e){let i=this.visibleItems().findIndex(r=>r.key===e.key);return(i<this.visibleItems().length-1?this.visibleItems().slice(i+1).find(r=>this.isValidItem(r)):void 0)||e}findPrevItem(e){let i=this.visibleItems().findIndex(r=>r.key===e.key);return(i>0?On(this.visibleItems().slice(0,i),r=>this.isValidItem(r)):void 0)||e}searchItems(e,i){this.searchValue=(this.searchValue||"")+i;let n=null,r=!1;if(we(this.focusedItem())){let l=this.visibleItems().findIndex(h=>h.key===this.focusedItem().key);n=this.visibleItems().slice(l).find(h=>this.isItemMatched(h)),n=Ui(n)?this.visibleItems().slice(0,l).find(h=>this.isItemMatched(h)):n}else n=this.visibleItems().find(l=>this.isItemMatched(l));return we(n)&&(r=!0),Ui(n)&&Ui(this.focusedItem())&&(n=this.findFirstItem()),we(n)&&this.changeFocusedItem({originalEvent:e,processedItem:n,allowHeaderFocus:!1}),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),r}static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-panelMenuList"],["p-panel-menu-list"]],viewQuery:function(i,n){if(i&1&&$(Uh,5),i&2){let r;v(r=y())&&(n.subMenuViewChild=r.first)}},inputs:{panelId:"panelId",id:"id",items:"items",itemTemplate:"itemTemplate",parentExpanded:[2,"parentExpanded","parentExpanded",P],expanded:[2,"expanded","expanded",P],transitionOptions:"transitionOptions",root:[2,"root","root",P],tabindex:[2,"tabindex","tabindex",fe],activeItem:"activeItem"},outputs:{itemToggle:"itemToggle",headerFocus:"headerFocus"},features:[E,Te],decls:2,vars:10,consts:[["submenu",""],[3,"itemToggle","keydown","menuFocus","menuBlur","root","id","panelId","tabindex","itemTemplate","focusedItemId","activeItemPath","transitionOptions","items","parentExpanded"]],template:function(i,n){if(i&1){let r=T();p(0,"p-panelmenu-sub",1,0),_("itemToggle",function(h){return f(r),g(n.onItemToggle(h))})("keydown",function(h){return f(r),g(n.onKeyDown(h))})("menuFocus",function(h){return f(r),g(n.onFocus(h))})("menuBlur",function(h){return f(r),g(n.onBlur(h))}),d()}i&2&&a("root",!0)("id",n.panelId+"_list")("panelId",n.panelId)("tabindex",n.tabindex)("itemTemplate",n.itemTemplate)("focusedItemId",n.focused?n.focusedItemId:void 0)("activeItemPath",n.activeItemPath())("transitionOptions",n.transitionOptions)("items",n.processedItems())("parentExpanded",n.parentExpanded)},dependencies:[U,Tf,_t,en,V],encapsulation:2,changeDetection:0})}return t})(),Rn=(()=>{class t extends Q{model;style;styleClass;multiple=!1;transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";id;tabindex=0;containerViewChild;submenuIconTemplate;itemTemplate;templates;_submenuIconTemplate;_itemTemplate;animating;activeItem=Me(null);_componentStyle=j(ia);ngOnInit(){super.ngOnInit(),this.id=this.id||De("pn_id_")}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"submenuicon":this._submenuIconTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}collapseAll(){for(let e of this.model)e.expanded&&(e.expanded=!1);this.cd.detectChanges()}onToggleDone(){this.animating=!1,this.cd.markForCheck()}changeActiveItem(e,i,n,r=!1){if(!this.isItemDisabled(i)){let l=r?i:this.activeItem&&bt(i,this.activeItem)?null:i;this.activeItem.set(l)}}getAnimation(e){return e.expanded?{value:"visible",params:{transitionParams:this.animating?this.transitionOptions:"0ms",height:"*"}}:{value:"hidden",params:{transitionParams:this.transitionOptions,height:"0"}}}getItemProp(e,i){return e?Ni(e[i]):void 0}getItemLabel(e){return this.getItemProp(e,"label")}isItemActive(e){return e.expanded}isItemVisible(e){return this.getItemProp(e,"visible")!==!1}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemGroup(e){return we(e.items)}getPanelId(e,i){return i&&i.id?i.id:`${this.id}_${e}`}getHeaderId(e,i){return e.id?e.id+"_header":`${this.getPanelId(i)}_header`}getContentId(e,i){return e.id?e.id+"_content":`${this.getPanelId(i)}_content`}updateFocusedHeader(e){let{originalEvent:i,focusOnNext:n,selfCheck:r}=e,l=i.currentTarget.closest('[data-pc-section="panel"]'),h=r?Ce(l,'[data-pc-section="header"]'):n?this.findNextHeader(l):this.findPrevHeader(l);h?this.changeFocusedHeader(i,h):n?this.onHeaderHomeKey(i):this.onHeaderEndKey(i)}changeFocusedHeader(e,i){i&&Re(i)}findNextHeader(e,i=!1){let n=i?e:e.nextElementSibling,r=Ce(n,'[data-pc-section="header"]');return r?bi(r,"data-p-disabled")?this.findNextHeader(r.parentElement):r:null}findPrevHeader(e,i=!1){let n=i?e:e.previousElementSibling,r=Ce(n,'[data-pc-section="header"]');return r?bi(r,"data-p-disabled")?this.findPrevHeader(r.parentElement):r:null}findFirstHeader(){return this.findNextHeader(this.containerViewChild.nativeElement.firstElementChild,!0)}findLastHeader(){return this.findPrevHeader(this.containerViewChild.nativeElement.lastElementChild,!0)}onHeaderClick(e,i,n){if(this.isItemDisabled(i)){e.preventDefault();return}if(i.command&&i.command({originalEvent:e,item:i}),!this.multiple)for(let r of this.model)i!==r&&r.expanded&&(r.expanded=!1);i.expanded=!i.expanded,this.changeActiveItem(e,i,n),this.animating=!0,Re(e.currentTarget)}onHeaderKeyDown(e,i,n){switch(e.code){case"ArrowDown":this.onHeaderArrowDownKey(e);break;case"ArrowUp":this.onHeaderArrowUpKey(e);break;case"Home":this.onHeaderHomeKey(e);break;case"End":this.onHeaderEndKey(e);break;case"Enter":case"Space":this.onHeaderEnterKey(e,i,n);break;default:break}}onHeaderArrowDownKey(e){let i=bi(e.currentTarget,"data-p-highlight")===!0?Ce(e.currentTarget.nextElementSibling,'[data-pc-section="menu"]'):null;i?Re(i):this.updateFocusedHeader({originalEvent:e,focusOnNext:!0}),e.preventDefault()}onHeaderArrowUpKey(e){let i=this.findPrevHeader(e.currentTarget.parentElement)||this.findLastHeader(),n=bi(i,"data-p-highlight")===!0?Ce(i.nextElementSibling,'[data-pc-section="menu"]'):null;n?Re(n):this.updateFocusedHeader({originalEvent:e,focusOnNext:!1}),e.preventDefault()}onHeaderHomeKey(e){this.changeFocusedHeader(e,this.findFirstHeader()),e.preventDefault()}onHeaderEndKey(e){this.changeFocusedHeader(e,this.findLastHeader()),e.preventDefault()}onHeaderEnterKey(e,i,n){let r=Ce(e.currentTarget,'[data-pc-section="headeraction"]');r?r.click():this.onHeaderClick(e,i,n),e.preventDefault()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-panelMenu"],["p-panelmenu"],["p-panel-menu"]],contentQueries:function(i,n,r){if(i&1&&(O(r,Nh,4),O(r,jh,4),O(r,se,4)),i&2){let l;v(l=y())&&(n.submenuIconTemplate=l.first),v(l=y())&&(n.itemTemplate=l.first),v(l=y())&&(n.templates=l)}},viewQuery:function(i,n){if(i&1&&$(Qh,5),i&2){let r;v(r=y())&&(n.containerViewChild=r.first)}},inputs:{model:"model",style:"style",styleClass:"styleClass",multiple:[2,"multiple","multiple",P],transitionOptions:"transitionOptions",id:"id",tabindex:[2,"tabindex","tabindex",fe]},features:[G([ia]),E],decls:3,vars:5,consts:[["container",""],["htmlLabel",""],["htmlRouteLabel",""],[3,"ngStyle","ngClass"],[4,"ngFor","ngForOf"],["class","p-panelmenu-panel",3,"ngClass","ngStyle",4,"ngIf"],[1,"p-panelmenu-panel",3,"ngClass","ngStyle"],["role","button",3,"click","keydown","ngClass","ngStyle","pTooltip","tabindex","tooltipOptions"],[1,"p-panelmenu-header-content"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","p-panelmenu-header-link",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state",4,"ngIf"],["class","p-panelmenu-content-container","role","region",3,"ngClass",4,"ngIf"],["class","p-panelmenu-header-link",3,"target",4,"ngIf"],[1,"p-panelmenu-header-link",3,"target"],["class","p-panelmenu-submenu-icon",3,"ngClass","ngStyle",4,"ngIf"],["class","p-panelmenu-header-label",4,"ngIf","ngIfElse"],["class","p-menuitem-badge",3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet"],[3,"styleClass",4,"ngIf"],[3,"styleClass"],[1,"p-panelmenu-submenu-icon",3,"ngClass","ngStyle"],[1,"p-panelmenu-header-label"],[1,"p-panelmenu-header-label",3,"innerHTML"],[1,"p-menuitem-badge",3,"ngClass"],[1,"p-panelmenu-header-link",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state"],["role","region",1,"p-panelmenu-content-container",3,"ngClass"],[1,"p-panelmenu-content"],[3,"headerFocus","panelId","items","itemTemplate","transitionOptions","root","activeItem","tabindex","parentExpanded"]],template:function(i,n){i&1&&(p(0,"div",3,0),m(2,xf,2,1,"ng-container",4),d()),i&2&&(k(n.styleClass),a("ngStyle",n.style)("ngClass","p-panelmenu p-component"),s(2),a("ngForOf",n.model))},dependencies:[U,ie,Ve,Z,ae,ke,Sf,_t,rt,Tn,en,ki,Xi,nr,V],encapsulation:2,data:{animation:[st("rootItem",[xi("hidden",Be({height:"0",visibility:"hidden"})),xi("visible",Be({height:"*",visibility:"*"})),He("visible <=> hidden",[Ae("{{transitionParams}}")]),He("void => *",Ae(0))])]},changeDetection:0})}return t})();var kf=["*"],Of={root:"p-avatar-group p-component"},aa=(()=>{class t extends Y{name="avatargroup";classes=Of;static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var Mf=(()=>{class t extends Q{styleClass;style;get hostClass(){return this.styleClass}get hostStyle(){return this.style}_componentStyle=j(aa);static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-avatarGroup"],["p-avatar-group"],["p-avatargroup"]],hostVars:8,hostBindings:function(i,n){i&2&&(oe(n.hostStyle),k(n.hostClass),ve("p-avatar-group",!0)("p-component",!0))},inputs:{styleClass:"styleClass",style:"style"},features:[G([aa]),E],ngContentSelectors:kf,decls:1,vars:0,template:function(i,n){i&1&&(he(),me(0))},dependencies:[U,V],encapsulation:2,changeDetection:0})}return t})(),sa=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=J({type:t});static \u0275inj=X({imports:[Mf,V,V]})}return t})();var Ef=({dt:t})=>`
.p-progressspinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.p-progressspinner::before {
    content: "";
    display: block;
    padding-top: 100%;
}

.p-progressspinner-spin {
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: p-progressspinner-rotate 2s linear infinite;
}

.p-progressspinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: ${t("progressspinner.colorOne")};
    animation: p-progressspinner-dash 1.5s ease-in-out infinite, p-progressspinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progressspinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes p-progressspinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
@keyframes p-progressspinner-color {
    100%,
    0% {
        stroke: ${t("progressspinner.colorOne")};
    }
    40% {
        stroke: ${t("progressspinner.colorTwo")};
    }
    66% {
        stroke: ${t("progressspinner.colorThree")};
    }
    80%,
    90% {
        stroke: ${t("progressspinner.colorFour")};
    }
}
`,qf={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},la=(()=>{class t extends Y{name="progressspinner";theme=Ef;classes=qf;static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var Ff=(()=>{class t extends Q{styleClass;style;strokeWidth="2";fill="none";animationDuration="2s";ariaLabel;_componentStyle=j(la);static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275cmp=x({type:t,selectors:[["p-progressSpinner"],["p-progress-spinner"],["p-progressspinner"]],inputs:{styleClass:"styleClass",style:"style",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",ariaLabel:"ariaLabel"},features:[G([la]),E],decls:3,vars:11,consts:[["role","progressbar",1,"p-progressspinner",3,"ngStyle","ngClass"],["viewBox","25 25 50 50",1,"p-progressspinner-spin"],["cx","50","cy","50","r","20","stroke-miterlimit","10",1,"p-progressspinner-circle"]],template:function(i,n){i&1&&(p(0,"div",0),ue(),p(1,"svg",1),u(2,"circle",2),d()()),i&2&&(a("ngStyle",n.style)("ngClass",n.styleClass),b("aria-label",n.ariaLabel)("aria-busy",!0)("data-pc-name","progressspinner")("data-pc-section","root"),s(),Se("animation-duration",n.animationDuration),b("data-pc-section","root"),s(),b("fill",n.fill)("stroke-width",n.strokeWidth))},dependencies:[U,ie,ke,V],encapsulation:2,changeDetection:0})}return t})(),ca=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=J({type:t});static \u0275inj=X({imports:[Ff,V,V]})}return t})();var Pf=["indicator"],Vf=["rotaterighticon"],Df=["rotatelefticon"],Lf=["zoomouticon"],zf=["zoominicon"],$f=["closeicon"],Rf=["preview"],Af=["image"],Bf=["mask"],Hf=["previewButton"],Uf=["closeButton"],Nf=t=>({errorCallback:t}),jf=(t,o)=>({height:t,width:o}),Qf=t=>({"p-image-action p-image-zoom-out-button":!0,"p-disabled":t}),Wf=t=>({"p-image-action p-image-zoom-in-button":!0,"p-disabled":t}),Kf=(t,o)=>({showTransitionParams:t,hideTransitionParams:o}),Gf=t=>({value:"visible",params:t}),Zf=(t,o)=>({class:"p-image-original",style:t,previewCallback:o});function Yf(t,o){if(t&1){let e=T();q(0),p(1,"img",9),_("error",function(n){f(e);let r=c();return g(r.imageError(n))}),d(),F()}if(t&2){let e=c();s(),k(e.imageClass),a("ngStyle",e.imageStyle),b("src",e.src,$e)("srcset",e.srcSet)("sizes",e.sizes)("alt",e.alt)("width",e.width)("height",e.height)("loading",e.loading)}}function Xf(t,o){t&1&&R(0)}function Jf(t,o){t&1&&R(0)}function eg(t,o){if(t&1&&(q(0),m(1,Jf,1,0,"ng-container",12),F()),t&2){let e=c(2);s(),a("ngTemplateOutlet",e.indicatorTemplate||e._indicatorTemplate)}}function tg(t,o){t&1&&u(0,"EyeIcon",13),t&2&&a("styleClass","p-image-preview-icon")}function ig(t,o){if(t&1){let e=T();p(0,"button",10,0),_("click",function(){f(e);let n=c();return g(n.onImageClick())}),m(2,eg,2,1,"ng-container",11)(3,tg,1,1,"ng-template",null,1,A),d()}if(t&2){let e=K(4),i=c();a("ngStyle",re(4,jf,i.height+"px",i.width+"px")),b("aria-label",i.zoomImageAriaLabel),s(2),a("ngIf",i.indicatorTemplate||!i._indicatorTemplate)("ngIfElse",e)}}function ng(t,o){t&1&&u(0,"RefreshIcon")}function og(t,o){}function rg(t,o){t&1&&m(0,og,0,0,"ng-template")}function ag(t,o){t&1&&u(0,"UndoIcon")}function sg(t,o){}function lg(t,o){t&1&&m(0,sg,0,0,"ng-template")}function cg(t,o){t&1&&u(0,"SearchMinusIcon")}function pg(t,o){}function dg(t,o){t&1&&m(0,pg,0,0,"ng-template")}function mg(t,o){t&1&&u(0,"SearchPlusIcon")}function ug(t,o){}function hg(t,o){t&1&&m(0,ug,0,0,"ng-template")}function fg(t,o){t&1&&u(0,"TimesIcon")}function gg(t,o){}function _g(t,o){t&1&&m(0,gg,0,0,"ng-template")}function bg(t,o){if(t&1){let e=T();q(0),p(1,"img",20),_("click",function(){f(e);let n=c(3);return g(n.onPreviewImageClick())}),d(),F()}if(t&2){let e=c(3);s(),a("ngStyle",e.imagePreviewStyle()),b("src",e.previewImageSrc?e.previewImageSrc:e.src,$e)("srcset",e.previewImageSrcSet)("sizes",e.previewImageSizes)}}function vg(t,o){t&1&&R(0)}function yg(t,o){if(t&1){let e=T();p(0,"div"),_("@animation.start",function(n){f(e);let r=c(2);return g(r.onAnimationStart(n))})("@animation.done",function(n){f(e);let r=c(2);return g(r.onAnimationEnd(n))}),m(1,bg,2,4,"ng-container",5)(2,vg,1,0,"ng-container",6),d()}if(t&2){let e=c(2);a("@animation",H(7,Gf,re(4,Kf,e.showTransitionOptions,e.hideTransitionOptions))),s(),a("ngIf",!e.previewTemplate&&!e._previewTemplate),s(),a("ngTemplateOutlet",e.previewTemplate||e._previewTemplate)("ngTemplateOutletContext",re(9,Zf,e.imagePreviewStyle(),e.onPreviewImageClick.bind(e)))}}function Cg(t,o){if(t&1){let e=T();p(0,"div",14,2),_("click",function(){f(e);let n=c();return g(n.onMaskClick())})("keydown",function(n){f(e);let r=c();return g(r.onMaskKeydown(n))}),p(2,"div",15),_("click",function(n){f(e);let r=c();return g(r.handleToolbarClick(n))}),p(3,"button",16),_("click",function(){f(e);let n=c();return g(n.rotateRight())}),m(4,ng,1,0,"RefreshIcon",5)(5,rg,1,0,null,12),d(),p(6,"button",17),_("click",function(){f(e);let n=c();return g(n.rotateLeft())}),m(7,ag,1,0,"UndoIcon",5)(8,lg,1,0,null,12),d(),p(9,"button",18),_("click",function(){f(e);let n=c();return g(n.zoomOut())}),m(10,cg,1,0,"SearchMinusIcon",5)(11,dg,1,0,null,12),d(),p(12,"button",18),_("click",function(){f(e);let n=c();return g(n.zoomIn())}),m(13,mg,1,0,"SearchPlusIcon",5)(14,hg,1,0,null,12),d(),p(15,"button",19,3),_("click",function(){f(e);let n=c();return g(n.closePreview())}),m(17,fg,1,0,"TimesIcon",5)(18,_g,1,0,null,12),d()(),m(19,yg,3,12,"div",5),d()}if(t&2){let e=c();b("aria-modal",e.maskVisible),s(3),b("aria-label",e.rightAriaLabel()),s(),a("ngIf",!e.rotateRightIconTemplate&&!e._rotateRightIconTemplate),s(),a("ngTemplateOutlet",e.rotateRightIconTemplate||e._rotateRightIconTemplate),s(),b("aria-label",e.leftAriaLabel()),s(),a("ngIf",!e.rotateLeftIconTemplate&&!e._rotateLeftIconTemplate),s(),a("ngTemplateOutlet",e.rotateLeftIconTemplate||e._rotateLeftIconTemplate),s(),a("ngClass",H(21,Qf,e.isZoomOutDisabled))("disabled",e.isZoomOutDisabled),b("aria-label",e.zoomOutAriaLabel()),s(),a("ngIf",!e.zoomOutIconTemplate&&!e._zoomOutIconTemplate),s(),a("ngTemplateOutlet",e.zoomOutIconTemplate||e._zoomOutIconTemplate),s(),a("ngClass",H(23,Wf,e.isZoomOutDisabled))("disabled",e.isZoomInDisabled),b("aria-label",e.zoomInAriaLabel()),s(),a("ngIf",!e.zoomInIconTemplate&&!e._zoomInIconTemplate),s(),a("ngTemplateOutlet",e.zoomInIconTemplate||e._zoomInIconTemplate),s(),b("aria-label",e.closeAriaLabel()),s(2),a("ngIf",!e.closeIconTemplate&&!e._closeIconTemplate),s(),a("ngTemplateOutlet",e.closeIconTemplate||e._closeIconTemplate),s(),a("ngIf",e.previewVisible)}}var xg=({dt:t})=>`
.p-image-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-image-preview {
    position: relative;
    display: inline-flex;
    line-height: 0;
}

.p-image-preview-mask {
    position: absolute;
    inset-inline-start: 0;
    inset-block-start: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
    border: 0 none;
    padding: 0;
    cursor: pointer;
    background: transparent;
    color: ${t("image.preview.mask.color")};
    transition: background ${t("image.transition.duration")};
}

.p-image-preview:hover > .p-image-preview-mask {
    opacity: 1;
    cursor: pointer;
    background: ${t("image.preview.mask.background")};
}

.p-image-preview-icon {
    font-size: ${t("image.preview.icon.size")};
    width: ${t("image.preview.icon.size")};
    height: ${t("image.preview.icon.size")};
}

.p-image-toolbar {
    position: absolute;
    inset-block-start: ${t("image.toolbar.position.top")};
    inset-inline-end: ${t("image.toolbar.position.right")};
    inset-inline-start: ${t("image.toolbar.position.left")};
    inset-block-end: ${t("image.toolbar.position.bottom")};
    display: flex;
    z-index: 1;
    padding: ${t("image.toolbar.padding")};
    background: ${t("image.toolbar.background")};
    backdrop-filter: blur(${t("image.toolbar.blur")});
    border-color: ${t("image.toolbar.border.color")};
    border-style: solid;
    border-width: ${t("image.toolbar.border.width")};
    border-radius: ${t("image.toolbar.border.radius")};
    gap: ${t("image.toolbar.gap")};
}

.p-image-action {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: ${t("image.action.color")};
    background: transparent;
    width: ${t("image.action.size")};
    height: ${t("image.action.size")};
    margin: 0;
    padding: 0;
    border: 0 none;
    cursor: pointer;
    user-select: none;
    border-radius: ${t("image.action.border.radius")};
    outline-color: transparent;
    transition: background ${t("image.transition.duration")}, color ${t("image.transition.duration")}, outline-color ${t("image.transition.duration")}, box-shadow ${t("image.transition.duration")};
}

.p-image-action:hover {
    color: ${t("image.action.hover.color")};
    background: ${t("image.action.hover.background")};
}

.p-image-action:focus-visible {
    box-shadow: ${t("toolbar.action.focus.ring.shadow")};
    outline: ${t("toolbar.action.focus.ring.width")} ${t("toolbar.action.focus.ring.style")} ${t("toolbar.action.focus.ring.color")};
    outline-offset: ${t("toolbar.action.focus.ring.offset")};
}

.p-image-action .p-icon {
    font-size: ${t("image.action.icon.size")};
    width: ${t("image.action.icon.size")};
    height: ${t("image.action.icon.size")};
}

.p-image-action.p-disabled {
    pointer-events: auto;
}

.p-image-original {
    transition: transform 0.15s;
    max-width: 100vw;
    max-height: 100vh;
}

.p-image-original-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-image-original-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-image-original-enter-from,
.p-image-original-leave-to {
    opacity: 0;
    transform: scale(0.7);
}
`,wg={root:({props:t})=>["p-image p-component",{"p-image-preview":t.preview}],previewMask:"p-image-preview-mask",previewIcon:"p-image-preview-icon",mask:"p-image-mask p-overlay-mask p-overlay-mask-enter",toolbar:"p-image-toolbar",rotateRightButton:"p-image-action p-image-rotate-right-button",rotateLeftButton:"p-image-action p-image-rotate-left-button",zoomOutButton:({instance:t})=>["p-image-action p-image-zoom-out-button",{"p-disabled":t.isZoomOutDisabled}],zoomInButton:({instance:t})=>["p-image-action p-image-zoom-in-button",{"p-disabled":t.isZoomInDisabled}],closeButton:"p-image-action p-image-close-button",original:"p-image-original"},pa=(()=>{class t extends Y{name="image";theme=xg;classes=wg;static \u0275fac=(()=>{let e;return function(n){return(e||(e=S(t)))(n||t)}})();static \u0275prov=L({token:t,factory:t.\u0275fac})}return t})();var An=(()=>{class t extends Q{imageClass;imageStyle;styleClass;style;src;srcSet;sizes;previewImageSrc;previewImageSrcSet;previewImageSizes;alt;width;height;loading;appendTo;preview=!1;showTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";onShow=new I;onHide=new I;onImageError=new I;mask;previewButton;closeButton;indicatorTemplate;rotateRightIconTemplate;rotateLeftIconTemplate;zoomOutIconTemplate;zoomInIconTemplate;closeIconTemplate;previewTemplate;imageTemplate;maskVisible=!1;previewVisible=!1;rotate=0;scale=1;previewClick=!1;container;wrapper;_componentStyle=j(pa);get isZoomOutDisabled(){return this.scale-this.zoomSettings.step<=this.zoomSettings.min}get isZoomInDisabled(){return this.scale+this.zoomSettings.step>=this.zoomSettings.max}zoomSettings={default:1,step:.1,max:1.5,min:.5};constructor(){super()}templates;_indicatorTemplate;_rotateRightIconTemplate;_rotateLeftIconTemplate;_zoomOutIconTemplate;_zoomInIconTemplate;_closeIconTemplate;_imageTemplate;_previewTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"indicator":this._indicatorTemplate=e.template;break;case"rotaterighticon":this._rotateRightIconTemplate=e.template;break;case"rotatelefticon":this._rotateLeftIconTemplate=e.template;break;case"zoomouticon":this._zoomOutIconTemplate=e.template;break;case"zoominicon":this._zoomInIconTemplate=e.template;break;case"closeicon":this._closeIconTemplate=e.template;break;case"image":this._imageTemplate=e.template;break;case"preview":this._previewTemplate=e.template;break;default:this._indicatorTemplate=e.template;break}})}onImageClick(){this.preview&&(this.maskVisible=!0,this.previewVisible=!0,Hi())}onMaskClick(){this.previewClick||this.closePreview(),this.previewClick=!1}onMaskKeydown(e){switch(e.code){case"Escape":this.onMaskClick(),setTimeout(()=>{Re(this.previewButton.nativeElement)},25),e.preventDefault();break;default:break}}onPreviewImageClick(){this.previewClick=!0}rotateRight(){this.rotate+=90,this.previewClick=!0}rotateLeft(){this.rotate-=90,this.previewClick=!0}zoomIn(){this.scale=this.scale+this.zoomSettings.step,this.previewClick=!0}zoomOut(){this.scale=this.scale-this.zoomSettings.step,this.previewClick=!0}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.wrapper=this.container?.parentElement,this.appendContainer(),this.moveOnTop(),setTimeout(()=>{Re(this.closeButton.nativeElement)},25);break;case"void":ut(this.wrapper,"p-overlay-mask-leave");break}}onAnimationEnd(e){switch(e.toState){case"void":Qe.clear(this.wrapper),this.maskVisible=!1,this.container=null,this.wrapper=null,this.cd.markForCheck(),this.onHide.emit({});break;case"visible":this.onShow.emit({});break}}moveOnTop(){Qe.set("modal",this.wrapper,this.config.zIndex.modal)}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.document.body.appendChild(this.wrapper):Lt(this.appendTo,this.wrapper))}imagePreviewStyle(){return{transform:"rotate("+this.rotate+"deg) scale("+this.scale+")"}}get zoomImageAriaLabel(){return this.config.translation.aria?this.config.translation.aria.zoomImage:void 0}containerClass(){return{"p-image p-component":!0,"p-image-preview":this.preview}}handleToolbarClick(e){e.stopPropagation()}closePreview(){this.previewVisible=!1,this.rotate=0,this.scale=this.zoomSettings.default,Gt()}imageError(e){this.onImageError.emit(e)}rightAriaLabel(){return this.config.translation.aria?this.config.translation.aria.rotateRight:void 0}leftAriaLabel(){return this.config.translation.aria?this.config.translation.aria.rotateLeft:void 0}zoomInAriaLabel(){return this.config.translation.aria?this.config.translation.aria.zoomIn:void 0}zoomOutAriaLabel(){return this.config.translation.aria?this.config.translation.aria.zoomOut:void 0}closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}onKeydownHandler(e){this.previewVisible&&this.closePreview()}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=x({type:t,selectors:[["p-image"]],contentQueries:function(i,n,r){if(i&1&&(O(r,Pf,4),O(r,Vf,4),O(r,Df,4),O(r,Lf,4),O(r,zf,4),O(r,$f,4),O(r,Rf,4),O(r,Af,4),O(r,se,4)),i&2){let l;v(l=y())&&(n.indicatorTemplate=l.first),v(l=y())&&(n.rotateRightIconTemplate=l.first),v(l=y())&&(n.rotateLeftIconTemplate=l.first),v(l=y())&&(n.zoomOutIconTemplate=l.first),v(l=y())&&(n.zoomInIconTemplate=l.first),v(l=y())&&(n.closeIconTemplate=l.first),v(l=y())&&(n.previewTemplate=l.first),v(l=y())&&(n.imageTemplate=l.first),v(l=y())&&(n.templates=l)}},viewQuery:function(i,n){if(i&1&&($(Bf,5),$(Hf,5),$(Uf,5)),i&2){let r;v(r=y())&&(n.mask=r.first),v(r=y())&&(n.previewButton=r.first),v(r=y())&&(n.closeButton=r.first)}},hostBindings:function(i,n){i&1&&_("keydown.escape",function(l){return n.onKeydownHandler(l)},!1,to)},inputs:{imageClass:"imageClass",imageStyle:"imageStyle",styleClass:"styleClass",style:"style",src:"src",srcSet:"srcSet",sizes:"sizes",previewImageSrc:"previewImageSrc",previewImageSrcSet:"previewImageSrcSet",previewImageSizes:"previewImageSizes",alt:"alt",width:"width",height:"height",loading:"loading",appendTo:"appendTo",preview:[2,"preview","preview",P],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{onShow:"onShow",onHide:"onHide",onImageError:"onImageError"},features:[G([pa]),E],decls:5,vars:11,consts:[["previewButton",""],["defaultTemplate",""],["mask",""],["closeButton",""],[3,"ngClass","ngStyle"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["type","button","class","p-image-preview-mask",3,"ngStyle","click",4,"ngIf"],["class","p-image-mask p-overlay-mask p-overlay-mask-enter","role","dialog","pFocusTrap","",3,"click","keydown",4,"ngIf"],[3,"error","ngStyle"],["type","button",1,"p-image-preview-mask",3,"click","ngStyle"],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"],[3,"styleClass"],["role","dialog","pFocusTrap","",1,"p-image-mask","p-overlay-mask","p-overlay-mask-enter",3,"click","keydown"],[1,"p-image-toolbar",3,"click"],["type","button",1,"p-image-action","p-image-rotate-right-button",3,"click"],["type","button",1,"p-image-action","p-image-rotate-left-button",3,"click"],["type","button",3,"click","ngClass","disabled"],["type","button",1,"p-image-action","p-image-close-button",3,"click"],[1,"p-image-original",3,"click","ngStyle"]],template:function(i,n){i&1&&(p(0,"span",4),m(1,Yf,2,10,"ng-container",5)(2,Xf,1,0,"ng-container",6)(3,ig,5,7,"button",7)(4,Cg,20,25,"div",8),d()),i&2&&(k(n.styleClass),a("ngClass",n.containerClass())("ngStyle",n.style),s(),a("ngIf",!n.imageTemplate&&!n._imageTemplate),s(),a("ngTemplateOutlet",n.imageTemplate||n._imageTemplate)("ngTemplateOutletContext",H(9,Nf,n.imageError.bind(n))),s(),a("ngIf",n.preview),s(),a("ngIf",n.maskVisible))},dependencies:[U,ie,Z,ae,ke,ar,No,pr,lr,cr,ht,Zo,V],encapsulation:2,data:{animation:[st("animation",[He("void => visible",[Be({transform:"scale(0.7)",opacity:0}),Ae("{{showTransitionParams}}")]),He("visible => void",[Ae("{{hideTransitionParams}}",Be({transform:"scale(0.7)",opacity:0}))])])]},changeDetection:0})}return t})(),da=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=J({type:t});static \u0275inj=X({imports:[An,V,V]})}return t})();var Tg=["contentContainer"],Bn=(t,o)=>["/user",t,o];function Sg(t,o){t&1&&(p(0,"div",5)(1,"div",6),u(2,"p-skeleton",7)(3,"p-skeleton",8)(4,"p-skeleton",8)(5,"p-skeleton",9),d(),p(6,"div",10)(7,"div",11),u(8,"p-skeleton",12)(9,"p-skeleton",9),d(),u(10,"p-skeleton",9),d()())}function kg(t,o){if(t&1&&u(0,"p-avatar",15),t&2){let e=c(2);a("image",e.postData.user.avatar)("routerLink",re(2,Bn,e.route.profileById.url,e.postData.user._id))}}function Og(t,o){if(t&1&&u(0,"p-avatar",16),t&2){let e=c(2);a("routerLink",re(1,Bn,e.route.profileById.url,e.postData.user._id))}}function Mg(t,o){if(t&1&&(p(0,"div",22),u(1,"p-image",30),d()),t&2){let e=c(2);s(),a("src",e.postData.docUri)("preview",!0)}}function Eg(t,o){if(t&1&&u(0,"div",31),t&2){let e=c(2);ve("opacity-0",e.isExpanded)}}function qg(t,o){if(t&1){let e=T();p(0,"button",32),_("click",function(){f(e);let n=c(2);return g(n.toggleExpand())}),C(1),d()}if(t&2){let e=c(2);s(),ye(" ",e.isExpanded?"Show less":"Show more"," ")}}function Fg(t,o){if(t&1){let e=T();p(0,"button",33),_("click",function(){f(e);let n=c(2);return g(n.onEdit())}),d()}if(t&2){let e=c(2);a("disabled",e.isLoading)}}function Pg(t,o){if(t&1){let e=T();p(0,"button",34),_("click",function(n){f(e);let r=c(2);return g(r.onDelete(n))}),d()}if(t&2){let e=c(2);a("disabled",e.isLoading)}}function Vg(t,o){if(t&1){let e=T();p(0,"div",5)(1,"div",13)(2,"div",14),m(3,kg,1,5,"p-avatar",15)(4,Og,1,4,"p-avatar",16),p(5,"span",17),C(6),d()(),p(7,"span",18),C(8),$i(9,"timeAgo"),d()(),p(10,"div",19)(11,"div",20,0),u(13,"div",21),m(14,Mg,2,2,"div",22),d(),m(15,Eg,1,2,"div",23),d(),m(16,qg,2,1,"button",24),p(17,"div",25)(18,"div",11)(19,"button",26),_("click",function(){f(e);let n=c();return g(n.toggleLike())}),d(),p(20,"span",18),C(21),d(),p(22,"button",27),_("click",function(){f(e);let n=c();return g(n.toggleComments())}),d(),p(23,"span",18),C(24),d()(),p(25,"div",11),m(26,Fg,1,1,"button",28)(27,Pg,1,1,"button",29),d()()()}if(t&2){let e=c();s(3),te(e.postData.user&&e.postData.user.avatar!=""?3:4),s(2),a("routerLink",re(27,Bn,e.route.profileById.url,e.postData.user._id)),s(),B(e.postData.user.name),s(2),ye(" ",Ri(9,25,e.postData.createdAt)," "),s(3),ve("max-h-[200px]",!e.isExpanded)("overflow-hidden",!e.isExpanded),s(2),a("innerHTML",e.postData.content,ot),s(),te(e.postData.docUri?14:-1),s(),a("ngIf",e.hasOverflow),s(),a("ngIf",e.hasOverflow),s(3),ve("text-primary",e.isLiked)("text-gray-400",!e.isLiked),a("icon",e.isLiked?"pi pi-heart-fill":"pi pi-heart")("disabled",e.isLoading),s(2),xt(" ",e.likesCount," ",e.likesCount===1?"like":"likes"," "),s(),a("disabled",e.isLoading),s(2),xt(" ",e.postData.commentsCount," ",e.postData.commentsCount===1?"comment":"comments"," "),s(2),a("ngIf",e.canEditPost),s(),a("ngIf",e.canEditPost)}}var Pi=class t{constructor(o,e,i,n,r,l,h){this._postService=o;this._messageService=e;this._authFacade=i;this._confirmationService=n;this._router=r;this._route=l;this._commonService=h}postId;postData;showActions=!0;postUpdated=new I;postDeleted=new I;contentContainer;route=Ue;isLoading=!1;isLikeLoading=!1;isAuthor=!1;isAdmin=!1;currentUserId;isEditDialogOpen=!1;isExpanded=!1;hasOverflow=!1;isCommentsDialogOpen=!1;commentsCount=0;ngOnInit(){this.postId&&!this.postData?this.loadPost():this.postData&&this.checkUserPermissions(),this._authFacade.authUser$.subscribe(o=>{o?(this.currentUserId=o._id,this.isAdmin=o.roles.includes(ge.admin.enum),this.postData&&(this.isAuthor=o._id===this.postData.user._id)):(this.currentUserId=void 0,this.isAdmin=!1,this.isAuthor=!1)})}ngAfterViewInit(){this.checkContentOverflow()}ngOnChanges(o){o.postData&&o.postData.currentValue&&(this.checkUserPermissions(),this.checkContentOverflow())}checkUserPermissions(){this.postData&&this._authFacade.authUser$.subscribe(o=>{o?(this.isAuthor=o._id===this.postData?.user._id,this.isAdmin=o.roles.includes(ge.admin.enum)):(this.isAuthor=!1,this.isAdmin=!1)})}handleCommentCount(o){this.postData&&(this.postData.commentsCount+=o)}checkContentOverflow(){requestAnimationFrame(()=>{if(this.contentContainer){let o=this.contentContainer.nativeElement,e=o.scrollHeight,i=o.clientHeight;this.hasOverflow=e>200}})}loadPost(){this.isLoading=!0,this._postService.getPostById(this.postId).subscribe({next:o=>{this.postData=o,this.checkUserPermissions(),this.checkContentOverflow(),this.isLoading=!1},error:o=>{console.error("Error loading post:",o),this._messageService.add({severity:"error",summary:"Error",detail:"Failed to load post",life:4e3}),this.isLoading=!1}})}get isLiked(){return!!(this.currentUserId&&this.postData?.likes?.includes(this.currentUserId))}get likesCount(){return this.postData?.likes?.length??0}toggleExpand(){this.isExpanded=!this.isExpanded,this.isExpanded||this.checkContentOverflow()}toggleLike(){if(!this.currentUserId||!this.postData||this.isLikeLoading)return;this.isLikeLoading=!0;let o=[...this.postData.likes||[]];this.isLiked?this.postData.likes=(this.postData.likes||[]).filter(e=>e!==this.currentUserId):this.postData.likes=[...this.postData.likes||[],this.currentUserId],this._postService.toggleLike(this.postData._id).subscribe({next:e=>{this.postData=e,this.checkContentOverflow(),this.isLikeLoading=!1},error:e=>{this.postData&&(this.postData.likes=o),console.error("Error toggling like:",e),this._messageService.add({severity:"error",summary:"Error",detail:"Failed to update like status",life:4e3}),this.isLikeLoading=!1}})}onEdit(){this.postData&&(this.isEditDialogOpen=!0)}onPostUpdated(o){this.postData=o,this.postUpdated.emit(o),this.isEditDialogOpen=!1,this.checkContentOverflow()}closeEditDialog(){this.isEditDialogOpen=!1}get canEditPost(){return this.showActions&&(this.isAuthor||this.isAdmin)}onDelete(o){this.postData&&this._confirmationService.confirm({target:o.target,message:"Are you sure you want to delete this post?",header:"Delete Confirmation",icon:"pi pi-exclamation-triangle",acceptButtonStyleClass:"p-button-danger",acceptIcon:"pi pi-trash",rejectButtonStyleClass:"p-button-text",accept:()=>{this._postService.deletePost(this.postData._id).subscribe({next:()=>{this._messageService.add({severity:"success",summary:"Success",detail:"Post deleted successfully",life:4e3}),this.postDeleted.emit(this.postData._id)},error:e=>{console.error("Error deleting post:",e),this._messageService.add({severity:"error",summary:"Error",detail:"Failed to delete post",life:4e3})}})},reject:()=>{this._messageService.add({severity:"info",summary:"Cancelled",detail:"Post deletion cancelled",life:3e3})}})}toggleComments(){this.isCommentsDialogOpen=!this.isCommentsDialogOpen}visibleChange(o){this.isCommentsDialogOpen=o}static \u0275fac=function(e){return new(e||t)(M(nt),M(et),M(Le),M(Zt),M(go),M(Bi),M(gt))};static \u0275cmp=x({type:t,selectors:[["app-post-view"]],viewQuery:function(e,i){if(e&1&&$(Tg,5),e&2){let n;v(n=y())&&(i.contentContainer=n.first)}},inputs:{postId:"postId",postData:"postData",showActions:"showActions"},outputs:{postUpdated:"postUpdated",postDeleted:"postDeleted"},standalone:!1,features:[Te],decls:5,vars:7,consts:[["contentContainer",""],[1,"bg-white","rounded-xl","shadow-md","p-4","pb-2"],["class","flex flex-col gap-3",4,"ngIf"],[3,"isOpenChange","postUpdated","isOpen","postData"],[3,"visibleChange","commentCountHandler","visible","postId","postOwnerId"],[1,"flex","flex-col","gap-3"],[1,"flex","flex-col","gap-2"],["height","2rem",1,"mb-2"],["height","1rem",1,"mb-2"],["height","1rem"],[1,"flex","justify-between","items-center"],[1,"flex","items-center","gap-2"],["shape","circle","size","2rem"],[1,"flex","items-center","justify-between"],[1,"flex","items-center","gap-2","mb-2"],["shape","circle","size","normal","styleClass","object-cover cursor-pointer",3,"image","routerLink"],["icon","pi pi-user","shape","circle","size","normal","styleClass","bg-gray-200 text-gray-600 cursor-pointer",3,"routerLink"],[1,"font-medium","text-gray-900","cursor-pointer","hover:underline",3,"routerLink"],[1,"text-sm","text-gray-500"],[1,"relative"],[1,"prose","max-w-none","break-words","transition-all","duration-300","ease-in-out"],[1,"ql-editor","p-0","!min-h-fit",3,"innerHTML"],[1,"mt-3"],["class","absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none transition-opacity duration-300",3,"opacity-0",4,"ngIf"],["class","text-primary-600 hover:text-primary-700 text-sm font-medium hover:underline transition-colors",3,"click",4,"ngIf"],[1,"flex","flex-wrap","justify-between","items-center","pt-2","border-t-2","border-gray-100"],["pButton","","type","button",1,"p-button-text","p-button-rounded","hover:bg-gray-100","transition-colors",3,"click","icon","disabled"],["pButton","","type","button","icon","pi pi-comments",1,"p-button-text","p-button-rounded","hover:bg-gray-100","transition-colors","ml-2",3,"click","disabled"],["pButton","","type","button","icon","pi pi-pencil","class","p-button-text p-button-rounded hover:bg-gray-100 transition-colors","pTooltip","Edit Post",3,"disabled","click",4,"ngIf"],["pButton","","type","button","icon","pi pi-trash","class","p-button-text p-button-rounded hover:bg-gray-100 transition-colors text-red-500","pTooltip","Delete Post",3,"disabled","click",4,"ngIf"],["imageClass","object-","alt","Image",3,"src","preview"],[1,"absolute","bottom-0","left-0","right-0","h-16","bg-gradient-to-t","from-white","to-transparent","pointer-events-none","transition-opacity","duration-300"],[1,"text-primary-600","hover:text-primary-700","text-sm","font-medium","hover:underline","transition-colors",3,"click"],["pButton","","type","button","icon","pi pi-pencil","pTooltip","Edit Post",1,"p-button-text","p-button-rounded","hover:bg-gray-100","transition-colors",3,"click","disabled"],["pButton","","type","button","icon","pi pi-trash","pTooltip","Delete Post",1,"p-button-text","p-button-rounded","hover:bg-gray-100","transition-colors","text-red-500",3,"click","disabled"]],template:function(e,i){e&1&&(p(0,"div",1),m(1,Sg,11,0,"div",2)(2,Vg,28,30,"div",2),d(),p(3,"app-post-handler",3),Pe("isOpenChange",function(r){return Fe(i.isEditDialogOpen,r)||(i.isEditDialogOpen=r),r}),_("postUpdated",function(r){return i.onPostUpdated(r)})("isOpenChange",function(){return i.closeEditDialog()}),d(),p(4,"app-comments",4),Pe("visibleChange",function(r){return Fe(i.isCommentsDialogOpen,r)||(i.isCommentsDialogOpen=r),r}),_("visibleChange",function(r){return i.visibleChange(r)})("commentCountHandler",function(r){return i.handleCommentCount(r)}),d()),e&2&&(s(),a("ngIf",i.isLoading),s(),a("ngIf",!i.isLoading&&i.postData),s(),qe("isOpen",i.isEditDialogOpen),a("postData",i.postData),s(),qe("visible",i.isCommentsDialogOpen),a("postId",(i.postData==null?null:i.postData._id)||"")("postOwnerId",(i.postData==null||i.postData.user==null?null:i.postData.user._id)||""))},dependencies:[Z,rt,Ze,tt,lt,An,qt,mi,di],styles:[".prose[_ngcontent-%COMP%]{overflow-wrap:break-word;word-wrap:break-word;hyphens:auto}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:.75rem}.prose[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}[_nghost-%COMP%]{display:block;width:100%}.content-container[_ngcontent-%COMP%]{position:relative;overflow:hidden;transition:max-height .3s ease-in-out}.content-container.expanded[_ngcontent-%COMP%]{max-height:none!important}.content-container.collapsed[_ngcontent-%COMP%]{max-height:100px}.gradient-fade[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;right:0;height:64px;background:linear-gradient(to top,white,transparent);pointer-events:none;opacity:1;transition:opacity .3s ease-in-out}.gradient-fade.hidden[_ngcontent-%COMP%]{opacity:0}  .ql-editor{padding:0;min-height:100px;white-space:pre-wrap;word-break:break-word}  .ql-container{border:none}"]})};var Dg=["wrapper"],Lg=["sourceImage"];function zg(t,o){if(t&1){let e=T();p(0,"img",5,0),_("load",function(){f(e);let n=c();return g(n.imageLoadedInView())})("mousedown",function(n){f(e);let r=c();return g(r.startMove(n,r.moveTypes.Drag))})("touchstart",function(n){f(e);let r=c();return g(r.startMove(n,r.moveTypes.Drag))})("error",function(n){f(e);let r=c();return g(r.loadImageError(n))}),d()}if(t&2){let e=o.ngIf,i=c();Se("visibility",i.imageVisible?"visible":"hidden")("transform",i.safeTransformStyle()),ve("ngx-ic-draggable",!i.disabled&&i.allowMoveImage),a("src",e,$e),b("alt",i.imageAltText)}}function $g(t,o){if(t&1){let e=T();q(0),p(1,"span",9),_("mousedown",function(n){f(e);let r=c(2);return g(r.startMove(n,r.moveTypes.Resize,"topleft"))})("touchstart",function(n){f(e);let r=c(2);return g(r.startMove(n,r.moveTypes.Resize,"topleft"))}),u(2,"span",10),d(),p(3,"span",11),_("mousedown",function(n){f(e);let r=c(2);return g(r.startMove(n,r.moveTypes.Resize,"topright"))})("touchstart",function(n){f(e);let r=c(2);return g(r.startMove(n,r.moveTypes.Resize,"topright"))}),u(4,"span",10),d(),p(5,"span",12),_("mousedown",function(n){f(e);let r=c(2);return g(r.startMove(n,r.moveTypes.Resize,"bottomright"))})("touchstart",function(n){f(e);let r=c(2);return g(r.startMove(n,r.moveTypes.Resize,"bottomright"))}),u(6,"span",10),d(),p(7,"span",13),_("mousedown",function(n){f(e);let r=c(2);return g(r.startMove(n,r.moveTypes.Resize,"bottomleft"))})("touchstart",function(n){f(e);let r=c(2);return g(r.startMove(n,r.moveTypes.Resize,"bottomleft"))}),u(8,"span",10),d(),p(9,"span",14),_("mousedown",function(n){f(e);let r=c(2);return g(r.startMove(n,r.moveTypes.Resize,"top"))})("touchstart",function(n){f(e);let r=c(2);return g(r.startMove(n,r.moveTypes.Resize,"top"))}),d(),p(10,"span",15),_("mousedown",function(n){f(e);let r=c(2);return g(r.startMove(n,r.moveTypes.Resize,"top"))})("touchstart",function(n){f(e);let r=c(2);return g(r.startMove(n,r.moveTypes.Resize,"top"))}),u(11,"span",10),d(),p(12,"span",16),_("mousedown",function(n){f(e);let r=c(2);return g(r.startMove(n,r.moveTypes.Resize,"right"))})("touchstart",function(n){f(e);let r=c(2);return g(r.startMove(n,r.moveTypes.Resize,"right"))}),d(),p(13,"span",17),_("mousedown",function(n){f(e);let r=c(2);return g(r.startMove(n,r.moveTypes.Resize,"right"))})("touchstart",function(n){f(e);let r=c(2);return g(r.startMove(n,r.moveTypes.Resize,"right"))}),u(14,"span",10),d(),p(15,"span",18),_("mousedown",function(n){f(e);let r=c(2);return g(r.startMove(n,r.moveTypes.Resize,"bottom"))})("touchstart",function(n){f(e);let r=c(2);return g(r.startMove(n,r.moveTypes.Resize,"bottom"))}),d(),p(16,"span",19),_("mousedown",function(n){f(e);let r=c(2);return g(r.startMove(n,r.moveTypes.Resize,"bottom"))})("touchstart",function(n){f(e);let r=c(2);return g(r.startMove(n,r.moveTypes.Resize,"bottom"))}),u(17,"span",10),d(),p(18,"span",20),_("mousedown",function(n){f(e);let r=c(2);return g(r.startMove(n,r.moveTypes.Resize,"left"))})("touchstart",function(n){f(e);let r=c(2);return g(r.startMove(n,r.moveTypes.Resize,"left"))}),d(),p(19,"span",21),_("mousedown",function(n){f(e);let r=c(2);return g(r.startMove(n,r.moveTypes.Resize,"left"))})("touchstart",function(n){f(e);let r=c(2);return g(r.startMove(n,r.moveTypes.Resize,"left"))}),u(20,"span",10),d(),F()}}function Rg(t,o){if(t&1){let e=T();p(0,"div",6),_("keydown",function(n){f(e);let r=c();return g(r.keyboardAccess(n))}),p(1,"div",7),_("mousedown",function(n){f(e);let r=c();return g(r.startMove(n,r.moveTypes.Move))})("touchstart",function(n){f(e);let r=c();return g(r.startMove(n,r.moveTypes.Move))}),d(),m(2,$g,21,0,"ng-container",8),d()}if(t&2){let e=c();Se("top",e.state.cropper().y1,"px")("left",e.state.cropper().x1,"px")("width",e.state.cropper().x2-e.state.cropper().x1,"px")("height",e.state.cropper().y2-e.state.cropper().y1,"px")("margin-left",e.state.options.alignImage==="center"?e.marginLeft:null)("visibility",e.imageVisible?"visible":"hidden"),ve("ngx-ic-round",e.state.options.roundCropper),b("aria-label",e.state.options.cropperFrameAriaLabel),s(2),a("ngIf",!e.state.options.hideResizeSquares&&!(e.state.options.cropperStaticWidth&&e.state.options.cropperStaticHeight))}}function Vi(t,o,e){return t=Ag(t,o),hn(t,o,e)}function Ag(t,o){let e=t.x2-t.x1,i=t.y2-t.y1,n=t.x1+e/2,r=t.y1+i/2;o.options.cropperStaticHeight&&o.options.cropperStaticWidth?(e=o.maxSize().width>o.options.cropperStaticWidth?o.options.cropperStaticWidth:o.maxSize().width,i=o.maxSize().height>o.options.cropperStaticHeight?o.options.cropperStaticHeight:o.maxSize().height):(e=Math.max(o.cropperScaledMinWidth,Math.min(e,o.cropperScaledMaxWidth,o.maxSize().width)),i=Math.max(o.cropperScaledMinHeight,Math.min(i,o.cropperScaledMaxHeight,o.maxSize().height)),o.options.maintainAspectRatio&&(o.maxSize().width/o.options.aspectRatio<o.maxSize().height?i=e/o.options.aspectRatio:e=i*o.options.aspectRatio));let l=n-e/2,h=l+e,w=r-i/2,D=w+i;return{x1:l,x2:h,y1:w,y2:D}}function hn(t,o,e=!1){return t.x1<0&&(t=je(W({},t),{x1:0,x2:t.x2-(e?t.x1:0)})),t.y1<0&&(t=je(W({},t),{y2:t.y2-(e?t.y1:0),y1:0})),t.x2>o.maxSize().width&&(t=je(W({},t),{x1:t.x1-(e?t.x2-o.maxSize().width:0),x2:o.maxSize().width})),t.y2>o.maxSize().height&&(t=je(W({},t),{y1:t.y1-(e?t.y2-o.maxSize().height:0),y2:o.maxSize().height})),t}function Bg(t,o){let e=fn(t)-o.clientX,i=gn(t)-o.clientY;return{x1:o.cropper.x1+e,y1:o.cropper.y1+i,x2:o.cropper.x2+e,y2:o.cropper.y2+i}}function ma(t,o,e){let i=W({},e.cropper()),n=fn(t)-o.clientX,r=gn(t)-o.clientY;switch(o.position){case"left":i.x1=Math.min(Math.max(o.cropper.x1+n,i.x2-e.cropperScaledMaxWidth),i.x2-e.cropperScaledMinWidth);break;case"topleft":i.x1=Math.min(Math.max(o.cropper.x1+n,i.x2-e.cropperScaledMaxWidth),i.x2-e.cropperScaledMinWidth),i.y1=Math.min(Math.max(o.cropper.y1+r,i.y2-e.cropperScaledMaxHeight),i.y2-e.cropperScaledMinHeight);break;case"top":i.y1=Math.min(Math.max(o.cropper.y1+r,i.y2-e.cropperScaledMaxHeight),i.y2-e.cropperScaledMinHeight);break;case"topright":i.x2=Math.max(Math.min(o.cropper.x2+n,i.x1+e.cropperScaledMaxWidth),i.x1+e.cropperScaledMinWidth),i.y1=Math.min(Math.max(o.cropper.y1+r,i.y2-e.cropperScaledMaxHeight),i.y2-e.cropperScaledMinHeight);break;case"right":i.x2=Math.max(Math.min(o.cropper.x2+n,i.x1+e.cropperScaledMaxWidth),i.x1+e.cropperScaledMinWidth);break;case"bottomright":i.x2=Math.max(Math.min(o.cropper.x2+n,i.x1+e.cropperScaledMaxWidth),i.x1+e.cropperScaledMinWidth),i.y2=Math.max(Math.min(o.cropper.y2+r,i.y1+e.cropperScaledMaxHeight),i.y1+e.cropperScaledMinHeight);break;case"bottom":i.y2=Math.max(Math.min(o.cropper.y2+r,i.y1+e.cropperScaledMaxHeight),i.y1+e.cropperScaledMinHeight);break;case"bottomleft":i.x1=Math.min(Math.max(o.cropper.x1+n,i.x2-e.cropperScaledMaxWidth),i.x2-e.cropperScaledMinWidth),i.y2=Math.max(Math.min(o.cropper.y2+r,i.y1+e.cropperScaledMaxHeight),i.y1+e.cropperScaledMinHeight);break;case"center":let l="scale"in t?t.scale:1,h=Math.min(Math.max(e.cropperScaledMinWidth,Math.abs(o.cropper.x2-o.cropper.x1)*l),e.cropperScaledMaxWidth),w=Math.min(Math.max(e.cropperScaledMinHeight,Math.abs(o.cropper.y2-o.cropper.y1)*l),e.cropperScaledMaxHeight);i.x1=o.clientX-h/2,i.x2=o.clientX+h/2,i.y1=o.clientY-w/2,i.y2=o.clientY+w/2,i.x1<0?(i.x2-=i.x1,i.x1=0):i.x2>e.maxSize().width&&(i.x1-=i.x2-e.maxSize().width,i.x2=e.maxSize().width),i.y1<0?(i.y2-=i.y1,i.y1=0):i.y2>e.maxSize().height&&(i.y1-=i.y2-e.maxSize().height,i.y2=e.maxSize().height);break}return e.options.maintainAspectRatio?Hg(o.position,i,e):i}function Hg(t,o,e){o=W({},o);let i=0,n=0;switch(t){case"top":o.x2=o.x1+(o.y2-o.y1)*e.options.aspectRatio,i=Math.max(o.x2-e.maxSize().width,0),n=Math.max(0-o.y1,0),(i>0||n>0)&&(o.x2-=n*e.options.aspectRatio>i?n*e.options.aspectRatio:i,o.y1+=n*e.options.aspectRatio>i?n:i/e.options.aspectRatio);break;case"bottom":o.x2=o.x1+(o.y2-o.y1)*e.options.aspectRatio,i=Math.max(o.x2-e.maxSize().width,0),n=Math.max(o.y2-e.maxSize().height,0),(i>0||n>0)&&(o.x2-=n*e.options.aspectRatio>i?n*e.options.aspectRatio:i,o.y2-=n*e.options.aspectRatio>i?n:i/e.options.aspectRatio);break;case"topleft":o.y1=o.y2-(o.x2-o.x1)/e.options.aspectRatio,i=Math.max(0-o.x1,0),n=Math.max(0-o.y1,0),(i>0||n>0)&&(o.x1+=n*e.options.aspectRatio>i?n*e.options.aspectRatio:i,o.y1+=n*e.options.aspectRatio>i?n:i/e.options.aspectRatio);break;case"topright":o.y1=o.y2-(o.x2-o.x1)/e.options.aspectRatio,i=Math.max(o.x2-e.maxSize().width,0),n=Math.max(0-o.y1,0),(i>0||n>0)&&(o.x2-=n*e.options.aspectRatio>i?n*e.options.aspectRatio:i,o.y1+=n*e.options.aspectRatio>i?n:i/e.options.aspectRatio);break;case"right":case"bottomright":o.y2=o.y1+(o.x2-o.x1)/e.options.aspectRatio,i=Math.max(o.x2-e.maxSize().width,0),n=Math.max(o.y2-e.maxSize().height,0),(i>0||n>0)&&(o.x2-=n*e.options.aspectRatio>i?n*e.options.aspectRatio:i,o.y2-=n*e.options.aspectRatio>i?n:i/e.options.aspectRatio);break;case"left":case"bottomleft":o.y2=o.y1+(o.x2-o.x1)/e.options.aspectRatio,i=Math.max(0-o.x1,0),n=Math.max(o.y2-e.maxSize().height,0),(i>0||n>0)&&(o.x1+=n*e.options.aspectRatio>i?n*e.options.aspectRatio:i,o.y2-=n*e.options.aspectRatio>i?n:i/e.options.aspectRatio);break;case"center":o.x2=o.x1+(o.y2-o.y1)*e.options.aspectRatio,o.y2=o.y1+(o.x2-o.x1)/e.options.aspectRatio;let r=Math.max(0-o.x1,0),l=Math.max(o.x2-e.maxSize().width,0),h=Math.max(o.y2-e.maxSize().height,0),w=Math.max(0-o.y1,0);(r>0||l>0||h>0||w>0)&&(o.x1+=h*e.options.aspectRatio>r?h*e.options.aspectRatio:r,o.x2-=w*e.options.aspectRatio>l?w*e.options.aspectRatio:l,o.y1+=w*e.options.aspectRatio>l?w:l/e.options.aspectRatio,o.y2-=h*e.options.aspectRatio>r?h:r/e.options.aspectRatio);break}return o}function fn(t){return"touches"in t&&t.touches[0]?t.touches[0].clientX:"clientX"in t?t.clientX:0}function gn(t){return"touches"in t&&t.touches[0]?t.touches[0].clientY:"clientX"in t?t.clientY:0}var Hn=class{constructor(){this.cropper=Me({x1:0,x2:0,y1:0,y2:0}),this.maxSize=Me({width:0,height:0}),this.transform={},this.options={format:"png",output:"blob",autoCrop:!0,maintainAspectRatio:!0,aspectRatio:1,resetCropOnAspectRatioChange:!0,resizeToWidth:0,resizeToHeight:0,cropperMinWidth:0,cropperMinHeight:0,cropperMaxHeight:0,cropperMaxWidth:0,cropperStaticWidth:0,cropperStaticHeight:0,canvasRotation:0,roundCropper:!1,onlyScaleDown:!1,imageQuality:92,backgroundColor:void 0,containWithinAspectRatio:!1,hideResizeSquares:!1,alignImage:"center",cropperFrameAriaLabel:void 0,checkImageType:!0},this.cropperScaledMinWidth=20,this.cropperScaledMinHeight=20,this.cropperScaledMaxWidth=20,this.cropperScaledMaxHeight=20,this.stepSize=3}setOptionsFromChanges(o){o.options?.currentValue&&this.setOptions(o.options.currentValue);let e=Object.entries(o).filter(([i])=>i in this.options).reduce((i,[n,r])=>je(W({},i),{[n]:r.currentValue}),{});Object.keys(e).length>0&&this.setOptions(e)}setOptions(o){if(this.options=W(W({},this.options),o||{}),this.validateOptions(),!this.loadedImage?.transformed.image.complete||!this.maxSize)return;let e=!1;this.options.maintainAspectRatio&&o.aspectRatio||"maintainAspectRatio"in o?(this.setCropperScaledMinSize(),this.setCropperScaledMaxSize(),this.options.maintainAspectRatio&&(this.options.resetCropOnAspectRatioChange||!this.aspectRatioIsCorrect())&&(this.cropper.set(this.maxSizeCropperPosition()),e=!0)):((o.cropperMinWidth||o.cropperMinHeight)&&(this.setCropperScaledMinSize(),e=!0),(o.cropperMaxWidth||o.cropperMaxHeight)&&(this.setCropperScaledMaxSize(),e=!0),(o.cropperStaticWidth||o.cropperStaticHeight)&&(e=!0)),e&&this.cropper.update(i=>Vi(i,this,!1))}validateOptions(){if(this.options.maintainAspectRatio&&!this.options.aspectRatio)throw new Error("`aspectRatio` should > 0 when `maintainAspectRatio` is enabled")}setMaxSize(o,e){this.maxSize.set({width:o,height:e}),this.setCropperScaledMinSize(),this.setCropperScaledMaxSize()}setCropperScaledMinSize(){this.loadedImage?.transformed.size?(this.setCropperScaledMinWidth(),this.setCropperScaledMinHeight()):(this.cropperScaledMinWidth=20,this.cropperScaledMinHeight=20)}setCropperScaledMinWidth(){this.cropperScaledMinWidth=this.options.cropperMinWidth>0?Math.max(20,this.options.cropperMinWidth/this.loadedImage.transformed.size.width*this.maxSize().width):20}setCropperScaledMinHeight(){this.options.maintainAspectRatio?this.cropperScaledMinHeight=Math.max(20,this.cropperScaledMinWidth/this.options.aspectRatio):this.options.cropperMinHeight>0?this.cropperScaledMinHeight=Math.max(20,this.options.cropperMinHeight/this.loadedImage.transformed.size.height*this.maxSize().height):this.cropperScaledMinHeight=20}setCropperScaledMaxSize(){if(this.loadedImage?.transformed.size){let o=this.loadedImage.transformed.size.width/this.maxSize().width;this.cropperScaledMaxWidth=this.options.cropperMaxWidth>20?this.options.cropperMaxWidth/o:this.maxSize().width,this.cropperScaledMaxHeight=this.options.cropperMaxHeight>20?this.options.cropperMaxHeight/o:this.maxSize().height,this.options.maintainAspectRatio&&(this.cropperScaledMaxWidth>this.cropperScaledMaxHeight*this.options.aspectRatio?this.cropperScaledMaxWidth=this.cropperScaledMaxHeight*this.options.aspectRatio:this.cropperScaledMaxWidth<this.cropperScaledMaxHeight*this.options.aspectRatio&&(this.cropperScaledMaxHeight=this.cropperScaledMaxWidth/this.options.aspectRatio))}else this.cropperScaledMaxWidth=this.maxSize().width,this.cropperScaledMaxHeight=this.maxSize().height}equalsCropperPosition(o){let e=this.cropper();return e==null&&o==null||e!=null&&o!=null&&e.x1.toFixed(3)===o.x1.toFixed(3)&&e.y1.toFixed(3)===o.y1.toFixed(3)&&e.x2.toFixed(3)===o.x2.toFixed(3)&&e.y2.toFixed(3)===o.y2.toFixed(3)}equalsTransformTranslate(o){return(this.transform.translateH??0)===(o.translateH??0)&&(this.transform.translateV??0)===(o.translateV??0)}equalsTransform(o){return this.equalsTransformTranslate(o)&&(this.transform.scale??1)===(o.scale??1)&&(this.transform.rotate??0)===(o.rotate??0)&&(this.transform.flipH??!1)===(o.flipH??!1)&&(this.transform.flipV??!1)===(o.flipV??!1)}aspectRatioIsCorrect(){let o=this.cropper();return(o.x2-o.x1)/(o.y2-o.y1)===this.options.aspectRatio}resizeCropperPosition(o){(o.width!==this.maxSize().width||o.height!==this.maxSize().height)&&this.cropper.update(e=>({x1:e.x1*this.maxSize().width/o.width,x2:e.x2*this.maxSize().width/o.width,y1:e.y1*this.maxSize().height/o.height,y2:e.y2*this.maxSize().height/o.height}))}maxSizeCropperPosition(){return{x1:0,y1:0,x2:this.maxSize().width,y2:this.maxSize().height}}toCropInput(){return{cropper:this.cropper(),maxSize:this.maxSize(),transform:this.transform,loadedImage:this.loadedImage,options:W({},this.options)}}},Ye=function(t){return t.Drag="drag",t.Move="move",t.Resize="resize",t.Pinch="pinch",t}(Ye||{});function Ug(t,o,e){let i=t.width,n=t.height;o=Math.round(o),e=Math.round(e);let r=i/o,l=n/e,h=Math.ceil(r/2),w=Math.ceil(l/2),D=t.getContext("2d");if(D){let N=D.getImageData(0,0,i,n),_e=D.createImageData(o,e),le=N.data,de=_e.data;for(let be=0;be<e;be++)for(let Ke=0;Ke<o;Ke++){let ee=(Ke+be*o)*4,pe=be*l,ne=0,Ne=0,Xe=0,ct=0,Ft=0,jn=0,Qn=0,ga=Math.floor(Ke*r),_a=Math.floor(be*l),_n=Math.ceil((Ke+1)*r),bn=Math.ceil((be+1)*l);_n=Math.min(_n,i),bn=Math.min(bn,n);for(let Di=_a;Di<bn;Di++){let Wn=Math.abs(pe-Di)/w,ba=Ke*r,va=Wn*Wn;for(let Li=ga;Li<_n;Li++){let Kn=Math.abs(ba-Li)/h,Nt=Math.sqrt(va+Kn*Kn);if(Nt>=1)continue;ne=2*Nt*Nt*Nt-3*Nt*Nt+1;let jt=4*(Li+Di*i);Qn+=ne*le[jt+3],Xe+=ne,le[jt+3]<255&&(ne=ne*le[jt+3]/250),ct+=ne*le[jt],Ft+=ne*le[jt+1],jn+=ne*le[jt+2],Ne+=ne}}de[ee]=ct/Ne,de[ee+1]=Ft/Ne,de[ee+2]=jn/Ne,de[ee+3]=Qn/Xe}t.width=o,t.height=e,D.putImageData(_e,0,0)}}function ua(t,o){return t/100*o}var Un=class{crop(o,e){let i=this.getImagePosition(o),n=i.x2-i.x1,r=i.y2-i.y1,l=document.createElement("canvas");l.width=n,l.height=r;let h=l.getContext("2d");if(!h)return null;o.options?.backgroundColor!=null&&(h.fillStyle=o.options.backgroundColor,h.fillRect(0,0,n,r));let w=(o.transform?.scale||1)*(o.transform?.flipH?-1:1),D=(o.transform?.scale||1)*(o.transform?.flipV?-1:1),{translateH:N,translateV:_e}=this.getCanvasTranslate(o),le=o.loadedImage.transformed;h.setTransform(w,0,0,D,le.size.width/2+N,le.size.height/2+_e),h.translate(-i.x1/w,-i.y1/D),h.rotate((o.transform?.rotate||0)*Math.PI/180),h.drawImage(le.image,-le.size.width/2,-le.size.height/2);let de={width:n,height:r,imagePosition:i,cropperPosition:W({},o.cropper)};o.options?.containWithinAspectRatio&&(de.offsetImagePosition=this.getOffsetImagePosition(o));let be=this.getResizeRatio(n,r,o.options);return be!==1&&(de.width=Math.round(n*be),de.height=o.options?.maintainAspectRatio?Math.round(de.width/(o.options?.aspectRatio??1)):Math.round(r*be),Ug(l,de.width,de.height)),e==="blob"?this.cropToBlob(de,l,o):(de.base64=l.toDataURL("image/"+(o.options?.format??"png"),this.getQuality(o.options)),de)}cropToBlob(o,e,i){return Ie(this,null,function*(){return o.blob=yield new Promise(n=>e.toBlob(n,"image/"+(i.options?.format??"png"),this.getQuality(i.options))),o.blob&&(o.objectUrl=URL.createObjectURL(o.blob)),o})}getCanvasTranslate(o){if(o.transform?.translateUnit==="px"){let e=this.getRatio(o);return{translateH:(o.transform?.translateH||0)*e,translateV:(o.transform?.translateV||0)*e}}else return{translateH:o.transform?.translateH?ua(o.transform.translateH,o.loadedImage.transformed.size.width):0,translateV:o.transform?.translateV?ua(o.transform.translateV,o.loadedImage.transformed.size.height):0}}getRatio(o){return o.loadedImage.transformed.size.width/o.maxSize.width}getImagePosition(o){let e=this.getRatio(o),i={x1:Math.round(o.cropper.x1*e),y1:Math.round(o.cropper.y1*e),x2:Math.round(o.cropper.x2*e),y2:Math.round(o.cropper.y2*e)};return o.options?.containWithinAspectRatio||(i.x1=Math.max(i.x1,0),i.y1=Math.max(i.y1,0),i.x2=Math.min(i.x2,o.loadedImage.transformed.size.width),i.y2=Math.min(i.y2,o.loadedImage.transformed.size.height)),i}getOffsetImagePosition(o){let e=(o.options?.canvasRotation??0)+o.loadedImage.exifTransform.rotate,i=this.getRatio(o),n,r;e%2?(n=(o.loadedImage.transformed.size.width-o.loadedImage.original.size.height)/2,r=(o.loadedImage.transformed.size.height-o.loadedImage.original.size.width)/2):(n=(o.loadedImage.transformed.size.width-o.loadedImage.original.size.width)/2,r=(o.loadedImage.transformed.size.height-o.loadedImage.original.size.height)/2);let l=o.cropper,h={x1:Math.round(l.x1*i)-n,y1:Math.round(l.y1*i)-r,x2:Math.round(l.x2*i)-n,y2:Math.round(l.y2*i)-r};return o.options?.containWithinAspectRatio||(h.x1=Math.max(h.x1,0),h.y1=Math.max(h.y1,0),h.x2=Math.min(h.x2,o.loadedImage.transformed.size.width),h.y2=Math.min(h.y2,o.loadedImage.transformed.size.height)),h}getResizeRatio(o,e,i){let n=new Array;i?.resizeToWidth&&i.resizeToWidth>0&&n.push(i.resizeToWidth/o),i?.resizeToHeight&&i.resizeToHeight>0&&n.push(i.resizeToHeight/e);let r=n.length===0?1:Math.min(...n);return r>1&&!i?.onlyScaleDown?r:Math.min(r,1)}getQuality(o){return Math.min(1,Math.max(0,(o?.imageQuality??92)/100))}},Ng=[new Uint8Array([255,216,255,225,0,34,69,120,105,102,0,0,77,77,0,42,0,0,0,8,0,1,1,18,0,3,0,0,0,1,0,6,0,0,0,0,0,0,255,219,0,132,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,255,192,0,17,8,0,1,0,2,3,1,17,0,2,17,1,3,17,1,255,196,0,74,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,16,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,17,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,218,0,12,3,1,0,2,17,3,17,0,63,0,63,240,127,255,217])],jg=URL.createObjectURL(new Blob(Ng,{type:"image/jpeg"}));function Qg(){return new Promise(t=>{let o=new Image;o.onload=()=>{let e=o.width===1&&o.height===2;t(e)},o.src=jg})}function Wg(t){switch(typeof t=="object"&&(t=Kg(t)),t){case 2:return{rotate:0,flip:!0};case 3:return{rotate:2,flip:!1};case 4:return{rotate:2,flip:!0};case 5:return{rotate:1,flip:!0};case 6:return{rotate:1,flip:!1};case 7:return{rotate:3,flip:!0};case 8:return{rotate:3,flip:!1};default:return{rotate:0,flip:!1}}}function Kg(t){let o=new DataView(t);if(o.getUint16(0,!1)!==65496)return-2;let e=o.byteLength,i=2;for(;i<e;){if(o.getUint16(i+2,!1)<=8)return-1;let n=o.getUint16(i,!1);if(i+=2,n==65505){if(o.getUint32(i+=2,!1)!==1165519206)return-1;let r=o.getUint16(i+=6,!1)==18761;i+=o.getUint32(i+4,r);let l=o.getUint16(i,r);i+=2;for(let h=0;h<l;h++)if(o.getUint16(i+h*12,r)==274)return o.getUint16(i+h*12+8,r)}else{if((n&65280)!==65280)break;i+=o.getUint16(i,!1)}}return-1}var Nn=class{constructor(){this.autoRotateSupported=Qg()}loadImageFile(o,e){return Ie(this,null,function*(){let i=yield o.arrayBuffer();return e.checkImageType?yield this.checkImageTypeAndLoadImageFromArrayBuffer(i,o.type,e):yield this.loadImageFromArrayBuffer(i,e)})}checkImageTypeAndLoadImageFromArrayBuffer(o,e,i){return this.isValidImageType(e)?this.loadImageFromArrayBuffer(o,i,e):Promise.reject(new Error("Invalid image type"))}isValidImageType(o){return/image\/(png|jpg|jpeg|heic|bmp|gif|tiff|svg|webp|x-icon|vnd.microsoft.icon)/.test(o)}loadImageFromURL(o,e){return Ie(this,null,function*(){let n=yield(yield fetch(o)).blob(),r=yield n.arrayBuffer();return yield this.loadImageFromArrayBuffer(r,e,n.type)})}loadBase64Image(o,e){let i=this.base64ToArrayBuffer(o);return this.loadImageFromArrayBuffer(i,e)}base64ToArrayBuffer(o){o=o.replace(/^data:([^;]+);base64,/gmi,"");let e=atob(o),i=e.length,n=new Uint8Array(i);for(let r=0;r<i;r++)n[r]=e.charCodeAt(r);return n.buffer}loadImageFromArrayBuffer(o,e,i){return Ie(this,null,function*(){let n=yield new Promise((r,l)=>Ie(this,null,function*(){try{let h=new Blob([o],i?{type:i}:void 0),w=URL.createObjectURL(h),D=new Image,_e=i==="image/svg+xml"?yield this.getSvgImageSize(h):void 0;D.onload=()=>r({originalImage:D,originalImageSize:_e,originalObjectUrl:w,originalArrayBuffer:o}),D.onerror=l,D.src=w}catch(h){l(h)}}));return yield this.transformImageFromArrayBuffer(n,e,n.originalImageSize!=null)})}getSvgImageSize(o){return Ie(this,null,function*(){let n=new DOMParser().parseFromString(yield o.text(),"image/svg+xml").querySelector("svg");if(!n)throw Error("Failed to parse SVG image");let r=n.getAttribute("width"),l=n.getAttribute("height");if(r&&l)return null;let h=n.getAttribute("viewBox")||n.getAttribute("viewbox");if(h){let w=h.split(" ");return{width:+w[2],height:+w[3]}}throw Error("Failed to load SVG image. SVG must have width + height or viewBox definition.")})}transformImageFromArrayBuffer(o,e,i=!1){return Ie(this,null,function*(){let n=yield this.autoRotateSupported,r=Wg(n?-1:o.originalArrayBuffer);if(!o.originalImage||!o.originalImage.complete)return Promise.reject(new Error("No image loaded"));let l={original:{objectUrl:o.originalObjectUrl,image:o.originalImage,size:o.originalImageSize??{width:o.originalImage.naturalWidth,height:o.originalImage.naturalHeight}},exifTransform:r};return this.transformLoadedImage(l,e,i)})}transformLoadedImage(o,e,i=!1){return Ie(this,null,function*(){let n=(e.canvasRotation??0)+o.exifTransform.rotate,r=o.original.size;if(!i&&n===0&&!o.exifTransform.flip&&!e.containWithinAspectRatio)return{original:{objectUrl:o.original.objectUrl,image:o.original.image,size:W({},r)},transformed:{objectUrl:o.original.objectUrl,image:o.original.image,size:W({},r)},exifTransform:o.exifTransform};let l=this.getTransformedSize(r,o.exifTransform,e),h=document.createElement("canvas");h.width=l.width,h.height=l.height;let w=h.getContext("2d");w?.setTransform(o.exifTransform.flip?-1:1,0,0,1,h.width/2,h.height/2),w?.rotate(Math.PI*(n/2)),w?.drawImage(o.original.image,-r.width/2,-r.height/2);let D=yield new Promise(le=>h.toBlob(le,"image/"+(e.format??"png")));if(!D)throw new Error("Failed to get Blob for transformed image.");let N=URL.createObjectURL(D),_e=yield this.loadImageFromObjectUrl(N);return{original:{objectUrl:o.original.objectUrl,image:o.original.image,size:W({},r)},transformed:{objectUrl:N,image:_e,size:{width:_e.width,height:_e.height}},exifTransform:o.exifTransform}})}loadImageFromObjectUrl(o){return new Promise((e,i)=>{let n=new Image;n.onload=()=>e(n),n.onerror=i,n.src=o})}getTransformedSize(o,e,i){let n=(i.canvasRotation??0)+e.rotate;if(i.containWithinAspectRatio)if(n%2){let r=o.width*(i.aspectRatio??1),l=o.height/(i.aspectRatio??1);return{width:Math.max(o.height,r),height:Math.max(o.width,l)}}else{let r=o.height*(i.aspectRatio??1),l=o.width/(i.aspectRatio??1);return{width:Math.max(o.width,r),height:Math.max(o.height,l)}}return n%2?{height:o.width,width:o.height}:{width:o.width,height:o.height}}};function Gg(t){switch(t){case"ArrowUp":return"top";case"ArrowRight":return"right";case"ArrowDown":return"bottom";case"ArrowLeft":default:return"left"}}function Zg(t){switch(t){case"ArrowUp":return"bottom";case"ArrowRight":return"left";case"ArrowDown":return"top";case"ArrowLeft":default:return"right"}}function Yg(t,o){switch(t){case"ArrowUp":return{clientX:0,clientY:o*-1};case"ArrowRight":return{clientX:o,clientY:0};case"ArrowDown":return{clientX:0,clientY:o};case"ArrowLeft":default:return{clientX:o*-1,clientY:0}}}var ha=(()=>{class t{get alignImageStyle(){return this.state.options.alignImage}constructor(e){this.sanitizer=e,this.pinchStart$=new Gn,this.cropService=new Un,this.loadImageService=new Nn,this.setImageMaxSizeRetries=0,this.resizedWhileHidden=!1,this.moveTypes=Ye,this.state=new Hn,this.safeImgDataUrl=Me(void 0),this.safeTransformStyle=Me(void 0),this.marginLeft="0px",this.imageVisible=!1,this.allowMoveImage=!1,this.checkImageType=!0,this.disabled=!1,this.hidden=!1,this.imageCropped=Ct(),this.startCropImage=Ct(),this.imageLoaded=Ct(),this.cropperReady=Ct(),this.loadImageFailed=Ct(),this.transformChange=Ct(),this.cropperChange=Ct(),this.reset()}ngOnInit(){this.state.stepSize=this.initialStepSize||this.state.stepSize}ngOnChanges(e){let i=this.state.cropper(),n=this.state.transform,r=this.state.options.backgroundColor;if(this.state.setOptionsFromChanges(e),this.onChangesInputImage(e),e.transform&&this.transform&&(this.state.transform=this.transform,this.setCssTransform()),!this.state.loadedImage?.transformed.image.complete||!this.state.maxSize)return;if(this.containWithinAspectRatio&&e.aspectRatio||e.containWithinAspectRatio||e.canvasRotation){this.loadImageService.transformLoadedImage(this.state.loadedImage,this.state.options).then(h=>this.setLoadedImage(h)).catch(h=>this.loadImageError(h));return}e.cropper&&this.cropper&&this.state.cropper.set(Vi(this.cropper,this.state,!0));let l=!this.state.equalsCropperPosition(i);l&&(!this.cropper||!this.state.equalsCropperPosition(this.cropper))&&this.cropperChange.emit(this.state.cropper()),(l||!this.state.equalsTransform(n)||this.state.options.backgroundColor!==r)&&this.doAutoCrop(),e.hidden&&this.resizedWhileHidden&&!this.hidden&&setTimeout(()=>{this.onResize(),this.resizedWhileHidden=!1})}onChangesInputImage(e){(e.imageChangedEvent||e.imageURL||e.imageBase64||e.imageFile)&&this.reset(),e.imageChangedEvent&&this.isValidImageChangedEvent()&&this.loadImageFile(this.imageChangedEvent.target.files[0]),e.imageURL&&this.imageURL&&this.loadImageFromURL(this.imageURL),e.imageBase64&&this.imageBase64&&this.loadBase64Image(this.imageBase64),e.imageFile&&this.imageFile&&this.loadImageFile(this.imageFile)}isValidImageChangedEvent(){let e=this.imageChangedEvent?.target?.files;return e instanceof FileList&&e.length>0}reset(){this.state.loadedImage=void 0,this.state.maxSize.set({width:0,height:0}),this.imageVisible=!1}loadImageFile(e){this.loadImageService.loadImageFile(e,this.state.options).then(i=>this.setLoadedImage(i)).catch(i=>this.loadImageError(i))}loadBase64Image(e){this.loadImageService.loadBase64Image(e,this.state.options).then(i=>this.setLoadedImage(i)).catch(i=>this.loadImageError(i))}loadImageFromURL(e){this.loadImageService.loadImageFromURL(e,this.state.options).then(i=>this.setLoadedImage(i)).catch(i=>this.loadImageError(i))}setLoadedImage(e){this.state.loadedImage=e,this.safeImgDataUrl.set(this.sanitizer.bypassSecurityTrustResourceUrl(e.transformed.objectUrl))}loadImageError(e){console.error(e),this.loadImageFailed.emit()}setCssTransform(){let e=this.state.transform?.translateUnit||"%";this.safeTransformStyle.set(this.sanitizer.bypassSecurityTrustStyle(`translate(${this.state.transform.translateH||0}${e}, ${this.state.transform.translateV||0}${e}) scaleX(`+(this.state.transform.scale||1)*(this.state.transform.flipH?-1:1)+") scaleY("+(this.state.transform.scale||1)*(this.state.transform.flipV?-1:1)+") rotate("+(this.state.transform.rotate||0)+"deg)"))}imageLoadedInView(){this.state.loadedImage!=null&&(this.imageLoaded.emit(this.state.loadedImage),this.setImageMaxSizeRetries=0,setTimeout(()=>this.checkImageMaxSizeRecursively()))}checkImageMaxSizeRecursively(){this.setImageMaxSizeRetries>40?this.loadImageFailed.emit():this.sourceImageLoaded()?(this.setMaxSize(),this.cropper&&(!this.maintainAspectRatio||this.state.aspectRatioIsCorrect())?(this.state.cropper.set(Vi(this.cropper,this.state,!0)),this.emitCropperPositionChange(this.cropper)):(this.state.cropper.set(Vi(this.state.maxSizeCropperPosition(),this.state,!0)),this.cropperChange.emit(this.state.cropper())),this.imageVisible=!0,this.cropperReady.emit(this.state.maxSize()),this.doAutoCrop()):(this.setImageMaxSizeRetries++,setTimeout(()=>this.checkImageMaxSizeRecursively(),50))}sourceImageLoaded(){return this.sourceImage?.nativeElement?.offsetWidth>1}onResize(){if(this.state.loadedImage)if(this.hidden)this.resizedWhileHidden=!0;else{let e=this.state.maxSize();this.setMaxSize(),this.state.resizeCropperPosition(e)}}keyboardAccess(e){this.changeKeyboardStepSize(e),this.keyboardMoveCropper(e)}changeKeyboardStepSize(e){let i=+e.key;i>=1&&i<=9&&(this.state.stepSize=i)}keyboardMoveCropper(e){if(!["ArrowUp","ArrowDown","ArrowRight","ArrowLeft"].includes(e.key))return;let n=e.shiftKey?Ye.Resize:Ye.Move,r=e.altKey?Zg(e.key):Gg(e.key),l=Yg(e.key,this.state.stepSize);e.preventDefault(),e.stopPropagation(),this.moveStart={type:n,position:r,clientX:0,clientY:0,transform:this.state.transform,cropper:this.state.cropper()},this.handleMouseMove(l),this.handleMouseUp()}startMove(e,i,n=null){this.disabled||this.moveStart&&this.moveStart.type===Ye.Pinch||i===Ye.Drag&&!this.allowMoveImage||("preventDefault"in e&&e.preventDefault(),this.moveStart={type:i,position:n,clientX:fn(e),clientY:gn(e),transform:this.state.transform,cropper:this.state.cropper()},this.initMouseMove())}initMouseMove(){vn(Pt(document,"mousemove"),Pt(document,"touchmove")).pipe(yn(vn(Pt(document,"mouseup"),Pt(document,"touchend"),this.pinchStart$).pipe(Xn()))).subscribe({next:e=>this.handleMouseMove(e),complete:()=>this.handleMouseUp()})}handleMouseMove(e){if(this.moveStart){if("stopPropagation"in e&&e.stopPropagation(),"preventDefault"in e&&e.preventDefault(),this.moveStart.type===Ye.Move)this.state.cropper.set(hn(Bg(e,this.moveStart),this.state,!0));else if(this.moveStart.type===Ye.Resize)!this.cropperStaticWidth&&!this.cropperStaticHeight&&this.state.cropper.set(hn(ma(e,this.moveStart,this.state),this.state,!1));else if(this.moveStart.type===Ye.Drag){let i=fn(e)-this.moveStart.clientX,n=gn(e)-this.moveStart.clientY;this.state.transform=je(W({},this.state.transform),{translateH:(this.moveStart.transform?.translateH||0)+i,translateV:(this.moveStart.transform?.translateV||0)+n}),this.setCssTransform()}}}handleMouseUp(){!this.moveStart||this.moveStart.type===Ye.Pinch||((!this.state.equalsCropperPosition(this.moveStart.cropper)||this.moveStart.transform&&!this.state.equalsTransform(this.moveStart.transform))&&(this.moveStart.type===Ye.Drag?this.transformChange.emit(this.state.transform):this.cropperChange.emit(this.state.cropper()),this.doAutoCrop()),this.moveStart=void 0)}startPinch(e){if(this.disabled||!this.sourceImageLoaded()||e.touches.length<2)return;"preventDefault"in e&&e.preventDefault();let i=this.state.cropper();this.moveStart={type:Ye.Pinch,position:"center",clientX:i.x1+(i.x2-i.x1)/2,clientY:i.y1+(i.y2-i.y1)/2,cropper:i},this.initPinch()}initPinch(){this.pinchStart$.next(),Pt(document,"touchmove").pipe(yn(Pt(document,"touchend"))).subscribe({next:e=>this.handlePinchMove(e),complete:()=>this.handlePinchStop()})}handlePinchMove(e){this.moveStart&&(e.preventDefault&&e.preventDefault(),this.moveStart.type===Ye.Pinch&&!this.cropperStaticWidth&&!this.cropperStaticHeight&&this.state.cropper.set(hn(ma(e,this.moveStart,this.state),this.state,!1)))}handlePinchStop(){this.moveStart&&(this.state.equalsCropperPosition(this.moveStart.cropper)||(this.emitCropperPositionChange(this.moveStart.cropper),this.doAutoCrop()),this.moveStart=void 0)}setMaxSize(){if(this.sourceImage){let e=getComputedStyle(this.sourceImage.nativeElement);this.state.setMaxSize(parseFloat(e.width),parseFloat(e.height)),this.marginLeft=this.sanitizer.bypassSecurityTrustStyle("calc(50% - "+this.state.maxSize().width/2+"px)")}}emitCropperPositionChange(e){this.state.equalsCropperPosition(e)||this.cropperChange.emit(this.state.cropper())}doAutoCrop(){this.state.options.autoCrop&&this.crop()}crop(e=this.state.options.output){if(this.state.loadedImage?.transformed?.image!=null){if(this.startCropImage.emit(),e==="blob")return this.cropToBlob();if(e==="base64")return this.cropToBase64()}return null}cropToBlob(){return new Promise((e,i)=>Ie(this,null,function*(){let n=yield this.cropService.crop(this.state.toCropInput(),"blob");n?(this.imageCropped.emit(n),e(n)):i("Crop image failed")}))}cropToBase64(){let e=this.cropService.crop(this.state.toCropInput(),"base64");return e?(this.imageCropped.emit(e),e):null}resetCropperPosition(){this.state.cropper.set(Vi(this.state.maxSizeCropperPosition(),this.state,!0)),this.cropperChange.emit(this.state.cropper())}ngOnDestroy(){this.pinchStart$.complete()}static{this.\u0275fac=function(i){return new(i||t)(M(Kt))}}static{this.\u0275cmp=x({type:t,selectors:[["image-cropper"]],viewQuery:function(i,n){if(i&1&&($(Dg,7),$(Lg,5)),i&2){let r;v(r=y())&&(n.wrapper=r.first),v(r=y())&&(n.sourceImage=r.first)}},hostVars:6,hostBindings:function(i,n){i&1&&_("resize",function(){return n.onResize()},!1,eo),i&2&&(Se("text-align",n.alignImageStyle),ve("disabled",n.disabled)("ngx-ic-hidden",n.hidden))},inputs:{imageChangedEvent:"imageChangedEvent",imageURL:"imageURL",imageBase64:"imageBase64",imageFile:"imageFile",imageAltText:"imageAltText",options:"options",cropperFrameAriaLabel:"cropperFrameAriaLabel",output:"output",format:"format",autoCrop:"autoCrop",cropper:"cropper",transform:"transform",maintainAspectRatio:"maintainAspectRatio",aspectRatio:"aspectRatio",resetCropOnAspectRatioChange:"resetCropOnAspectRatioChange",resizeToWidth:"resizeToWidth",resizeToHeight:"resizeToHeight",cropperMinWidth:"cropperMinWidth",cropperMinHeight:"cropperMinHeight",cropperMaxHeight:"cropperMaxHeight",cropperMaxWidth:"cropperMaxWidth",cropperStaticWidth:"cropperStaticWidth",cropperStaticHeight:"cropperStaticHeight",canvasRotation:"canvasRotation",initialStepSize:"initialStepSize",roundCropper:"roundCropper",onlyScaleDown:"onlyScaleDown",imageQuality:"imageQuality",backgroundColor:"backgroundColor",containWithinAspectRatio:"containWithinAspectRatio",hideResizeSquares:"hideResizeSquares",allowMoveImage:"allowMoveImage",checkImageType:"checkImageType",alignImage:"alignImage",disabled:"disabled",hidden:"hidden"},outputs:{imageCropped:"imageCropped",startCropImage:"startCropImage",imageLoaded:"imageLoaded",cropperReady:"cropperReady",loadImageFailed:"loadImageFailed",transformChange:"transformChange",cropperChange:"cropperChange"},features:[Te],decls:4,vars:10,consts:[["sourceImage",""],[3,"touchstart"],["class","ngx-ic-source-image","role","presentation",3,"src","visibility","transform","ngx-ic-draggable","load","mousedown","touchstart","error",4,"ngIf"],[1,"ngx-ic-overlay"],["class","ngx-ic-cropper","tabindex","0",3,"ngx-ic-round","top","left","width","height","margin-left","visibility","keydown",4,"ngIf"],["role","presentation",1,"ngx-ic-source-image",3,"load","mousedown","touchstart","error","src"],["tabindex","0",1,"ngx-ic-cropper",3,"keydown"],["role","presentation",1,"ngx-ic-move",3,"mousedown","touchstart"],[4,"ngIf"],["role","presentation",1,"ngx-ic-resize","ngx-ic-topleft",3,"mousedown","touchstart"],[1,"ngx-ic-square"],["role","presentation",1,"ngx-ic-resize","ngx-ic-topright",3,"mousedown","touchstart"],["role","presentation",1,"ngx-ic-resize","ngx-ic-bottomright",3,"mousedown","touchstart"],["role","presentation",1,"ngx-ic-resize","ngx-ic-bottomleft",3,"mousedown","touchstart"],["role","presentation",1,"ngx-ic-resize-bar","ngx-ic-top",3,"mousedown","touchstart"],[1,"ngx-ic-resize","ngx-ic-top",3,"mousedown","touchstart"],["role","presentation",1,"ngx-ic-resize-bar","ngx-ic-right",3,"mousedown","touchstart"],[1,"ngx-ic-resize","ngx-ic-right",3,"mousedown","touchstart"],["role","presentation",1,"ngx-ic-resize-bar","ngx-ic-bottom",3,"mousedown","touchstart"],[1,"ngx-ic-resize","ngx-ic-bottom",3,"mousedown","touchstart"],["role","presentation",1,"ngx-ic-resize-bar","ngx-ic-left",3,"mousedown","touchstart"],[1,"ngx-ic-resize","ngx-ic-left",3,"mousedown","touchstart"]],template:function(i,n){i&1&&(p(0,"div",1),_("touchstart",function(l){return n.startPinch(l)}),m(1,zg,2,8,"img",2),u(2,"div",3),m(3,Rg,3,16,"div",4),d()),i&2&&(Se("background",n.imageVisible&&n.state.options.backgroundColor),s(),a("ngIf",n.safeImgDataUrl()),s(),Se("width",n.state.maxSize().width||0,"px")("height",n.state.maxSize().height||0,"px")("margin-left",n.state.options.alignImage==="center"?n.marginLeft:null),s(),a("ngIf",n.imageVisible))},dependencies:[Z],styles:['[_nghost-%COMP%]{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{width:100%;position:relative}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   img.ngx-ic-source-image[_ngcontent-%COMP%]{display:inline;max-width:100%;max-height:100%;transform-origin:center}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   img.ngx-ic-source-image.ngx-ic-draggable[_ngcontent-%COMP%]{user-drag:none;-webkit-user-drag:none;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;cursor:grab}[_nghost-%COMP%]   .ngx-ic-overlay[_ngcontent-%COMP%]{position:absolute;pointer-events:none;touch-action:none;outline:var(--cropper-overlay-color, white) solid 100vw;top:0;left:0}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]{position:absolute;display:flex;color:var(--cropper-color, #53535C);background:transparent;outline:var(--cropper-outline-color, rgba(255, 255, 255, .3)) solid 100vw;touch-action:none}@media (orientation: portrait){[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]{outline-width:100vh}}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]:after{position:absolute;content:"";inset:0;pointer-events:none;border:dashed 1px;opacity:.75;color:inherit;z-index:1}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-move[_ngcontent-%COMP%]{width:100%;cursor:move;border:var(--cropper-border, 1px solid rgba(255, 255, 255, .5))}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]:hover   .ngx-ic-move[_ngcontent-%COMP%]{border:var(--cropper-hover-border, var(--cropper-border, 1px solid rgba(255, 255, 255, .5)))}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]:focus   .ngx-ic-move[_ngcontent-%COMP%]{border:var(--cropper-focus-border, 2px solid dodgerblue)}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]:focus   .ngx-ic-resize[_ngcontent-%COMP%]   .ngx-ic-square[_ngcontent-%COMP%]{background:var(--cropper-resize-square-focus-bg, var(--cropper-resize-square-bg, #53535C));border:var(--cropper-resize-square-focus-border, var(--cropper-resize-square-border, 1px solid rgba(255, 255, 255, .5)))}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%]{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%]   .ngx-ic-square[_ngcontent-%COMP%]{display:inline-block;width:6px;height:6px;box-sizing:content-box;background:var(--cropper-resize-square-bg, #53535C);border:var(--cropper-resize-square-border, 1px solid rgba(255, 255, 255, .5))}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%]:hover   .ngx-ic-square[_ngcontent-%COMP%]{background:var(--cropper-resize-square-hover-bg, var(--cropper-resize-square-bg, #53535C));border:var(--cropper-resize-square-hover-border, var(--cropper-resize-square-border, 1px solid rgba(255, 255, 255, .5)))}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-topleft[_ngcontent-%COMP%]{top:-12px;left:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-top[_ngcontent-%COMP%]{top:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-topright[_ngcontent-%COMP%]{top:-12px;right:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-right[_ngcontent-%COMP%]{top:calc(50% - 12px);right:-12px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-bottomright[_ngcontent-%COMP%]{bottom:-12px;right:-12px;cursor:nwse-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-bottom[_ngcontent-%COMP%]{bottom:-12px;left:calc(50% - 12px);cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-bottomleft[_ngcontent-%COMP%]{bottom:-12px;left:-12px;cursor:nesw-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize.ngx-ic-left[_ngcontent-%COMP%]{top:calc(50% - 12px);left:-12px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar[_ngcontent-%COMP%]{position:absolute;z-index:1}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-top[_ngcontent-%COMP%]{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-right[_ngcontent-%COMP%]{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-bottom[_ngcontent-%COMP%]{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:ns-resize}[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar.ngx-ic-left[_ngcontent-%COMP%]{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:ew-resize}[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]{outline-color:transparent}[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]:after{border-radius:100%;box-shadow:0 0 0 100vw var(--cropper-outline-color, rgba(255, 255, 255, .3))}@media (orientation: portrait){[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]:after{box-shadow:0 0 0 100vh var(--cropper-outline-color, rgba(255, 255, 255, .3))}}[_nghost-%COMP%]   .ngx-ic-cropper.ngx-ic-round[_ngcontent-%COMP%]   .ngx-ic-move[_ngcontent-%COMP%]{border-radius:100%}.disabled[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-resize-bar[_ngcontent-%COMP%], .disabled[_nghost-%COMP%]   .ngx-ic-cropper[_ngcontent-%COMP%]   .ngx-ic-move[_ngcontent-%COMP%]{display:none}.ngx-ic-hidden[_nghost-%COMP%]{display:none}'],changeDetection:0})}}return t})();var fa=class t{constructor(o){this._authFacade=o}static \u0275fac=function(e){return new(e||t)(Je(Le))};static \u0275mod=J({type:t});static \u0275inj=X({providers:[Po],imports:[ha,U,dn,Rn,_t,er,sa,ur,Ko,Yo,kt,Go,Ho,Ci,Qr,fr,ca,ze,br,yr,ea,Or,Br,da,Wo,Kr,Zr,Vr]})};zi(li,[fo,mn,un,pi],[]);zi(ui,[Ve,Ee,lt,ze,Pi],[]);zi(hi,[Ve,rt,Ze,Ee,Pi],[]);export{fa as UserModule};
