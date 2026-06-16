(function () {
  const HEALTH_SCORES = {
    healthy: { label: 'Healthy', color: 'green', score: 92 },
    at_risk: { label: 'At Risk', color: 'yellow', score: 64 },
    critical: { label: 'Critical', color: 'red', score: 38 }
  };

  function showModal() {
    client.interface.trigger('showModal', {
      title: 'TechCorp — Account Health Review',
      template: 'modal.html',
      data: {
        defaultName: 'Acme Corp',
        defaultEmail: 'csm@acmecorp.com'
      }
    }).then(function (data) {
      console.info('Modal closed', data);
    }).catch(function (error) {
      console.error('Modal error', error);
    });
  }

  function showDialog() {
    client.interface.trigger('showDialog', {
      title: 'Escalation note',
      template: 'modal.html'
    }).then(function (data) {
      console.info('Dialog closed', data);
    }).catch(function (error) {
      console.error('Dialog error', error);
    });
  }

  function renderHealthBadge(tier) {
    const info = HEALTH_SCORES[tier] || HEALTH_SCORES.at_risk;
    const badge = document.getElementById('healthBadge');
    if (badge) {
      badge.setAttribute('color', info.color);
      badge.setAttribute('value', `${info.label} · ${info.score}`);
    }
  }

  function onAppActivate() {
    renderHealthBadge('at_risk');

    const showModalBtn = document.querySelector('#showModal');
    const showDialogBtn = document.querySelector('#showDialog');
    if (showModalBtn) {
      showModalBtn.addEventListener('fwClick', showModal);
    }
    if (showDialogBtn) {
      showDialogBtn.addEventListener('fwClick', showDialog);
    }

    try {
      client.instance.resize({ height: '400px' });
    } catch (error) {
      console.error(error);
    }

    client.instance.context().then(function (context) {
      client.instance.receive(function (event) {
        const data = event.helper.getData();
        console.info(
          `${context.instance_id}: Health update from ${JSON.stringify(data.sender)}`,
          data.message
        );
        if (data.message && data.message.healthTier) {
          renderHealthBadge(data.message.healthTier);
        }
      });
    }).catch(function (error) {
      console.error(error);
    });
  }

  app.initialized().then(function (_client) {
    window.client = _client;
    client.events.on('app.activated', onAppActivate);
  }).catch(console.error);
})();
