(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,r){e.exports={Overlay:"Modal_Overlay__3zur2",Modal:"Modal_Modal__JzWj5",largeImg:"Modal_largeImg__3ob0w"}},12:function(e,t,r){e.exports={item:"ImageGalleryItem_item__1wGgc",img:"ImageGalleryItem_img__1bZmy"}},16:function(e,t,r){e.exports={loader:"Loader_loader__11aHi"}},17:function(e,t,r){e.exports={galleryList:"ImageGallery_galleryList__TUAIy"}},18:function(e,t,r){e.exports={loadMoreBtn:"Button_loadMoreBtn__1JkvB"}},19:function(e,t,r){e.exports={scrollUpBtn:"Up_scrollUpBtn__3tMo6"}},47:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r(0),o=r.n(a),l=r(7),c=r.n(l),i=r(3),s=r(4),u=r(6),h=r(5),d=r(9),p=(r(25),r(14)),m=r(8),f=r.n(m);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var j=a.createElement("path",{d:"M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z",fill:"none",stroke:"currentColor",strokeMiterlimit:10,strokeWidth:32}),v=a.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:10,strokeWidth:32,d:"M338.29 338.29L448 448"});function y(e,t){var r=e.title,n=e.titleId,o=b(e,["title","titleId"]);return a.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512",ref:t,"aria-labelledby":n},o),void 0===r?a.createElement("title",{id:n},"Search"):r?a.createElement("title",{id:n},r):null,j,v)}var O=a.forwardRef(y),w=(r.p,function(e){Object(u.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={value:""},e.handleSubmit=function(t){if(t.preventDefault(),""===e.state.value.trim())return d.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e \u0444\u043e\u0442\u043e ");e.props.onSubmit(e.state.value),e.setState({value:""})},e.handleChange=function(t){var r=t.target,n=r.value,a=r.name;e.setState(Object(p.a)({},a,n))},e}return Object(s.a)(r,[{key:"render",value:function(){return Object(n.jsx)("header",{className:f.a.Searchbar,children:Object(n.jsxs)("form",{onSubmit:this.handleSubmit,className:f.a.SearchForm,children:[Object(n.jsx)("button",{type:"submit",className:f.a.SearchFormButton,children:Object(n.jsx)(O,{width:"30",height:"30"})}),Object(n.jsx)("input",{className:f.a.SearchFormInput,type:"text",placeholder:"Search images and photos",value:this.state.value,onChange:this.handleChange,name:"value"})]})})}}]),r}(a.Component)),S=r(13),x=r(12),k=r.n(x),_=function(e){var t=e.id,r=e.src,a=e.largeImageURL,o=e.onClickImage;return Object(n.jsx)("li",{className:k.a.item,children:Object(n.jsx)("img",{className:k.a.img,src:r,id:t,"data-source":a,onClick:function(){return o({largeImageURL:a})},alt:""})},t)},I=r(15),M=r.n(I),C=r(16),L=r.n(C),U=function(e){Object(u.a)(r,e);var t=Object(h.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){return Object(n.jsx)(M.a,{className:L.a.loader,type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})}}]),r}(a.Component),B=r(17),E=r.n(B),N=function(e){Object(u.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={foto:[],loading:!1,error:null},e.onClickImage=function(t){e.props.getLargeImgUrl(t)},e}return Object(s.a)(r,[{key:"componentDidUpdate",value:function(e,t){var r=this,n=e.query,a=this.props.query,o=this.props.page,l=e.page;if(n!==a||l!==o)return n!==a&&this.setState({foto:[]}),this.setState({loading:!0}),fetch("".concat("https://pixabay.com/api/","?q=").concat(a,"&page=").concat(o,"&key=").concat("20043473-ae40e6b1a39d8f5aaf9df0792","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(e){return 0===e.totalHits?Promise.reject(new Error("\u0422\u0430\u043a\u043e\u0439 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u0444\u043e\u0442\u043e \u043d\u0435\u0442")):(r.setState({error:null}),e.hits)})).then((function(e){return r.setState((function(t){return{foto:[].concat(Object(S.a)(t.foto),Object(S.a)(e))}}))})).catch((function(e){return r.setState({error:e})})).finally((function(){r.setState({loading:!1})}));this.props.scrollDown()}},{key:"render",value:function(){var e=this,t=this.state,r=t.loading,a=t.foto,o=t.error;return Object(n.jsxs)("div",{children:[o&&Object(n.jsx)("h2",{children:o.message}),r&&Object(n.jsx)(U,{}),Object(n.jsx)("ul",{className:E.a.galleryList,children:a.map((function(t){return Object(n.jsx)(_,{src:t.webformatURL,id:t.id,largeImageURL:t.largeImageURL,onClickImage:e.onClickImage},t.id)}))})]})}}]),r}(a.Component),F=r(10),D=r.n(F),q=document.querySelector("#modal-root"),R=function(e){Object(u.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(s.a)(r,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(l.createPortal)(Object(n.jsx)("div",{className:D.a.Overlay,onClick:this.handleBackdropClick,children:Object(n.jsx)("div",{className:D.a.Modal,children:Object(n.jsx)("img",{className:D.a.largeImg,src:this.props.large,alt:"largeFoto"})})}),q)}}]),r}(a.Component),P=r(18),A=r.n(P),W=function(e){var t=e.onLoadMore;return Object(n.jsx)("button",{onClick:t,type:"button",className:A.a.loadMoreBtn,children:"Load More"})},J=r(19),z=r.n(J),G=function(e){var t=e.children,r=e.scrollUp;return Object(n.jsx)("button",{onClick:r,type:"button",className:z.a.scrollUpBtn,children:t})};function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var H=a.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:48,d:"M112 244l144-144 144 144M256 120v292"});function Z(e,t){var r=e.title,n=e.titleId,o=T(e,["title","titleId"]);return a.createElement("svg",K({xmlns:"http://www.w3.org/2000/svg",className:"ionicon",viewBox:"0 0 512 512",ref:t,"aria-labelledby":n},o),void 0===r?a.createElement("title",{id:n},"Arrow Up"):r?a.createElement("title",{id:n},r):null,H)}var Q=a.forwardRef(Z),V=(r.p,function(e){Object(u.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={page:1,query:"",showModal:!1,largeImageURL:""},e.toogleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.getLargeImgUrl=function(t){e.setState({largeImageURL:t}),e.setState({showModal:!0})},e.handleFormSubmit=function(t){e.setState({query:t}),e.setState({page:1})},e.loadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(s.a)(r,[{key:"componentDidMount",value:function(){this.scrollDown()}},{key:"componentDidUpdate",value:function(){this.scrollDown()}},{key:"scrollDown",value:function(){window.scrollTo({top:document.body.scrollHeight,left:0,behavior:"smooth"})}},{key:"scrollUp",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(w,{onSubmit:this.handleFormSubmit}),Object(n.jsx)(N,{query:this.state.query,page:this.state.page,scrollDown:this.scrollDown,getLargeImgUrl:this.getLargeImgUrl}),this.state.query.length>0&&Object(n.jsx)(W,{onLoadMore:this.loadMore}),this.state.query.length>0&&Object(n.jsx)(G,{scrollUp:this.scrollUp,children:Object(n.jsx)(Q,{width:"40",height:"40"})}),this.state.showModal&&Object(n.jsx)(R,{onClose:this.toogleModal,large:Object.values(this.state.largeImageURL)}),Object(n.jsx)(d.a,{autoClose:3e3})]})}}]),r}(a.Component));c.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(V,{})}),document.getElementById("root"))},8:function(e,t,r){e.exports={Searchbar:"SearchBar_Searchbar__3lSOb",SearchForm:"SearchBar_SearchForm__3N3fa",SearchFormInput:"SearchBar_SearchFormInput__JWKWo",SearchFormButton:"SearchBar_SearchFormButton__m9A83"}}},[[47,1,2]]]);
//# sourceMappingURL=main.38ba6132.chunk.js.map