//Encerra a sessão do usuário ao fazer logout
export async function logout(req,res) {
    if(req.session.sessionId){
        req.session.destroy(err => {
        return res.render('login',{msg:''})
    });
}
}