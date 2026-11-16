namespace MinhaBiblioteca.Models;
public class Livro : MaterialBiblioteca, IEmprestimo
{
    public string? Autor { get; set; }
    public int Paginas { get; set; }

    public override int CalcularPrazo()
    {
        return 14;
    }
    public override string Descricao()
    {
        return $"Livro: {Nome} - Autor: {Autor}";
    }
    public string Emprestar()
    {
        return $"O livro '{Nome}' pode ser emprestado por {CalcularPrazo()} dias.";
    }
}