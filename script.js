let engine = Matter.Engine.create();

let render = Matter.Render.create({
  element: document.body,
  engine:engine,
  options: {
    width:1200,
    height:800,
    wireframes:false,
    background: 'white'
  }
});
let ground = Matter.Bodies.rectangle(400,1050,5000,600,{ isStatic: true,
    render: {
         fillStyle: 'rgba(0,0,0,0)',
         strokeStyle: 'black',
         lineWidth: .6
    }
})
let leftWall = Matter.Bodies.rectangle(-297,100,600,5000,{ isStatic: true,
    render: {
         fillStyle: 'rgba(0,0,0,0)',
         strokeStyle: 'black',
         lineWidth: .6
    }
})
let rightWall = Matter.Bodies.rectangle(1497,100,600,5000,{ isStatic: true,
    render: {
         fillStyle: 'rgba(0,0,0,0)',
         strokeStyle: 'black',
         lineWidth: .6
    }
})
engine.world.gravity.scale = 0.001;
let topWall = Matter.Bodies.rectangle(1600,-290,5000,600,{ isStatic: true,
    render: {
         fillStyle: 'rgba(0,0,0,0)',
         strokeStyle: 'black',
         lineWidth: .6
    }
})
let boxA = Matter.Bodies.rectangle(200,200,80,80,{restitution: 1,
  render: {
         fillStyle: 'black',
         strokeStyle: 'black',
         lineWidth: .6
}
    });

let circle = Matter.Bodies.circle(50, 1000, 50, {restitution:0.8,
  render: {
         fillStyle: 'black',
         strokeStyle: 'black',
         lineWidth: .6
}
    }) 

//let boxB = Matter.Bodies.rectangle(450,50,80,80,{restitution:0.8});
let stack = Matter.Composites.stack(500,170,30,30,0,0, function(x,y){
  let sides = Math.round(Matter.Common.random(4,4));
  return Matter.Bodies.polygon(x,y,sides,10,{restitution: .7,
    render: {
        fillStyle: 'rgba(0,0,0,0)',
         strokeStyle: 'black',
         lineWidth: .6
    }
  })
  //return Matter.Bodies.rectangle(x,y,80,80,{restitution:0.8});
})
let mouse = Matter.Mouse.create(render.canvas);
let mouseConstraint = Matter.MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    render: {visible: false}
  }
  
})
render.mouse = mouse
Matter.World.add(engine.world,[boxA,stack,ground,mouseConstraint, leftWall, rightWall, topWall, circle]);
Matter.Engine.run(engine);
Matter.Render.run(render);


