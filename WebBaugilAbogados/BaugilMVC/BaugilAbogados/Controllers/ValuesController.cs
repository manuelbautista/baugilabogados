using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Net;
using System.Net.Mail;

namespace BaugilAbogados.Controllers
{
    public class Consulta
    {
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public string Email { get; set; }
        public string Telefono { get; set; }
        public string Servicio { get; set; }
        public string ResumencCaso { get; set; }
        public string Tipo { get; set; }
    }

    public class ValuesController : ApiController
    {
        // GET api/values
        public IEnumerable<string> Get()
        {
            return new string[] {"value1", "value2"};
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody] Consulta value)
        {
            var body =
                $"<b>Nombres:</b> {value.Nombres} <br /> " +
                $"<b>Apellidos: </b> {value.Apellidos} <br />  " +
                $"<b>Correo: </b> {value.Email} <br />  " +
                $"<b>Telefono:</b> {value.Telefono} <br /> " +
                $"<b>Servicio:</b> {value.Servicio} <br /> " +
                $"<b>Tipo</b>: {value.Tipo} <br /> " +
                $"<b>ResumenCaso:</b> {value.ResumencCaso} <br /> ";

            SendEmail("Solicitud " + value.Tipo, body);
        }

        // PUT api/values/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }

        private void SendEmail(string subject, string body)
        {
            try
            {
                var fromAddress = new MailAddress("baugilabogados@gmail.com", "Baugil Abogados");
                var toAddress = new MailAddress("baugilabogados@gmail.com", "Baugil Abogados");
                const string fromPassword = "Mary007dd";


                var smtp = new SmtpClient
                {
                    Host = "smtp.gmail.com",
                    Port = 587,
                    EnableSsl = true,
                    DeliveryMethod = SmtpDeliveryMethod.Network,
                    UseDefaultCredentials = false,
                    Credentials = new NetworkCredential(fromAddress.Address, fromPassword)
                };
                using (var message = new MailMessage(fromAddress, toAddress)
                {
                    IsBodyHtml = true,
                    Subject = subject,
                    Body = body
                })
                {
                    smtp.Send(message);
                }
            }
            catch (Exception ex)
            {
                
            }
        }
    }
}

