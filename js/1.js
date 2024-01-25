var rule = {
	title: '荐片',
	host: 'http://api2.rinhome.com',
	homeUrl: '/api/tag/hand?code=unknown601193cf375db73d&channel=wandoujia',
	url: '/api/crumb/list?page=fypage&type=0&limit=24&fyfilter',
	class_name: '全部&电影&电视剧&综艺&动漫',
	class_url: '0&1&2&4&3',
	detailUrl: '/api/node/detail?channel=wandoujia&token=&id=fyid',
	searchUrl: '/api/video/search?key=**&page=fypage',
	searchable: 2,
	quickSearch: 0,
	filterable: 1,
	filter: {
		"0":[{"key":"area","name":"地区","value":[{"n":"全部","v":"0"},{"n":"大陆","v":"1"},{"n":"香港","v":"3"},{"n":"台湾","v":"6"},{"n":"美国","v":"5"},{"n":"日本","v":"2"},{"n":"韩国","v":"18"}]},{"key":"year","name":"年代","value":[{"n":"全部","v":"0"},{"n":"2023","v":"153"},{"n":"2022","v":"101"},{"n":"2021","v":"118"},{"n":"2020","v":"16"},{"n":"2019","v":"7"},{"n":"2018","v":"2"},{"n":"2017","v":"3"},{"n":"2016","v":"22"}]},{"key":"sort","name":"排序","value":[{"n":"热门","v":"hot"},{"n":"评分","v":"rating"},{"n":"更新","v":"update"}]}],
		"1":[{"key":"area","name":"地区","value":[{"n":"全部","v":"0"},{"n":"大陆","v":"1"},{"n":"香港","v":"3"},{"n":"台湾","v":"6"},{"n":"美国","v":"5"},{"n":"日本","v":"2"},{"n":"韩国","v":"18"}]},{"key":"year","name":"年代","value":[{"n":"全部","v":"0"},{"n":"2023","v":"153"},{"n":"2022","v":"101"},{"n":"2021","v":"118"},{"n":"2020","v":"16"},{"n":"2019","v":"7"},{"n":"2018","v":"2"},{"n":"2017","v":"3"},{"n":"2016","v":"22"}]},{"key":"sort","name":"排序","value":[{"n":"热门","v":"hot"},{"n":"评分","v":"rating"},{"n":"更新","v":"update"}]}],
		"2":[{"key":"area","name":"地区","value":[{"n":"全部","v":"0"},{"n":"大陆","v":"1"},{"n":"香港","v":"3"},{"n":"台湾","v":"6"},{"n":"美国","v":"5"},{"n":"日本","v":"2"},{"n":"韩国","v":"18"}]},{"key":"year","name":"年代","value":[{"n":"全部","v":"0"},{"n":"2023","v":"153"},{"n":"2022","v":"101"},{"n":"2021","v":"118"},{"n":"2020","v":"16"},{"n":"2019","v":"7"},{"n":"2018","v":"2"},{"n":"2017","v":"3"},{"n":"2016","v":"22"}]},{"key":"sort","name":"排序","value":[{"n":"热门","v":"hot"},{"n":"评分","v":"rating"},{"n":"更新","v":"update"}]}],
		"3":[{"key":"area","name":"地区","value":[{"n":"全部","v":"0"},{"n":"大陆","v":"1"},{"n":"香港","v":"3"},{"n":"台湾","v":"6"},{"n":"美国","v":"5"},{"n":"日本","v":"2"},{"n":"韩国","v":"18"}]},{"key":"year","name":"年代","value":[{"n":"全部","v":"0"},{"n":"2023","v":"153"},{"n":"2022","v":"101"},{"n":"2021","v":"118"},{"n":"2020","v":"16"},{"n":"2019","v":"7"},{"n":"2018","v":"2"},{"n":"2017","v":"3"},{"n":"2016","v":"22"}]},{"key":"sort","name":"排序","value":[{"n":"热门","v":"hot"},{"n":"评分","v":"rating"},{"n":"更新","v":"update"}]}],
		"4":[{"key":"area","name":"地区","value":[{"n":"全部","v":"0"},{"n":"大陆","v":"1"},{"n":"香港","v":"3"},{"n":"台湾","v":"6"},{"n":"美国","v":"5"},{"n":"日本","v":"2"},{"n":"韩国","v":"18"}]},{"key":"year","name":"年代","value":[{"n":"全部","v":"0"},{"n":"2023","v":"153"},{"n":"2022","v":"101"},{"n":"2021","v":"118"},{"n":"2020","v":"16"},{"n":"2019","v":"7"},{"n":"2018","v":"2"},{"n":"2017","v":"3"},{"n":"2016","v":"22"}]},{"key":"sort","name":"排序","value":[{"n":"热门","v":"hot"},{"n":"评分","v":"rating"},{"n":"更新","v":"update"}]}]
	},
	filter_url: 'area={{fl.area or "0"}}&sort={{fl.sort or "update"}}&year={{fl.year or "0"}}&category_id={{fl.cateId}}',
	filter_def: {
		0:{cateId:'0'},
		1:{cateId:'1'},
		2:{cateId:'2'},
		3:{cateId:'3'},
		4:{cateId:'4'}
	},
	headers: {
		'User-Agent': 'jianpian-android/350',
		'JPAUTH': 'y261ow7kF2dtzlxh1GS9EB8nbTxNmaK/QQIAjctlKiEv'
	},
	timeout: 5000,
	limit: 8,
	play_parse: true,
	play_json: [{
		re: '*',
		json: {
			parse: 0,
			jx: 0
		}
	}],
	lazy: '',
	图片来源: '@Referer=www.jianpianapp.com@User-Agent=jianpian-version353',
	推荐: `js:
        var d = [];
        let html = request(input);
        html = JSON.parse(html).data[0].video;
        html.forEach(it => {
            d.push({
                title: it.title,
                img: it.path,
		desc: it.score + '分 / ' + it.playlist.title,
                url: it.id
            })
        });
        setResult(d);
    `,
	一级: `js:
        if (cateObj.tid.endsWith('_clicklink')) {
            cateObj.tid = cateObj.tid.split('_')[0];
            input = HOST + '/api/video/search?key=' + cateObj.tid + '&page=' + + MY_PAGE;
        }
        var d = [];
        let html = request(input);
        html = JSON.parse(html).data;
        html.forEach(it => {
            d.push({
                title: it.title,
                img: it.thumbnail||it.path,
		desc: it.score + '分 / ' + (it.mask || it.playlist.title),
                url: it.id
            })
        });
        setResult(d);
    `,
	二级: `js:
        function getLink(data) {
            let link = data.map(it => {
                return '[a=cr:' + JSON.stringify({'id':it.name+'_clicklink','name':it.name}) + '/]' + it.name + '[/a]'
            }).join(', ');
            return link
        }
		try {
            let html = request(input);
            html = JSON.parse(html);
            let node = html.data;
            VOD = {
                vod_id: node.id,
                vod_name: node.title,
                vod_pic: node.thumbnail,
                type_name: node.types[0].name,
                vod_year: node.year.title,
                vod_area: node.area.title,
                vod_remarks: node.score,
                vod_actor: getLink(node.actors),
                vod_director: getLink(node.directors),
                vod_content: node.description.strip()
            };
            if (typeof play_url === 'undefined') {
                var play_url = ''
            }
            let playMap = {};
			if (node.have_ftp_ur == 1) {
				playMap["FTP"] = node.new_ftp_list.map(it => {
					return it.title + "$" + (/m3u8/.test(it.url) ? play_url + it.url : "tvbox-xg:" + it.url)
				}).join('#');
			}
            let playFrom = [];
            let playList = [];
            Object.keys(playMap).forEach(key => {
                playFrom.append(key);
                playList.append(playMap[key])
            });
            VOD.vod_play_from = playFrom.join('$$$');
            VOD.vod_play_url = playList.join('$$$');
        } catch (e) {
            log("获取二级详情页发生错误:" + e.message);
        }
	`,
	搜索: `js:
        var d = [];
        let html = request(input);
        html = JSON.parse(html).data;
        html.forEach(it => {
            d.push({
                title: it.title,
                img: it.thumbnail,
		desc: it.score + '分 / ' + it.mask,
                url: it.id
            })
        });
        setResult(d);
    `,
}
