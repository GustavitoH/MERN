const Usuario = require('../models/user.model');

function listUsers(req, res) {
  Usuario.find((err, usuarioLists) => {
    if (err) {
      res.status(500).send({
        message:
          'Error!, El servidor esta teniendo problemas, intente nuevamente',
      });
    } else {
      if (usuarioLists) {
        res.status(200).json({
          usuario: usuarioLists,
        });
      }
    }
  });
}

function searchUser(req, res) {
  const ced = req.body.cedula;

  Usuario.find({ cedula: ced }, (err, user) => {
    if (err) {
      res.status(500).send({
        message:
          'Error!, El servidor esta teniendo problemas, intente nuevamente',
      });
    } else {
      if (user) {
        res.status(200).jsonp({
          usuario: user,
        });
      }
    }
  });
}

function createUser(req, res) {
  const usuario = new Usuario();
  const params = req.body;

  if (params.cedula) {
    usuario.cedula = params.cedula;
    usuario.nombre = params.nombre;
    usuario.apellido = params.apellido;
    usuario.edad = params.edad;

    usuario.save((err, usuarioStored) => {
      if (err) {
        res.status(500).send({
          messsage:
            'Error!, El servidor esta teniendo problemas, intente nuevamente',
        });
      } else {
        if (usuarioStored) {
          res.status(200).send({
            messsage: 'Guardado con exito!',
            usuario: usuarioStored,
          });
        } else {
          res.status(200).send({
            messsage: 'Error al guardar usuario',
          });
        }
      }
    });
  } else {
    res.status(200).send({
      messsage: 'Error!, La cedula del usuario se encuentra vacio',
    });
  }
}

function updateUser(req, res) {
  const params = req.body;
  Usuario.findOneAndUpdate(
    { cedula: params.cedula },
    params,
    { useFindAndModify: false },
    (err, userUpdate) => {
      if (err) {
        res.status(500).send({
          messsage:
            'Error!, El servidor esta teniendo problemas, intente nuevamente',
        });
      } else {
        if (userUpdate) {
          res.status(200).send({
            messsage: 'Usuario actualizado con exito',
          });
        }
      }
    }
  );
}
function deleteUser(req, res) {
  var ced = req.body.cedula;
  Usuario.deleteOne({ cedula: ced }, (err, userDelete) => {
    if (err) {
      res.status(500).send({
        message:
          'Error!, El servidor esta teniendo problemas, intente nuevamente',
      });
    } else {
      if (userDelete) {
        res.status(200).send({
          messsage: 'Usuario eliminado correctamente',
        });
      } else {
        res.status(200).send({
          messsage: 'Error!, No se puede eliminar el registro',
        });
      }
    }
  });
}

module.exports = {
  listUsers,
  searchUser,
  createUser,
  updateUser,
  deleteUser,
};
