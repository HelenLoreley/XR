import cont from './test'

Component({
  properties: {
    capacity: {
      type: Number,
      value: 200
    },
    emitRate: {
      type: Number,
      value: 50
    },
    lifeTime:{
      type: Number,
      value: 3
    }
  },
  data: {
    loaded: false
  },
  lifetimes: {},
  methods: {
    handleReady({detail}) {
      // const xrScene = this.scene = detail.value;
      // console.log('xr-scene', xrScene);
      // const xrFrameSystem = wx.getXrFrameSystem()

      // const colorRemap = xrScene.getElementById("colorRemapParticle");
      // const sphere = xrScene.getElementById("sphereParticle");

      
      // colorRemap.getComponent(xrFrameSystem.Particle).useRampGradients = true;
      // colorRemap.getComponent(xrFrameSystem.Particle).addRampGradient(0.0, xrFrameSystem.Vector3.createFromNumber(1.0, 1.0, 1.0));
      // colorRemap.getComponent(xrFrameSystem.Particle).addRampGradient(0.2, xrFrameSystem.Vector3.createFromNumber(0.8, 0.8, 0.05));
      // colorRemap.getComponent(xrFrameSystem.Particle).addRampGradient(0.4, xrFrameSystem.Vector3.createFromNumber(0.86, 0.5, 0.05));
      // colorRemap.getComponent(xrFrameSystem.Particle).addRampGradient(0.6, xrFrameSystem.Vector3.createFromNumber(0.75, 0.18, 0.07));
      // colorRemap.getComponent(xrFrameSystem.Particle).addRampGradient(0.8, xrFrameSystem.Vector3.createFromNumber(0.45, 0.08, 0.06));
      // colorRemap.getComponent(xrFrameSystem.Particle).addRampGradient(1.0, xrFrameSystem.Vector3.createFromNumber(0.05, 0.05, 0.05));

      // sphere.getComponent(xrFrameSystem.Particle).createSphereEmitter(1, 0, 360, 0)


      // particle.getComponent(xrFrameSystem.Particle).subEmitters = [particle.getComponent(xrFrameSystem.Particle).createSubEmitter(
      //   [["stopDuration", "3"], ["minLifeTime", "3"], ["maxLifeTime", "3"], ["minSize", "0.1"], ["maxSize", "0.1"],
      // ["capacity", "20"], ["emitRate", "100"], ["particleEmitterType", "SphereShape"], ["particleEmitterStates", "radius=0.1"]]
      // )]
    //  this.subEmitters = [this.createSubEmitter(
    //  [["stopDuration", "3"], ["minLifeTime", "3"], ["maxLifeTime", "3"], ["minSize", "0.1"], ["maxSize", "0.1"],
    //  ["capacity", "20"], ["emitRate", "100"], ["particleEmitterType", "SphereShape"], ["particleEmitterStates", "radius=0.1"]])]

      // particle.getComponent(xrFrameSystem.Particle).useBillboard = false;


    // // 来自图片数据的二元数组content
    // var content = cont

    // // 影响画作的大小与粒子疏密程度的因子
    // var step = 0.02
    // var height = Math.floor(step * content.length)

    // //设置箱型发射器的发射方向，与粒子初始位置范围
    // particle.getComponent(xrFrameSystem.Particle).createBoxEmitter(xrFrameSystem.Vector3.createFromNumber(1.0, 0.0, 0), xrFrameSystem.Vector3.createFromNumber(1.0, 0.0, 0),
    // xrFrameSystem.Vector3.createFromNumber(0, 0, 0.5), xrFrameSystem.Vector3.createFromNumber(0, height, 0.0));

    // //实现发射器的自定义粒子运作接口
    // particle.getComponent(xrFrameSystem.Particle).particleEmitter.processInstance =  (instance, deltaTime)=> {

    //   var contentTemp = content
    //   var cellNumY = contentTemp.length
    //   var cellNumX = contentTemp[0].length
    //   var width =  Math.floor(step * cellNumX)
    //   if(instance.position.x - instance.particleSystem.emitterPosition.x> width){
    //     instance.age = instance.lifeTime;
    //         return;
    //     }
    //     instance.age = 0;
    //     const posX = Math.floor((instance.position.x -  instance.particleSystem.emitterPosition.x)/ step);
    //     const posY = Math.floor(instance.position.y/ step);
    //     const speed = contentTemp[cellNumY-1-posY][posX] * 0.97;
    //     instance.position.x += ( 1 - speed * 0.97 ) * 0.03 + Math.random() * 0.007;
    //     instance.color.w = speed * 0.3;
    // };
    },

    handleAssetsProgress: function({detail}) {
      console.log('assets progress', detail.value);
      
    },
    handleAssetsLoaded: function({detail}) {
      console.log('assets loaded', detail.value);
      this.setData({loaded: true});
    }
  }
})