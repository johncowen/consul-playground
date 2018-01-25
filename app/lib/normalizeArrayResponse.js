import pojo from './pojo';
export default function() {
  const args = [].slice.call(arguments);
  const prop = args[1].modelName;
  let map = function(item) { return item; };
  if(args.length > 5) {
    map = args.pop();
  }
  args[2] = pojo(prop)(args[2].map(map));
  // if(prop == 'service') {
  //   console.log(args[2]);
  //   args[2] = {
  //     service: [
  //       {
  //         Name: 'consul',
  //         SomethingElse: {}
  //       }
  //     ]
  //   };
  //   console.log(args[2]);
  // }
  // console.log(this._super);
  return this._super(...args);
}

