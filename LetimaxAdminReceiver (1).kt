package expo.modules.letimaxnative

import android.app.admin.DeviceAdminReceiver

// Só serve para permitir "bloquear o ecrã" (política force-lock). Não apaga dados nem muda passwords.
class LetimaxAdminReceiver : DeviceAdminReceiver()
