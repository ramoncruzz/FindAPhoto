import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {Div} from 'react-native-magnus';
import {getPhoto} from '../store/Photo';
import {useAppDispatch, useTypedSelector} from '../store';
import {TextField, Image, Item, Button} from '../components/atoms';
import {ImageGrid} from '../components/molecules';
import {Hit} from '../utils/types';
const {height, width} = Dimensions.get('screen');
const Home: React.FC = (): JSX.Element => {
  const [text, setText] = React.useState<string>('XX');
  const dispatch = useAppDispatch();
  const environment = useTypedSelector(state => state.environment);

  const onPress = item => {
    console.log(JSON.stringify(item, null, '\t'));
  };
  const imagens: Hit[] = [
    {
      id: 700141,
      pageURL:
        'https://pixabay.com/photos/heart-love-romance-valentine-700141/',
      type: 'photo',
      tags: 'heart, love, romance',
      previewURL:
        'https://cdn.pixabay.com/photo/2015/03/30/20/33/heart-700141_150.jpg',
      previewWidth: 150,
      previewHeight: 100,
      webformatURL:
        'https://pixabay.com/get/gf2423797eb7baa650a48b50394b123eeb1f83e64cf1cf2b15f3f50db315411ead54dde23763cdf8e3955eda9b13614d5_640.jpg',
      webformatWidth: 640,
      webformatHeight: 427,
      largeImageURL:
        'https://pixabay.com/get/g2c247dc0cb49c4d7dea82e7b132aa791065669aca9506e3391a328f38d7fbc8540ddb7f0af5a3f4319b4fd5911e417d5_1280.jpg',
      imageWidth: 5013,
      imageHeight: 3347,
      imageSize: 3118414,
      views: 1729244,
      downloads: 887649,
      collections: 2054,
      likes: 2418,
      comments: 501,
      user_id: 69781,
      user: 'Ben_Kerckx',
      userImageURL:
        'https://cdn.pixabay.com/user/2017/05/13/20-08-47-204_250x250.jpg',
    },
    {
      id: 1192662,
      pageURL:
        'https://pixabay.com/photos/heart-leaves-foliage-garden-bush-1192662/',
      type: 'photo',
      tags: 'heart, leaves, foliage',
      previewURL:
        'https://cdn.pixabay.com/photo/2016/02/10/21/57/heart-1192662_150.jpg',
      previewWidth: 150,
      previewHeight: 99,
      webformatURL:
        'https://pixabay.com/get/g0bd399871e388c6faf12fd3cfa968f19f788201f07d15dc0d63c8305e545a7776d649291dd0ed8c6f3418f115c295283_640.jpg',
      webformatWidth: 640,
      webformatHeight: 426,
      largeImageURL:
        'https://pixabay.com/get/gc711599e7519f729f9c450938d12983b9e67e0a3383018bcd56ec4f119baa9e28ec0829f561a6ed96d4c48fc7555daa3ec2c6de84c65357b32dc2a50baceb664_1280.jpg',
      imageWidth: 6000,
      imageHeight: 4000,
      imageSize: 6730913,
      views: 1608366,
      downloads: 882716,
      collections: 2026,
      likes: 2496,
      comments: 509,
      user_id: 2023852,
      user: '2023852',
      userImageURL: '',
    },
    {
      id: 1721592,
      pageURL:
        'https://pixabay.com/illustrations/puzzle-heart-love-puzzle-pieces-1721592/',
      type: 'illustration',
      tags: 'puzzle, heart, love',
      previewURL:
        'https://cdn.pixabay.com/photo/2016/10/07/13/41/puzzle-1721592_150.jpg',
      previewWidth: 150,
      previewHeight: 75,
      webformatURL:
        'https://pixabay.com/get/g03b080f7a36eb936355c486a93bbacd6da3ccad9c23d2e56a13b0b9a7edf30fcf36d9a8e2a36f034d53cd69509c3572d_640.jpg',
      webformatWidth: 640,
      webformatHeight: 323,
      largeImageURL:
        'https://pixabay.com/get/g52bdcc69649c46d41f77df35161870ab5bbdc838659fc9a2b58b6eddb122d6f9604fbb04eda2e1d71ec4069a21b7e8c0ed64fc9a8c19e7995466722bcf9eb5cf_1280.jpg',
      imageWidth: 4800,
      imageHeight: 2424,
      imageSize: 649793,
      views: 258649,
      downloads: 89439,
      collections: 3416,
      likes: 692,
      comments: 158,
      user_id: 2707530,
      user: 'PIRO4D',
      userImageURL:
        'https://cdn.pixabay.com/user/2022/02/11/13-53-09-122_250x250.jpg',
    },
    {
      id: 729509,
      pageURL:
        'https://pixabay.com/photos/hd-wallpaper-rose-flower-love-729509/',
      type: 'photo',
      tags: 'hd wallpaper, rose, flower',
      previewURL:
        'https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_150.jpg',
      previewWidth: 150,
      previewHeight: 99,
      webformatURL:
        'https://pixabay.com/get/gcb4fffeabcdd38b829c72ac94eaad0469e0eb9de0469f4ab1cf86511871e52bc33c9e6c6d9d26b9284a5bd6ad04ee69c_640.jpg',
      webformatWidth: 640,
      webformatHeight: 425,
      largeImageURL:
        'https://pixabay.com/get/g52ac5438f8444381306a016366e2372e863479076d516de4291a901518ccaf40886efcd12e1fa4c115b3c8f8d5792af1_1280.jpg',
      imageWidth: 1980,
      imageHeight: 1316,
      imageSize: 500190,
      views: 1585001,
      downloads: 641302,
      collections: 2333,
      likes: 2570,
      comments: 495,
      user_id: 909086,
      user: 'Bessi',
      userImageURL:
        'https://cdn.pixabay.com/user/2019/04/11/22-45-05-994_250x250.jpg',
    },
    {
      id: 1046658,
      pageURL:
        'https://pixabay.com/photos/balloons-heart-sky-clouds-love-1046658/',
      type: 'photo',
      tags: 'balloons, heart, sky',
      previewURL:
        'https://cdn.pixabay.com/photo/2015/11/16/22/39/balloons-1046658_150.jpg',
      previewWidth: 150,
      previewHeight: 99,
      webformatURL:
        'https://pixabay.com/get/gb2d0aeceaa1b07af1184c9a12e555716391cf80ef6ae7bcd21037263bc11da1b100b7fcf4f7e0c36145ad91dabc5b1ab_640.jpg',
      webformatWidth: 640,
      webformatHeight: 426,
      largeImageURL:
        'https://pixabay.com/get/g3dd532795574902edefc42df7c97f1ef6355b60eeb96eb92d503582c8f003c129fab16eb0b0a04ede1300f3b1a2d5bafa111f75f9ffa95c25f499039642695d1_1280.jpg',
      imageWidth: 5184,
      imageHeight: 3456,
      imageSize: 2964496,
      views: 1121663,
      downloads: 499939,
      collections: 1455,
      likes: 1786,
      comments: 326,
      user_id: 1553824,
      user: 'Peggy_Marco',
      userImageURL:
        'https://cdn.pixabay.com/user/2020/01/07/15-43-03-893_250x250.jpg',
    },
    {
      id: 1718244,
      pageURL:
        'https://pixabay.com/photos/couple-romance-bike-bicycle-meadow-1718244/',
      type: 'photo',
      tags: 'couple, romance, bike',
      previewURL:
        'https://cdn.pixabay.com/photo/2016/10/06/05/19/couple-1718244_150.jpg',
      previewWidth: 150,
      previewHeight: 99,
      webformatURL:
        'https://pixabay.com/get/gd1552bc66bc3f0eada5304325d44345084b09c7ba751e879c1e7e725c63dfacd396cc955fd348f91a7fbae0e0ec0e0b1_640.jpg',
      webformatWidth: 640,
      webformatHeight: 426,
      largeImageURL:
        'https://pixabay.com/get/g8bef58e5f23d702a8e95679ad67829288c8c5c8ebd5024861e05a97ec72f623067a392744e4ca744ca570f905929824093d7c39f6ab9f365a6323e24ab3e6fec_1280.jpg',
      imageWidth: 5760,
      imageHeight: 3840,
      imageSize: 4669768,
      views: 704360,
      downloads: 320864,
      collections: 1537,
      likes: 1643,
      comments: 246,
      user_id: 3194556,
      user: '3194556',
      userImageURL: '',
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text>{text}</Text>
      <TextField placeholder="placeholder" onChangeText={setText} />
      <Div row>
        <Button
          type="clean"
          text="Cancel"
          onPress={() => dispatch(getPhoto('street'))}
        />
        <Button
          type="go"
          text="Search"
          onPress={() => dispatch(getPhoto('street'))}
        />
      </Div>
      <ImageGrid images={imagens} onPress={onPress} />
      {/* <ImageGrid>
        <Image
          width="100%"
          height="40%"
          url="https://pixabay.com/get/g0692ab671e28f7932f7edca774f13ba89fefc2ac07a8595c150074d1f8f0c73917b11ca253b856d3df05db9561738806_1280.jpg"
        />
        <View style={{width: 150, height: 150, backgroundColor: 'blue'}} />
        <Image
          width="100%"
          height="40%"
          url="https://pixabay.com/get/g0692ab671e28f7932f7edca774f13ba89fefc2ac07a8595c150074d1f8f0c73917b11ca253b856d3df05db9561738806_1280.jpg"
        />
        <View style={{width: 150, height: 150, backgroundColor: 'blue'}} />
        <Image
          width="100%"
          height="40%"
          url="https://pixabay.com/get/g0692ab671e28f7932f7edca774f13ba89fefc2ac07a8595c150074d1f8f0c73917b11ca253b856d3df05db9561738806_1280.jpg"
        />
        <View style={{width: 150, height: 150, backgroundColor: 'blue'}} />
      </ImageGrid> */}
    </View>
  );
};

export default Home;
