package expo.modules.letimaxnative

import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.app.Notification
import android.os.Build

// O Android 15 proíbe iniciar o serviço de sincronização a partir do arranque. Por isso, depois de reiniciar,
// mostramos uma notificação: ao tocar, a APP abre, pede a biometria e só então reactiva o serviço.
class BootReceiver : BroadcastReceiver() {
  override fun onReceive(context: Context, intent: Intent) {
    if (intent.action != Intent.ACTION_BOOT_COMPLETED) return
    val prefs = context.getSharedPreferences("letimax_native", Context.MODE_PRIVATE)
    if (!prefs.getBoolean("service_wanted", false)) return

    val nm = context.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
    val channelId = "letimax_boot"
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
      nm.createNotificationChannel(NotificationChannel(channelId, "Reactivar LétimaX", NotificationManager.IMPORTANCE_HIGH))
    }
    val launch = context.packageManager.getLaunchIntentForPackage(context.packageName) ?: return
    val pi = PendingIntent.getActivity(context, 0, launch, PendingIntent.FLAG_IMMUTABLE or PendingIntent.FLAG_UPDATE_CURRENT)
    val builder = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) Notification.Builder(context, channelId) else Notification.Builder(context)
    val n = builder
      .setContentTitle("LétimaX parou após o reinício")
      .setContentText("Toque para reactivar, Senhor Letício.")
      .setSmallIcon(android.R.drawable.ic_dialog_info)
      .setContentIntent(pi)
      .setAutoCancel(true)
      .build()
    nm.notify(4001, n)
  }
}
