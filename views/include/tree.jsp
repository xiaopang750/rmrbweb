<%@taglib prefix="s"  uri="/struts-tags"%>
<%@page contentType="text/html;charset=utf-8"%>
<div class="main-tree clearfix" tab-tree>
	<div class="main fl">
		<ul>

			<s:iterator value="#session.menus" var="menu" status="i">
				<li widget-role="tab-head" m-name="${menu.name}" <s:if test='#menu.isShow=="Y"'>class="active"</s:if>>
					<a href="${menu.funInterface}">
						<span class="r-icon-nav ${menu.icon} mb-5 mt-20"></span>
						<p class="text">${menu.name}</p>
					</a>
				</li>
			</s:iterator>

		</ul>
	</div>
	<div class="sub-nav fl">
		<div class="tab-content-wrap">

			<s:iterator value="#session.menus" var="menu">
				<div class="tab-content <s:if test='#menu.isShow=="Y"'>block</s:if>"  widget-role="tab-content">
					<dl>
						<dt class="clearfix mb-20">
							<span class="r-icon-nav tag fl mt-5 ml-5"></span>
							<span class="fl font-14 bold ml-5 mt-14">${menu.name}</span>
						</dt>
						<dd>
							<ul>
						
								<s:iterator value="#menu.menus" var="men">
									<li nav-list text="${men.name}" <s:if test='#men.isShow=="Y"'>class="active"</s:if>>
										<span class="mark"></span>
										<a href="${men.funInterface}" <s:if test='#men.name=="行业热点"'>target="_blank"</s:if>>${men.name}</a>
									</li>
								</s:iterator>

							</ul>
						</dd>
					</dl>
				</div>
			</s:iterator>

		</div>
	</div>
</div>
