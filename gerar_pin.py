"""Corra uma vez: python gerar_pin.py  -> copia o hash para DONO_PIN_HASH no Railway."""
import getpass
from passlib.context import CryptContext
pin = getpass.getpass("Escolha o seu PIN (6+ digitos): ")
print("\nDONO_PIN_HASH=" + CryptContext(schemes=["bcrypt"]).hash(pin))
