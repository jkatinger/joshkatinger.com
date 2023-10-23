---
layout: page
title: Projects
permalink: /projects/
---

Here's all the stuff I've worked on.

{% for post in site.categories.projects %}
  <li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
