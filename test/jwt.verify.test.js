var morxcha = require('morx-cha'),
	service = require('../services/jwt.verify');

morxcha.describeThis(service.morxspc, service, {TestName:"JWT Verify test",IsPromiseMethod:true, timeout:300000});