const Docker = require('dockerode');
const cron = require('node-cron');
const docker = new Docker({ socketPath: '/var/run/docker.sock' });

// Lista de contenedores en orden específico
const order = ['container_name1', 'container_name2'];

async function restartContainers() {
  for (const containerName of order) {
    const container = docker.getContainer(containerName);
    await container.stop();
    await container.start();
    console.log(`Reiniciado: ${containerName}`);
  }
}

// Reinicio a las 5 de la manhana
cron.schedule('0 5 * * *', () => {
  console.log('Reiniciando contenedores...');
  restartContainers().catch(err => console.error(err));
});

console.log('App iniciada y cron job programado.');
