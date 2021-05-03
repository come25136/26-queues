import { OnQueueWaiting, Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

const sleep = (waitSeconds) => {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve()
    }, waitSeconds * 1000)
  })
}

@Processor('audio')
export class AudioProcessor {
  private readonly logger = new Logger(AudioProcessor.name);

  @Process('transcode')
  async handleTranscode(job: Job) {
    this.logger.debug('Start transcoding...');
    this.logger.debug(job.data);
    await sleep(10)
    this.logger.debug('Transcoding completed');
  }

  @OnQueueWaiting()
  onActive(jobId:number ) {
    console.log(
      `OnQueueWaiting jobId ${jobId}...`,
    );
  }
}
