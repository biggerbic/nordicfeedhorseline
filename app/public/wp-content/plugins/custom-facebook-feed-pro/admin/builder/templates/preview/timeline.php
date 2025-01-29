<section
id="cff-post-list-section"
class="cff-preview-posts-list-ctn cff-fb-fs cff-preview-section"
:data-dimmed="!isSectionHighLighted('postList')"
:class="customizerFeedData.settings.feedlayout == 'masonry' ? 'cff-preview-posts-masonry' : ''"
v-if="sourcesList.length && (customizerFeedData.settings.feedtype == 'timeline' || customizerFeedData.settings.feedtype == 'featuredpost' || customizerFeedData.settings.feedtype == 'events' || customizerFeedData.settings.feedtype == 'reviews')"
:data-generate-masonry="customizerFeedData.settings.feedlayout == 'masonry' ? generateMasonryGridHeight() : false"
:data-feed-type="customizerFeedData.settings.feedtype"
:data-feed-layout="customizerFeedData.settings.feedlayout"
:data-feed-columns="getFeedColumns()"
:data-poststyle="customizerFeedData.settings.poststyle"
:data-boxshadow="valueIsEnabled(customizerFeedData.settings.boxshadow) && customizerFeedData.settings.poststyle == 'boxed'"
:data-narrow="valueIsEnabled(customizerFeedData.settings.enablenarrow) ? 'active' : 'inactive'">
	<cff-post-full-layout-component
	v-for="singlePost in returnPostList()"
	v-bind:key="singlePost.id"
	v-if="shouldShowPostList('full' ,singlePost) || customizerFeedData.settings.feedlayout == 'masonry'"
	:single-post="singlePost"
	:customizer-feed-data="customizerFeedData"
	:translated-text="translatedText"></cff-post-full-layout-component>

	<cff-post-half-layout-component 
	v-for="singlePost in returnPostList()"
	v-bind:key="singlePost.id"
	v-if="(!customizerFeedData.settings.feedtheme || customizerFeedData.settings.feedtheme == 'default_theme') && shouldShowPostList('half' ,singlePost) && customizerFeedData.settings.feedlayout !== 'masonry'"
	:single-post="singlePost"
	:customizer-feed-data="customizerFeedData"
	:translated-text="translatedText"></cff-post-half-layout-component>

	<cff-post-half-theme-layout-component 
	v-for="singlePost in returnPostList()"
	v-bind:key="singlePost.id"
	v-if="(customizerFeedData.settings.feedtheme && customizerFeedData.settings.feedtheme != 'default_theme') && (shouldShowPostList('half',singlePost) || shouldShowPostList('thumb',singlePost)) && customizerFeedData.settings.feedlayout !== 'masonry'"
	:single-post="singlePost"
	:customizer-feed-data="customizerFeedData"
	:translated-text="translatedText"></cff-post-half-theme-layout-component>

	<cff-post-thumb-layout-component
	v-for="singlePost in returnPostList()"
	v-bind:key="singlePost.id"
	v-if="(!customizerFeedData.settings.feedtheme || customizerFeedData.settings.feedtheme == 'default_theme') && shouldShowPostList('thumb' ,singlePost) && customizerFeedData.settings.feedlayout !== 'masonry'"
	:single-post="singlePost"
	:customizer-feed-data="customizerFeedData"
	:translated-text="translatedText"></cff-post-thumb-layout-component>
</section>
