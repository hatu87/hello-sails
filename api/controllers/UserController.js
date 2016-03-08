/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
    /**
     * `UserController.index()`
     */
    index: function(req, res) {
        return res.json({
            todo: 'index() is not implemented yet!'
        });
    },
    /**
     * `UserController.register()`
     */
    register: function(req, res) {
        var options = {
            email: req.param('email'),
            name: req.param('name'),
            password: req.param('password')
        };
        User.register(options, function(error, result) {
            if(error != null)
              res.json(error);
            else
              res.json(result);
        });
    }
};