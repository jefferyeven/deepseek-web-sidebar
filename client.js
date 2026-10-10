window.__ModuleLoader__.load({
  id: '@local/deepseek-web-sidebar',
  factory(require) {
    const React = require('react');
    const h = React.createElement;
    const DEEPSEEK_URL = 'https://chat.deepseek.com';

    function WhaleMark() {
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
          d: 'M20.6 7.2c-.7-1.8-2.4-3-4.4-3.1.1.5.1 1 0 1.5-.8-1.2-2.1-2-3.6-2.2.2.6.2 1.2.1 1.8-1.2-1.1-3-1.6-4.7-1.1.4.4.7.9.9 1.4C5.5 5.7 3.1 8.1 3.1 11c0 3.7 3.1 6.2 7.2 6.2 2.2 0 4-.7 5.4-2 .7-.7 1.4-1.1 2.3-1.1.8 0 1.6.3 2.1.8.3-.7.3-1.5 0-2.2.8-.7 1.1-1.7 1.1-2.7 0-.9-.3-1.9-.6-2.8ZM8 12.2c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9Zm4.7 2c-1.5 0-2.8-.7-3.5-1.8.8.4 1.7.6 2.6.6 1.2 0 2.2-.3 3.1-.9-.4 1.2-1.2 2.1-2.2 2.1Z',
        }),
      );
    }

    return {
      inject: ['slots', 'sidebarRight'],
      apply(ctx) {
        ctx.slots.inject('conversation.composer.dock', () => {
          const openDeepSeek = () => {
            try {
              ctx.sidebarRight.openTab('browser', {
                params: { url: DEEPSEEK_URL },
                revealIfOpened: true,
              });
            } catch (error) {
              console.error('[deepseek-web-sidebar] Could not open Browser tab', error);
            }
          };

          function DeepSeekWebButton() {
            return h('button', {
              type: 'button',
              title: '在侧边栏打开 DeepSeek 网页版',
              'aria-label': '在侧边栏打开 DeepSeek 网页版',
              onClick: openDeepSeek,
              style: {
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                height: 30,
                padding: '0 10px',
                border: '1px solid color-mix(in srgb, var(--dsw-alias-state-business-primary) 28%, transparent)',
                borderRadius: 15,
                color: 'var(--dsw-alias-state-business-primary)',
                background: 'color-mix(in srgb, var(--dsw-alias-state-business-primary) 8%, transparent)',
                cursor: 'pointer',
                font: 'inherit',
                whiteSpace: 'nowrap',
              },
            }, h(WhaleMark), h('span', null, 'DeepSeek Web'));
          }

          return ctx.slots.register({
            name: 'conversation.composer.dock',
            id: 'deepseek-web-sidebar.launcher',
            order: 15,
          }, DeepSeekWebButton);
        });
      },
    };
  },
});
