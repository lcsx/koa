class HomeCtl {
	index(ctx){
		ctx.body = '<h1>这是主页</h1>'
	}
	add(ctx){
		ctx.verifyParams({
			name:{type:'string',required:true/*默认true*/},
			age:{type:'number',required:false}
		});
		ctx.body = 'lcs666'
	}
}

module.exports = new HomeCtl();