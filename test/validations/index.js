import Joi from 'joi'

export const authSuccessSchema = {
  success: Joi.boolean().invalid(false).required(),
  timestamp: Joi.date().required(),
  payload: {
    token: Joi.string().required(),
  },
}

export const userGetSuccessSchema = {
  success: Joi.boolean().invalid(false).required(),
  timestamp: Joi.date().required(),
  payload: Joi.object().keys({
    user: Joi.object().keys({
      id: Joi.number().required(),
      email: Joi.string().email().required(),
      active: Joi.boolean().required(),
      extra_data: Joi.string().allow(null).allow(''),
      created_at: Joi.date().required(),
      updated_at: Joi.date().required(),
      bots: Joi.array().items(
        Joi.object().keys({
          id: Joi.number().required(),
          user_id: Joi.number().required(),
          active: Joi.boolean().required(),
          name: Joi.string().required(),
          phone_number: Joi.string().required(),
          extra_data: Joi.string().allow(null).allow(''),
          created_at: Joi.date().required(),
          updated_at: Joi.date().required(),
        })
      ),
    }),
  }),
}

export const oauthSuccessSchema = {
  success: Joi.boolean().invalid(false).required(),
  timestamp: Joi.date().required(),
  payload: Joi.object().keys({
    id: Joi.number().required(),
    bot_id: Joi.number().required(),
    type: Joi.string().required(),
    access_token: Joi.string().token().required(),
    refresh_token: Joi.string().token().allow('').allow(null),
    expires_in: Joi.number().allow(null),
    active: Joi.boolean().required(),
    extra_data: Joi.string().allow('').allow(null),
    created_at: Joi.date().required(),
    updated_at: Joi.date().required(),
  }),
}

export const botGetSuccessSchema = {
  success: Joi.boolean().invalid(false).required(),
  timestamp: Joi.date().required(),
  payload: Joi.object().keys({
    bot: Joi.object().keys({
      id: Joi.number().required(),
      user_id: Joi.number().required(),
      active: Joi.boolean().required(),
      name: Joi.string().required(),
      phone_number: Joi.string().required(),
      extra_data: Joi.string().allow(null).allow(''),
      created_at: Joi.date().required(),
      updated_at: Joi.date().required(),
      integrations: Joi.array(),
      emails: Joi.array(),
    }),
  }),
}

export const botsGetSuccessSchema = {
  success: Joi.boolean().invalid(false).required(),
  timestamp: Joi.date().required(),
  payload: Joi.object().keys({
    bots: Joi.array().items(
      Joi.object().keys({
        id: Joi.number().required(),
        user_id: Joi.number().required(),
        active: Joi.boolean().required(),
        name: Joi.string().required(),
        phone_number: Joi.string().required(),
        extra_data: Joi.string().allow(null).allow(''),
        created_at: Joi.date().required(),
        updated_at: Joi.date().required(),
        integrations: Joi.array(),
        emails: Joi.array(),
      })
    ),
  }),
}

export const integrationGetSuccessSchema = {
  success: Joi.boolean().invalid(false).required(),
  timestamp: Joi.date().required(),
  payload: Joi.object().keys({
    integration: Joi.object().keys({
      id: Joi.number().required(),
      bot_id: Joi.number().required(),
      type: Joi.string().required(),
      active: Joi.boolean().required(),
      access_token: Joi.string().required(),
      expires_in: Joi.number(),
      refresh_token: Joi.string(),
      extra_data: Joi.string().allow(null).allow(''),
      created_at: Joi.date().required(),
      updated_at: Joi.date().required(),
    }),
  }),
}

export const integrationsGetSuccessSchema = {
  success: Joi.boolean().invalid(false).required(),
  timestamp: Joi.date().required(),
  payload: Joi.object().keys({
    integrations: Joi.array().items(
      Joi.object().keys({
        id: Joi.number().required(),
        bot_id: Joi.number().required(),
        active: Joi.boolean().required(),
        type: Joi.string().required(),
        access_token: Joi.string().required(),
        expires_in: Joi.number(),
        refresh_token: Joi.string(),
        extra_data: Joi.string().allow(null).allow(''),
        created_at: Joi.date().required(),
        updated_at: Joi.date().required(),
      })
    ),
  }),
}

export const emailGetSuccessSchema = {
  success: Joi.boolean().invalid(false).required(),
  timestamp: Joi.date().required(),
  payload: Joi.object().keys({
    email: Joi.object().keys({
      id: Joi.number().required(),
      bot_id: Joi.number().required(),
      email: Joi.string().email().required(),
      active: Joi.boolean().required(),
      extra_data: Joi.string().allow(null).allow(''),
      created_at: Joi.date().required(),
      updated_at: Joi.date().required(),
    }),
  }),
}

export const emailsGetSuccessSchema = {
  success: Joi.boolean().invalid(false).required(),
  timestamp: Joi.date().required(),
  payload: Joi.object().keys({
    emails: Joi.array().items(
      Joi.object().keys({
        id: Joi.number().required(),
        bot_id: Joi.number().required(),
        email: Joi.string().email().required(),
        active: Joi.boolean().required(),
        extra_data: Joi.string().allow(null).allow(''),
        created_at: Joi.date().required(),
        updated_at: Joi.date().required(),
      })
    ),
  }),
}
