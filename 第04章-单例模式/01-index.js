// ! 单例模式的定义是：保证一个类仅有一个实例，并提供一个访问它的全局访问点
{
  var Singleton = function (name) {
    this.name = name;
    this.instance = null;
  };
  Singleton.prototype.getName = function () {
    console.log(this.name);
  };
  Singleton.getInstance = function (name) {
    if (!this.instance) {
      this.instance = new Singleton(name);
    }
    return this.instance;
  };
  var a = Singleton.getInstance('sven1');
  var b = Singleton.getInstance('sven2');
  console.log(a === b); // true
}
