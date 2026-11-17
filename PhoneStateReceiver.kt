package expo.modules.letimaxnative

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.telephony.TelephonyManager

// Guarda o número da última chamada a tocar (precisa de READ_PHONE_STATE + READ_CALL_LOG concedidas).
class PhoneStateReceiver : BroadcastReceiver() {
  @Suppress("DEPRECATION")
  override fun onReceive(context: Context, intent: Intent) {
    if (intent.action != TelephonyManager.ACTION_PHONE_STATE_CHANGED) return
    val state = intent.getStringExtra(TelephonyManager.EXTRA_STATE)
    val number = intent.getStringExtra(TelephonyManager.EXTRA_INCOMING_NUMBER)
    if (state == TelephonyManager.EXTRA_STATE_RINGING && !number.isNullOrEmpty()) {
      context.getSharedPreferences("letimax_native", Context.MODE_PRIVATE)
        .edit()
        .putString("last_number", number)
        .putLong("last_time", System.currentTimeMillis())
        .apply()
    }
  }
}
