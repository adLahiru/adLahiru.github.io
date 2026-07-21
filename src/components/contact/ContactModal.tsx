import { useCallback, useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { send } from '@emailjs/browser';
import { email as ownerEmail } from '../../data/content';
import { emailJsConfig, isEmailJsConfigured } from '../../data/emailConfig';
import { gmailComposeUrl, isValidEmail } from '../../lib/email';
import { ModalShell } from '../primitives/ModalShell';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

interface Fields {
  name: string;
  email: string;
  message: string;
}

const inputClasses =
  'w-full rounded-lg border bg-white/5 px-4 py-3 text-[15px] text-cream outline-none transition-colors placeholder:text-muted/50 focus:border-amber';

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [fields, setFields] = useState<Fields>({ name: '', email: '', message: '' });
  const [fieldErrors, setFieldErrors] = useState<Partial<Fields>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [errorCount, setErrorCount] = useState(0);
  const [successCopy, setSuccessCopy] = useState('');

  const setField = (key: keyof Fields) => (value: string) => {
    setFields((f) => ({ ...f, [key]: value }));
    setFieldErrors((e) => ({ ...e, [key]: undefined }));
  };

  const composeUrl = () =>
    gmailComposeUrl({
      to: ownerEmail,
      subject: `Portfolio contact from ${fields.name.trim()}`,
      body: `${fields.message.trim()}\n\n— ${fields.name.trim()} <${fields.email.trim()}>`,
    });

  const handleClose = useCallback(() => {
    onClose();
    if (status === 'success') {
      setFields({ name: '', email: '', message: '' });
      setStatus('idle');
    } else if (status === 'error') {
      setStatus('idle');
    }
  }, [onClose, status]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const errors: Partial<Fields> = {};
    if (!fields.name.trim()) errors.name = 'Please add your name';
    if (!isValidEmail(fields.email)) errors.email = 'Please add a valid email';
    if (fields.message.trim().length < 10) errors.message = 'A few more words, please (10+ characters)';
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    if (!isEmailJsConfigured()) {
      // Must stay synchronous inside the submit handler or popup blockers eat it.
      window.open(composeUrl(), '_blank', 'noopener');
      setSuccessCopy('Your draft opened in Gmail — just hit send.');
      setStatus('success');
      return;
    }

    setStatus('sending');
    send(
      emailJsConfig.serviceId,
      emailJsConfig.templateId,
      { name: fields.name.trim(), email: fields.email.trim(), message: fields.message.trim() },
      { publicKey: emailJsConfig.publicKey },
    )
      .then(() => {
        setSuccessCopy("Message sent — I'll get back to you soon.");
        setStatus('success');
      })
      .catch(() => {
        setErrorCount((c) => c + 1);
        setStatus('error');
      });
  };

  return (
    <ModalShell
      isOpen={isOpen}
      onClose={handleClose}
      label="Contact form"
      panelClassName="w-[min(92vw,520px)] rounded-2xl border border-white/10 bg-card-dark p-7 sm:p-8"
    >
      <AnimatePresence mode="wait" initial={false}>
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-5 py-8 text-center"
          >
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true">
              <motion.circle
                cx="36"
                cy="36"
                r="33"
                stroke="var(--color-amber)"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
              <motion.path
                d="M22 37.5L31.5 47L50 27"
                stroke="var(--color-amber)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.35 }}
              />
            </svg>
            <div className="font-display text-2xl font-bold text-cream">Thank you!</div>
            <p className="max-w-[36ch] text-[15px] leading-[1.6] text-muted">{successCopy}</p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-2 rounded-full bg-amber px-8 py-3 font-semibold text-charcoal transition-colors hover:bg-amber-deep"
            >
              Close
            </button>
          </motion.div>
        ) : (
          <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="mb-6 flex flex-col gap-1.5">
              <div className="font-mono text-[11px] tracking-[0.18em] text-amber">GET IN TOUCH</div>
              <h3 className="font-display text-[26px] font-bold leading-[1.1] text-cream sm:text-[30px]">
                Let's build something<span className="text-amber">.</span>
              </h3>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              animate={errorCount > 0 && status === 'error' ? { x: [0, -8, 8, -6, 6, -3, 3, 0] } : {}}
              transition={{ duration: 0.45 }}
              className="flex flex-col gap-4"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                  <span className="font-mono text-[11px] tracking-[0.14em] text-muted">NAME</span>
                  <input
                    type="text"
                    value={fields.name}
                    onChange={(e) => setField('name')(e.target.value)}
                    placeholder="Your name"
                    autoComplete="name"
                    className={`${inputClasses} ${
                      fieldErrors.name ? 'border-red-400/70' : 'border-white/10'
                    }`}
                  />
                  {fieldErrors.name && (
                    <span className="text-xs text-red-400">{fieldErrors.name}</span>
                  )}
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="font-mono text-[11px] tracking-[0.14em] text-muted">EMAIL</span>
                  <input
                    type="email"
                    value={fields.email}
                    onChange={(e) => setField('email')(e.target.value)}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className={`${inputClasses} ${
                      fieldErrors.email ? 'border-red-400/70' : 'border-white/10'
                    }`}
                  />
                  {fieldErrors.email && (
                    <span className="text-xs text-red-400">{fieldErrors.email}</span>
                  )}
                </label>
              </div>
              <label className="flex flex-col gap-1.5">
                <span className="font-mono text-[11px] tracking-[0.14em] text-muted">MESSAGE</span>
                <textarea
                  rows={5}
                  value={fields.message}
                  onChange={(e) => setField('message')(e.target.value)}
                  placeholder="What are we building?"
                  className={`${inputClasses} resize-none ${
                    fieldErrors.message ? 'border-red-400/70' : 'border-white/10'
                  }`}
                />
                {fieldErrors.message && (
                  <span className="text-xs text-red-400">{fieldErrors.message}</span>
                )}
              </label>

              {status === 'error' && (
                <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300">
                  <span>Couldn't send — try again?</span>
                  <a
                    href={composeUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-amber no-underline"
                  >
                    Open in Gmail instead ↗
                  </a>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-1 inline-flex items-center justify-center gap-2.5 rounded-full bg-amber px-8 py-3.5 font-semibold text-charcoal transition-colors hover:bg-amber-deep disabled:opacity-70"
              >
                {status === 'sending' ? (
                  <>
                    <span className="size-4 animate-spin rounded-full border-2 border-charcoal/30 border-t-charcoal" />
                    Sending…
                  </>
                ) : status === 'error' ? (
                  'Retry'
                ) : (
                  'Send message'
                )}
              </button>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </ModalShell>
  );
}
