export const medicacion = [
  {
    id: '1',
    title: 'Echeverria',
    subtitle: 'Juan Ignacio Gonzales',
    time: 'Ingreso 08:00:00 ⏰',
    image: "https://cdn-icons-png.flaticon.com/512/8362/8362024.png",
    asistencias: [
      {
        fecha_ingreso: '2023-10-01',
        hora_ingreso: '08:00:00',
        ubicacion_ingreso: 'Ubicación A',
        latitud_ingreso: -34.61358775206725,  // Latitud de la ubicación de ingreso
        longitud_ingreso: -58.39071600372064, // Longitud de la ubicación de ingreso
        fecha_salida: '2023-10-05',
        ubicacion_salida: 'Ubicación B',
        latitud_salida:  -34.54170847327916,        // Latitud de la ubicación de salida
        longitud_salida: -58.472721461037715,    // Longitud de la ubicación de salida
        hora_salida: '18:00:00',
      },
      {
        fecha_ingreso: '2023-10-05',
        hora_ingreso: '08:00:00',
        ubicacion_ingreso: 'Ubicación B',
        latitud_ingreso: -34.61358775206725,  // Latitud de la ubicación de ingreso
        longitud_ingreso: -58.39071600372064,   // Longitud de la ubicación de ingreso
        fecha_salida: '2023-10-05',
        ubicacion_salida: 'Ubicación B',
        latitud_salida:  -34.54170847327916,        // Latitud de la ubicación de salida
        longitud_salida: -58.472721461037715,   // Longitud de la ubicación de salida
        hora_salida: '18:00:00',
      },
    ],
  },
    {
      id: '2',
      title: 'Usuario',
      subtitle: 'Javier Milton',
      image: "https://img.freepik.com/vector-premium/icono-circulo-usuario-anonimo-ilustracion-vector-estilo-plano-sombra_520826-1931.jpg",
    },
    {
      id: '3',
      title: 'Última Medicación',
      subtitle: 'Maria Lopez',
      time: ' 22:00:00 ⏰',
      image: "https://muysaludable.sanitas.es/wp-content/uploads/2018/07/10_medicacion.jpg",
      tomada: [
        {
          title: 'Tomada',
          subtitle: 'Elena Peralta',
          time: ' 18:00:00 ⏰',
          image: "https://muysaludable.sanitas.es/wp-content/uploads/2018/07/10_medicacion.jpg",
        },
        {
          title: 'Tomada',
          subtitle: 'Marcelo Alvear',
          time: ' 12:00:00 ⏰',
          image: "https://muysaludable.sanitas.es/wp-content/uploads/2018/07/10_medicacion.jpg",
        },
      ],
    },
    {
      id: '4',
      title: 'Proxima medicacion',
      time: '08:00:00 ⏰',
      image: "https://play-lh.googleusercontent.com/f9NuCxoRwJvMRmn7NkBzNlaE-QUZs9uQJGUZtmUYIXCRZ7rQ-1x1lKeD88hG2M5T9g",
      aTomar: [
        {
          nombreMedicacion: 'Loperidol',
          mg: '1',
        },
        {
          nombreMedicacion: 'Carbamazepina',
          mg: '1/2',
        },
        {
          nombreMedicacion: 'Lorazepam',
          mg: '1/4',
        },
        {
          nombreMedicacion: 'Respiridona',
          mg: '1/2',
        },
      ],
    },
  ];
