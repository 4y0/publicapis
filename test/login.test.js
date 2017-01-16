var morxcha = require('morx-cha'),
	service = require('../services/login');

morxcha.describeThis(service.morxspc, service, {TestName:"Login test",IsPromiseMethod:true, timeout:300000});