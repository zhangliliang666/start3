var app =new Vue({
    el:"#app",
    data:{
        message:"Hello"
    }
})
var app1 = new Vue({
   el:"#app1",
    data:{
       title:"少熬夜"
    } 
})
var app2 = new Vue({
   el:"#app2",
    methods:{
        e:function(){
            alert("gun")
        }
    }
})
var app3 = new Vue({
   el:"#app3",
    data:{
      imgUrl:"img/1.jpg"  
    },
    methods:{
        e:function(){
           this.imgUrl="img/2.jpg"        }
    }
})
var app4 = new Vue({
   el:"#app4",
    data:{
      ts:['西瓜','芒果','橙子']
    },
   
})
var app5 = new Vue({
   el:"#app5",
    data:{
      lists:[
          {name:'首页',url:"index.html"},
          {name:'大页',url:"index.html"},
          {name:'小页',url:"index.html"}
      ]
    },
   
})
var app6 = new Vue({
   el:"#app6",
   
    methods:{
        e:function(s){
           console.log(s + " wold!")       }
    }
})
var app7 = new Vue({
   el:"#app7",
    data:{
      lists:['西瓜','芒果','橙子']
    },
   
})
var app8 = new Vue({
   el:"#app8",
    data:{
     message:"老宋"
    },
   
})
var app9 = new Vue({
   el:"#app9",
    data:{
     t:true
    },
   
})
var app10 = new Vue({
   el:"#app10",
    data:{
     classOpject:{
         h:true,
         s:true
     }
    },
   
})
var app0 = new Vue({
    el: "#app0",
    methods:{
        e:function(){
            alert("Hello")
        }
    }
})