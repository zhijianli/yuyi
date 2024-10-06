“羽衣”--根据五行給出穿搭建议的项目




先选定设计工具，找个合适的模板，选定[即时设计](https://js.design/)

设计的网站：即时设计，mastergo

- 第一步：调用一下相应的js库，获取农历日期
    
    
    ```jsx
    
    import solarLunar from 'solarlunar-es';
    
    // 获取当前日期
    const currentDate = new Date();
    const year = currentDate.getFullYear(); // 获取当前年份
    const month = currentDate.getMonth() + 1; // 获取当前月份（月份从0开始，所以加1）
    const day = currentDate.getDate(); // 获取当前日期
    
    const solar2lunarData = solarLunar.solar2lunar(year, month, day); // 输入的日子为公历
    let lunarStr = "农历"+solar2lunarData.yearCn+solar2lunarData.monthCn+solar2lunarData.dayCn+"日"
    let lunarYear = solar2lunarData.gzYear+solar2lunarData.animal+"年"
    let lunarMonth = solar2lunarData.gzMonth+"月"
    let lunarDay = solar2lunarData.gzDay+"日"
    console.log(lunarStr+lunarYear+lunarMonth+lunarDay)
    
    ```
    
- 第二步：根据农历日期，调用ChatGPT给出相应颜色
    
    提示词：你现在是一个擅长阴阳五行的算命先生，今天的农历日期是：农历二零二四年九月初四日甲辰龙年癸酉月癸卯日，你告诉我今天适合穿戴的颜色，普通穿戴的颜色，和不适合穿戴的颜色（颜色名需要是中国古代的颜色名，同时告诉我颜色代码和颜色的英文翻译），并告诉我理由。
    
     ![image](https://github.com/user-attachments/assets/ccd4d25a-f323-4794-998c-fd392be814a2)

    
- 第三步：调用一下绘画大模型，生成相应颜色女装！！！
    
    [绘图大模型网站](https://www.liblib.art/)
    
    提示词：AiARTiST,CADS,full_body,pearl gray clothes,Asian female relax,Thin cardigan sweater,long skirt,OOTD,Outfit of the Day,solo,simple_background,light green background,short hair,realistic,earrings,hair ornament,black eyes,lips,collarbone,hair flower,lora:AiARTiST_OOTD_Female_pruned:0.7,
    
    AiARTiST,CADS,full_body,red-crowned crane red clothes,Asian female relax,Thin cardigan sweater,long skirt,OOTD,Outfit of the Day,solo,simple_background,short hair,jewelry,realistic,earrings,hair ornament,black eyes,lips,hair flower,smile,lora:AiARTiST_OOTD_Female_pruned:1,
    
    AiARTiST,CADS,full_body,Dark Purple-Black clothes,Asian female relax,OOTD,Outfit of the Day,solo,simple_background,short hair,realistic,earrings,hair ornament,black eyes,lips,hair flower,lora:AiARTiST_OOTD_Female_pruned:0.9,
    
    负面提示词：
    
    (NSFW:1.3),teeth,(cleavage),(worst quality:1.65),(low quality:1.2),(normal quality:1.2),low resolution,watermark,dark spots,blemishes,dull eyes,wrong teeth,red teeth,bad tooth,Multiple people,broken eyelashes,(badhandv4-AnimeIllustDiffusion_badhandv4:1.2),(EasyNegative:1.2),
    
    ![image](https://github.com/user-attachments/assets/1785c2b1-2fee-4af7-8d72-88faf129548d)

    
- 第四步，调用[阿里抠图工具](https://vision.aliyun.com/experience/detail?spm=a2cvz.27718152.J_9280759530.10.1f917e821maLI6&tagName=imageseg&children=SegmentHDBody)，把背景扣掉

把项目部署到本地

- 相关灵感
    
    展示中式服装，所以中式风格的设计比较重要
    
    [中国传统颜色](https://js.design/f/aC8duf?p=5UnSvAU40y&mode=design&linkelement=xXCbGsOFb0SJaIpVou4hs)
    
    chatgpt的api不能了解什么是阴历，那就只能调用国内的api了，kimi试了一下是正确的，那就调用kimi的api试试看了，[kmi的文档](https://platform.moonshot.cn/docs/guide/start-using-kimi-api)


- 第五步，把羽衣项目部署到服务器
    
    既然是静态的，那我还是部署到阿里云服务器好了。
    
    在/home/mocuili/github/yuyi/unpackage/dist/build/web目录下，执行命令
    
    python3 -m http.server 9000  （或者直接在根目录下，执行start.sh文件就行）
    
    [解决字体过大，前端加载太慢的问题](https://blog.csdn.net/u014289767/article/details/112002307)
    
    - 压缩的文字
        
        甲乙丙丁戊己庚辛壬癸
        子丑寅卯辰巳午未申酉戌亥
        鼠牛虎兔龙蛇马羊猴鸡狗猪
        年月日初农历
        吉忌次
        零一二三四五六七八九
        珍珠灰鹤顶红象牙白杏仁黄麦苗绿湖水蓝玄青色
