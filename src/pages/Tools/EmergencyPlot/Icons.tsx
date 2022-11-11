/*
 * @Description: 图标
 */

import React from 'react';
import Icon from '@ant-design/icons';

const Icons: any = {};
const svgs: any = {
  // 点
  Dian: (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" fill="currentColor">
      <path d="M512 512m-128 0a4 4 0 1 0 256 0 4 4 0 1 0-256 0Z" />
    </svg>
  ),
  // 线
  Xian: (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" fill="currentColor">
      <path d="M896.334988 256.00928a125.094028 125.094028 0 0 1-54.184657-13.652827L242.705893 842.142211c1.706603 3.839858 4.266508 7.125069 5.973112 11.178252h527.340445a127.995254 127.995254 0 1 1 0 85.330169H248.679005A127.995254 127.995254 0 1 1 128.363467 767.990294a125.094028 125.094028 0 0 1 54.184657 13.652827L781.992561 181.857363c-1.706603-3.882523-4.266508-7.125069-5.973111-11.178252H248.679005a127.995254 127.995254 0 1 1 0-85.330169h527.340445A127.995254 127.995254 0 1 1 896.334988 256.00928z" />
    </svg>
  ),
  // 虚线
  XuXian: (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" fill="currentColor">
      <path d="M21.81991902 512h75.41232016v-37.70616007H21.81991902v37.70616007z m150.82464031 0h75.41232015v-37.70616007h-75.41232015v37.70616007z m150.82464031 0h75.41232015v-37.70616007h-75.41232015v37.70616007z m150.82464029 0h75.41232014v-37.70616007h-75.41232014v37.70616007z m150.82464028 0h75.41232015v-37.70616007h-75.41232015v37.70616007z m150.82464031 0h75.41232015v-37.70616007h-75.41232015v37.70616007z m150.8246403 0h75.41232016v-37.70616007h-75.41232016v37.70616007z"></path>
    </svg>
  ),
  // 虚线面
  XuXianMian: (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" fill="currentColor">
      <path d="M17.10664903 600.37381268h106.0485752v-212.09715043H17.10664903v212.09715043z m212.0971504 0h106.04857523v-212.09715043h-106.04857523v212.09715043z m212.09715044 0h106.0485752v-212.09715043h-106.0485752v212.09715043z m212.09715042 0h106.0485752v-212.09715043h-106.0485752v212.09715043z m212.09715041 0h106.04857522v-212.09715043h-106.04857522v212.09715043z"></path>
    </svg>
  ),
  // 面
  Mian: (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" fill="currentColor">
      <path d="M1023.200625 112.312256c0-61.9516-50.360656-112.312256-112.312257-112.312256s-112.312256 50.360656-112.312256 112.312256c0 17.386417 3.996877 33.773614 10.991413 48.362217L573.551913 366.113973c-17.786105-11.790788-38.969555-18.58548-61.951601-18.58548s-44.165496 6.794692-61.9516 18.58548L213.633099 160.674473c6.994536-14.588603 10.991413-30.9758 10.991413-48.362217 0-61.9516-50.360656-112.312256-112.312256-112.312256S0 50.360656 0 112.312256c0 57.355191 43.166276 104.718189 98.722873 111.512881l87.73146 585.542544C147.284934 826.754098 119.906323 865.923497 119.906323 911.687744c0 61.9516 50.360656 112.312256 112.312256 112.312256 51.759563 0 95.125683-34.972678 108.315379-82.535519l342.532396-0.399688c13.189696 47.362998 56.555816 82.135831 108.115535 82.135832 61.9516 0 112.312256-50.360656 112.312256-112.312257 0-40.368462-21.383294-75.740827-53.358314-95.52537l76.740047-591.937549C981.233411 215.831382 1023.200625 168.868072 1023.200625 112.312256zM790.982045 798.576112c-51.759563 0-95.125683 34.972678-108.315378 82.53552l-342.332553 0.399687c-11.990632-43.166276-49.161593-75.740827-94.526151-81.336456L157.876659 214.832162c5.595628-2.59797 11.191257-5.595628 16.187353-8.992974l236.015613 205.239657c-6.994536 14.588603-10.991413 30.9758-10.991413 48.362217 0 61.9516 50.360656 112.312256 112.312256 112.312256s112.312256-50.360656 112.312256-112.312256c0-17.386417-3.996877-33.773614-10.991413-48.362217L848.936768 205.839188c5.795472 3.797034 11.790788 7.194379 18.385636 9.79235l-75.540983 582.944574h-0.799376z" />
    </svg>
  ),
  // 矩形
  JuXing: (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" fill="currentColor">
      <path d="M685.511 796.444c11.321-55.75 55.182-99.612 110.933-110.933V338.49a142.393 142.393 0 0 1-110.933-110.933H338.49a142.393 142.393 0 0 1-110.933 110.933V685.51c55.75 11.321 99.612 55.182 110.933 110.933H685.51z m0 56.89H338.49A142.222 142.222 0 1 1 170.667 685.51V338.49a142.222 142.222 0 1 1 167.822-167.822H685.51a142.222 142.222 0 1 1 167.822 167.822V685.51a142.222 142.222 0 1 1-167.822 167.822z" />
    </svg>
  ),
  // 虚线矩形
  XuXianJuXing: (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" fill="currentColor">
      <path d="M964.47392089 59.52607911v75.41232014h37.70616009V59.52607911h-37.70616009z m0 150.82464028v75.41232016h37.70616009v-75.41232016h-37.70616009z m0 150.8246403v75.41232017h37.70616009v-75.41232017h-37.70616009z m0 452.47392092v75.41232014h37.70616009v-75.41232014h-37.70616009z m0-226.23696047v75.41232017h37.70616009v-75.41232017h-37.70616009z m0 377.06160075h-75.41232014v37.70616009h75.41232014v-37.70616009z m-150.82464028 0h-75.41232016v37.70616009h75.41232016v-37.70616009z m-150.8246403 0h-75.41232017v37.70616009h75.41232017v-37.70616009z m-150.82464031 0h-75.41232014v37.70616009h75.41232014v-37.70616009z m-150.82464031 0h-75.41232014v37.70616009h75.41232014v-37.70616009z m-150.8246403 0h-75.41232014v37.70616009h75.41232014v-37.70616009z m-150.82464028 0v-75.41232014H21.81991902v75.41232014h37.70616009z m0-150.82464028v-75.41232016H21.81991902v75.41232016h37.70616009z m0-150.8246403v-75.41232017H21.81991902v75.41232017h37.70616009z m0-150.82464031v-75.41232014H21.81991902v75.41232014h37.70616009z m0-150.82464031v-75.41232014H21.81991902v75.41232014h37.70616009z m0-150.8246403v-75.41232014H21.81991902v75.41232014h37.70616009z m0-150.82464028h75.41232014V21.81991902H59.52607911v37.70616009z m150.82464028 0h75.41232016V21.81991902h-75.41232016v37.70616009z m150.8246403 0h75.41232017V21.81991902h-75.41232017v37.70616009z m150.82464031 0h75.41232014V21.81991902h-75.41232014v37.70616009z m150.82464031 0h75.41232014V21.81991902h-75.41232014v37.70616009z m226.23696044 0V21.81991902h-75.41232014v37.70616009h75.41232014z"></path>
    </svg>
  ),
  // 圆
  Yuan: (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" fill="currentColor">
      <path d="M512 26.54776889C243.78823111 26.54776889 26.54776889 243.78823111 26.54776889 512S243.78823111 997.45223111 512 997.45223111 997.45223111 780.21176889 997.45223111 512 780.21176889 26.54776889 512 26.54776889z m0 873.81333333c-214.57009778 0-388.36110222-173.79100445-388.36110222-388.36110222S297.42990222 123.63889778 512 123.63889778 900.36110222 297.42990222 900.36110222 512 726.57009778 900.36110222 512 900.36110222z" />
    </svg>
  ),
  // 虚线圆
  XuXianYuan: (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" fill="currentColor">
      <path d="M512 29.36115105v40.21990408c24.85590073 0 49.39004223 2.0109952 73.52198466 6.07320551l6.63628417-39.65682543A485.93688111 485.93688111 0 0 0 512 29.36115105z m145.43517316 64.67360575c23.28732446 8.08420073 45.77025086 18.09895683 67.32811944 29.96382854l19.38599376-35.23263596a480.30609452 480.30609452 0 0 0-58.27864104-27.14843526l-15.20312374-5.55034675-13.23234842 37.96758943z m129.1863319 71.06857051c19.30555395 15.28356354 37.28385108 32.17592326 53.81423165 50.47597962l29.84316884-26.94733574a485.61512187 485.61512187 0 0 0-46.25288969-44.84519304l-12.46817029-10.21585565-24.93634051 31.53240481z m100.26822087 111.81133333c13.07146883 20.8339103 24.41348179 42.75375803 33.86515923 65.47800386l37.12297147-15.44444317a480.78873338 480.78873338 0 0 0-28.6365717-57.71556235l-8.32552015-13.6747674-34.02603885 21.35676906z m55.82522687 133.53008157c5.63078656 23.89062302 9.25057792 48.2638849 10.77893428 72.95890598l40.13946426-2.53385395a482.88016837 482.88016837 0 0 0-8.36574003-63.98986739l-3.37847195-15.60532279-39.17418656 9.21035803z m9.25057794 148.33100623c-2.57407386 24.61458129-7.19936284 48.82696355-13.79542711 72.39582735l38.77198753 10.8593741c5.67100647-20.47193118 10.05497602-41.42650122 13.07146882-62.86371008l1.97077531-16.16840143-40.01880455-4.22308994z m-40.05902447 142.7806595a441.97652594 441.97652594 0 0 1-37.12297148 63.70832804l32.98032136 23.04600504c12.26707075-17.53587819 23.40798417-35.91637434 33.26186065-55.02082877l7.19936285-14.47916548-36.31857338-17.29455876z m-84.50201848 120.69993212c-17.29455876 17.57609808-35.99681417 33.66405971-55.90566667 48.1432252l23.6090837 32.5379024c17.41521846-12.62904989 33.94559904-26.38425708 49.47048202-41.18518178l11.50289255-11.26157314-28.6767916-28.23437268z m-120.3781729 86.95543263c-22.04050743 10.8593741-44.96585275 19.86863262-68.61515637 26.90711583l11.50289256 38.53066811a479.1397173 479.1397173 0 0 0 60.41029595-22.52314628l14.47916545-6.83738369-17.77719759-36.07725397z m-140.24680554 41.82870025c-17.7771976 2.21209473-35.71527483 3.33825202-53.85445157 3.37847193l-14.07696641-0.20109952a436.50661898 436.50661898 0 0 1-6.71672399-0.24131941l-1.76967577 40.21990407a490.88392929 490.88392929 0 0 0 66.60416114-1.60879616l14.7204849-1.60879618-4.9068283-39.89814483z m-147.8885873-6.43518466c-24.13194244-5.14814772-47.70080625-12.30729066-70.50549184-21.39698897l-14.88136451 37.36429089c19.78819281 7.88310119 40.21990407 14.47916546 61.13425421 19.70775299l15.84664218 3.6600113 8.44617987-39.33506621z m-138.79888898-55.78500696a444.06796095 444.06796095 0 0 1-59.3645784-43.79947555l-26.4646969 30.28558779c16.08796163 14.07696642 33.18142087 27.14843525 51.07927818 39.05352685l13.63454748 8.72771918 21.11544964-34.26735827z m-110.60473621-96.7288693c-15.60532277-19.06423454-29.6018494-39.41550599-41.82870026-60.77227508l-34.91087672 19.98929234c10.69849447 18.70225539 22.64380598 36.6001127 35.67505491 53.65335203l9.97453621 12.58882998 31.08998586-25.45919927z m-72.47626716-126.37093862a438.7991535 438.7991535 0 0 1-19.70775299-70.98813071l-39.53616571 7.44068226c4.0219904 21.35676907 9.49189735 42.2308993 16.20862134 62.46151104l5.30902733 15.08246402 37.72627003-13.99652661z m-27.34953478-146.44067077L69.58105513 512.16087963c0-22.56336619 1.64901605-44.76475324 4.9470482-66.64438107l-39.77748515-6.03298562C31.21126662 463.17303645 29.36115105 487.38541871 29.36115105 512l0.08043981 7.92332111 40.21990406-0.64351848z m22.08072735-145.917812c7.68200169-23.36776427 17.33477866-46.05179017 28.83767124-67.77053836l-35.55439522-18.82291511c-9.97453621 18.90335491-18.74247531 38.4904482-26.14293765 58.72105995l-5.34924724 15.28356355 38.20890887 12.58882997z m68.93691562-130.31248921c15.00202422-19.54687338 31.57262469-37.80670983 49.59114172-54.61862973l-27.42997459-29.40074989c-15.68576258 14.6400451-30.44646738 30.32580768-44.04079498 46.93662806l-10.05497601 12.62904987 31.93460386 24.45370169zM270.68057552 141.09204458a441.25256766 441.25256766 0 0 1 64.87470526-34.99131656l-16.04774171-36.84143213c-19.78819281 8.60705948-38.89264724 18.50115588-57.1927036 29.60184941l-13.59432757 8.52661965 21.96006762 33.70427963z m122.95224677-97.13106836l9.8136566 39.01330698c23.7297434-5.99276569 48.06278538-10.01475612 72.75780649-11.98553143l-3.21759236-40.05902447c-27.14843525 2.13165492-53.65335204 6.55584437-79.35387073 13.03124892z"></path>
    </svg>
  ),
  // 虚线面圆
  XuXianMianYuan: (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" fill="currentColor">
      <path d="M512 190.24076735V29.36115105h205.60414965H512c67.16723981 0 131.11688729 13.7149873 189.19442879 38.4904482l-63.14524942 148.00924701A320.19065637 320.19065637 0 0 0 512 190.24076735z m173.10646715 50.47597963a324.3735264 324.3735264 0 0 1 92.62643911 89.77082589l132.72568346-90.8969832a485.33358254 485.33358254 0 0 0-125.08390169-125.40566092l-13.51388776-8.96903863-86.75433312 135.50085686z m119.01069619 136.1041554c18.05873694 38.93286714 28.15393285 81.20398633 29.48118968 125.08390169l160.79917652-4.90682829a480.54741394 480.54741394 0 0 0-37.92736955-173.42822638l-6.43518465-14.47916547-145.917812 67.73031845z m26.54513668 180.02429068a318.62208012 318.62208012 0 0 1-42.83419784 120.98147145l137.75317145 83.09432184a479.54191634 479.54191634 0 0 0 61.89843239-165.58534509l2.53385396-16.36950097-159.35125996-22.12094723zM994.63884895 926.38567173v11.26157314l5.63078659-6.43518465-5.63078659-4.82638849z m-238.42359137-204.88019137a323.56912831 323.56912831 0 0 1-101.75635733 79.11255131l71.30988993 144.22857604a484.24764513 484.24764513 0 0 0 141.73494198-106.4218662l10.73871439-12.06597121-122.02718897-104.85328994z m-151.14639954 98.61920479a321.67879282 321.67879282 0 0 1-129.10589209 11.6637722l-17.69675781 159.8741187a487.9478763 487.9478763 0 0 0 176.56537891-12.78992949l16.6912602-4.70572877-46.45398921-154.04223264z m-181.79396643 1.28703694a320.4319758 320.4319758 0 0 1-113.94298827-59.52545806l-101.43459808 124.88280217a481.63335134 481.63335134 0 0 0 155.40970935 84.54223839l15.7259825 4.78616858 44.2418945-154.68575108z m-153.27805445-97.37238779a321.11571418 321.11571418 0 0 1-63.82898779-111.69067362l-152.8758554 50.1542204a481.71379117 481.71379117 0 0 0 85.34663645 155.36948944l10.37673527 12.26707076 120.98147147-106.10010698z m-76.09605853-163.09171105a325.45946381 325.45946381 0 0 1 6.35474486-129.10589208l-155.85212831-39.81770505a483.56390674 483.56390674 0 0 0-11.94531152 175.07724247l2.41319425 18.01851703 159.02950072-24.17216237z m24.21238226-180.18517026a322.96582975 322.96582975 0 0 1 75.0905609-104.69241032l-109.39813908-117.92475876a484.1672053 484.1672053 0 0 0-105.61746813 142.09692111l-6.91782348 14.8009247 146.80264989 65.71932327z m118.48783744-138.59778947a318.86339955 318.86339955 0 0 1 119.4531151-47.09750767l-27.71151392-158.46642208c-59.84721727 10.45717506-115.95398347 31.93460383-166.10820385 62.34085134l-13.47366786 8.44617984 87.84027053 134.77689857zM511.8793403 29.36115105h-4.98726813l1.68923597 160.8796163h3.33825206V29.36115105z"></path>
    </svg>
  ),
  // 箭头
  JianTou: (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" fill="currentColor">
      <path d="M424.96 890.88V445.44l-199.68 76.8s-11.2128 1.024-15.36-5.12c-4.7616-7.1168 0-15.36 0-15.36l291.84-373.76s4.6592-5.12 10.24-5.12 10.24 5.12 10.24 5.12l291.84 373.76s5.1712 7.5776 0 15.36c-4.9664 7.424-15.36 5.12-15.36 5.12l-194.56-76.8v445.44s-1.4848 6.6048-5.12 10.24-10.24 5.12-10.24 5.12H440.32s-4.1472-0.4608-10.24-5.12-5.12-10.24-5.12-10.24z" />
    </svg>
  ),
  // 双箭头
  ShuangJianTou: (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" fill="currentColor">
      <path d="M1024 930.909091L93.090909 929.792l45.986909-62.370909c54.085818-73.541818 96.442182-187.019636 120.925091-322.839273l-99.793454 4.189091L301.428364 0l240.081454 532.852364-69.259636 2.885818c32.488727 55.482182 66.746182 89.646545 100.910545 99.979636 50.734545 15.639273 95.138909-35.84 145.687273-170.821818L595.781818 431.104 916.759273 4.654545l68.328727 533.504-89.367273-24.576c9.122909 143.732364 40.96 264.192 94.766546 358.586182L1024 930.909091z m-790.993455-77.730909l668.020364 0.930909c-47.755636-107.333818-73.914182-237.847273-77.824-389.12L821.992727 414.254545l78.941091 21.783273-31.650909-247.342545L720.709818 386.327273l91.973818 25.320727-13.777454 40.215273c-33.512727 97.745455-103.330909 301.242182-244.829091 257.861818-64.418909-19.735273-122.321455-84.526545-172.311273-192.698182l-24.762182-53.434182 73.541819-3.072L319.301818 213.922909 254.138182 467.874909l89.553454-3.723636-6.702545 46.266182c-19.549091 134.795636-55.854545 253.486545-103.982546 342.760727z"></path>
    </svg>
  ),
  // 燕尾箭头
  YanWeiJianTou: (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" fill="currentColor">
      <path d="M327.331 962l-16.84-263.183-243.903-129.733 86.759-22.416c2.671-0.697 256.447-67.712 455.052-233.566l-84.786-88.153 433.798-162.95-153.31 454.703-67.364-70.035c-137.862 195.122-351.336 446.922-353.659 449.593l-55.749 65.738zM251.722 588.597l125.783 66.899 8.246 128.804c78.978-95.587 224.274-274.913 317.887-412.079l24.158-35.424 46.922 48.78 69.686-206.737-197.213 74.1 61.556 63.995-26.597 24.157c-147.386 133.913-327.991 211.267-430.43 247.503z" />
    </svg>
  ),
  // 三角旗
  SanJiaoQi: (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" fill="currentColor">
      <path d="M906.971429 102.4c0 21.942857-7.314286 43.885714-14.628572 65.828571-21.942857 65.828571-58.514286 131.657143-102.4 175.542858-29.257143 29.257143-58.514286 51.2-87.771428 65.828571h-7.314286C658.285714 431.542857 621.714286 438.857143 585.142857 438.857143c-204.8-21.942857-248.685714 58.514286-277.942857 124.342857v7.314286l153.6 351.085714v21.942857c0 7.314286-7.314286 14.628571-14.628571 14.628572h-21.942858c-7.314286 0-14.628571-7.314286-14.628571-14.628572L73.142857 182.857143c0-7.314286 0-21.942857 14.628572-29.257143l7.314285-7.314286s43.885714-36.571429 124.342857-65.828571C263.314286 65.828571 307.2 58.514286 358.4 51.2c58.514286 0 117.028571 7.314286 175.542857 29.257143 212.114286 73.142857 256 36.571429 314.514286-21.942857l7.314286-7.314286c21.942857-21.942857 43.885714-14.628571 43.885714-7.314286 7.314286 14.628571 7.314286 36.571429 7.314286 58.514286z" />
    </svg>
  ),
  // 文字
  WenZi: (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" fill="currentColor">
      <path d="M635 888.5c-41.5-4.3-63-13-78.6-25.9l-1.1-1.1c-13.5-14.6-20.5-46.9-20.5-97.6V221.6c0-7.6 5.9-14 14-14h87.3c78.2 0 83 10.8 107.7 32.9 26.9 21.1 38.8 31.9 52.8 102 1.6 6.5 7 11.3 14 11.3h5.4c8.1 0 14.5-6.5 14-14.6l-1.6-232.6H78.5c-7.6 0-13.5 5.9-14 13.5l-1.1 218.5c-0.5 8.1 5.9 14.6 14 14.6h5.4c7 0 12.4-4.8 14-11.3 14-69.6 25.9-80.4 52.8-101.4l0.5-0.5c24.3-21.6 29.6-32.4 107.3-32.4h87.3c7.6 0 14 5.9 14 14v525.6c0 60.4-6.5 96.6-20 108.4-1.1 0.5-1.6 1.6-2.2 2.2-11.9 16.1-31.8 26.4-73.2 30.7-7.6 0.5-13 6.5-13 14 0 7.6 5.9 14 14 14h369.6c7.6 0 14-5.9 14-14 0.1-7-5.3-13.5-12.9-14z m324.3-217.6l-0.7-99H638.4c-3.2 0-5.7 2.6-6 5.7l-0.5 93c-0.3 3.5 2.6 6.2 6 6.2h2.3c3 0 5.3-2.1 6-4.8 6-29.6 11-34.2 22.5-43.1l0.3-0.3c10.4-9.2 12.7-13.8 45.8-13.8h37.3c3.2 0 6 2.6 6 5.9v223.7c0 25.7-2.7 41-8.5 46.1-0.5 0.3-0.7 0.7-0.9 0.9-5 6.9-13.6 11.2-31.3 13-3.2 0.3-5.6 2.7-5.6 5.9s2.6 5.9 6 5.9h157.8c3.2 0 6-2.6 6-5.9 0-3-2.3-5.7-5.6-5.9-17.7-1.8-26.9-5.5-33.6-11l-0.5-0.5c-5.7-6.2-8.8-20-8.8-41.6V620.8c0-3.2 2.6-5.9 6-5.9h37.3c33.4 0 35.4 4.6 46 14 11.5 8.9 16.6 13.6 22.5 43.4 0.7 2.7 3 4.8 6 4.8h2.3c3.6 0 6.4-2.8 6.1-6.2z" />
    </svg>
  ),
  // 图片
  TuPian: (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" fill="currentColor">
      <path d="M890.76736 151.3216H154.97728a40.87808 40.87808 0 0 0-40.87808 40.8832v654.01856a40.8576 40.8576 0 0 0 40.87808 40.85248h735.78496a40.8576 40.8576 0 0 0 40.87296-40.85248V192.2048a40.86784 40.86784 0 0 0-40.86784-40.8832zM809.0112 764.45184H236.73344v-204.35968l122.624-122.63936 204.3904 204.38528 122.62912-122.64448 122.62912 122.64448v122.61376z m-81.76128-327.00416c-45.14816 0-81.74592-36.59264-81.74592-81.74592 0-45.16352 36.59264-81.75104 81.74592-81.75104 45.15328 0 81.76128 36.58752 81.76128 81.75104 0 45.15328-36.608 81.74592-81.76128 81.74592z" />
    </svg>
  ),
  // 直线箭头
  ZhiXianJianTou: (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" fill="currentColor">
      <path d="M753.31942448 69.58105513l241.96294294 448.04973143-49.55092183 26.78645611L781.47335733 240.11344843v746.40097991H29.36115105v-56.30786573h695.80434057V240.19388823l-164.25808825 304.22335444-49.55092184-26.7462362z"></path>
    </svg>
  ),
  // 曲线箭头
  QuXianJianTou: (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" fill="currentColor">
      <path d="M753.31942448 69.58105513l241.96294294 448.04973143-49.55092183 26.78645611L781.47335733 240.11344843v316.04800626c0 233.83852233-186.49969521 424.11888852-418.89030099 430.19209404l-11.46267267 0.16087961H29.36115105v-56.30786573h321.75923262a374.04510794 374.04510794 0 0 0 374.04510795-374.04510792v-315.96756646l-164.25808825 304.22335444-49.55092184-26.7462362L753.31942448 69.58105513z"></path>
    </svg>
  ),
  // 直虚线箭头
  ZhiXuXianJianTou: (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" fill="currentColor">
      <path d="M88.665685 948.634167v62.06598H0v-62.06598h88.665685z m177.331371 0v62.06598H177.331371v-62.06598h88.665685z m177.331371 0v62.06598H354.662741v-62.06598h88.665686z m177.33137 0v62.06598h-88.665685v-62.06598h88.665685z m208.364361-13.299852v75.365832H709.325483v-62.06598h57.632695V935.334315h62.06598z m0-132.998528v88.665685h-62.06598v-88.665685h62.06598z m0-177.331371v88.665685h-62.06598v-88.665685h62.06598z m0-177.331371v88.665686h-62.06598v-88.665686h62.06598zM797.991168 0l266.706382 493.867867-54.618063 29.525674L825.566196 181.675989h-55.150056l-184.513291 341.717552-54.618062-29.525674L797.991168 0zM829.024158 270.341675v88.665685h-62.06598V270.341675h62.06598z"></path>
    </svg>
  ),
  // 直虚线面箭头
  ZhiXuXianMianJianTou: (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" fill="currentColor">
      <path d="M770.25423163 323.46919964l251.38696922 188.53080036L770.25423163 700.53080036V323.46919964z m-628.44856996 125.67463152v125.71233768H16.13103013v-125.71233768h125.67463154z m188.53080038 0v125.71233768H204.6618305v-125.71233768h125.67463155z m188.53080038 0v125.71233768H393.19263091v-125.71233768h125.67463152z m188.53080034 0v125.71233768H581.72343125v-125.71233768h125.67463152z"></path>
    </svg>
  ),
  // 曲虚线箭头
  QuXuXianJianTou: (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" fill="currentColor">
      <path d="M88.658009 948.640693v62.060606H0v-62.060606h88.658009z m177.316017 0v62.060606H177.316017v-62.060606h88.658009z m170.755325-8.156537l12.279134 60.819394c-30.852987 6.206061-62.415238 9.397749-94.37645 9.397749v-62.060606c27.838615 0 55.278268-2.748398 82.097316-8.156537z m151.693852-64.498701l35.241559 51.067013a473.433766 473.433766 0 0 1-83.072554 45.791861l-24.380953-57.051429a411.37316 411.37316 0 0 0 72.256277-39.807445z m114.413161-118.801732l52.396883 33.246753a476.226494 476.226494 0 0 1-58.602944 74.605714l-44.772294-42.999134c19.15013-19.859394 36.216797-41.624935 50.978355-64.853333z m58.868917-155.284502l61.307013 9.752381c-5.009177 31.473593-13.165714 62.149264-24.292294 91.761039l-58.070996-21.854199c9.619394-25.710823 16.712035-52.352554 21.056277-79.659221zM797.922078 0.088658l266.68329 493.825108-54.613333 29.523117-193.895065-359.020606h-36.394113l-193.850736 359.020606-54.613333-29.523117L797.922078 0.088658z m31.030303 430.301645v88.658009h-62.060606v-88.658009h62.060606z m0-177.316017v88.658008h-62.060606v-88.658008h62.060606z"></path>
    </svg>
  ),
  // 曲虚线面箭头
  QuXuXianMianJianTou: (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" fill="currentColor">
      <path d="M14.51327725 408.94906452c49.09342042-12.55615131 82.76502137-9.57736465 104.18212029 5.12803776l64.06276596-93.24733386c-51.77055777-35.55690895-118.24651799-41.43906992-196.29826935-21.45480507l28.0533831 109.57410117z m118.47275495 18.47601843c17.72189523 21.53021742 29.75016029 58.67078508 33.93554407 112.02500158l112.77912478-8.89865377c-5.88216097-74.43195999-24.88606564-132.95192043-59.19867132-174.84346426l-87.47829137 71.6794103z m35.51920279 144.64083005l0.07541232 11.76432194c0 64.02505982 19.45637859 120.58429991 55.65429228 166.28416595l88.68488848-70.20887006c-20.28591412-25.64018885-31.22070053-57.38877563-31.22070054-96.07529589l-0.11311847-13.8758669-113.11848024 2.11154496z m87.59140986 211.6446765c45.47362905 40.15706047 104.93624349 65.49560005 168.43341704 73.82866141l14.70540245-112.17582621c-42.04236849-5.50509937-80.42723943-21.86957285-108.21667943-46.37857689l-74.92214006 84.72574169z m214.81199394 76.80744807c68.0973251-0.15082465 132.46174034-20.21050179 179.36820349-58.3691358l-71.45317335-87.70452833c-25.37624574 20.66297572-64.55294604 32.84206543-108.1412671 32.9551839l0.22623696 113.11848023z m216.73500813-97.96060388c30.46657735-42.60796087 42.38172394-95.20805418 33.82242556-153.04930374a614.61040921 614.61040921 0 0 1-3.77061601-30.42887117l-112.55288782 10.93478641c1.1311848 11.57579114 2.60172506 23.56635005 4.44932689 36.04708903 4.33620841 29.41080486-0.86724167 52.41156252-13.95127923 70.66134399l92.00303061 65.83495548z m28.05338307-216.77271427c-0.98036016-51.6574393 8.52159217-74.39425382 21.37939278-79.93705936l-44.56868122-103.91817715c-64.10047213 27.45008453-91.66367515 93.39815851-89.89148561 186.00448765l113.08077405-2.14925114z m40.87347752-82.61419672c10.06754475 0.26394313 22.28434061 2.33778193 36.49956296 6.3346349l30.6928143-108.85768414a263.94312052 263.94312052 0 0 0-64.02505981-10.55772482l-3.16731745 113.08077406z"></path>
      <path d="M770.14472513 210.35071939L1018.5529077 382.70557711l-248.40818257 172.39256386z"></path>
    </svg>
  ),
  // 直线面箭头
  ZhiXianMianJianTou: (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" fill="currentColor">
      <path d="M775.94312052 323.46919964l251.38696922 188.53080036L775.94312052 700.53080036v-125.71233767H21.81991902v-125.67463153h754.1232015V323.46919964z"></path>
    </svg>
  ),
  // 曲线面箭头
  QuXianMianJianTou: (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" fill="currentColor">
      <path d="M774.01067981 229.20379943L1006.89335097 390.78647854l-232.88267116 161.61802862v-112.69428592c-46.73207214-0.49489334-69.28506914 13.00862523-77.09731417 37.61189466-3.2521563 10.25136227-5.01963257 21.88135602-6.29221545 43.05572154l-0.70699052 13.89236336-0.84838861 22.69439508-1.20188384 27.00703715-0.91908765 13.07932428c-9.19087652 116.58273369-57.69042491 191.48837731-179.9290826 224.39878515l-6.71640977 1.83817531-16.93242251-0.07069906c-168.97072983-2.58051533-215.91489913-72.21907971-230.44355393-242.21494577l-3.39355441-37.32909848a510.58854011 510.58854011 0 0 0-8.13039075-56.91273536l-2.29771915-10.25136227c-7.77689552-33.08715547-19.44223878-61.15467837-36.76350606-86.35888975l-4.10054491-2.89866105c-30.50664014-20.21992834-75.4358865-17.49801491-141.32740123 14.2458586l-46.02508164-95.54976627c106.68486667-51.39820944 198.0987385-51.39820944 265.58098184 7.95364314l4.3479916 3.81774871 3.42890392 4.70148684c28.42101815 38.778429 46.76742166 81.44530576 58.11461922 129.90950465 4.73683636 20.25527787 7.70619646 37.04630227 10.39276038 59.52860019l2.26236959 20.8562198 5.83267165 63.41704798c10.00391561 95.69116436 27.18378479 117.92601564 110.2905182 120.75397764l14.91749959 0.31814572c68.08318529-20.07853024 89.3989489-54.96851149 95.19627102-128.46017411l0.77768954-11.31184801 2.08562199-50.76191801c1.73212673-38.38958422 4.31264205-58.18531826 11.73604231-81.5160048 23.89627894-75.0116922 87.03053072-110.89146014 178.16160635-111.10355729V229.20379943z"></path>
    </svg>
  ),
};

Object.keys(svgs).forEach((key) => {
  Icons[key] = createIcon(svgs[key]);
});

function createIcon(svg: any) {
  const component = () => svg;
  return (props: any) => <Icon component={component} {...props} />;
}

export default Icons;
