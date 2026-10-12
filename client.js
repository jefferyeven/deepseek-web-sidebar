window.__ModuleLoader__.load({
  id: '@local/qianwen-web-sidebar',
  factory(require) {
    const React = require('react');
    const h = React.createElement;
    const QIANWEN_URL = 'https://www.qianwen.com/';

    function QianwenMark() {
      return h('svg', {
        viewBox: '0 0 24 24',
        width: 16,
        height: 16,
        'aria-hidden': true,
        focusable: false,
        style: { display: 'block' },
      },
        h('path', {
          fill: 'currentColor',
          d: 'M12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19Zm0 1.8c1.1 0 2.2.9 3 2.3.3.5.5 1.1.7 1.7H10.3c.2-.6.4-1.2.7-1.7.8-1.4 1.9-2.3 3-2.3ZM4.4 10.1h3.2c-.1.6-.1 1.2-.1 1.9s0 1.3.1 1.9H4.4a7.8 7.8 0 0 1 0-3.8Zm1 5.6h2.5c.2.8.5 1.6.9 2.2a7.8 7.8 0 0 1-3.4-2.2Zm2.5-7.4H5.4a7.8 7.8 0 0 1 3.4-2.2c-.4.6-.7 1.4-.9 2.2Zm4.1 11.3c-1.1 0-2.2-.9-3-2.3-.3-.5-.5-1.1-.7-1.7h7.4c-.2.6-.4 1.2-.7 1.7-.8 1.4-1.9 2.3-3 2.3Zm4.1-5.7h-8.2c-.1-.6-.1-1.2-.1-1.9s0-1.3.1-1.9h8.2c.1.6.1 1.2.1 1.9s0 1.3-.1 1.9Zm-.1 4c.4-.6.7-1.4.9-2.2h2.5a7.8 7.8 0 0 1-3.4 2.2Zm1.2-4c.1-.6.1-1.2.1-1.9s0-1.3-.1-1.9h3.2a7.8 7.8 0 0 1 0 3.8h-3.2Zm-.3-5.6c-.2-.8-.5-1.6-.9-2.2a7.8 7.8 0 0 1 3.4 2.2H17Z',
        }),
      );
    }

    return {
      inject: ['slots', 'sidebarRight', 'locale'],
      apply(ctx) {
        const namespace = 'qianwenWebSidebar';
        const t = ctx.locale.bind(namespace);
        ctx.effect(() => ctx.locale.register(namespace, {
          zh: {
            label: '千问',
            open: '在侧边栏打开千问',
          },
          en: {
            label: 'Qianwen Web',
            open: 'Open Qianwen Web in the sidebar',
          },
        }), 'qianwen-web-sidebar.copy');

        ctx.slots.inject('conversation.composer.dock', () => {
          const openQianwen = () => {
            try {
              ctx.sidebarRight.openTab('browser', {
                params: { url: QIANWEN_URL },
                revealIfOpened: true,
              });
            } catch (error) {
              console.error('[qianwen-web-sidebar] Could not open Browser tab', error);
            }
          };

          function QianwenWebButton() {
            return h('button', {
              type: 'button',
              title: t('open'),
              'aria-label': t('open'),
              onClick: openQianwen,
              style: {
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                height: 28,
                padding: '0 8px',
                border: '1px solid color-mix(in srgb, var(--dsw-alias-state-business-primary) 28%, transparent)',
                borderRadius: 15,
                color: 'var(--dsw-alias-state-business-primary)',
                background: 'color-mix(in srgb, var(--dsw-alias-state-business-primary) 8%, transparent)',
                cursor: 'pointer',
                font: 'inherit',
                whiteSpace: 'nowrap',
              },
            }, h(QianwenMark), h('span', null, t('label')));
          }

          return ctx.slots.register({
            name: 'conversation.composer.dock',
            id: 'qianwen-web-sidebar.launcher',
            order: 15,
          }, QianwenWebButton);
        });
      },
    };
  },
});
