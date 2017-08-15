/**
 *description:网站全局配置文件
 *author:fanwei
 *date:2014/07/14
 */
define(function(require, exports, module){
	
	/*
		@param domain 请求的基础路径, 如果是同一域名reqBase domain唯一
		@param assets 静态图片系统文件路径, 如头像
		@param interfaces 接口
	*/

	var Class = require('../lib/until/class');
	var until = require('../lib/until/until');
	var R = R || {};
	
	R.uri = {
		domain: "/rmrbweb/",
		assets: "../statics/assets/",
		css: "../statics/src/css/"
	}

	R.interfaces = {
		login: R.uri.domain + "loginSys/login" ,			 //登录
		superLogin: R.uri.domain + "loginSys/adminLogin" ,			 //超级管理员登录
		loginValidate: R.uri.domain + "loginSys/validateCode" ,			 //登录验证码
		superLoginValidate: R.uri.domain + "loginSys/adminValidateCode" ,			 //超级管理员登录验证码
		get_trade_list: R.uri.domain + "mobilesite/mobilesitefindProfession",    //获取行业资讯
		post_mobile_build: R.uri.domain + "mobilesite/mobilesitesaveSiteBasicInfo", //新建手机站点提交
		post_mobile_page_build: R.uri.domain + "mobilesite/mobilesitesavePageBasicInfo", //新建手机页面提交
		get_mobile_data: R.uri.domain + "mobilesite/mobilesitereadContent", //新建编辑手机网站数据
		sub_mobile_site: R.uri.domain + "mobilesite/mobilesitesaveSiteOnePart", //保存站点提交
		sub_mobile_page: R.uri.domain + "mobilesite/mobilesitesavePageOnePart", //保存页面提交,
		change_mobile_status: R.uri.domain + "mobilesite/mobilesiteupdateIsused", //站点页面切换开启状态,
		delete_mobile_site: R.uri.domain + "mobilesite/mobilesitedeletePage", //删除站点/页面提交,
		get_mobile_site: R.uri.domain + "mobilesite/mobilesitefindSiteByPage", //获取已有的站点,
		get_mobile_page: R.uri.domain + "mobilesite/mobilesitefindPageBySplit", //获取已有的页面,
		post_save_url: R.uri.domain + "mobilesite/mobilesitesavePageUrl", //修改url地址，开启是否启用
		get_tree: R.uri.domain + "mobilesite/mobilesitereadTree", //获取树形菜单
		modify_site_url: R.uri.domain + "mobilesite/mobilesitesavePageUrl", //手机网站修改
		post_mobile_upload: R.uri.domain + "mobilesite/mobilesitereadTree", //获取树形菜单
		baidu_pic_search: "http://image.baidu.com/i", //百度图片搜索
		local_upload: R.uri.domain + "upload/uploadFile", //本地上传
		list_image: R.uri.domain + "pic/piclistImageByPage", //网页编辑器图片在线管理
		judge_site_name: R.uri.domain + "mobilesite/mobilesitefindSiteBySiteName", //判断网站名称是否重复
		cut_image: R.uri.domain + "upload/cutImg", //图片裁切接口


		get_met_list: R.uri.domain + "activity/findMeetingList",  //获取会议列表
		post_build_met: R.uri.domain + "activity/toCheckMeetModel", //新建会议模板
		post_met_basic: R.uri.domain + "activity/addActivity", //会议选择模板确认
		post_met_next: R.uri.domain + "activity/checkMeetModel", //会议选择模板确认
		get_flow_data: R.uri.domain + "activity/findModelMeeting", //获取流程数据
		post_flow_data: R.uri.domain + "activity/editMeetingFile", //提交流程数据


		get_pic_data: R.uri.domain + "activity/findMuli", //获取图文消息
		post_pic_data: R.uri.domain + "activity/updateMuli", //提交图文消息
		get_gift_list: R.uri.domain + "activity/findActivityByType", //获取图文消息
		get_prize_list: R.uri.domain + "activity/findChildrenActivityByType", //获取抽奖
		post_remove_gift_list: R.uri.domain + "activity/deleteActivity", //删除到店有礼列表


		post_elc_data: R.uri.domain + "activity/saveCoupons", //电子优惠券提交
		get_elc_data: R.uri.domain + "activity/findCouponsByPage", //获取电子优惠券列表
		del_elc_data: R.uri.domain + "activity/deleteCoupons", //删除电子优惠券列表
		get_elc_edit_data: R.uri.domain + "activity/findCouponsById", //获取电子优惠券编辑数据
		post_elc_edit_data: R.uri.domain + "activity/updateCoupons", //电子优惠券编辑数据提交
		post_accounts_box: R.uri.domain + "member/cancelCoupons", //核销

		get_set_box_data: R.uri.domain + "activity/findChannelConfigInfo", //渠道设置弹框数据
		post_set_box: R.uri.domain + "activity/channelConfig", //渠道设置提交
		post_send: R.uri.domain + "activity/sendActivity", //推送

		get_memberList: R.uri.domain + "member/findMemberByCorp", //获取会员列表
		black_memberList: R.uri.domain + "member/deteteMemberinfo", //删除会员列表
		find_member_level: R.uri.domain + "member/findMemberLevelByCorp", //查询会员级别
		find_member_status: R.uri.domain + "member/memberCondition", //查询会员状态
		build_code: R.uri.domain + "activity/addQcode", //二维码生成
		get_code_list: R.uri.domain + "activity/allQcode", //先下活动二维码自定义生成列表
		get_code: R.uri.domain + "activity/findEWMConfigInfo", //获取二维码信息
		code_list_remove: R.uri.domain + "activity/deleteQcode", //先下活动二维码自定义生成列表删除

		get_user_list: R.uri.domain + "sys/findUsers", //后台配置-获取用户列表
		get_memberFormList: R.uri.domain + "sys/findUser", //后台配置-用户表单信息
		post_memberInfoAdd: R.uri.domain + "sys/addUser", //后台配置-用户表单信息添加提交
		post_memberInfoEdit: R.uri.domain + "sys/updateUser", //后台配置-用户表单信息编辑提交
		delete_member: R.uri.domain + "sys/deleteUser", //后台配置-用户删除

		get_role_list: R.uri.domain + "sys/findRoleInfoByCorp", //后台配置-获取角色列表
		get_role_power: R.uri.domain + "sys/findUserRoleInfos", //后台配置-获取角色权限
		get_roleFormList: R.uri.domain + "sys/findRole", //后台配置-角色表单信息
		post_roleInfoAdd: R.uri.domain + "sys/addRole", //后台配置-角色表单信息添加提交
		post_roleInfoEdit: R.uri.domain + "sys/updateRole", //后台配置-角色表单信息编辑提交
		delete_role: R.uri.domain + "sys/deleteRole", //后台配置-角色删除
		change_role: R.uri.domain + "sys/editUserRole", //后台配置-角色更改
		chose_menu_list: R.uri.domain + "sys/adminAllocate", //菜单权限列表
		post_chose_menu_list: R.uri.domain + "sys/updatePermission", //菜单权限列表提交

		chose_role_list: R.uri.domain + "sys/findNeedMenu", //角色权限列表
		post_chose_role_list: R.uri.domain + "sys/powerFuncAllocate", //角色权限列表提交

		get_company_tree: R.uri.domain + "sys/findChildrenCorp", //后台配置-企业设置-tree
		get_compay_select: R.uri.domain + "sys/findResources", //后台配置-企业设置-添加企业/公司请求类型
		add_group_com: R.uri.domain + "sys/addCorpInfo", //后台配置-企业设置-添加企业/公司
		edit_group_com: R.uri.domain + "sys/updateCorpInfo", //后台配置-企业设置-编辑企业/公司
		del_group_com: R.uri.domain + "sys/delCorpInfo", //后台配置-企业设置-删除企业/公司

		get_area_data: R.uri.domain + "sys/queryChildrenArea", //后台配置-区域管理-获取树形菜单
		get_area_shop: R.uri.domain + "sys/findShopListInfo", //后台配置-区域管理-获取区域店铺
		areaAdd: R.uri.domain + "sys/addShop", //后台配置-区域管理-区域店铺添加
		areaEdit: R.uri.domain + "sys/updateShop", //后台配置-区域管理-区域店铺编辑
		areaDel: R.uri.domain + "sys/deleteShop", //后台配置-区域管理-区域店铺删除

		wayList: R.uri.domain + "sys/findAccounts", //渠道数据-账号绑定列表
		addWayList: R.uri.domain + "sys/addAccount", //渠道数据-账号绑定添加
		editWayList: R.uri.domain + "sys/updateAccount", //渠道数据-账号绑定编辑
		editWayListData: R.uri.domain + "sys/findCountInfoById", //渠道数据-账号绑定编辑数据
		deleteWayList: R.uri.domain + "sys/delAccount", //渠道数据-账号绑定删除数据

		get_met_list_name: R.uri.domain + "activity/queryActivityByType", //获取会议列表名称
		sign_name: R.uri.domain + "activity/findSignByParticipatetime", //签到接口
		get_back_list: R.uri.domain + "activity/findViewInfo", //获取后台监控列表
		post_up_screen: R.uri.domain + "activity/upScreen", //上屏推送
		get_screen_data: R.uri.domain + "activity/viewScreen", //获取上屏数据
		post_act_data: R.uri.domain + "activity/editInteraction", //活动发布提交
		concat_act: R.uri.domain + "activity/createInteractToActivity", //建立互动与活动的关联
		get_act_data: R.uri.domain + "activity/findInteraction", //获取现场活动编辑数据

		get_member_list: R.uri.domain + "customer/customerlistfindByCondition",//获取会员聊天列表
		get_member_record: R.uri.domain + "customer/customerdetailfindByCondition",//获取会员聊天记录
		join_member: R.uri.domain + "customer/customerdetailjoinCustomer", //接入聊天用户
		post_member_msg: R.uri.domain + "customer/customerlistsentmessage",//发送聊天
		close_member_msg: R.uri.domain + "customer/customerdetailcustomerClose",//关闭聊天
		know_all: R.uri.domain + "customer/KnowledgestorgeAction", //知识库
		get_weibo_list: R.uri.domain + "blog/blogfindBlogByPage", //获取微博列表
		get_weibo_detail: R.uri.domain + "member/findCommentByBlogId", //微博评论详情
		reply_weibo: R.uri.domain + "member/replayComments", //回复评论
		send_weibo: R.uri.domain + "member/addBlogComment", //发送评论
		get_latest_weibo: R.uri.domain + "blog/blogfindBlogByBlogId", //获取最新微博
		get_latest_arg: R.uri.domain + "member/findComment", //获取最新评论
		get_weibo: R.uri.domain + "blog/blogfindBlogByPkBlog", //获取微博

		add_reply: R.uri.domain + "autoreply/addautoreply", //智能回复提交
		edit_reply: R.uri.domain + "autoreply/updateautoreply", //智能回复编辑
		get_edit_reply: R.uri.domain + "autoreply/findreplybyid", //智能回复获取编辑数据
		get_reply_list: R.uri.domain + "autoreply/findautoreply", //智能回复列表数据
		del_reply_list: R.uri.domain + "autoreply/delautoreply", //智能回复列删除

		sign_list: R.uri.domain + "activity/findActivitySignResult", //报名列表
		get_hased_menu: R.uri.domain + "account/wxmenufindWxmenuLists", //获取微信菜单
		add_weixin_menu: R.uri.domain + "account/wxmenuaddWxmenuInfo", //添加微信菜单
		edit_hased_menu: R.uri.domain + "account/wxmenuupdateWxmenu", //编辑微信菜单
		remove_hased_menu: R.uri.domain + "account/wxmenudeleteWxmenuById", //删除微信菜单
		sort_menu: R.uri.domain + "account/wxmenuupdateWXMenuOrder", //微信菜单排序
		msg_menu: R.uri.domain + "account/wxmenuupdateWxmenuCountent", //微信菜单内容修改
		build_weixin_menu: R.uri.domain + "account/wxmenucreateWXMenu", //生成微信菜单
		build_weibo_menu: R.uri.domain + "account/wxmenucreateWBMenu", //生成微博菜单

		get_member_edit_data: R.uri.domain + "member/findMemberinfoById", //获取会员编辑数据
		post_member_edit: R.uri.domain + "member/updateMemberinfo", //会员编辑数据提交
		post_member_add: R.uri.domain + "member/addMemberinfo", //新增会员提交

		get_member_detail1: R.uri.domain + "member/memberInteractList", //获取会员详情1
		get_member_detail2: R.uri.domain + "member/memberCouponsList", //获取会员详情2
		get_member_detail3: R.uri.domain + "member/memberActList", //获取会员详情3
		get_member_detail4: R.uri.domain + "member/memberCollectList", //获取会员详情4
		get_member_detail5: R.uri.domain + "member/memberIntegralList", //获取会员详情5
		get_member_detail6: R.uri.domain + "member/findEvaluateInfo", //获取会员详情6
		member_entry: R.uri.domain + "account/publicpublicMessage", //会员接入

		get_commont_list: R.uri.domain + "activity/findAllActivityReview", //获取评论列表
		add_commont_list: R.uri.domain + "activity/addActivityReview", //添加评论
		remove_commont_list: R.uri.domain + "activity/delActivityReview", //删除评论

		member_level_list: R.uri.domain + "member/findMemberLevelByCorp", //会员级别列表
		member_level_add: R.uri.domain + "member/addMemberLevel", //会员级别添加
		member_level_edit: R.uri.domain + "member/updateMemberLevel", //会员级别编辑
		member_level_data: R.uri.domain + "member/findMemberLevel", //会员级别详情
		member_level_remove: R.uri.domain + "member/delMemberLevel", //会员级别删除
		check_aid_isRepeat: R.uri.domain + "sys/judgeByAccountId", //检测公众号id是否重复

		add_ku: R.uri.domain + "ku/addQuestionAndSelect", //添加问题库的问题
		add_ku_child: R.uri.domain + "ku/addSelectByBetch", //添加问题库的选项
		edit_ku: R.uri.domain + "ku/updateQuestion",//编辑问题库的问题
		edit_ku_child: R.uri.domain + "ku/updateSelect", //编辑问题库的选项
		del_ku: R.uri.domain + "ku/deleteQuestionAndSelect", //删除问题库的问题
		del_ku_child: R.uri.domain + "ku/deleteSelect", //删除问题库的选项
		find_ku: R.uri.domain + "ku/findQuestionAndSelect", //根据问题id获取问题库的一条问题
		change_ku: R.uri.domain + "ku/updateSelectOrder", //问题库选项排序

		add_exam: R.uri.domain + "wj/addWjQuesAndOption", //添加问卷的问题
		add_exam_child: R.uri.domain + "wj/wjSelectaddSelect", //添加问卷问题的选项
		edit_exam: R.uri.domain + "wj/updateQuestion",//编辑问卷的问题
		edit_exam_child: R.uri.domain + "wj/updateSelect", //编辑问卷问题的选项
		del_exam: R.uri.domain + "wj/deleteQuestion", //删除问卷的问题
		del_exam_child: R.uri.domain + "wj/deleteSelect", //删除问卷问题的选项
		find_exam: R.uri.domain + "wj/allWjQuestion", //根据问卷id获取问卷问题
		change_exam: R.uri.domain + "wj/wjSelectupdateOrder", //问卷选项排序
		save_exam: R.uri.domain + "wj/wjObjectfinishWj", //问卷保存
		get_exam_list: R.uri.domain + "wj/wjObjectfindRmrbWjObject", //获取问卷列表
		del_exam_list: R.uri.domain + "wj/wjObjectdeleteRmrbWjObject", //问卷列表删除

		find_question_way: R.uri.domain + "ku/surveyProfession", //获取问题库的类别
		find_question_type: R.uri.domain + "ku/questionType", //获取问题库的题型
		search_ku_question: R.uri.domain + "ku/findQuestion", //根据类型和题型查询问题

		create_question: R.uri.domain + "wj/wjObjectaddRmrbWjObject", //创建问卷
		get_question_data: R.uri.domain + "ku/findQuestion", //获取问卷题目统计数据

		find_score_list: R.uri.domain + "sys/findIntegralByActivity", //查询积分规则列表
		find_score: R.uri.domain + "sys/findActIntegralByPk", //查询单条积分规则
		add_score: R.uri.domain + "sys/addActIntegral", //添加一条积分规则
		edit_score: R.uri.domain + "sys/updateActIntegral", //编辑一条积分规则
		del_score: R.uri.domain + "sys/delActIntegral", //删除一条积分规则

		find_goodscore_list: R.uri.domain + "activity/findIntegralExchangeList", //查询积分规则列表
		find_goodscore: R.uri.domain + "activity/findIntegralExchange", //查询单条积分规则
		add_goodscore: R.uri.domain + "activity/addIntegralExchange", //添加一条积分规则
		edit_goodscore: R.uri.domain + "activity/updateIntegralExchange", //编辑一条积分规则
		del_goodscore: R.uri.domain + "activity/delIntegralExchange", //删除一条积分规则
		exchange_goodscore: R.uri.domain + "activity/integralToProduct", //兑换积分
		
		modify_user: R.uri.domain + "sys/updateUserPass", //用户信息修改	
		member_input: R.uri.domain + "sys/updateUserPass", //会员导入
		checkMangerRepeat: R.uri.domain + "sys/judgeUserForCorp", //验证管理员名称是否重复

		findPassInfo: R.uri.domain + "sys/findOneMsg", //查询找回密码信息
		editfindPass: R.uri.domain + "sys/updateMessage", //编辑找回密码
		addMemberScore: R.uri.domain + "member/addMemberIntegral", //会员添加积分

		industry_list: R.uri.domain + "dictionary/findDataSubPage", //行业类型列表	
		industry_add: R.uri.domain + "dictionary/addDataSub", //行业类型添加
		industry_find: R.uri.domain + "dictionary/findDataByPk", //查询单个行业类型
		industry_edit: R.uri.domain + "dictionary/updateDataSub", //行业类型编辑
		industry_remove: R.uri.domain + "dictionary/deleteDataSub", //行业类型删除
		industry_module: R.uri.domain + "dictionary/findDataMain", //查询行业模块

		detail_elc: R.uri.domain + "member/memberCouponsCondition", //电子优惠券领取详情
		detail_elc_stauts: R.uri.domain + "member/memberCouponsStatus", //电子优惠券状态查询

		view_code: R.uri.domain + "activity/ewmview", //二维码预览

		get_public_code: R.uri.domain + "activity/queryQrCodes", //现场发布会查询二维码

		get_activity_status: R.uri.domain + "activity/queryActStatus", //获取活动状态

		get_question: R.uri.domain + "wj/wjQuestionfindquestion", //查询问卷下的所有题目
		question_count: R.uri.domain + "wj/wjQuestioncountOption", //问卷题目统计

		addGroup: R.uri.domain + "member/addMGroup", //添加分组
		editGroup: R.uri.domain + "member/updateMGroup", //编辑分组
		delGroup: R.uri.domain + "member/deleteMCroup", //删除分组
		findGroup: R.uri.domain + "member/findMGroup", //获取分组
		addMemberToGroup: R.uri.domain + "member/updateMemberGroupInfo", //把会员加入分组

		score_goods_detail: R.uri.domain + "activity/findIntegralExchangeDetail", //商品兑换详情
		score_detail: R.uri.domain + "sys/findPointReceiveDetail", //积分兑换详情

		gift_find_member: R.uri.domain + "activity/activitySignByCode", //查询活动下有没有会员
		gift_give_member: R.uri.domain + "activity/activitySignByPk", //到店有礼核销给某个会员
		find_act_time: R.uri.domain + "activity/findActivity", //查询活动有效期
		set_act_time: R.uri.domain + "activity/editActivityEffectDate", //编辑活动有效期
		company_sub_list: R.uri.domain + "sys/findChildrenCorpDataInfo",//字企业详情
		time_select: R.uri.domain + "activity/queryActivityOverDueStatus",//根据过期时间筛选

		know_all_list: R.uri.domain + "ku/knowledgestorgefindRmrbBdKnowledgestorge", //所有知识库
		know_list: R.uri.domain + "ku/knowledgestorgefindRmrbBdKnowledgestorgeByPage", //知识库列表
		find_know: R.uri.domain + "ku/knowledgestorgefindByPkKnowledgestorge", //查找知识库
		add_know: R.uri.domain + "ku/knowledgestorgeaddRmrbBdKnowledgestorge", //添加知识库
		edit_konw: R.uri.domain + "ku/knowledgestorgeupdateRmrbBdKnowledgestorge", //编辑知识库
		del_konw: R.uri.domain + "ku/knowledgestorgedeleteRmrbBdKnowledgestorge",//删除知识库
		add_url: R.uri.domain + "mobilesite/mobilesitesaveCustomPage",//添加自定义链接

		online_manage: R.uri.domain + "pic/picfindPicByPage",//在线管理

		data1: R.uri.domain + "ds/analysisActivityTop",
		data11: R.uri.domain + "ds/analysisForChannelMember",
		data3: R.uri.domain + "ds/analysisChannelActivity",
		data5: R.uri.domain + "ds/analysisForActivityUnChannelCompare",
		data7: R.uri.domain + "ds/analysisForAllActivityUnChannelCompare",
		data9: R.uri.domain + "ds/activityTypeMemAnalysisForChannel",

		data13:R.uri.domain + "ds/dateChannelActivityMember",
		data14:R.uri.domain + "ds/dateChannelActivityRead",
		data15:R.uri.domain + "ds/dateChannelActivityReview",
		
		data16: R.uri.domain + "ds/memberLevelActivityCount",
		data17: R.uri.domain + "ds/memberLevelActivityType",
		data18: R.uri.domain + "ds/dateMemberIntegralCount",
		data19: R.uri.domain + "ds/dateMemberIntegralType",

		searchActivity: R.uri.domain + "activity/findInfoByTopic",

		checkDomain: R.uri.domain + "mobilesite/mobilesitecheckDomain",
		saveDomain: R.uri.domain + "mobilesite/saveCustomDomain",
		findAllSelfLink: R.uri.domain + "mobilesite/findCustomPageByPkSite",
		menuSearch : R.uri.domain + "sys/findFunctionMenuAll", 
		menuAdd : R.uri.domain + "sys/saveMenu",
		menuUpdate : R.uri.domain + "sys/updateMenu",
		menuDel : R.uri.domain + "sys/deleteMenu",

		keywords_info: R.uri.domain + "keyword/findKeyword",
		keywords_sub: R.uri.domain + "keyword/editKeyword",
		search_question_type: R.uri.domain + "wj/wjObjectfindSurveyType",
		quote_question: R.uri.domain + "wj/wjObjectuseWjobject",

		offline_code_view: R.uri.domain + "activity/queryFocusEwm",

		get_socket_port: R.uri.domain + "customer/customerdetailgetSocketService", //获取当前环境socket链接的地址
		judgeIsNameRepeat: R.uri.domain + "ku/findQuestionByName", //判断问题名称是否重名
		findShortUrl: R.uri.domain + "mobilesite/updateShortUrl" //查询短链接
	}

	R.Class = Class;
	R.until = until;

	window.R = R;

});