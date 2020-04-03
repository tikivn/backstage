(this['webpackJsonpexample-app'] = this['webpackJsonpexample-app'] || []).push([
  [0],
  {
    126: function(e, t, r) {
      'use strict';
      var a =
        (this && this.__importDefault) ||
        function(e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = a(r(79));
      !(function(e) {
        (e[(e.Off = 0)] = 'Off'), (e[(e.On = 1)] = 'On');
      })(t.FeatureFlagState || (t.FeatureFlagState = {})),
        (t.featureFlagsApiRef = new n.default({
          id: 'core.featureflags',
          description:
            'Used to toggle functionality in features across Backstage',
        }));
    },
    127: function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = r(212);
      t.default = a.default;
      var n = r(213);
      (t.gradients = n.gradients), (t.pageTheme = n.pageTheme);
    },
    129: function(e, t, r) {
      'use strict';
      var a = r(66);
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = r(15),
        i = r(310),
        l = r(130);
      t.COLORS = {
        PAGE_BACKGROUND: '#F8F8F8',
        DEFAULT_PAGE_THEME_COLOR: '#7C3699',
        DEFAULT_PAGE_THEME_LIGHT_COLOR: '#ECDBF2',
        ERROR_BACKGROUND_COLOR: '#FFEBEE',
        ERROR_TEXT_COLOR: '#CA001B',
        INFO_TEXT_COLOR: '#004e8a',
        LINK_TEXT: '#0A6EBE',
        LINK_TEXT_HOVER: '#2196F3',
        NAMED: { WHITE: '#FEFEFE' },
        STATUS: { OK: '#1db855', WARNING: '#f49b20', ERROR: '#CA001B' },
      };
      var o,
        u = {
          props: { MuiGrid: { spacing: 2 }, MuiSwitch: { color: 'primary' } },
          palette: {
            background: {
              default: t.COLORS.PAGE_BACKGROUND,
              informational: '#60a3cb',
            },
            status: {
              ok: t.COLORS.STATUS.OK,
              warning: t.COLORS.STATUS.WARNING,
              error: t.COLORS.STATUS.ERROR,
              running: '#BEBEBE',
              pending: '#5BC0DE',
              background: t.COLORS.NAMED.WHITE,
            },
            bursts: {
              fontColor: t.COLORS.NAMED.WHITE,
              slackChannelText: '#ddd',
              backgroundColor: { default: t.COLORS.DEFAULT_PAGE_THEME_COLOR },
            },
            primary: { main: l.blue[500] },
            border: '#E6E6E6',
            textVerySubtle: '#DDD',
            textSubtle: '#6E6E6E',
            highlight: '#FFFBCC',
            errorBackground: t.COLORS.ERROR_BACKGROUND_COLOR,
            warningBackground: '#F59B23',
            infoBackground: '#ebf5ff',
            errorText: t.COLORS.ERROR_TEXT_COLOR,
            infoText: t.COLORS.INFO_TEXT_COLOR,
            warningText: t.COLORS.NAMED.WHITE,
            linkHover: t.COLORS.LINK_TEXT_HOVER,
            link: t.COLORS.LINK_TEXT,
            gold: l.yellow.A700,
          },
          navigation: { width: 220, background: '#333333' },
          typography: {
            fontFamily:
              '"Helvetica Neue", Helvetica, Roboto, Arial, sans-serif',
            h5: { fontWeight: 700 },
            h4: { fontWeight: 700, fontSize: 28, marginBottom: 6 },
            h3: { fontSize: 32, fontWeight: 700, marginBottom: 6 },
            h2: { fontSize: 40, fontWeight: 700, marginBottom: 8 },
            h1: { fontSize: 54, fontWeight: 700, marginBottom: 10 },
          },
        },
        s = n.createMuiTheme(u),
        c = Object.assign(Object.assign({}, s), {
          overrides: {
            MuiTableRow: {
              root: {
                '&:nth-of-type(odd)': {
                  backgroundColor: (o = s).palette.background.default,
                },
              },
              hover: { '&:hover': { cursor: 'pointer' } },
              head: {
                '&:nth-of-type(odd)': { backgroundColor: t.COLORS.NAMED.WHITE },
              },
            },
            MuiTableCell: {
              root: {
                wordBreak: 'break-word',
                overflow: 'hidden',
                verticalAlign: 'middle',
                lineHeight: '1',
                margin: 0,
                padding: '8px',
                borderBottom: 0,
              },
              head: {
                wordBreak: 'break-word',
                overflow: 'hidden',
                color: 'rgb(179, 179, 179)',
                fontWeight: 'normal',
                lineHeight: '1',
              },
            },
            MuiTabs: { root: { minHeight: 24 } },
            MuiTab: {
              root: a(
                {
                  color: o.palette.link,
                  minHeight: 24,
                  textTransform: 'initial',
                  '&:hover': {
                    color: i.darken(o.palette.link, 0.3),
                    background: i.lighten(o.palette.link, 0.95),
                  },
                },
                o.breakpoints.up('md'),
                {
                  minWidth: 120,
                  fontSize: o.typography.pxToRem(14),
                  fontWeight: 500,
                },
              ),
              textColorPrimary: { color: o.palette.link },
            },
            MuiTableSortLabel: {
              root: {
                color: 'inherit',
                '&:hover': { color: 'inherit' },
                '&:focus': { color: 'inherit' },
              },
              active: { fontWeight: 'bold', color: 'inherit' },
            },
            MuiListItemText: {
              dense: {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              },
            },
            MuiButton: { text: { padding: null } },
            MuiChip: {
              root: { marginRight: o.spacing(1), marginBottom: o.spacing(1) },
            },
            MuiCardHeader: { root: { paddingBottom: 0 } },
            MuiCardActions: { root: { justifyContent: 'flex-end' } },
          },
        });
      (t.V1 = c), (t.default = c);
    },
    19: function(e, t, r) {
      'use strict';
      function a(e) {
        for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), a(r(205));
      var n = r(127);
      t.Page = n.default;
      var i = r(127);
      (t.gradients = i.gradients), (t.pageTheme = i.pageTheme);
      var l = r(224);
      t.Content = l.default;
      var o = r(225);
      t.ContentHeader = o.default;
      var u = r(221);
      t.Header = u.default;
      var s = r(303);
      t.HeaderLabel = s.default;
      var c = r(232);
      t.InfoCard = c.default;
      var d = r(305);
      (t.ErrorBoundary = d.default), a(r(306));
      var f = r(129);
      t.BackstageTheme = f.default;
      var p = r(129);
      t.COLORS = p.COLORS;
      var m = r(311);
      t.HorizontalScrollGrid = m.default;
      var h = r(315);
      t.ProgressCard = h.default;
      var g = r(233);
      t.CircleProgress = g.default;
      var v = r(316);
      t.Progress = v.default;
      var y = r(318);
      t.SupportButton = y.default;
      var b = r(322);
      t.SortableTable = b.default;
      var E = r(324);
      t.FeatureCalloutCircular = E.FeatureCalloutCircular;
    },
    205: function(e, t, r) {
      'use strict';
      function a(e) {
        for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        a(r(258)),
        a(r(210));
      var n = r(230);
      t.FeatureFlags = n.FeatureFlags;
      var i = r(208);
      t.useApp = i.useApp;
    },
    208: function(e, t, r) {
      'use strict';
      var a =
        (this && this.__importStar) ||
        function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          return (t.default = e), t;
        };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = a(r(0)),
        i = n.createContext(void 0);
      (t.AppContextProvider = function(e) {
        var t = e.app,
          r = e.children;
        return n.default.createElement(i.Provider, { value: t, children: r });
      }),
        (t.useApp = function() {
          var e = n.useContext(i);
          if (!e) throw new Error('No app context available');
          return e;
        });
    },
    210: function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = r(269);
      (t.ApiProvider = a.default), (t.useApi = a.useApi);
      var n = r(270);
      t.ApiRegistry = n.default;
      var i = r(271);
      (t.ApiTestRegistry = i.default),
        (function(e) {
          for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r]);
        })(r(275));
    },
    212: function(e, t, r) {
      'use strict';
      var a =
        (this && this.__importDefault) ||
        function(e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = a(r(0)),
        i = r(213),
        l = r(15);
      t.Theme = n.default.createContext(i.pageTheme.home);
      var o = l.makeStyles(function() {
        return {
          root: {
            display: 'grid',
            gridTemplateAreas:
              "'pageHeader pageHeader pageHeader' 'pageSubheader pageSubheader pageSubheader' 'pageNav pageContent pageSidebar'",
            gridTemplateRows: 'auto auto 1fr',
            gridTemplateColumns: 'auto 1fr auto',
            minHeight: '100%',
          },
        };
      });
      t.default = function(e) {
        var r = e.theme,
          a = void 0 === r ? i.pageTheme.home : r,
          l = e.children,
          u = o();
        return n.default.createElement(
          t.Theme.Provider,
          { value: a },
          n.default.createElement('div', { className: u.root }, l),
        );
      };
    },
    213: function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.gradients = {
          blue: { colors: ['#2D46B9', '#509BF5'] },
          darkBlue: { colors: ['#1E3264', '#A0C3D2'] },
          brown: { colors: ['#674638', '#C39887'] },
          green: { colors: ['#1DB954', '#006350'] },
          orangeYellow: { colors: ['#FF6437', '#FFC864'] },
          redOrange: { colors: ['#A72525', '#E6542D'] },
          pinkOrange: { colors: ['#F13DA2', '#FF8A48'] },
          purpleBlue: { colors: ['#2D00AA', '#C769B5'] },
          tealGreen: { colors: ['#19E68C', '#1D7F6E'] },
          violetPeach: { colors: ['#B39AC8', '#FCCBD3'] },
          violetGreen: { colors: ['#4302F4', '#C3EFC8'] },
          purple: { colors: ['#a186bd', '#7c5c92'] },
          eveningSea: { colors: ['#00FFF2', '#035355'] },
          royalBlue: { colors: ['#000044', '#4B80D4'] },
          grey: { colors: ['#111111', '#777777'] },
          sunset: { colors: ['#cf8022', '#4e6ec7'] },
          sky: { colors: ['#69B9FF', '#ACCEEC'] },
          teal: { colors: ['#005E4D', '#9BF0E1'] },
        }),
        (t.pageTheme = {
          home: { gradient: t.gradients.teal },
          documentation: { gradient: t.gradients.eveningSea },
          tool: { gradient: t.gradients.purpleBlue },
        });
    },
    221: function(e, t, r) {
      'use strict';
      var a =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return (t.default = e), t;
          },
        n =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = a(r(0)),
        l = n(r(222)),
        o = r(15),
        u = r(212),
        s = n(r(287)),
        c = o.makeStyles(function(e) {
          return {
            header: {
              gridArea: 'pageHeader',
              padding: e.spacing(3),
              minHeight: 118,
              width: '100%',
              boxShadow: '0 0 8px 3px rgba(20, 20, 20, 0.3)',
              position: 'relative',
              zIndex: 100,
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-end',
              alignItems: 'center',
            },
            leftItemsBox: { flex: '1 1 auto' },
            rightItemsBox: {
              flex: '0 1 auto',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              marginRight: e.spacing(6),
            },
            title: {
              color: e.palette.bursts.fontColor,
              lineHeight: '1.0em',
              wordBreak: 'break-all',
              fontSize: 'calc(24px + 6 * ((100vw - 320px) / 680))',
              marginBottom: e.spacing(1),
            },
            subtitle: {
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.0em',
            },
            type: {
              textTransform: 'uppercase',
              fontSize: 9,
              opacity: 0.8,
              marginBottom: 10,
              color: e.palette.bursts.fontColor,
            },
          };
        }),
        d = function(e) {
          var t = e.type,
            r = (e.typeLink, e.classes);
          return t
            ? i.default.createElement(o.Typography, { className: r.type }, t)
            : null;
        },
        f = function(e) {
          var t = e.pageTitle,
            r = e.classes,
            a = e.tooltip,
            n = i.default.createElement(
              o.Typography,
              { className: r.title, variant: 'h4' },
              t,
            );
          return a
            ? i.default.createElement(
                o.Tooltip,
                { title: a, placement: 'top-start' },
                n,
              )
            : n;
        },
        p = function(e) {
          var t = e.classes,
            r = e.subtitle;
          return r
            ? 'string' !== typeof r
              ? i.default.createElement(i.default.Fragment, null, r)
              : i.default.createElement(
                  o.Typography,
                  { className: t.subtitle, variant: 'subtitle1' },
                  r,
                )
            : null;
        };
      (t.Header = function(e) {
        var t = e.children,
          r = e.pageTitleOverride,
          a = e.style,
          n = e.subtitle,
          o = e.title,
          m = e.tooltip,
          h = e.type,
          g = e.typeLink,
          v = c(),
          y = r || o,
          b = o || r,
          E = ''.concat(y, ' | %s | Backstage'),
          w = ''.concat(y, ' | Backstage');
        return i.default.createElement(
          i.Fragment,
          null,
          i.default.createElement(l.default, {
            titleTemplate: E,
            defaultTitle: w,
          }),
          i.default.createElement(u.Theme.Consumer, null, function(e) {
            return i.default.createElement(
              'header',
              { style: a, className: v.header },
              i.default.createElement(s.default, { theme: e }),
              i.default.createElement(
                'div',
                { className: v.leftItemsBox },
                i.default.createElement(d, {
                  classes: v,
                  type: h,
                  typeLink: g,
                }),
                i.default.createElement(f, {
                  classes: v,
                  pageTitle: b,
                  tooltip: m,
                }),
                i.default.createElement(p, { classes: v, subtitle: n }),
              ),
              i.default.createElement('div', { className: v.rightItemsBox }, t),
            );
          }),
        );
      }),
        (t.default = t.Header);
    },
    224: function(e, t, r) {
      'use strict';
      var a =
          (this && this.__rest) ||
          function(e, t) {
            var r = {};
            for (var a in e)
              Object.prototype.hasOwnProperty.call(e, a) &&
                t.indexOf(a) < 0 &&
                (r[a] = e[a]);
            if (
              null != e &&
              'function' === typeof Object.getOwnPropertySymbols
            ) {
              var n = 0;
              for (a = Object.getOwnPropertySymbols(e); n < a.length; n++)
                t.indexOf(a[n]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, a[n]) &&
                  (r[a[n]] = e[a[n]]);
            }
            return r;
          },
        n =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = n(r(0)),
        l = r(15).makeStyles(function(e) {
          return {
            root: Object.assign(
              {
                gridArea: 'pageContent',
                minWidth: 0,
                paddingTop: e.spacing(3),
                paddingBottom: e.spacing(3),
              },
              e.mixins.gutters({}),
            ),
          };
        });
      t.default = function(e) {
        var t = e.children,
          r = a(e, ['children']),
          n = l();
        return i.default.createElement(
          'article',
          Object.assign({}, r, { className: n.root }),
          t,
        );
      };
    },
    225: function(e, t, r) {
      'use strict';
      var a =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return (t.default = e), t;
          },
        n =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = a(r(0)),
        l = r(15),
        o = n(r(222)),
        u = l.makeStyles(function(e) {
          return {
            container: {
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-end',
              alignItems: 'center',
            },
            leftItemsBox: {
              flex: '1 1 auto',
              marginBottom: e.spacing(1),
              minWidth: 0,
              overflow: 'visible',
            },
            rightItemsBox: {
              flex: '0 1 auto',
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              marginLeft: e.spacing(1),
              marginBottom: e.spacing(1),
              minWidth: 0,
              overflow: 'visible',
            },
            description: {},
            title: { display: 'inline-flex' },
          };
        }),
        s = function(e) {
          var t = e.title,
            r = void 0 === t ? 'Unknown page' : t,
            a = e.className;
          return i.default.createElement(
            l.Typography,
            { variant: 'h4', className: a, 'data-testid': 'header-title' },
            r,
          );
        };
      t.default = function(e) {
        var t = e.description,
          r = e.title,
          a = e.titleComponent,
          n = void 0 === a ? void 0 : a,
          c = e.children,
          d = u(),
          f = n
            ? i.default.createElement(n, null)
            : i.default.createElement(s, { title: r, className: d.title });
        return i.default.createElement(
          i.Fragment,
          null,
          i.default.createElement(o.default, { title: r }),
          i.default.createElement(
            'div',
            { className: d.container },
            i.default.createElement(
              'div',
              { className: d.leftItemsBox },
              f,
              t &&
                i.default.createElement(
                  l.Typography,
                  { className: d.description, variant: 'body2' },
                  t,
                ),
            ),
            i.default.createElement('div', { className: d.rightItemsBox }, c),
          ),
        );
      };
    },
    226: function(e, t, r) {
      'use strict';
      var a = r(30),
        n = r(31),
        i = r(52),
        l = r(53),
        o =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return (t.default = e), t;
          },
        u =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var s = o(r(0)),
        c = u(r(5)),
        d = r(15),
        f = u(r(229)),
        p = u(r(290)),
        m = u(r(293)),
        h = d.withStyles({
          title: { fontWeight: '700' },
          subheader: { paddingTop: '2px' },
        })(d.CardHeader),
        g = d.withStyles({
          root: {
            display: 'inline-block',
            paddingRight: '16px',
            paddingTop: '16px',
            float: 'right',
          },
        })(d.CardActions),
        v = {
          card: {
            flex: { display: 'flex', flexDirection: 'column' },
            widget: { height: 430 },
            fullHeight: { height: '100%' },
            height100: {
              display: 'flex',
              flexDirection: 'column',
              height: 'calc(100% - 10px)',
              marginBottom: '10px',
            },
            contentheader: { height: 'calc(100% - 40px)' },
            contentheadertabs: { height: 'calc(100% - 97px)' },
            noShrink: { flexShrink: 0 },
            minheight300: { minHeight: 300, overflow: 'initial' },
          },
          cardContent: {
            widget: { overflowY: 'auto', height: 332, width: '100%' },
            fullHeight: { height: 'calc(100% - 50px)' },
            height100: { height: 'calc(100% - 50px)' },
            contentRow: { display: 'flex', flexDirection: 'row' },
          },
        },
        y = (function(e) {
          l(r, e);
          var t = i(r);
          function r() {
            return a(this, r), t.apply(this, arguments);
          }
          return (
            n(r, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.title,
                    r = e.subheader,
                    a = e.divider,
                    n = e.deepLink,
                    i = e.children,
                    l = e.actions,
                    o = e.actionsTopRight,
                    u = e.headerStyle,
                    c = e.headerProps,
                    y = e.classes,
                    b = e.slackChannel,
                    E = e.variant;
                  this.props.style &&
                    console.warn(
                      'InfoCard: using `style` property directly, consider migrating your style to variant in InfoCard',
                    ),
                    this.props.cardStyle &&
                      console.warn(
                        'InfoCard: using `cardStyle` property directly, consider migrating your style to variant in InfoCard',
                      );
                  var w = {},
                    O = {};
                  E &&
                    E.split(/[\s]+/g).forEach(function(e) {
                      (w = Object.assign(Object.assign({}, w), v.card[e])),
                        (O = Object.assign(
                          Object.assign({}, O),
                          v.cardContent[e],
                        ));
                    });
                  var _ = Object.assign(Object.assign({}, w), this.props.style),
                    k = Object.assign(
                      Object.assign({}, O),
                      this.props.cardStyle,
                    );
                  return s.default.createElement(
                    d.Card,
                    { style: _, classes: y, gacontext: m.default(t) },
                    s.default.createElement(
                      f.default,
                      { slackChannel: b },
                      t &&
                        s.default.createElement(
                          s.default.Fragment,
                          null,
                          s.default.createElement(
                            h,
                            Object.assign(
                              {
                                className: y.header,
                                title: t,
                                subheader: r,
                                style: Object.assign(
                                  { display: 'inline-block' },
                                  u,
                                ),
                              },
                              c,
                            ),
                          ),
                          s.default.createElement(d.Divider, null),
                        ),
                      o && s.default.createElement(g, null, o),
                      a && s.default.createElement(d.Divider, null),
                      s.default.createElement(
                        d.CardContent,
                        { className: this.props.cardClassName, style: k },
                        i,
                      ),
                      l &&
                        s.default.createElement(
                          d.CardActions,
                          { className: this.props.actionsClassName },
                          l,
                        ),
                      n &&
                        s.default.createElement(
                          p.default,
                          Object.assign({}, n),
                        ),
                    ),
                  );
                },
              },
            ]),
            r
          );
        })(s.Component);
      (y.propTypes = {
        title: c.default.oneOfType([c.default.element, c.default.string]),
        subheader: c.default.oneOfType([c.default.node, c.default.string]),
        divider: c.default.bool,
        deepLink: c.default.object,
        slackChannel: c.default.string,
        variant: c.default.string,
      }),
        (t.default = d.withStyles(function(e) {
          return { header: { padding: e.spacing(2, 2, 2, 2.5) } };
        })(y));
    },
    229: function(e, t, r) {
      'use strict';
      var a = r(30),
        n = r(31),
        i = r(52),
        l = r(53),
        o =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return (t.default = e), t;
          };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var u = o(r(0)),
        s = (function(e) {
          l(r, e);
          var t = i(r);
          function r(e) {
            var n;
            return (
              a(this, r),
              ((n = t.call(this, e)).state = {
                error: void 0,
                errorInfo: void 0,
              }),
              n
            );
          }
          return (
            n(r, [
              {
                key: 'componentDidCatch',
                value: function(e, t) {
                  console.error(
                    'ErrorBoundary, error: '.concat(e, ', info: ').concat(t),
                  ),
                    this.setState({ error: e, errorInfo: t }),
                    this.props.onError && this.props.onError(e, t);
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props.slackChannel,
                    t = this.state,
                    r = t.error,
                    a = t.errorInfo;
                  return a
                    ? u.default.createElement(c, {
                        error: r,
                        errorInfo: a,
                        slackChannel: e,
                      })
                    : this.props.children;
                },
              },
            ]),
            r
          );
        })(u.Component);
      t.default = s;
      var c = function(e) {
        var t = e.slackChannel;
        return u.default.createElement(
          'div',
          null,
          'Something went wrong here. Please contact ',
          t,
          ' for help.',
        );
      };
    },
    230: function(e, t, r) {
      'use strict';
      var a = r(231),
        n = r(211),
        i = r(66),
        l = r(34),
        o = r(30),
        u = r(31),
        s = r(82),
        c = r(299),
        d = r(52),
        f = r(53),
        p = r(301);
      Object.defineProperty(t, '__esModule', { value: !0 });
      var m = r(126);
      function h() {
        if (!('localStorage' in window))
          throw new Error(
            'Feature Flags are not supported on browsers without the Local Storage API',
          );
      }
      function g(e) {
        if (e.length < 3)
          throw new Error(
            "The '".concat(
              e,
              "' feature flag must have a minimum length of three characters.",
            ),
          );
        if (e.length > 150)
          throw new Error(
            "The '".concat(e, "' feature flag must not exceed 150 characters."),
          );
        if (!e.match(/^[a-z]+[a-z0-9-]+$/))
          throw new Error(
            "The '".concat(
              e,
              "' feature flag must start with a lowercase letter and only contain lowercase letters, numbers and hyphens. ",
            ) + 'Examples: feature-flag-one, alpha, release-2020',
          );
      }
      (t.validateBrowserCompat = h), (t.validateFlagName = g);
      var v = (function(e) {
        f(r, e);
        var t = d(r);
        function r() {
          return o(this, r), t.apply(this, arguments);
        }
        return (
          u(
            r,
            [
              {
                key: 'get',
                value: function(e) {
                  return (
                    c(s(r.prototype), 'get', this).call(this, e) ||
                    m.FeatureFlagState.Off
                  );
                },
              },
              {
                key: 'set',
                value: function(e, t) {
                  g(e);
                  var a = c(s(r.prototype), 'set', this).call(this, e, t);
                  return this.save(), a;
                },
              },
              {
                key: 'delete',
                value: function(e) {
                  var t = c(s(r.prototype), 'delete', this).call(this, e);
                  return this.save(), t;
                },
              },
              {
                key: 'clear',
                value: function() {
                  c(s(r.prototype), 'clear', this).call(this), this.save();
                },
              },
              {
                key: 'save',
                value: function() {
                  window.localStorage.setItem(
                    'featureFlags',
                    JSON.stringify(this.toObject()),
                  );
                },
              },
              {
                key: 'toObject',
                value: function() {
                  return Array.from(this.entries()).reduce(function(e, t) {
                    var r = l(t, 2),
                      a = r[0],
                      n = r[1];
                    return Object.assign(Object.assign({}, e), i({}, a, n));
                  }, {});
                },
              },
              {
                key: 'toJSON',
                value: function() {
                  return JSON.stringify(this.toObject());
                },
              },
              {
                key: 'toString',
                value: function() {
                  return this.toJSON();
                },
              },
            ],
            [
              {
                key: 'load',
                value: function() {
                  h();
                  try {
                    var e = window.localStorage.getItem('featureFlags'),
                      t = JSON.parse(e);
                    return new this(Object.entries(t));
                  } catch (r) {
                    return new this([]);
                  }
                },
              },
            ],
          ),
          r
        );
      })(p(Map));
      t.UserFlags = v;
      var y = (function(e) {
        f(r, e);
        var t = d(r);
        function r() {
          return o(this, r), t.apply(this, arguments);
        }
        return (
          u(
            r,
            [
              {
                key: 'push',
                value: function() {
                  for (
                    var e, t = arguments.length, a = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    a[n] = arguments[n];
                  return (
                    Array.from(a).forEach(function(e) {
                      return g(e.name);
                    }),
                    (e = c(s(r.prototype), 'push', this)).call.apply(
                      e,
                      [this].concat(a),
                    )
                  );
                },
              },
              {
                key: 'concat',
                value: function() {
                  for (
                    var e, t = arguments.length, a = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    a[n] = arguments[n];
                  var i = (e = c(s(r.prototype), 'concat', this)).call.apply(
                    e,
                    [this].concat(a),
                  );
                  return (
                    Array.from(i).forEach(function(e) {
                      return g(e.name);
                    }),
                    i
                  );
                },
              },
              {
                key: 'toObject',
                value: function() {
                  return n(this.values());
                },
              },
              {
                key: 'toJSON',
                value: function() {
                  return JSON.stringify(this.toObject());
                },
              },
              {
                key: 'toString',
                value: function() {
                  return this.toJSON();
                },
              },
            ],
            [
              {
                key: 'from',
                value: function(e) {
                  return (
                    Array.from(e).forEach(function(e) {
                      return g(e.name);
                    }),
                    a(r, n(e))
                  );
                },
              },
            ],
          ),
          r
        );
      })(p(Array));
      t.FeatureFlagsRegistry = y;
      var b = (function() {
        function e() {
          o(this, e), (this.registeredFeatureFlags = []);
        }
        return (
          u(e, [
            {
              key: 'getFlags',
              value: function() {
                return (
                  this.userFlags || (this.userFlags = v.load()), this.userFlags
                );
              },
            },
            {
              key: 'getRegisteredFlags',
              value: function() {
                return y.from(this.registeredFeatureFlags);
              },
            },
          ]),
          e
        );
      })();
      t.FeatureFlags = b;
    },
    232: function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = r(226);
      t.default = a.default;
    },
    233: function(e, t, r) {
      'use strict';
      var a =
        (this && this.__importDefault) ||
        function(e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = r(15),
        i = r(329),
        l = a(r(0)),
        o = r(129),
        u = n.makeStyles(function(e) {
          return {
            root: { position: 'relative', lineHeight: 0 },
            overlay: {
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -60%)',
              fontSize: 45,
              fontWeight: 'bold',
              color: e.palette.textSubtle,
            },
            circle: { width: '80%', transform: 'translate(10%, 0)' },
            colorUnknown: {},
          };
        }),
        s = { fractional: !0, inverse: !1, unit: '%', max: 100 };
      function c(e, t, r) {
        if (isNaN(e)) return '#ddd';
        var a = r || s.max,
          n = t ? a - e : e;
        return n < a / 3
          ? o.COLORS.STATUS.ERROR
          : n < a * (2 / 3)
          ? o.COLORS.STATUS.WARNING
          : o.COLORS.STATUS.OK;
      }
      t.getProgressColor = c;
      t.default = function(e) {
        var t = u(e),
          r = Object.assign(Object.assign({}, s), e),
          a = r.value,
          n = r.fractional,
          o = r.inverse,
          d = r.unit,
          f = r.max,
          p = n ? Math.round(a * f) : a,
          m = 100 !== f ? Math.round(a) : p;
        return l.default.createElement(
          'div',
          { className: t.root },
          l.default.createElement(i.Circle, {
            strokeLinecap: 'butt',
            percent: p,
            strokeWidth: 12,
            trailWidth: 12,
            strokeColor: c(m, o, f),
            className: t.circle,
          }),
          l.default.createElement(
            'div',
            { className: t.overlay },
            isNaN(a) ? 'N/A' : ''.concat(m).concat(d),
          ),
        );
      };
    },
    234: function(e, t, r) {
      'use strict';
      var a = r(34);
      function n(e) {
        return e && 'object' === typeof e && 'default' in e ? e.default : e;
      }
      var i = r(19),
        l = n(r(0)),
        o = r(15),
        u = n(r(84)),
        s = n(r(85)),
        c = n(r(67)),
        d = n(r(86)),
        f = n(r(87)),
        p = n(r(88)),
        m = { hour: '2-digit', minute: '2-digit' },
        h = Object.assign({ timeZone: 'UTC' }, m),
        g = Object.assign({ timeZone: 'America/New_York' }, m),
        v = Object.assign({ timeZone: 'Asia/Tokyo' }, m),
        y = Object.assign({ timeZone: 'Europe/Stockholm' }, m),
        b = { timeNY: '', timeUTC: '', timeTYO: '', timeSTO: '' };
      function E() {
        var e = new Date(),
          t = window.navigator.language;
        return {
          timeNY: e.toLocaleTimeString(t, g),
          timeUTC: e.toLocaleTimeString(t, h),
          timeTYO: e.toLocaleTimeString(t, v),
          timeSTO: e.toLocaleTimeString(t, y),
        };
      }
      var w = function() {
          var e = l.useState(b),
            t = a(e, 2),
            r = t[0],
            n = r.timeNY,
            o = r.timeUTC,
            u = r.timeTYO,
            s = r.timeSTO,
            c = t[1];
          return (
            l.useEffect(function() {
              c(E());
              var e = setInterval(function() {
                c(E());
              }, 1e3);
              return function() {
                clearInterval(e);
              };
            }, []),
            l.createElement(
              l.Fragment,
              null,
              l.createElement(i.HeaderLabel, { label: 'NYC', value: n }),
              l.createElement(i.HeaderLabel, { label: 'UTC', value: o }),
              l.createElement(i.HeaderLabel, { label: 'STO', value: s }),
              l.createElement(i.HeaderLabel, { label: 'TYO', value: u }),
            )
          );
        },
        O = function() {
          return l.createElement(
            l.Fragment,
            null,
            l.createElement(o.Typography, { variant: 'h3' }, 'Team Metrics'),
            l.createElement(
              i.HorizontalScrollGrid,
              { scrollStep: 400, scrollSpeed: 100 },
              l.createElement(
                o.Grid,
                { item: !0 },
                l.createElement(i.ProgressCard, {
                  title: 'Test Certified',
                  progress: 0.23,
                  deepLink: { link: '/some-url', title: 'About Test Certs' },
                }),
              ),
              l.createElement(
                o.Grid,
                { item: !0 },
                l.createElement(i.ProgressCard, {
                  title: 'k8s Migration',
                  progress: 0.78,
                  deepLink: { link: '/some-url', title: 'About k8s' },
                }),
              ),
            ),
          );
        },
        _ = [
          { id: 'backstage', kind: 'service' },
          { id: 'backstage-microsite', kind: 'website' },
        ],
        k = function() {
          var e = _.map(function(e) {
              var t = e.id,
                r = e.kind;
              return {
                id: t,
                entity: l.createElement(
                  o.Link,
                  { href: 'entity/'.concat(r, '/').concat(t) },
                  l.createElement(o.Typography, { color: 'primary' }, t),
                ),
                kind: l.createElement(o.Typography, null, r),
              };
            }),
            t = { givenName: 'Suzy' };
          return l.createElement(
            i.Page,
            { theme: i.pageTheme.home },
            l.createElement(
              i.Header,
              {
                title: t ? 'Hello, '.concat(t.givenName) : 'Hello',
                subtitle: 'Welcome to Backstage',
              },
              l.createElement(w, null),
            ),
            l.createElement(
              i.Content,
              null,
              l.createElement(
                o.Grid,
                { container: !0, direction: 'row', spacing: 3 },
                l.createElement(
                  o.Grid,
                  { item: !0, xs: 6 },
                  l.createElement(
                    o.Typography,
                    { variant: 'h3' },
                    'Things you own',
                  ),
                  l.createElement(
                    i.InfoCard,
                    null,
                    l.createElement(
                      d,
                      null,
                      l.createElement(
                        u,
                        { size: 'small', 'aria-label': 'a dense table' },
                        l.createElement(
                          f,
                          null,
                          l.createElement(
                            p,
                            null,
                            l.createElement(c, null, 'ID'),
                            l.createElement(c, null, 'Kind'),
                          ),
                        ),
                        l.createElement(
                          s,
                          null,
                          e.map(function(e) {
                            return l.createElement(
                              p,
                              { key: e.id },
                              l.createElement(c, null, e.entity),
                              l.createElement(c, null, e.kind),
                            );
                          }),
                        ),
                      ),
                    ),
                  ),
                ),
                l.createElement(
                  o.Grid,
                  { item: !0, xs: 6 },
                  l.createElement(O, null),
                ),
              ),
            ),
          );
        },
        S = i.createPlugin({
          id: 'home-page',
          register: function(e) {
            e.router.registerRoute('/home', k);
          },
        });
      e.exports = S;
    },
    235: function(e, t, r) {
      'use strict';
      var a = r(34);
      var n,
        i = r(19),
        l =
          (n = r(0)) && 'object' === typeof n && 'default' in n ? n.default : n,
        o = r(89),
        u = r(15),
        s = { hour: '2-digit', minute: '2-digit' },
        c = Object.assign({ timeZone: 'UTC' }, s),
        d = Object.assign({ timeZone: 'America/New_York' }, s),
        f = Object.assign({ timeZone: 'Asia/Tokyo' }, s),
        p = Object.assign({ timeZone: 'Europe/Stockholm' }, s),
        m = { timeNY: '', timeUTC: '', timeTYO: '', timeSTO: '' };
      function h() {
        var e = new Date(),
          t = window.navigator.language;
        return {
          timeNY: e.toLocaleTimeString(t, d),
          timeUTC: e.toLocaleTimeString(t, c),
          timeTYO: e.toLocaleTimeString(t, f),
          timeSTO: e.toLocaleTimeString(t, p),
        };
      }
      var g = function() {
          var e = l.useState(m),
            t = a(e, 2),
            r = t[0],
            n = r.timeNY,
            o = r.timeUTC,
            u = r.timeTYO,
            s = r.timeSTO,
            c = t[1];
          return (
            l.useEffect(function() {
              c(h());
              var e = setInterval(function() {
                c(h());
              }, 1e3);
              return function() {
                clearInterval(e);
              };
            }, []),
            l.createElement(
              l.Fragment,
              null,
              l.createElement(i.HeaderLabel, { label: 'NYC', value: n }),
              l.createElement(i.HeaderLabel, { label: 'UTC', value: o }),
              l.createElement(i.HeaderLabel, { label: 'STO', value: s }),
              l.createElement(i.HeaderLabel, { label: 'TYO', value: u }),
            )
          );
        },
        v = function() {
          var e = i.useApi(i.errorApiRef);
          return l.createElement(
            u.Button,
            {
              'data-testid': 'error-button',
              variant: 'contained',
              color: 'primary',
              onClick: function() {
                e.post(new Error('Oh no!'));
              },
            },
            'Trigger an error!',
          );
        },
        y = function() {
          var e = i.useApi(i.featureFlagsApiRef).getFlags(),
            t = e.get('enable-welcome-box');
          return l.createElement(
            u.Button,
            {
              variant: 'contained',
              color: 'secondary',
              onClick: function() {
                var r =
                  t === i.FeatureFlagState.On
                    ? i.FeatureFlagState.Off
                    : i.FeatureFlagState.On;
                e.set('enable-welcome-box', r), window.location.reload();
              },
              'data-testid': 'button-switch-feature-flag-state',
            },
            t === i.FeatureFlagState.On
              ? 'Disable "enable-welcome-box" feature flag'
              : 'Enable "enable-welcome-box" feature flag',
          );
        },
        b = function() {
          return l.createElement(
            i.Page,
            { theme: i.pageTheme.home },
            l.createElement(
              i.Header,
              {
                title: 'Welcome '.concat('to Backstage'),
                subtitle: 'Some quick intro and links.',
              },
              l.createElement(g, null),
            ),
            l.createElement(
              i.Content,
              null,
              l.createElement(
                i.ContentHeader,
                { title: 'Getting Started' },
                l.createElement(i.SupportButton, null),
              ),
              l.createElement(
                u.Grid,
                { container: !0 },
                l.createElement(
                  u.Grid,
                  { item: !0, xs: 12, md: 6 },
                  l.createElement(
                    i.InfoCard,
                    null,
                    l.createElement(
                      u.Typography,
                      { variant: 'body1', gutterBottom: !0 },
                      'You now have a running instance of Backstage!',
                      l.createElement(
                        'span',
                        { role: 'img', 'aria-label': 'confetti' },
                        '\ud83c\udf89',
                      ),
                      "Let's make sure you get the most out of this platform by walking you through the basics.",
                    ),
                    l.createElement(
                      u.Typography,
                      { variant: 'h6', gutterBottom: !0 },
                      'The Setup',
                    ),
                    l.createElement(
                      u.Typography,
                      { variant: 'body1', paragraph: !0 },
                      'Backstage is put together from three base concepts: the core, the app and the plugins.',
                    ),
                    l.createElement(
                      u.List,
                      null,
                      l.createElement(
                        u.ListItem,
                        null,
                        l.createElement(u.ListItemText, {
                          primary:
                            'The core is responsible for base functionality.',
                        }),
                      ),
                      l.createElement(
                        u.ListItem,
                        null,
                        l.createElement(u.ListItemText, {
                          primary:
                            'The app provides the base UI and connects the plugins.',
                        }),
                      ),
                      l.createElement(
                        u.ListItem,
                        null,
                        l.createElement(u.ListItemText, {
                          primary:
                            'The plugins make Backstage useful for the end users with\n                  specific views and functionality.',
                        }),
                      ),
                    ),
                    l.createElement(
                      u.Typography,
                      { variant: 'h6', gutterBottom: !0 },
                      'Try It Out',
                    ),
                    l.createElement(
                      u.Typography,
                      { variant: 'body1', paragraph: !0 },
                      'We suggest you either check out the documentation for',
                      ' ',
                      l.createElement(
                        u.Link,
                        {
                          href:
                            'https://github.com/spotify/backstage/blob/master/docs/getting-started/create-a-plugin.md',
                        },
                        'creating a plugin',
                      ),
                      ' ',
                      'or have a look in the code for the',
                      ' ',
                      l.createElement(
                        u.Link,
                        { component: o.Link, to: '/home' },
                        'Home Page',
                      ),
                      ' ',
                      'in the directory "plugins/home-page/src".',
                    ),
                  ),
                ),
                l.createElement(
                  u.Grid,
                  { item: !0 },
                  l.createElement(
                    i.InfoCard,
                    null,
                    l.createElement(
                      u.Typography,
                      { variant: 'h5' },
                      'Quick Links',
                    ),
                    l.createElement(
                      u.List,
                      null,
                      l.createElement(
                        u.ListItem,
                        null,
                        l.createElement(
                          u.Link,
                          { href: 'https://backstage.io' },
                          'backstage.io',
                        ),
                      ),
                      l.createElement(
                        u.ListItem,
                        null,
                        l.createElement(
                          u.Link,
                          {
                            href:
                              'https://github.com/spotify/backstage/blob/master/docs/getting-started/create-a-plugin.md',
                          },
                          'Create a plugin',
                        ),
                      ),
                    ),
                  ),
                ),
                l.createElement(
                  u.Grid,
                  { item: !0 },
                  l.createElement(
                    i.InfoCard,
                    { title: 'APIs' },
                    l.createElement(
                      u.Typography,
                      null,
                      'The button below is an example of how to consume APIs.',
                    ),
                    l.createElement('br', null),
                    l.createElement(v, null),
                    l.createElement('br', null),
                    l.createElement('br', null),
                    l.createElement(y, null),
                  ),
                ),
              ),
            ),
          );
        },
        E = i.createPlugin({
          id: 'welcome',
          register: function(e) {
            var t = e.router,
              r = e.featureFlags;
            t.registerRoute('/', b), r.register('enable-welcome-box');
          },
        });
      e.exports = E;
    },
    253: function(e, t, r) {
      e.exports = r(328);
    },
    258: function(e, t, r) {
      'use strict';
      var a =
        (this && this.__importDefault) ||
        function(e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = a(r(79)),
        i = a(r(259)),
        l = a(r(294)),
        o = a(r(298));
      (t.createApp = function() {
        return new i.default();
      }),
        (t.createApiRef = function(e) {
          return new n.default(e);
        }),
        (t.createWidgetView = function() {
          return new l.default();
        }),
        (t.createPlugin = function(e) {
          return new o.default(e);
        });
    },
    259: function(e, t, r) {
      'use strict';
      var a = r(206),
        n = r(30),
        i = r(31),
        l =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o = l(r(0)),
        u = r(89),
        s = r(208),
        c = r(126),
        d = r(264),
        f = r(210),
        p = l(r(277)),
        m = (function() {
          function e(t) {
            n(this, e), (this.systemIcons = t);
          }
          return (
            i(e, [
              {
                key: 'getSystemIcon',
                value: function(e) {
                  return this.systemIcons[e];
                },
              },
            ]),
            e
          );
        })(),
        h = (function() {
          function e() {
            n(this, e),
              (this.systemIcons = Object.assign({}, d.defaultSystemIcons)),
              (this.plugins = new Set());
          }
          return (
            i(e, [
              {
                key: 'registerApis',
                value: function(e) {
                  this.apis = e;
                },
              },
              {
                key: 'registerIcons',
                value: function(e) {
                  this.systemIcons = Object.assign(
                    Object.assign({}, this.systemIcons),
                    e,
                  );
                },
              },
              {
                key: 'registerPlugin',
                value: function() {
                  for (
                    var e = arguments.length, t = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    t[r] = arguments[r];
                  for (var a = 0, n = t; a < n.length; a++) {
                    var i = n[a];
                    if (this.plugins.has(i))
                      throw new Error(
                        "Plugin '".concat(i, "' is already registered"),
                      );
                    this.plugins.add(i);
                  }
                },
              },
              {
                key: 'build',
                value: function() {
                  var e,
                    t = new m(this.systemIcons),
                    r = new Array(),
                    n = new Array(),
                    i = a(this.plugins.values());
                  try {
                    for (i.s(); !(e = i.n()).done; ) {
                      var l,
                        d = e.value,
                        h = a(d.output());
                      try {
                        for (h.s(); !(l = h.n()).done; ) {
                          var g = l.value;
                          switch (g.type) {
                            case 'route':
                              var v = g.path,
                                y = g.component,
                                b = g.options,
                                E = (void 0 === b ? {} : b).exact,
                                w = void 0 === E || E;
                              r.push(
                                o.default.createElement(u.Route, {
                                  key: v,
                                  path: v,
                                  component: y,
                                  exact: w,
                                }),
                              );
                              break;
                            case 'redirect-route':
                              var O = g.path,
                                _ = g.target,
                                k = g.options,
                                S = (void 0 === k ? {} : k).exact,
                                C = void 0 === S || S;
                              r.push(
                                o.default.createElement(u.Redirect, {
                                  key: O,
                                  path: O,
                                  to: _,
                                  exact: C,
                                }),
                              );
                              break;
                            case 'feature-flag':
                              n.push({ pluginId: d.getId(), name: g.name });
                          }
                        }
                      } catch (L) {
                        h.e(L);
                      } finally {
                        h.f();
                      }
                    }
                  } catch (L) {
                    i.e(L);
                  } finally {
                    i.f();
                  }
                  var T = this.apis && this.apis.get(c.featureFlagsApiRef);
                  T && (T.registeredFeatureFlags = n),
                    r.push(
                      o.default.createElement(u.Route, {
                        key: 'login',
                        path: '/login',
                        component: p.default,
                        exact: !0,
                      }),
                    );
                  var x = o.default.createElement(
                    u.Switch,
                    null,
                    r,
                    o.default.createElement(u.Route, {
                      component: function() {
                        return o.default.createElement(
                          'span',
                          null,
                          '404 Not Found',
                        );
                      },
                    }),
                  );
                  return (
                    this.apis &&
                      (x = o.default.createElement(f.ApiProvider, {
                        apis: this.apis,
                        children: x,
                      })),
                    function() {
                      return o.default.createElement(s.AppContextProvider, {
                        app: t,
                        children: x,
                      });
                    }
                  );
                },
              },
            ]),
            e
          );
        })();
      t.default = h;
    },
    264: function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (function(e) {
          for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r]);
        })(r(265));
    },
    265: function(e, t, r) {
      'use strict';
      var a =
        (this && this.__importDefault) ||
        function(e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = a(r(266)),
        i = a(r(268)),
        l = a(r(0)),
        o = r(205);
      t.defaultSystemIcons = { user: i.default, group: n.default };
      var u = function(e) {
        return function(t) {
          var r = o.useApp().getSystemIcon(e);
          return l.default.createElement(r, Object.assign({}, t));
        };
      };
      (t.UserIcon = u('user')), (t.GroupIcon = u('group'));
    },
    269: function(e, t, r) {
      'use strict';
      var a =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return (t.default = e), t;
          },
        n =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = a(r(0)),
        l = n(r(5)),
        o = i.createContext(void 0),
        u = function(e) {
          var t = e.apis,
            r = e.children;
          return i.default.createElement(o.Provider, { value: t, children: r });
        };
      (u.propTypes = {
        apis: l.default.shape({ get: l.default.func.isRequired }).isRequired,
        children: l.default.node,
      }),
        (t.useApi = function(e) {
          var t = i.useContext(o);
          if (!t) throw new Error('No ApiProvider available in react context');
          var r = t.get(e);
          if (!r) throw new Error('No implementation available for '.concat(e));
          return r;
        }),
        (t.withApis = function(e) {
          return function(t) {
            var r = function(r) {
                var a = i.useContext(o);
                if (!a)
                  throw new Error('No ApiProvider available in react context');
                var n = {};
                for (var l in e)
                  if (e.hasOwnProperty(l)) {
                    var u = e[l],
                      s = a.get(u);
                    if (!s)
                      throw new Error(
                        'No implementation available for '.concat(u),
                      );
                    n[l] = s;
                  }
                return i.default.createElement(t, Object.assign({}, r, n));
              },
              a = t.displayName || t.name || 'Component';
            return (r.displayName = 'withApis('.concat(a, ')')), r;
          };
        }),
        (t.default = u);
    },
    270: function(e, t, r) {
      'use strict';
      var a = r(30),
        n = r(31);
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = (function() {
          function e() {
            a(this, e), (this.apis = []);
          }
          return (
            n(e, [
              {
                key: 'add',
                value: function(e, t) {
                  return this.apis.push([e, t]), t;
                },
              },
              {
                key: 'build',
                value: function() {
                  return new l(new Map(this.apis));
                },
              },
            ]),
            e
          );
        })(),
        l = (function() {
          function e(t) {
            a(this, e), (this.apis = t);
          }
          return (
            n(
              e,
              [
                {
                  key: 'get',
                  value: function(e) {
                    return this.apis.get(e);
                  },
                },
              ],
              [
                {
                  key: 'builder',
                  value: function() {
                    return new i();
                  },
                },
                {
                  key: 'from',
                  value: function(t) {
                    return new e(new Map(t));
                  },
                },
              ],
            ),
            e
          );
        })();
      t.default = l;
    },
    271: function(e, t, r) {
      'use strict';
      var a = r(211),
        n = r(30),
        i = r(31),
        l =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o = l(r(79)),
        u = (function() {
          function e() {
            n(this, e),
              (this.apis = new Map()),
              (this.factories = new Map()),
              (this.savedFactories = new Map());
          }
          return (
            i(e, [
              {
                key: 'get',
                value: function(e) {
                  return this.load(e);
                },
              },
              {
                key: 'register',
                value: function(e, t) {
                  return (
                    e instanceof o.default
                      ? this.factories.set(e, {
                          implements: e,
                          deps: {},
                          factory: t,
                        })
                      : this.factories.set(e.implements, e),
                    this
                  );
                },
              },
              {
                key: 'reset',
                value: function() {
                  (this.factories = this.savedFactories), this.apis.clear();
                },
              },
              {
                key: 'save',
                value: function() {
                  return (this.savedFactories = new Map(this.factories)), this;
                },
              },
              {
                key: 'load',
                value: function(e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : [],
                    r = this.apis.get(e);
                  if (r) return r;
                  var n = this.factories.get(e);
                  if (n) {
                    if (t.includes(n.implements))
                      throw new Error(
                        'Circular dependency of api factory for '.concat(
                          n.implements,
                        ),
                      );
                    var i = this.loadDeps(
                        e,
                        n.deps,
                        [].concat(a(t), [n.implements]),
                      ),
                      l = n.factory(i);
                    return this.apis.set(e, l), l;
                  }
                },
              },
              {
                key: 'loadDeps',
                value: function(e, t, r) {
                  var a = {};
                  for (var n in t)
                    if (t.hasOwnProperty(n)) {
                      var i = t[n],
                        l = this.load(i, r);
                      if (!l)
                        throw new Error(
                          'No API factory available for dependency '
                            .concat(i, ' of dependent ')
                            .concat(e),
                        );
                      a[n] = l;
                    }
                  return a;
                },
              },
            ]),
            e
          );
        })();
      t.default = u;
    },
    275: function(e, t, r) {
      'use strict';
      function a(e) {
        for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        a(r(276)),
        a(r(126));
    },
    276: function(e, t, r) {
      'use strict';
      var a =
        (this && this.__importDefault) ||
        function(e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = a(r(79));
      t.errorApiRef = new n.default({
        id: 'core.error',
        description: 'Used to report errors and forward them to the app',
      });
    },
    277: function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = r(278);
      t.default = a.default;
    },
    278: function(e, t, r) {
      'use strict';
      var a = r(34),
        n =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return (t.default = e), t;
          },
        i =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var l,
        o = n(r(0)),
        u = r(327),
        s = i(r(127)),
        c = i(r(282)),
        d = i(r(224)),
        f = i(r(225)),
        p = r(15),
        m = i(r(226));
      !(function(e) {
        e[(e.GitHub = 0)] = 'GitHub';
      })(l || (l = {}));
      t.default = function() {
        var e = o.useState(String),
          t = a(e, 2),
          r = t[0],
          n = t[1],
          i = o.useState(String),
          h = a(i, 2),
          g = h[0],
          v = h[1],
          y = o.useState(Object),
          b = a(y, 2),
          E = b[0],
          w = b[1],
          O = function() {
            localStorage.removeItem('githubLoginDetails'), w(void 0);
          },
          _ = function(e) {
            switch (e.target.name) {
              case 'github-username-tf':
                n(e.target.value);
                break;
              case 'github-auth-tf':
                v(e.target.value);
            }
          },
          k = function(e, t) {
            fetch('https://api.github.com/user', {
              headers: new Headers({
                Authorization: 'Basic '.concat(
                  btoa(''.concat(e, ':').concat(t)),
                ),
                'Content-Type': 'application/x-www-form-urlencoded',
              }),
            })
              .then(function(e) {
                if (200 === e.status) return e.json();
                throw Error(''.concat(e.status, ' ').concat(e.statusText));
              })
              .then(function(r) {
                !(function(e) {
                  localStorage.setItem('githubLoginDetails', JSON.stringify(e)),
                    w(e);
                })({ username: e, token: t, name: r.name || r.login });
              })
              .catch(function() {});
          };
        return o.default.createElement(
          s.default,
          null,
          o.default.createElement(
            c.default,
            { title: 'Login' },
            o.default.createElement(function() {
              var e = localStorage.getItem('githubLoginDetails');
              if (null !== e) {
                var t = e || E ? JSON.parse(e) : E;
                return o.default.createElement(
                  p.Typography,
                  { variant: 'h6', component: 'h2' },
                  'Welcome, '.concat(t.name, '!'),
                  o.default.createElement('br', null),
                  o.default.createElement(p.Link, { onClick: O }, 'Logout'),
                );
              }
              return o.default.createElement(
                p.Typography,
                { variant: 'h6', component: 'h2' },
                'Welcome, guest!',
              );
            }, null),
          ),
          o.default.createElement(
            d.default,
            null,
            o.default.createElement(f.default, {
              title: 'Choose a method to authenticate',
            }),
            o.default.createElement(
              p.Grid,
              { container: !0 },
              o.default.createElement(
                p.Grid,
                { item: !0 },
                o.default.createElement(
                  m.default,
                  null,
                  o.default.createElement(
                    p.Typography,
                    { variant: 'h6' },
                    o.default.createElement(u.GitHub, null),
                    ' GitHub',
                  ),
                  o.default.createElement(
                    p.List,
                    null,
                    o.default.createElement(
                      p.ListItem,
                      null,
                      o.default.createElement(p.TextField, {
                        name: 'github-username-tf',
                        label: 'Username',
                        onChange: _,
                      }),
                    ),
                    o.default.createElement(
                      p.ListItem,
                      null,
                      o.default.createElement(p.TextField, {
                        name: 'github-auth-tf',
                        label: 'Token',
                        onChange: _,
                      }),
                    ),
                    o.default.createElement(
                      p.ListItem,
                      null,
                      o.default.createElement(
                        p.Button,
                        {
                          'data-testid': 'github-auth-button',
                          variant: 'outlined',
                          color: 'primary',
                          onClick: function() {
                            return (function(e) {
                              switch (e) {
                                case l.GitHub:
                                  var t = r,
                                    a = g;
                                  (function(e, t) {
                                    return (
                                      void 0 !== e &&
                                      null !== e &&
                                      '' !== e &&
                                      void 0 !== t && null !== t && '' !== t
                                    );
                                  })(t, a) && k(t, a);
                              }
                            })(l.GitHub);
                          },
                        },
                        'Authenticate',
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        );
      };
    },
    282: function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = r(221);
      t.default = a.default;
    },
    287: function(e, t, r) {
      'use strict';
      var a = r(34),
        n =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = n(r(0)),
        l = r(15).makeStyles({
          wave: {
            position: 'absolute',
            height: '100%',
            width: '100%',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: -1,
          },
        });
      t.default = function(e) {
        var t = e.theme,
          r = l(),
          n = a(t.gradient.colors, 2),
          o = n[0],
          u = n[1];
        return i.default.createElement(
          'svg',
          {
            viewBox: '0 0 1440 94',
            preserveAspectRatio: 'xMinYMin slice',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            className: r.wave,
            'data-testid': 'wave-svg',
          },
          i.default.createElement('rect', {
            width: '1440',
            height: '94',
            fill: 'url(#paint0_linear)',
          }),
          i.default.createElement(
            'g',
            { opacity: '0.8' },
            i.default.createElement(
              'mask',
              {
                id: 'mask0',
                'mask-type': 'alpha',
                maskUnits: 'userSpaceOnUse',
                x: '0',
                y: '0',
                width: '1440',
                height: '94',
              },
              i.default.createElement('rect', {
                width: '1440',
                height: '94',
                fill: o,
              }),
            ),
            i.default.createElement(
              'g',
              { mask: 'url(#mask0)' },
              i.default.createElement('path', {
                d:
                  'M710.947 14.3685C605.39 154.457 195.464 165.759 92 154.301V210.649L2330 287V222.126C1516.52 222.126 1394.17 80.1091 1161.6 -40.9544C926.122 -163.528 768.278 -61.7182 710.947 14.3685Z',
                fill: 'url(#paint1_linear)',
              }),
              i.default.createElement('path', {
                d:
                  'M1163.25 124.34C1058.49 -16.113 651.678 -27.4441 549 -15.9565V-72.4504L2770 -149V-83.9579C1962.69 -83.9579 1841.28 58.4283 1610.47 179.806C1376.79 302.698 1220.14 200.624 1163.25 124.34Z',
                fill: 'url(#paint2_linear)',
              }),
              i.default.createElement('path', {
                d:
                  'M-104.701 -5.00477C-224.644 62.3106 -690.435 67.7413 -808 62.2356V89.3117L1735 126V94.827C810.651 94.827 671.63 26.5849 407.363 -31.5885C139.798 -90.4876 -39.557 -41.5659 -104.701 -5.00477Z',
                fill: 'url(#paint3_linear)',
              }),
              i.default.createElement('path', {
                d:
                  'M-247.511 -32.6315C-338.493 107.457 -691.821 118.759 -781 107.301V163.649L1148 240V175.126C446.833 175.126 341.378 33.1091 140.917 -87.9544C-62.0447 -210.528 -198.095 -108.718 -247.511 -32.6315Z',
                fill: 'url(#paint4_linear)',
              }),
            ),
          ),
          i.default.createElement(
            'defs',
            null,
            i.default.createElement(
              'linearGradient',
              {
                id: 'paint0_linear',
                x1: '7.21415e-07',
                y1: '61',
                x2: '1649',
                y2: '59.5001',
                gradientUnits: 'userSpaceOnUse',
              },
              i.default.createElement('stop', { stopColor: o }),
            ),
            i.default.createElement(
              'linearGradient',
              {
                id: 'paint1_linear',
                x1: '1318.25',
                y1: '-285.884',
                x2: '1311.42',
                y2: '241.925',
                gradientUnits: 'userSpaceOnUse',
              },
              i.default.createElement('stop', {
                stopColor: u,
                stopOpacity: '0.72',
              }),
              i.default.createElement('stop', {
                offset: '1',
                stopColor: u,
                stopOpacity: '0',
              }),
            ),
            i.default.createElement(
              'linearGradient',
              {
                id: 'paint2_linear',
                x1: '1765.93',
                y1: '425.372',
                x2: '1759.02',
                y2: '-103.806',
                gradientUnits: 'userSpaceOnUse',
              },
              i.default.createElement('stop', {
                stopColor: u,
                stopOpacity: '0.72',
              }),
              i.default.createElement('stop', {
                offset: '1',
                stopColor: u,
                stopOpacity: '0',
              }),
            ),
            i.default.createElement(
              'linearGradient',
              {
                id: 'paint3_linear',
                x1: '585.365',
                y1: '-149.282',
                x2: '583.977',
                y2: '104.375',
                gradientUnits: 'userSpaceOnUse',
              },
              i.default.createElement('stop', {
                stopColor: u,
                stopOpacity: '0.72',
              }),
              i.default.createElement('stop', {
                offset: '1',
                stopColor: u,
                stopOpacity: '0',
              }),
            ),
            i.default.createElement(
              'linearGradient',
              {
                id: 'paint4_linear',
                x1: '275.941',
                y1: '-332.884',
                x2: '268.016',
                y2: '194.894',
                gradientUnits: 'userSpaceOnUse',
              },
              i.default.createElement('stop', {
                stopColor: u,
                stopOpacity: '0.72',
              }),
              i.default.createElement('stop', {
                offset: '1',
                stopColor: u,
                stopOpacity: '0',
              }),
            ),
          ),
        );
      };
    },
    290: function(e, t, r) {
      'use strict';
      var a = r(30),
        n = r(31),
        i = r(52),
        l = r(53),
        o =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return (t.default = e), t;
          },
        u =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var s = o(r(0)),
        c = u(r(5)),
        d = r(15),
        f = r(15),
        p = r(15),
        m = u(r(291)),
        h = u(r(292)),
        g = u(r(81)),
        v = (function(e) {
          l(r, e);
          var t = i(r);
          function r() {
            return a(this, r), t.apply(this, arguments);
          }
          return (
            n(r, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.link,
                    r = e.title,
                    a = e.onClick,
                    n = e.classes;
                  return s.default.createElement(
                    'div',
                    null,
                    s.default.createElement(f.Divider, null),
                    s.default.createElement(
                      d.Link,
                      { href: t, onClick: a, highlight: 'none' },
                      s.default.createElement(
                        p.ListItem,
                        { className: n.root },
                        s.default.createElement(
                          f.ListItemText,
                          null,
                          s.default.createElement(
                            g.default,
                            {
                              className: n.boxTitle,
                              fontWeight: 'fontWeightBold',
                              m: 1,
                            },
                            r,
                          ),
                        ),
                        s.default.createElement(
                          p.ListItemIcon,
                          null,
                          s.default.createElement(m.default, null),
                        ),
                      ),
                    ),
                  );
                },
              },
            ]),
            r
          );
        })(s.Component);
      (v.propTypes = {
        link: c.default.string,
        title: c.default.string,
        onClick: c.default.func,
      }),
        (t.default = f.withStyles(function(e) {
          return {
            root: { maxWidth: 'fit-content', padding: e.spacing(2, 2, 2, 2.5) },
            boxTitle: { margin: 0, color: h.default[900] },
          };
        })(v));
    },
    294: function(e, t, r) {
      'use strict';
      var a = r(206),
        n = r(30),
        i = r(31),
        l = r(52),
        o = r(53),
        u =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var s = u(r(0)),
        c = r(295),
        d = u(r(296)),
        f = (function(e) {
          o(r, e);
          var t = l(r);
          function r() {
            var e;
            return (
              n(this, r),
              ((e = t.apply(this, arguments)).registrations = new Array()),
              e
            );
          }
          return (
            i(r, [
              {
                key: 'add',
                value: function(e) {
                  return (
                    this.registrations.push({ type: 'component', widget: e }),
                    this
                  );
                },
              },
              {
                key: 'register',
                value: function(e) {
                  return (
                    this.registrations.push({ type: 'plugin', plugin: e }), this
                  );
                },
              },
              {
                key: 'build',
                value: function() {
                  if (this.output) return this.output;
                  var e,
                    t = new Array(),
                    r = a(this.registrations);
                  try {
                    for (r.s(); !(e = r.n()).done; ) {
                      var n = e.value;
                      switch (n.type) {
                        case 'component':
                          t.push(n.widget);
                          break;
                        case 'plugin':
                          var i,
                            l = !1,
                            o = a(n.plugin.output());
                          try {
                            for (o.s(); !(i = o.n()).done; ) {
                              var u = i.value;
                              'widget' === u.type &&
                                (t.push(u.widget), (l = !0));
                            }
                          } catch (c) {
                            o.e(c);
                          } finally {
                            o.f();
                          }
                          if (!l)
                            throw new Error(
                              'Plugin '.concat(
                                n.plugin,
                                ' was registered as widget provider, but did not provide any widgets',
                              ),
                            );
                          break;
                        default:
                          throw new Error(
                            'Unknown WidgetViewBuilder registration',
                          );
                      }
                    }
                  } catch (c) {
                    r.e(c);
                  } finally {
                    r.f();
                  }
                  return (
                    (this.output = function() {
                      return s.default.createElement(d.default, { widgets: t });
                    }),
                    this.output
                  );
                },
              },
            ]),
            r
          );
        })(c.AppComponentBuilder);
      t.default = f;
    },
    295: function(e, t, r) {
      'use strict';
      var a = r(30),
        n = r(31);
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = (function() {
        function e() {
          a(this, e);
        }
        return (
          n(e, [
            {
              key: 'build',
              value: function(e) {
                throw new Error('Must override build() in AppComponentBuilder');
              },
            },
          ]),
          e
        );
      })();
      t.AppComponentBuilder = i;
    },
    296: function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = r(297);
      t.default = a.default;
    },
    297: function(e, t, r) {
      'use strict';
      var a =
        (this && this.__importDefault) ||
        function(e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = a(r(0)),
        i = r(15),
        l = i.makeStyles(function(e) {
          return {
            root: { padding: e.spacing(2) },
            widgetWrapper: { padding: e.spacing(2) },
          };
        });
      t.default = function(e) {
        var t = e.widgets,
          r = l();
        return n.default.createElement(
          'div',
          { className: r.root },
          n.default.createElement(
            i.Grid,
            { container: !0, direction: 'row', spacing: 2 },
            t.map(function(e, t) {
              var a = e.size,
                l = e.component;
              return n.default.createElement(
                i.Grid,
                { key: t, item: !0, xs: a },
                n.default.createElement(
                  i.Paper,
                  { className: r.widgetWrapper },
                  n.default.createElement(l, null),
                ),
              );
            }),
          ),
        );
      };
    },
    298: function(e, t, r) {
      'use strict';
      var a = r(30),
        n = r(31);
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = r(230);
      (t.registerSymbol = Symbol('plugin-register')),
        (t.outputSymbol = Symbol('plugin-output'));
      var l = (function() {
        function e(t) {
          a(this, e), (this.config = t);
        }
        return (
          n(e, [
            {
              key: 'getId',
              value: function() {
                return this.config.id;
              },
            },
            {
              key: 'output',
              value: function() {
                if (this.storedOutput) return this.storedOutput;
                if (!this.config.register) return [];
                var e = new Array();
                return (
                  this.config.register({
                    router: {
                      registerRoute: function(t, r, a) {
                        e.push({
                          type: 'route',
                          path: t,
                          component: r,
                          options: a,
                        });
                      },
                      registerRedirect: function(t, r, a) {
                        e.push({
                          type: 'redirect-route',
                          path: t,
                          target: r,
                          options: a,
                        });
                      },
                    },
                    widgets: {
                      add: function(t) {
                        e.push({ type: 'widget', widget: t });
                      },
                    },
                    featureFlags: {
                      register: function(t) {
                        i.validateBrowserCompat(),
                          i.validateFlagName(t),
                          e.push({ type: 'feature-flag', name: t });
                      },
                    },
                  }),
                  (this.storedOutput = e),
                  this.storedOutput
                );
              },
            },
            {
              key: 'toString',
              value: function() {
                return 'plugin{'.concat(this.config.id, '}');
              },
            },
          ]),
          e
        );
      })();
      t.default = l;
    },
    303: function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = r(304);
      t.default = a.default;
    },
    304: function(e, t, r) {
      'use strict';
      var a =
        (this && this.__importDefault) ||
        function(e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = a(r(0)),
        i = r(15),
        l = r(15),
        o = i.makeStyles(function(e) {
          return {
            root: {
              textAlign: 'left',
              margin: e.spacing(2),
              display: 'inline-block',
            },
            label: {
              color: '#FFFFFF',
              fontWeight: 'bold',
              lineHeight: '16px',
              letterSpacing: 0,
              fontSize: 14,
              height: '16px',
              marginBottom: 2,
            },
            value: {
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '16px',
              fontSize: 14,
              height: '16px',
            },
          };
        }),
        u = function(e) {
          var t = e.value,
            r = e.className;
          return n.default.createElement(i.Typography, { className: r }, t);
        };
      t.default = function(e) {
        var t = e.label,
          r = e.value,
          a = e.url,
          s = o(),
          c = n.default.createElement(u, {
            className: s.value,
            value: r || '<Unknown>',
          });
        return n.default.createElement(
          'span',
          { className: s.root },
          n.default.createElement(i.Typography, { className: s.label }, t),
          a ? n.default.createElement(l.Link, { href: a }, c) : c,
        );
      };
    },
    305: function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = r(229);
      t.default = a.default;
    },
    306: function(e, t, r) {
      'use strict';
      function a(e) {
        for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r]);
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        a(r(307)),
        a(r(308)),
        a(r(309)),
        a(r(83));
    },
    307: function(e, t, r) {
      'use strict';
      var a = r(66),
        n = r(34),
        i =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          },
        l =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return (t.default = e), t;
          };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o,
        u = r(15),
        s = i(r(2)),
        c = l(r(0)),
        d = r(83),
        f = u.makeStyles(function(e) {
          return {
            root: {
              zIndex: 1e3,
              position: 'relative',
              overflow: 'visible',
              width: e.spacing(7) + 1,
            },
            drawer: {
              display: 'flex',
              flexFlow: 'column nowrap',
              alignItems: 'flex-start',
              position: 'fixed',
              left: 0,
              top: 0,
              bottom: 0,
              padding: 0,
              background: '#171717',
              overflowX: 'hidden',
              width: d.sidebarConfig.drawerWidthClosed,
              transition: e.transitions.create('width', {
                easing: e.transitions.easing.sharp,
                duration: e.transitions.duration.shortest,
              }),
            },
            drawerOpen: {
              width: d.sidebarConfig.drawerWidthOpen,
              transition: e.transitions.create('width', {
                easing: e.transitions.easing.sharp,
                duration: e.transitions.duration.shorter,
              }),
            },
            drawerPeek: { width: d.sidebarConfig.drawerWidthClosed + 4 },
          };
        });
      !(function(e) {
        (e[(e.Closed = 0)] = 'Closed'),
          (e[(e.Peek = 1)] = 'Peek'),
          (e[(e.Open = 2)] = 'Open');
      })(o || (o = {})),
        (t.Sidebar = function(e) {
          var t,
            r = e.openDelayMs,
            i = void 0 === r ? d.sidebarConfig.defaultOpenDelayMs : r,
            l = e.closeDelayMs,
            u = void 0 === l ? d.sidebarConfig.defaultCloseDelayMs : l,
            p = e.children,
            m = f(),
            h = c.useState(o.Closed),
            g = n(h, 2),
            v = g[0],
            y = g[1],
            b = c.useRef(),
            E = function() {
              b.current && (clearTimeout(b.current), (b.current = void 0)),
                v !== o.Open &&
                  ((b.current = setTimeout(function() {
                    (b.current = void 0), y(o.Open);
                  }, i)),
                  y(o.Peek));
            },
            w = function() {
              b.current && (clearTimeout(b.current), (b.current = void 0)),
                v === o.Peek
                  ? y(o.Closed)
                  : v === o.Open &&
                    (b.current = setTimeout(function() {
                      (b.current = void 0), y(o.Closed);
                    }, u));
            };
          return c.default.createElement(
            'div',
            {
              className: m.root,
              onMouseEnter: E,
              onFocus: E,
              onMouseLeave: w,
              onBlur: w,
              'data-testid': 'sidebar-root',
            },
            c.default.createElement(
              d.SidebarContext.Provider,
              { value: v === o.Open },
              c.default.createElement(
                'div',
                {
                  className: s.default(
                    m.drawer,
                    ((t = {}),
                    a(t, m.drawerPeek, v === o.Peek),
                    a(t, m.drawerOpen, v === o.Open),
                    t),
                  ),
                },
                p,
              ),
            ),
          );
        });
    },
    308: function(e, t, r) {
      'use strict';
      var a =
        (this && this.__importDefault) ||
        function(e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = r(15),
        i = a(r(0)),
        l = r(83),
        o = n.makeStyles({
          root: {
            width: '100%',
            minHeight: '100%',
            paddingLeft: l.sidebarConfig.drawerWidthClosed,
          },
        });
      t.SidebarPage = function(e) {
        var t = e.children,
          r = o();
        return i.default.createElement('div', { className: r.root }, t);
      };
    },
    309: function(e, t, r) {
      'use strict';
      var a =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          },
        n =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return (t.default = e), t;
          };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = r(15),
        l = a(r(2)),
        o = n(r(0)),
        u = r(83),
        s = i.makeStyles(function(e) {
          return {
            root: {
              color: '#b5b5b5',
              display: 'flex',
              flexFlow: 'row nowrap',
              alignItems: 'center',
              height: 40,
              cursor: 'pointer',
            },
            closed: {
              width: u.sidebarConfig.drawerWidthClosed,
              justifyContent: 'center',
            },
            open: { width: u.sidebarConfig.drawerWidthOpen },
            label: {
              fontWeight: 'bolder',
              whiteSpace: 'nowrap',
              lineHeight: 1,
              marginLeft: e.spacing(1),
            },
            iconContainer: {
              height: '100%',
              width: u.sidebarConfig.drawerWidthClosed,
              marginRight: -e.spacing(2),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
          };
        });
      (t.SidebarItem = function(e) {
        var t = e.icon,
          r = e.text,
          a = e.to,
          n = e.onClick,
          c = s();
        return o.useContext(u.SidebarContext)
          ? o.default.createElement(
              i.Link,
              {
                className: l.default(c.root, c.open),
                href: a,
                onClick: n,
                underline: 'none',
              },
              o.default.createElement(
                'div',
                { 'data-testid': 'login-button', className: c.iconContainer },
                o.default.createElement(t, { fontSize: 'small' }),
              ),
              o.default.createElement(
                i.Typography,
                { variant: 'subtitle1', className: c.label },
                r,
              ),
            )
          : o.default.createElement(
              i.Link,
              {
                className: l.default(c.root, c.closed),
                href: a,
                onClick: n,
                underline: 'none',
              },
              o.default.createElement(t, { fontSize: 'small' }),
            );
      }),
        (t.SidebarSpace = i.styled('div')({ flex: 1 })),
        (t.SidebarSpacer = i.styled('div')({ height: 8 })),
        (t.SidebarDivider = i.styled('hr')({
          height: 1,
          width: '100%',
          background: '#383838',
          border: 'none',
        }));
    },
    311: function(e, t, r) {
      'use strict';
      var a = r(66),
        n = r(34),
        i =
          (this && this.__rest) ||
          function(e, t) {
            var r = {};
            for (var a in e)
              Object.prototype.hasOwnProperty.call(e, a) &&
                t.indexOf(a) < 0 &&
                (r[a] = e[a]);
            if (
              null != e &&
              'function' === typeof Object.getOwnPropertySymbols
            ) {
              var n = 0;
              for (a = Object.getOwnPropertySymbols(e); n < a.length; n++)
                t.indexOf(a[n]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, a[n]) &&
                  (r[a[n]] = e[a[n]]);
            }
            return r;
          },
        l =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o = l(r(0)),
        u = l(r(312)),
        s = l(r(313)),
        c = l(r(314)),
        d = r(15),
        f =
          '\n  hsl(0, 0%, 98%) 0%,\n  hsla(0, 0%, 98%, 0.987) 8.1%,\n  hsla(0, 0%, 98%, 0.951) 15.5%,\n  hsla(0, 0%, 98%, 0.896) 22.5%,\n  hsla(0, 0%, 98%, 0.825) 29%,\n  hsla(0, 0%, 98%, 0.741) 35.3%,\n  hsla(0, 0%, 98%, 0.648) 41.2%,\n  hsla(0, 0%, 98%, 0.55) 47.1%,\n  hsla(0, 0%, 98%, 0.45) 52.9%,\n  hsla(0, 0%, 98%, 0.352) 58.8%,\n  hsla(0, 0%, 98%, 0.259) 64.7%,\n  hsla(0, 0%, 98%, 0.175) 71%,\n  hsla(0, 0%, 98%, 0.104) 77.5%,\n  hsla(0, 0%, 98%, 0.049) 84.5%,\n  hsla(0, 0%, 98%, 0.013) 91.9%,\n  hsla(0, 0%, 98%, 0) 100%\n',
        p = d.makeStyles(function(e) {
          return {
            root: {
              position: 'relative',
              display: 'flex',
              flexFlow: 'row nowrap',
              alignItems: 'center',
            },
            container: {
              overflow: 'auto',
              scrollbarWidth: 0,
              '&::-webkit-scrollbar': { display: 'none' },
            },
            fade: {
              position: 'absolute',
              width: 100,
              height: 'calc(100% + '.concat(10, 'px)'),
              transition: 'opacity 300ms',
              pointerEvents: 'none',
            },
            fadeLeft: {
              left: -10,
              background: 'linear-gradient(90deg, '.concat(f, ')'),
            },
            fadeRight: {
              right: -10,
              background: 'linear-gradient(270deg, '.concat(f, ')'),
            },
            fadeHidden: { opacity: 0 },
            button: { position: 'absolute' },
            buttonLeft: { left: -e.spacing(2) },
            buttonRight: { right: -e.spacing(2) },
          };
        });
      t.default = function(e) {
        var t = e.scrollStep,
          r = void 0 === t ? 100 : t,
          l = e.scrollSpeed,
          f = void 0 === l ? 50 : l,
          m = e.minScrollDistance,
          h = void 0 === m ? 5 : m,
          g = e.children,
          v = i(e, [
            'scrollStep',
            'scrollSpeed',
            'minScrollDistance',
            'children',
          ]),
          y = p(e),
          b = o.default.useRef(),
          E = (function(e) {
            var t = o.default.useState([0, 0]),
              r = n(t, 2),
              a = n(r[0], 2),
              i = a[0],
              l = a[1],
              u = r[1];
            return (
              o.default.useLayoutEffect(
                function() {
                  var t = e.current;
                  if (t) {
                    var r = function() {
                      var e = t.scrollLeft,
                        r = t.scrollWidth - t.offsetWidth - t.scrollLeft;
                      u([e, r]);
                    };
                    return (
                      r(),
                      t.addEventListener('scroll', r),
                      window.addEventListener('resize', r),
                      function() {
                        t.removeEventListener('scroll', r),
                          window.removeEventListener('resize', r);
                      }
                    );
                  }
                  u([0, 0]);
                },
                [e],
              ),
              [i, l]
            );
          })(b),
          w = n(E, 2),
          O = w[0],
          _ = w[1],
          k = (function(e, t, r) {
            var a = o.default.useState(0),
              i = n(a, 2),
              l = i[0],
              u = i[1];
            return (
              o.default.useLayoutEffect(
                function() {
                  if (0 !== l) {
                    var a = performance.now(),
                      n = requestAnimationFrame(function(n) {
                        if (e.current) {
                          var i = n - a,
                            o = (Math.abs(l) * i) / t,
                            s = Math.max(r, o) * Math.sign(l);
                          e.current.scrollBy({ left: s });
                          var c = l - s;
                          Math.sign(l) !== Math.sign(c) ? u(0) : u(c);
                        }
                      });
                    return function() {
                      return cancelAnimationFrame(n);
                    };
                  }
                },
                [e, l, t, r],
              ),
              u
            );
          })(b, f, h),
          S = function(e) {
            b.current && k(e ? r : -r);
          };
        return o.default.createElement(
          'div',
          Object.assign({}, v, { className: y.root }),
          o.default.createElement(
            d.Grid,
            {
              container: !0,
              direction: 'row',
              wrap: 'nowrap',
              className: y.container,
              ref: b,
            },
            g,
          ),
          o.default.createElement('div', {
            className: u.default(
              y.fade,
              y.fadeLeft,
              a({}, y.fadeHidden, 0 === O),
            ),
          }),
          o.default.createElement('div', {
            className: u.default(
              y.fade,
              y.fadeRight,
              a({}, y.fadeHidden, 0 === _),
            ),
          }),
          O > 0 &&
            o.default.createElement(
              d.IconButton,
              {
                title: 'Scroll Left',
                onClick: function() {
                  return S(!1);
                },
                className: u.default(y.button, y.buttonLeft, {}),
              },
              o.default.createElement(s.default, null),
            ),
          _ > 0 &&
            o.default.createElement(
              d.IconButton,
              {
                title: 'Scroll Right',
                onClick: function() {
                  return S(!0);
                },
                className: u.default(y.button, y.buttonRight, {}),
              },
              o.default.createElement(c.default, null),
            ),
        );
      };
    },
    315: function(e, t, r) {
      'use strict';
      var a =
        (this && this.__importDefault) ||
        function(e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var n = a(r(0)),
        i = r(15),
        l = a(r(232)),
        o = a(r(233)),
        u = i.makeStyles({ root: { height: '100%', width: 250 } });
      t.default = function(e) {
        var t = u(e),
          r = e.title,
          a = e.subheader,
          i = e.progress,
          s = e.deepLink,
          c = e.variant,
          d = void 0;
        return (
          s &&
            (d = 'string' === typeof s ? { title: 'View more', link: s } : s),
          n.default.createElement(
            'div',
            { className: t.root },
            n.default.createElement(
              l.default,
              { title: r, subheader: a, deepLink: d, variant: c },
              n.default.createElement(o.default, { value: Number(i) }),
            ),
          )
        );
      };
    },
    316: function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = r(317);
      t.default = a.default;
    },
    317: function(e, t, r) {
      'use strict';
      var a = r(34),
        n =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return (t.default = e), t;
          };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = n(r(0)),
        l = r(15);
      t.default = function(e) {
        var t = i.useState(!1),
          r = a(t, 2),
          n = r[0],
          o = r[1];
        return (
          i.useEffect(function() {
            var e = setTimeout(function() {
              return o(!0);
            }, 250);
            return function() {
              return clearTimeout(e);
            };
          }, []),
          n
            ? i.default.createElement(
                l.LinearProgress,
                Object.assign({}, e, { 'data-testid': 'progress' }),
              )
            : i.default.createElement('div', {
                style: { display: 'none' },
                'data-testid': 'progress',
              })
        );
      };
    },
    318: function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = r(319);
      t.default = a.default;
    },
    319: function(e, t, r) {
      'use strict';
      var a = r(34),
        n =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return (t.default = e), t;
          },
        i =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var l = n(r(0)),
        o = r(15),
        u = i(r(320)),
        s = i(r(321)),
        c = o.makeStyles(function(e) {
          return {
            leftIcon: { marginRight: e.spacing(1) },
            popoverList: { minWidth: 260, maxWidth: 320 },
          };
        });
      t.default = function(e) {
        var t = e.slackChannel,
          r = void 0 === t ? '#backstage' : t,
          n = e.email,
          i = void 0 === n ? [] : n,
          d = e.children,
          f = l.useState(!1),
          p = a(f, 2),
          m = p[0],
          h = p[1],
          g = l.useState(null),
          v = a(g, 2),
          y = v[0],
          b = v[1],
          E = c(),
          w = Array.isArray(r) ? r : [r],
          O = Array.isArray(i) ? i : [i];
        return l.default.createElement(
          l.Fragment,
          null,
          l.default.createElement(
            o.Button,
            {
              'data-testid': 'support-button',
              color: 'primary',
              onClick: function(e) {
                b(e.currentTarget), h(!0);
              },
            },
            l.default.createElement(s.default, { className: E.leftIcon }),
            'Support',
          ),
          l.default.createElement(
            o.Popover,
            {
              open: m,
              anchorEl: y,
              anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
              transformOrigin: { vertical: 'top', horizontal: 'right' },
              onClose: function() {
                h(!1);
              },
            },
            l.default.createElement(
              o.List,
              { className: E.popoverList },
              l.default.Children.map(d, function(e, t) {
                return l.default.createElement(
                  o.ListItem,
                  { alignItems: 'flex-start', key: t },
                  e,
                );
              }),
              w &&
                l.default.createElement(
                  o.ListItem,
                  null,
                  l.default.createElement(
                    o.ListItemIcon,
                    null,
                    l.default.createElement(u.default, null),
                  ),
                  l.default.createElement(o.ListItemText, {
                    primary: 'Support',
                    secondary: l.default.createElement(
                      'div',
                      null,
                      w.map(function(e, t) {
                        return l.default.createElement(o.Link, { key: t }, e);
                      }),
                    ),
                  }),
                ),
              O.length > 0 &&
                l.default.createElement(
                  o.ListItem,
                  null,
                  l.default.createElement(
                    o.ListItemIcon,
                    null,
                    l.default.createElement(u.default, null),
                  ),
                  l.default.createElement(o.ListItemText, {
                    primary: 'Contact',
                    secondary: l.default.createElement(
                      'div',
                      null,
                      O.map(function(e, t) {
                        return l.default.createElement(
                          o.Typography,
                          { key: t },
                          l.default.createElement(o.Link, null, e),
                        );
                      }),
                    ),
                  }),
                ),
            ),
          ),
        );
      };
    },
    322: function(e, t, r) {
      'use strict';
      var a = r(30),
        n = r(31),
        i = r(228),
        l = r(52),
        o = r(53),
        u =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var s = u(r(0)),
        c = r(330),
        d = u(r(5)),
        f = r(15),
        p = function(e) {
          var t = e.columns,
            r = e.onRequestSort,
            a = e.order,
            n = e.orderBy;
          return s.default.createElement(
            f.TableHead,
            null,
            s.default.createElement(
              f.TableRow,
              null,
              t.map(function(e) {
                return s.default.createElement(
                  f.TableCell,
                  {
                    key: e.id,
                    align: e.numeric ? 'right' : 'left',
                    size: e.disablePadding ? 'small' : 'medium',
                    sortDirection: n === e.id && a,
                    style: e.style,
                  },
                  s.default.createElement(
                    f.Tooltip,
                    {
                      title: 'Sort',
                      placement: e.numeric ? 'bottom-end' : 'bottom-start',
                      enterDelay: 300,
                    },
                    s.default.createElement(
                      f.TableSortLabel,
                      {
                        active: n === e.id,
                        direction: a,
                        onClick:
                          ((t = e.id),
                          function(e) {
                            r(e, t);
                          }),
                        style: { whiteSpace: 'nowrap' },
                      },
                      e.label,
                    ),
                  ),
                );
                var t;
              }),
            ),
          );
        };
      p.propTypes = {
        columns: d.default.arrayOf(
          d.default.shape({
            id: d.default.string.isRequired,
            label: d.default.string.isRequired,
            numeric: d.default.bool,
            disablePadding: d.default.bool,
            style: d.default.object,
          }),
        ).isRequired,
        onRequestSort: d.default.func.isRequired,
        order: d.default.string.isRequired,
        orderBy: d.default.string.isRequired,
      };
      var m = function(e) {
        var t = e.data;
        return Array.isArray(t)
          ? t.map(function(e, t) {
              return s.default.createElement(
                'span',
                { key: t },
                e,
                s.default.createElement('br', null),
              );
            })
          : t;
      };
      m.propTypes = { data: d.default.any.isRequired };
      var h = function(e) {
          var t = e.column,
            r = e.row;
          return s.default.createElement(
            f.TableCell,
            {
              align: t.numeric ? 'right' : 'left',
              key: t.id,
              style: { verticalAlign: 'top' },
            },
            s.default.createElement(m, { data: r[t.id] || '' }),
          );
        },
        g = function() {},
        v = c.pure(function(e) {
          var t = e.row,
            r = e.columns,
            a = e.handleRowClick,
            n = e.style;
          return s.default.createElement(
            f.TableRow,
            {
              onClick: function(e) {
                return (a || g)(e, t.id);
              },
              key: t.id,
              style: n,
            },
            r.map(function(e) {
              return s.default.createElement(h, {
                key: e.id,
                column: e,
                row: t,
              });
            }),
          );
        }),
        y = (function(e) {
          o(r, e);
          var t = l(r);
          function r(e) {
            var n;
            return (
              a(this, r),
              ((n = t.call(this, e)).handleRequestSort = function(e, t) {
                e.preventDefault();
                var r = t,
                  a = 'desc';
                n.state.orderBy === t &&
                  'desc' === n.state.order &&
                  (a = 'asc'),
                  n.updateData(n.state.data, r, a);
              }),
              (n.handleRowClick = function(e, t) {
                n.props.onRowClicked && n.props.onRowClicked(t, e);
              }),
              (n.updateData = function(e, t, r) {
                var a = (
                    n.props.columns.filter(function(e) {
                      return e.id === t;
                    })[0] || {}
                  ).sortValue,
                  i = e.slice().sort(function(e, n) {
                    var i = a ? a(e) : e[t],
                      l = a ? a(n) : n[t],
                      o = 'desc' === r ? -1 : 1;
                    return i === l
                      ? 0
                      : '' === i || null === i
                      ? o
                      : '' === l || null === l || i < l
                      ? -o
                      : o;
                  });
                n.setState({ data: i, order: r, orderBy: t });
              }),
              (n.handleRowClick = n.handleRowClick.bind(i(n))),
              (n.state = { orderBy: e.orderBy, order: 'asc', data: e.data }),
              n
            );
          }
          return (
            n(r, [
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function(e) {
                  e.dataVersion !== this.props.dataVersion &&
                    this.updateData(
                      e.data,
                      this.state.orderBy,
                      this.state.order,
                    );
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    t = this.state,
                    r = t.data,
                    a = t.order,
                    n = t.orderBy,
                    i = this.props,
                    l = i.columns,
                    o = i.dataVersion,
                    u = i.footerData,
                    c = null;
                  return (
                    u &&
                      u.length > 0 &&
                      (c = s.default.createElement(
                        f.TableFooter,
                        null,
                        u.map(function(e) {
                          return s.default.createElement(v, {
                            key: e.id,
                            columns: l,
                            row: e,
                            style: { height: 'auto' },
                          });
                        }),
                      )),
                    s.default.createElement(
                      f.Table,
                      null,
                      s.default.createElement(p, {
                        columns: l,
                        onRequestSort: this.handleRequestSort,
                        order: a,
                        orderBy: n,
                      }),
                      s.default.createElement(
                        f.TableBody,
                        { key: o },
                        r.map(function(t) {
                          return s.default.createElement(v, {
                            key: t.id,
                            columns: l,
                            row: t,
                            handleRowClick: e.handleRowClick,
                          });
                        }),
                      ),
                      c,
                    )
                  );
                },
              },
            ]),
            r
          );
        })(s.default.Component);
      (y.propTypes = {
        data: d.default.arrayOf(d.default.object).isRequired,
        orderBy: d.default.string.isRequired,
        columns: d.default.arrayOf(d.default.object).isRequired,
        onRowClicked: d.default.func,
        dataVersion: d.default.string,
      }),
        (t.default = y);
    },
    324: function(e, t, r) {
      'use strict';
      var a = r(34),
        n =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return (t.default = e), t;
          };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = r(15),
        l = n(r(0)),
        o = r(12),
        u = r(325),
        s = r(326),
        c = i.makeStyles({
          '@keyframes pulsateSlightly': {
            '0%': { transform: 'scale(1.0)' },
            '100%': { transform: 'scale(1.1)' },
          },
          '@keyframes pulsateAndFade': {
            '0%': { transform: 'scale(1.0)', opacity: 0.9 },
            '100%': { transform: 'scale(1.5)', opacity: 0 },
          },
          featureWrapper: { position: 'relative' },
          backdrop: {
            zIndex: 2e3,
            position: 'fixed',
            overflow: 'hidden',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
          dot: {
            position: 'absolute',
            backgroundColor: 'transparent',
            borderRadius: '100%',
            border: '1px solid rgba(103, 146, 180, 0.98)',
            boxShadow: '0px 0px 0px 20000px rgba(0, 0, 0, 0.5)',
            zIndex: 2001,
            transformOrigin: 'center center',
            animation:
              '$pulsateSlightly 1744ms 1.2s cubic-bezier(0.4, 0, 0.2, 1) alternate infinite',
          },
          pulseCircle: {
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent',
            borderRadius: '100%',
            border: '2px solid white',
            zIndex: 2001,
            transformOrigin: 'center center',
            animation:
              '$pulsateAndFade 872ms 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
          },
          text: { position: 'absolute', color: 'white', zIndex: 2003 },
        });
      t.FeatureCalloutCircular = function(e) {
        var t = e.featureId,
          r = e.title,
          n = e.description,
          d = e.children,
          f = s.useShowCallout(t),
          p = f.show,
          m = f.hide,
          h = u.usePortal('core.callout'),
          g = l.useRef(null),
          v = l.useState(),
          y = a(v, 2),
          b = y[0],
          E = y[1],
          w = c(),
          O = l.useCallback(function() {
            if (g.current) {
              var e = g.current.getBoundingClientRect(),
                t = Math.max(e.width, e.height),
                r = e.x - (t - e.width) / 2 - 800,
                a = e.y - (t - e.height) / 2 - 800,
                n = t + 1600,
                i = e.x + e.width / 2 - 450,
                l = e.y - (t - e.height) / 2 + t + 20;
              E({
                dotLeft: r,
                dotTop: a,
                dotSize: n,
                borderWidth: 800,
                textTop: l,
                textLeft: i,
                textWidth: 450,
              });
            }
          }, []);
        return (
          l.useEffect(function() {
            return (
              window.addEventListener('resize', O),
              window.addEventListener('scroll', O),
              function() {
                window.removeEventListener('resize', O),
                  window.removeEventListener('scroll', O);
              }
            );
          }, []),
          l.useLayoutEffect(O, [g.current]),
          p
            ? l.default.createElement(
                l.default.Fragment,
                null,
                l.default.createElement(
                  'div',
                  { className: w.featureWrapper, ref: g },
                  d,
                ),
                o.createPortal(
                  l.default.createElement(
                    'div',
                    { className: w.backdrop },
                    l.default.createElement(
                      i.ClickAwayListener,
                      { onClickAway: m },
                      l.default.createElement(
                        l.default.Fragment,
                        null,
                        l.default.createElement(
                          'div',
                          {
                            className: w.dot,
                            style: {
                              left:
                                null === b || void 0 === b ? void 0 : b.dotLeft,
                              top:
                                null === b || void 0 === b ? void 0 : b.dotTop,
                              width:
                                null === b || void 0 === b ? void 0 : b.dotSize,
                              height:
                                null === b || void 0 === b ? void 0 : b.dotSize,
                              borderWidth:
                                null === b || void 0 === b
                                  ? void 0
                                  : b.borderWidth,
                            },
                            onClick: m,
                            onKeyDown: m,
                            role: 'button',
                            tabIndex: 0,
                          },
                          l.default.createElement('div', {
                            className: w.pulseCircle,
                          }),
                        ),
                        l.default.createElement(
                          'div',
                          {
                            className: w.text,
                            style: {
                              left:
                                null === b || void 0 === b
                                  ? void 0
                                  : b.textLeft,
                              top:
                                null === b || void 0 === b ? void 0 : b.textTop,
                              width:
                                null === b || void 0 === b
                                  ? void 0
                                  : b.textWidth,
                            },
                          },
                          l.default.createElement(
                            i.Typography,
                            { variant: 'h2', paragraph: !0 },
                            r,
                          ),
                          l.default.createElement(i.Typography, null, n),
                        ),
                      ),
                    ),
                  ),
                  h,
                ),
              )
            : l.default.createElement(l.default.Fragment, null, d)
        );
      };
    },
    325: function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = r(0);
      function n(e) {
        var t = a.useRef(null);
        return (
          a.useEffect(function() {
            var r,
              a = document.querySelector('#'.concat(e)),
              n =
                a ||
                (function(e) {
                  var t = document.createElement('div');
                  return t.setAttribute('id', e), t;
                })(e);
            return (
              a ||
                ((r = n),
                document.body.insertBefore(
                  r,
                  document.body.lastElementChild.nextElementSibling,
                )),
              n.appendChild(t.current),
              function() {
                t.current.remove(), -1 === n.childNodes.length && n.remove();
              }
            );
          }, []),
          t.current || (t.current = document.createElement('div')),
          t.current
        );
      }
      (t.usePortal = n), (t.default = n);
    },
    326: function(e, t, r) {
      'use strict';
      var a = r(66),
        n = r(34);
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = r(0);
      function l(e) {
        var t = (function() {
            var e = i.useState(function() {
                var e = localStorage.getItem('core.calloutSeen');
                return e ? JSON.parse(e) : {};
              }),
              t = n(e, 2),
              r = t[0],
              l = t[1];
            return {
              states: r,
              setState: i.useCallback(function(e, t) {
                var r = localStorage.getItem('core.calloutSeen'),
                  n = r ? JSON.parse(r) : {},
                  i = Object.assign(Object.assign({}, n), a({}, e, t));
                l(i),
                  localStorage.setItem('core.calloutSeen', JSON.stringify(i));
              }, []),
            };
          })(),
          r = t.states,
          l = t.setState,
          o = i.useCallback(
            function() {
              l(e, !0);
            },
            [e],
          );
        return { seen: !0 === r[e], markSeen: o };
      }
      t.useShowCallout = function(e) {
        var t = l(e);
        return { show: !1 === t.seen, hide: t.markSeen };
      };
    },
    328: function(e, t, r) {
      'use strict';
      r.r(t);
      var a = {};
      r.r(a),
        r.d(a, 'HomePagePlugin', function() {
          return F.a;
        }),
        r.d(a, 'WelcomePlugin', function() {
          return I.a;
        });
      var n = r(0),
        i = r.n(n),
        l = r(12),
        o = r.n(l),
        u = r(245),
        s = r(214),
        c = r(355),
        d = r(352),
        f = r(19),
        p = r(89),
        m = r(356),
        h = r(334),
        g = r(240),
        v = r.n(g),
        y = r(241),
        b = r.n(y),
        E = Object(s.a)({
          root: {
            height: f.sidebarConfig.drawerWidthClosed,
            display: 'flex',
            flexFlow: 'row nowrap',
            alignItems: 'center',
          },
          logoContainer: {
            width: f.sidebarConfig.drawerWidthClosed,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginLeft: 22,
            whiteSpace: 'nowrap',
            color: '#fff',
          },
          titleDot: { color: '#68c5b5' },
        }),
        w = function() {
          var e = E(),
            t = Object(n.useContext)(f.SidebarContext);
          return i.a.createElement(
            'div',
            { className: e.root },
            i.a.createElement(
              m.a,
              { href: '/', underline: 'none' },
              i.a.createElement(
                h.a,
                { variant: 'h6', color: 'inherit', className: e.title },
                t ? 'Backstage' : 'B',
                i.a.createElement('span', { className: e.titleDot }, '.'),
              ),
            ),
          );
        },
        O = function(e) {
          var t = e.children;
          return i.a.createElement(
            f.SidebarPage,
            null,
            i.a.createElement(
              f.Sidebar,
              null,
              i.a.createElement(w, null),
              i.a.createElement(f.SidebarSpacer, null),
              i.a.createElement(f.SidebarDivider, null),
              i.a.createElement(f.SidebarItem, {
                icon: v.a,
                to: '/',
                text: 'Home',
              }),
              i.a.createElement(f.SidebarItem, {
                icon: b.a,
                to: '/login',
                text: 'Login',
              }),
              i.a.createElement(f.SidebarDivider, null),
              i.a.createElement(f.SidebarSpace, null),
            ),
            t,
          );
        },
        _ = r(136),
        k = r(242),
        S = r(243),
        C = r(357),
        T = r(354),
        x = r(244),
        L = r.n(x),
        M = r(358),
        j = (function() {
          function e() {
            Object(k.a)(this, e), (this.subscribers = new Set());
          }
          return (
            Object(S.a)(e, [
              {
                key: 'post',
                value: function(e, t) {
                  (null === t || void 0 === t ? void 0 : t.hidden) ||
                    this.subscribers.forEach(function(t) {
                      return t(e);
                    });
                },
              },
              {
                key: 'subscribe',
                value: function(e) {
                  var t = this;
                  return (
                    this.subscribers.add(e),
                    function() {
                      t.subscribers.delete(e);
                    }
                  );
                },
              },
            ]),
            e
          );
        })(),
        P = function(e) {
          var t = e.forwarder,
            r = Object(n.useState)([]),
            a = Object(_.a)(r, 2),
            l = a[0],
            o = a[1];
          if (
            (Object(n.useEffect)(
              function() {
                return t.subscribe(function(e) {
                  return o(function(t) {
                    return t.concat(e);
                  });
                });
              },
              [t],
            ),
            0 === l.length)
          )
            return null;
          var u = Object(_.a)(l, 1)[0];
          return i.a.createElement(
            C.a,
            {
              open: !0,
              message: u.toString(),
              anchorOrigin: { vertical: 'top', horizontal: 'center' },
            },
            i.a.createElement(
              M.a,
              {
                action: i.a.createElement(
                  T.a,
                  {
                    color: 'inherit',
                    size: 'small',
                    onClick: function() {
                      o(function(e) {
                        return e.filter(function(e) {
                          return e !== u;
                        });
                      });
                    },
                    'data-testid': 'error-button-close',
                  },
                  i.a.createElement(L.a, null),
                ),
                severity: 'error',
              },
              u.toString(),
            ),
          );
        },
        R = r(234),
        F = r.n(R),
        A = r(235),
        I = r.n(A),
        N = f.ApiRegistry.builder(),
        B = new j();
      N.add(f.errorApiRef, B),
        N.add(f.featureFlagsApiRef, new f.FeatureFlags());
      var D = N.build(),
        H = Object(s.a)(function(e) {
          return {
            '@global': {
              html: { height: '100%', fontFamily: e.typography.fontFamily },
              body: {
                height: '100%',
                fontFamily: e.typography.fontFamily,
                'overscroll-behavior-y': 'none',
              },
              a: { color: 'inherit', textDecoration: 'none' },
            },
          };
        }),
        W = Object(f.createApp)();
      W.registerApis(D),
        W.registerPlugin.apply(W, Object(u.a)(Object.values(a)));
      var U = W.build(),
        z = function() {
          return (
            H(),
            i.a.createElement(
              c.a,
              null,
              i.a.createElement(
                d.a,
                { theme: f.BackstageTheme },
                i.a.createElement(P, { forwarder: B }),
                i.a.createElement(
                  p.BrowserRouter,
                  null,
                  i.a.createElement(O, null, i.a.createElement(U, null)),
                ),
              ),
            )
          );
        };
      o.a.render(i.a.createElement(z, null), document.getElementById('root'));
    },
    79: function(e, t, r) {
      'use strict';
      var a = r(30),
        n = r(31);
      Object.defineProperty(t, '__esModule', { value: !0 });
      var i = (function() {
        function e(t) {
          if (
            (a(this, e),
            (this.config = t),
            !t.id.match(/^[a-z][a-z0-9]*(\.[a-z][a-z0-9]*)*$/))
          )
            throw new Error(
              "API id must only contain lowercase alphanums separated by dots, got '".concat(
                t.id,
                "'",
              ),
            );
        }
        return (
          n(e, [
            {
              key: 'toString',
              value: function() {
                return 'apiRef{'.concat(this.config.id, '}');
              },
            },
            {
              key: 'id',
              get: function() {
                return this.config.id;
              },
            },
            {
              key: 'description',
              get: function() {
                return this.config.description;
              },
            },
            {
              key: 'T',
              get: function() {
                throw new Error('tried to read ApiRef.T of '.concat(this));
              },
            },
          ]),
          e
        );
      })();
      t.default = i;
    },
    83: function(e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = r(0);
      (t.sidebarConfig = {
        drawerWidthClosed: 64,
        drawerWidthOpen: 220,
        defaultOpenDelayMs: 400,
        defaultCloseDelayMs: 200,
      }),
        (t.SidebarContext = a.createContext(!1));
    },
  },
  [[253, 1, 2]],
]);
//# sourceMappingURL=main.03bfc6c4.chunk.js.map
