def user_session_context_processor(request):
	if request.user.is_authenticated:
		user_session = request.session['user_session']
	else:
		user_session = None

	return {
		'user_session': user_session,
	}
