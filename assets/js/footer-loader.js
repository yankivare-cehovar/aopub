document.addEventListener("DOMContentLoaded", function() {
    // Calculate path to root
    // For root (index.html), path is "" or "/"
    // For subfolders (about/index.html), path is "about/"
    const path = window.location.pathname;
    const isSubfolder = path.includes('/about/') || path.includes('/publications/') || path.includes('/writiq/') || path.includes('/gradia/') || path.includes('/optik/');
    const root = isSubfolder ? '../' : './';

    const footerHtml = `
	<div class="container">
		<div class="row">
			<div class="col-lg-3">
				<div class="widget">
					<h5 class="widgetheading">Our Contact</h5>
					<address>
					<strong>AO Publishing</strong><br>
					308 Negra Arroyo Lane<br>
					3828 Piermont Dr, Albuquerque, NM.</address>
					<p>
						<i class="icon-phone"></i> - <br>
						<i class="icon-envelope-alt"></i> -
					</p>
				</div>
			</div>
			<div class="col-lg-3">
				<div class="widget">
					<h5 class="widgetheading">Hızlı Erişim</h5>
					<ul class="link-list">
						<li><a href="${root}">Ana Sayfa</a></li>
						<li><a href="${root}publications/">Yayınlarımız</a></li>
						<li><a href="${root}writiq/">Writiq</a></li>
						<li><a href="${root}gradia/">Gradia</a></li>
						<li><a href="${root}about/">Hakkımızda</a></li>
					</ul>
				</div>
			</div>
			<div class="col-lg-3">
				<div class="widget">
					<h5 class="widgetheading">Son Paylaşılanlar</h5>
					<ul class="link-list">
						<li><a href="${root}publications/">YDT Denemeleri</a></li>						
						<li><a href="${root}writiq/">Writiq</a></li>
						<li><a href="${root}gradia/">Gradia</a></li>	
					</ul>
				</div>
			</div>
			<div class="col-lg-3">
				<div class="widget">
					<h5 class="widgetheading">Son Havadisler</h5>
					<ul class="link-list">
						<li><a href="${root}writiq/">Writiq'e yeni özellikler geldi!</a></li>					</ul>
				</div>
			</div>
		</div>
	</div>
	<div id="sub-footer">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<div class="copyright">
						<p>
							<span>&copy; AO Publishing, 2026</span>
						</p>
					</div>
				</div>
				<div class="col-lg-6">
					<ul class="social-network">
						<li><a href="https://www.instagram.com/aopublishingydt/" data-placement="top" title="Instagram" aria-label="Instagram"><i class="fa fa-instagram"></i></a></li>
						<li><a href="#" data-placement="top" title="Youtube" aria-label="Youtube"><i class="fa fa-youtube"></i></a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
    `;
    const footer = document.querySelector('footer');
    if (footer && !footer.classList.contains('no-centralize')) {
        footer.innerHTML = footerHtml;
    }
});