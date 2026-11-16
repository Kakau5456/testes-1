namespace MinhaBiblioteca.Models;
public abstract class MaterialBiblioteca
{
    public int Id { get; set; }
    public string? Nome { get; set; }
    public int AnoPublicacao { get; set; }

    public abstract int CalcularPrazo();
    public virtual string Descricao()
    {
        return $"Material: {Nome}";
    }
}