class Test {
  async _test() {
    try {
      await new Promise(function (resolve, reject) {
        setTimeout(function () {
          console.log('start');
          resolve();
        }, 3000);
      });
      await new Promise(function (resolve, reject) {
        setTimeout(function () {
          console.log('1');
          resolve();
        }, 3000);
      });
      await new Promise(function (resolve, reject) {
        setTimeout(function () {
          console.log('2');
          resolve();
        }, 3000);
      });
    } catch(error) {
      console.log(error);
      // throw (error);
      // console.log('已处理' + error);
      // if(error === 1) {
      //   throw (error);
      // }
    }
  }
}

const test = new Test();

export default test;
