const supabaseClient = require('../config/supabase');
const passport = require('passport');
const validator = require('validator');
const bcrypt = require("bcrypt");
const save = require('save');

exports.postSignup = async (req, res, next) => {
  try {
    // const validationErrors = []
    // if (!validator.isLength(req.body.password, { min: 8 })) validationErrors.push({ msg: 'Password must be at least 8 characters long' });
    // if (req.body.password !== req.body.confirmPassword) validationErrors.push({ msg: 'Passwords do not match' });

    // if (validationErrors.length) {
    //   req.flash('errors', validationErrors);
    //   return res.redirect('/');
    // }

    const { data, error } = await supabaseClient
      .from('users')
      .insert([
        {
          username: `${req.body.username}`,
          password: `${bcrypt.hashSync(req.body.password, 8)}`
        },
      ])
      .select();
      if (error) {
        console.error(error);
        return next(error);
      }
    return res.json(data);
  } catch(err) {
    console.error(err, 'line 53');
  }
}
