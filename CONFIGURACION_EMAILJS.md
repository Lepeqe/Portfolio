# Configuración de EmailJS para el Formulario de Contacto

## 📧 Objetivo
Configurar el formulario para que los emails lleguen directamente a **cespedesagustin@gmail.com**

## 🚀 Pasos para Configurar EmailJS

### 1. Crear Cuenta en EmailJS
1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en **"Sign Up"**
3. Regístrate con tu email **cespedesagustin@gmail.com**
4. Verifica tu email

### 2. Configurar Servicio de Email
1. En el dashboard, ve a **"Email Services"**
2. Haz clic en **"Add New Service"**
3. Selecciona **"Gmail"**
4. Conecta tu cuenta de Gmail (**cespedesagustin@gmail.com**)
5. Dale un nombre al servicio (ej: "Portfolio Contact")
6. Copia el **Service ID** que aparece

### 3. Crear Template de Email
1. Ve a **"Email Templates"**
2. Haz clic en **"Create New Template"**
3. Configura el template con este contenido:

```
Asunto: Nuevo mensaje desde tu Portfolio - {{from_name}}

Contenido:
Has recibido un nuevo mensaje desde tu portfolio web:

Nombre: {{from_name}}
Email: {{from_email}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde tu formulario de contacto.
```

4. En la configuración:
   - **To Email**: cespedesagustin@gmail.com
   - **From Name**: {{from_name}}
   - **From Email**: noreply@emailjs.com
   - **Reply To**: {{from_email}}

5. Copia el **Template ID**

### 4. Obtener Public Key
1. Ve a **"Account"** → **"General"**
2. Copia tu **Public Key**

### 5. Actualizar el Código
Reemplaza en `index.html` línea ~586:

```javascript
emailjs.init('TU_PUBLIC_KEY_AQUI');
```

Y en `src/main.ts` línea ~139:

```typescript
const response = await (window as any).emailjs.send(
  'TU_SERVICE_ID_AQUI', // Service ID de EmailJS
  'TU_TEMPLATE_ID_AQUI', // Template ID de EmailJS
  templateParams
);
```

## 🎯 IDs que necesitas reemplazar:

1. **YOUR_PUBLIC_KEY** → Tu Public Key de EmailJS
2. **YOUR_SERVICE_ID** → Tu Service ID de Gmail
3. **YOUR_TEMPLATE_ID** → Tu Template ID

## ✅ Funcionalidades Implementadas

- ✅ **Envío real de emails** a cespedesagustin@gmail.com
- ✅ **Estado de carga** ("Enviando...")
- ✅ **Notificaciones visuales** de éxito/error
- ✅ **Validación de campos** requeridos
- ✅ **Botón deshabilitado** durante envío
- ✅ **Limpieza automática** del formulario
- ✅ **Manejo de errores** completo

## 🆓 Plan Gratuito de EmailJS
- **200 emails/mes** gratis
- Perfecto para un portfolio personal
- No requiere tarjeta de crédito

## 🔧 Datos que se enviarán:
- **Nombre completo** del remitente
- **Email** del remitente
- **Mensaje** completo
- **Email de destino**: cespedesagustin@gmail.com

## 📱 Experiencia de Usuario:
1. Usuario completa el formulario
2. Hace clic en "Enviar mensaje"
3. Botón cambia a "Enviando..." y se deshabilita
4. Aparece notificación verde: "¡Mensaje enviado exitosamente!"
5. Formulario se limpia automáticamente
6. Email llega a cespedesagustin@gmail.com

¡Una vez que completes estos pasos, tu formulario estará completamente funcional! 🎉 