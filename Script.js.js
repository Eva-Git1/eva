<script src="/files/theme/plugins.js?1720602719"></script>
<script src="/files/theme/custom-1.js?1720602719"></script>
<script src="//cdn2.editmysite.com/js/site/main-customer-accounts-site.js?buildTime=1731026547"></script>
<script type="text/javascript">
	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-7870337-1']);
	_gaq.push(['_setDomainName', 'none']);
	_gaq.push(['_setAllowLinker', true]);

	(function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		// NOTE: keep the [1] if you replace this code. Otherwise cookie banner scripts won't be first on the page
		var s = document.getElementsByTagName('script')[1]; s.parentNode.insertBefore(ga, s);
	})();

	_W.Analytics = _W.Analytics || {'trackers': {}};
	_W.Analytics.trackers.wGA = '_gaq';
</script>
<script type="text/javascript" async="1">
	// NOTE: keep the getElementsByTagName(o)**[1]** if you replace this code. Otherwise cookie banner scripts won't be first on the page
	;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
			p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)
			};p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[1];n.async=1;
			n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,'script','//cdn2.editmysite.com/js/wsnbn/snowday262.js','snowday'));

	var r = [99, 104, 101, 99, 107, 111, 117, 116, 46, 40, 119, 101, 101, 98, 108, 121, 124, 101, 100, 105, 116, 109, 121, 115, 105, 116, 101, 41, 46, 99, 111, 109];
	var snPlObR = function(arr) {
		var s = '';
		for (var i = 0 ; i < arr.length ; i++){
			s = s + String.fromCharCode(arr[i]);
		}
		return s;
	};
	var s = snPlObR(r);

	var regEx = new RegExp(s);

	_W.Analytics = _W.Analytics || {'trackers': {}};
	_W.Analytics.trackers.wSP = 'snowday';
	_W.Analytics.user_id = '131067957';
	_W.Analytics.site_id = '645213131713348032';

	var drSegmentsTag = document.getElementById('drSegments');
	if (drSegmentsTag) {
		_W.Analytics.spContexts = _W.Analytics.spContexts || [];

		var segmentData = JSON.parse(drSegmentsTag.innerText);
		segmentData.forEach(function(test) {
			_W.Analytics.spContexts.push({
				schema: "iglu:com.weebly/context_ab_segment/jsonschema/1-0-0",
				data: {
					test_id: test.name,
					segment: test.variant,
				}
			});
		});
	}


	(function(app_id, ec_hostname, discover_root_domain) {
		var track = window[_W.Analytics.trackers.wSP];
		if (!track) return;
		track('newTracker', app_id, ec_hostname, {
			appId: app_id,
			post: true,
			platform: 'web',
			discoverRootDomain: discover_root_domain,
			cookieName: '_snow_',
			contexts: {
				webPage: true,
				performanceTiming: true,
				gaCookies: true
			},
			crossDomainLinker: function (linkElement) {
				return regEx.test(linkElement.href);
			},
			respectDoNotTrack: true
		});
		track('trackPageView', _W.Analytics.user_id+':'+_W.Analytics.site_id, _W.Analytics.spContexts);
		track('crossDomainLinker', function (linkElement) {
			return regEx.test(linkElement.href);
		});
	})(
		'_wn',
		'ec.editmysite.com',
		false
	);
</script>
