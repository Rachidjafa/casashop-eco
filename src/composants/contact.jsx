import React from 'react'

export default function Contact() {
  return (
	<div class="container" id='conatct-container'>
		<div class="contact-box">
			<div class="left"></div>
			<div class="right">
				<h2 id='h2-contact'>Contact Us</h2>
				<input type="text" class="field" placeholder="Name" />
				<input type="text" class="field" placeholder="Email" />
				<textarea placeholder="Message" class="field"></textarea>
				<button class="btn" id='btn-contatct'>Send</button>
			</div>
		</div>
	</div>
  )
}
