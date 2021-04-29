using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FpvAPI.Models
{
    public class Frame
    {
        public int Id { get; set; }
        public string Marque { get; set; }
        public string Modele { get; set; }
        public decimal Poids { get; set; }
        public string Description { get; set; }
        public decimal Prix { get; set; }
    }
}
