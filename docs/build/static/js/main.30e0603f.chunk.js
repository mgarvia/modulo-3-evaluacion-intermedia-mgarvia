(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"bulbasaur","types":["poison","grass"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},{"id":2,"name":"ivysaur","types":["poison","grass"],"evolution":"bulbasaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},{"id":3,"name":"venusaur","types":["poison","grass"],"evolution":"ivysaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},{"id":4,"name":"charmander","types":["fire"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},{"id":5,"name":"charmeleon","types":["fire"],"evolution":"charmander","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"},{"id":6,"name":"charizard","types":["flying","fire"],"evolution":"charmeleon","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},{"id":7,"name":"squirtle","types":["water"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},{"id":8,"name":"wartortle","types":["water"],"evolution":"squirtle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"},{"id":9,"name":"blastoise","types":["water"],"evolution":"wartortle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"},{"id":10,"name":"caterpie","types":["bug"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"}]')},function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),o=n(6),a=n.n(o),i=(n(13),n(1)),p=n(2),u=n(3),m=n(4),c=n(7),l=(n(14),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"pokemon",id:this.props.id},s.a.createElement("img",{src:this.props.img,alt:this.props.name}),s.a.createElement("div",{className:"pokemon__name"}," ",this.props.name," "),s.a.createElement("div",{className:"pokemon__types"}," ",this.props.types," "))}}]),n}(s.a.Component)),h=(n(15),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props.pokemons;return console.log(e),s.a.createElement("div",null,s.a.createElement("h1",{className:"pokemon__list--title"},"Mi lista de pokemon"),s.a.createElement("ul",{className:"pokemon__list--list"},e.map((function(e){return s.a.createElement(l,{key:e.id,name:e.name,types:e.types.map((function(e){return s.a.createElement("span",{className:"pokemon__types--type"},e)})),img:e.url})}))))}}]),n}(s.a.Component)),k=(n(16),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).pokemons=c,r}return Object(p.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(h,{pokemons:this.pokemons}))}}]),n}(s.a.Component));a.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(k,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.30e0603f.chunk.js.map