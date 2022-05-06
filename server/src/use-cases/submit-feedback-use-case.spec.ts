/* eslint-disable @typescript-eslint/no-empty-function */
import { SubmitFeedbackUseCase } from './submit-feedback-use-case';

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy },
);

describe('Submit feedback', () => {
  it('should be able submit a feedback', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: 'example comment',
        screenshot: 'data:image/png;base64,asdkh1k23hkjhasd',
      }),
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('shold not be able to submit feedback without type', async () => {
    await expect(
      submitFeedback.execute({
        type: '',
        comment: 'example comment',
        screenshot: 'data:image/png;base64,asdkh1k23hkjhasd',
      }),
    ).rejects.toThrow();
  });

  it('shold not be able to submit feedback without comment', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: '',
        screenshot: 'data:image/png;base64,asdkh1k23hkjhasd',
      }),
    ).rejects.toThrow();
  });

  it('shold not be able to submit feedback with an invalid screenchot', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: 'ta tudo bugado',
        screenshot: 'test.jpg',
      }),
    ).rejects.toThrow();
  });
});
