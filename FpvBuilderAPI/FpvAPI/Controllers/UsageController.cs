using FpvAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace FpvAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsageController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private string connectionString;

        public UsageController(IConfiguration configuration)
        {
            _configuration = configuration;
            connectionString = _configuration.GetConnectionString("FPVAppCon");
        }

        [HttpGet]
        public JsonResult Get()
        {
            DataTable table = new DataTable();

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                using (SqlCommand command = new SqlCommand("PS_GetUsages"))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.Connection = connection;
                    connection.Open();
                    SqlDataReader reader = command.ExecuteReader();
                    table.Load(reader);
                    reader.Close();
                    connection.Close();
                }
            }
            return new JsonResult(table);            
        }

        [HttpPost]
        public JsonResult Post(Usage usage)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                using (SqlCommand command = new SqlCommand("PS_PostUsage"))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.Connection = connection;
                    command.Parameters.AddWithValue("@Nom", usage.Tu_Nom);
                    command.Parameters.AddWithValue("@Description", usage.Tu_Description);
                    connection.Open();
                    SqlDataReader reader = command.ExecuteReader();
                    reader.Close();
                    connection.Close();
                }
            }
            return new JsonResult("Added Successfully");
        }

        [HttpPut]
        public JsonResult Put(Usage usage)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                using (SqlCommand command = new SqlCommand("PS_UpdateUsage"))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.Connection = connection;
                    command.Parameters.AddWithValue("@Id", usage.Tu_Id);
                    command.Parameters.AddWithValue("@Nom", usage.Tu_Nom);
                    command.Parameters.AddWithValue("@Description", usage.Tu_Description);
                    connection.Open();
                    SqlDataReader reader = command.ExecuteReader();
                    reader.Close();
                    connection.Close();
                }
            }
            return new JsonResult("Update Successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                using (SqlCommand command = new SqlCommand("PS_DeleteUsage"))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.Connection = connection;
                    command.Parameters.AddWithValue("@Id", id);
                    connection.Open();
                    SqlDataReader reader = command.ExecuteReader();
                    reader.Close();
                    connection.Close();
                }
            }
            return new JsonResult("Deleted Successfully");
        }
    }
}
