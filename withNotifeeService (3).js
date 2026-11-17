const { withAndroidManifest, withProjectBuildGradle } = require('@expo/config-plugins');

// Android 14 exige o tipo do serviço em primeiro plano; o Notifee precisa dele no manifesto.
function manifest(config) {
  return withAndroidManifest(config, (cfg) => {
    const m = cfg.modResults.manifest;
    m.$['xmlns:tools'] = 'http://schemas.android.com/tools';
    const app = m.application[0];
    const name = 'app.notifee.core.ForegroundService';
    app.service = (app.service || []).filter((s) => s.$['android:name'] !== name);
    app.service.push({ $: { 'android:name': name, 'android:foregroundServiceType': 'dataSync', 'android:exported': 'false', 'tools:replace': 'android:foregroundServiceType' } });
    return cfg;
  });
}
// Repositório local do Notifee (inofensivo se a pasta não existir)
function gradle(config) {
  return withProjectBuildGradle(config, (cfg) => {
    const line = 'maven { url "$rootDir/../node_modules/@notifee/react-native/android/libs" }';
    if (!cfg.modResults.contents.includes(line)) {
      cfg.modResults.contents = cfg.modResults.contents.replace(/allprojects\s*{\s*repositories\s*{/, (s) => s + '\n        ' + line);
    }
    return cfg;
  });
}
module.exports = (config) => gradle(manifest(config));
