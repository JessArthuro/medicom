import React, { useEffect } from "react";
import { GoCalendar } from "react-icons/go";
import { GrSend } from "react-icons/gr";

// Importaciones necesarias para el funcionamiento de la libreria DatePicker.
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";

import style from "./FormDating.module.scss";
import { Controller, useForm } from "react-hook-form";

import Swal from "sweetalert2";

// Cambio a idioma español en la libreria DatePicker.
registerLocale("es", es);

function FormDating() {
  // Funcion para deshabilitar los sabados y domingos en la libreria DatePicker.
  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  // Propiedades y metodos necesarios para el uso de react-hook-form
  const {
    control,
    register,
    formState,
    formState: { errors, isValid, isSubmitted, submittedData },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      department: "",
      doctor: "",
      dateinput: "",
    },
  });

  // La funcion onSubmit va recibir los valores del formulario para evitar que se recargue la pagina al hacer el envio.
  const onSubmit = (data) => {
    // console.log(data);

    // Alerta para mostrar cuando la cita fue creada exitosamente.
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Cita creada exitosamente.",
      text: `Para el día ${data.dateinput.toLocaleDateString(
        "es-ES"
      )} en el Departamento de ${data.department} con el ${data.doctor}.`,
      showConfirmButton: false,
      timer: 6000,
    });
  };

  // El hook useEffect reiniciara los datos del formulario si el envio fue exitoso y no contiene errores.
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        name: "",
        department: "",
        doctor: "",
        dateinput: "",
      });
    }
  }, [formState, submittedData, reset]);

  return (
    <section className={style.form_dating} id="form-dating">
      <div className={style.form_content}>
        <div className={style.form_title}>
          <GoCalendar className={style.title_icon} />
          <p>Genera una Cita</p>
        </div>

        {/* La funcion handleSubmit recibe los datos del formulario si la validacion es exitosa. */}
        <form className={style.form_data} onSubmit={handleSubmit(onSubmit)}>
          {/* Se valida si existen errores en el formulario y si hay se despliega el siguiente contenedor recorriendo cada uno de los errores con el metodo map(). */}
          {!isValid && isSubmitted ? (
            <div className={style.msj_content}>
              <ul className={style.list_errors}>
                {Object.values(errors).map((item, index) => {
                  return <li key={index}>{item.message}</li>;
                })}
              </ul>
            </div>
          ) : (
            ""
          )}

          {/* Input Nombre Completo. */}
          <input
            className={`${style.input} ${style.input1}`}
            type="text"
            defaultValue=""
            placeholder="Nombre Completo"
            {...register("name", {
              required: {
                value: true,
                message: "El campo nombre completo es requerido.",
              },
            })}
          />

          {/* Lista de Departamentos en el formulario. */}
          <select
            className={`${style.input} ${style.input2}`}
            defaultValue=""
            // El metodo register permite registrar la entrada del input y poder aplicar reglas de validacion con el uso de react-hook-form.
            {...register("department", {
              required: {
                value: true,
                message:
                  "El campo seleccionar departamento es requerido."
              },
            })}
          >
            <option value="" disabled>
              Seleccione el Departamento
            </option>
            <option value="Ginecología">Ginecología</option>
            <option value="Neurología">Neurología</option>
            <option value="Cardiología">Cardiología</option>
            <option value="Neumología">Neumología</option>
            <option value="Oftalmología">Oftalmología</option>
            <option value="Pediatría">Pediatría</option>
          </select>

          {/* Lista de Doctores en el formulario. */}
          <select
            className={`${style.input} ${style.input3}`}
            defaultValue=""
            {...register("doctor", {
              required: {
                value: true,
                message:
                  "El campo seleccionar doctor es requerido."
              },
            })}
          >
            <option value="" disabled>
              Seleccione al Doctor
            </option>
            <option value="Dr. Victor Cabrera">Dr. Victor Cabrera</option>
            <option value="Dra. Ana Estrada">Dra. Ana Estrada</option>
            <option value="Dr. Ricardo Escobar">Dr. Ricardo Escobar</option>
            <option value="Dra. Carmen Tapia">Dra. Carmen Tapia</option>
            <option value="Dr. Mario Vázquez">Dr. Mario Vázquez</option>
            <option value="Dra. Isabel Beltran">Dra. Isabel Beltran</option>
            <option value="Dr. Sergio Delgado">Dr. Sergio Delgado</option>
            <option value="Dra. Diana Guzmán">Dra. Diana Guzmán</option>
          </select>

          {/* Componente contenedor para facilitar el trabajo con la libreria DatePicker. */}
          <Controller
            control={control}
            name="dateinput"
            // Declaracion de reglas para el input de fecha.
            rules={{
              required: {
                value: true,
                message: "El campo fecha es requerido.",
              },
            }}
            render={({ field }) => (
              <DatePicker
                dateFormat="dd/MM/yyyy"
                // Cambio de idioma de la libreria.
                locale="es"
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                // La propiedad minDate deshabilita los dias anteriores a la fecha actual.
                minDate={new Date()}
                // Se hace uso de la funcion isWeekday para deshabilitar los sabados y domingos.
                filterDate={isWeekday}
                placeholderText="Seleccione la fecha"
                className={`${style.input} ${style.input_date}`}
              />
            )}
          />

          <button className={style.btn_send} type="submit">
            <GrSend className={style.icon_send} />
          </button>
        </form>
      </div>
    </section>
  );
}

export default FormDating;
