use Graficas
go
CREATE procedure EliminaUsuario
(
   @id_usuario int,
   @nombre varchar(60),
   @contrasena varchar(20),
   @correo varchar(100)
 )
as
Begin
    Begin Try
      Begin Transaction
          declare @id_elimina int
          set @id_elimina = (select ID_Usuario from Usuarios where @nombre=Nombre and @contrasena=Contraseña)
          if(@id_elimina is null)
          begin
              print 'El usuario que intenta eliminar no existe'
          end
          else
          begin
			delete from Usuarios where @nombre=Nombre and @contrasena=Contraseña
               print 'Usuario eliminado exitosamente'
          end
      Commit Transaction
    End Try
    Begin Catch

      RollBack Transaction
    End Catch
End
