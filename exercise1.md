# Language
- For the hypothetical application, I choose Python.


# Specific Tools for Lint, Build, Test
- **lint - Flake8**: 
	- popular choice due to combination of several tools (pyflakes, pycodestyle/pep8, and McCabe) in one, 
	- catches wide range of errors.
- **test - pytest**:
	- popular and powerful testing framework, 
	- known for its simplicity, extensibility, and rich plugin ecosystem,
	- handles test discovery, execution, and reporting.
- **build - setuptools**:
	- standard tool for packaging Python projects. 
	- handles creating distributions (like wheels and source distributions) that can be installed using pip.


# CI Alternatives
	- **GitLab CI**:
		- cloud-based and integrated with GitLab, offers auto DevOps and seamless integration with GitLab repositories
		- specific for GitLab hosted projects
		- preferred for projects hosted on GitLab, similar to GitHub projects  
	- **Buddy.works**:
		- cloud-based, visual UI to manage CI/CD workflows
		- less expensive and less widely used than common alternatives,
		- preferred for smaller projects and teams and for ease of use. 
	- I prefer *Buddy.works*


# Self-hosted or Cloud-based 
	- Cloud-based.
	- Information required to make the decision:
		- Is our hypothetical application is being developed on an independent code hosting service/GitHub/GitLab?
		- Are the developers well versed with handling CI/CD workflows?
 
	- Assuming above information, Self-hosted would require a lot of configuration (if not GitHub/GitLab).
	- Self-hosting could be done after a smooth initial release, if the developers are capable of handling complex CI/CD workflows.
	- Initial release of the application would probably have bugs or other issues, which would require quick debugging. 
	- Hence, less time on CI/CD management and more time on making the initial release a success.
	- Small teams working together would be more beneficial if communication is clear, especially when nobody is experienced in CI/CD workflow management.
	- Hence, visual UI and capabilities for rapid prototyping come in handy.
	- Lastly, expense is always a constraint which would be very well managed using Buddy.works