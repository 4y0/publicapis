var morxcha = require('morx-cha'),
	service = require('../services/jwt.sign');

morxcha.describeThis(service.morxspc, service, {TestName:"JWT Sign test",IsPromiseMethod:true, timeout:300000});