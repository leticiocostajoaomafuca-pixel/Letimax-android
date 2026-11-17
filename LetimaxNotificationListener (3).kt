package expo.modules.letimaxnative

import android.service.notification.NotificationListenerService
import android.service.notification.StatusBarNotification
import org.json.JSONArray
import org.json.JSONObject

// Guarda (só no telemóvel) as últimas 50 notificações de apps de mensagens. Todas as outras apps são ignoradas.
class LetimaxNotificationListener : NotificationListenerService() {
  private val permitidos = setOf(
    "com.whatsapp", "com.whatsapp.w4b", "org.telegram.messenger",
    "com.google.android.apps.messaging", "com.samsung.android.messaging", "com.android.mms",
    "com.google.android.gm"
  )

  override fun onNotificationPosted(sbn: StatusBarNotification) {
    if (!permitidos.contains(sbn.packageName)) return
    val extras = sbn.notification.extras
    val title = extras.getCharSequence("android.title")?.toString() ?: ""
    val text = extras.getCharSequence("android.text")?.toString() ?: ""
    if (title.isEmpty() && text.isEmpty()) return

    val prefs = getSharedPreferences("letimax_native", MODE_PRIVATE)
    val old = try { JSONArray(prefs.getString("notifs", "[]")) } catch (e: Exception) { JSONArray() }
    val item = JSONObject().put("pkg", sbn.packageName).put("title", title).put("text", text).put("time", sbn.postTime)
    val out = JSONArray()
    out.put(item)
    for (i in 0 until minOf(old.length(), 49)) out.put(old.get(i))
    prefs.edit().putString("notifs", out.toString()).apply()
  }
}
