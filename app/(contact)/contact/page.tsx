"use client";

import { useState } from 'react'
import Image from 'next/image'
import Avatar from '@/public/images/join-avatar.jpg'

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export default function Contact() {
  const [showDates, setShowDates] = useState<boolean>(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Get reCAPTCHA token
      const token = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
        { action: 'submit_contact_form' }
      )

      const form = e.target
      if (!(form instanceof HTMLFormElement)) {
        console.error('Le formulaire soumis n\'est pas un HTMLFormElement.')
        return
      }

      const formData = new FormData(form)
      const data = {
        email: formData.get('email'),
        name: formData.get('name'),
        phone: formData.get('phone'),
        requestType: formData.get('requestType'),
        startDate: formData.get('startDate'),
        endDate: formData.get('endDate'),
        message: formData.get('message'),
        recaptchaToken: token,
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Failed to submit')

      setSubmitStatus('success')
      form.reset()
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Page header */}
      <div className="max-w-3xl mx-auto text-center pb-12">
        <div className="relative inline-flex mb-4">
          <svg className="absolute right-full bottom-full -ml-1 -mb-2" width="12" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              className="fill-blue-300"
              d="M4.868 1.243c-.23-.113-.128-.42.16-.85.091-.137.465-.41.553-.392.174.032.346.068.489.128.09.034.984.994 1.294 1.324.307.312.541.673.764 1.045L8.8 3.63c.223.378.441.757.65 1.143.07.128.129.264.174.406l.04.145c.141.575.384 1.09.646 1.595l.193.37a.33.33 0 0 0 .143.148c.197.097.929 1.746.961 1.989.11.59.129 1.223.224 1.817l.022.1a.228.228 0 0 1-.014.166c-.118.25-.03.404.013.58.062.243.116.49.145.747.015.128-.03.28-.051.423-.023.132-.254.177-.294.152-.11-.068-.176.062-.26.113l-.064.036a.158.158 0 0 1-.03.011c-.036.004-.97-.928-1.157-1.142l-.026-.03-.614-.906c-.344-.435-.589-.945-.664-1.035-.07-.101-.073-.235-.092-.359-.008-.063-.854-1.444-.881-1.5-.12-.314-.34-.574-.301-.975.007-.078-.031-.134-.063-.193-.27-.503-.449-1.058-.66-1.597-.106-.275-.265-.52-.394-.78-.023-.048-.021-.11-.035-.164l-.032-.135a.34.34 0 0 0-.025-.063c-.34-.597-.58-1.263-.996-1.81-.09-.13-.292-.906-.415-1.044-.063-.078.019-.551-.075-.595ZM.123 15.127c-.222-.082-.128-.38.156-.802.09-.135.455-.421.54-.418.167.009.328.02.464.052.08.025.915.736 1.227.949.295.213.538.47.767.74.474.541.974 1.06 1.47 1.583.11.117.2.25.278.401.225.455.548.817.892 1.155l.229.221a.245.245 0 0 0 .16.07c.19.011 1.22 1.105 1.312 1.293.24.45.417.974.658 1.432.03.068.096.107.079.221-.039.26.08.352.167.48.121.179.236.364.335.566.048.1.051.25.07.381.017.119-.178.26-.219.256-.117-.01-.141.13-.202.212a.484.484 0 0 1-.07.08c-.03.021-1.121-.354-1.355-.458l-.035-.017-.802-.512c-.43-.233-.789-.573-.88-.625-.089-.057-.126-.174-.178-.274l-1.18-.987c-.188-.232-.45-.392-.5-.762-.011-.073-.059-.111-.1-.152-.36-.365-.638-.81-.933-1.238-.15-.218-.335-.405-.501-.608-.03-.037-.038-.093-.06-.139l-.049-.117a.23.23 0 0 0-.033-.05c-.406-.47-.715-1.031-1.156-1.472-.104-.1-.343-.8-.463-.913-.069-.063 0-.516-.088-.548Z"
            />
          </svg>
          <Image className="rounded-full" src={Avatar} width={48} height={48} alt="Avatar 01" />
        </div>
        <h1 className="h2 font-cabinet-grotesk">Une question ? Une réservation ? <br /> Dites moi tout.</h1>
      </div>
      {/* Form */}
      <div className="max-w-sm mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap mb-4">
            <div className="w-full">
              <label className="block text-gray-500 text-sm font-medium mb-1" htmlFor="email">
                Votre Email.
              </label>
              <input id="email" name="email" type="email" className="form-input w-full text-gray-800" required />
            </div>
          </div>
          <div className="flex flex-wrap mb-4">
            <div className="w-full">
              <label className="block text-gray-500 text-sm font-medium mb-1" htmlFor="name">
                Votre nom
              </label>
              <input id="name" name="name" type="text" className="form-input w-full text-gray-800" required />
            </div>
          </div>
          <div className="flex flex-wrap mb-4">
            <div className="w-full">
              <label className="block text-gray-500 text-sm font-medium mb-1" htmlFor="phone">
                Votre téléphone
              </label>
              <input id="phone" name="phone" type="phone" className="form-input w-full text-gray-800" required />
            </div>
          </div>
            <div className="flex flex-wrap mb-4">
            <div className="w-full">
              <label className="block text-gray-500 text-sm font-medium mb-1" htmlFor="username">
              Objet de votre demande
              </label>
              <div className="flex flex-row space-x-4">
              <label className="flex items-center">
                <input
                type="radio"
                name="requestType"
                value="question"
                className="form-radio text-blue-500"
                onChange={() => setShowDates(false)}
                />
                <span className="ml-2 text-gray-500">Poser une Question</span>
              </label>
              <label className="flex items-center">
                <input
                type="radio"
                name="requestType"
                value="reservation"
                className="form-radio text-blue-500"
                defaultChecked
                onChange={() => setShowDates(true)}
                />
                <span className="ml-2 text-gray-500">Faire une Réservation</span>
              </label>
              </div>
            </div>
            </div>
            {showDates && (
            <div className="flex flex-wrap mb-4">
              <div className="w-full">
              <label className="block text-gray-500 text-sm font-medium mb-1" htmlFor="startDate">
                Date de début de réservation souhaitée:
              </label>
              <input
                id="startDate"
                name="startDate"
                type="date"
                className="form-input w-full text-gray-800"
                required={showDates}
              />
              </div>
              <div className="w-full mt-4">
              <label className="block text-gray-500 text-sm font-medium mb-1" htmlFor="endDate">
                Date de fin de réservation souhaitée:
              </label>
              <input
                id="endDate"
                name="endDate"
                type="date"
                className="form-input w-full text-gray-800"
                required={showDates}
              />
              </div>
            </div>
            )}
          <div className="flex flex-wrap mb-4">
            <div className="w-full">
              <label className="block text-gray-500 text-sm font-medium mb-1" htmlFor="message">
                Votre message
              </label>
              <textarea id="message" name="message" className="form-input w-full text-gray-800" required />
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between mt-6">
            <div></div>
            <div className="ml-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-sm text-white bg-blue-500 hover:bg-blue-600 shadow-xs disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer votre demande'}
              </button>
            </div>
          </div>
          {submitStatus === 'success' && (
            <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
              Votre message a été envoyé avec succès !
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">
              Une erreur est survenue. Veuillez réessayer.
            </div>
          )}
          <div className="mt-5">
            <label className="flex items-start">
              <input type="checkbox" className="form-checkbox mt-0.5" defaultChecked required />
              <span className="text-sm text-gray-500 ml-3">
                J'accepte d'être recontacté, j'ai lu la{' '}
                <a className="underline hover:decoration-blue-500 underline-offset-2 hover:underline" href="#0">
                politique RGPD
                </a>{' '}
                .
              </span>
            </label>
          </div>
        </form>
      </div>
    </>
  )
}
