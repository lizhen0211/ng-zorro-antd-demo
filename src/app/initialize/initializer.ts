export class Initializer {

  /**
   * 每个启动组件启动完成之后调用的回调函数。
   * 这个处理器函数会收到这个启动组件的 ComponentRef 实例。
   */
  public appBootstrapped() {
    return () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('app Bootstrapped');
          resolve();
        }, 3000);
      });
    };
  }

  /**
   * 平台初始化之后调用的回调函数
   */
  public platformInitialized() {
    return () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('platformInitialized');
          resolve();
        }, 3000);
      });
    };
  }

  /**
   * 应用初始化之前调用的回调函数。
   * 注册的所有初始化器都可以（可选地）返回一个 Promise。
   * 所有返回 Promise 的初始化函数都必须在应用启动之前解析完。
   * 如果任何一个初始化器失败了，该应用就不会继续启动。
   */
  public delayBootstrapping() {
    return () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('delayBootstrapping');
          resolve();
        }, 3000);
      });
    };
  }
}

const initializer = new Initializer();
export default initializer;
