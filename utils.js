const sidebarPath = require.resolve('./sidebars.js');
const { navbarPluginsInfo } = require('./constant.js');

// 生成 plugins 的配置
const getPluginsContext = () => {
  return (navbarPluginsInfo || []).map(item => {
    const { id, name } = item;
    return [
      '@docusaurus/plugin-content-docs',
      {
        id: id,
        path: `docs/${id}`,
        routeBasePath: name,
        sidebarPath: sidebarPath
      }
    ]
  })
}

// 生成 navBarItems 的配置
const getNavBarPluginsItems = () => {
  return (navbarPluginsInfo || []).map(item => {
    const { id, name, type, docId, position } = item;
    return {
      docsPluginId: id,
      type: type || 'doc',
      docId: docId || 'index',
      position: position || 'right',
      label: name,
    }
  })
}

// 生成 footer links 的配置
const getFooterLinksItems = () => {
  return (navbarPluginsInfo || []).map(item => {
    const { name, docId } = item;
    return {
      label: name,
      to: `/${name}/${docId || ''}`,
    }
  })
}

module.exports = {
  getPluginsContext,
  getNavBarPluginsItems,
  getFooterLinksItems
}