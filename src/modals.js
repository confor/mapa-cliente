function modalOpen(e) {
	e.classList.add('is-active');
}

function modalClose(e) {
	e.classList.remove('is-active');
}

function modalCloseAll() {
	document.querySelectorAll('.modal').forEach(modal => modalClose(modal));
}

document.addEventListener('DOMContentLoaded', event => {
	document.querySelectorAll('.js-modal-trigger').forEach(button => {
		const targetId = button.dataset.target;
		const modal = document.getElementById(targetId);

		button.addEventListener('click', e => {
			modalOpen(modal);
		});
	});

	document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button').forEach(close => {
		const modal = close.closest('.modal');

		close.addEventListener('click', e => {
			modalClose(modal);
		});
	});
});

document.addEventListener('keydown', event => {
	if (event.keyCode === 27) // esc
		modalCloseAll();
});

module.exports = {
	open: modalOpen,
	close: modalClose,
	closeAll: modalCloseAll
};
