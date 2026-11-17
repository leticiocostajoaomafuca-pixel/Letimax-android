package expo.modules.letimaxnative

import android.app.admin.DevicePolicyManager
import android.content.ComponentName
import android.content.Context
import android.content.Intent
import android.media.AudioManager
import android.net.Uri
import android.os.Build
import android.os.SystemClock
import android.provider.Settings
import android.telecom.TelecomManager
import android.telephony.SmsManager
import android.view.KeyEvent
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class LetimaxNativeModule : Module() {
  private val ctx: Context
    get() = appContext.reactContext ?: throw IllegalStateException("Sem contexto Android")

  private fun prefs() = ctx.getSharedPreferences("letimax_native", Context.MODE_PRIVATE)

  override fun definition() = ModuleDefinition {
    Name("LetimaxNative")

    // ---------- Chamadas ----------
    Function("answerCall") {
      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
        val tm = ctx.getSystemService(Context.TELECOM_SERVICE) as TelecomManager
        try { tm.acceptRingingCall(); true } catch (e: SecurityException) { false }
      } else false
    }

    Function("rejectCall") {
      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
        val tm = ctx.getSystemService(Context.TELECOM_SERVICE) as TelecomManager
        try { tm.endCall() } catch (e: SecurityException) { false }
      } else false
    }

    // Número da última chamada a tocar nos últimos 5 minutos ("" se não houver)
    Function("lastIncomingNumber") {
      val p = prefs()
      val age = System.currentTimeMillis() - p.getLong("last_time", 0L)
      if (age in 0..300000) (p.getString("last_number", "") ?: "") else ""
    }

    // ---------- SMS ----------
    Function("sendSms") { number: String, text: String ->
      val sms: SmsManager = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
        ctx.getSystemService(SmsManager::class.java)
      } else {
        @Suppress("DEPRECATION") SmsManager.getDefault()
      }
      sms.sendMultipartTextMessage(number, null, sms.divideMessage(text), null, null)
      true
    }

    Function("readSms") { limit: Int ->
      val out = mutableListOf<Map<String, Any>>()
      val cursor = ctx.contentResolver.query(Uri.parse("content://sms/inbox"), arrayOf("address", "body", "date"), null, null, "date DESC")
      cursor?.use {
        var n = 0
        while (it.moveToNext() && n < limit) {
          out.add(mapOf("address" to (it.getString(0) ?: ""), "body" to (it.getString(1) ?: ""), "date" to it.getLong(2)))
          n++
        }
      }
      out
    }

    // ---------- Música (teclas multimédia) ----------
    Function("mediaKey") { name: String ->
      val code = when (name) {
        "play_pause" -> KeyEvent.KEYCODE_MEDIA_PLAY_PAUSE
        "next" -> KeyEvent.KEYCODE_MEDIA_NEXT
        "previous" -> KeyEvent.KEYCODE_MEDIA_PREVIOUS
        else -> -1
      }
      if (code < 0) false else {
        val am = ctx.getSystemService(Context.AUDIO_SERVICE) as AudioManager
        val t = SystemClock.uptimeMillis()
        am.dispatchMediaKeyEvent(KeyEvent(t, t, KeyEvent.ACTION_DOWN, code, 0))
        am.dispatchMediaKeyEvent(KeyEvent(t, t, KeyEvent.ACTION_UP, code, 0))
        true
      }
    }

    // ---------- Bloquear ecrã (administrador do dispositivo, só force-lock) ----------
    Function("lockScreen") {
      val dpm = ctx.getSystemService(Context.DEVICE_POLICY_SERVICE) as DevicePolicyManager
      val admin = ComponentName(ctx, LetimaxAdminReceiver::class.java)
      if (dpm.isAdminActive(admin)) { dpm.lockNow(); "ok" } else "inactive"
    }

    Function("requestDeviceAdmin") {
      val admin = ComponentName(ctx, LetimaxAdminReceiver::class.java)
      val i = Intent(DevicePolicyManager.ACTION_ADD_DEVICE_ADMIN)
        .putExtra(DevicePolicyManager.EXTRA_DEVICE_ADMIN, admin)
        .putExtra(DevicePolicyManager.EXTRA_ADD_EXPLANATION, "Permite à LétimaX bloquear o ecrã por comando de voz. Não dá acesso a dados nem a passwords.")
        .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
      ctx.startActivity(i)
      true
    }

    // ---------- Notificações de WhatsApp / SMS / email ----------
    Function("isNotificationAccessEnabled") {
      val enabled = Settings.Secure.getString(ctx.contentResolver, "enabled_notification_listeners")
      enabled != null && enabled.contains(ctx.packageName)
    }

    Function("openNotificationAccess") {
      ctx.startActivity(Intent(Settings.ACTION_NOTIFICATION_LISTENER_SETTINGS).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK))
      true
    }

    Function("getNotifications") { prefs().getString("notifs", "[]") ?: "[]" }

    Function("clearNotifications") { prefs().edit().remove("notifs").apply(); true }

    // ---------- Reinício do telemóvel ----------
    Function("setServiceWanted") { wanted: Boolean ->
      prefs().edit().putBoolean("service_wanted", wanted).apply()
      true
    }
  }
}
