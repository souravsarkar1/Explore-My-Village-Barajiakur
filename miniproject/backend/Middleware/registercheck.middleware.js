const registerCheck = (req, res, next) => {
  const { name, pass, email, age } = req.body;

  if (!name || !pass || !email || !age) {
    return res.status(400).json({ error: 'Fill all the required fields' });
  }

  if (pass.length < 8) {
    return res.status(400).json({ error: 'Password should be at least 8 characters long' });
  }

  if (!/[A-Z]/.test(pass) || !/\d/.test(pass) || !/[!@#$%^&*]/.test(pass)) {
    return res.status(400).json({
      error: 'Password should contain at least one uppercase character, one number, and one special character',
    });
  }

  next();
};

module.exports = {registerCheck}